// language-switcher.js
const languageSwitcher = {
  init() {
    this.currentLanguage = localStorage.getItem('preferredLanguage') || 'es';
    this.languageToggle = document.getElementById('language-toggle');
    this.languageText = document.querySelector('.language-text');
    this.languageText.textContent = this.currentLanguage === 'es' ? 'ES' : 'EN';
    this.setupEvents();
    this.updateContent();
  },

  setupEvents() {
    this.languageToggle.addEventListener('click', () => {
      this.currentLanguage = this.currentLanguage === 'es' ? 'en' : 'es';
      localStorage.setItem('preferredLanguage', this.currentLanguage);
      this.languageText.textContent = this.currentLanguage === 'es' ? 'ES' : 'EN';
      this.updateContent();
    });
  },

  updateContent() {
    const elements = {
      // Navegación
      'nav-inicio': {
        es: 'Inicio',
        en: 'Home'
      },
      'nav-servicios': {
        es: 'Servicios',
        en: 'Services'
      },
      'nav-nosotros': {
        es: 'Sobre nosotros',
        en: 'About us'
      },
      'nav-contacto': {
        es: '¡Contáctanos!',
        en: 'Contact us!'
      },

      // Hero Section
      'hero-title-1': {
        es: 'Transformación',
        en: 'Complete'
      },
      'hero-title-2': {
        es: 'Digital Integral',
        en: 'Digital Transformation'
      },
      'hero-quote': {
        es: '"Una empresa que no solo brinda servicios IT, brinda seguridad y confianza."',
        en: '"A company that not only provides IT services, but also provides security and trust."'
      },
      'hero-cta-primary': {
        es: 'Contáctanos ahora',
        en: 'Contact us now'
      },
      'hero-cta-secondary': {
        es: 'Explorar servicios',
        en: 'Explore services'
      },

      // Servicios Section
      'servicios-subtitle': {
        es: 'NUESTROS SERVICIOS',
        en: 'OUR SERVICES'
      },
      'servicios-title': {
        es: 'Soluciones tecnológicas completas',
        en: 'Complete tech solutions'
      },
      'servicios-description': {
        es: 'Servicios profesionales para empresas en Tijuana y todo México. Desde desarrollo web hasta ciberseguridad, tenemos la solución perfecta para ti.',
        en: 'Professional services for businesses in Tijuana and all Mexico. From web development to cybersecurity, we have the perfect solution for you.'
      },
      
      // Cards de Servicios
      'servicio-web-title': {
        es: 'Desarrollo Web',
        en: 'Web Development'
      },
      'servicio-web-desc': {
        es: 'Plataformas digitales a medida para tu negocio.',
        en: 'Custom digital platforms for your business.'
      },
      'servicio-web-item1': {
        es: 'Sitios corporativos',
        en: 'Corporate websites'
      },
      'servicio-web-item2': {
        es: 'Tiendas online',
        en: 'Online stores'
      },
      'servicio-web-item3': {
        es: 'Menús digitales',
        en: 'Digital menus'
      },

      'servicio-seguridad-title': {
        es: 'Ciberseguridad',
        en: 'Cybersecurity'
      },
      'servicio-seguridad-desc': {
        es: 'Protección avanzada para tus sistemas y datos.',
        en: 'Advanced protection for your systems and data.'
      },
      'servicio-seguridad-item1': {
        es: 'Análisis de vulnerabilidades',
        en: 'Vulnerability analysis'
      },
      'servicio-seguridad-item2': {
        es: 'Protección de redes',
        en: 'Network protection'
      },
      'servicio-seguridad-item3': {
        es: 'Capacitación en seguridad informática',
        en: 'IT security training'
      },

      'servicio-cloud-title': {
        es: 'Soluciones Cloud',
        en: 'Cloud Solutions'
      },
      'servicio-cloud-desc': {
        es: 'Infraestructura flexible y escalable para tu crecimiento.',
        en: 'Flexible and scalable infrastructure for your growth.'
      },
      'servicio-cloud-item1': {
        es: 'Migración',
        en: 'Migration'
      },
      'servicio-cloud-item2': {
        es: 'Administración de servidores',
        en: 'Server management'
      },
      'servicio-cloud-item3': {
        es: 'Escalabilidad inmediata',
        en: 'Instant scalability'
      },

      'servicio-fisica-title': {
        es: 'Seguridad Física',
        en: 'Physical Security'
      },
      'servicio-fisica-desc': {
        es: 'Sistemas de vigilancia y control de accesos.',
        en: 'Surveillance and access control systems.'
      },
      'servicio-fisica-item1': {
        es: 'CCTV profesional',
        en: 'Professional CCTV'
      },
      'servicio-fisica-item2': {
        es: 'Control de accesos',
        en: 'Access control'
      },
      'servicio-fisica-item3': {
        es: 'Sistemas de alarma',
        en: 'Alarm systems'
      },

      'servicio-soporte-title': {
        es: 'Soporte Técnico',
        en: 'Technical Support'
      },
      'servicio-soporte-desc': {
        es: 'Asistencia profesional cuando la necesites.',
        en: 'Professional assistance when you need it.'
      },
      'servicio-soporte-item1': {
        es: 'Soporte remoto/presencial',
        en: 'Remote/on-site support'
      },
      'servicio-soporte-item2': {
        es: 'Mantenimiento preventivo',
        en: 'Preventive maintenance'
      },
      'servicio-soporte-item3': {
        es: 'Solución de incidencias',
        en: 'Incident resolution'
      },

      'servicio-redes-title': {
        es: 'Infraestructura de Red',
        en: 'Network Infrastructure'
      },
      'servicio-redes-desc': {
        es: 'Conectividad confiable para tu empresa.',
        en: 'Reliable connectivity for your business.'
      },
      'servicio-redes-item1': {
        es: 'Cableado estructurado',
        en: 'Structured cabling'
      },
      'servicio-redes-item2': {
        es: 'Redes empresariales',
        en: 'Business networks'
      },
      'servicio-redes-item3': {
        es: 'WiFi corporativo',
        en: 'Corporate WiFi'
      },

      // Sobre Nosotros Section
      'nosotros-subtitle': {
        es: 'QUIÉNES SOMOS',
        en: 'WHO WE ARE'
      },
      'nosotros-title': {
        es: 'Impulsando el futuro digital',
        en: 'Driving the digital future'
      },
      'nosotros-desc': {
        es: 'Fundada por el Ingeniero Raúl Leana Gámez, LeanaSoft nació de la visión de crear soluciones tecnológicas que no solo resuelvan problemas actuales, sino que anticipen los desafíos del mañana.',
        en: 'Founded by Engineer Raúl Leana Gámez, LeanaSoft was born from the vision of creating technological solutions that not only solve current problems but anticipate tomorrow\'s challenges.'
      },
      'nosotros-vision-title': {
        es: 'Nuestra Visión',
        en: 'Our Vision'
      },
      'nosotros-vision-desc': {
        es: 'Ser referentes en innovación tecnológica, creciendo junto a nuestros clientes y expandiendo nuestra presencia global.',
        en: 'To be leaders in technological innovation, growing with our clients and expanding our global presence.'
      },
      'nosotros-equipo-title': {
        es: 'Nuestro Equipo',
        en: 'Our Team'
      },
      'nosotros-equipo-desc': {
        es: 'Expertos apasionados por la tecnología, comprometidos con la excelencia y la satisfacción del cliente.',
        en: 'Experts passionate about technology, committed to excellence and customer satisfaction.'
      },

      'nosotros-mision-title': {
        es: 'Misión',
        en: 'Mission'
      },
      'nosotros-mision-desc': {
        es: 'Proveer soluciones IT integrales que generen valor real y duradero para nuestros clientes.',
        en: 'To provide comprehensive IT solutions that generate real and lasting value for our clients.'
      },
      'nosotros-expansion-title': {
        es: 'Expansión',
        en: 'Expansion'
      },
      'nosotros-expansion-desc': {
        es: 'Con presencia en crecimiento, llevando nuestra experiencia a nuevos mercados.',
        en: 'With growing presence, taking our expertise to new markets.'
      },
      'nosotros-excelencia-title': {
        es: 'Excelencia',
        en: 'Excellence'
      },
      'nosotros-excelencia-desc': {
        es: 'Compromiso con los más altos estándares de calidad en cada proyecto.',
        en: 'Commitment to the highest quality standards in every project.'
      },
      'nosotros-resultados-title': {
        es: 'Resultados',
        en: 'Results'
      },
      'nosotros-resultados-desc': {
        es: 'Tecnología que genera retorno tangible para tu inversión.',
        en: 'Technology that generates tangible return on your investment.'
      },

      // Valores Section
      'valores-subtitle': {
        es: 'VALORES',
        en: 'VALUES'
      },
      'valores-title': {
        es: 'Principios que nos guían',
        en: 'Guiding principles'
      },
      'valores-desc': {
        es: 'La base de cada solución que creamos y cada relación que construimos.',
        en: 'The foundation of every solution we create and every relationship we build.'
      },

      'valor-innovacion-title': {
        es: 'Innovación',
        en: 'Innovation'
      },
      'valor-innovacion-desc': {
        es: 'Adoptamos tecnologías emergentes para mantener a nuestros clientes a la vanguardia.',
        en: 'We adopt emerging technologies to keep our clients at the forefront.'
      },
      'valor-seguridad-title': {
        es: 'Seguridad',
        en: 'Security'
      },
      'valor-seguridad-desc': {
        es: 'Protección robusta de datos y sistemas como prioridad fundamental.',
        en: 'Robust protection of data and systems as a fundamental priority.'
      },
      'valor-cliente-title': {
        es: 'Enfoque al Cliente',
        en: 'Customer Focus'
      },
      'valor-cliente-desc': {
        es: 'Soluciones personalizadas que responden a necesidades específicas.',
        en: 'Customized solutions that address specific needs.'
      },
      'valor-transparencia-title': {
        es: 'Transparencia',
        en: 'Transparency'
      },
      'valor-transparencia-desc': {
        es: 'Claridad en procesos, costos y resultados esperados.',
        en: 'Clarity in processes, costs and expected results.'
      },
      'valor-mejora-title': {
        es: 'Mejora Continua',
        en: 'Continuous Improvement'
      },
      'valor-mejora-desc': {
        es: 'Aprendizaje constante para optimizar nuestros servicios.',
        en: 'Constant learning to optimize our services.'
      },
      'valor-compromiso-title': {
        es: 'Compromiso',
        en: 'Commitment'
      },
      'valor-compromiso-desc': {
        es: 'Relaciones a largo plazo basadas en confianza mutua.',
        en: 'Long-term relationships based on mutual trust.'
      },

      // Proceso Section
      'proceso-subtitle': {
        es: 'CÓMO TRABAJAMOS',
        en: 'HOW WE WORK'
      },
      'proceso-title': {
        es: 'Nuestra metodología',
        en: 'Our methodology'
      },

      'proceso-paso1-title': {
        es: '1. Diagnóstico',
        en: '1. Diagnosis'
      },
      'proceso-paso1-desc': {
        es: 'Evaluación gratuita de tus necesidades actuales y potenciales áreas de mejora.',
        en: 'Free assessment of your current needs and potential areas for improvement.'
      },
      'proceso-paso2-title': {
        es: '2. Propuesta',
        en: '2. Proposal'
      },
      'proceso-paso2-desc': {
        es: 'Diseño de solución personalizada con costos transparentes y cronograma claro.',
        en: 'Design of customized solution with transparent costs and clear timeline.'
      },
      'proceso-paso3-title': {
        es: '3. Implementación',
        en: '3. Implementation'
      },
      'proceso-paso3-desc': {
        es: 'Ejecución profesional con mínima interrupción a tus operaciones.',
        en: 'Professional execution with minimal disruption to your operations.'
      },

      // CTA Section
      'cta-title': {
        es: '¿Necesitas una solución tecnológica?',
        en: 'Need a technological solution?'
      },
      'cta-desc': {
        es: 'Contáctanos hoy mismo y recibe una asesoría sin costo.',
        en: 'Contact us today and receive a free consultation.'
      },
      'cta-boton1': {
        es: 'Escríbenos',
        en: 'Write us'
      },

      // Footer Section
      'footer-contact-title': {
        es: 'Hablemos de tu proyecto',
        en: 'Let\'s talk about your project'
      },
      'footer-contact-desc': {
        es: 'Completa el formulario y nuestro equipo se pondrá en contacto contigo para ofrecerte una solución personalizada.',
        en: 'Complete the form and our team will contact you to offer a customized solution.'
      },
      'footer-telefono-label': {
        es: 'Teléfono',
        en: 'Phone'
      },

      // Formulario
      'form-nombre-label': {
        es: 'Nombre',
        en: 'Name'
      },
      'name': {
        es: 'Tu nombre',
        en: 'Your name'
      },
      'email': {
        es: 'tu@email.com',
        en: 'your@email.com'
      },
      'form-asunto-label': {
        es: 'Asunto',
        en: 'Subject'
      },
      'subject': {
        es: '¿Cómo podemos ayudarte?',
        en: 'How can we help you?'
      },
      'form-mensaje-label': {
        es: 'Mensaje',
        en: 'Message'
      },
      'message': {
        es: 'Cuéntanos sobre tu proyecto',
        en: 'Tell us about your project'
      },
      'form-submit': {
        es: 'Enviar Mensaje',
        en: 'Send Message'
      },

      // Footer info
      'footer-experiencia': {
        es: 'Con más de 15 años de experiencia en Tecnologías de la Información',
        en: 'With over 15 years of experience in Information Technology'
      },
      'footer-item1': {
        es: 'Asesoría experta',
        en: 'Expert advice'
      },
      'footer-item2': {
        es: 'Equipos de alto rendimiento',
        en: 'High performance teams'
      },
      'footer-item3': {
        es: 'Atención personalizada',
        en: 'Personalized attention'
      },
      'footer-year': {
        es: 'LeanaSoft. Todos los derechos reservados.',
        en: 'LeanaSoft. All rights reserved.'
      }
    };

    // Actualizar todos los elementos del DOM
    Object.keys(elements).forEach(key => {
      const element = document.getElementById(key);
      if (element) {
        if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
          element.placeholder = elements[key][this.currentLanguage];
        } else {
          element.textContent = elements[key][this.currentLanguage];
        }
      }
    });

    // Actualizar atributos lang
    document.documentElement.lang = this.currentLanguage;
  }
};

// Inicializar cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', () => {
  languageSwitcher.init();
});