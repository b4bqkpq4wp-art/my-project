// script.js
document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.querySelector('.menu-toggle');
    const navList = document.querySelector('.nav__list');
    
    menuToggle.addEventListener('click', function() {
        navList.classList.toggle('active');
    });
    
    // Закрыть меню при клике на ссылку
    const navLinks = document.querySelectorAll('.nav__link');
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            navList.classList.remove('active');
        });
    });
    
    // Закрыть меню при клике вне его области
    document.addEventListener('click', function(event) {
        if (!navList.contains(event.target) && !menuToggle.contains(event.target)) {
            navList.classList.remove('active');
        }
    });
});