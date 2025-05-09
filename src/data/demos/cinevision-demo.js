export const cinevisionDemo = {
    html: `<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="CineVision Studios - Empresa líder en producción audiovisual. Ofrecemos servicios de video, fotografía y postproducción profesional.">
    <meta name="keywords" content="producción audiovisual, videografía, fotografía profesional, postproducción, cine, video corporativo">
    <meta name="author" content="CineVision Studios">
    <meta name="robots" content="index, follow">
    <meta property="og:title" content="CineVision Studios - Producción Audiovisual Profesional">
    <meta property="og:description" content="Tu visión, nuestra pasión. Producción audiovisual profesional para contar tu historia.">
    <meta property="og:image" content="/demos/cinevision/preview.webp">
    <meta property="og:url" content="https://cinevision.com">
    <meta property="og:type" content="website">
    <meta name="twitter:card" content="summary_large_image">
    <link rel="canonical" href="https://cinevision.com">
    <title>CineVision Studios - Producción Audiovisual Profesional</title>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css">
</head>
<body>
    <header class="hero" role="banner">
        <nav role="navigation" aria-label="Navegación principal">
            <div class="logo" role="img" aria-label="Logo de CineVision">CineVision</div>
            <button class="menu-toggle" aria-label="Menú" aria-expanded="false" aria-controls="nav-links">
                <i class="fas fa-bars" aria-hidden="true"></i>
            </button>
            <ul class="nav-links" id="nav-links">
                <li><a href="#servicios" aria-label="Ir a la sección de servicios">Servicios</a></li>
                <li><a href="#portfolio" aria-label="Ir a la sección de portfolio">Portfolio</a></li>
                <li><a href="#contacto" aria-label="Ir a la sección de contacto">Contacto</a></li>
            </ul>
        </nav>
        <div class="hero-content" role="main">
            <h1>Tu visión, nuestra pasión</h1>
            <p>Producción audiovisual profesional para contar tu historia</p>
            <a href="#contacto" class="cta-button" aria-label="Contactar para hablar de tu proyecto">Hablemos de tu proyecto</a>
        </div>
    </header>

    <section id="servicios" class="services" aria-labelledby="servicios-titulo">
        <h2 id="servicios-titulo">Nuestros Servicios</h2>
        <div class="services-grid">
            <article class="service-card" aria-labelledby="servicio-video">
                <div class="service-icon" aria-hidden="true">
                    <i class="fas fa-film"></i>
                </div>
                <h3 id="servicio-video">Producción de Video</h3>
                <p>Desde spots publicitarios hasta documentales corporativos</p>
            </article>
            <article class="service-card" aria-labelledby="servicio-foto">
                <div class="service-icon" aria-hidden="true">
                    <i class="fas fa-camera"></i>
                </div>
                <h3 id="servicio-foto">Fotografía Profesional</h3>
                <p>Sesiones fotográficas para eventos y productos</p>
            </article>
            <article class="service-card" aria-labelledby="servicio-post">
                <div class="service-icon" aria-hidden="true">
                    <i class="fas fa-edit"></i>
                </div>
                <h3 id="servicio-post">Postproducción</h3>
                <p>Edición, colorización y efectos visuales</p>
            </article>
        </div>
    </section>

    <section id="portfolio" class="portfolio" aria-labelledby="portfolio-titulo">
        <h2 id="portfolio-titulo">Nuestro Portfolio</h2>
        <div class="portfolio-grid">
            <article class="portfolio-item" aria-labelledby="proyecto-1">
                <img src="/demos/cinevision/portfolio/1.webp" alt="Proyecto de video corporativo" loading="lazy">
                <div class="overlay">
                    <h3 id="proyecto-1">Video Corporativo</h3>
                    <p>Producción audiovisual para empresa tecnológica</p>
                    <a href="#" class="portfolio-link" aria-label="Ver más sobre el proyecto de video corporativo">Ver más</a>
                </div>
            </article>
            <article class="portfolio-item" aria-labelledby="proyecto-2">
                <img src="/demos/cinevision/portfolio/2.webp" alt="Sesión fotográfica de producto" loading="lazy">
                <div class="overlay">
                    <h3 id="proyecto-2">Fotografía de Producto</h3>
                    <p>Sesión fotográfica para línea de cosméticos</p>
                    <a href="#" class="portfolio-link" aria-label="Ver más sobre el proyecto de fotografía de producto">Ver más</a>
                </div>
            </article>
            <article class="portfolio-item" aria-labelledby="proyecto-3">
                <img src="/demos/cinevision/portfolio/3.webp" alt="Proyecto de postproducción" loading="lazy">
                <div class="overlay">
                    <h3 id="proyecto-3">Postproducción</h3>
                    <p>Edición y efectos visuales para cortometraje</p>
                    <a href="#" class="portfolio-link" aria-label="Ver más sobre el proyecto de postproducción">Ver más</a>
                </div>
            </article>
        </div>
    </section>

    <section id="contacto" class="contact" aria-labelledby="contacto-titulo">
        <h2 id="contacto-titulo">Contacta con Nosotros</h2>
        <form class="contact-form" aria-label="Formulario de contacto">
            <div class="form-group">
                <label for="nombre">Nombre</label>
                <input type="text" id="nombre" name="nombre" required aria-required="true">
            </div>
            <div class="form-group">
                <label for="email">Email</label>
                <input type="email" id="email" name="email" required aria-required="true">
            </div>
            <div class="form-group">
                <label for="mensaje">Mensaje</label>
                <textarea id="mensaje" name="mensaje" required aria-required="true"></textarea>
            </div>
            <button type="submit" class="cta-button" aria-label="Enviar mensaje">Enviar Mensaje</button>
        </form>
    </section>

    <footer role="contentinfo">
        <div class="footer-content">
            <section class="footer-section" aria-labelledby="footer-empresa">
                <h3 id="footer-empresa">CineVision Studios</h3>
                <p>Tu socio en producción audiovisual</p>
            </section>
            <section class="footer-section" aria-labelledby="footer-contacto">
                <h3 id="footer-contacto">Contacto</h3>
                <address>
                    <p><a href="mailto:info@cinevision.com">info@cinevision.com</a></p>
                    <p><a href="tel:+34123456789">+34 123 456 789</a></p>
                </address>
            </section>
            <section class="footer-section" aria-labelledby="footer-redes">
                <h3 id="footer-redes">Síguenos</h3>
                <div class="social-links">
                    <a href="#" aria-label="Instagram de CineVision"><i class="fab fa-instagram" aria-hidden="true"></i></a>
                    <a href="#" aria-label="YouTube de CineVision"><i class="fab fa-youtube" aria-hidden="true"></i></a>
                    <a href="#" aria-label="Vimeo de CineVision"><i class="fab fa-vimeo-v" aria-hidden="true"></i></a>
                </div>
            </section>
        </div>
        <div class="footer-bottom">
            <p>&copy; 2024 CineVision Studios. Todos los derechos reservados.</p>
        </div>
    </footer>
</body>
</html>`,
    css: `* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Arial', sans-serif;
}

:root {
    --primary-color: #a8d5ba;
    --secondary-color: #7cba9b;
    --accent-color: #5c8d7c;
    --text-color: #2c3e50;
    --light-bg: #f0f7f4;
    --white: #ffffff;
}

body {
    line-height: 1.6;
    color: var(--text-color);
    overflow-x: hidden;
}

/* Header & Navigation */
.hero {
    height: 100vh;
    background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
                url('https://images.unsplash.com/photo-1485846234645-a62644f84728?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80');
    background-size: cover;
    background-position: center;
    color: var(--white);
    position: relative;
}

nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1.5rem 5%;
    position: absolute;
    width: 100%;
    top: 0;
    z-index: 1000;
}

.logo {
    font-size: 2rem;
    font-weight: bold;
    color: var(--white);
}

.menu-toggle {
    display: none;
    background: none;
    border: none;
    color: var(--white);
    font-size: 1.5rem;
    cursor: pointer;
}

.nav-links {
    display: flex;
    list-style: none;
    gap: 2rem;
}

nav a {
    color: var(--white);
    text-decoration: none;
    font-weight: 500;
    transition: color 0.3s;
}

nav a:hover {
    color: var(--primary-color);
}

.hero-content {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    text-align: center;
    width: 80%;
    padding: 0 1rem;
}

.hero-content h1 {
    font-size: clamp(2rem, 5vw, 3.5rem);
    margin-bottom: 1rem;
}

.hero-content p {
    font-size: clamp(1rem, 2vw, 1.2rem);
    margin-bottom: 2rem;
}

/* Buttons */
.cta-button {
    display: inline-block;
    padding: 1rem 2rem;
    background-color: var(--secondary-color);
    color: var(--white);
    text-decoration: none;
    border-radius: 5px;
    transition: all 0.3s ease;
    font-size: clamp(0.9rem, 1.5vw, 1rem);
}

.cta-button:hover {
    background-color: var(--accent-color);
    transform: translateY(-2px);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

/* Services Section */
.services {
    padding: clamp(3rem, 5vw, 5rem) 5%;
    background-color: var(--light-bg);
}

.services h2 {
    text-align: center;
    margin-bottom: 3rem;
    font-size: clamp(1.8rem, 3vw, 2.5rem);
    color: var(--accent-color);
}

.services-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 2rem;
    max-width: 1200px;
    margin: 0 auto;
}

.service-card {
    background: var(--white);
    padding: 2rem;
    border-radius: 15px;
    text-align: center;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    transition: all 0.3s ease;
    position: relative;
    overflow: hidden;
}

.service-card::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(45deg, var(--primary-color), var(--secondary-color));
    opacity: 0;
    transition: opacity 0.3s ease;
    z-index: 1;
}

.service-card:hover::before {
    opacity: 0.1;
}

.service-card:hover {
    transform: translateY(-10px);
    box-shadow: 0 8px 15px rgba(0, 0, 0, 0.1);
}

.service-icon {
    width: 80px;
    height: 80px;
    margin: 0 auto 1.5rem;
    background: var(--light-bg);
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.3s ease;
    position: relative;
    z-index: 2;
}

.service-card:hover .service-icon {
    transform: scale(1.1) rotate(5deg);
    background: var(--primary-color);
}

.service-icon i {
    font-size: clamp(2rem, 4vw, 3rem);
    color: var(--accent-color);
    transition: all 0.3s ease;
}

.service-card:hover .service-icon i {
    color: var(--white);
    transform: scale(1.1);
}

.service-card h3 {
    margin-bottom: 1rem;
    color: var(--accent-color);
    position: relative;
    z-index: 2;
}

.service-card p {
    color: var(--text-color);
    position: relative;
    z-index: 2;
}

/* Portfolio Section */
.portfolio {
    padding: clamp(3rem, 5vw, 5rem) 5%;
    background-color: var(--white);
}

.portfolio h2 {
    text-align: center;
    margin-bottom: 3rem;
    font-size: clamp(1.8rem, 3vw, 2.5rem);
    color: var(--accent-color);
}

.portfolio-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 2rem;
    max-width: 1200px;
    margin: 0 auto;
}

.portfolio-item {
    position: relative;
    overflow: hidden;
    border-radius: 15px;
    aspect-ratio: 4/3;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    transition: all 0.3s ease;
}

.portfolio-item:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 15px rgba(0, 0, 0, 0.2);
}

.portfolio-item img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.5s ease;
}

.portfolio-item:hover img {
    transform: scale(1.1);
}

.overlay {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    background: linear-gradient(to top, rgba(0, 0, 0, 0.8), transparent);
    padding: 2rem 1.5rem;
    color: var(--white);
    transform: translateY(100%);
    transition: transform 0.3s ease;
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
}

.portfolio-item:hover .overlay {
    transform: translateY(0);
}

.overlay h3 {
    font-size: 1.5rem;
    margin-bottom: 0.5rem;
}

.overlay p {
    font-size: 0.9rem;
    opacity: 0.9;
}

.portfolio-link {
    display: inline-block;
    margin-top: 1rem;
    padding: 0.5rem 1rem;
    background: var(--primary-color);
    color: var(--white);
    text-decoration: none;
    border-radius: 5px;
    transition: all 0.3s ease;
    align-self: flex-start;
}

.portfolio-link:hover {
    background: var(--secondary-color);
    transform: translateX(5px);
}

/* Contact Section */
.contact {
    padding: clamp(3rem, 5vw, 5rem) 5%;
    background-color: var(--light-bg);
}

.contact h2 {
    text-align: center;
    margin-bottom: 3rem;
    font-size: clamp(1.8rem, 3vw, 2.5rem);
    color: var(--accent-color);
}

.contact-form {
    max-width: 600px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    padding: 0 1rem;
}

.contact-form input,
.contact-form textarea {
    padding: 1rem;
    border: 2px solid var(--primary-color);
    border-radius: 5px;
    font-size: 1rem;
    width: 100%;
    transition: all 0.3s ease;
}

.contact-form input:focus,
.contact-form textarea:focus {
    outline: none;
    border-color: var(--accent-color);
    box-shadow: 0 0 0 3px rgba(92, 141, 124, 0.1);
}

.contact-form textarea {
    height: 150px;
    resize: vertical;
}

/* Footer */
footer {
    background-color: var(--accent-color);
    color: var(--white);
    padding: clamp(2rem, 3vw, 3rem) 5% 1rem;
}

.footer-content {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 2rem;
    max-width: 1200px;
    margin: 0 auto 2rem;
}

.footer-section h3 {
    margin-bottom: 1rem;
    font-size: clamp(1.2rem, 2vw, 1.5rem);
}

.social-links {
    display: flex;
    gap: 1rem;
}

.social-links a {
    color: var(--white);
    font-size: clamp(1.2rem, 2vw, 1.5rem);
    transition: all 0.3s ease;
}

.social-links a:hover {
    color: var(--primary-color);
    transform: translateY(-3px);
}

.footer-bottom {
    text-align: center;
    padding-top: 2rem;
    border-top: 1px solid rgba(255, 255, 255, 0.1);
    font-size: clamp(0.8rem, 1.5vw, 1rem);
}

/* Responsive Design */
@media (max-width: 1024px) {
    .services-grid,
    .portfolio-grid {
        grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    }
}

@media (max-width: 768px) {
    .menu-toggle {
        display: block;
    }

    .nav-links {
        position: fixed;
        top: 0;
        right: -100%;
        width: 70%;
        height: 100vh;
        background: rgba(0, 0, 0, 0.9);
        flex-direction: column;
        align-items: center;
        justify-content: center;
        transition: right 0.3s ease;
    }

    .nav-links.active {
        right: 0;
    }

    .hero-content {
        width: 90%;
    }

    .services-grid,
    .portfolio-grid {
        grid-template-columns: 1fr;
    }

    .footer-content {
        grid-template-columns: 1fr;
        text-align: center;
    }

    .social-links {
        justify-content: center;
    }
}

@media (max-width: 480px) {
    nav {
        padding: 1rem 5%;
    }

    .logo {
        font-size: 1.5rem;
    }

    .hero-content {
        width: 95%;
    }

    .service-card {
        padding: 1.5rem;
    }

    .contact-form {
        padding: 0;
    }
}`,
    js: `// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Form submission handling
const contactForm = document.querySelector('.contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        alert('Gracias por tu mensaje. Nos pondremos en contacto contigo pronto.');
        this.reset();
    });
}

// Add animation to service cards on scroll
const observerOptions = {
    threshold: 0.1
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

document.querySelectorAll('.service-card').forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(20px)';
    card.style.transition = 'opacity 0.5s, transform 0.5s';
    observer.observe(card);
});

// Mobile menu toggle
const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

if (menuToggle && navLinks) {
    menuToggle.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });

    // Close menu when clicking on a link
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('active');
        });
    });
}`
}; 