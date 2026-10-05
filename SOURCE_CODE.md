# حزمة أكواد موقع WW



> ملف مولّد تلقائيًا من ملفات المشروع. عدّل الملفات الأصلية، وسيُحدّث هذا الملف عند حفظ التغييرات إذا كانت مهمة المراقبة تعمل.



آخر تحديث: 2026-10-05T02:07:44.625Z



## admin.css

```css
@import url('https://fonts.googleapis.com/css2?family=Alexandria:wght@300;400;500;600;700;800&display=swap');
:root{color-scheme:dark;--bg:#111315;--panel:#1b1e20;--panel-soft:#202426;--line:#33383a;--text:#f1f1eb;--muted:#9da29e;--accent:#ccd5b6;--font:'Alexandria','Tahoma',sans-serif}*{box-sizing:border-box}body{margin:0;min-height:100vh;background:radial-gradient(ellipse at 50% -10%,#27302d 0%,transparent 42%),var(--bg);color:var(--text);font-family:var(--font);font-size:13px;line-height:1.8}.admin-shell{width:min(1040px,calc(100% - 40px));margin:auto}.admin-header{height:90px;border-bottom:1px solid #ffffff12;display:flex;align-items:center;justify-content:space-between}.admin-brand{display:flex;align-items:center;gap:11px;color:var(--text);text-decoration:none}.admin-mark{width:43px;height:43px;border:1px solid #cdd5b745;border-radius:13px;display:grid;place-items:center;background:#cdd5b70a}.admin-mark svg{width:31px;fill:none;stroke:var(--accent);stroke-width:3.7;stroke-linecap:round;stroke-linejoin:round}.admin-brand>span:last-child{display:grid;line-height:1.5}.admin-brand b{font-size:13px}.admin-brand small{font-size:9px;color:var(--muted)}.login-panel{width:min(440px,100%);margin:11vh auto 0;padding:33px;background:linear-gradient(145deg,#202426,#191c1e);border:1px solid var(--line);border-radius:14px;box-shadow:0 25px 90px #0005}.panel-kicker{font-size:9px;letter-spacing:.08em;color:var(--accent)}h1{font-size:28px;letter-spacing:-.06em;margin:7px 0 2px}.login-panel>p,.orders-heading p{font-size:11px;color:var(--muted);margin:3px 0 24px}.login-panel form{display:grid;gap:9px}.login-panel label{font-size:10px;color:#c9ceca}.login-panel input{height:46px;background:#121516;border:1px solid #3b4140;border-radius:7px;padding:0 12px;color:var(--text);font:12px var(--font);outline:0}.login-panel input:focus{border-color:#aab696;box-shadow:0 0 0 3px #cdd5b713}.primary-button{height:46px;margin-top:7px;border:0;border-radius:7px;background:var(--accent);color:#20251e;font:700 11px var(--font);cursor:pointer}.primary-button span{margin-right:12px;font-size:16px}.quiet-button{height:37px;border:1px solid #ffffff1b;border-radius:6px;background:#ffffff08;color:#c6cbc6;padding:0 12px;font:500 9px var(--font);cursor:pointer}.quiet-button:hover{background:#ffffff12}.feedback{min-height:18px;margin:10px 0 0;color:#cbd5b8;font-size:10px}.feedback.error{color:#dfa59b}.orders-panel{padding:47px 0}.orders-heading{display:flex;justify-content:space-between;align-items:end}.orders-heading h1{margin:8px 0 0}.orders-heading p{margin:2px 0 0}.orders-summary{display:flex;align-items:center;justify-content:space-between;margin:20px 0 4px;padding:14px 17px;background:#1d2122;border:1px solid var(--line);border-radius:8px;color:#aeb4af;font-size:10px}.orders-summary strong{color:var(--accent);font-size:18px}.orders-list{display:grid;gap:11px;margin-top:12px}.empty-state{padding:48px 20px;text-align:center;border:1px dashed #3d4240;border-radius:9px;color:var(--muted);font-size:11px}.order-card{padding:19px 21px;background:linear-gradient(135deg,#1d2122,#191c1e);border:1px solid #343a39;border-radius:9px}.order-top{display:flex;align-items:start;justify-content:space-between;gap:14px;border-bottom:1px solid #ffffff12;padding-bottom:12px}.order-name{font-size:14px;font-weight:700}.order-date{font-size:9px;color:#929994}.order-service{display:inline-flex;margin-top:5px;padding:2px 9px;border-radius:30px;background:#ccd5b716;color:var(--accent);font-size:9px}.order-details{display:grid;grid-template-columns:repeat(2,1fr);gap:8px 24px;padding-top:12px}.order-detail{font-size:10px;color:#aeb5af;overflow-wrap:anywhere}.order-detail b{display:inline-block;min-width:87px;color:#e1e4de;font-size:9px}.order-message{grid-column:1/-1;border-top:1px solid #ffffff10;padding-top:9px;margin-top:2px;white-space:pre-wrap}.delete-button{border:1px solid #5c403e;background:#382524;color:#e2b4ac;border-radius:5px;padding:6px 9px;font:500 9px var(--font);cursor:pointer;white-space:nowrap}.delete-button:hover{background:#4a2b29}[hidden]{display:none!important}@media(max-width:620px){.admin-shell{width:calc(100% - 28px)}.admin-header{height:74px}.login-panel{margin-top:9vh;padding:24px 20px}.orders-panel{padding-top:31px}.orders-heading{align-items:start;gap:12px}.orders-heading h1{font-size:22px}.orders-heading p{max-width:230px;font-size:9px}.quiet-button{font-size:8px;padding:0 8px}.order-card{padding:15px}.order-details{grid-template-columns:1fr;gap:6px}.order-message{grid-column:1}.order-detail b{min-width:83px}}
```

## admin.html

```html
<!doctype html>
<html lang="ar" dir="rtl">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <meta name="robots" content="noindex,nofollow">
  <meta name="theme-color" content="#111315">
  <title>لوحة الطلبات | WW</title>
  <link rel="stylesheet" href="admin.css">
  <script src="admin.js" defer></script>
</head>
<body>
  <main class="admin-shell">
    <header class="admin-header">
      <a class="admin-brand" href="/"><span class="admin-mark" aria-hidden="true"><svg viewBox="0 0 64 52"><path d="M4 13 10 39 17 22 24 39 31 13M33 13 39 39 46 22 53 39 60 13"/></svg></span><span><b>WW</b><small>لوحة الطلبات</small></span></a>
      <button class="quiet-button" id="logout-button" type="button" hidden>تسجيل الخروج</button>
    </header>
    <section class="login-panel" id="login-panel">
      <span class="panel-kicker">مساحة خاصة</span>
      <h1>مرحبًا بك</h1>
      <p>سجّل الدخول للاطلاع على طلبات العملاء.</p>
      <form id="login-form">
        <label for="admin-password">كلمة مرور الإدارة</label>
        <input id="admin-password" name="password" type="password" autocomplete="current-password" required>
        <button class="primary-button" type="submit">دخول إلى الطلبات <span>←</span></button>
      </form>
      <p class="feedback" id="login-feedback" role="status" aria-live="polite"></p>
    </section>
    <section class="orders-panel" id="orders-panel" hidden>
      <div class="orders-heading"><div><span class="panel-kicker">مساحة خاصة</span><h1>طلبات العملاء</h1><p>كل الطلبات المرسلة من نموذج الموقع محفوظة هنا.</p></div><button class="quiet-button" id="refresh-button" type="button">تحديث القائمة ↻</button></div>
      <div class="orders-summary"><span>إجمالي الطلبات</span><strong id="orders-count">0</strong></div>
      <p class="feedback" id="orders-feedback" role="status" aria-live="polite"></p>
      <div class="orders-list" id="orders-list"></div>
    </section>
  </main>
</body>
</html>
```

## admin.js

```js
const loginPanel = document.querySelector('#login-panel');
const ordersPanel = document.querySelector('#orders-panel');
const loginForm = document.querySelector('#login-form');
const loginFeedback = document.querySelector('#login-feedback');
const ordersFeedback = document.querySelector('#orders-feedback');
const ordersList = document.querySelector('#orders-list');
const ordersCount = document.querySelector('#orders-count');
const logoutButton = document.querySelector('#logout-button');

async function api(url, options = {}) {
  const response = await fetch(url, { credentials: 'same-origin', ...options });
  const data = await response.json().catch(() => ({}));
  if (!response.ok) throw new Error(data.error || 'تعذر إكمال الطلب.');
  return data;
}

function addDetail(container, label, value, extraClass = '') {
  const row = document.createElement('div');
  row.className = `order-detail ${extraClass}`.trim();
  const key = document.createElement('b');
  key.textContent = `${label}:`;
  const text = document.createElement('span');
  text.textContent = value || '—';
  row.append(key, text);
  container.append(row);
}

function renderOrders(orders) {
  ordersCount.textContent = String(orders.length);
  ordersList.replaceChildren();
  if (!orders.length) {
    const empty = document.createElement('div');
    empty.className = 'empty-state';
    empty.textContent = 'لا توجد طلبات حتى الآن. ستظهر طلبات العملاء الجديدة هنا.';
    ordersList.append(empty);
    return;
  }

  orders.forEach((order) => {
    const card = document.createElement('article');
    card.className = 'order-card';
    const top = document.createElement('div');
    top.className = 'order-top';
    const heading = document.createElement('div');
    const name = document.createElement('div');
    name.className = 'order-name';
    name.textContent = order.name;
    const service = document.createElement('span');
    service.className = 'order-service';
    service.textContent = order.service;
    const date = document.createElement('div');
    date.className = 'order-date';
    date.textContent = new Date(order.createdAt).toLocaleString('ar-SA', { dateStyle: 'medium', timeStyle: 'short' });
    heading.append(name, service);
    const remove = document.createElement('button');
    remove.type = 'button';
    remove.className = 'delete-button';
    remove.textContent = 'حذف الطلب';
    remove.addEventListener('click', async () => {
      if (!window.confirm(`حذف طلب ${order.name}؟`)) return;
      try {
        await api(`/api/orders/${encodeURIComponent(order.id)}`, { method: 'DELETE' });
        await loadOrders();
      } catch (error) { ordersFeedback.textContent = error.message; ordersFeedback.className = 'feedback error'; }
    });
    const meta = document.createElement('div');
    meta.append(date, remove);
    meta.style.cssText = 'display:flex;align-items:center;gap:14px';
    top.append(heading, meta);
    const details = document.createElement('div');
    details.className = 'order-details';
    addDetail(details, 'البريد', order.email);
    addDetail(details, 'الجوال', order.phone);
    if (order.message) addDetail(details, 'التفاصيل', order.message, 'order-message');
    card.append(top, details);
    ordersList.append(card);
  });
}

async function loadOrders() {
  ordersFeedback.textContent = 'جارٍ تحميل الطلبات…';
  ordersFeedback.className = 'feedback';
  try {
    const data = await api('/api/orders');
    renderOrders(data.orders);
    ordersFeedback.textContent = '';
  } catch (error) {
    if (error.message.includes('سجل الدخول')) showLogin();
    else { ordersFeedback.textContent = error.message; ordersFeedback.className = 'feedback error'; }
  }
}

function showLogin() {
  loginPanel.hidden = false;
  ordersPanel.hidden = true;
  logoutButton.hidden = true;
}

function showOrders() {
  loginPanel.hidden = true;
  ordersPanel.hidden = false;
  logoutButton.hidden = false;
  loadOrders();
}

loginForm.addEventListener('submit', async (event) => {
  event.preventDefault();
  loginFeedback.textContent = 'جارٍ التحقق…';
  loginFeedback.className = 'feedback';
  const password = new FormData(loginForm).get('password');
  try {
    await api('/api/session', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ password }) });
    loginForm.reset();
    showOrders();
  } catch (error) {
    loginFeedback.textContent = error.message;
    loginFeedback.className = 'feedback error';
  }
});

logoutButton.addEventListener('click', async () => {
  await api('/api/session', { method: 'DELETE' }).catch(() => {});
  showLogin();
});

document.querySelector('#refresh-button').addEventListener('click', loadOrders);

api('/api/orders').then((data) => { renderOrders(data.orders); showOrders(); })
  .catch(() => showLogin());
```

