// Efectos hover de botones
document.querySelectorAll('.footer-button').forEach(button => {
    button.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-5px)';
        this.style.boxShadow = '0 8px 20px rgba(15, 240, 252, 0.4)';
    });
    
    button.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0)';
        this.style.boxShadow = 'none';
    });
});

// Efecto de aparicion suave
document.querySelectorAll('.footer-section').forEach((section, index) => {
    section.style.opacity = '0';
    section.style.transform = 'translateY(20px)';
    section.style.transition = `all 0.5s ease ${index * 0.2}s`;
    
    setTimeout(() => {
        section.style.opacity = '1';
        section.style.transform = 'translateY(0)';
    }, 300);
});

document.getElementById('footer-year').textContent = new Date().getFullYear();