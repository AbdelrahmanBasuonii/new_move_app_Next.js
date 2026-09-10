# سينما | Cinema TMDb App

منصة عربية/إنجليزية لاكتشاف الأفلام والمسلسلات والممثلين، مبنية باستخدام **Next.js App Router** وReact، مع تكامل اختياري مع **TMDb API** لجلب الأفلام الحالية، الأفلام الأكثر شعبية، المسلسلات، التقييمات، الأوصاف، وطاقم التمثيل.

المشروع متاح على GitHub:

[https://github.com/AbdelrahmanBasuonii/new_move_app_Next.js](https://github.com/AbdelrahmanBasuonii/new_move_app_Next.js)

---

## نظرة عامة

يوفر التطبيق تجربة قريبة من منصات اكتشاف المحتوى مثل TMDb، مع واجهة RTL عربية افتراضيًا ودعم كامل للتحويل إلى الإنجليزية.

عند تشغيل المشروع بدون API Key، يعمل التطبيق باستخدام بيانات fallback محلية حتى يمكن تجربة الواجهة مباشرة. عند إضافة TMDb API Key، يتم تحميل بيانات حقيقية من TMDb تلقائيًا.

### ما يقدمه التطبيق

- عرض الأفلام الحالية في دور العرض، مع دعم منطقة مصر.
- عرض أفلام شائعة من آخر سنوات الإنتاج.
- عرض المسلسلات الأكثر شعبية.
- ترتيب المحتوى حسب التقييم.
- البحث عن فيلم أو مسلسل من شريط البحث.
- نافذة تفاصيل لكل فيلم أو مسلسل.
- جلب وصف المحتوى وطاقم التمثيل من TMDb.
- عرض البوسترات من خوادم صور TMDb.
- تبديل اللغة بين العربية والإنجليزية.
- تبديل اتجاه الصفحة تلقائيًا بين RTL وLTR.
- حفظ اللغة المختارة داخل `localStorage`.
- تبديل المظهر الداكن والفاتح.
- تصميم متجاوب مع الشاشات الكبيرة والموبايل.
- بيانات fallback محلية في حالة عدم وجود API أو فشل الاتصال.

---

## التقنيات المستخدمة

- **Next.js 16**
- **React**
- **App Router**
- **JavaScript**
- **CSS Modules-style global stylesheet** عبر `app/globals.css`
- **TMDb REST API**
- **Turbopack** أثناء التطوير والبناء
- **npm** لإدارة الحزم

---

## المتطلبات

قبل تشغيل المشروع تأكد من وجود:

- Node.js إصدار حديث، ويفضل Node.js 20 أو أحدث.
- npm.
- مفتاح TMDb اختياريًا للحصول على البيانات الحقيقية.

تحقق من الإصدارات:

```bash
node --version
npm --version
```

---

## التشغيل المحلي

### 1. تحميل المشروع

```bash
git clone https://github.com/AbdelrahmanBasuonii/new_move_app_Next.js.git
cd new_move_app_Next.js
```

### 2. تثبيت الاعتماديات

```bash
npm install
```

### 3. تشغيل وضع التطوير

```bash
npm run dev
```

بعد التشغيل افتح:

```text
http://localhost:3000
```

---

## إعداد TMDb API

التطبيق يمكنه العمل بدون مفتاح، لكنه سيستخدم بيانات تجريبية محدودة. للحصول على البيانات الحقيقية:

1. أنشئ حسابًا على [TMDb](https://www.themoviedb.org/).
2. افتح إعدادات الحساب.
3. ادخل إلى قسم API.
4. أنشئ API Key من نوع Developer.
5. أنشئ ملفًا باسم `.env.local` في جذر المشروع.
6. أضف المتغير التالي:

```env
NEXT_PUBLIC_TMDB_API_KEY=ضع_مفتاحك_هنا
```

يوجد نموذج جاهز في:

[.env.local.example](.env.local.example)

يمكن نسخه إلى `.env.local`:

```bash
copy .env.local.example .env.local
```

ثم ضع المفتاح الحقيقي داخل الملف وأعد تشغيل خادم التطوير:

```bash
npm run dev
```

### مهم جدًا

ملف `.env.local` موجود داخل `.gitignore` ولا يجب رفعه إلى GitHub. لا تضع مفتاح API الحقيقي داخل README أو داخل commit عام.

المشروع الحالي يستخدم `NEXT_PUBLIC_TMDB_API_KEY` لأن طلبات TMDb تتم من واجهة المتصفح مباشرة. هذا مناسب للتجربة والمشاريع الشخصية، لكنه يعني أن المفتاح قابل للظهور في المتصفح.

في نسخة الإنتاج الاحترافية يفضل نقل طلبات TMDb إلى Route Handler أو Backend داخلي حتى لا يظهر المفتاح للمستخدمين.

---

## مصادر TMDb المستخدمة

عميل TMDb موجود في:

[lib/tmdb.js](lib/tmdb.js)

### الأفلام الحالية

```text
GET /movie/now_playing?region=EG&page=1
```

يستخدم التطبيق هذا المصدر لعرض الأفلام الموجودة حاليًا في دور العرض داخل مصر.

### الأفلام الشائعة

```text
GET /discover/movie?sort_by=popularity.desc&primary_release_date.gte=2016-01-01&page=1
```

### المسلسلات الشائعة

```text
GET /discover/tv?sort_by=popularity.desc&page=1
```

### تفاصيل الفيلم

```text
GET /movie/{movie_id}?append_to_response=credits
```

### تفاصيل المسلسل

```text
GET /tv/{tv_id}?append_to_response=credits
```

### الصور

يتم بناء روابط الصور باستخدام:

```text
https://image.tmdb.org/t/p/w500/{poster_path}
```

في حالة عدم وجود صورة، يستخدم التطبيق صورة placeholder.

---

## كيف تعمل البيانات؟

عند بدء التطبيق:

1. يبدأ التطبيق ببيانات fallback من `lib/media.js`.
2. إذا كان `NEXT_PUBLIC_TMDB_API_KEY` موجودًا، يتم إنشاء عميل TMDb.
3. يتم إرسال طلبات الأفلام الحالية، الأفلام الشائعة، والمسلسلات الشائعة بالتوازي.
4. يتم تحويل استجابة TMDb إلى نموذج موحد تستخدمه البطاقات.
5. يتم استبدال بيانات fallback بالبيانات الحقيقية.
6. عند الضغط على فيلم أو مسلسل، يتم طلب التفاصيل وطاقم التمثيل فقط عند الحاجة.
7. إذا فشل أي طلب، تبقى بيانات الواجهة السابقة موجودة بدل انهيار التطبيق.

هذا الأسلوب يقلل عدد الطلبات الأولية ويجعل تحميل طاقم التمثيل lazy عند فتح التفاصيل.

---

## هيكل المشروع

```text
.
├── app/
│   ├── globals.css          # التصميم العام والـ responsive styles
│   ├── layout.js            # Root layout وmetadata وخصائص HTML الأساسية
│   └── page.js              # الحالة الرئيسية وتجميع المكونات وتدفق البيانات
│
├── components/
│   ├── ContentRow.js        # صف أفقي من المحتوى
│   ├── DetailsModal.js      # نافذة تفاصيل الفيلم أو المسلسل
│   ├── Footer.js            # تذييل الموقع
│   ├── Header.js            # الشعار والتنقل والبحث واللغة والمظهر
│   ├── Hero.js              # القسم الرئيسي أعلى الصفحة
│   └── MediaCard.js         # بطاقة الفيلم أو المسلسل
│
├── lib/
│   ├── i18n.js              # قاموس العربية والإنجليزية وترجمة الأنواع
│   ├── media.js             # روابط الصور وبيانات fallback
│   └── tmdb.js              # عميل TMDb وطلبات الكتالوج والتفاصيل
│
├── .env.local.example       # مثال لإعداد مفتاح TMDb
├── .gitignore               # الملفات المستبعدة من Git
├── package.json             # أوامر المشروع والاعتماديات
├── package-lock.json        # الإصدارات المثبتة بدقة
└── README.md                # توثيق المشروع
```

---

## شرح المكونات

### `app/page.js`

هو مكون الصفحة الرئيسي، ويحتوي على:

- حالة الأفلام والمسلسلات.
- الصفحة النشطة: الرئيسية أو الأفلام أو المسلسلات.
- الفيلم أو المسلسل المحدد.
- نص البحث.
- حالة المظهر الداكن أو الفاتح.
- حالة اللغة.
- تحميل catalog من TMDb.
- فتح تفاصيل المحتوى.
- تجهيز صفوف المحتوى حسب الصفحة النشطة.

لا يحتوي الملف على تفاصيل التصميم نفسها؛ التصميم موزع على المكونات و`globals.css`.

### `components/Header.js`

مسؤول عن:

- اسم الموقع.
- التنقل بين الرئيسية والأفلام والمسلسلات.
- زر تبديل اللغة.
- زر تبديل المظهر.
- حقل البحث.

### `components/Hero.js`

يعرض الرسالة الرئيسية والصورة الخلفية والزر الذي ينقل المستخدم إلى قسم الأفلام.

### `components/ContentRow.js`

يعرض عنوان القسم وعدد العناصر ومجموعة بطاقات `MediaCard`.

### `components/MediaCard.js`

مكون قابل لإعادة الاستخدام للفيلم والمسلسل، ويعرض:

- البوستر.
- التقييم.
- العنوان.
- سنة الإصدار.
- النوع.

### `components/DetailsModal.js`

يظهر عند اختيار بطاقة، ويعرض:

- البوستر.
- نوع المحتوى.
- العنوان.
- سنة الإصدار.
- النوع.
- التقييم.
- الوصف.
- طاقم التمثيل.

### `lib/tmdb.js`

يحتوي على factory باسم `createTmdbClient`، ويعرض وظائف:

- `loadCatalog()` لتحميل الأفلام والمسلسلات.
- `loadDetails(item, type)` لتحميل تفاصيل العمل وطاقم التمثيل.

### `lib/media.js`

يحتوي على:

- دالة بناء روابط الصور.
- بيانات fallback للأفلام.
- بيانات fallback للمسلسلات.

### `lib/i18n.js`

يحتوي على قاموسي العربية والإنجليزية، بالإضافة إلى ترجمة أنواع المحتوى مثل:

- دراما / Drama
- أكشن / Action
- جريمة / Crime
- خيال علمي / Science Fiction
- كوميديا / Comedy

---

## دعم اللغات

العربية هي اللغة الافتراضية.

عند الضغط على زر اللغة:

- تتحول نصوص الواجهة إلى الإنجليزية أو العربية.
- يتم تعديل `document.documentElement.lang`.
- يتم تعديل `document.documentElement.dir` إلى `rtl` أو `ltr`.
- يتم تحديث عنوان المتصفح.
- يتم حفظ الاختيار في `localStorage` تحت المفتاح:

```text
cinema-language
```

اللغة لا تغير أسماء الأفلام القادمة من TMDb إذا كانت الاستجابة نفسها تحتوي على الاسم الأصلي فقط، لكنها تغير نصوص الواجهة والأنواع المحلية.

---

## أوامر المشروع

### تشغيل التطوير

```bash
npm run dev
```

### بناء نسخة الإنتاج

```bash
npm run build
```

### تشغيل نسخة الإنتاج

```bash
npm run start
```

### فحص ESLint

```bash
npm run lint
```

> إذا كان إصدار Next.js المستخدم لا يدعم أمر lint المضاف تلقائيًا، يمكن تشغيل ESLint مباشرة بعد تثبيته أو تعديل script حسب إصدار Next.js.

---

## الاختبار والتحقق

تم التحقق من المشروع باستخدام:

```bash
npm run build
```

ويتم التأكد من:

- تجميع مكونات React.
- صحة App Router.
- صحة ملفات JavaScript.
- إنشاء الصفحة static prerendered.
- عدم وجود أخطاء build.

اختبار يدوي مقترح:

1. افتح الصفحة الرئيسية.
2. انتقل إلى الأفلام.
3. انتقل إلى المسلسلات.
4. استخدم البحث.
5. افتح بطاقة فيلم.
6. تحقق من ظهور نافذة التفاصيل.
7. بدل اللغة إلى الإنجليزية.
8. تحقق من تحول الاتجاه إلى LTR.
9. أعد اللغة إلى العربية.
10. جرّب الموقع بدون API Key للتأكد من عمل fallback.

---

## النشر على Vercel

يمكن نشر المشروع بسهولة على Vercel:

1. افتح [Vercel](https://vercel.com/).
2. اختر **Add New Project**.
3. اربط مستودع GitHub:

```text
AbdelrahmanBasuonii/new_move_app_Next.js
```

4. اترك Framework Preset على Next.js.
5. أضف Environment Variable:

```text
Name: NEXT_PUBLIC_TMDB_API_KEY
Value: مفتاح TMDb
```

6. نفذ Deploy.

بعد النشر، تحقق من أن طلبات TMDb تعمل من النطاق الجديد وأن مفتاح API مقيد بالنطاقات المناسبة من لوحة TMDb إن كان ذلك متاحًا لنوع المفتاح المستخدم.

---

## النشر على أي خادم Node.js

```bash
npm install
npm run build
npm run start
```

يمكن تخصيص المنفذ:

```bash
npx next start -p 4000
```

---

## استكشاف الأخطاء

### لا تظهر بيانات TMDb

تحقق من:

- وجود `.env.local`.
- صحة اسم المتغير:

```env
NEXT_PUBLIC_TMDB_API_KEY=...
```

- إعادة تشغيل خادم التطوير بعد تعديل `.env.local`.
- صلاحية المفتاح من TMDb.
- عدم وجود حظر CORS أو قيود نطاق.
- فتح Console في المتصفح لرؤية خطأ الطلب.

### تظهر بيانات fallback فقط

هذا يحدث في الحالات التالية:

- لم يتم وضع API Key.
- مفتاح API غير صحيح.
- فشل الاتصال بـ TMDb.
- انتهت حصة الطلبات أو تم رفض الطلب.

التطبيق مصمم ليستمر في العمل بدل عرض صفحة فارغة.

### الصور لا تظهر

تحقق من اتصال الإنترنت وامتداد `poster_path`. الصور يتم تحميلها من:

```text
https://image.tmdb.org
```

### اللغة لا تتغير

- اعمل refresh للصفحة.
- تأكد من أن JavaScript يعمل.
- امسح قيمة `cinema-language` من localStorage إذا كانت قيمة غير صحيحة.

---

## ملاحظات الأمان

- لا ترفع `.env.local` إلى GitHub.
- لا تضع API Key داخل الملفات المصدرية.
- لا تضع API Key في README.
- `NEXT_PUBLIC_` يجعل المتغير متاحًا للمتصفح، لذلك لا يعتبر سرًا كاملًا.
- لتطبيق إنتاج حقيقي، يفضل استخدام Server Route أو Backend Proxy.
- يفضل وضع rate limiting وcache في طبقة الخادم.
- يفضل تقييد API Key من لوحة TMDb حسب النطاقات أو الاستخدامات الممكنة.

---

## التحسينات المقترحة مستقبلًا

- إضافة صفحات URL مستقلة لكل فيلم ومسلسل بدل نافذة التفاصيل فقط.
- إضافة صفحات مستقلة للممثلين وفيلموغرافيتهم.
- إضافة pagination أو infinite scroll.
- إضافة تصفية حسب النوع وسنة الإصدار واللغة.
- إضافة قائمة مفضلة للمستخدم.
- إضافة تسجيل دخول وحسابات مستخدمين.
- إضافة قاعدة بيانات لحفظ المفضلة والتقييمات.
- نقل TMDb API إلى Server Actions أو Route Handlers.
- إضافة cache للطلبات وتقليل استهلاك API.
- إضافة skeleton loading أثناء جلب البيانات.
- إضافة اختبارات للـ components وتدفق البيانات.
- إضافة بحث TMDb مباشر بدل البحث في البيانات المحملة فقط.
- دعم اللغة العربية من TMDb باستخدام `language=ar-SA` مع fallback إلى الإنجليزية عند غياب الترجمة.

---

## الترخيص وحقوق البيانات

هذا المشروع واجهة تعليمية وتجريبية تعتمد على بيانات TMDb.

TMDb لا يعتمد هذا المشروع ولا يصادق عليه. يجب الالتزام بشروط استخدام TMDb وسياسة نسب البيانات والصور عند نشر المشروع تجاريًا أو للعامة.

راجع شروط TMDb قبل الإطلاق التجاري:

[https://www.themoviedb.org/terms-of-use](https://www.themoviedb.org/terms-of-use)

---

## الحالة الحالية للمشروع

- Next.js App Router: جاهز.
- React components: مقسمة.
- دعم العربية والإنجليزية: جاهز.
- TMDb catalog: جاهز عند توفير API Key.
- Fallback data: جاهز.
- Build production: ناجح.
- GitHub repository: متاح.

---

# English Documentation

## Cinema TMDb App

Cinema is a bilingual Arabic/English movie and TV discovery platform built with **Next.js App Router** and React. It optionally integrates with the **TMDb REST API** to load currently playing movies, popular movies, popular TV shows, ratings, descriptions, posters, and cast information.

The project is designed to work immediately with local fallback data. When a TMDb API key is configured, the fallback catalog is replaced with live TMDb content.

## Features

- Currently playing movies in Egypt.
- Popular movies and TV shows from TMDb.
- Movie and TV show browsing sections.
- Latest content and top-rated content rows.
- Search across the loaded movies and shows.
- Details modal for every movie or show.
- Lazy loading of cast and credits when a title is opened.
- TMDb poster images with a placeholder fallback.
- Arabic as the default language.
- English language option.
- Automatic RTL/LTR direction switching.
- Language persistence through `localStorage`.
- Dark and light theme switching.
- Responsive design for desktop and mobile.
- Local fallback content when TMDb is unavailable.

## Tech Stack

- Next.js 16
- React
- App Router
- JavaScript
- Global CSS in `app/globals.css`
- TMDb REST API
- npm
- Turbopack

## Requirements

- Node.js 20 or newer is recommended.
- npm.
- A TMDb API key for live data. This is optional because fallback data is included.

Check your installed versions:

```bash
node --version
npm --version
```

## Local Setup

Clone the repository and install dependencies:

```bash
git clone https://github.com/AbdelrahmanBasuonii/new_move_app_Next.js.git
cd new_move_app_Next.js
npm install
```

Start the development server:

```bash
npm run dev
```

Open:

```text
http://localhost:3000
```

## TMDb Configuration

Create a `.env.local` file in the project root:

```env
NEXT_PUBLIC_TMDB_API_KEY=your_tmdb_api_key_here
```

The repository includes [.env.local.example](.env.local.example) as a template.

After changing environment variables, restart the development server:

```bash
npm run dev
```

Without an API key, the application uses the fallback catalog from [lib/media.js](lib/media.js). With a valid key, it loads live data from TMDb.

## TMDb Endpoints

The TMDb client is implemented in [lib/tmdb.js](lib/tmdb.js).

Currently playing movies:

```text
GET /movie/now_playing?region=EG&page=1
```

Popular movies:

```text
GET /discover/movie?sort_by=popularity.desc&primary_release_date.gte=2016-01-01&page=1
```

Popular TV shows:

```text
GET /discover/tv?sort_by=popularity.desc&page=1
```

Movie details and credits:

```text
GET /movie/{movie_id}?append_to_response=credits
```

TV details and credits:

```text
GET /tv/{tv_id}?append_to_response=credits
```

Poster images are loaded using:

```text
https://image.tmdb.org/t/p/w500/{poster_path}
```

## Project Structure

```text
.
├── app/
│   ├── globals.css          # Global styles and responsive layout
│   ├── layout.js            # Root layout and metadata
│   └── page.js              # Main state and component composition
│
├── components/
│   ├── ContentRow.js        # A content row with reusable cards
│   ├── DetailsModal.js      # Movie/show details dialog
│   ├── Footer.js            # Application footer
│   ├── Header.js            # Navigation, search, language and theme controls
│   ├── Hero.js              # Main hero section
│   └── MediaCard.js         # Reusable movie/show card
│
├── lib/
│   ├── i18n.js              # Arabic/English translations and genre labels
│   ├── media.js             # Image helper and fallback data
│   └── tmdb.js              # TMDb client and API mapping
│
├── .env.local.example
├── .gitignore
├── package.json
├── package-lock.json
└── README.md
```

## Component Responsibilities

### `app/page.js`

The main client component owns the application state:

- Movies and TV shows.
- Active navigation section.
- Selected title for the details modal.
- Search query.
- Theme state.
- Current language.
- TMDb catalog loading.
- Details and cast loading.

The page composes the UI from the components in `components/`.

### `components/Header.js`

Provides the logo, navigation, search input, language toggle, and theme toggle.

### `components/Hero.js`

Displays the main headline, introduction, background artwork, and movie discovery action.

### `components/ContentRow.js`

Renders a section title, content count, and a grid of reusable media cards.

### `components/MediaCard.js`

Displays the poster, rating, title, release year, and translated genre.

### `components/DetailsModal.js`

Displays title details, description, rating, poster, and the loaded cast.

### `lib/tmdb.js`

Exposes a `createTmdbClient` factory with:

- `loadCatalog()` for the initial movie and TV catalog.
- `loadDetails(item, type)` for title details and credits.

### `lib/i18n.js`

Contains the Arabic and English UI dictionaries and genre translation helpers.

## Internationalization

Arabic is the default language. The language button switches to English and updates:

- All navigation labels.
- Hero copy.
- Section labels.
- Search placeholder.
- Details modal labels.
- Footer text.
- Local genre names.
- Browser document title.
- HTML `lang` attribute.
- HTML text direction: `rtl` or `ltr`.

The selected language is stored under:

```text
cinema-language
```

Movie and show names returned by TMDb depend on the language data available from TMDb. The UI itself is translated locally.

## Available Scripts

Development server:

```bash
npm run dev
```

Production build:

```bash
npm run build
```

Production server:

```bash
npm run start
```

Linting:

```bash
npm run lint
```

## Data Flow

1. The application starts with fallback data from `lib/media.js`.
2. If `NEXT_PUBLIC_TMDB_API_KEY` exists, a TMDb client is created.
3. Movies and TV shows are requested in parallel.
4. TMDb responses are mapped to one shared media shape.
5. Live data replaces fallback data.
6. Credits are requested only when a title is opened.
7. Failed requests do not blank the page; existing data remains available.

This keeps the initial interface usable and avoids loading cast data for every title on the first render.

## Security Notes

The current frontend uses `NEXT_PUBLIC_TMDB_API_KEY`, which makes the key available to the browser. This is acceptable for a personal demo, but it is not a fully private secret.

For production:

- Move TMDb requests to Next.js Route Handlers or a private backend.
- Keep the server-side key in a non-public environment variable.
- Add caching and rate limiting.
- Restrict the TMDb key where possible.
- Never commit `.env.local`.

The `.gitignore` file excludes `.env*` while keeping `.env.local.example` available as documentation.

## Production Deployment

### Vercel

1. Import the GitHub repository into Vercel.
2. Keep the framework preset as Next.js.
3. Add this environment variable:

```text
NEXT_PUBLIC_TMDB_API_KEY=your_tmdb_api_key
```

4. Deploy the project.

### Node.js Server

```bash
npm install
npm run build
npm run start
```

To use another port:

```bash
npx next start -p 4000
```

## Troubleshooting

### TMDb data does not appear

Check that:

- `.env.local` exists.
- The variable name is exactly `NEXT_PUBLIC_TMDB_API_KEY`.
- The development server was restarted after changing the file.
- The key is active and valid.
- The browser can reach `api.themoviedb.org`.

### Only fallback data is visible

This is expected when there is no key, the key is invalid, TMDb is unavailable, or the request limit has been reached.

### Images do not load

Check access to `image.tmdb.org` and the `poster_path` returned by TMDb. A placeholder is used when no poster is available.

## Future Improvements

- Dedicated URL routes for every movie and TV show.
- Actor profiles and filmographies.
- Pagination or infinite scrolling.
- Genre, year, language, and rating filters.
- User favorites and ratings.
- Authentication and user accounts.
- Database-backed watchlists.
- Server-side TMDb proxy.
- Request caching and skeleton loading.
- Automated component and integration tests.
- Full TMDb search endpoint integration.
- Better Arabic translation fallback for movie and TV metadata.

## TMDb Attribution

This project uses TMDb data and images but is not endorsed or certified by TMDb.

Review the TMDb terms before commercial distribution:

[https://www.themoviedb.org/terms-of-use](https://www.themoviedb.org/terms-of-use)