## cloudflare/worker.js

```js
const SESSION_COOKIE = 'ww_admin';
const SESSION_TTL_SECONDS = 8 * 60 * 60;
const LOGIN_WINDOW_SECONDS = 15 * 60;
const LOGIN_MAX_ATTEMPTS = 8;
const MAX_BODY_BYTES = 12_000;
const encoder = new TextEncoder();

function json(value, status = 200, headers = {}) {
  return new Response(JSON.stringify(value), {
    status,
    headers: {
      'Content-Type': 'application/json; charset=utf-8',
      'Cache-Control': 'no-store',
      'X-Content-Type-Options': 'nosniff',
      'Referrer-Policy': 'strict-origin-when-cross-origin',
      ...headers
    }
  });
}

async function readJson(request) {
  const size = Number(request.headers.get('content-length') || 0);
  if (size > MAX_BODY_BYTES) throw new Error('بيانات الطلب أكبر من الحجم المسموح.');
  const text = await request.text();
  if (encoder.encode(text).length > MAX_BODY_BYTES) throw new Error('بيانات الطلب أكبر من الحجم المسموح.');
  try { return JSON.parse(text || '{}'); }
  catch { throw new Error('بيانات الطلب غير صالحة.'); }
}

function cleanText(value, maxLength) {
  return typeof value === 'string' ? value.trim().slice(0, maxLength) : '';
}

function validateOrder(body) {
  const order = {
    id: crypto.randomUUID(),
    name: cleanText(body.name, 160),
    email: cleanText(body.email, 254).toLowerCase(),
    phone: cleanText(body.phone, 30),
    service: cleanText(body.service, 80),
    message: cleanText(body.message, 3000),
    createdAt: Math.floor(Date.now() / 1000)
  };
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const phonePattern = /^[+0-9 ()-]{8,30}$/;
  const services = new Set(['إنشاء نطاق', 'إنشاء موقع', 'بريد أعمال', 'جميع الخدمات']);
  if (order.name.length < 2 || !emailPattern.test(order.email) || !phonePattern.test(order.phone) || !services.has(order.service)) return null;
  return order;
}

function cookieToken(request) {
  const cookie = request.headers.get('Cookie') || '';
  const match = cookie.match(new RegExp(`(?:^|;\\s*)${SESSION_COOKIE}=([a-f0-9]{64})(?:;|$)`, 'i'));
  return match ? match[1] : '';
}

function sessionCookie(token, maxAge = SESSION_TTL_SECONDS) {
  return `${SESSION_COOKIE}=${token}; Path=/; Max-Age=${maxAge}; HttpOnly; Secure; SameSite=Strict`;
}

async function hash(value) {
  const digest = await crypto.subtle.digest('SHA-256', encoder.encode(value));
  return [...new Uint8Array(digest)].map((part) => part.toString(16).padStart(2, '0')).join('');
}

function passwordMatches(supplied, expected) {
  const left = encoder.encode(String(supplied));
  const right = encoder.encode(String(expected));
  let difference = left.length ^ right.length;
  const length = Math.max(left.length, right.length);
  for (let index = 0; index < length; index += 1) difference |= (left[index] || 0) ^ (right[index] || 0);
  return difference === 0;
}

function isSameOrigin(request) {
  return request.headers.get('Origin') === new URL(request.url).origin;
}

async function authorized(request, env) {
  const token = cookieToken(request);
  if (!token) return false;
  const tokenHash = await hash(token);
  const session = await env.DB.prepare(
    'SELECT expires_at FROM admin_sessions WHERE token_hash = ? AND expires_at > ?'
  ).bind(tokenHash, Math.floor(Date.now() / 1000)).first();
  return Boolean(session);
}

async function handleLogin(request, env) {
  if (!isSameOrigin(request)) return json({ error: 'مصدر الطلب غير صالح.' }, 403);
  if (!env.ADMIN_PASSWORD || env.ADMIN_PASSWORD.length < 16) {
    return json({ error: 'لم تضبط كلمة مرور لوحة الإدارة. أضف سر ADMIN_PASSWORD (16 حرفًا على الأقل) في إعدادات Worker.' }, 503);
  }

  let body;
  try { body = await readJson(request); }
  catch (error) { return json({ error: error.message }, 400); }
  if (!body || typeof body !== 'object' || Array.isArray(body)) body = {};

  const ip = request.headers.get('CF-Connecting-IP') || 'unknown';
  const visitorHash = await hash(ip);
  const now = Math.floor(Date.now() / 1000);
  const attempt = await env.DB.prepare(
    'SELECT failures, window_started FROM admin_login_attempts WHERE visitor_hash = ?'
  ).bind(visitorHash).first();
  if (attempt && attempt.window_started + LOGIN_WINDOW_SECONDS > now && attempt.failures >= LOGIN_MAX_ATTEMPTS) {
    return json({ error: 'محاولات كثيرة. حاول بعد 15 دقيقة.' }, 429);
  }

  if (!passwordMatches(body.password || '', env.ADMIN_PASSWORD)) {
    await env.DB.prepare(`
      INSERT INTO admin_login_attempts (visitor_hash, failures, window_started)
      VALUES (?, 1, ?)
      ON CONFLICT(visitor_hash) DO UPDATE SET
        failures = CASE
          WHEN admin_login_attempts.window_started + ? <= ? THEN 1
          ELSE admin_login_attempts.failures + 1
        END,
        window_started = CASE
          WHEN admin_login_attempts.window_started + ? <= ? THEN excluded.window_started
          ELSE admin_login_attempts.window_started
        END
    `).bind(visitorHash, now, LOGIN_WINDOW_SECONDS, now, LOGIN_WINDOW_SECONDS, now).run();
    return json({ error: 'كلمة المرور غير صحيحة.' }, 401);
  }

  const token = [...crypto.getRandomValues(new Uint8Array(32))].map((part) => part.toString(16).padStart(2, '0')).join('');
  const expiresAt = now + SESSION_TTL_SECONDS;
  await env.DB.batch([
    env.DB.prepare('DELETE FROM admin_login_attempts WHERE visitor_hash = ?').bind(visitorHash),
    env.DB.prepare('DELETE FROM admin_sessions WHERE expires_at <= ?').bind(now),
    env.DB.prepare('INSERT INTO admin_sessions (token_hash, expires_at) VALUES (?, ?)').bind(await hash(token), expiresAt)
  ]);
  return json({ ok: true }, 200, { 'Set-Cookie': sessionCookie(token) });
}

async function handleRequest(request, env) {
  const url = new URL(request.url);
  if (url.pathname === '/health' && request.method === 'GET') return json({ ok: true });

  if (url.pathname === '/api/orders' && request.method === 'POST') {
    let body;
    try { body = await readJson(request); }
    catch (error) { return json({ error: error.message }, 400); }
    if (!body || typeof body !== 'object' || Array.isArray(body)) body = {};
    const order = validateOrder(body);
    if (!order) return json({ error: 'يرجى التحقق من الاسم والبريد والجوال والخدمة.' }, 400);
    await env.DB.prepare(`
      INSERT INTO customer_orders (id, name, email, phone, service, message, status, created_at)
      VALUES (?, ?, ?, ?, ?, ?, 'new', ?)
    `).bind(order.id, order.name, order.email, order.phone, order.service, order.message, order.createdAt).run();
    return json({ ok: true, message: 'تم استلام طلبك بنجاح.' }, 201);
  }

  if (url.pathname === '/api/session' && request.method === 'POST') return handleLogin(request, env);

  if (url.pathname === '/api/session' && request.method === 'DELETE') {
    if (!isSameOrigin(request)) return json({ error: 'مصدر الطلب غير صالح.' }, 403);
    const token = cookieToken(request);
    if (token) await env.DB.prepare('DELETE FROM admin_sessions WHERE token_hash = ?').bind(await hash(token)).run();
    return json({ ok: true }, 200, { 'Set-Cookie': sessionCookie('', 0) });
  }

  if (url.pathname === '/api/orders' && request.method === 'GET') {
    if (!await authorized(request, env)) return json({ error: 'سجل الدخول لعرض الطلبات.' }, 401);
    const result = await env.DB.prepare(`
      SELECT id, name, email, phone, service, message, status,
             strftime('%Y-%m-%dT%H:%M:%fZ', created_at, 'unixepoch') AS createdAt
      FROM customer_orders ORDER BY created_at DESC
    `).all();
    return json({ orders: result.results || [] });
  }

  const deleteMatch = url.pathname.match(/^\/api\/orders\/([^/]+)$/);
  if (deleteMatch && request.method === 'DELETE') {
    if (!isSameOrigin(request)) return json({ error: 'مصدر الطلب غير صالح.' }, 403);
    if (!await authorized(request, env)) return json({ error: 'سجل الدخول أولًا.' }, 401);
    const result = await env.DB.prepare('DELETE FROM customer_orders WHERE id = ?').bind(decodeURIComponent(deleteMatch[1])).run();
    if (!result.meta?.changes) return json({ error: 'الطلب غير موجود.' }, 404);
    return json({ ok: true });
  }

  if (url.pathname.startsWith('/api/')) return json({ error: 'المسار غير موجود.' }, 404);
  return env.ASSETS.fetch(request);
}

export default {
  async fetch(request, env) {
    try { return await handleRequest(request, env); }
    catch {
      return json({ error: 'حدث خطأ في الخادم.' }, 500);
    }
  }
};
```

## index.html

