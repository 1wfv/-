const loginPanel = document.querySelector('#login-panel');
const ordersPanel = document.querySelector('#orders-panel');
const loginForm = document.querySelector('#login-form');
const loginFeedback = document.querySelector('#login-feedback');
const ordersFeedback = document.querySelector('#orders-feedback');
const ordersList = document.querySelector('#orders-list');
const ordersCount = document.querySelector('#orders-count');
const logoutButton = document.querySelector('#logout-button');
const englishAdmin = document.documentElement.lang.toLowerCase().startsWith('en');
const adminText = (arabic, english) => englishAdmin ? english : arabic;
const priceDefaults = { domainSaNew:100,domainSaRenew:100,domainSaRecovery:150,domainSaDirect:199,domainSaTransfer:100,domainGlobalNew:75,domainGlobalRenew:75,domainGlobalTransfer:80,googleStarter:390,googleStandard:800,googlePlus:1200,microsoftBasic:399,microsoftStandard:790,microsoftPremium:1200,microsoftCopilot:1600,websitePremium:1500 };
const priceLabels = { domainSaNew:['تسجيل نطاق سعودي','Saudi domain registration'],domainSaRenew:['تجديد نطاق سعودي','Saudi domain renewal'],domainSaRecovery:['استعادة نطاق سعودي','Saudi domain recovery'],domainSaDirect:['التجديد المباشر السعودي','Saudi direct renewal'],domainSaTransfer:['نقل نطاق سعودي','Saudi domain transfer'],domainGlobalNew:['تسجيل نطاق عالمي','Global domain registration'],domainGlobalRenew:['تجديد نطاق عالمي','Global domain renewal'],domainGlobalTransfer:['نقل نطاق عالمي','Global domain transfer'],googleStarter:['Google Workspace Starter','Google Workspace Starter'],googleStandard:['Google Workspace Standard','Google Workspace Standard'],googlePlus:['Google Workspace Plus','Google Workspace Plus'],microsoftBasic:['Microsoft 365 Basic','Microsoft 365 Basic'],microsoftStandard:['Microsoft 365 Standard','Microsoft 365 Standard'],microsoftPremium:['Microsoft 365 Premium','Microsoft 365 Premium'],microsoftCopilot:['Microsoft 365 Copilot','Microsoft 365 Copilot'],websitePremium:['باقة إنشاء المواقع','Website creation package'] };

