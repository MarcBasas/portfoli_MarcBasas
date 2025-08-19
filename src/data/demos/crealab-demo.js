export const crealabDemo = {
    html: `
<!DOCTYPE html>
<html lang="es">
    <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
        <title>Cuadrícula Infinita</title>
    </head>
    <body>
        <header class="site-header">
            <h1 class="site-title">CREALAB</h1>
        </header>
        
        <div id="viewport">
            <div id="world"></div>
        </div>

    <nav class="bottom-menu">
        <a href="#about">About</a>
        <a href="#contacto">Contacto</a>
    </nav>

    <!-- Modal de proyecto -->
    <div id="project-modal" class="modal-overlay">
        <div class="project-card">
            <button class="close-btn">×</button>
            <div class="project-image">
                <img id="modal-image" src="" alt="" />
            </div>
            <div class="project-info">
                <div class="project-name" id="modal-name">Proyecto 1</div>
                <div class="project-details">
                    <div class="project-year" id="modal-year">Año: 2024</div>
                    <div class="project-description" id="modal-description">Descripción del proyecto aquí</div>
                </div>
            </div>
        </div>
    </div>

    <!-- Modal About -->
    <div id="about-modal" class="modal-overlay">
        <div class="about-card">
            <button class="close-btn">×</button>
            <div class="about-header">
                <h1 class="about-title">PROPULSA TU MARCA<br>HASTA EL INFINITO</h1>
            </div>
            <div class="about-content">
                <p class="about-description">
                    Somos una agencia de publicidad basada en Barcelona, especializados en fotografía de producto, 
                    branding digital y estrategias creativas que conectan marcas con sus audiencias de manera auténtica 
                    y memorable.
                </p>
            </div>
            <div class="about-projects">
                <div class="projects-grid" id="about-projects-grid">
                </div>
            </div>
        </div>
    </div>

    <!-- Modal Contacto -->
    <div id="contact-modal" class="modal-overlay">
        <div class="contact-card">
            <button class="close-btn">×</button>
            <div class="contact-content">
                <div class="contact-info">
                    <div class="contact-item">
                        <span class="contact-value">hola@agencia.com</span>
                    </div>
                    <div class="contact-item">
                        <span class="contact-value">+34 123 456 789</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </body>
</html>`,
    css: `* {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  html, body {
    width: 100%;
    height: 100%;
    overflow: hidden;
  }

  /* Header con título */
  .site-header {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 20px 0;
    z-index: 8000;
    pointer-events: none;
  }

  .site-title {
    font-family: 'Arial', sans-serif;
    font-weight: bold;
    font-size: 2.5rem;
    color: #000000;
    margin: 0;
    letter-spacing: -1px;
  }
  #viewport {
    width: 100vw;
    height: 100vh;
    overflow: scroll;
  }
  #world {
    /* 3×3 bloques, cada uno del tamaño del viewport */
    width: 300vw;
    height: 300vh;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(3, 1fr);
  }
  .grid {
    /* Cada bloque es un grid 3×3 que ocupa todo el viewport */
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(3, 1fr);
    gap: 10px;           /* aquí el gap que quieras */
    width: 100vw;
    height: 100vh;
    border: 5px solid white;
    
    overflow: visible;
  }
  .item {
    position: relative;
    overflow: hidden;
    background: #222;
    display: block;
    width: 100%;
    height: 100%;
    border: 0px;
    user-select: none;              /* Previene selección de texto */
    -webkit-user-select: none;      /* Safari */
    -moz-user-select: none;         /* Firefox */
    -ms-user-select: none;          /* IE/Edge */

    transition: transform 0.2s ease;
    transform-origin: center center;
  }
  .item img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
    user-select: none;              /* Previene selección de imagen */
    -webkit-user-select: none;      /* Safari */
    -moz-user-select: none;         /* Firefox */
    -ms-user-select: none;          /* IE/Edge */
    pointer-events: none;           /* Previene drag nativo de imagen */
    -webkit-user-drag: none;        /* Previene drag en Safari */
    -khtml-user-drag: none;         /* Previene drag en Konqueror */
    -moz-user-drag: none;           /* Previene drag en Firefox */
    -o-user-drag: none;             /* Previene drag en Opera */
    user-drag: none;                /* Previene drag estándar */
  }

#viewport {
    overflow: scroll;
    scrollbar-width: none;            /* Firefox */
    -ms-overflow-style: none;         /* IE 10+ */
    cursor: grab;
  }
  #viewport::-webkit-scrollbar {
    display: none;                    /* Chrome, Safari, Opera */
  }
  
  /* Cursor en estado de arrastre */
  #viewport.grabbing {
    cursor: grabbing;
  }
  /* Forzar grabbing en todo el viewport mientras arrastramos */
#viewport.grabbing,
#viewport.grabbing * {
  cursor: grabbing !important;
}

/* Cuando el drag ya está activo, no dejamos clicar sobre .item */
#viewport.drag-active .item {
  pointer-events: none;
}

/* bottom-menu */
.bottom-menu {
    position: fixed;
    left: 50%;
    bottom: 20px;                   
    transform: translateX(-50%);
    display: flex;
    gap: 20px;                      /* separación entre botones */
    background: rgba(255, 255, 255, 0.4); /* blanco translúcido */
    backdrop-filter: blur(8px);    /* efecto vidrio */
    border-radius: 50px;            /* "pill" muy redondeado */
    padding: 10px 30px;             /* espacio interior */
    box-shadow: 0 8px 16px rgba(0,0,0,0.2);
    z-index: 9999;                  /* muy por encima de todo */
    pointer-events: auto;           /* asegurar que se pueda hacer click */
}



.bottom-menu a {
    color: #000;
    text-decoration: none;
    font-family: 'Arial', sans-serif;
    font-weight: 400;
    font-size: 1rem;
    padding: 8px 12px;
    border-radius: 30px;
    position: relative;
    z-index: 1;
  }

  /* Modal de proyecto */
  .modal-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.8);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 10000;
    opacity: 0;
    visibility: hidden;
    transition: all 0.3s ease;
  }

  .modal-overlay.active {
    opacity: 1;
    visibility: visible;
  }

  .project-card {
    background: white;
    width: 400px;
    height: 500px;
    border-radius: 8px;
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
    position: relative;
    overflow: hidden;
    transform: scale(0.7);
    transition: transform 0.3s ease;
  }

  .modal-overlay.active .project-card {
    transform: scale(1);
  }

  .close-btn {
    position: absolute;
    top: 15px;
    right: 15px;
    background: rgba(255, 255, 255, 0.9);
    border: none;
    width: 30px;
    height: 30px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 18px;
    font-weight: bold;
    cursor: pointer;
    z-index: 10001;
    color: #333;
    transition: all 0.2s ease;
  }

  .close-btn:hover {
    background: rgba(255, 255, 255, 1);
    transform: scale(1.1);
  }

  .project-image {
    width: 100%;
    height: 300px;
    position: relative;
    overflow: hidden;
  }

  .project-image img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
  }

  .project-info {
    padding: 20px;
    height: 200px;
    background: white;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  .project-name {
    font-family: 'Arial', sans-serif;
    font-weight: bold;
    font-size: 28px;
    color: #2a2a2a;
    margin-bottom: 20px;
  }

  .project-details {
    margin-top: auto;
  }

  .project-year {
    font-family: 'Arial', sans-serif;
    font-size: 14px;
    color: #666;
    margin-bottom: 8px;
  }

  .project-description {
    font-family: 'Arial', sans-serif;
    font-size: 14px;
    color: #333;
    line-height: 1.4;
  }

  /* Modal About */
  .about-card {
    background: #2a2a2a;
    width: 90vw;
    height: 90vh;
    max-width: 1200px;
    max-height: 800px;
    border-radius: 8px;
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.5);
    position: relative;
    overflow: hidden;
    transform: scale(0.7);
    transition: transform 0.3s ease;
    display: flex;
    flex-direction: column;
  }

  .modal-overlay.active .about-card {
    transform: scale(1);
  }

  .about-header {
    height: 35%;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 40px 40px 20px 40px;
  }

  .about-content {
    height: 25%;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0 60px 20px 60px;
  }

  .about-title {
    font-family: 'Arial', sans-serif;
    font-weight: 900;
    font-size: 4rem;
    color: white;
    text-align: center;
    line-height: 1.1;
    letter-spacing: -2px;
    margin: 0;
    text-transform: uppercase;
  }

  .about-description {
    font-family: 'Arial', sans-serif;
    font-size: 1.4rem;
    color: rgba(255, 255, 255, 0.9);
    text-align: center;
    line-height: 1.6;
    margin: 0;
    font-weight: 400;
    max-width: 800px;
  }

  .about-projects {
    height: 40%;
    padding: 0 40px 40px 40px;
    overflow: hidden;
  }

  .projects-grid {
    display: flex;
    gap: 15px;
    height: 100%;
    overflow-x: auto;
    overflow-y: hidden;
    align-items: center;
    padding-bottom: 10px;
  }

  .projects-grid::-webkit-scrollbar {
    height: 8px;
  }

  .projects-grid::-webkit-scrollbar-track {
    background: rgba(255, 255, 255, 0.1);
    border-radius: 4px;
  }

  .projects-grid::-webkit-scrollbar-thumb {
    background: rgba(255, 255, 255, 0.3);
    border-radius: 4px;
  }

  .projects-grid::-webkit-scrollbar-thumb:hover {
    background: rgba(255, 255, 255, 0.5);
  }

  .about-project-item {
    flex-shrink: 0;
    width: 200px;
    height: 120px;
    border-radius: 8px;
    overflow: hidden;
    cursor: pointer;
    transition: all 0.3s ease;
    border: 2px solid transparent;
  }

  .about-project-item:hover {
    transform: scale(1.05);
    border-color: rgba(255, 255, 255, 0.3);
  }

  .about-project-item img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
  }

  /* Responsive para pantallas más pequeñas */
  @media (max-width: 768px) {
    .about-title {
      font-size: 2.2rem;
    }
    
    .about-description {
      font-size: 1rem;
    }
    
    .about-card {
      width: 95vw;
      height: 95vh;
    }
    
    .about-header {
      padding: 20px 20px 10px 20px;
    }
    
    .about-content {
      padding: 0 30px 15px 30px;
    }
    
    .about-projects {
      padding: 0 20px 20px 20px;
    }
    
    .about-project-item {
      width: 150px;
      height: 90px;
    }
  }

  /* Modal Contacto */
  .contact-card {
    background: #2a2a2a;
    width: 500px;
    max-width: 90vw;
    border-radius: 12px;
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.5);
    position: relative;
    overflow: hidden;
    transform: scale(0.7);
    transition: transform 0.3s ease;
  }

  .modal-overlay.active .contact-card {
    transform: scale(1);
  }

  .contact-content {
    padding: 40px 30px 40px 30px;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
  }

  .contact-info {
    display: flex;
    justify-content: center;
    gap: 60px;
    width: 100%;
  }

  .contact-item {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .contact-label {
    font-family: 'Arial', sans-serif;
    font-weight: bold;
    font-size: 1rem;
    margin-bottom: 2px;
  }

  .contact-value {
    font-family: 'Arial', sans-serif;
    font-size: 1.1rem;
    color: white;
    font-weight: 400;
  }

  /* Responsive para modal de contacto */
  @media (max-width: 768px) {
    .contact-card {
      width: 95vw;
      margin: 0 auto;
    }
    
    .contact-content {
      padding: 30px 20px 30px 20px;
    }
    
    .contact-info {
      flex-direction: column;
      gap: 25px;
    }
    
    .contact-value {
      font-size: 1rem;
    }
  }

  /* Responsive para el título */
  @media (max-width: 768px) {
    .site-header {
      padding: 15px 0;
    }
    
    .site-title {
      font-size: 2rem;
    }
  }

  @media (max-width: 480px) {
    .site-title {
      font-size: 1.5rem;
    }
  }
  `,
    js: `
const urls = [
    'https://images.unsplash.com/photo-1583306346437-f2143c0f11fc?q=80&w=1742&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'https://images.unsplash.com/photo-1611488006019-052712bfb2c7?q=80&w=872&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'https://plus.unsplash.com/premium_photo-1668046095310-37d901cf7e7e?q=80&w=1035&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'https://images.unsplash.com/photo-1662569147750-ef722928ce08?q=80&w=1160&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'https://images.unsplash.com/photo-1749621245916-910ef8a23e9a?q=80&w=1976&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'https://images.unsplash.com/photo-1461896836934-ffe607ba8211?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'https://images.unsplash.com/photo-1572635196237-14b3f281503f?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'https://images.unsplash.com/photo-1531297484001-80022131f5a1?q=80&w=1420&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'https://images.unsplash.com/photo-1711054824441-064a99073a0b?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
];

const projects = urls.map((url, i) => ({
    title: "Proyecto " + (i+1),
    imgSrc: url,
    url: '#',
    year: 2020 + i,
    description: "Descripción detallada del proyecto " + (i+1) + ". Este proyecto presenta una propuesta innovadora que combina creatividad y funcionalidad."
  }));
  
  // — Referencias al DOM —
  const viewport = document.getElementById('viewport');
  const world    = document.getElementById('world');
  
  // — Tamaños de bloque (viewport) —
  let blockW, blockH;
  
  // — Flags para drag vs click —
  let isMouseDown = false;
  let hasDragged  = false;
  let startX = 0, startY = 0;
  let scrollLeft = 0, scrollTop = 0;
  
  // — Crea un bloque 3×3 con los 9 items —
  function createGrid() {
    const grid = document.createElement('div');
    grid.className = 'grid';
  
    projects.forEach((proj, index) => {
      const a = document.createElement('Button');
      a.className = 'item';
      a.href = proj.url;
      a.dataset.projectIndex = index; // Para identificar el proyecto
  
            const img = document.createElement('img');
      img.dataset.src = proj.imgSrc;
      img.alt = proj.title;
      
      // Prevenir drag y selección en imágenes
      img.addEventListener('dragstart', (e) => e.preventDefault());
      img.addEventListener('selectstart', (e) => e.preventDefault());
      img.addEventListener('contextmenu', (e) => e.preventDefault());

      a.appendChild(img);
      grid.appendChild(a);
      
      // Agregar event listener para abrir modal
      a.addEventListener('click', (e) => {
        e.preventDefault();
        openModal(proj);
      });
    });
  
    return grid;
  }
  
  // — Monta un mundo 3×3 de bloques —
  function buildWorld() {
    world.innerHTML = '';
    for (let i = 0; i < 9; i++) {
      world.appendChild(createGrid());
    }
  }
  
  // — Centra el scroll en el bloque central —
  function resetScroll() {
    blockW = viewport.clientWidth;
    blockH = viewport.clientHeight;
    viewport.scrollLeft = blockW;
    viewport.scrollTop  = blockH;
  }
  
  // — Auto-recenter al desplazar fuera de la copia central —
  function onScroll() {
    if (viewport.scrollLeft <  blockW * 0.5) viewport.scrollLeft += blockW;
    if (viewport.scrollLeft >  blockW * 1.5) viewport.scrollLeft -= blockW;
    if (viewport.scrollTop  <  blockH * 0.5) viewport.scrollTop  += blockH;
    if (viewport.scrollTop  >  blockH * 1.5) viewport.scrollTop  -= blockH;
  }
  
  // — Lazy-loading de imágenes con IntersectionObserver —
  function lazyLoad() {
    const imgs = document.querySelectorAll('img[data-src]');
    const obs = new IntersectionObserver((entries, observer) => {
      entries.forEach(ent => {
        if (ent.isIntersecting) {
          const img = ent.target;
          img.src = img.dataset.src;
          img.removeAttribute('data-src');
          observer.unobserve(img);
        }
      });
    }, {
      root: viewport,
      rootMargin: '200px'
    });
  
    imgs.forEach(img => obs.observe(img));
  }
  
  // — Previene el scroll con rueda, dejando solo drag —
  viewport.addEventListener('wheel', e => e.preventDefault(), { passive: false });
  
  // — Drag-to-pan: inicia el drag —
  viewport.addEventListener('mousedown', e => {
    isMouseDown = true;
    hasDragged  = false;
    startX      = e.clientX;
    startY      = e.clientY;
    scrollLeft  = viewport.scrollLeft;
    scrollTop   = viewport.scrollTop;
    viewport.classList.add('grabbing');
    
    // Prevenir selección durante el drag
    e.preventDefault();
    document.body.style.userSelect = 'none';
  });
  
  // — Drag-to-pan: mientras mueves el ratón —
  viewport.addEventListener('mousemove', e => {
    if (!isMouseDown) return;
  
    const dx = e.clientX - startX;
    const dy = e.clientY - startY;
  
    // Si superamos 5px, consideramos que es un drag real
    if (!hasDragged && (Math.abs(dx) > 5 || Math.abs(dy) > 5)) {
      hasDragged = true;
      viewport.classList.add('drag-active');
    }
  
    if (hasDragged) {
      viewport.scrollLeft = scrollLeft - dx;
      viewport.scrollTop  = scrollTop  - dy;
      onScroll();
    }
  });
  
  // — Termina el drag (mouseup o salir del área) —
  ['mouseup', 'mouseleave'].forEach(evt =>
    viewport.addEventListener(evt, () => {
      isMouseDown = false;
      viewport.classList.remove('grabbing', 'drag-active');
      
      // Restaurar selección
      document.body.style.userSelect = '';
    })
  );
  
  // — Previene la navegación si hubo drag —
  viewport.addEventListener('click', e => {
    if (hasDragged) {
      e.preventDefault();
      e.stopImmediatePropagation();
    }
  }, true);
  


  // — Inicialización al cargar el DOM —
  function init() {
    buildWorld();
    resetScroll();
    lazyLoad();
  
    // El scroll nativo sigue activo para el recenter automático
    viewport.addEventListener('scroll', onScroll);
  
    // Recalcula y centra al cambiar tamaño de ventana
    window.addEventListener('resize', resetScroll);
  }
  
  document.addEventListener('DOMContentLoaded', init);

  // — Funciones del Modal de Proyecto —
  function openModal(project) {
    const modal = document.getElementById('project-modal');
    const modalImage = document.getElementById('modal-image');
    const modalName = document.getElementById('modal-name');
    const modalYear = document.getElementById('modal-year');
    const modalDescription = document.getElementById('modal-description');

    // Llenar el modal con los datos del proyecto
    modalImage.src = project.imgSrc;
    modalImage.alt = project.title;
    modalName.textContent = project.title;
    modalYear.textContent = "Año: " + project.year;
    modalDescription.textContent = project.description;

    // Mostrar el modal
    modal.classList.add('active');
    document.body.style.overflow = 'hidden'; // Prevenir scroll del fondo
  }

  function closeModal() {
    const modal = document.getElementById('project-modal');
    modal.classList.remove('active');
    document.body.style.overflow = ''; // Restaurar scroll
  }

  // — Funciones del Modal About —
  function openAboutModal() {
    const modal = document.getElementById('about-modal');
    const projectsGrid = document.getElementById('about-projects-grid');
    
    // Limpiar el grid de proyectos
    projectsGrid.innerHTML = '';
    
    // Agregar todas las imágenes de los proyectos
    projects.forEach((project, index) => {
      const projectItem = document.createElement('div');
      projectItem.className = 'about-project-item';
      
      const img = document.createElement('img');
      img.src = project.imgSrc;
      img.alt = project.title;
      
      projectItem.appendChild(img);
      
      // Agregar event listener para abrir el modal del proyecto
      projectItem.addEventListener('click', () => {
        closeAboutModal();
        setTimeout(() => openModal(project), 300); // Pequeño delay para suavizar la transición
      });
      
      projectsGrid.appendChild(projectItem);
    });
    
    // Mostrar el modal
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  function closeAboutModal() {
    const modal = document.getElementById('about-modal');
    modal.classList.remove('active');
    document.body.style.overflow = '';
  }

  // — Funciones del Modal de Contacto —
  function openContactModal() {
    const modal = document.getElementById('contact-modal');
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  function closeContactModal() {
    const modal = document.getElementById('contact-modal');
    modal.classList.remove('active');
    document.body.style.overflow = '';
  }

  // Event listeners para cerrar los modales
  document.addEventListener('DOMContentLoaded', () => {
    const projectModal = document.getElementById('project-modal');
    const aboutModal = document.getElementById('about-modal');
    const contactModal = document.getElementById('contact-modal');
    const closeBtns = document.querySelectorAll('.close-btn');

    // Cerrar con los botones X
    closeBtns.forEach(btn => {
      btn.addEventListener('click', (e) => {
        if (e.target.closest('#project-modal')) {
          closeModal();
        } else if (e.target.closest('#about-modal')) {
          closeAboutModal();
        } else if (e.target.closest('#contact-modal')) {
          closeContactModal();
        }
      });
    });

    // Cerrar al hacer clic fuera del modal
    projectModal.addEventListener('click', (e) => {
      if (e.target === projectModal) {
        closeModal();
      }
    });

    aboutModal.addEventListener('click', (e) => {
      if (e.target === aboutModal) {
        closeAboutModal();
      }
    });

    contactModal.addEventListener('click', (e) => {
      if (e.target === contactModal) {
        closeContactModal();
      }
    });

    // Cerrar con la tecla Escape
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        if (projectModal.classList.contains('active')) {
          closeModal();
        } else if (aboutModal.classList.contains('active')) {
          closeAboutModal();
        } else if (contactModal.classList.contains('active')) {
          closeContactModal();
        }
      }
    });

    // Conectar los botones del menú
    const aboutBtn = document.querySelector('a[href="#about"]');
    if (aboutBtn) {
      aboutBtn.addEventListener('click', (e) => {
        e.preventDefault();
        openAboutModal();
      });
    }

    const contactBtn = document.querySelector('a[href="#contacto"]');
    if (contactBtn) {
      contactBtn.addEventListener('click', (e) => {
        e.preventDefault();
        openContactModal();
      });
    }
  });`
};