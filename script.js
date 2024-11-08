let slideIndex = 0;
const slides = document.querySelectorAll('.slideshow img');

// Fungsi untuk menampilkan slide
function showSlides() {
    slides.forEach(slide => slide.style.display = 'none'); // Sembunyikan semua gambar
    slideIndex++;
    if (slideIndex > slides.length) { slideIndex = 1; } // Ulangi dari slide pertama
    slides[slideIndex - 1].style.display = 'block';
    setTimeout(showSlides, 3000); // Ganti slide setiap 3 detik
}

// Efek Gerakan Mouse
const slideshow = document.getElementById('slideshow');
slideshow.addEventListener('mousemove', (e) => {
    const { offsetX, offsetY } = e;
    const { clientWidth, clientHeight } = slideshow;
    const xPos = (offsetX / clientWidth) - 0.5;
    const yPos = (offsetY / clientHeight) - 0.5;

    slides.forEach(slide => {
        slide.style.transform = `translate(${xPos * 20}px, ${yPos * 20}px)`;
    });
});

showSlides();




const gridItems = document.querySelectorAll('.grid-item');
const descriptions = document.querySelectorAll('.product-description');

document.addEventListener('mousemove', (e) => {
    const mouseX = e.clientX;
    const mouseY = e.clientY;

    gridItems.forEach((item, index) => {
        const rect = item.getBoundingClientRect();
        const itemX = rect.left + rect.width / 2;
        const itemY = rect.top + rect.height / 2;

        // Hitung jarak antara posisi mouse dan posisi gambar
        const distance = Math.sqrt(Math.pow(mouseX - itemX, 2) + Math.pow(mouseY - itemY, 2));

        // Jika jarak lebih kecil dari threshold, hilangkan gambar dan tampilkan deskripsi
        const threshold = 50; // Ubah sesuai keinginan
        if (distance < threshold) {
            const img = item.querySelector('img');
            img.style.opacity = '0';
            img.style.transform = 'scale(0.8)';
            descriptions[index].style.opacity = '1';
            descriptions[index].style.visibility = 'visible';
        } else {
            const img = item.querySelector('img');
            img.style.opacity = '1';
            img.style.transform = 'scale(1)';
            descriptions[index].style.opacity = '0';
            descriptions[index].style.visibility = 'hidden';
        }
    });
});

