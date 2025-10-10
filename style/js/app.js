// يمكن إضافة وظائف تفاعلية هنا، مثل التكبير عند الضغط على NFT
document.querySelectorAll('.nft-item img').forEach(img => {
    img.addEventListener('click', () => {
        alert("تم الضغط على NFT: " + img.alt);
    });
});
