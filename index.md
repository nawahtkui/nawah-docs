<!-- Nawah Docs - Index -->

# 🌸 Nawah Token (NWTK) / مشروع نواة

<!-- Language Toggle Button -->
<button onclick="toggleLang()" style="margin: 1rem 0; padding:0.5rem 1rem; border-radius:12px; border:none; background:#d4af37; color:white; cursor:pointer;">
تبديل اللغة / Switch Language
</button>

<!-- Search Input -->
<input type="text" id="searchInput" placeholder="🔍 ابحث / Search..." onkeyup="searchDocs()" style="width:100%; padding:0.5rem; margin-bottom:1rem; border-radius:8px; border:1px solid #ccc;" />

<!-- Arabic Content -->
<div lang="ar">
مرحبًا بكم في التوثيق الرسمي لمشروع **نواة توكن (NWTK)**، المبادرة الثقافية والتقنية لتمكين المرأة والشباب عبر البلوكشين وNFTs والابتكار اللامركزي.

### 🔗 الروابط السريعة
- [📘 الورقة البيضاء](whitepaper.md)
- [📊 نموذج التوزيع (Tokenomics)](tokenomics.md)
- [🔐 الأمان والتحقق](security.md)
- [🗺️ خارطة الطريق](roadmap.md)
- [🎨 NFTs والفن الرقمي](nfts.md)

### 🌍 الرؤية
**نواة** تجسر بين التراث الثقافي والابتكار الحديث، لبناء نظام رقمي يحتفي بالإبداع والعدالة والتمكين.
</div>

<!-- English Content -->
<div lang="en" style="display:none;">
Welcome to the official documentation of **Nawah Token (NWTK)** — a cultural and technological initiative empowering women and youth through blockchain, NFTs, and decentralized innovation.

### 🔗 Quick Links
- [📘 Whitepaper](whitepaper.md)
- [📊 Tokenomics](tokenomics.md)
- [🔐 Security & Audit](security.md)
- [🗺️ Roadmap](roadmap.md)
- [🎨 NFTs & Digital Art](nfts.md)

### 🌍 Vision
**Nawah** bridges cultural heritage and modern innovation, creating a digital ecosystem that celebrates creativity, equity, and empowerment.
</div>

<!-- Language Toggle Script -->
<script>
function toggleLang() {
  document.querySelectorAll('[lang]').forEach(el => {
    el.style.display = (el.style.display === 'none') ? '' : 'none';
  });
}
function searchDocs() {
  const filter = document.getElementById('searchInput').value.toLowerCase();
  document.querySelectorAll('a').forEach(link => {
    if(link.textContent.toLowerCase().includes(filter)) {
      link.style.display = '';
    } else {
      link.style.display = 'none';
    }
  });
}
</script>
