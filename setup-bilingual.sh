#!/bin/bash

# 📌 إعداد مستودع Nawah Docs للعرض الثنائي اللغة في صفحة ويب واحدة
DOCS_DIR="docs"
OUTPUT_DIR="site"
BASE_URL="https://nawahtkui.github.io/nawah-docs"

mkdir -p "$OUTPUT_DIR"

# صفحة HTML رئيسية مع تبويبين
HTML_FILE="$OUTPUT_DIR/index.html"

cat > "$HTML_FILE" <<EOL
<!DOCTYPE html>
<html lang="ar">
<head>
<meta charset="UTF-8">
<title>نواة - مستندات ثنائية اللغة</title>
<style>
body { font-family: Arial, sans-serif; margin: 2rem; }
.tab { display: inline-block; margin-right: 1rem; cursor: pointer; padding: 0.5rem 1rem; background: #eee; border-radius: 5px; }
.tab.active { background: #4CAF50; color: white; }
.section { display: none; margin-top: 1rem; }
.section.active { display: block; }
a { text-decoration: none; color: #1a0dab; }
</style>
</head>
<body>

<h1>نواة - مستندات ثنائية اللغة</h1>
<div>
<span class="tab active" onclick="showSection('en')">🇬🇧 English</span>
<span class="tab" onclick="showSection('ar')">🇸🇦 العربية</span>
</div>

<div id="en" class="section active">
<h2>English Documents</h2>
<ul>
EOL

# إضافة ملفات الإنجليزية
find "$DOCS_DIR" -name "*.md" ! -name "*-ar.md" | while read FILE; do
    REL_PATH="${FILE#"$DOCS_DIR/"}"
    DISPLAY_NAME=$(basename "$REL_PATH" .md | tr '-' ' ')
    echo "<li><a href=\"$BASE_URL/$REL_PATH\" target=\"_blank\">$DISPLAY_NAME</a></li>" >> "$HTML_FILE"
done

cat >> "$HTML_FILE" <<EOL
</ul>
</div>
<div id="ar" class="section">
<h2>المستندات بالعربية</h2>
<ul>
EOL

# إضافة ملفات العربية
find "$DOCS_DIR" -name "*-ar.md" | while read FILE; do
    REL_PATH="${FILE#"$DOCS_DIR/"}"
    DISPLAY_NAME=$(basename "$REL_PATH" -ar.md | tr '-' ' ')
    echo "<li><a href=\"$BASE_URL/$REL_PATH\" target=\"_blank\">$DISPLAY_NAME</a></li>" >> "$HTML_FILE"
done

cat >> "$HTML_FILE" <<'EOL'
</ul>
</div>

<script>
function showSection(id) {
  document.querySelectorAll('.section').forEach(s => s.classList.remove('active'));
  document.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
  document.getElementById(id).classList.add('active');
  document.querySelector(`[onclick="showSection('${id}')"]`).classList.add('active');
}
</script>

</body>
</html>
EOL

echo "✅ تم إنشاء صفحة HTML تفاعلية ثنائية اللغة في $OUTPUT_DIR/index.html"
echo "يمكنك رفع هذا المجلد بالكامل على GitHub Pages للعرض مباشرة!"

