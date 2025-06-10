export const portfolioDemo = {
    html: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Portfolio Demo</title>
</head>
<body>
    <div class="container">
        <!-- Menú superior (visible en móvil) -->
        <nav class="top-menu">
            <ul class="main-menu">
                <li>SILAS LUMEN</li>
                <li class="active" data-section="work">WORK</li>
                <li data-section="information">INFORMATION</li>
            </ul>
        </nav>

        <!-- Menú izquierdo (visible en desktop) -->
        <nav class="left-menu">
            <ul class="main-menu">
                <li>SILAS LUMEN</li>
                <li class="active" data-section="work">WORK</li>
                <li data-section="information">INFORMATION</li>
            </ul>

            <!-- Lista de trabajos -->
            <div class="work-list">
                <div class="work-item active" data-work="1">
                    <div class="work-header-info">
                        <h3>BANGKOK</h3>
                        <span class="year">2022</span>
                    </div>
                </div>
                <div class="work-item" data-work="2">
                    <div class="work-header-info">
                        <h3>AZORES</h3>
                        <span class="year">2023</span>
                    </div>
                </div>
                <div class="work-item" data-work="3">
                    <div class="work-header-info">
                        <h3>NORWAY</h3>
                        <span class="year">2024</span>
                    </div>
                </div>
            </div>
        </nav>

        <!-- Contenido derecho -->
        <main class="right-content">
            <!-- Sección de trabajo -->
            <div class="section-content" id="work-section">
                <!-- Grid de proyectos (visible en móvil) -->
                <div class="mobile-projects-grid">
                    <div class="mobile-project" data-work="1">
                        <h3>BANGKOK</h3>
                        <span class="year">2022</span>
                        <img src="https://images.unsplash.com/photo-1737985589623-5f5a8ca121c1?q=80&w=2668&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Bangkok">
                    </div>
                    <div class="mobile-project" data-work="2">
                        <h3>AZORES</h3>
                        <span class="year">2023</span>
                        <img src="https://images.unsplash.com/photo-1715341762953-d56eccc07e45?q=80&w=2665&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Azores">
                    </div>
                    <div class="mobile-project" data-work="3">
                        <h3>NORWAY</h3>
                        <span class="year">2024</span>
                        <img src="https://images.unsplash.com/photo-1743341722429-7d93ffa5b1cd?q=80&w=1454&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Norway">
                    </div>
                </div>

                <!-- Detalles de proyectos -->
                <div class="project-details">
                    <div class="work-content" id="work-1">
                        <header class="work-header">
                            <div>
                                <h2>BANGKOK</h2>
                                <span class="image-counter">Image 1 of 3</span>
                            </div>
                            <button class="details-toggle desktop-only">DETAILS</button>
                        </header>

                        <div class="details-panel">
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae justo in nunc aliquam tincidunt. 
                            Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae.</p>
                            <p>Location: Yaowarat-Bangkok, Thailand<br>
                            Year: 2022</p>
                        </div>

                        <div class="carousel">
                            <img src="https://images.unsplash.com/photo-1737985589623-5f5a8ca121c1?q=80&w=2668&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Bangkok Image 1" class="carousel-image">
                            <img src="https://images.unsplash.com/photo-1737958448097-344fecc3187b?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Bangkok Image 2" class="carousel-image hidden">
                            <img src="https://images.unsplash.com/photo-1737958108322-43b24ea9bc18?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Bangkok Image 3" class="carousel-image hidden">
                        </div>

                        <div class="project-navigation">
                            <span class="prev-project">PREV PROJECT</span>
                            <span class="next-project">NEXT PROJECT</span>
                        </div>
                    </div>

                    <div class="work-content hidden" id="work-2">
                        <header class="work-header">
                            <div>
                                <h2>AZORES</h2>
                                <span class="image-counter">Image 1 of 3</span>
                            </div>
                            <button class="details-toggle desktop-only">DETAILS</button>
                        </header>

                        <div class="details-panel">
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas euismod magna eu lectus ultrices, 
                            at varius nisi dignissim. Nullam vehicula nisi vitae lectus ultricies consectetur.</p>
                            <p>Location: Azores, Portugal<br>
                            Year: 2023</p>
                        </div>

                        <div class="carousel">
                            <img src="https://images.unsplash.com/photo-1715341762953-d56eccc07e45?q=80&w=2665&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Azores Image 1" class="carousel-image">
                            <img src="https://images.unsplash.com/photo-1715341762948-a3b3fdd9b352?q=80&w=2665&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Azores Image 2" class="carousel-image hidden">
                            <img src="https://images.unsplash.com/photo-1712059201904-45cce6a36060?q=80&w=2665&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Azores Image 3" class="carousel-image hidden">
                        </div>

                        <div class="project-navigation">
                            <span class="prev-project">PREV PROJECT</span>
                            <span class="next-project">NEXT PROJECT</span>
                        </div>
                    </div>

                    <div class="work-content hidden" id="work-3">
                        <header class="work-header">
                            <div>
                                <h2>NORWAY</h2>
                                <span class="image-counter">Image 1 of 3</span>
                            </div>
                            <button class="details-toggle desktop-only">DETAILS</button>
                        </header>

                        <div class="details-panel">
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas euismod magna eu lectus ultrices, 
                            at varius nisi dignissim. Nullam vehicula nisi vitae lectus ultricies consectetur.</p>
                            <p>Location: Tromsø, Norway<br>
                            Year: 2024</p>
                        </div>

                        <div class="carousel">
                            <img src="https://images.unsplash.com/photo-1743341722429-7d93ffa5b1cd?q=80&w=1454&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Norway Image 1" class="carousel-image">
                            <img src="https://images.unsplash.com/photo-1743341722729-637084048570?q=80&w=1454&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Norway Image 2" class="carousel-image hidden">
                            <img src="https://images.unsplash.com/photo-1743341720492-ebbf33a967b5?q=80&w=1454&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Norway Image 3" class="carousel-image hidden">
                        </div>

                        <div class="project-navigation">
                            <span class="prev-project">PREV PROJECT</span>
                            <span class="next-project">NEXT PROJECT</span>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Sección de información -->
            <div class="section-content hidden" id="information-section">
                <div class="information-content">
                    <img src="https://images.unsplash.com/photo-1620304910158-5c9fd396eb6f?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Information Image" class="information-image">
                    <div class="information-text">
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae justo in nunc aliquam tincidunt. 
                        Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae.</p>
                        <p>Nullam vehicula nisi vitae lectus ultricies consectetur. Maecenas euismod magna eu lectus ultrices, 
                        at varius nisi dignissim.</p>
                    </div>
                </div>
            </div>
        </main>
    </div>
</body>
</html>`,
    css: `* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Arial, sans-serif;
}