```html
<!doctype html>
<html lang="ar" dir="rtl">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <meta name="theme-color" content="#111315">
  <meta name="description" content="WW — شريكك الرقمي لإنشاء النطاقات والمواقع وخدمات بريد الأعمال باحترافية.">
  <title>WW | حضور رقمي يليق بأعمالك</title>
  <link rel="stylesheet" href="styles.css">
</head>
<body>
  <header class="site-header">
    <div class="container nav-wrap">
      <a class="brand" href="#home" aria-label="WW، الصفحة الرئيسية">
        <span class="brand-mark" aria-hidden="true"><svg viewBox="0 0 64 52"><path d="M4 13 10 39 17 22 24 39 31 13M33 13 39 39 46 22 53 39 60 13"/></svg></span>
        <span class="brand-name"><strong>WW</strong><small>DIGITAL SERVICES</small></span>
      </a>
      <button class="menu-toggle" aria-label="فتح القائمة" aria-expanded="false"><span></span><span></span></button>
      <nav class="main-nav" aria-label="القائمة الرئيسية">
        <a href="#services">خدماتنا</a><a href="#about">من نحن</a><a href="#steps">كيف نعمل</a>
      </nav>
      <a class="button button-small nav-cta" href="#contact">ابدأ مشروعك <span>←</span></a>
    </div>
  </header>

  <main>
    <section class="hero" id="home">
      <div class="hero-grid container">
        <div class="hero-copy">
          <div class="eyebrow"><span class="live-dot"></span> شريكك الرقمي من أول خطوة</div>
          <h1>حضورك الرقمي<br>يبدأ <span>من هنا.</span></h1>
          <p class="hero-lead">نصنع لأعمالك أساسًا رقميًا متكاملًا؛ من اسم نطاق يعبّر عنك، إلى موقع يترك انطباعًا، وبريد أعمال يعزز ثقة عملائك.</p>
          <div class="hero-actions"><a class="button" href="#services">اكتشف خدماتنا <span>←</span></a><a class="text-link" href="#about">تعرّف علينا <span>↙</span></a></div>
          <div class="hero-proof"><div class="proof-symbol">✳</div><div><strong>حلول رقمية متكاملة</strong><small>بخبرة واضحة وخطوات بسيطة</small></div><span class="proof-line"></span><div class="proof-mini">WW<span>®</span></div></div>
        </div>
        <div class="hero-art">
          <figure class="hero-photo"><img src="https://images.unsplash.com/photo-1639066648921-82d4500abf1a?auto=format&fit=crop&w=1500&q=85" alt="خوادم وشبكات رقمية تضيء داخل مركز بيانات" fetchpriority="high"><div class="photo-shade"></div><figcaption><span class="photo-overline">WW / DIGITAL FOUNDATIONS</span><strong>نبني أساسًا<br>يواكب طموحك.</strong><span class="photo-caption-line">نطاقات • مواقع • بريد أعمال</span></figcaption></figure>
          <div class="floating-tag tag-domain"><span class="tag-icon">↗</span><span><b>نطاقك الخاص</b><small>yourbrand.sa</small></span><i>●</i></div>
          <div class="floating-tag tag-mail"><span class="mail-icon">✉</span><span><b>بريد أعمال</b><small>هوية مهنية موحدة</small></span></div>
          <div class="art-stamp"><span>WW</span><b>✳</b><small>نصنع الفرق</small></div>
          <div class="art-caption"><span></span> حلول رقمية مترابطة من البداية</div>
        </div>
      </div>
      <div class="hero-bottom container"><span>خدمات رقمية مصممة لتنمو أعمالك</span><div class="bottom-services"><span>النطاقات</span><i></i><span>المواقع</span><i></i><span>بريد الأعمال</span></div><a href="#services" aria-label="انتقل إلى الخدمات">↓</a></div>
    </section>

    <section class="services section-pad" id="services">
      <div class="container">
        <div class="section-head"><div><div class="eyebrow dark-eyebrow"><span>01</span> خدماتنا</div><h2>كل ما تحتاجه<br><span>لتبدأ بثقة.</span></h2></div><p>ثلاث خدمات أساسية، ننسقها معًا لتأسيس حضور رقمي متكامل يواكب طموحك ويمنح عملاءك تجربة احترافية.</p></div>
        <div class="service-grid">
          <article class="service-card card-domain"><div class="service-photo"><img src="assets/domain-visual.svg" alt="تصور مرئي لعنوان نطاقك أثناء البحث عن توفره" loading="lazy"><span class="photo-index">01 / DOMAIN SEARCH</span><span class="service-icon">⌁</span></div><h3>نطاق يحمل اسمك</h3><p>ابدأ بهوية واضحة على الإنترنت. نساعدك في اختيار اسم نطاق مناسب لنشاطك وتسجيله وإعداده، لتكون علامتك سهلة الوصول وجديرة بالثقة.</p><a href="#contact" class="service-link">اعثر على نطاقك <span>←</span></a></article>
          <article class="service-card card-site"><div class="service-photo"><img src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=900&q=80" alt="مصمم يعمل على واجهة موقع إلكتروني عبر الحاسوب" loading="lazy"><span class="photo-index">02 / WEBSITE DESIGN</span><span class="service-icon">◫</span></div><h3>موقع يعبّر عنك</h3><p>مواقع أنيقة وسريعة، تعمل بسلاسة على الجوال والحاسوب. نرتب المحتوى ونصمم تجربة تجعل قصتك وخدماتك واضحة من أول زيارة.</p><a href="#contact" class="service-link">أنشئ موقعك <span>←</span></a></article>
          <article class="service-card card-email"><div class="service-photo"><img src="https://www.verveit.com/hubfs/Imported_Blog_Media/emails-list-on-a-laptop-screen-office-background-2022-12-16-12-14-53-utc-2.jpg" alt="واجهة بريد إلكتروني للأعمال مفتوحة على حاسوب محمول" loading="lazy"><span class="photo-index">03 / BUSINESS EMAIL</span><span class="service-icon">＠</span></div><h3>بريد يعزز ثقتك</h3><p>تواصل مع عملائك بعنوان بريد يحمل نطاق شركتك. نجهز لك بريد أعمال عمليًا ومنظمًا، ونساعد فريقك على الانطلاق بثقة.</p><a href="#contact" class="service-link">جهّز بريد أعمالك <span>←</span></a></article>
        </div>
      </div>
    </section>

    <section class="about section-pad" id="about"><div class="container about-wrap"><div class="about-emblem"><div class="emblem-ring"></div><div class="emblem-logo" aria-label="WW"><svg viewBox="0 0 64 52" aria-hidden="true"><path d="M4 13 10 39 17 22 24 39 31 13M33 13 39 39 46 22 53 39 60 13"/></svg></div><span class="emblem-orbit orbit-a">حلول رقمية</span><span class="emblem-orbit orbit-b">تنمو معك</span><span class="emblem-cross">✳</span></div><div class="about-copy"><div class="eyebrow"><span>02</span> من نحن</div><h2>نؤمن أن البداية<br>الصحيحة <span>تصنع الفرق.</span></h2><p>في WW، نسهّل على رواد الأعمال والمنشآت تأسيس حضور رقمي احترافي. نجمع ما تحتاجه في مكان واحد، ونجعل رحلتك من الفكرة إلى الإطلاق أكثر وضوحًا وسلاسة.</p><div class="values"><div><b>وضوح</b><span>خطوات مفهومة من البداية</span></div><div><b>اهتمام</b><span>حلول تناسب احتياجك</span></div><div><b>استمرارية</b><span>أساس ينمو مع أعمالك</span></div></div></div></div></section>

    <section class="steps section-pad" id="steps"><div class="container"><div class="steps-heading"><div class="eyebrow dark-eyebrow"><span>03</span> كيف نعمل</div><h2>بخطوات واضحة،<br><span>من الفكرة إلى الإطلاق.</span></h2></div><div class="steps-grid"><article><span>01</span><div class="step-icon">⌕</div><h3>نستمع لاحتياجك</h3><p>نبدأ بفهم نشاطك وأهدافك، ونحدد الخدمات الأنسب لمرحلتك.</p></article><article><span>02</span><div class="step-icon">✳</div><h3>نجهز حضورك</h3><p>ننسق النطاق والموقع والبريد لتعمل معًا تحت هوية متناسقة.</p></article><article><span>03</span><div class="step-icon">↗</div><h3>تنطلق بثقة</h3><p>نساعدك على إطلاق أساسك الرقمي لتبدأ بالتواصل مع عملائك.</p></article></div></div></section>

    <section class="contact section-pad" id="contact"><div class="container contact-layout">
      <div class="contact-intro"><div class="contact-symbol" aria-label="WW"><svg viewBox="0 0 64 52" aria-hidden="true"><path d="M4 13 10 39 17 22 24 39 31 13M33 13 39 39 46 22 53 39 60 13"/></svg><span>®</span></div><div class="eyebrow"><span>خطوتك القادمة</span></div><h2>مستعد تبدأ حضورك؟</h2><p>أرسل تفاصيلك، وسنراجع طلبك ونتواصل معك قريبًا.</p><div class="contact-note"><span>✳</span> بياناتك خاصة وتُحفظ بأمان في لوحة الطلبات.</div></div>
      <form class="contact-form" id="contact-form">
        <div class="form-heading"><h3>أخبرنا عن مشروعك</h3><span>جميع الحقول مطلوبة</span></div>
        <div class="form-grid">
          <label>الاسم الكامل<input name="name" type="text" autocomplete="name" placeholder="الاسم الذي نتواصل به" required></label>
          <label>البريد الإلكتروني<input name="email" type="email" autocomplete="email" placeholder="name@example.com" required dir="ltr"></label>
          <label>رقم الجوال<input name="phone" type="tel" autocomplete="tel" placeholder="05xxxxxxxx" required dir="ltr" pattern="[+0-9 ()-]{8,20}" title="أدخل رقم جوال صحيحًا"></label>
          <label>الخدمة المطلوبة<select name="service" required><option value="" disabled selected>اختر الخدمة</option><option>إنشاء نطاق</option><option>إنشاء موقع</option><option>بريد أعمال</option><option>جميع الخدمات</option></select></label>
        </div>
        <label class="message-label">تفاصيل إضافية <span>(اختياري)</span><textarea name="message" rows="3" placeholder="أخبرنا باختصار عن نشاطك أو استفسارك"></textarea></label>
        <button class="button form-submit" type="submit">إرسال الطلب <span>←</span></button>
        <div class="form-result" id="form-result" role="status" aria-live="polite" hidden></div>
      </form>
      <div class="contact-orb"></div>
    </div></section>
  </main>
  <section class="policies section-pad" id="policies" aria-labelledby="policies-title">
    <div class="container">
      <div class="policies-heading">
        <div><div class="eyebrow dark-eyebrow"><span>04</span> معلومات مهمة</div><h2 id="policies-title">الشروط والسياسات</h2></div>
        <p>نحرص على وضوح تفاصيل الخدمة وحقوق العميل قبل بدء التنفيذ.</p>
      </div>
      <div class="policy-grid">
        <details class="policy-card" open>
          <summary><span class="policy-number">01</span><span>الشروط والأحكام</span><span class="policy-toggle" aria-hidden="true">+</span></summary>
          <div class="policy-content">
            <p>تسري هذه الشروط على طلبات خدمات WW، وتشمل تسجيل النطاقات وتصميم المواقع وإعداد بريد الأعمال. إرسال نموذج التواصل هو طلب للتواصل ولا يُعد بحد ذاته عقدًا أو تأكيدًا للسعر أو موعد التنفيذ.</p>
            <ul>
              <li>يُحدد نطاق العمل والسعر وموعد التسليم وأي رسوم متكررة في عرض مكتوب يوافق عليه العميل قبل بدء التنفيذ.</li>
              <li>يلتزم العميل بتقديم بيانات صحيحة، وتوفير المحتوى والتراخيص اللازمة، ومراجعة واعتماد المواد والمعلومات قبل نشرها أو استخدامها.</li>
              <li>قد تعتمد بعض الخدمات على مزودي نطاقات أو استضافة أو بريد من أطراف أخرى؛ وتُوضح الرسوم والتجديدات وشروط المزود للعميل قبل الطلب.</li>
              <li>تُستخدم بيانات التواصل والطلب لمعالجة الاستفسار وتنفيذ الخدمة، ولا تُشارك مع مزود خارجي إلا بالقدر اللازم للتنفيذ أو وفق ما تقتضيه الأنظمة.</li>
              <li>تبقى حقوق العميل في المحتوى الذي يقدمه له، وتنتقل أو تُمنح حقوق مخرجات العمل المتفق عليها بعد سداد مستحقاتها، ما لم يُتفق كتابةً على خلاف ذلك.</li>
            </ul>
          </div>
        </details>
        <details class="policy-card">
          <summary><span class="policy-number">02</span><span>سياسة الإلغاء والاسترجاع</span><span class="policy-toggle" aria-hidden="true">+</span></summary>
          <div class="policy-content">
            <ul>
              <li>يمكن للعميل طلب إلغاء الخدمة عبر نموذج التواصل في الموقع، مع اختيار الخدمة وكتابة رقم الطلب وعبارة «إلغاء أو استرجاع» في خانة التفاصيل.</li>
              <li>تُدرس طلبات استرجاع قيمة الخدمة وفق الأنظمة المعمول بها؛ ويشمل ذلك حق فسخ عقد الخدمة خلال الأيام السبعة التالية للتعاقد متى لم ينتفع العميل بالخدمة أو يحصل على منفعة منها، مع مراعاة الاستثناءات النظامية والتكاليف المترتبة المسموح بها.</li>
              <li>إذا بدأ تنفيذ عمل مخصص أو تم تفعيل النطاق أو البريد أو تسليم جزء من الخدمة، تُراجع المنفعة المنفذة والتكاليف الفعلية غير القابلة للاسترداد لكل طلب على حدة، دون الإخلال بحقوق العميل النظامية.</li>
              <li>إذا تأخر تقديم الخدمة أكثر من خمسة عشر يومًا عن تاريخ العقد أو الموعد المتفق عليه، يحق للعميل طلب إلغاء التعاقد واسترداد ما دفعه وفق الأنظمة، ما لم يكن التأخير بسبب قوة قاهرة.</li>
              <li>عند قبول الاسترجاع، يُعاد المبلغ عبر وسيلة الدفع الأصلية متى أمكن، ولا يتحمل العميل رسومًا إضافية بسبب إعادة المبلغ. وقد يختلف وقت ظهوره بحسب البنك أو مزود الدفع.</li>
              <li>لا تحد هذه السياسة من أي حق مقرر للعميل بموجب الأنظمة المعمول بها في المملكة العربية السعودية.</li>
            </ul>
            <p class="policy-contact">لمتابعة طلب قائم، أرسل الطلب من <a href="#contact">نموذج التواصل</a> وأرفق رقم الطلب ووسيلة التواصل المسجلة.</p>
          </div>
        </details>
      </div>
    </div>
  </section>
  <footer class="site-footer"><div class="container footer-wrap"><a class="brand footer-brand" href="#home" aria-label="WW"><span class="brand-mark" aria-hidden="true"><svg viewBox="0 0 64 52"><path d="M4 13 10 39 17 22 24 39 31 13M33 13 39 39 46 22 53 39 60 13"/></svg></span><span class="brand-name"><strong>WW</strong><small>DIGITAL SERVICES</small></span></a><span>حلول رقمية تصنع حضورًا يدوم.</span><div class="footer-meta"><a href="#policies">الشروط والأحكام</a><a href="#policies">الإلغاء والاسترجاع</a><span>© 2026 WW. جميع الحقوق محفوظة.</span></div></div></footer>
  <script src="script.js"></script>
</body>
</html>
```

