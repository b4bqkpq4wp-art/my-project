document.addEventListener('DOMContentLoaded', function() {
    // Мобильное меню
    const menuToggle = document.querySelector('.menu-toggle');
    const sidebar = document.querySelector('.sidebar');
    const navOverlay = document.querySelector('.nav-overlay');
    const sidebarClose = document.querySelector('.sidebar__close');
    
    if (menuToggle && sidebar && navOverlay) {
        // Открытие меню
        menuToggle.addEventListener('click', function() {
            this.classList.toggle('active');
            sidebar.classList.toggle('active');
            navOverlay.classList.toggle('active');
            document.body.style.overflow = sidebar.classList.contains('active') ? 'hidden' : '';
        });
        
        // Закрытие меню через кнопку закрытия
        if (sidebarClose) {
            sidebarClose.addEventListener('click', closeMenu);
        }
        
        // Закрытие меню при клике на overlay
        navOverlay.addEventListener('click', closeMenu);
        
        // Закрытие меню при нажатии Escape
        document.addEventListener('keydown', function(e) {
            if (e.key === 'Escape' && sidebar.classList.contains('active')) {
                closeMenu();
            }
        });
        
        // Закрытие меню при клике на ссылку
        const sidebarLinks = document.querySelectorAll('.sidebar__link');
        sidebarLinks.forEach(link => {
            link.addEventListener('click', closeMenu);
        });
        
        // Закрытие меню при изменении размера экрана
        window.addEventListener('resize', function() {
            if (window.innerWidth > 767 && sidebar.classList.contains('active')) {
                closeMenu();
            }
        });
        
        // Функция закрытия меню
        function closeMenu() {
            menuToggle.classList.remove('active');
            sidebar.classList.remove('active');
            navOverlay.classList.remove('active');
            document.body.style.overflow = '';
        }
    }
    
    // Кнопка "Наверх"
    const scrollTopButton = document.getElementById('scrollTop');
    
    if (scrollTopButton) {
        // Показываем кнопку после скролла
        window.addEventListener('scroll', () => {
            if (window.scrollY > 300) {
                scrollTopButton.classList.add('visible');
            } else {
                scrollTopButton.classList.remove('visible');
            }
        });
        
        // Прокрутка к началу страницы
        scrollTopButton.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }
    
    // Анимация при наведении на изображения
    const images = document.querySelectorAll('.product-card__image img, .combo-card img, .giftset__image img, .hero__image img');
    
    images.forEach(img => {
        img.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.05)';
        });
        
        img.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1)';
        });
    });
});