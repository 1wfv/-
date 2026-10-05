const http = require('node:http');
const fs = require('node:fs/promises');
const path = require('node:path');
const crypto = require('node:crypto');

const ROOT = __dirname;
const DATA_DIR = process.env.DATA_DIR || path.join(ROOT, 'data');
const ORDERS_FILE = path.join(DATA_DIR, 'orders.json');
const CONTENT_FILE = path.join(DATA_DIR, 'site-content.json');
const PORT = Number(process.env.PORT || 3000);
const sessions = new Map();
const loginAttempts = new Map();
let writes = Promise.resolve();

const mimeTypes = {
  '.html': 'text/html; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.js': 'text/javascript; charset=utf-8',
  '.svg': 'image/svg+xml',
  '.json': 'application/json; charset=utf-8',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.webp': 'image/webp',
  '.ico': 'image/x-icon'
};

function sendJson(response, status, value, extraHeaders = {}) {
  response.writeHead(status, {
    'Content-Type': 'application/json; charset=utf-8',
    'Cache-Control': 'no-store',
    'X-Content-Type-Options': 'nosniff',
    ...extraHeaders
  });
  response.end(JSON.stringify(value));
}

function readJson(request, maxBytes = 20_000) {
  return new Promise((resolve, reject) => {
    let content = '';
    let size = 0;
    request.on('data', (chunk) => {
      size += chunk.length;
      if (size > maxBytes) {
        reject(Object.assign(new Error('الطلب كبير جدًا.'), { status: 413 }));
        request.destroy();
        return;
      }
      content += chunk;
    });
    request.on('end', () => {
      try { resolve(JSON.parse(content || '{}')); }
      catch { reject(Object.assign(new Error('بيانات الطلب غير صالحة.'), { status: 400 })); }
    });
    request.on('error', reject);
  });
}

async function readOrders() {
  try { return JSON.parse(await fs.readFile(ORDERS_FILE, 'utf8')); }
  catch (error) {
    if (error.code === 'ENOENT') return [];
    throw error;
  }
}

async function readContent() {
  try { return JSON.parse(await fs.readFile(CONTENT_FILE, 'utf8')); }
  catch (error) { if (error.code === 'ENOENT') return {}; throw error; }
}

function updateOrders(transform) {
  const task = writes.then(async () => {
    const current = await readOrders();
    const next = transform(current);
    await fs.mkdir(DATA_DIR, { recursive: true });
    const temporaryFile = `${ORDERS_FILE}.${process.pid}.tmp`;
    await fs.writeFile(temporaryFile, JSON.stringify(next, null, 2), { mode: 0o600 });
    await fs.rename(temporaryFile, ORDERS_FILE);
    return next;
  });
  writes = task.catch(() => {});
  return task;
}

function cookieValue(request, key) {
  const cookieHeader = request.headers.cookie || '';
  for (const part of cookieHeader.split(';')) {
    const [name, ...value] = part.trim().split('=');
    if (name === key) return value.join('=');
  }
  return '';
}

function sessionId(request) {
  const token = cookieValue(request, 'ww_admin');
  const expiresAt = sessions.get(token);
  if (!token || !expiresAt) return '';
  if (expiresAt < Date.now()) {
    sessions.delete(token);
    return '';
  }
  return token;
}

function cookieSettings(request, clear = false) {
  const parts = ['Path=/', 'HttpOnly', 'SameSite=Strict'];
  if (process.env.COOKIE_SECURE === 'true' || request.socket.encrypted) parts.push('Secure');
  parts.push(clear ? 'Max-Age=0' : 'Max-Age=28800');
  return `ww_admin=${clear ? '' : 'set'}; ${parts.join('; ')}`;
}

function safeCompare(left, right) {
  const a = Buffer.from(String(left));
  const b = Buffer.from(String(right));
  return a.length === b.length && crypto.timingSafeEqual(a, b);
}

function isAdmin(request) {
  return Boolean(sessionId(request));
}

function cleanText(value, maxLength) {
  return typeof value === 'string' ? value.trim().slice(0, maxLength) : '';
}

function shortRequestNumber(id) {
  return `WW-${String(id).replaceAll('-', '').slice(0, 10).toUpperCase()}`;
}

function validateOrder(body) {
  const order = {
    id: crypto.randomUUID(),
    name: cleanText(body.name, 160),
    email: cleanText(body.email, 254).toLowerCase(),
    phone: cleanText(body.phone, 30)
      .replace(/[٠-٩]/g, (digit) => String(digit.charCodeAt(0) - 0x0660))
      .replace(/[۰-۹]/g, (digit) => String(digit.charCodeAt(0) - 0x06f0)),
    service: cleanText(body.service, 80),
    message: cleanText(body.message, 3000),
    termsAccepted: body.termsAccepted === 'accepted',
    termsVersion: '2026-10-05-v3',
    status: 'new',
    createdAt: new Date().toISOString()
  };
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const phonePattern = /^[+0-9 ()-]{8,30}$/;
  const allowedServices = new Set(['إنشاء نطاق', 'إنشاء موقع', 'بريد أعمال', 'جميع الخدمات', 'تذكير بتجديد نطاق', 'طلب موعد استشارة', 'طلب اتصال', 'تقييم خدمة', 'طلب عرض سعر', 'صيانة موقع']);
  if (order.name.length < 2 || !emailPattern.test(order.email) || !phonePattern.test(order.phone) || !allowedServices.has(order.service) || !order.termsAccepted) {
    return null;
  }
  return order;
}