## migrations/0001_create_customer_requests.sql

```sql
CREATE TABLE IF NOT EXISTS customer_orders (
  id TEXT PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT NOT NULL,
  service TEXT NOT NULL,
  message TEXT NOT NULL DEFAULT '',
  status TEXT NOT NULL DEFAULT 'new',
  created_at INTEGER NOT NULL
);

CREATE INDEX IF NOT EXISTS customer_orders_created_at_idx
  ON customer_orders (created_at DESC);

CREATE TABLE IF NOT EXISTS admin_sessions (
  token_hash TEXT PRIMARY KEY,
  expires_at INTEGER NOT NULL
);

CREATE INDEX IF NOT EXISTS admin_sessions_expires_at_idx
  ON admin_sessions (expires_at);

CREATE TABLE IF NOT EXISTS admin_login_attempts (
  visitor_hash TEXT PRIMARY KEY,
  failures INTEGER NOT NULL DEFAULT 0,
  window_started INTEGER NOT NULL
);
```

## package.json

```json
{
  "name": "ww-business-site",
  "version": "1.0.0",
  "private": true,
  "description": "WW Arabic business website and private customer request dashboard",
  "scripts": {
    "start": "node server.js",
    "sync:source": "node scripts/sync-source-bundle.js",
    "watch:source": "node scripts/sync-source-bundle.js --watch"
  },
  "engines": {
    "node": ">=20 <25"
  }
}
```

## render.yaml

```yaml
services:
  - type: web
    name: ww-business-site
    runtime: node
    plan: starter
    buildCommand: npm install --omit=dev
    startCommand: npm start
    healthCheckPath: /health
    disk:
      name: ww-customer-requests
      mountPath: /var/data
      sizeGB: 1
    envVars:
      - key: NODE_ENV
        value: production
      - key: DATA_DIR
        value: /var/data
      - key: COOKIE_SECURE
        value: "true"
      - key: ADMIN_PASSWORD
        sync: false
```

## script.js

```js
const menuButton = document.querySelector('.menu-toggle');
const navigation = document.querySelector('.main-nav');

menuButton.addEventListener('click', () => {
  const isOpen = menuButton.getAttribute('aria-expanded') === 'true';
  menuButton.setAttribute('aria-expanded', String(!isOpen));
  navigation.classList.toggle('open', !isOpen);
});

navigation.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => {
    menuButton.setAttribute('aria-expanded', 'false');
    navigation.classList.remove('open');
  });
});

const contactForm = document.querySelector('#contact-form');
const formResult = document.querySelector('#form-result');

contactForm.addEventListener('submit', (event) => {
  event.preventDefault();
  if (!contactForm.reportValidity()) return;
  const submitButton = contactForm.querySelector('.form-submit');
  submitButton.disabled = true;
  submitButton.textContent = 'جارٍ إرسال الطلب…';
  formResult.hidden = true;
  formResult.classList.remove('error');
  const formData = Object.fromEntries(new FormData(contactForm));
  fetch('/api/orders', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(formData)
  }).then(async (response) => {
    const result = await response.json().catch(() => ({}));
    if (!response.ok) throw new Error(result.error || 'تعذر إرسال الطلب. حاول مرة أخرى.');
    contactForm.classList.add('submitted');
    formResult.textContent = 'شكرًا لك، تم استلام طلبك بنجاح. سنتواصل معك قريبًا.';
    formResult.hidden = false;
    contactForm.reset();
  }).catch((error) => {
    formResult.textContent = error.message.includes('Failed to fetch')
      ? 'تعذر الاتصال بالخادم. افتح الموقع من عنوان الخادم وحاول مجددًا.'
      : error.message;
    formResult.classList.add('error');
    formResult.hidden = false;
  }).finally(() => {
    submitButton.disabled = false;
    submitButton.innerHTML = 'إرسال الطلب <span>←</span>';
  });
});
```

## scripts/sync-source-bundle.js

```js
const fs = require('node:fs');
const path = require('node:path');

const root = path.resolve(__dirname, '..');
const output = path.join(root, 'SOURCE_CODE.md');
const includedExtensions = new Set(['.html', '.css', '.js', '.mjs', '.cjs', '.ts', '.tsx', '.jsx', '.sql', '.json', '.jsonc', '.yaml', '.yml']);
const ignoredDirectories = new Set(['.git', '.wrangler', 'node_modules', 'data']);

function collectSourceFiles(directory = root) {
  return fs.readdirSync(directory, { withFileTypes: true }).flatMap((entry) => {
    if (entry.isDirectory()) {
      if (ignoredDirectories.has(entry.name)) return [];
      return collectSourceFiles(path.join(directory, entry.name));
    }
    if (!entry.isFile()) return [];
    const absolutePath = path.join(directory, entry.name);
    const relativePath = path.relative(root, absolutePath).split(path.sep).join('/');
    if (absolutePath === output || relativePath.startsWith('.vscode/')) return [];
    return includedExtensions.has(path.extname(entry.name).toLowerCase()) ? [relativePath] : [];
  });
}

const languageFor = (file) => ({
  '.html': 'html',
  '.css': 'css',
  '.js': 'js',
  '.sql': 'sql',
  '.json': 'json',
  '.jsonc': 'jsonc',
  '.yaml': 'yaml',
  '.yml': 'yaml'
}[path.extname(file)] || 'text');

function createBundle() {
  const files = collectSourceFiles().sort((a, b) => a.localeCompare(b));
  const sections = files.map((relativePath) => {
    const absolutePath = path.join(root, relativePath);
    if (!fs.existsSync(absolutePath)) return `## ${relativePath}\n\nالملف غير موجود حاليًا.\n`;
    const source = fs.readFileSync(absolutePath, 'utf8').replace(/\s+$/, '');
    return `## ${relativePath}\n\n\`\`\`${languageFor(relativePath)}\n${source}\n\`\`\``;
  });
  const content = [
    '# حزمة أكواد موقع WW',
    '',
    '> ملف مولّد تلقائيًا من ملفات المشروع. عدّل الملفات الأصلية، وسيُحدّث هذا الملف عند حفظ التغييرات إذا كانت مهمة المراقبة تعمل.',
    '',
    `آخر تحديث: ${new Date().toISOString()}`,
    '',
    ...sections
  ].join('\n\n');
  fs.writeFileSync(output, `${content}\n`, 'utf8');
}