body {
    background-color: #FFFFFF;
    color: #000000;
}

.container {
    display: flex;
    min-height: 100vh;
    position: relative;
    overflow-x: hidden;
}

/* Menú superior (móvil) */
.top-menu {
    display: none;
    width: 100%;
    padding: 10px;
    position: fixed;
    top: 0;
    left: 0;
    background: white;
    z-index: 1000;
    border-bottom: 1px solid #EEEEEE;
}

.top-menu .main-menu {
    display: flex;
    justify-content: space-between;
    list-style: none;
    margin: 0;
    padding: 0;
}

.top-menu .main-menu li {
    flex: 1;
    text-align: center;
    padding: 8px 5px;
    cursor: pointer;
    transition: background-color 0.3s ease;
    font-size: 12px;
}

.top-menu .main-menu li.active {
    background-color: #F16704;
    color: white;
    padding: 8px 2px;
}

/* Grid de proyectos móvil */
.mobile-projects-grid {
    display: none;
    width: 100%;
    padding: 20px;
    margin-top: 80px;
}

.mobile-project {
    position: relative;
    margin-bottom: 30px;
    cursor: pointer;
    background: white;
    border-radius: 8px;
    overflow: hidden;
    box-shadow: 0 2px 4px rgba(0,0,0,0.1);
}

.mobile-project h3 {
    position: absolute;
    top: 20px;
    left: 20px;
    color: white;
    font-size: 16px;
    font-weight: normal;
    z-index: 2;
    margin: 0;
}

.mobile-project .year {
    position: absolute;
    top: 20px;
    right: 20px;
    color: white;
    font-size: 14px;
    z-index: 2;
}

.mobile-project img {
    width: 100%;
    height: 300px;
    object-fit: cover;
    display: block;
    transition: transform 0.3s ease;
}

.mobile-project:hover img {
    transform: scale(1.05);
}

/* Menú izquierdo (desktop) */
.left-menu {
    width: 300px;
    padding: 20px;
    border-right: 1px solid #EEEEEE;
}

.main-menu {
    list-style: none;
    margin-bottom: 40px;
}

.main-menu li {
    padding: 6px 10px;
    cursor: pointer;
    transition: background-color 0.3s ease;
}

.main-menu li.active {
    background-color: #F16704;
    color: white;
}

/* Lista de trabajos */
.work-list {
    margin-top: 40px;
}

.work-item {
    margin-bottom: 10px;
    cursor: pointer;
    padding: 6px 10px;
    transition: background-color 0.3s ease;
}

