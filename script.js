document.addEventListener('DOMContentLoaded', () => {
    const lanjutBtn = document.getElementById('lanjut');
    const namaInput = document.getElementById('nama');
    const sukaSelect = document.getElementById('suka');
    const halaman1 = document.getElementById('halaman1');
    const halaman2 = document.getElementById('halaman2');
    const sapaan = document.getElementById('sapaan');
    const mauBtn = document.getElementById('mauBanget');
    const idihBtn = document.getElementById('idihNggaAh');

    lanjutBtn.addEventListener('click', () => {
        const nama = namaInput.value.trim();
        const suka = sukaSelect.value;
        if (!nama) {
            alert('Tolong masukkan nama kamu.');
            namaInput.focus();
            return;
        }
        sapaan.textContent = `Halo, ${nama}! Kamu suka ${suka}.`;
        halaman1.style.display = 'none';
        halaman2.style.display = 'block';
    });

    mauBtn.addEventListener('click', () => {
        alert('Yay! Aku juga senang jadi temenmu 💖');
    });

    idihBtn.style.position = idihBtn.style.position || 'absolute';
    let idihClicks = 0;
    const moveOrMorph = (e) => {
        idihClicks++;
        const morphChance = Math.min(0.5, 0.15 + idihClicks * 0.1);
        if (Math.random() < morphChance) {
            // berubah jadi Mau Banget
            idihBtn.textContent = '💖 Mau Banget';
            idihBtn.classList.add('morphed');
            idihBtn.removeEventListener('click', moveOrMorph);
            idihBtn.addEventListener('click', () => {
                alert('Yay! Aku juga senang jadi temenmu 💖');
            });
            if (mauBtn) mauBtn.style.display = 'none';
            // reset posisi dan styling
            idihBtn.style.left = '';
            idihBtn.style.top = '';
            idihBtn.style.position = 'static';
            return;
        }
        // kabur ke posisi acak dalam container halaman2
        const rect = halaman2.getBoundingClientRect();
        const btnRect = idihBtn.getBoundingClientRect();
        const maxLeft = Math.max(0, rect.width - btnRect.width - 10);
        const maxTop = Math.max(0, rect.height - btnRect.height - 10);
        const left = Math.floor(Math.random() * (maxLeft + 1));
        const top = Math.floor(Math.random() * (maxTop + 1));
        idihBtn.style.left = left + 'px';
        idihBtn.style.top = top + 'px';
    };
    idihBtn.addEventListener('click', moveOrMorph);
});