# دليل المطور في منصة نواة

## مرحباً بك يا مطور
هذا الدليل مخصص للمطورين العرب الراغبين في استخدام منصة نواة لتطوير مشاريعهم أو المساهمة في المنصة.

## 1. البدء السريع

### المتطلبات الأساسية
- معرفة ببرمجة الويب (HTML, CSS, JavaScript)
- أساسيات في React (اختياري)
- فهم مبسط للبلوكشين (مفيد)

### إنشاء حساب مطور
1. سجل حساباً عادياً في المنصة
2. اذهب إلى الإعدادات
3. فعّل "وضع المطور"
4. احصل على مفتاح API الخاص بك

---

## 2. مكتبة المصادر المفتوحة

### استعراض المشاريع
- تصفح آلاف المشاريع العربية مفتوحة المصدر
- ابحث حسب اللغة أو التقنية
- شاهد إحصائيات المشروع (نجوم، مشاهدات، مساهمون)

### نشر مشروعك
1. اذهب إلى "مكتبة المصادر"
2. اضغط "نشر مشروع جديد"
3. أدخل معلومات المشروع (الاسم، الوصف، التقنيات)
4. أضف رابط GitHub
5. اختر الترخيص المناسب
6. انشر المشروع

### المساهمة في مشاريع الآخرين
- ابحث عن مشروع يعجبك
- ادرس الكود والمشاكل المفتوحة
- أرسل Pull Request
- تواصل مع صاحب المشروع

---

## 3. أدوات التعريب

### حزم تعريب جاهزة

| المكتبة | الحزمة | طريقة الاستخدام |
|---------|--------|-----------------|
| React | `@nawah/react-i18n` | `npm install @nawah/react-i18n` |
| Vue | `@nawah/vue-i18n` | `npm install @nawah/vue-i18n` |
| Next.js | `@nawah/next-i18n` | `npm install @nawah/next-i18n` |
| Flutter | `nawah_localization` | أضف dependency في pubspec.yaml |

### قاموس المصطلحات التقنية العربية
- أكثر من 500 مصطلح مترجم ومعتمد
- تحديث مستمر بمشاركة المجتمع
- يمكن اقتراح مصطلحات جديدة

### مدقق تعريب
أداة تفحص مشروعك وتقترح تحسينات للتعريب:
```bash
npx @nawah/lint-i18n your-project/

. المنصة السحابية العربية

أ. تخزين الملفات (مثل S3)

// مثال: رفع ملف
import { NawahStorage } from '@nawah/cloud';

const storage = new NawahStorage({ apiKey: 'YOUR_KEY' });
await storage.upload('my-file.pdf', fileData);

ب. قواعد البيانات

· PostgreSQL مُدار بالكامل
· MySQL مُدار
· MongoDB مُدار
· واجهة تحكم عربية

ج. حاويات Docker

· انشر تطبيقك في حاوية
· اختر الموارد (CPU, RAM)
· نطاق مجاني (your-app.nawah.cloud)

د. وظائف Serverless

// مثال: وظيفة بدون خادم
export default async function handler(request) {
  return {
    message: 'مرحباً من نواة!',
    data: request.body
  };
}



5. التكامل مع البلوكشين

ربط المحفظة

import { ethers } from 'ethers';
import { NawahWallet } from '@nawah/wallet';

const wallet = new NawahWallet();
await wallet.connect(); // يفتح MetaMask أو محفظة نواة
const balance = await wallet.getBalance();


التفاعل مع NWTK

// قراءة رصيد NWTK
const tokenContract = new ethers.Contract(
  NWTK_ADDRESS,
  NWTK_ABI,
  provider
);
const balance = await tokenContract.balanceOf(userAddress);


سك NFTs

// سك NFT جديد
const nftContract = new ethers.Contract(
  NFT_ADDRESS,
  NFT_ABI,
  signer
);
await nftContract.mint(
  userAddress,
  "ipfs://QmXyZ..."
);


6. واجهات برمجة التطبيقات (API)

المصادقة

# احصل على توكن
curl -X POST https://api.nawah.io/auth/login \
  -H "Content-Type: application/json" \
  -d '{"email":"user@example.com","password":"..."}'


مثال: جلب المشاريع

curl https://api.nawah.io/projects \
  -H "Authorization: Bearer YOUR_TOKEN"

التوثيق الكامل

· رابط توثيق API
· أمثلة بلغات متعددة
· بيئة تجريبية (Sandbox)

---

7. المساهمة في منصة نواة

مستودعات GitHub

جميع مشاريع نواة مفتوحة المصدر:

· nawah-platform: المنصة الرئيسية
· nawah-contracts: العقود الذكية
· nawah-ui: مكونات الواجهة
· nawah-docs: التوثيق

كيفية المساهمة

1. اختر مستودعاً
2. اقرأ CONTRIBUTING.md
3. ابحث عن مشكلة (Issue) تحلها
4. طور الحل وأرسل Pull Request
5. احصل على مكافآت بـ NWTK

معايير الكود

· استخدم TypeScript
· اكتب اختبارات
· وثق الكود بالعربية والإنجليزية
· اتبع إرشادات الأمان

---

8. موارد تعليمية

دورات مجانية

· مقدمة في Web3
· العقود الذكية للمبتدئين
· بناء NFT بالعربية
· تطبيقات لامركزية متكاملة

مدونة نواة

· مقالات أسبوعية
· شرح تقنيات حديثة
· مقابلات مع خبراء عرب

مجتمع المطورين

· منصة أسئلة وأجوبة
· قناة Discord للمطورين
· لقاءات أسبوعية عبر الإنترنت


