// develop by : https://github.com/ArbathAbdurrahman
document.addEventListener("DOMContentLoaded", function() {
    const menu = document.getElementById('menu');
    const navbar = document.getElementById('navbar');
    const menuButton = document.getElementById('menu-button');

    // Toggle menu saat tombol hamburger diklik
    menuButton.addEventListener('click', function() {
        menu.classList.toggle('hidden');
        // Tambahkan class untuk animasi jika diinginkan
        menu.classList.toggle('menu-active');
    });

    // Menyembunyikan menu saat tautan diklik
    const menuLinks = document.querySelectorAll('#menu a');
    menuLinks.forEach(link => {
        link.addEventListener('click', () => {
            menu.classList.add('hidden');
            menu.classList.remove('menu-active');
        });
    });

    // Event listener untuk scroll
    let lastScrollTop = 0;
    window.addEventListener('scroll', function() {
        let currentScroll = window.pageYOffset || document.documentElement.scrollTop;
        
        if (currentScroll > lastScrollTop && currentScroll > 50) {
            // Scrolling down & past 50px
            navbar.classList.add('navbar-hidden');
        } else {
            // Scrolling up or at the top
            navbar.classList.remove('navbar-hidden');
        }
        
        lastScrollTop = currentScroll <= 0 ? 0 : currentScroll;
    }, false);
});