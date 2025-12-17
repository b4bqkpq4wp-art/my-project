// script.js
document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.createElement('div');
    menuToggle.className = 'menu-toggle';
    menuToggle.innerHTML = `
        <span></span>
        <span></span>
        <span></span>
    `;
    
    const headerContainer = document.querySelector('.header__container');
    headerContainer.insertBefore(menuToggle, headerContainer.firstChild);
    
    menuToggle.addEventListener('click', function() {
        const sidebar = document.querySelector('.header__sidebar');
        sidebar.classList.toggle('sidebar__open');
    });
    
    // Закрыть меню при клике на ссылку
    const sidebarLinks = document.querySelectorAll('.sidebar__link');
    sidebarLinks.forEach(link => {
        link.addEventListener('click', function() {
            const sidebar = document.querySelector('.header__sidebar');
            sidebar.classList.remove('sidebar__open');
        });
    });
});