async function serveStatic(request, response, pathname) {
  const aliases = { '/': '/index.html', '/admin': '/admin.html', '/admin/': '/admin.html', '/en': '/en/index.html', '/en/': '/en/index.html' };
  const targetPath = aliases[pathname] || pathname;
  let decodedPath;
  try { decodedPath = decodeURIComponent(targetPath); }
  catch { response.writeHead(400).end('Bad Request'); return; }
  if (decodedPath === '/data' || decodedPath.startsWith('/data/')) {
    response.writeHead(404, { 'Content-Type': 'text/plain; charset=utf-8' }).end('الصفحة غير موجودة.');
    return;
  }
  const filePath = path.resolve(ROOT, `.${decodedPath}`);
  if (!filePath.startsWith(`${ROOT}${path.sep}`)) {
    response.writeHead(403).end('Forbidden');
    return;
  }
  try {
    const contents = await fs.readFile(filePath);
    response.writeHead(200, {
      'Content-Type': mimeTypes[path.extname(filePath).toLowerCase()] || 'application/octet-stream',
      'X-Content-Type-Options': 'nosniff',
      'Referrer-Policy': 'strict-origin-when-cross-origin',
      'Cache-Control': path.basename(filePath) === 'index.html' ? 'no-cache' : 'public, max-age=300'
    });
    response.end(contents);
  } catch {
    response.writeHead(404, { 'Content-Type': 'text/plain; charset=utf-8' }).end('الصفحة غير موجودة.');
  }
}

