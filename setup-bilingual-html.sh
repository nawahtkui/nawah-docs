#!/bin/bash

# 🔹 إعداد مجلد الموقع
echo "إنشاء مجلد site/..."
mkdir -p site/philosophy
mkdir -p site/tokenomics
mkdir -p site/security
mkdir -p site/whitepaper

# 🔹 تحويل ملفات Markdown إلى HTML باستخدام pandoc
echo "تحويل ملفات Markdown إلى HTML..."
pandoc docs/philosophy-and-direction/index.md -o site/philosophy/index.html
pandoc docs/philosophy-and-direction/index-ar.md -o site/philosophy/index-ar.html

pandoc docs/tokenomics.md -o site/tokenomics/index.html
pandoc docs/tokenomics.md -o site/tokenomics/index-ar.html  # ضع النسخة العربية لاحقًا

pandoc docs/security.md -o site/security/index.html
pandoc docs/security.md -o site/security/index-ar.html     # ضع النسخة العربية لاحقًا

pandoc docs/whitepaper.md -o site/whitepaper/index.html
pandoc docs/whitepaper.md -o site/whitepaper/index-ar.html # ضع النسخة العربية لاحقًا

# 🔹 إضافة Navbar بسيط لكل ملف HTML
NAVBAR='<nav>
<a href="../philosophy/index.html">English</a> |
<a href="../philosophy/index-ar.html">العربية</a> |
<a href="../tokenomics/index.html">Tokenomics</a> |
<a href="../tokenomics/index-ar.html">الرموز</a> |
<a href="../security/index.html">Security</a> |
<a href="../security/index-ar.html">الأمان</a> |
<a href="../whitepaper/index.html">Whitepaper</a> |
<a href="../whitepaper/index-ar.html">الوثيقة البيضاء</a>
</nav>
<hr>'

echo "إضافة Navbar لجميع ملفات HTML..."
for file in $(find site -name "*.html"); do
    echo "$NAVBAR$(cat $file)" > $file
done

echo "✅ تم إنشاء صفحة HTML تفاعلية ثنائية اللغة في site/"
echo "يمكنك رفع هذا المجلد بالكامل على GitHub Pages للعرض مباشرة!"

