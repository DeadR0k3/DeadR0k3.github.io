document.addEventListener('DOMContentLoaded', function() {
    const menu = document.querySelector('.nav-menu');
    const toggleButton = document.querySelector('.nav-toggle');
    
    // Función para alternar menú
    function toggleMenu() {
        menu.classList.toggle('active');
        toggleButton.classList.toggle('active');
        document.body.style.overflow = menu.classList.contains('active') ? 'hidden' : '';
    }
    
    // Evento para el botón hamburguesa
    toggleButton.addEventListener('click', toggleMenu);
    
    // Cerrar menú al hacer clic en enlace (solo en móviles)
    document.querySelectorAll('.nav-link, .nav-cta').forEach(link => {
        link.addEventListener('click', () => {
            if (window.innerWidth <= 992) toggleMenu();
        });
    });
    
    // Efecto especial para el botón CTA
    const ctaButton = document.querySelector('.nav-cta');
    if (ctaButton) {
        ctaButton.addEventListener('mouseenter', () => ctaButton.style.animation = 'none');
        ctaButton.addEventListener('mouseleave', () => ctaButton.style.animation = 'neonPulse 2s infinite alternate');
    }
    
    // Cerrar menú al cambiar a pantalla grande
    window.addEventListener('resize', () => {
        if (window.innerWidth > 992 && menu.classList.contains('active')) {
            toggleMenu();
        }
    });
    
    // Actualizar año en el footer
    const yearElement = document.getElementById('footer-year');
    if (yearElement) yearElement.textContent = new Date().getFullYear();
});