async function api(url, options = {}) {
  const response = await fetch(url, { credentials: 'same-origin', ...options });
  const data = await response.json().catch(() => ({}));
  if (!response.ok) {
    if (englishAdmin && response.status === 401) throw new Error('Please sign in to view requests.');
    const message = data.error || 'تعذر إكمال الطلب.';
    throw new Error(englishAdmin && /[\u0600-\u06FF]/.test(message) ? 'The request could not be completed. Please try again.' : message);
  }
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

function ensureContentEditor() {
  let form = document.querySelector('#content-form');
  if (form) return form;
  const section = document.createElement('section'); section.className = 'content-editor';
  const title = englishAdmin ? 'Content management' : 'إدارة المحتوى';
  const heading = document.createElement('h2'); heading.textContent = englishAdmin ? 'Edit prices, FAQ and announcement' : 'تحديث الأسعار والأسئلة والإعلان';
  const description = document.createElement('p'); description.textContent = englishAdmin ? 'Changes are published on the relevant site pages.' : 'تظهر التعديلات في صفحات الموقع المرتبطة.';
  form = document.createElement('form'); form.id = 'content-form';
  form.innerHTML = englishAdmin
    ? '<h3>Announcement</h3><label><input name="announcementActive" type="checkbox"> Publish announcement</label><div class="content-columns"><label>Arabic title<input name="announcementArTitle" maxlength="120"></label><label>Arabic text<textarea name="announcementArBody" maxlength="1000"></textarea></label><label>English title<input name="announcementEnTitle" maxlength="120"></label><label>English text<textarea name="announcementEnBody" maxlength="1000"></textarea></label></div><h3>Custom FAQ</h3><div class="content-columns"><label>Arabic question<input name="faqArQuestion" maxlength="220"></label><label>Arabic answer<textarea name="faqArAnswer" maxlength="1000"></textarea></label><label>English question<input name="faqEnQuestion" maxlength="220"></label><label>English answer<textarea name="faqEnAnswer" maxlength="1000"></textarea></label></div><h3>Prices in SAR</h3><div class="content-help">Prices below update product pages and the calculator.</div><div class="price-editor" id="price-editor"></div><button class="primary-button" type="submit">Save and publish</button><p class="feedback" id="content-feedback" role="status" aria-live="polite"></p>'
    : '<h3>الإعلان</h3><label><input name="announcementActive" type="checkbox"> نشر الإعلان</label><div class="content-columns"><label>عنوان عربي<input name="announcementArTitle" maxlength="120"></label><label>نص عربي<textarea name="announcementArBody" maxlength="1000"></textarea></label><label>عنوان إنجليزي<input name="announcementEnTitle" maxlength="120"></label><label>نص إنجليزي<textarea name="announcementEnBody" maxlength="1000"></textarea></label></div><h3>سؤال شائع مخصص</h3><div class="content-columns"><label>السؤال بالعربية<input name="faqArQuestion" maxlength="220"></label><label>الإجابة بالعربية<textarea name="faqArAnswer" maxlength="1000"></textarea></label><label>السؤال بالإنجليزية<input name="faqEnQuestion" maxlength="220"></label><label>الإجابة بالإنجليزية<textarea name="faqEnAnswer" maxlength="1000"></textarea></label></div><h3>الأسعار بالريال</h3><div class="content-help">تحدّث هذه الأسعار صفحة المنتجات والحاسبة.</div><div class="price-editor" id="price-editor"></div><button class="primary-button" type="submit">حفظ ونشر</button><p class="feedback" id="content-feedback" role="status" aria-live="polite"></p>';
  section.append(heading, description, form); ordersPanel.append(section); return form;
}

async function loadSiteContent() {
  const form = ensureContentEditor(); const editor = form.querySelector('#price-editor');
  editor.replaceChildren();
  for (const [key, label] of Object.entries(priceLabels)) { const wrapper = document.createElement('label'); wrapper.textContent = label[englishAdmin ? 1 : 0]; const input = document.createElement('input'); input.type = 'number'; input.min = '0'; input.max = '100000'; input.step = '1'; input.name = `price:${key}`; input.required = true; wrapper.append(input); editor.append(wrapper); }
  form.addEventListener('submit', saveSiteContent, { once: true });
  try {
    const data = await api('/api/site-content'); const content = data.content || {};
    for (const name of ['announcementArTitle','announcementArBody','announcementEnTitle','announcementEnBody','faqArQuestion','faqArAnswer','faqEnQuestion','faqEnAnswer']) form.elements[name].value = content[name] || '';
    form.elements.announcementActive.checked = content.announcementActive === 'true' || content.announcementActive === true;
    const prices = { ...priceDefaults, ...(content.prices || {}) };
    for (const key of Object.keys(priceDefaults)) form.elements[`price:${key}`].value = prices[key];
  } catch (error) { document.querySelector('#content-feedback').textContent = error.message; }
}

async function saveSiteContent(event) {
  event.preventDefault(); const form = event.currentTarget; const feedback = form.querySelector('#content-feedback');
  const content = Object.fromEntries(['announcementArTitle','announcementArBody','announcementEnTitle','announcementEnBody','faqArQuestion','faqArAnswer','faqEnQuestion','faqEnAnswer'].map((key) => [key, form.elements[key].value]));
  content.announcementActive = form.elements.announcementActive.checked;
  content.prices = Object.fromEntries(Object.keys(priceDefaults).map((key) => [key, Number(form.elements[`price:${key}`].value)]));
  try { await api('/api/site-content', { method: 'PUT', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ content }) }); feedback.textContent = adminText('تم نشر المحتوى والأسعار.', 'Content and prices published.'); form.addEventListener('submit', saveSiteContent, { once: true }); }
  catch (error) { feedback.textContent = error.message; form.addEventListener('submit', saveSiteContent, { once: true }); }
}

