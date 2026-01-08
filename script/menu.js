document.addEventListener('DOMContentLoaded', function() {
    // Мобильное меню
    const menuToggle = document.querySelector('.menu-toggle');
    const sidebar = document.querySelector('.sidebar');
    const navOverlay = document.querySelector('.nav-overlay');
    const sidebarClose = document.querySelector('.sidebar__close');
    
    // Функция закрытия меню
    function closeMenu() {
        if (sidebar.classList.contains('active')) {
            menuToggle.classList.remove('active');
            sidebar.classList.remove('active');
            navOverlay.classList.remove('active');
            document.body.style.overflow = '';
        }
    }
    
    // Функция открытия меню
    function openMenu() {
        if (!sidebar.classList.contains('active')) {
            menuToggle.classList.add('active');
            sidebar.classList.add('active');
            navOverlay.classList.add('active');
            document.body.style.overflow = 'hidden';
        }
    }
    
    // Открытие/закрытие меню при клике на гамбургер
    if (menuToggle) {
        menuToggle.addEventListener('click', function() {
            if (sidebar.classList.contains('active')) {
                closeMenu();
            } else {
                openMenu();
            }
        });
    }
    
    // Закрытие меню при клике на крестик
    if (sidebarClose) {
        sidebarClose.addEventListener('click', closeMenu);
    }
    
    // Закрытие меню при клике на overlay
    if (navOverlay) {
        navOverlay.addEventListener('click', closeMenu);
    }
    
    // Закрытие меню при нажатии Escape
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && sidebar.classList.contains('active')) {
            closeMenu();
        }
    });
    
    // Закрытие меню при клике на ссылку в сайдбаре
    const sidebarLinks = document.querySelectorAll('.sidebar__link');
    sidebarLinks.forEach(link => {
        link.addEventListener('click', closeMenu);
    });
    
    // Закрытие меню при изменении размера экрана (если стало десктопным)
    window.addEventListener('resize', function() {
        if (window.innerWidth > 767 && sidebar.classList.contains('active')) {
            closeMenu();
        }
    });
    
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