createBundle();
console.log(`تم تحديث ${path.relative(root, output)}`);

if (process.argv.includes('--watch')) {
  fs.watch(root, { recursive: true, persistent: true }, (_event, filename) => {
    if (!filename || filename.toString().split(path.sep).at(-1) === path.basename(output)) return;
    setTimeout(createBundle, 100);
  });
  console.log('مراقبة ملفات المصدر فعالة. أوقفها باستخدام Ctrl+C.');
}
```

## server.js

```js
const http = require('node:http');
const fs = require('node:fs/promises');
const path = require('node:path');
const crypto = require('node:crypto');

const ROOT = __dirname;
const DATA_DIR = process.env.DATA_DIR || path.join(ROOT, 'data');
const ORDERS_FILE = path.join(DATA_DIR, 'orders.json');
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

function validateOrder(body) {
  const order = {
    id: crypto.randomUUID(),
    name: cleanText(body.name, 160),
    email: cleanText(body.email, 254).toLowerCase(),
    phone: cleanText(body.phone, 30),
    service: cleanText(body.service, 80),
    message: cleanText(body.message, 3000),
    status: 'new',
    createdAt: new Date().toISOString()
  };
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const phonePattern = /^[+0-9 ()-]{8,30}$/;
  const allowedServices = new Set(['إنشاء نطاق', 'إنشاء موقع', 'بريد أعمال', 'جميع الخدمات']);
  if (order.name.length < 2 || !emailPattern.test(order.email) || !phonePattern.test(order.phone) || !allowedServices.has(order.service)) {
    return null;
  }
  return order;
}

