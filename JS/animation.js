// Animación de entrada en el banner
document.addEventListener('DOMContentLoaded', () => {
    const bannerContent = document.querySelector('.banner-content');
    bannerContent.style.opacity = '0';
    bannerContent.style.transform = 'translateY(-20px)';
    
    setTimeout(() => {
        bannerContent.style.transition = 'all 1s ease';
        bannerContent.style.opacity = '1';
        bannerContent.style.transform = 'translateY(0)';
    }, 100);
});

// Animación al hacer scroll (Servicios)
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, { threshold: 0.2 });

document.querySelectorAll('.service').forEach(service => {
    service.classList.add('hidden');
    observer.observe(service);
});

// Animación del logo en el navbar
const logo = document.querySelector('.nav-logo .logo');
logo.addEventListener('mouseover', () => {
    logo.style.transition = 'transform 0.3s';
    logo.style.transform = 'rotate(15deg)';
});
logo.addEventListener('mouseout', () => {
    logo.style.transform = 'rotate(0)';
});

// Agrandamiento con rebote
document.querySelectorAll('.animated-button').forEach(button => {
    button.addEventListener('click', () => {
        button.classList.add('clicked');
        setTimeout(() => {
            button.classList.remove('clicked');
        }, 200);
    });
});


// Smooth scroll back to top
document.getElementById("backToTop").addEventListener("click", function () {
    window.scrollTo({ top: 0, behavior: "smooth" });
});

// Basic form submission alert
document.querySelector(".contact-form").addEventListener("submit", function (e) {
    e.preventDefault();
    alert("Thank you for reaching out! We'll get back to you soon.");
});

// Animación de rebote al hacer clic en un botón del navbar
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        link.style.transition = 'transform 0.2s ease';
        link.style.transform = 'scale(1.1)';
        setTimeout(() => {
            link.style.transform = 'scale(1)';
        }, 200);
    });
});

    window.addEventListener("load", () => {
        const loader = document.getElementById("loader");
        const content = document.getElementById("content");

        // Añade una transición para ocultar suavemente el loader
        loader.style.opacity = "0";
        loader.style.transition = "opacity 0.5s ease";

        // Espera que la transición termine y elimina el loader
        setTimeout(() => {
            loader.style.display = "none";
            content.style.display = "block"; // Muestra el contenido principal
        }, 500); // Tiempo en milisegundos que coincide con la duración de la transición
    });
