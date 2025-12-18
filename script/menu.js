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
    }
    
    // Кнопка "Наверх"
    const scrollTopButton = document.getElementById('scrollTop');
    
    if (scrollTopButton) {
        // Плавное появление кнопки
        window.addEventListener('scroll', () => {
            if (window.scrollY > 300) {
                scrollTopButton.classList.add('visible');
            } else {
                scrollTopButton.classList.remove('visible');
            }
        });
        
        // Плавная прокрутка к началу страницы
        scrollTopButton.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }
    
    // Улучшенная анимация при наведении на товары
    const productCards = document.querySelectorAll('.product-card, .combo-card');
    productCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transition = 'transform 0.4s ease, box-shadow 0.4s ease';
            this.style.transform = 'translateY(-5px)';
            this.style.boxShadow = '0 8px 25px rgba(0, 0, 0, 0.15)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transition = 'transform 0.4s ease, box-shadow 0.4s ease';
            this.style.transform = 'translateY(0)';
            this.style.boxShadow = '0 4px 15px rgba(0, 0, 0, 0.1)';
        });
    });
});