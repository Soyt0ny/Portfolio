// Header blur effect on scroll
window.addEventListener('scroll', function() {
    const header = document.querySelector('header');
    if (window.scrollY > 1) {
        header.classList.add('backdrop-blur-md', 'bg-black/30');
    } else {
        header.classList.remove('backdrop-blur-md', 'bg-black/30');
    }
});

// Mobile menu functionality
document.addEventListener('DOMContentLoaded', function() {
    const mobileMenuToggle = document.getElementById('mobileMenuToggle');
    const mobileNav = document.getElementById('mobileNav');
    const burgerLine1 = document.getElementById('burger-line-1');
    const burgerLine2 = document.getElementById('burger-line-2');
    const burgerLine3 = document.getElementById('burger-line-3');
    let isMobileMenuOpen = false;
    
    // Mobile menu toggle
    mobileMenuToggle.addEventListener('click', function() {
        isMobileMenuOpen = !isMobileMenuOpen;
        
        if (isMobileMenuOpen) {
            // Open menu
            mobileNav.classList.remove('-translate-y-full', 'opacity-0', 'invisible');
            mobileNav.classList.add('translate-y-0', 'opacity-100', 'visible');
            
            // Animate burger to X
            burgerLine1.style.transform = 'rotate(45deg) translate(6px, 6px)';
            burgerLine2.style.opacity = '0';
            burgerLine3.style.transform = 'rotate(-45deg) translate(6px, -6px)';
        } else {
            // Close menu
            mobileNav.classList.add('-translate-y-full', 'opacity-0', 'invisible');
            mobileNav.classList.remove('translate-y-0', 'opacity-100', 'visible');
            
            // Animate X back to burger
            burgerLine1.style.transform = 'rotate(0) translate(0, 0)';
            burgerLine2.style.opacity = '1';
            burgerLine3.style.transform = 'rotate(0) translate(0, 0)';
        }
    });
    
    // Close mobile menu when clicking on a link
    const mobileNavLinks = mobileNav.querySelectorAll('a');
    mobileNavLinks.forEach(link => {
        link.addEventListener('click', function() {
            if (isMobileMenuOpen) {
                mobileMenuToggle.click(); // Trigger close
            }
        });
    });
    
    // Close mobile menu when clicking outside
    document.addEventListener('click', function(event) {
        if (isMobileMenuOpen && !mobileMenuToggle.contains(event.target) && !mobileNav.contains(event.target)) {
            mobileMenuToggle.click(); // Trigger close
        }
    });
    
    // Close mobile menu on resize to desktop
    window.addEventListener('resize', function() {
        if (window.innerWidth >= 1024 && isMobileMenuOpen) {
            mobileMenuToggle.click(); // Trigger close
        }
    });

    const languageToggle = document.getElementById('languageToggle');
    let isSpanish = false;
    
    // Language content object
    const content = {
        en: {
            about: 'ABOUT',
            services: 'SERVICES', 
            contact: 'CONTACT',
            myServices: 'MY_SERVICES',
            webPages: 'WEB_PAGES',
            dataAnalysis: 'DATA_ANALYSIS',
            automations: 'AUTOMATIONS',
            webDesc: 'Modern, responsive and optimized websites for your business or personal project',
            dataDesc: 'Transform your data into valuable insights with interactive visualizations and automated reports',
            autoDesc: 'Optimize repetitive processes with scripts and bots that save time and reduce human errors',
            viewServices: 'VIEW_SERVICES',
            connect: 'CONNECT',
            letsConnect: "LET'S_CONNECT",
            contactText: 'Have a project idea? Let\'s talk!',
            namePlaceholder: 'Enter your full name...',
            emailPlaceholder: 'example@gmail.com',
            messagePlaceholder: 'Describe your idea: What do you want to create? What do you need it for? Do you have any reference? What is your approximate budget?'
        },
        es: {
            about: 'ACERCA',
            services: 'SERVICIOS',
            contact: 'CONTACTO', 
            myServices: 'MIS_SERVICIOS',
            webPages: 'PÁGINAS_WEB',
            dataAnalysis: 'ANÁLISIS_DATOS',
            automations: 'AUTOMATIZACIONES',
            webDesc: 'Desarrollo de sitios web modernos, responsivos y optimizados para tu negocio o proyecto personal',
            dataDesc: 'Transformo tus datos en insights valiosos con visualizaciones interactivas y reportes automatizados',
            autoDesc: 'Optimizo procesos repetitivos con scripts y bots que ahorran tiempo y reducen errores humanos',
            viewServices: 'VER_SERVICIOS',
            connect: 'CONECTAR',
            letsConnect: 'CONECTEMOS',
            contactText: '¿Tienes una idea de proyecto? ¡Hablemos!',
            namePlaceholder: 'Escribe tu nombre completo...',
            emailPlaceholder: 'ejemplo@gmail.com',
            messagePlaceholder: 'Describe tu idea: ¿Qué quieres crear? ¿Para qué lo necesitas? ¿Tienes alguna referencia? ¿Cuál es tu presupuesto aproximado?'
        }
    };
    
    // Function to update service options
    function updateServiceOptions(lang) {
        const select = document.querySelector('select[name="service_type"]');
        const options = {
            en: [
                { value: '', text: 'Select your service...' },
                { value: 'web_pages', text: 'Web Pages (Websites, Landing Pages)' },
                { value: 'data_analysis', text: 'Data Analysis (Reports, Visualizations)' },
                { value: 'automations', text: 'Automations (Scripts, Bots, Processes)' }
            ],
            es: [
                { value: '', text: 'Selecciona tu servicio...' },
                { value: 'web_pages', text: 'Páginas Web (Sitios web, Landing Pages)' },
                { value: 'data_analysis', text: 'Análisis de Datos (Reportes, Visualizaciones)' },
                { value: 'automations', text: 'Automatizaciones (Scripts, Bots, Procesos)' }
            ]
        };
        
        select.innerHTML = '';
        options[lang].forEach(option => {
            const optionElement = document.createElement('option');
            optionElement.value = option.value;
            optionElement.textContent = option.text;
            select.appendChild(optionElement);
        });
    }
    
    languageToggle.addEventListener('click', function() {
        isSpanish = !isSpanish;
        const lang = isSpanish ? 'es' : 'en';
        
        // Update desktop navigation
        document.querySelector('nav.hidden a[href="#inicio"]').textContent = content[lang].about;
        document.querySelector('nav.hidden a[href="#proyectos"]').textContent = content[lang].services;
        document.querySelector('nav.hidden a[href="#contacto"]').textContent = content[lang].contact;
        
        // Update mobile navigation
        document.querySelector('#mobileNav a[href="#inicio"]').textContent = content[lang].about;
        document.querySelector('#mobileNav a[href="#proyectos"]').textContent = content[lang].services;
        document.querySelector('#mobileNav a[href="#contacto"]').textContent = content[lang].contact;
        
        // Update services section
        document.querySelector('#proyectos h2').textContent = content[lang].myServices;
        document.querySelector('.text-purple-400.tracking-wider').textContent = content[lang].webPages;
        document.querySelector('.text-pink-400.tracking-wider').textContent = content[lang].dataAnalysis;
        document.querySelector('.text-yellow-400.tracking-wider').textContent = content[lang].automations;
        
        // Update service descriptions
        const descriptions = document.querySelectorAll('#proyectos .text-gray-300.mb-3');
        descriptions[0].textContent = content[lang].webDesc;
        descriptions[1].textContent = content[lang].dataDesc;
        descriptions[2].textContent = content[lang].autoDesc;
        
        // Update buttons - using more specific selectors to avoid conflicts
        const viewServicesBtn = document.querySelector('div.flex.flex-col.sm\\:flex-row a[href="#proyectos"]');
        const connectBtn = document.querySelector('div.flex.flex-col.sm\\:flex-row a[href="#contacto"]');
        
        if (viewServicesBtn) viewServicesBtn.textContent = content[lang].viewServices;
        if (connectBtn) connectBtn.textContent = content[lang].connect;
        
        // Update contact section
        document.querySelector('#contacto h2').textContent = content[lang].letsConnect;
        
        // Update form placeholders
        document.querySelector('input[name="name"]').placeholder = content[lang].namePlaceholder;
        document.querySelector('input[name="email"]').placeholder = content[lang].emailPlaceholder;
        document.querySelector('textarea[name="message"]').placeholder = content[lang].messagePlaceholder;
        
        // Update service options
        updateServiceOptions(lang);
        
        // Toggle language-specific elements
        document.querySelectorAll('.lang-en').forEach(el => {
            el.style.display = isSpanish ? 'none' : 'inline';
        });
        document.querySelectorAll('.lang-es').forEach(el => {
            el.style.display = isSpanish ? 'inline' : 'none';
            el.classList.toggle('hidden', !isSpanish);
        });
        
        // Update toggle button
        languageToggle.textContent = isSpanish ? 'ES | EN' : 'EN | ES';
    });
    
    // Initialize form placeholders and options in English
    document.querySelector('input[name="name"]').placeholder = content.en.namePlaceholder;
    document.querySelector('input[name="email"]').placeholder = content.en.emailPlaceholder;
    document.querySelector('textarea[name="message"]').placeholder = content.en.messagePlaceholder;
    updateServiceOptions('en');
});

function handleFormSubmit(event) {
    event.preventDefault();
    
    // Obtener datos del formulario
    const formData = new FormData(event.target);
    const name = formData.get('name');
    const email = formData.get('email');
    const serviceType = formData.get('service_type');
    const message = formData.get('message');
    
    // Crear el subject y body para el email
    const subject = `[SERVICIO_${serviceType.toUpperCase()}] - ${name}`;
    const body = `Hola Tony,

Mi nombre es: ${name}
Email: ${email}
Tipo de servicio: ${serviceType}

Descripción del proyecto:
${message}

¡Espero tu respuesta!

Saludos,
${name}`;
    
    // Crear el enlace mailto
    const mailtoLink = `mailto:tu-email@ejemplo.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    
    // Abrir el cliente de email
    window.location.href = mailtoLink;
    
    // Feedback visual
    const button = event.target.querySelector('button');
    const originalText = button.textContent;
    button.textContent = 'TRANSMISSION_SENT';
    button.style.background = 'linear-gradient(45deg, #00ff00, #00aa00)';
    
    setTimeout(() => {
        button.textContent = originalText;
        button.style.background = '';
    }, 3000);
}
