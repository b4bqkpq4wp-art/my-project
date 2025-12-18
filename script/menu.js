document.addEventListener('DOMContentLoaded', function() {
    // Мобильное меню
    const menuToggle = document.querySelector('.menu-toggle');
    const navList = document.querySelector('.nav__list');
    
    if (menuToggle && navList) {
        menuToggle.addEventListener('click', function() {
            this.classList.toggle('active');
            navList.classList.toggle('active');
        });
        
        // Закрыть меню при клике на ссылку
        const navLinks = document.querySelectorAll('.nav__link');
        navLinks.forEach(link => {
            link.addEventListener('click', function() {
                if (window.innerWidth <= 767) {
                    menuToggle.classList.remove('active');
                    navList.classList.remove('active');
                }
            });
        });
        
        // Закрыть меню при клике вне его области
        document.addEventListener('click', function(event) {
            if (!navList.contains(event.target) && 
                !menuToggle.contains(event.target) && 
                !event.target.closest('.header__logo') && 
                window.innerWidth <= 767) {
                menuToggle.classList.remove('active');
                navList.classList.remove('active');
            }
        });
    }
    
    // Кнопка "Наверх"
    const scrollTopButton = document.getElementById('scrollTop');
    
    if (scrollTopButton) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 500) {
                scrollTopButton.classList.add('visible');
            } else {
                scrollTopButton.classList.remove('visible');
            }
        });
        
        scrollTopButton.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }
});