.work-header-info {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.work-item h3 {
    font-size: 14px;
    font-weight: normal;
    margin: 0;
}

.work-item .year {
    font-size: 12px;
    color: #666666;
}

.work-item.active {
    background-color: #F16704;
}

.work-item.active h3,
.work-item.active .year {
    color: white;
}

/* Contenido derecho */
.right-content {
    flex: 1;
    padding: 20px;
    position: relative;
}

.work-content {
    width: 100%;
}

.work-header {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    margin-bottom: 20px;
}

.work-header h2 {
    font-size: 16px;
    font-weight: normal;
    margin-bottom: 5px;
}

.image-counter {
    font-size: 12px;
    color: #666666;
    display: block;
}

.details-toggle {
    background: none;
    border: none;
    cursor: pointer;
    font-size: 14px;
    color: #666666;
    transition: color 0.3s ease;
}

.details-toggle:hover {
    color: #F16704;
}

.details-panel {
    max-height: 0;
    overflow: hidden;
    transition: max-height 0.3s ease;
    margin-bottom: 20px;
    background-color: white;
    padding: 0 20px;
}

.details-panel.active {
    max-height: 500px;
    padding: 20px;
}

.details-panel p {
    margin-bottom: 15px;
    font-size: 14px;
    line-height: 1.5;
}

/* Carrusel */
.carousel {
    width: 100%;
    position: relative;
    cursor: pointer;
}

.carousel-image {
    width: 100%;
    height: auto;
    display: block;
    transition: opacity 0.3s ease;
}

/* Navegación entre proyectos */
.project-navigation {
    display: none;
    justify-content: space-between;
    padding: 20px 0;
    font-size: 14px;
}

.prev-project,
.next-project {
    cursor: pointer;
    color: #666666;
}

.hidden {
    display: none;
}

/* Sección de información */
.information-content {
    padding: 20px;
}

.information-image {
    width: 100%;
    height: auto;
    margin-bottom: 30px;
}

.information-text {
    max-width: 800px;
    margin: 0 auto;
}

.information-text p {
    margin-bottom: 20px;
    font-size: 16px;
    line-height: 1.6;
}

/* Detalles de proyectos */
.project-details {
    display: block;
}

/* Media Queries para móvil */
@media (max-width: 768px) {
    .container {
        flex-direction: column;
        height: 100vh;
        overflow: hidden;
    }

    .left-menu,
    .desktop-only {
        display: none;
    }

    .top-menu {
        display: block;
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        z-index: 1000;
        padding: 10px;
    }

    .mobile-projects-grid {
        display: block;
        margin-top: 50px;
        padding: 20px;
        height: calc(100vh - 50px);
        overflow-y: auto;
    }

    .right-content {
        padding: 0;
        height: 100vh;
        overflow: hidden;
    }

    .project-details {
        display: none;
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: white;
        z-index: 900;
        padding: 0;
        overflow-y: auto;
    }

    .work-content {
        padding-top: 50px;
    }

    .work-header {
        position: fixed;
        top: 50px;
        left: 0;
        width: 100%;
        padding: 10px 20px;
        background: white;
        margin: 0;
        border-bottom: 1px solid #EEEEEE;
        z-index: 950;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    .work-header h2 {
        font-size: 14px;
        margin: 0;
        text-align: right;
    }

    .work-header .image-counter {
        display: none;
    }

    .work-header .details-toggle {
        font-size: 12px;
        padding: 5px 10px;
        display: block;
        text-align: left;
    }

    .carousel {
        margin-top: 90px;
        width: 100%;
        transition: transform 0.3s ease;
    }

    .details-panel {
        display: block;
        position: fixed;
        top: 90px;
        left: 0;
        width: 100%;
        padding: 0 20px;
        background: white;
        z-index: 950;
        max-height: 0;
        overflow: hidden;
        transition: max-height 0.3s ease;
    }

    .details-panel.active {
        max-height: 500px;
        padding: 20px;
    }

    .details-panel.active + .carousel {
        transform: translateY(100%);
    }

    .project-navigation {
        display: flex;
        position: fixed;
        bottom: 0;
        left: 0;
        width: 100%;
        padding: 20px;
        background: white;
        border-top: 1px solid #EEEEEE;
        z-index: 950;
    }

    .information-content {
        padding: 70px 20px 20px;
    }
}`,
    js: `// Manejo de secciones
document.querySelectorAll('.main-menu li[data-section]').forEach(item => {
    item.addEventListener('click', () => {
        // Actualizar estado activo en el menú
        document.querySelectorAll('.main-menu li').forEach(i => i.classList.remove('active'));
        item.classList.add('active');

        // Mostrar la sección correspondiente
        const sectionId = item.dataset.section;
        document.querySelectorAll('.section-content').forEach(content => {
            content.classList.add('hidden');
        });
        document.getElementById(\`\${sectionId}-section\`).classList.remove('hidden');

        // Mostrar/ocultar la lista de trabajos
        const workList = document.querySelector('.work-list');
        if (sectionId === 'work') {
            workList.style.display = 'block';
        } else {
            workList.style.display = 'none';
        }
    });
});

// Manejo de trabajos
document.querySelectorAll('.work-item').forEach(item => {
    item.addEventListener('click', () => {
        // Actualizar estado activo en la lista
        document.querySelectorAll('.work-item').forEach(i => i.classList.remove('active'));
        item.classList.add('active');

        // Mostrar el contenido correspondiente
        const workId = item.dataset.work;
        document.querySelectorAll('.work-content').forEach(content => {
            content.classList.add('hidden');
        });
        document.getElementById(\`work-\${workId}\`).classList.remove('hidden');
    });
});

// Manejo de paneles de detalles
document.querySelectorAll('.details-toggle').forEach(toggle => {
    toggle.addEventListener('click', (e) => {
        const panel = e.target.closest('.work-content').querySelector('.details-panel');
        panel.classList.toggle('active');
    });
});

// Manejo de carruseles
document.querySelectorAll('.carousel').forEach(carousel => {
    let currentIndex = 0;
    const images = carousel.querySelectorAll('.carousel-image');
    const counter = carousel.parentElement.querySelector('.image-counter');

    const updateCounter = () => {
        counter.textContent = \`Image \${currentIndex + 1} of \${images.length}\`;
    };

    carousel.addEventListener('click', () => {
        images[currentIndex].classList.add('hidden');
        currentIndex = (currentIndex + 1) % images.length;
        images[currentIndex].classList.remove('hidden');
        updateCounter();
    });
});

// Navegación entre proyectos
document.querySelectorAll('.prev-project').forEach(prev => {
    prev.addEventListener('click', () => {
        const currentWork = document.querySelector('.work-content:not(.hidden)');
        const currentId = parseInt(currentWork.id.split('-')[1]);
        const prevId = currentId > 1 ? currentId - 1 : document.querySelectorAll('.work-content').length;
        
        currentWork.classList.add('hidden');
        document.getElementById(\`work-\${prevId}\`).classList.remove('hidden');
        
        // Actualizar trabajo activo en la lista
        document.querySelectorAll('.work-item').forEach(item => {
            item.classList.remove('active');
            if (item.dataset.work == prevId) {
                item.classList.add('active');
            }
        });
    });
});

document.querySelectorAll('.next-project').forEach(next => {
    next.addEventListener('click', () => {
        const currentWork = document.querySelector('.work-content:not(.hidden)');
        const currentId = parseInt(currentWork.id.split('-')[1]);
        const nextId = currentId < document.querySelectorAll('.work-content').length ? currentId + 1 : 1;
        
        currentWork.classList.add('hidden');
        document.getElementById(\`work-\${nextId}\`).classList.remove('hidden');
        
        // Actualizar trabajo activo en la lista
        document.querySelectorAll('.work-item').forEach(item => {
            item.classList.remove('active');
            if (item.dataset.work == nextId) {
                item.classList.add('active');
            }
        });
    });
});

// Manejo de clicks en proyectos móviles
document.querySelectorAll('.mobile-project').forEach(project => {
    project.addEventListener('click', () => {
        const workId = project.dataset.work;
        
        // Ocultar el grid de proyectos
        document.querySelector('.mobile-projects-grid').style.display = 'none';
        
        // Mostrar los detalles del proyecto
        document.querySelector('.project-details').style.display = 'block';
        
        // Mostrar el contenido del proyecto
        document.querySelectorAll('.work-content').forEach(content => {
            content.classList.add('hidden');
        });
        const selectedWork = document.getElementById(\`work-\${workId}\`);
        selectedWork.classList.remove('hidden');
        
        // Añadir botón de retorno
        if (!document.querySelector('.back-to-projects')) {
            const backButton = document.createElement('button');
            backButton.className = 'back-to-projects';
            backButton.innerHTML = 'PROJECTS';
            backButton.style.cssText = 'position: fixed; top: 60px; left: 20px; z-index: 1000; background: white; border: none; padding: 10px; cursor: pointer; font-size: 14px;';
            document.body.appendChild(backButton);
            
            backButton.addEventListener('click', () => {
                // Ocultar los detalles del proyecto
                document.querySelector('.project-details').style.display = 'none';
                // Mostrar el grid de proyectos
                document.querySelector('.mobile-projects-grid').style.display = 'block';
                // Eliminar el botón de retorno
                backButton.remove();
            });
        }
    });
});`
}; 