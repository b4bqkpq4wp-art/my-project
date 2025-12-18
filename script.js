// script.js
document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.querySelector('.menu-toggle');
    const navList = document.querySelector('.nav__list');
    
    menuToggle.addEventListener('click', function() {
        this.classList.toggle('active');
        navList.classList.toggle('active');
    });
    
    // Закрыть меню при клике на ссылку
    const navLinks = document.querySelectorAll('.nav__link');
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            menuToggle.classList.remove('active');
            navList.classList.remove('active');
        });
    });
    
    // Закрыть меню при клике вне его области
    document.addEventListener('click', function(event) {
        if (!navList.contains(event.target) && !menuToggle.contains(event.target)) {
            menuToggle.classList.remove('active');
            navList.classList.remove('active');
        }
    });
    
    // Закрыть меню при изменении размера экрана
    window.addEventListener('resize', function() {
        if (window.innerWidth > 767) {
            menuToggle.classList.remove('active');
            navList.classList.remove('active');
        }
    });
});