const server = http.createServer(async (request, response) => {
  const url = new URL(request.url, `http://${request.headers.host || 'localhost'}`);
  const pathname = url.pathname;
  try {
    if (pathname === '/health' && request.method === 'GET') {
      return sendJson(response, 200, { ok: true });
    }

    if (pathname === '/api/status' && request.method === 'GET') {
      return sendJson(response, 200, { status: 'operational', checkedAt: new Date().toISOString(), services: { website: 'operational', requests: 'operational', emailNotifications: 'not-configured', payments: 'not-configured', secureFilePortal: 'not-configured' } });
    }

    if (pathname === '/api/site-content' && request.method === 'GET') return sendJson(response, 200, { content: await readContent() });

    if (pathname === '/api/site-content' && request.method === 'PUT') {
      if (request.headers.origin !== `http://${request.headers.host}` && request.headers.origin !== `https://${request.headers.host}`) return sendJson(response, 403, { error: 'مصدر الطلب غير صالح.' });
      if (!isAdmin(request)) return sendJson(response, 401, { error: 'سجل الدخول أولًا.' });
      const body = await readJson(request); const incoming = body.content || {};
      const keys = ['announcementArTitle','announcementArBody','announcementEnTitle','announcementEnBody','faqArQuestion','faqArAnswer','faqEnQuestion','faqEnAnswer'];
      const content = Object.fromEntries(keys.map((key) => [key, cleanText(incoming[key], key.toLowerCase().includes('title') || key.toLowerCase().includes('question') ? 220 : 1000)]));
      content.announcementActive = incoming.announcementActive === true;
      const priceKeys = ['domainSaNew','domainSaRenew','domainSaRecovery','domainSaDirect','domainSaTransfer','domainGlobalNew','domainGlobalRenew','domainGlobalTransfer','googleStarter','googleStandard','googlePlus','microsoftBasic','microsoftStandard','microsoftPremium','microsoftCopilot','websitePremium'];
      content.prices = {};
      for (const key of priceKeys) { const value = Number(incoming.prices?.[key]); if (!Number.isInteger(value) || value < 0 || value > 100000) return sendJson(response, 400, { error: `قيمة سعر غير صالحة: ${key}` }); content.prices[key] = value; }
      await fs.mkdir(DATA_DIR, { recursive: true }); await fs.writeFile(CONTENT_FILE, JSON.stringify(content, null, 2), { mode: 0o600 });
      return sendJson(response, 200, { ok: true });
    }

    if (pathname === '/api/orders' && request.method === 'POST') {
      const body = await readJson(request);
      if (body.termsAccepted !== 'accepted') return sendJson(response, 400, { error: 'يرجى الموافقة على الشروط والأحكام وسياسة الإلغاء والاسترجاع قبل إرسال الطلب.' });
      const order = validateOrder(body);
      if (!order) return sendJson(response, 400, { error: 'يرجى التحقق من الاسم والبريد والجوال والخدمة.' });
      await updateOrders((orders) => [order, ...orders]);
      return sendJson(response, 201, { ok: true, orderId: order.id, requestNumber: shortRequestNumber(order.id), message: 'تم استلام طلبك بنجاح.' });
    }

    if (pathname === '/api/session' && request.method === 'POST') {
      const configuredPassword = process.env.ADMIN_PASSWORD;
      if (!configuredPassword || configuredPassword.length < 12) {
        return sendJson(response, 503, { error: 'لم تُضبط كلمة مرور لوحة الإدارة. أوقف الخادم واضبط ADMIN_PASSWORD بطول 12 حرفًا على الأقل.' });
      }
      const address = request.socket.remoteAddress || 'unknown';
      const attempt = loginAttempts.get(address) || { count: 0, since: Date.now() };
      if (Date.now() - attempt.since > 15 * 60 * 1000) { attempt.count = 0; attempt.since = Date.now(); }
      if (attempt.count >= 8) return sendJson(response, 429, { error: 'محاولات كثيرة. حاول بعد 15 دقيقة.' });
      const body = await readJson(request, 4_000);
      if (!safeCompare(body.password || '', configuredPassword)) {
        attempt.count += 1;
        loginAttempts.set(address, attempt);
        return sendJson(response, 401, { error: 'كلمة المرور غير صحيحة.' });
      }
      loginAttempts.delete(address);
      const token = crypto.randomBytes(32).toString('hex');
      sessions.set(token, Date.now() + 8 * 60 * 60 * 1000);
      return sendJson(response, 200, { ok: true }, { 'Set-Cookie': `ww_admin=${token}; ${cookieSettings(request).split('; ').slice(1).join('; ')}` });
    }

    if (pathname === '/api/session' && request.method === 'DELETE') {
      const token = sessionId(request);
      if (token) sessions.delete(token);
      return sendJson(response, 200, { ok: true }, { 'Set-Cookie': cookieSettings(request, true) });
    }

    if (pathname === '/api/orders' && request.method === 'GET') {
      if (!isAdmin(request)) return sendJson(response, 401, { error: 'سجل الدخول لعرض الطلبات.' });
      return sendJson(response, 200, { orders: (await readOrders()).map((order) => ({ ...order, requestNumber: shortRequestNumber(order.id) })) });
    }

    const trackingMatch = pathname.match(/^\/api\/order-status\/([^/]+)$/i);
    if (trackingMatch && request.method === 'GET') {
      const lookup = decodeURIComponent(trackingMatch[1]).trim();
      const uuid = /^[0-9a-f-]{36}$/i.test(lookup);
      const shortCode = /^WW-([0-9A-F]{10})$/i.exec(lookup);
      if (!uuid && !shortCode) return sendJson(response, 400, { error: 'Invalid request number format.' });
      const order = (await readOrders()).find((item) => uuid
        ? item.id === lookup
        : item.id.replaceAll('-', '').slice(0, 10).toUpperCase() === shortCode[1].toUpperCase());
      if (!order) return sendJson(response, 404, { error: 'لم نعثر على طلب بهذا الرقم.' });
      return sendJson(response, 200, { order: { id: order.id, requestNumber: shortRequestNumber(order.id), service: order.service, status: order.status || 'new', createdAt: order.createdAt } });
    }

    const statusMatch = pathname.match(/^\/api\/orders\/([0-9a-f-]{36})\/status$/i);
    if (statusMatch && request.method === 'PATCH') {
      if (!isAdmin(request)) return sendJson(response, 401, { error: 'سجل الدخول أولًا.' });
      const body = await readJson(request, 4_000);
      const allowed = new Set(['new', 'reviewing', 'awaiting_customer', 'in_progress', 'completed', 'cancelled']);
      if (!allowed.has(body.status)) return sendJson(response, 400, { error: 'حالة الطلب غير صالحة.' });
      let found = false;
      await updateOrders((orders) => orders.map((order) => {
        if (order.id !== statusMatch[1]) return order;
        found = true;
        return { ...order, status: body.status };
      }));
      if (!found) return sendJson(response, 404, { error: 'الطلب غير موجود.' });
      return sendJson(response, 200, { ok: true });
    }

    if (pathname.startsWith('/api/orders/') && request.method === 'DELETE') {
      if (!isAdmin(request)) return sendJson(response, 401, { error: 'سجل الدخول أولًا.' });
      const id = decodeURIComponent(pathname.slice('/api/orders/'.length));
      let found = false;
      await updateOrders((orders) => orders.filter((order) => {
        if (order.id === id) { found = true; return false; }
        return true;
      }));
      if (!found) return sendJson(response, 404, { error: 'الطلب غير موجود.' });
      return sendJson(response, 200, { ok: true });
    }

    if (pathname.startsWith('/api/')) return sendJson(response, 404, { error: 'المسار غير موجود.' });
    return await serveStatic(request, response, pathname);
  } catch (error) {
    if (!response.headersSent) sendJson(response, error.status || 500, { error: error.status ? error.message : 'حدث خطأ في الخادم.' });
    else response.destroy();
  }
});

server.listen(PORT, '0.0.0.0', () => {
  console.log(`WW is running at http://localhost:${PORT}`);
  console.log('The private dashboard is at /admin. Set ADMIN_PASSWORD before logging in.');
});

