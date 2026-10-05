# WW على Cloudflare Workers

الموقع يستخدم Cloudflare Workers للواجهة وطلبات النماذج، وCloudflare D1 لحفظ الطلبات. لا يحتاج إلى خادم Node دائم أو قرص استضافة. بيانات دخول لوحة `/admin` تحفظ كسرّ في Cloudflare، وتخزن قاعدة D1 الطلبات وجلسات الإدارة. صفحة الإدارة غير مرتبطة بقائمة الزوار وتتطلب تسجيل الدخول.

## النشر المجاني

تحتاج إلى Node.js 20 أو أحدث وحساب Cloudflare مجاني. أوامر Wrangler أدناه تتطلب تسجيل الدخول إلى حسابك؛ لا ترسل كلمة المرور أو مفاتيح الحساب في المحادثة.

1. افتح PowerShell في مجلد المشروع وسجل دخول Wrangler:

   ```powershell
   npx wrangler@latest login
   ```

   وافق على ربط Wrangler بحساب Cloudflare في صفحة المتصفح التي ستفتح.

2. أنشئ قاعدة D1 في منطقة آسيا والمحيط الهادئ:

   ```powershell
   npx wrangler@latest d1 create ww-customer-requests --location apac
   ```

   انسخ `database_id` الذي يظهر في الناتج إلى `database_id` في `wrangler.jsonc` مكان `REPLACE_WITH_DATABASE_ID`. إذا سأل Wrangler إن كان سيضيف الربط تلقائيًا، اختر **No** لأن الربط موجود في ملف الإعداد.

3. أنشئ جداول الطلبات والجلسات في قاعدة Cloudflare:

   ```powershell
   npx wrangler@latest d1 migrations apply ww-customer-requests --remote
   ```

4. أنشئ كلمة مرور لوحة الإدارة كسرّ في Cloudflare، بطول 16 حرفًا على الأقل:

   ```powershell
   npx wrangler@latest secret put ADMIN_PASSWORD
   ```

   اكتب كلمة المرور عند المطالبة. لا تضفها إلى الملفات أو المستودع.

5. ارفع الموقع والـ Worker:

   ```powershell
   npx wrangler@latest deploy
   ```

   سيعرض Wrangler عنوانًا ينتهي بـ `workers.dev`. افتحه للموقع، وأضف `/admin` إلى العنوان للدخول إلى لوحة الطلبات.

## المعاينة المحلية

بعد تسجيل دخول Wrangler وضبط قاعدة D1، استخدم:

```powershell
npx wrangler@latest dev
```

## ملاحظات

- إعداد D1 والـ Worker يعمل على الخطة المجانية ضمن حدود الاستخدام. الحدود المنشورة حاليًا هي 100,000 طلب Worker في اليوم، و5 ملايين صف قراءة و100,000 صف كتابة يوميًا في D1؛ تجاوز الحدود المجانية قد يوقف بعض الطلبات حتى تتجدد الحصة أو تغيّر الخطة.
- قاعدة البيانات الجديدة تبدأ فارغة؛ هذا الإعداد لا ينقل تلقائيًا أي طلبات موجودة في ملف `data/orders.json` المحلي.
- ملف `render.yaml` باقٍ كإعداد سابق فقط؛ لا تستخدمه لهذا النشر لأن هذا الإعداد يستهدف Cloudflare المجاني.