function renderOrders(orders) {
  ordersCount.textContent = String(orders.length);
  ordersList.replaceChildren();
  if (!orders.length) {
    const empty = document.createElement('div');
    empty.className = 'empty-state';
    empty.textContent = adminText('لا توجد طلبات حتى الآن. ستظهر طلبات العملاء الجديدة هنا.', 'There are no requests yet. New customer requests will appear here.');
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
    const serviceNames = { 'إنشاء نطاق': 'Domain registration', 'إنشاء موقع': 'Website creation', 'بريد أعمال': 'Business email', 'جميع الخدمات': 'All services', 'تذكير بتجديد نطاق': 'Domain renewal reminder request', 'طلب موعد استشارة': 'Consultation request', 'طلب اتصال': 'Phone call request', 'تقييم خدمة': 'Customer feedback', 'طلب عرض سعر': 'Custom quote request', 'صيانة موقع': 'Website maintenance' };
    service.textContent = englishAdmin ? (serviceNames[order.service] || order.service) : order.service;
    const date = document.createElement('div');
    date.className = 'order-date';
    date.textContent = new Date(order.createdAt).toLocaleString(englishAdmin ? 'en-GB' : 'ar-SA', { dateStyle: 'medium', timeStyle: 'short' });
    heading.append(name, service);
    const status = document.createElement('select');
    status.className = 'order-status-select';
    status.setAttribute('aria-label', adminText(`حالة طلب ${order.name}`, `Status for ${order.name}`));
    const statusOptions = [
      ['new', adminText('جديد', 'New')], ['reviewing', adminText('قيد المراجعة', 'Under review')], ['awaiting_customer', adminText('بانتظار العميل', 'Waiting for customer')],
      ['in_progress', adminText('قيد التنفيذ', 'In progress')], ['completed', adminText('مكتمل', 'Completed')], ['cancelled', adminText('ملغي', 'Cancelled')]
    ];
    statusOptions.forEach(([value, label]) => {
      const option = document.createElement('option');
      option.value = value; option.textContent = label; option.selected = (order.status || 'new') === value;
      status.append(option);
    });
    status.addEventListener('change', async () => {
      status.disabled = true;
      try {
        await api(`/api/orders/${encodeURIComponent(order.requestNumber)}/status`, { method: 'PATCH', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ status: status.value }) });
        ordersFeedback.textContent = adminText('تم تحديث حالة الطلب.', 'Request status updated.');
      } catch (error) { ordersFeedback.textContent = error.message; ordersFeedback.className = 'feedback error'; }
      finally { status.disabled = false; }
    });
    const remove = document.createElement('button');
    remove.type = 'button';
    remove.className = 'delete-button';
    remove.textContent = adminText('حذف الطلب', 'Delete request');
    remove.addEventListener('click', async () => {
      if (!window.confirm(adminText(`حذف طلب ${order.name}؟`, `Delete the request from ${order.name}?`))) return;
      try {
        await api(`/api/orders/${encodeURIComponent(order.requestNumber)}`, { method: 'DELETE' });
        await loadOrders();
      } catch (error) { ordersFeedback.textContent = error.message; ordersFeedback.className = 'feedback error'; }
    });
    const notify = document.createElement('button'); notify.type = 'button'; notify.className = 'quiet-button'; notify.textContent = adminText('نسخ رسالة الحالة', 'Copy status update');
    notify.addEventListener('click', async () => { const labels={new:adminText('تم استلام طلبك','We received your request'),reviewing:adminText('طلبك قيد المراجعة','Your request is under review'),awaiting_customer:adminText('نحتاج معلومات إضافية لمتابعة طلبك','We need more information to proceed'),in_progress:adminText('بدأنا العمل على طلبك','Work on your request has started'),completed:adminText('اكتمل طلبك','Your request is complete'),cancelled:adminText('تم إغلاق طلبك','Your request has been closed')};const link=`${location.origin}${englishAdmin?'/en/track-order.html':'/track-order.html'}?id=${encodeURIComponent(order.requestNumber)}`;const message=`${order.name}, ${labels[status.value]||labels[order.status]}. ${adminText('يمكنك متابعة الحالة من الرابط:','Track your request here:')} ${link}`;try{await navigator.clipboard.writeText(message);ordersFeedback.textContent=adminText('نُسخت رسالة الحالة. أرسلها للعميل بعد مراجعتها.','Status message copied. Review and send it to the customer.');}catch{ordersFeedback.textContent=message;}});
    const meta = document.createElement('div');
    meta.append(date, status, notify, remove);
    meta.style.cssText = 'display:flex;align-items:center;gap:14px';
    top.append(heading, meta);
    const details = document.createElement('div');
    details.className = 'order-details';
    addDetail(details, adminText('البريد', 'Email'), order.email);
    addDetail(details, adminText('الجوال', 'Mobile'), order.phone);
    addDetail(details, adminText('الموافقة على الشروط', 'Terms acceptance'), order.termsAccepted ? (englishAdmin ? `Accepted (${order.termsVersion || 'previous version'})` : `موافق عليها (${order.termsVersion || 'إصدار سابق'})`) : adminText('غير مسجلة', 'Not recorded'));
    if (order.message) addDetail(details, adminText('التفاصيل', 'Details'), order.message, 'order-message');
    for (const file of order.files || []) { const row=document.createElement('div');row.className='order-detail';const label=document.createElement('b');label.textContent=adminText('ملف مرفق:','File:');const link=document.createElement('a');link.href=`/api/customer-files/${encodeURIComponent(file.id)}`;link.textContent=`${file.name} (${Math.ceil(file.size/1024)} KB)`;link.setAttribute('download','');row.append(label,link);details.append(row); }
    card.append(top, details);
    const invite = document.createElement('button'); invite.type='button'; invite.className='order-notify'; invite.textContent=adminText('إنشاء رابط رفع ملفات','Create secure upload link');
    invite.addEventListener('click', async()=>{invite.disabled=true;try{const result=await api('/api/upload-invites',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({orderId:order.id})});const link=`${location.origin}${englishAdmin?'/en':'/'}file-upload.html?token=${encodeURIComponent(result.token)}`;await navigator.clipboard.writeText(link);ordersFeedback.textContent=adminText('تم إنشاء رابط رفع صالح لمدة 7 أيام ونسخه. أرسله للعميل من قناة التواصل المتفق عليها.','A seven-day upload link was created and copied. Send it to the customer through your agreed contact channel.');}catch(error){ordersFeedback.textContent=error.message;}finally{invite.disabled=false;}});
    card.append(invite);
    ordersList.append(card);
  });
}

async function loadOrders() {
  ordersFeedback.textContent = adminText('جارٍ تحميل الطلبات…', 'Loading requests…');
  ordersFeedback.className = 'feedback';
  try {
    const data = await api('/api/orders');
    renderOrders(data.orders);
    ordersFeedback.textContent = '';
  } catch (error) {
    if (error.message.includes('سجل الدخول') || error.message.includes('Please sign in')) showLogin();
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
  loadSiteContent();
}

loginForm.addEventListener('submit', async (event) => {
  event.preventDefault();
  loginFeedback.textContent = adminText('جارٍ التحقق…', 'Checking…');
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
