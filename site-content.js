(() => {
  const defaults = { domainSaNew:100,domainSaRenew:100,domainSaRecovery:150,domainSaDirect:199,domainSaTransfer:100,domainGlobalNew:75,domainGlobalRenew:75,domainGlobalTransfer:80,googleStarter:390,googleStandard:800,googlePlus:1200,microsoftBasic:399,microsoftStandard:790,microsoftPremium:1200,microsoftCopilot:1600,websitePremium:1500 };
  const english = document.documentElement.lang.toLowerCase().startsWith('en');
  const format = (value) => new Intl.NumberFormat(english ? 'en-US' : 'ar-SA').format(value);
  fetch('/api/site-content', { cache: 'no-store' }).then((r) => r.ok ? r.json() : null).then((data) => {
    if (!data?.content) return;
    const content = data.content;
    const prices = { ...defaults, ...(content.prices || {}) };
    const setAmount = (node, key) => { if (node && Number.isFinite(Number(prices[key]))) node.textContent = format(Number(prices[key])); };
    const domainAmounts = [prices.domainSaNew,prices.domainSaRenew,prices.domainSaRecovery,prices.domainSaDirect,prices.domainSaTransfer,prices.domainGlobalNew,prices.domainGlobalRenew,prices.domainGlobalTransfer];
    document.querySelectorAll('.price-list dd').forEach((node, i) => { if (domainAmounts[i] !== undefined) { const currency = node.querySelector('small'); node.textContent = format(domainAmounts[i]) + ' '; if (currency) node.append(currency); } });
    ['googleStarter','googleStandard','googlePlus'].forEach((key,i)=>setAmount(document.querySelectorAll('.google-plan-grid .plan-price strong')[i],key));
    ['microsoftBasic','microsoftStandard','microsoftPremium'].forEach((key,i)=>setAmount(document.querySelectorAll('.microsoft-plan-grid .plan-price strong')[i],key));
    setAmount(document.querySelector('.copilot-card .plan-price strong'),'microsoftCopilot');
    setAmount(document.querySelector('.website-plan-card .plan-price strong'),'websitePremium');
    window.dispatchEvent(new CustomEvent('ww-site-content', { detail: { prices, content } }));
    if (content.announcementActive === 'true' || content.announcementActive === true) {
      const title = english ? content.announcementEnTitle : content.announcementArTitle;
      const body = english ? content.announcementEnBody : content.announcementArBody;
      if (title || body) { const banner=document.createElement('aside');banner.className='site-announcement';const h=document.createElement('strong');h.textContent=title|| (english?'Announcement':'إعلان');const p=document.createElement('span');p.textContent=body||'';banner.append(h,p);if(content.updatedAt){const date=document.createElement('small');date.textContent=(english?'Updated: ':'آخر تحديث: ')+new Date(content.updatedAt).toLocaleDateString(english?'en-GB':'ar-SA');banner.append(date);}document.querySelector('main')?.prepend(banner); }
    }
    const q = english ? content.faqEnQuestion : content.faqArQuestion; const a = english ? content.faqEnAnswer : content.faqArAnswer;
    const faq = document.querySelector('.faq-list');
    if (q && a && faq) { const item=document.createElement('details');const summary=document.createElement('summary');summary.textContent=q;const answer=document.createElement('p');answer.textContent=a;item.append(summary,answer);faq.append(item); }
    const updateTitle = document.querySelector('[data-managed-title]'); const updateBody = document.querySelector('[data-managed-body]');
    if (updateTitle && (content.announcementActive === 'true' || content.announcementActive === true)) { updateTitle.textContent = english ? content.announcementEnTitle : content.announcementArTitle; if (updateBody) updateBody.textContent = english ? content.announcementEnBody : content.announcementArBody; }
  }).catch(() => {});
})();
