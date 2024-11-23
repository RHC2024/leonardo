// Wait for the page to fully load 
window.addEventListener('load', () => {
  // Select the intro and home elements
  const intro = document.getElementById('intro');
  const home = document.getElementById('home');

  // Initially prevent scrolling by setting overflow hidden
  document.body.style.overflow = 'hidden';

  // Hide intro and show home after 3 seconds
  setTimeout(() => {
    intro.classList.add('hidden'); // Hide intro with fade-out
    home.classList.add('visible'); // Show home content

    // Enable scrolling after intro is hidden
    document.body.style.overflow = 'auto'; // Allow scrolling after intro fades out
  }, 3000); // 3000ms delay (3 seconds)
});


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
        const threshold = 150; // Ubah sesuai keinginan
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
