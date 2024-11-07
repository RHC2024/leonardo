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
