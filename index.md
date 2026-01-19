<!DOCTYPE html>
<html lang="ar" dir="rtl">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Nawah Docs - ثنائي اللغة</title>
<style>
  body { font-family: Arial, sans-serif; margin:0; padding:0; line-height:1.6; background:#f9f9f9; color:#111; }
  header { background:#004aad; color:#fff; padding:10px 20px; display:flex; justify-content:space-between; align-items:center; }
  header h1 { margin:0; font-size:1.5em; }
  nav a { color:#fff; margin-left:15px; text-decoration:none; font-weight:bold; }
  nav a:hover { text-decoration:underline; }
  .container { max-width:900px; margin:20px auto; padding:20px; background:#fff; border-radius:8px; box-shadow:0 2px 8px rgba(0,0,0,0.1); }
  .lang-tabs { display:flex; justify-content:center; margin-bottom:20px; }
  .lang-tabs button { margin:0 5px; padding:8px 16px; border:none; border-radius:5px; cursor:pointer; font-weight:bold; }
  .lang-tabs button.active { background:#004aad; color:#fff; }
  section { margin-bottom:40px; }
  h2 { color:#004aad; }
  footer { text-align:center; padding:10px; background:#eee; font-size:0.9em; }
  a.section-link { color:#004aad; text-decoration:none; }
  a.section-link:hover { text-decoration:underline; }
  @media(max-width:600px){ header, .container { padding:10px; } nav a { margin-left:10px; } }
</style>
</head>
<body>

<header>
  <h1>وثائق مشروع نواة / Nawah Docs</h1>
  <nav id="nav-links">
    <!-- روابط الأقسام سيتم إنشاؤها تلقائياً -->
  </nav>
</header>

<div class="container">
  <div class="lang-tabs">
    <button class="active" onclick="switchLang('ar')">🇸🇦 العربية</button>
    <button onclick="switchLang('en')">🇬🇧 English</button>
  </div>

  <div id="ar" class="lang-content">
    <section id="falsafah">
      <h2>الفلسفة والاتجاه</h2>
      <p>هذا القسم يوضح المبادئ التوجيهية لمشروع نواة، رؤيته، وأهدافه الأساسية، مع التركيز على نهج تمكين المستخدمين والمجتمع.</p>
    </section>

    <section id="ahdaf">
      <h2>أهداف واستراتيجيات</h2>
      <ul>
        <li>بناء نظام رقمي موثوق وشفاف يُمكّن المستخدمين من التفاعل بأمان.</li>
        <li>خلق مجتمع متعاون يشارك في تطوير الشبكة وصيانتها.</li>
        <li>تقديم حوافز متوازنة لمختلف أدوار المستخدمين، بما يضمن استدامة المنصة ونموها.</li>
        <li>دمج البعد الثقافي والتاريخي لتعزيز القيمة الرمزية والفنية للمشروع.</li>
      </ul>
    </section>

    <section id="adwar">
      <h2>أدوار المستخدمين</h2>
      <ul>
        <li>المستخدم الأساسي: يؤكد هويته يوميًا ويشارك في العمليات الأساسية للمنصة.</li>
        <li>المساهم: يبني شبكة ثقة عبر اقتراح ومراجعة أعضاء آخرين.</li>
        <li>السفير: يقوم بتعريف مستخدمين جدد بالمنصة.</li>
        <li>العقدة: يشغل البرنامج الأساسي على الكمبيوتر لتأمين الشبكة والمساهمة في إجماع النظام.</li>
      </ul>
    </section>

    <section id="tawjih">
      <h2>التوجيه المستقبلي</h2>
      <ul>
        <li>تعزيز قدرة المستخدمين العاديين على المشاركة في الشبكة دون الحاجة لمعدات متقدمة.</li>
        <li>التركيز على التجربة البسيطة للمستخدمين مع الحفاظ على أمان عالي وشفافية كاملة.</li>
        <li>توسيع المجتمع العالمي من خلال تعليم المستخدمين الجدد وتقديم دعم متعدد اللغات.</li>
        <li>الاستمرار في تطوير المنصة بما يتوافق مع أحدث الابتكارات التقنية واحتياجات المستخدمين.</li>
      </ul>
    </section>
  </div>

  <div id="en" class="lang-content" style="display:none;">
    <section id="philosophy">
      <h2>Philosophy & Direction</h2>
      <p>This section outlines the guiding principles of the Nawah project, its vision, and main objectives, focusing on empowering users and the community.</p>
    </section>

    <section id="goals">
      <h2>Goals & Strategies</h2>
      <ul>
        <li>Build a reliable and transparent digital system for safe user interaction.</li>
        <li>Create a collaborative community participating in network development and maintenance.</li>
        <li>Provide balanced incentives for various user roles, ensuring platform sustainability and growth.</li>
        <li>Integrate cultural and historical aspects to enhance symbolic and artistic value.</li>
      </ul>
    </section>

    <section id="roles">
      <h2>User Roles</h2>
      <ul>
        <li>Basic User: Confirms identity daily and participates in core platform operations.</li>
        <li>Contributor: Builds a trust network by suggesting and reviewing other members.</li>
        <li>Ambassador: Introduces new users to the platform.</li>
        <li>Node: Runs core software on a computer to secure the network and participate in consensus.</li>
      </ul>
    </section>

    <section id="future">
      <h2>Future Direction</h2>
      <ul>
        <li>Empower regular users to participate without advanced hardware.</li>
        <li>Focus on simple user experience while maintaining high security and full transparency.</li>
        <li>Expand the global community by educating new users and offering multilingual support.</li>
        <li>Continue platform development in line with latest tech innovations and user needs.</li>
      </ul>
    </section>
  </div>

</div>

<footer>
  &copy; 2026 Nawah Project - جميع الحقوق محفوظة | All Rights Reserved
</footer>

<script>
  function switchLang(lang) {
    document.getElementById('ar').style.display = lang === 'ar' ? 'block' : 'none';
    document.getElementById('en').style.display = lang === 'en' ? 'block' : 'none';
    const buttons = document.querySelectorAll('.lang-tabs button');
    buttons.forEach(btn => btn.classList.remove('active'));
    buttons[lang==='ar'?0:1].classList.add('active');
  }

  // إنشاء روابط داخلية تلقائياً
  const nav = document.getElementById('nav-links');
  const sections = {
    'ar': ['falsafah','ahdaf','adwar','tawjih'],
    'en': ['philosophy','goals','roles','future']
  };
  const labels = {
    'ar': ['الفلسفة','الأهداف','الأدوار','التوجيه'],
    'en': ['Philosophy','Goals','Roles','Direction']
  };
  sections['ar'].forEach((id,i) => {
    const a = document.createElement('a');
    a.href = `#${id}`;
    a.textContent = labels['ar'][i];
    nav.appendChild(a);
  });
</script>

</body>
</html>
