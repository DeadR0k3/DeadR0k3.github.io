// Animaciones scroll
const animateOnScroll = {
  init() {
    this.observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, { threshold: 0.1 });

    document.querySelectorAll('.fade-in').forEach(el => this.observer.observe(el));
  }
};

// Validacion de formulario
const formValidation = {
  init() {
    this.emailInput = document.getElementById('email');
    this.phoneInput = document.getElementById('phone');
    this.setupEvents();
  },

  setupEvents() {
    this.emailInput.addEventListener('input', (e) => {
      this.validateEmail(e.target);
    });

    this.phoneInput?.addEventListener('input', (e) => {
      this.validatePhone(e.target);
    });
  },

  validateEmail(input) {
    const isValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(input.value);
    input.classList.toggle('border-red-500', !isValid);
    input.classList.toggle('border-green-500', isValid);
  },

  validatePhone(input) {
    const isValid = /^[0-9+\-\s]{10,}$/.test(input.value);
    input.classList.toggle('border-red-500', !isValid);
    input.classList.toggle('border-green-500', isValid);
  }
};

// Inicializacion
document.addEventListener('DOMContentLoaded', () => {
  animateOnScroll.init();
  formValidation.init();

  // Smooth scrolling para enlaces
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });
});