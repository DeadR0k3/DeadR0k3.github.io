document.addEventListener('DOMContentLoaded', function() {
    const menu = document.querySelector('.nav-menu');
    const toggleButton = document.querySelector('.nav-toggle');
    
    // Funcion alternar menu
    function toggleMenu() {
        menu.classList.toggle('active');
        toggleButton.classList.toggle('active');
        document.body.style.overflow = menu.classList.contains('active') ? 'hidden' : '';
    }
    
    // Evento boton hamburguesa
    toggleButton.addEventListener('click', toggleMenu);
    
    // Cerrar menu
    document.querySelectorAll('.nav-link, .nav-cta').forEach(link => {
        link.addEventListener('click', () => {
            if (window.innerWidth <= 992) toggleMenu();
        });
    });
    
    // Efecto especial
    const ctaButton = document.querySelector('.nav-cta');
    if (ctaButton) {
        ctaButton.addEventListener('mouseenter', () => ctaButton.style.animation = 'none');
        ctaButton.addEventListener('mouseleave', () => ctaButton.style.animation = 'neonPulse 2s infinite alternate');
    }
    
    // Cerrar menu al cambiar a pantalla grande
    window.addEventListener('resize', () => {
        if (window.innerWidth > 992 && menu.classList.contains('active')) {
            toggleMenu();
        }
    });
});