async function serveStatic(request, response, pathname) {
  const aliases = { '/': '/index.html', '/admin': '/admin.html', '/admin/': '/admin.html' };
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

    if (pathname === '/api/orders' && request.method === 'POST') {
      const order = validateOrder(await readJson(request));
      if (!order) return sendJson(response, 400, { error: 'يرجى التحقق من الاسم والبريد والجوال والخدمة.' });
      await updateOrders((orders) => [order, ...orders]);
      return sendJson(response, 201, { ok: true, message: 'تم استلام طلبك بنجاح.' });
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
      return sendJson(response, 200, { orders: await readOrders() });
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
```

## styles.css

```css
@import url('https://fonts.googleapis.com/css2?family=Alexandria:wght@300;400;500;600;700;800&display=swap');
:root{--navy:#101d35;--ink:#17243a;--muted:#697489;--cream:#f8f7f3;--paper:#fffefa;--lime:#d2ed71;--line:#e6e8e2;--mint:#dfe9d9;--font:'Alexandria','Tahoma',sans-serif}*{box-sizing:border-box}html{scroll-behavior:smooth}body{margin:0;background:var(--cream);color:var(--ink);font-family:var(--font);font-size:14px;line-height:1.85}a{color:inherit;text-decoration:none}button{font:inherit}.container{width:min(1180px,calc(100% - 64px));margin-inline:auto}.site-header{position:absolute;z-index:10;inset:0 0 auto;color:white}.nav-wrap{height:94px;display:flex;align-items:center;border-bottom:1px solid rgba(255,255,255,.14)}.brand{display:flex;align-items:center;gap:10px;min-width:205px}.brand-mark{width:43px;height:43px;display:grid;place-items:center;background:var(--lime);border-radius:14px 14px 14px 4px}.brand-mark svg{width:30px;fill:var(--navy)}.brand-mark .brand-cut{fill:var(--lime)}.brand-name{display:grid;line-height:1.25}.brand-name strong{font-size:14px;letter-spacing:-.04em}.brand-name small{font:600 8px/1.6 var(--font);letter-spacing:.17em;opacity:.65;direction:ltr;text-align:right}.main-nav{display:flex;gap:38px;margin:auto;font-size:12px;color:#d0d5df}.main-nav a{transition:color .2s}.main-nav a:hover{color:var(--lime)}.button{min-height:53px;padding:0 23px;display:inline-flex;align-items:center;justify-content:center;gap:25px;border-radius:8px;background:var(--lime);color:var(--navy);font-weight:700;font-size:12px;transition:transform .2s,background .2s}.button:hover{transform:translateY(-2px);background:#dcf58b}.button span{font-size:18px;line-height:1}.button-small{min-height:42px;padding:0 17px;gap:15px;font-size:11px}.menu-toggle{display:none}.hero{position:relative;overflow:hidden;background:var(--navy);color:#fff;padding:151px 0 0;min-height:700px}.hero:before{content:"";position:absolute;inset:0;background:radial-gradient(ellipse at 85% 38%,rgba(50,82,92,.34),transparent 35%),linear-gradient(120deg,transparent 56%,rgba(255,255,255,.025) 56%,transparent 56.2%);pointer-events:none}.hero-grid{position:relative;z-index:1;display:grid;grid-template-columns:.9fr 1.1fr;align-items:center;gap:36px;min-height:478px}.hero-copy{padding:30px 0 20px}.eyebrow{display:flex;align-items:center;gap:10px;font-size:10px;font-weight:500;letter-spacing:.03em;color:#a7b2c1}.live-dot{width:7px;height:7px;border-radius:50%;background:var(--lime);box-shadow:0 0 14px #d2ed71}.hero h1{font-size:clamp(48px,5.6vw,73px);letter-spacing:-.075em;line-height:1.28;margin:24px 0 15px;font-weight:600}.hero h1 span,.about-copy h2 span{color:var(--lime)}.hero-lead{max-width:455px;color:#b4bdcb;font-size:13px;line-height:2.1;margin:0}.hero-actions{display:flex;align-items:center;gap:27px;margin-top:27px}.text-link{font-size:11px;color:#d2d9e3}.text-link span{margin-right:8px;color:var(--lime);font-size:16px}.hero-proof{display:flex;align-items:center;gap:12px;margin-top:48px;color:#c4cbd6}.proof-symbol{width:36px;height:36px;border:1px solid #536073;border-radius:50%;display:grid;place-items:center;color:var(--lime);font-size:19px}.hero-proof div:nth-child(2){display:grid;line-height:1.7}.hero-proof strong{font-size:10px;font-weight:500}.hero-proof small{font-size:9px;color:#8e9aae}.proof-line{height:30px;width:1px;background:#3b485d;margin:0 11px}.proof-mini{font:800 14px var(--font);letter-spacing:-.11em;color:#fff}.proof-mini span{font:400 8px var(--font);vertical-align:top;color:var(--lime);letter-spacing:0}.hero-art{position:relative;height:478px;display:flex;align-items:center;justify-content:center;direction:ltr}.art-glow{position:absolute;width:410px;height:410px;border-radius:50%;background:radial-gradient(circle,rgba(210,237,113,.13),rgba(103,137,130,.08) 47%,transparent 70%)}.orbit{position:absolute;border:1px solid rgba(203,218,208,.13);border-radius:50%;transform:rotate(-24deg)}.orbit-one{width:480px;height:205px}.orbit-two{width:420px;height:305px;transform:rotate(42deg);border-style:dashed}.browser-card{position:relative;z-index:2;width:min(475px,90%);height:300px;background:#fafaf8;border-radius:12px;box-shadow:0 27px 75px #080f1b80;transform:rotate(-3deg);overflow:hidden;color:#233246}.browser-top{height:37px;background:#f1f2ef;border-bottom:1px solid #e6e8e2;display:flex;align-items:center;padding:0 12px;gap:14px}.browser-dots{display:flex;gap:4px}.browser-dots i,.site-window-head i{width:5px;height:5px;background:#bdc4c2;border-radius:50%}.address-bar{width:165px;background:#e5e8e3;border-radius:3px;font:6px var(--font);color:#65716d;text-align:center;padding:4px}.address-bar span{font-size:6px}.browser-menu{margin-right:auto;color:#8a938f}.browser-content{padding:0 23px;height:263px;background:#fcfcf9}.mock-nav{height:40px;border-bottom:1px solid #edf0ea;display:flex;align-items:center;gap:17px;font-size:6px;color:#6c7772}.mock-brand{display:flex;align-items:center;gap:5px;font-size:7px;font-weight:700;color:#283c35}.mock-brand i{width:12px;height:12px;border-radius:4px 4px 4px 1px;background:#a9c482}.mock-links{margin:auto}.mock-nav>b{font-size:6px;padding:4px 8px;background:#243b31;color:white;border-radius:2px}.mock-body{height:182px;display:flex;align-items:center;position:relative}.mock-copy{position:relative;z-index:2;width:54%;direction:rtl}.mock-copy small{font-size:6px;color:#87988c}.mock-copy h3{font-size:18px;line-height:1.6;letter-spacing:-.06em;margin:8px 0;color:#24352e}.mock-copy h3 em{font-style:normal;color:#718d59}.mock-copy p{font-size:6px;color:#88938e;margin:0 0 10px}.mock-button{font-size:6px;background:#283c31;border-radius:2px;color:#fff;padding:5px 8px;display:inline-block}.mock-button b{margin-right:12px;color:#d2ed71}.mock-visual{width:47%;height:146px;position:absolute;left:0;overflow:hidden;border-radius:50% 50% 38% 42%;background:linear-gradient(145deg,#d7e1cf,#b8cba8)}.mock-sun{position:absolute;top:18px;left:22px;width:38px;height:38px;background:#f0e2b7;border-radius:50%}.mock-wave{position:absolute;bottom:-10px;border-radius:50% 50% 0 0;width:130px;height:94px}.wave-a{background:#879e7b;left:-15px;transform:rotate(12deg)}.wave-b{background:#516f5b;left:48px;bottom:-27px;transform:rotate(-19deg)}.mock-leaf{position:absolute;right:24px;top:23px;font-size:38px;color:#56765e}.mock-footer{border-top:1px solid #edf0ea;height:30px;display:flex;align-items:center;gap:8px;font-size:5px;color:#8b9690}.mock-footer i{width:43px;height:2px;background:#d1dcce}.art-stamp{position:absolute;z-index:3;top:51px;left:10%;width:78px;height:78px;background:var(--lime);color:var(--navy);border-radius:50%;display:grid;place-content:center;text-align:center;transform:rotate(-12deg);box-shadow:0 7px 30px #0b1327}.art-stamp span{font-size:9px;font-weight:700;line-height:1.5}.art-stamp>b{line-height:1;font-size:13px}.art-stamp small{font-size:6px;opacity:.7}.floating-tag{position:absolute;z-index:4;display:flex;align-items:center;gap:9px;padding:10px 12px;background:#fff;color:#253147;border-radius:8px;box-shadow:0 12px 35px #0c152540;direction:rtl}.floating-tag>span:nth-child(2){display:grid;line-height:1.55}.floating-tag b{font-size:8px}.floating-tag small{font-size:7px;color:#88929d}.tag-domain{right:-3px;top:101px}.tag-domain>i{font-size:8px;color:#86b270;margin-right:7px}.tag-icon{width:24px;height:24px;border-radius:6px;background:#edf3e4;color:#5f7e50;display:grid;place-items:center;font-size:14px}.tag-mail{bottom:89px;left:0}.mail-icon{width:25px;height:25px;border-radius:50%;background:#e8eef7;display:grid;place-items:center;color:#537398}.art-caption{position:absolute;bottom:10px;left:15px;color:#aeb8c5;font-size:8px;display:flex;align-items:center;gap:8px}.art-caption span{height:1px;width:24px;background:var(--lime)}.hero-bottom{position:relative;z-index:2;border-top:1px solid #ffffff24;height:71px;display:flex;align-items:center;justify-content:space-between;color:#99a5b5;font-size:9px}.bottom-services{display:flex;gap:16px;align-items:center}.bottom-services i{width:3px;height:3px;background:var(--lime);border-radius:50%}.hero-bottom>a{font-size:16px;color:var(--lime)}.section-pad{padding:112px 0}.services{background:var(--paper)}.section-head{display:flex;align-items:end;justify-content:space-between;margin-bottom:42px}.dark-eyebrow{color:#788274}.dark-eyebrow>span{font:600 9px var(--font);color:#829269}.section-head h2,.steps-heading h2{font-size:42px;line-height:1.45;letter-spacing:-.065em;margin:15px 0 0;font-weight:600}.section-head h2 span,.steps-heading h2 span{color:#81956f}.section-head>p{max-width:370px;color:#747d89;font-size:11px;line-height:2.2;margin:0 0 8px}.service-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:15px}.service-card{padding:22px 24px 24px;border:1px solid #eaebe5;border-radius:10px;background:#fff;transition:transform .25s,box-shadow .25s}.service-card:hover{transform:translateY(-5px);box-shadow:0 15px 45px #1b2a1a0a}.service-top{display:flex;align-items:center;justify-content:space-between}.service-number{font-size:9px;color:#818b92}.service-icon{width:32px;height:32px;border-radius:50%;display:grid;place-items:center;font-size:17px;color:#637d56;background:#eff3e8}.service-illustration{height:145px;position:relative;display:flex;align-items:center;justify-content:center;margin:2px 0 13px;overflow:hidden}.domain-illus:before{content:"";position:absolute;width:118px;height:118px;border-radius:50%;background:#f2f4ec}.domain-prefix,.domain-name,.domain-tld{z-index:1;font-size:19px;font-weight:600;letter-spacing:-.08em}.domain-prefix{font-size:11px;color:#9ca59c;align-self:center;margin-top:-9px}.domain-name{color:#283a30}.domain-tld{font-size:13px;color:#82956e;align-self:center;margin-top:10px}.domain-orbit{position:absolute;border:1px solid #dce4d4;width:175px;height:66px;border-radius:50%;transform:rotate(-31deg)}.sparkle{position:absolute;right:24%;top:29px;color:#b5c393;font-size:15px}.site-illus{background:radial-gradient(ellipse,#f0f3eb,transparent 64%)}.site-window{width:180px;height:104px;position:relative;border:1px solid #dbe1d9;border-radius:6px;background:#fff;box-shadow:0 9px 20px #34483412;transform:perspective(300px) rotateY(-9deg) rotateX(3deg)}.site-window-head{height:14px;background:#f0f2ee;border-radius:5px 5px 0 0;display:flex;align-items:center;gap:3px;padding:0 7px}.site-window-head i{width:4px;height:4px}.site-window-head span{height:4px;width:58px;background:#e1e5de;border-radius:3px;margin:auto}.site-window-body{display:flex;padding:12px;gap:11px}.site-window-body>div:first-child{width:52%;display:grid;align-content:center;gap:5px}.site-window-body b{height:6px;width:45px;background:#647c5d;border-radius:4px}.site-window-body i{height:3px;width:58px;background:#e2e6df;border-radius:4px}.site-window-body i:nth-of-type(2){width:46px}.site-window-body em{width:27px;height:8px;border-radius:2px;background:#d4e78c;margin-top:3px}.site-picture{width:48%;height:50px;background:#d8e2d1;border-radius:30px 30px 4px 4px;position:relative;overflow:hidden}.site-picture:before{content:"";position:absolute;width:27px;height:27px;border-radius:50%;background:#f1e6c1;top:5px;left:8px}.site-picture span{position:absolute;width:80px;height:33px;bottom:-13px;right:-10px;background:#829a79;border-radius:50%}.site-window-base{position:absolute;bottom:-6px;left:28px;right:28px;height:6px;background:#d4d9d2;clip-path:polygon(0 0,100% 0,90% 100%,10% 100%)}.site-star{position:absolute;right:26%;top:23px;color:#93a786;font-size:14px}.email-illus{background:radial-gradient(ellipse,#eff3eb,transparent 66%);flex-direction:column;gap:10px}.mail-card{width:160px;height:70px;background:#fff;border:1px solid #e5e9e1;border-radius:8px;display:flex;align-items:center;padding:14px;gap:10px;box-shadow:0 9px 22px #34483410;position:relative}.mail-avatar{width:34px;height:34px;border-radius:50%;background:#dce8d4;display:grid;place-items:center;color:#556d4d;font-weight:700}.mail-lines{display:grid;gap:5px}.mail-lines b,.mail-lines i{height:4px;width:58px;background:#a9b69e;border-radius:4px}.mail-lines i{width:72px;background:#e4e8e1}.mail-lines i:last-child{width:42px}.mail-check{position:absolute;left:12px;top:12px;width:16px;height:16px;border-radius:50%;background:#769465;color:white;font-size:10px;text-align:center;line-height:16px}.mail-address{font-size:8px;color:#74806f;direction:ltr}.mail-shadow{position:absolute;bottom:20px;width:110px;height:9px;background:#dfe5d8;border-radius:50%;filter:blur(5px);z-index:-1}.service-card h3{font-size:17px;letter-spacing:-.04em;margin:0 0 8px}.service-card p{font-size:10px;line-height:2.1;color:#727c85;min-height:63px;margin:0}.service-link{display:flex;justify-content:space-between;align-items:center;border-top:1px solid #eff0ec;margin-top:17px;padding-top:14px;color:#516448;font-size:10px;font-weight:600}.service-link span{font-size:17px}.about{background:#182940;color:white;overflow:hidden;position:relative}.about:before{content:"";position:absolute;width:550px;height:550px;border:1px solid #ffffff0c;border-radius:50%;left:-200px;top:50%;transform:translateY(-50%);box-shadow:0 0 0 55px #ffffff05,0 0 0 110px #ffffff03}.about-wrap{display:grid;grid-template-columns:.95fr 1.05fr;gap:80px;align-items:center;position:relative}.about-emblem{height:310px;display:grid;place-items:center;position:relative}.emblem-ring{width:245px;height:245px;border-radius:50%;border:1px solid #ffffff20;box-shadow:0 0 0 23px #ffffff05,0 0 0 24px #ffffff10,0 0 55px #c2e37312;position:absolute}.emblem-logo{font:800 74px/1 var(--font);letter-spacing:-.16em;color:var(--lime);position:relative;margin-left:15px}.emblem-logo:after{content:"";position:absolute;top:5px;right:-2px;width:82px;height:8px;background:var(--lime);border-radius:9px;transform:rotate(-1deg)}.emblem-orbit{position:absolute;font-size:9px;color:#b8c3bc;background:#182940;padding:5px 10px;border:1px solid #ffffff21;border-radius:20px}.orbit-a{top:50px;right:22%}.orbit-b{bottom:48px;left:22%}.emblem-cross{position:absolute;right:25%;bottom:64px;font-size:18px;color:var(--lime)}.about-copy .eyebrow{color:#aab8bd}.about-copy h2{font-size:39px;line-height:1.55;letter-spacing:-.07em;margin:16px 0}.about-copy>p{max-width:470px;font-size:11px;line-height:2.2;color:#bbc4ce}.values{display:grid;grid-template-columns:repeat(3,1fr);gap:15px;margin-top:29px;padding-top:19px;border-top:1px solid #ffffff20}.values div{display:grid;gap:4px}.values b{font-size:11px;font-weight:600;color:#e6eddb}.values span{font-size:8px;color:#9eacb7}.steps{background:var(--cream)}.steps-heading{text-align:center}.steps-heading .eyebrow{justify-content:center}.steps-heading h2{font-size:38px}.steps-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:0;margin-top:58px}.steps-grid article{padding:0 34px;position:relative;border-left:1px solid #e3e5dd}.steps-grid article:first-child{border-left:0}.steps-grid article>span{font-size:9px;color:#9aab86;letter-spacing:.1em}.step-icon{width:45px;height:45px;border-radius:50%;background:#e9eee3;color:#647e59;display:grid;place-items:center;font-size:19px;margin:15px 0}.steps-grid h3{font-size:14px;margin:0 0 7px}.steps-grid p{font-size:10px;line-height:2;color:#77818a;max-width:250px;margin:0}.contact{background:#9db486;color:#17283b;position:relative;overflow:hidden}.contact-wrap{height:245px;display:flex;align-items:center;gap:30px;position:relative;z-index:1}.contact-symbol{width:80px;height:80px;border:1px solid #ffffff75;border-radius:50%;display:grid;place-items:center;font:800 25px var(--font);letter-spacing:-.14em;position:relative}.contact-symbol:after{content:"";position:absolute;top:21px;right:14px;width:40px;height:4px;background:var(--lime);border-radius:4px}.contact-symbol span{position:absolute;top:15px;right:12px;font:8px var(--font);letter-spacing:0}.contact-copy{flex:1}.contact-copy .eyebrow{color:#2d4736;font-size:9px}.contact-copy h2{font-size:31px;letter-spacing:-.06em;margin:5px 0}.contact-copy p{font-size:10px;color:#324938;margin:0}.button-light{background:var(--navy);color:#fff;position:relative;z-index:2}.button-light:hover{background:#203552}.contact-orb{position:absolute;left:10%;width:330px;height:330px;border-radius:50%;border:1px solid #ffffff36;box-shadow:0 0 0 28px #ffffff12,0 0 0 56px #ffffff0b}.site-footer{background:#101d35;color:#b3bdca}.footer-wrap{min-height:93px;display:flex;align-items:center;justify-content:space-between;font-size:9px}.footer-brand{min-width:unset;color:#fff}.footer-brand .brand-mark{width:34px;height:34px;border-radius:11px 11px 11px 3px}.footer-brand .brand-mark svg{width:24px}.footer-brand .brand-name strong{font-size:11px}.footer-brand .brand-name small{font-size:6px}
@media(max-width:900px){.container{width:min(100% - 42px,700px)}.nav-wrap{height:80px}.brand{min-width:unset}.main-nav{gap:20px}.hero{padding-top:122px;min-height:unset}.hero-grid{grid-template-columns:1fr;gap:0}.hero-copy{padding:35px 0 0}.hero h1{font-size:60px}.hero-art{height:390px;margin-top:2px}.hero-bottom{height:60px}.section-pad{padding:84px 0}.section-head h2,.steps-heading h2{font-size:36px}.service-grid{gap:10px}.service-card{padding:17px}.service-illustration{height:125px}.service-card p{min-height:90px}.about-wrap{gap:30px}.about-emblem{height:260px}.emblem-ring{width:190px;height:190px}.emblem-logo{font-size:60px}.about-copy h2{font-size:32px}}
@media(max-width:620px){.container{width:calc(100% - 36px)}.nav-wrap{height:72px}.brand-mark{width:37px;height:37px}.brand-mark svg{width:26px}.brand-name strong{font-size:12px}.brand-name small{font-size:7px}.nav-cta{margin-right:auto;margin-left:12px;min-height:37px;padding:0 11px;gap:9px;font-size:9px}.nav-cta span{font-size:14px}.menu-toggle{display:flex;position:relative;z-index:12;width:34px;height:34px;border:0;background:transparent;flex-direction:column;justify-content:center;gap:5px;padding:6px}.menu-toggle span{height:1px;width:20px;background:white;transition:transform .2s}.menu-toggle[aria-expanded=true] span:first-child{transform:translateY(3px) rotate(45deg)}.menu-toggle[aria-expanded=true] span:last-child{transform:translateY(-3px) rotate(-45deg)}.main-nav{display:none;position:absolute;top:63px;left:18px;right:18px;margin:0;padding:18px;background:#1b2b43;border:1px solid #ffffff20;border-radius:9px;flex-direction:column;gap:15px;box-shadow:0 14px 35px #07101c99}.main-nav.open{display:flex}.hero{padding-top:100px}.hero-grid{min-height:unset}.hero-copy{padding-top:25px}.hero h1{font-size:49px;margin:18px 0 12px}.hero-lead{font-size:11px;line-height:2}.hero-actions{margin-top:20px;gap:18px}.button{min-height:47px;padding:0 17px;font-size:10px;gap:17px}.hero-proof{margin-top:30px}.hero-art{height:300px;margin-top:8px}.browser-card{width:85%;height:231px}.browser-top{height:28px}.browser-content{height:203px;padding:0 15px}.mock-nav{height:30px}.mock-body{height:143px}.mock-copy h3{font-size:14px}.mock-visual{height:115px}.mock-footer{height:25px}.art-stamp{width:61px;height:61px;top:33px;left:6%}.art-stamp span{font-size:7px}.tag-domain{top:66px;right:-5px}.tag-mail{bottom:50px;left:-3px}.floating-tag{padding:7px 8px;gap:6px}.floating-tag b{font-size:7px}.floating-tag small{font-size:6px}.tag-icon,.mail-icon{width:20px;height:20px}.art-caption{font-size:7px;bottom:0}.hero-bottom{height:55px;font-size:7px}.bottom-services{gap:8px;font-size:7px}.section-pad{padding:68px 0}.section-head{display:block;margin-bottom:25px}.section-head h2,.steps-heading h2{font-size:32px}.section-head>p{font-size:10px;margin-top:15px}.service-grid{grid-template-columns:1fr;gap:11px}.service-card{padding:18px 20px}.service-illustration{height:145px}.service-card p{min-height:unset;font-size:10px}.service-link{margin-top:13px}.about-wrap{grid-template-columns:1fr;gap:15px}.about-emblem{height:205px;order:2}.emblem-ring{width:160px;height:160px}.emblem-logo{font-size:49px}.emblem-logo:after{width:56px;height:6px;top:3px}.orbit-a{top:17px}.orbit-b{bottom:15px}.emblem-cross{bottom:27px}.about-copy h2{font-size:31px}.about-copy>p{font-size:10px}.values{gap:8px;margin-top:21px}.values b{font-size:10px}.values span{font-size:7px}.steps-grid{grid-template-columns:1fr;margin-top:35px;gap:24px}.steps-grid article{border-left:0;padding:0 0 0 0;display:grid;grid-template-columns:45px 1fr;column-gap:13px}.steps-grid article>span{grid-column:1;grid-row:1/4;align-self:start;padding-top:5px}.steps-grid article .step-icon{grid-column:1;grid-row:2;margin:8px 0 0}.steps-grid article h3{grid-column:2;grid-row:1;margin:0}.steps-grid article p{grid-column:2;grid-row:2;max-width:unset}.contact-wrap{height:auto;min-height:230px;gap:15px;flex-wrap:wrap;padding:35px 0}.contact-symbol{width:55px;height:55px;font-size:18px}.contact-symbol:after{top:14px;right:9px;width:31px;height:3px}.contact-symbol span{top:9px;right:8px;font-size:6px}.contact-copy{flex-basis:calc(100% - 75px)}.contact-copy h2{font-size:23px}.contact-copy p{font-size:9px}.button-light{margin-right:70px}.contact-orb{left:-35%;width:260px;height:260px}.footer-wrap{padding:20px 0;display:grid;grid-template-columns:1fr auto;gap:10px}.footer-wrap>span:nth-child(2){grid-column:1/-1;grid-row:2}.footer-wrap>span:last-child{font-size:7px;text-align:left}}
/* Soft, low contrast palette and accessible contact form */
:root{--navy:#314156;--ink:#29384a;--muted:#77818e;--cream:#f6f5f1;--paper:#fbfaf7;--lime:#dce5c8;--line:#e6e8e2;--mint:#e7ebe2}
.about{background:#3d4d5d}
.emblem-logo{color:#dce5c8}
.emblem-logo:after{background:#dce5c8}
.emblem-cross,.text-link span,.mock-button b{color:#dce5c8}
.hero:before{background:radial-gradient(ellipse at 85% 38%,rgba(111,132,133,.22),transparent 35%),linear-gradient(120deg,transparent 56%,rgba(255,255,255,.018) 56%,transparent 56.2%)}
.art-glow{background:radial-gradient(circle,rgba(220,229,200,.09),rgba(130,148,142,.06) 47%,transparent 70%)}
.contact{background:#eef0e9;color:#29384a;padding:90px 0;}
.contact-layout{position:relative;z-index:1;display:grid;grid-template-columns:.85fr 1.15fr;gap:50px;align-items:center}
.contact-intro{position:relative;z-index:1}
.contact-symbol{width:70px;height:70px;margin-bottom:27px;border-color:#cbd1c6;color:#526252}
.contact-symbol:after{background:#9cac8d}
.contact-copy h2,.contact-intro h2{font-size:31px;letter-spacing:-.06em;margin:9px 0;color:#29384a}
.contact-intro>p{font-size:11px;line-height:2.1;color:#707b83;max-width:370px}
.contact-intro .eyebrow{color:#7c8974}
.contact-note{display:flex;align-items:center;gap:8px;margin-top:22px;color:#798479;font-size:9px}
.contact-note span{color:#82916e;font-size:15px}
.contact-form{position:relative;z-index:1;background:#fbfaf7;border:1px solid #e4e7df;border-radius:12px;padding:27px;box-shadow:0 12px 36px #3542520a}
.form-heading{display:flex;align-items:center;justify-content:space-between;margin-bottom:20px}
.form-heading h3{font-size:16px;margin:0;color:#29384a}
.form-heading>span{font-size:8px;color:#929a9f}
.form-grid{display:grid;grid-template-columns:1fr 1fr;gap:15px}
.contact-form label{display:grid;gap:6px;font-size:10px;font-weight:600;color:#49586a}
.contact-form input,.contact-form select,.contact-form textarea{width:100%;border:1px solid #e0e4dd;background:#fff;border-radius:6px;padding:11px 12px;font:400 10px var(--font);color:#29384a;outline:none;transition:border-color .2s,box-shadow .2s}
.contact-form input,.contact-form select{height:43px}
.contact-form textarea{resize:vertical;min-height:70px;line-height:1.8}
.contact-form input:focus,.contact-form select:focus,.contact-form textarea:focus{border-color:#9cac8d;box-shadow:0 0 0 3px #9cac8d20}
.contact-form input::placeholder,.contact-form textarea::placeholder{color:#a2a9ad}
.contact-form select:invalid{color:#a2a9ad}
.message-label{margin-top:15px}
.message-label>span{font-weight:400;color:#9ba2a4}
.form-submit{margin-top:16px;min-height:46px;border:0;cursor:pointer;background:#dce5c8}
.form-hint{font-size:8px;color:#929a9f;margin:10px 0 0}
.form-result{margin-top:17px;padding:16px;background:#f0f3eb;border:1px solid #e1e8d9;border-radius:8px}
.form-result h4{font-size:13px;margin:0 0 4px;color:#405344}
.form-result p{font-size:9px;line-height:1.9;color:#6c7970;margin:0 0 12px}
.result-actions{display:flex;gap:9px;flex-wrap:wrap}
.result-link{font-size:9px;font-weight:600;color:#fff;background:#75866a;border-radius:5px;padding:9px 13px}
.result-link:hover{background:#647858}
.result-edit{border:0;background:transparent;color:#737e83;font:500 9px var(--font);margin-top:12px;padding:4px 0;cursor:pointer}
.contact-form.submitted .form-grid,.contact-form.submitted .message-label,.contact-form.submitted .form-submit,.contact-form.submitted .form-hint{display:none}
.contact-orb{opacity:.35}
@media(max-width:900px){.contact-layout{grid-template-columns:.8fr 1.2fr;gap:25px}.contact{padding:70px 0}.contact-form{padding:21px}}
@media(max-width:620px){.contact{padding:60px 0}.contact-layout{grid-template-columns:1fr;gap:23px}.contact-symbol{width:56px;height:56px;margin-bottom:18px;font-size:19px}.contact-symbol:after{top:14px;right:9px;width:31px;height:3px}.contact-symbol span{top:9px;right:8px;font-size:6px}.contact-intro h2{font-size:25px}.contact-intro>p{font-size:10px;margin:5px 0}.contact-note{margin-top:12px}.contact-form{padding:19px 16px}.form-grid{gap:12px 9px}.contact-form input,.contact-form select{padding:9px;font-size:9px}.form-heading h3{font-size:14px}.form-heading>span{font-size:7px}.result-actions{display:grid;grid-template-columns:1fr 1fr}.result-link{text-align:center;padding:9px 5px}}
/* Matte charcoal visual identity */
:root{--navy:#17191a;--ink:#292c2d;--muted:#737879;--cream:#f3f2ee;--paper:#faf9f6;--lime:#d0d0c6;--line:#dedfda;--mint:#e5e5df}
body{background:var(--cream)}
.brand-mark{background:#ffffff08;border:1px solid #ffffff32;border-radius:13px 13px 13px 3px}
.brand-mark svg{fill:none;stroke:var(--lime);stroke-width:4;stroke-linecap:round;stroke-linejoin:round}
.footer-brand .brand-mark{background:#ffffff08}
.button,.form-submit{background:var(--lime);color:#1b1d1d}
.button:hover,.form-submit:hover{background:#e0e0d7}
.hero{background:#131516}
.hero:before{background:radial-gradient(ellipse at 82% 42%,#777d7530,transparent 38%),linear-gradient(120deg,transparent 56%,#ffffff04 56%,transparent 56.2%)}
.live-dot{background:#c5c7bc;box-shadow:0 0 14px #c5c7bc45}
.about{background:#1b1e1f}
.emblem-logo{color:#d0d0c6}
.emblem-logo:after{background:#d0d0c6}
.emblem-cross,.text-link span,.mock-button b{color:#d0d0c6}
.site-footer{background:#111314}
.hero-art{height:478px}
.hero-photo{position:absolute;inset:4px 10px 9px 15px;overflow:hidden;border-radius:18px;margin:0;background:#252829;box-shadow:0 30px 85px #0008;transform:rotate(-2deg)}
.hero-photo img{position:absolute;width:100%;height:100%;object-fit:cover;object-position:center;filter:saturate(.55) contrast(1.04);animation:photo-drift 24s ease-in-out infinite alternate}
.photo-shade{position:absolute;inset:0;background:linear-gradient(270deg,#101213d9 0%,#111415b3 39%,#10121229 78%),linear-gradient(0deg,#101212a8,transparent 60%)}
.hero-photo figcaption{position:absolute;inset:0;display:flex;flex-direction:column;align-items:flex-start;justify-content:center;padding:42px 45px;color:#f0f0eb;direction:rtl}
.photo-overline{font:500 8px/1.8 var(--font);letter-spacing:.18em;color:#d2d2c7b8;direction:ltr}
.hero-photo figcaption strong{font-size:clamp(28px,3.5vw,43px);line-height:1.5;letter-spacing:-.07em;margin-top:18px}
.photo-caption-line{border-top:1px solid #ffffff35;margin-top:17px;padding-top:12px;color:#e1e2dad1;font-size:9px}
.floating-tag{background:#212425ed;color:#eee;border:1px solid #ffffff20;box-shadow:0 12px 35px #0007;backdrop-filter:blur(12px)}
.floating-tag small{color:#b0b5b2}
.tag-icon,.mail-icon{background:#3b413b;color:#d0d0c6}
.tag-domain>i{color:#c5c7bc}
.art-stamp{left:7%;top:41px;width:70px;height:70px;background:#cacbc1;color:#1d2020;border:3px solid #f1f0e9;box-shadow:0 7px 30px #0009}
.art-stamp span{font:800 15px/1 var(--font);letter-spacing:-.14em}
.art-stamp>b{font-size:10px;color:#687062}
.art-caption{color:#d0d2cc;bottom:0}
.art-caption span{background:#c9cabe}
.service-grid{gap:17px}
.service-card{padding:0 0 21px;overflow:hidden;border-color:#e5e5df;background:#fff;box-shadow:0 10px 34px #1e20200a}
.service-photo{height:190px;position:relative;overflow:hidden;background:#242829}
.service-photo:after{content:"";position:absolute;inset:0;background:linear-gradient(0deg,#121516b8,transparent 70%),linear-gradient(90deg,#1013142b,#10131408)}
.service-photo img{width:100%;height:100%;display:block;object-fit:cover;filter:saturate(.58);transition:transform .65s cubic-bezier(.2,.7,.2,1),filter .4s}
.service-card:hover .service-photo img{transform:scale(1.045);filter:saturate(.78)}
.photo-index{position:absolute;z-index:1;right:17px;bottom:14px;color:#ffffffd4;font:500 8px var(--font);letter-spacing:.12em;direction:ltr}
.service-photo .service-icon{position:absolute;z-index:1;top:14px;left:14px;width:34px;height:34px;border:1px solid #ffffff55;background:#11151868;color:#f0f0e9;backdrop-filter:blur(8px)}
.service-card h3,.service-card p,.service-card .service-link{margin-right:21px;margin-left:21px}
.service-card h3{margin-top:17px}
.service-card p{min-height:64px}
.service-link{margin-top:14px}
.section-head h2 span,.steps-heading h2 span{color:#747c73}
.dark-eyebrow>span{color:#747c73}
.service-link{color:#515b54}
.service-link span{color:#4f5751}
.contact{background:#e8e8e2;color:#292c2d}
.contact-form{background:#f8f8f4;border-color:#dadcd5;box-shadow:0 20px 60px #292c2d0c}
.contact-form input,.contact-form select,.contact-form textarea{background:#fff;border-color:#dfe0da}
.contact-form input:focus,.contact-form select:focus,.contact-form textarea:focus{border-color:#8c9387;box-shadow:0 0 0 3px #8c938718}
.form-result{background:#edeee8;border-color:#d7d9d0;color:#434b43}
.form-result.error{background:#f3e8e5;border-color:#e2cbc5;color:#71453f}
.form-result.error::before{content:"تعذر إرسال الطلب";display:block;font-size:12px;font-weight:700;margin-bottom:3px}
.form-submit:disabled{opacity:.68;cursor:wait}
.contact-orb{opacity:.2;border-color:#555d5224;box-shadow:0 0 0 28px #ffffff10,0 0 0 56px #ffffff08}
@keyframes photo-drift{from{transform:scale(1.015)}to{transform:scale(1.09)}}
@media(max-width:900px){.hero-photo{inset:4px 8px 8px}.service-photo{height:150px}}
@media(max-width:620px){.hero-photo{inset:7px 8px 13px;border-radius:13px}.hero-photo figcaption{padding:26px}.photo-overline{font-size:6px}.hero-photo figcaption strong{font-size:26px;margin-top:12px}.photo-caption-line{font-size:7px;margin-top:10px;padding-top:8px}.art-stamp{left:2%;top:21px;width:57px;height:57px}.art-stamp span{font-size:12px}.service-photo{height:190px}.service-card p{min-height:unset}.service-card h3,.service-card p,.service-card .service-link{margin-right:18px;margin-left:18px}}
@media(prefers-reduced-motion:reduce){html{scroll-behavior:auto}*,*:before,*:after{animation-duration:.01ms!important;animation-iteration-count:1!important;transition-duration:.01ms!important}}
.emblem-logo{width:172px;height:140px;display:grid;place-items:center;margin:0}
.emblem-logo svg{width:100%;height:100%;fill:none;stroke:var(--lime);stroke-width:3.4;stroke-linecap:round;stroke-linejoin:round}
.emblem-logo:after{display:none}
.contact-symbol{display:grid;place-items:center}
.contact-symbol svg{width:63%;height:auto;fill:none;stroke:#526252;stroke-width:4;stroke-linecap:round;stroke-linejoin:round}
.contact-symbol:after{display:none}
.service-photo img{object-position:center}
.card-domain .service-photo img{object-position:center 50%}
.card-site .service-photo img{object-position:center 47%}
.card-email .service-photo img{object-position:center 46%}
@media(max-width:620px){.emblem-logo{width:128px;height:103px}.contact-symbol svg{width:63%}}

/* Terms and cancellation policies */
.policies{background:#f2f2ed;color:#292c2d}
.policies-heading{display:flex;align-items:end;justify-content:space-between;gap:24px;margin-bottom:28px}
.policies-heading h2{font-size:clamp(26px,3vw,38px);letter-spacing:-.06em;margin:8px 0 0}
.policies-heading>p{max-width:360px;margin:0;color:#727871;font-size:11px}
.policy-grid{display:grid;grid-template-columns:1fr 1fr;gap:14px;align-items:start}
.policy-card{background:#fbfbf8;border:1px solid #dedfd8;border-radius:10px;box-shadow:0 10px 30px #22240d08;overflow:hidden}
.policy-card summary{list-style:none;cursor:pointer;display:flex;align-items:center;gap:13px;padding:18px 20px;font-size:13px;font-weight:700;color:#303632}
.policy-card summary::-webkit-details-marker{display:none}
.policy-number{font:600 9px/1 var(--font);color:#798474;letter-spacing:.08em}
.policy-toggle{margin-right:auto;width:27px;height:27px;border:1px solid #dfe1d9;border-radius:50%;display:grid;place-items:center;color:#64705f;font-size:18px;font-weight:400;transition:transform .2s}
.policy-card[open] .policy-toggle{transform:rotate(45deg)}
.policy-content{padding:0 20px 19px;color:#626a64;font-size:10px;line-height:2.1}
.policy-content p{margin:0 0 10px}
.policy-content ul{padding:0 17px 0 0;margin:0}
.policy-content li{padding-right:2px;margin:0 0 7px}
.policy-content li::marker{color:#8c987c}
.policy-contact{border-top:1px solid #e8e9e3;padding-top:12px;margin-top:12px!important}
.policy-contact a{color:#59694f;text-decoration:underline;text-underline-offset:3px;font-weight:700}
.footer-meta{display:flex;align-items:center;gap:18px;font-size:9px}
.footer-meta a{color:#d4d9d1;transition:color .2s}
.footer-meta a:hover{color:#e1e4d8}
@media(max-width:800px){.policy-grid{grid-template-columns:1fr}.policies-heading{align-items:start;flex-direction:column;gap:9px}.footer-meta{flex-wrap:wrap;gap:9px 14px}}
@media(max-width:620px){.policy-card summary{padding:15px;font-size:11px}.policy-content{padding:0 15px 16px;font-size:9px}.footer-meta{grid-column:1/-1;grid-row:3;justify-content:flex-start}.footer-meta span{width:100%;text-align:right}.footer-wrap>span:last-child{display:none}}
```

## wrangler.jsonc

```jsonc
{
  "$schema": "./node_modules/wrangler/config-schema.json",
  "name": "ww-business-site",
  "main": "cloudflare/worker.js",
  "compatibility_date": "2026-10-03",
  "workers_dev": true,
  "assets": {
    "directory": "./",
    "binding": "ASSETS",
    "run_worker_first": ["/api/*", "/health"]
  },
  "d1_databases": [
    {
      "binding": "DB",
      "database_name": "ww-customer-requests",
      "database_id": "5fdc9162-dcb1-4db8-8ccf-ebf2462c72ad",
      "migrations_dir": "migrations"
    }
  ]
}
```
