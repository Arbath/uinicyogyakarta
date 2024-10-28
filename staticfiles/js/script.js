document.addEventListener("DOMContentLoaded", function() {
    const menu = document.getElementById('menu');
    const navbar = document.getElementById('navbar');
    const menuButton = document.getElementById('menu-button');

    // Toggle menu saat tombol hamburger diklik
    menuButton.addEventListener('click', function() {
        menu.classList.toggle('hidden');
    });

    // Menyembunyikan menu saat tautan diklik
    const menuLinks = document.querySelectorAll('#menu a');
    menuLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (!menu.classList.contains('hidden')) {
                menu.classList.add('hidden'); // Sembunyikan menu
            }
        });
    });

    // Event listener untuk scroll
    let lastScrollTop = 0;
    window.addEventListener('scroll', function() {
        const currentScroll = window.pageYOffset || document.documentElement.scrollTop;

        if (currentScroll > 50) {
            if (currentScroll > lastScrollTop) {
                navbar.classList.add('hidden'); // Scroll ke bawah
            } else {
                navbar.classList.remove('hidden'); // Scroll ke atas
            }
        }

        lastScrollTop = currentScroll <= 0 ? 0 : currentScroll; // Menyimpan posisi scroll terakhir
    });
});