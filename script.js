const menuButton = document.querySelector('.menu-toggle');
const navigation = document.querySelector('.main-nav');

function openLinkedPolicy() {
  const target = document.getElementById(window.location.hash.slice(1));
  if (target instanceof HTMLDetailsElement) target.open = true;
}

openLinkedPolicy();
window.addEventListener('hashchange', openLinkedPolicy);

if (menuButton && navigation) {
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
}

const contactForm = document.querySelector('#contact-form');
const formResult = document.querySelector('#form-result');
const englishPage = document.documentElement.lang.toLowerCase().startsWith('en');

if (contactForm) {
  const productNames = {
    'domain-sa': 'تسجيل نطاق سعودي', 'domain-global': 'تسجيل نطاق عالمي',
    'google-starter': 'Google Workspace Starter', 'google-standard': 'Google Workspace Standard', 'google-plus': 'Google Workspace Plus',
    'microsoft-basic': 'Microsoft 365 Business Basic', 'microsoft-standard': 'Microsoft 365 Business Standard',
    'microsoft-premium': 'Microsoft 365 Business Premium', 'microsoft-copilot': 'Microsoft 365 Copilot',
    'website-premium': 'باقة إنشاء المواقع Premium'
  };
  if (englishPage) Object.assign(productNames, {
    'domain-sa': 'Saudi domain registration', 'domain-global': 'Global domain registration',
    'google-starter': 'Google Workspace Starter', 'google-standard': 'Google Workspace Standard', 'google-plus': 'Google Workspace Plus',
    'microsoft-basic': 'Microsoft 365 Business Basic', 'microsoft-standard': 'Microsoft 365 Business Standard',
    'microsoft-premium': 'Microsoft 365 Business Premium', 'microsoft-copilot': 'Microsoft 365 Copilot',
    'website-premium': 'Website Premium package'
  });
  const serviceSelect = contactForm.elements.service;
  const additionalServices = [
    ['تذكير بتجديد نطاق', englishPage ? 'Request a domain renewal reminder' : 'طلب تذكير بتجديد نطاق'],
    ['طلب موعد استشارة', englishPage ? 'Request a consultation time' : 'طلب موعد استشارة'],
    ['طلب اتصال', englishPage ? 'Request a phone call' : 'طلب اتصال هاتفي'],
    ['تقييم خدمة', englishPage ? 'Share feedback about a service' : 'مشاركة تقييم خدمة'],
    ['طلب عرض سعر', englishPage ? 'Request a custom quote' : 'طلب عرض سعر مخصص'],
    ['صيانة موقع', englishPage ? 'Website maintenance' : 'صيانة موقع']
  ];
  additionalServices.forEach(([value, label]) => {
    if (![...serviceSelect.options].some((option) => option.value === value)) serviceSelect.add(new Option(label, value));
  });
  const productKey = new URLSearchParams(window.location.search).get('product');
  if (productNames[productKey]) {
    contactForm.elements.service.value = productKey.startsWith('domain-') ? 'إنشاء نطاق'
      : productKey === 'website-premium' ? 'إنشاء موقع' : 'بريد أعمال';
    contactForm.elements.message.value = englishPage
      ? `I would like to ask about ${productNames[productKey]}.`
      : `أرغب في الاستفسار عن ${productNames[productKey]}.`;
  }

  const query = new URLSearchParams(window.location.search);
  if (query.get('flow') === 'review') serviceSelect.value = 'تقييم خدمة';
  if (query.get('flow') === 'appointment') serviceSelect.value = 'طلب موعد استشارة';
  if (query.get('flow') === 'callback') serviceSelect.value = 'طلب اتصال';
  if (query.get('flow') === 'reminder') serviceSelect.value = 'تذكير بتجديد نطاق';
  if (query.get('flow') === 'quote') serviceSelect.value = 'طلب عرض سعر';
  if (query.get('flow') === 'maintenance') serviceSelect.value = 'صيانة موقع';
  const quoteDetails = query.get('quote');
  if (quoteDetails) contactForm.elements.message.value = (englishPage ? 'Quote request details: ' : 'تفاصيل طلب عرض السعر: ') + quoteDetails;
  const recommendation = query.get('recommendation');
  if (query.get('flow') === 'review' && query.get('order')) {
    contactForm.elements.message.value = englishPage
      ? `Feedback for request ${query.get('order')}: `
      : `تقييم الطلب رقم ${query.get('order')}: `;
  }
  if (['إنشاء نطاق', 'إنشاء موقع', 'بريد أعمال', 'جميع الخدمات', 'صيانة موقع'].includes(recommendation)) {
    serviceSelect.value = recommendation;
    if (englishPage) contactForm.elements.message.value = `I would like help with: ${recommendation === 'إنشاء نطاق' ? 'domain registration' : recommendation === 'إنشاء موقع' ? 'website creation' : recommendation === 'بريد أعمال' ? 'business email' : recommendation === 'صيانة موقع' ? 'website maintenance' : 'all digital services'}.`;
    else contactForm.elements.message.value = `أرغب بالمساعدة في خدمة: ${recommendation}.`;
  }

  const formHeading = contactForm.querySelector('.form-heading');
  const formGrid = contactForm.querySelector('.form-grid');
  const messageLabel = contactForm.querySelector('.message-label');
  const termsLabel = contactForm.querySelector('.terms-consent');
  const sendButton = contactForm.querySelector('.form-submit');
  const conditionalFields = document.createElement('div');
  conditionalFields.className = 'form-grid conditional-fields';
  conditionalFields.hidden = true;
  const field = (labelText, control, fieldName) => {
    const label = document.createElement('label');
    label.htmlFor = fieldName;
    label.append(document.createTextNode(labelText));
    control.id = fieldName;
    if (!control.name) control.name = fieldName.replaceAll('-', '');
    label.append(control);
    return label;
  };
  const textInput = (name, type, placeholder = '') => {
    const input = document.createElement('input');
    input.type = type;
    input.name = name;
    input.placeholder = placeholder;
    return input;
  };
  const reminderDomain = textInput('reminderDomain', 'text', 'yourbrand.sa');
  reminderDomain.dir = 'ltr'; reminderDomain.required = true;
  const reminderDate = textInput('reminderDate', 'date'); reminderDate.required = true;
  const reminderMethod = document.createElement('select');
  reminderMethod.name = 'reminderMethod';
  reminderMethod.required = true;
  reminderMethod.innerHTML = englishPage
    ? '<option value="email">Email</option><option value="phone">Phone</option>'
    : '<option value="البريد الإلكتروني">البريد الإلكتروني</option><option value="الهاتف">الهاتف</option>';
  const reminderConsentLabel = document.createElement('label');
  reminderConsentLabel.className = 'terms-consent extra-consent';
  const reminderConsent = document.createElement('input'); reminderConsent.type = 'checkbox'; reminderConsent.name = 'reminderConsent'; reminderConsent.required = true;
  const reminderConsentText = document.createElement('span');
  reminderConsentText.textContent = englishPage
    ? 'I agree to store these domain and expiry details for a manual follow-up. This request does not send automatic reminders.'
    : 'أوافق على حفظ بيانات النطاق وتاريخ انتهائه لمتابعة يدوية. لا يرسل هذا الطلب تذكيرات تلقائية.';
  reminderConsentLabel.append(reminderConsent, reminderConsentText);
  const reminderNote = document.createElement('p');
  reminderNote.className = 'form-hint conditional-note';
  reminderNote.textContent = englishPage
    ? 'A reminder request is saved in the private dashboard for manual follow-up; automatic email or SMS delivery is not configured.'
    : 'يُحفظ طلب التذكير في لوحة الإدارة للمتابعة اليدوية؛ إرسال بريد أو رسالة آلية غير مفعّل.';
  const appointmentDate = textInput('preferredDate', 'date'); appointmentDate.required = true;
  const appointmentTime = document.createElement('select');
  appointmentTime.name = 'preferredTime';
  appointmentTime.required = true;
  appointmentTime.innerHTML = englishPage
    ? '<option value="morning">Morning</option><option value="afternoon">Afternoon</option><option value="evening">Evening</option>'
    : '<option value="صباحًا">صباحًا</option><option value="ظهرًا">ظهرًا</option><option value="مساءً">مساءً</option>';
  const appointmentNote = document.createElement('p');
  appointmentNote.className = 'form-hint conditional-note';
  appointmentNote.textContent = englishPage
    ? 'This is a preferred time request, not a confirmed booking. We will contact you to confirm.'
    : 'هذا طلب وقت مفضل وليس حجزًا مؤكدًا. سنتواصل معك لتأكيد الموعد.';
  const callbackNote = document.createElement('p');
  callbackNote.className = 'form-hint conditional-note';
  callbackNote.textContent = englishPage ? 'We will call the number you provide after manually confirming availability.' : 'سنتصل على الرقم الذي أدخلته بعد تأكيد الوقت يدويًا.';
  const rating = document.createElement('select');
  rating.name = 'feedbackRating';
  rating.innerHTML = englishPage
    ? '<option value="5">5 — Excellent</option><option value="4">4 — Very good</option><option value="3">3 — Good</option><option value="2">2 — Fair</option><option value="1">1 — Needs improvement</option>'
    : '<option value="5">5 — ممتاز</option><option value="4">4 — جيد جدًا</option><option value="3">3 — جيد</option><option value="2">2 — مقبول</option><option value="1">1 — يحتاج تحسينًا</option>';
  const reviewConsentLabel = document.createElement('label');
  reviewConsentLabel.className = 'terms-consent extra-consent';
  const reviewConsent = document.createElement('input'); reviewConsent.type = 'checkbox'; reviewConsent.name = 'reviewConsent';
  const reviewConsentText = document.createElement('span');
  reviewConsentText.textContent = englishPage
    ? 'I give WW permission to publish this feedback without my contact details. Optional; unchecked feedback remains private.'
    : 'أسمح لـWW بنشر هذا التقييم دون بيانات التواصل. الموافقة اختيارية، وإن لم أوافق يبقى التقييم خاصًا.';
  reviewConsentLabel.append(reviewConsent, reviewConsentText);
  conditionalFields.append(
    field(englishPage ? 'Domain name' : 'اسم النطاق', reminderDomain, 'reminder-domain'),
    field(englishPage ? 'Expiry date' : 'تاريخ الانتهاء', reminderDate, 'reminder-date'),
    field(englishPage ? 'Preferred follow-up method' : 'وسيلة المتابعة المفضلة', reminderMethod, 'reminder-method'),
    reminderConsentLabel, reminderNote,
    field(englishPage ? 'Preferred date' : 'التاريخ المفضل', appointmentDate, 'appointment-date'),
    field(englishPage ? 'Preferred time' : 'الوقت المفضل', appointmentTime, 'appointment-time'),
    field(englishPage ? 'Your rating' : 'تقييمك', rating, 'feedback-rating'),
    reviewConsentLabel, appointmentNote, callbackNote
  );

  const wizard = document.createElement('div'); wizard.className = 'request-wizard';
  const progress = document.createElement('ol'); progress.className = 'wizard-progress'; progress.setAttribute('aria-label', englishPage ? 'Request steps' : 'خطوات الطلب');
  const stepNames = englishPage ? ['Contact details', 'Service details', 'Review and send'] : ['بيانات التواصل', 'تفاصيل الخدمة', 'مراجعة وإرسال'];
  stepNames.forEach((name, index) => { const item = document.createElement('li'); item.textContent = `${index + 1}. ${name}`; progress.append(item); });
  const panels = [0, 1, 2].map((index) => { const panel = document.createElement('section'); panel.className = 'wizard-panel'; panel.dataset.step = String(index); wizard.append(panel); return panel; });
  panels[0].append(formGrid);
  panels[1].append(conditionalFields, messageLabel);
  const summaryTitle = document.createElement('h4'); summaryTitle.textContent = englishPage ? 'Request summary' : 'ملخص الطلب';
  const summary = document.createElement('div'); summary.className = 'wizard-summary'; summary.setAttribute('aria-live', 'polite');
  panels[2].append(summaryTitle, summary, termsLabel, sendButton);
  const stepControls = document.createElement('div'); stepControls.className = 'wizard-controls';
  const backButton = document.createElement('button'); backButton.type = 'button'; backButton.className = 'button button-small wizard-back'; backButton.textContent = englishPage ? 'Back' : 'رجوع';
  const nextButton = document.createElement('button'); nextButton.type = 'button'; nextButton.className = 'button button-small wizard-next'; nextButton.textContent = englishPage ? 'Continue →' : 'متابعة ←';
  stepControls.append(backButton, nextButton);
  const wizardLive = document.createElement('p'); wizardLive.className = 'wizard-live'; wizardLive.setAttribute('aria-live', 'polite');
  wizard.append(progress, stepControls, wizardLive);
  contactForm.insertBefore(wizard, formHeading ? formHeading.nextSibling : contactForm.firstChild);
  let activeStep = 0;
  const conditionalGroups = {
    reminder: [conditionalFields.children[0], conditionalFields.children[1], conditionalFields.children[2], reminderConsentLabel, reminderNote],
    appointment: [conditionalFields.children[5], conditionalFields.children[6], appointmentNote],
    review: [conditionalFields.children[8], reviewConsentLabel],
    callback: [conditionalFields.children[5], conditionalFields.children[6], callbackNote]
  };
  function updateConditionalFields() {
    const selected = serviceSelect.value === 'تذكير بتجديد نطاق' ? 'reminder'
      : serviceSelect.value === 'طلب موعد استشارة' ? 'appointment'
        : serviceSelect.value === 'تقييم خدمة' ? 'review'
          : serviceSelect.value === 'طلب اتصال' ? 'callback' : '';
    conditionalFields.hidden = !selected;
    [...conditionalFields.children].forEach((item) => { item.hidden = true; item.querySelectorAll('input,select,textarea').forEach((control) => { control.disabled = true; }); });
    if (selected) conditionalGroups[selected].forEach((item) => { item.hidden = false; item.querySelectorAll('input,select,textarea').forEach((control) => { control.disabled = false; }); });
    messageLabel.querySelector('textarea').required = selected === 'review';
  }
  function validatePanel(panel) {
    for (const control of panel.querySelectorAll('input,select,textarea')) {
      if (!control.disabled && control.required && !control.checkValidity()) { control.reportValidity(); return false; }
    }
    return true;
  }
  function updateSummary() {
    const text = (name) => contactForm.elements[name]?.value || '';
    const serviceLabel = serviceSelect.selectedOptions[0]?.textContent || '';
    const lines = [
      `${englishPage ? 'Name' : 'الاسم'}: ${text('name')}`,
      `${englishPage ? 'Email' : 'البريد'}: ${text('email')}`,
      `${englishPage ? 'Mobile' : 'الجوال'}: ${text('phone')}`,
      `${englishPage ? 'Service' : 'الخدمة'}: ${serviceLabel}`
    ];
    if (serviceSelect.value === 'تذكير بتجديد نطاق') lines.push(`${englishPage ? 'Domain / expiry' : 'النطاق / الانتهاء'}: ${text('reminderDomain')} / ${text('reminderDate')}`);
    if (serviceSelect.value === 'طلب موعد استشارة' || serviceSelect.value === 'طلب اتصال') lines.push(`${englishPage ? 'Preferred time' : 'الوقت المفضل'}: ${text('preferredDate')} / ${text('preferredTime')}`);
    if (serviceSelect.value === 'تقييم خدمة') lines.push(`${englishPage ? 'Rating' : 'التقييم'}: ${text('feedbackRating')}/5 · ${englishPage ? 'Publication permission' : 'إذن النشر'}: ${reviewConsent.checked ? (englishPage ? 'Yes' : 'نعم') : (englishPage ? 'No' : 'لا')}`);
    if (text('message')) lines.push(`${englishPage ? 'Details' : 'التفاصيل'}: ${text('message')}`);
    summary.textContent = lines.join('\n');
  }
  function showStep(index) {
    activeStep = index;
    panels.forEach((panel, panelIndex) => { panel.hidden = panelIndex !== index; });
    progress.querySelectorAll('li').forEach((item, itemIndex) => item.classList.toggle('current', itemIndex === index));
    backButton.hidden = index === 0;
    nextButton.hidden = index === 2;
    wizardLive.textContent = `${englishPage ? 'Step' : 'الخطوة'} ${index + 1} ${englishPage ? 'of' : 'من'} 3`;
    if (index === 2) updateSummary();
  }
  updateConditionalFields();
  serviceSelect.addEventListener('change', updateConditionalFields);
  backButton.addEventListener('click', () => showStep(Math.max(0, activeStep - 1)));
  nextButton.addEventListener('click', () => {
    if (!validatePanel(panels[activeStep])) return;
    if (activeStep === 1 && serviceSelect.value === 'تقييم خدمة' && !contactForm.elements.feedbackRating.value) return;
    showStep(Math.min(2, activeStep + 1));
  });
  showStep(0);

  contactForm.addEventListener('submit', (event) => {
  event.preventDefault();
  if (!contactForm.reportValidity()) return;
  const submitButton = contactForm.querySelector('.form-submit');
  submitButton.disabled = true;
  submitButton.textContent = englishPage ? 'Sending request…' : 'جارٍ إرسال الطلب…';
  formResult.hidden = true;
  formResult.classList.remove('error');
  const formData = Object.fromEntries(new FormData(contactForm));
  formData.phone = String(formData.phone || '')
    .replace(/[٠-٩]/g, (digit) => String(digit.charCodeAt(0) - 0x0660))
    .replace(/[۰-۹]/g, (digit) => String(digit.charCodeAt(0) - 0x06f0));
  const extraDetails = [];
  if (formData.reminderDomain) extraDetails.push(`${englishPage ? 'Domain' : 'النطاق'}: ${formData.reminderDomain}`, `${englishPage ? 'Expiry date' : 'تاريخ الانتهاء'}: ${formData.reminderDate}`, `${englishPage ? 'Preferred follow-up' : 'وسيلة المتابعة'}: ${formData.reminderMethod}`, `${englishPage ? 'Manual reminder consent' : 'الموافقة على التذكير اليدوي'}: ${formData.reminderConsent ? (englishPage ? 'Yes' : 'نعم') : (englishPage ? 'No' : 'لا')}`);
  if (formData.preferredDate) extraDetails.push(`${englishPage ? (formData.service === 'طلب اتصال' ? 'Preferred call date' : 'Preferred consultation date') : (formData.service === 'طلب اتصال' ? 'تاريخ الاتصال المفضل' : 'تاريخ الاستشارة المفضل')}: ${formData.preferredDate}`, `${englishPage ? 'Preferred time' : 'الوقت المفضل'}: ${formData.preferredTime}`, englishPage ? 'This is a proposed time only; WW must confirm availability.' : 'هذا وقت مقترح فقط ويتطلب تأكيد التوفر من WW.');
  if (formData.feedbackRating) extraDetails.push(`${englishPage ? 'Customer rating' : 'تقييم العميل'}: ${formData.feedbackRating}/5`, `${englishPage ? 'Permission to publish' : 'إذن النشر'}: ${formData.reviewConsent ? (englishPage ? 'Yes' : 'نعم') : (englishPage ? 'No' : 'لا')}`);
  if (extraDetails.length) formData.message = [formData.message, ...extraDetails].filter(Boolean).join('\n');
  fetch('/api/orders', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(formData)
  }).then(async (response) => {
    const result = await response.json().catch(() => ({}));
    if (!response.ok) {
      const serverMessage = result.error || (englishPage ? 'Could not submit your request. Please try again.' : 'تعذر إرسال الطلب. حاول مرة أخرى.');
      throw new Error(englishPage && /[\u0600-\u06FF]/.test(serverMessage) ? 'Could not submit your request. Please check your details and try again.' : serverMessage);
    }
    contactForm.classList.add('submitted');
    formResult.replaceChildren();
    const confirmation = document.createElement('p');
    confirmation.textContent = englishPage
      ? `Thank you. Your request was received. Request number: ${result.requestNumber || result.orderId || '—'}. Keep it to check the status.`
      : `شكرًا لك، تم استلام طلبك بنجاح. رقم الطلب: ${result.requestNumber || result.orderId || '—'}. احتفظ به لمتابعة الحالة.`;
    formResult.append(confirmation);
    if (result.orderId) {
      const tracking = document.createElement('a');
      tracking.href = `track-order.html?id=${encodeURIComponent(result.requestNumber || result.orderId)}`;
      tracking.textContent = englishPage ? 'Track request status' : 'متابعة حالة الطلب';
      tracking.className = 'result-track-link';
      formResult.append(tracking);
    }
    formResult.hidden = false;
    contactForm.reset();
    updateConditionalFields();
    showStep(0);
  }).catch((error) => {
    formResult.textContent = error.message.includes('Failed to fetch')
      ? (englishPage ? 'Could not connect to the server. Open the hosted website and try again.' : 'تعذر الاتصال بالخادم. افتح الموقع من عنوان الخادم وحاول مجددًا.')
      : (englishPage && /[\u0600-\u06FF]/.test(error.message) ? 'Could not submit your request. Please check your details and try again.' : error.message);
    formResult.classList.add('error');
    formResult.hidden = false;
  }).finally(() => {
    submitButton.disabled = false;
    submitButton.innerHTML = englishPage ? 'Send request <span>→</span>' : 'إرسال الطلب <span>←</span>';
  });
  });
}
