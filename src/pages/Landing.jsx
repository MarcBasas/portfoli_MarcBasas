import React, { useRef, useState, useEffect } from "react";
import { Helmet } from "react-helmet-async";
import ProjectCard from "../components/ProjectCard";
import { useProjects } from "../contexts/ProjectsContext";
import "./Landing.css";
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ScrollSmoother } from 'gsap/ScrollSmoother';
import useIsMobile from "../utils/UseIsMobile";

gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

/**
 * Componente Landing que muestra los proyectos en dos columnas con scroll infinito
 * @component
 * @description Muestra proyectos web y de videojuegos en dos columnas con scroll infinito
 * @returns {JSX.Element} El componente Landing renderizado
 */
const Landing = () => {
  const leftColumnRef = useRef(null);
  const rightColumnRef = useRef(null);
  const smootherRef = useRef(null);
  const syncingA = useRef(false);
  const syncingB = useRef(false);
  const isMobile = useIsMobile();
  const { projects } = useProjects();

  const initialWebProjects = [...projects.web, ...projects.web]; 
  const initialGameProjects = [...projects.games, ...projects.games];

  // Para móvil: lista combinada de proyectos (web primero, luego juegos)
  const initialMobileProjects = [...projects.web, ...projects.games, ...projects.web, ...projects.games];
  const [visibleMobileProjects, setVisibleMobileProjects] = useState(initialMobileProjects);

  const [visibleWebProjects, setVisibleWebProjects] = useState(initialWebProjects);
  const [visibleGameProjects, setVisibleGameProjects] = useState(initialGameProjects);

  // Actualizar proyectos visibles cuando cambien los datos
  useEffect(() => {
    // Pausar ScrollSmoother temporalmente durante la actualización de proyectos
    if (smootherRef.current && !isMobile) {
      try {
        smootherRef.current.paused(true);
      } catch (error) {
        console.warn('Error pausing ScrollSmoother:', error);
      }
    }

    const newWebProjects = [...projects.web, ...projects.web];
    const newGameProjects = [...projects.games, ...projects.games];
    const newMobileProjects = [...projects.web, ...projects.games, ...projects.web, ...projects.games];
    
    setVisibleWebProjects(newWebProjects);
    setVisibleGameProjects(newGameProjects);
    setVisibleMobileProjects(newMobileProjects);

    // Reactivar ScrollSmoother después de un pequeño delay
    if (smootherRef.current && !isMobile) {
      setTimeout(() => {
        try {
          if (smootherRef.current) {
            smootherRef.current.paused(false);
          }
        } catch (error) {
          console.warn('Error resuming ScrollSmoother:', error);
        }
      }, 100);
    }
  }, [projects, isMobile]);

  useEffect(() => {
    if (isMobile) return; // No inicializar GSAP ni sincronización en móvil
    
    // Delay para asegurar que el DOM esté completamente renderizado
    const initTimer = setTimeout(() => {
      // GSAP ScrollSmoother
      if (!smootherRef.current) {
        try {
          // Verificar que los elementos existen antes de crear ScrollSmoother
          const wrapper = document.getElementById('smooth-wrapper-landing');
          const content = document.getElementById('smooth-content-landing');
          
          if (wrapper && content) {
            smootherRef.current = ScrollSmoother.create({
              content: '#smooth-content-landing',
              smooth: 1.2,
              normalizeScroll: true
            });
            // Hacer disponible globalmente para ScrollToTop
            window.ScrollSmoother = ScrollSmoother;
          }
        } catch (error) {
          console.warn('Error creating ScrollSmoother:', error);
        }
      }

      // Sincronización de scroll
      const panelA = leftColumnRef.current;
      const panelB = rightColumnRef.current;

      if (panelA && panelB) {
        const sync = (source, target, flagSource, flagTarget) => {
          if (!flagSource.current && source && target) {
            flagTarget.current = true;
            const pct = source.scrollTop / (source.scrollHeight - source.clientHeight);
            target.scrollTop = pct * (target.scrollHeight - target.clientHeight);
            flagTarget.current = false;
          }
        };

        const handleScrollA = () => sync(panelA, panelB, syncingA, syncingB);
        const handleScrollB = () => sync(panelB, panelA, syncingB, syncingA);

        panelA.addEventListener('scroll', handleScrollA, { passive: true });
        panelB.addEventListener('scroll', handleScrollB, { passive: true });

        // Cleanup function
        return () => {
          if (panelA) panelA.removeEventListener('scroll', handleScrollA);
          if (panelB) panelB.removeEventListener('scroll', handleScrollB);
        };
      }
    }, 100);

    return () => {
      clearTimeout(initTimer);
      if (smootherRef.current) {
        try {
          smootherRef.current.kill();
          smootherRef.current = null;
        } catch (error) {
          console.warn('Error killing ScrollSmoother:', error);
        }
      }
    };
  }, [isMobile]);

  useEffect(() => {
    if (isMobile) return; // No listeners de columnas en móvil
    const left = leftColumnRef.current;
    const right = rightColumnRef.current;

    const handleLeftScroll = (e) => {
      // Carga infinita
      const { scrollTop, scrollHeight, clientHeight } = e.target;
      if (scrollTop + clientHeight >= scrollHeight * 0.7) {
        setVisibleWebProjects((prev) => [...prev, ...projects.web]);
      }
    };

    const handleRightScroll = (e) => {
      // Carga infinita
      const { scrollTop, scrollHeight, clientHeight } = e.target;
      if (scrollTop + clientHeight >= scrollHeight * 0.7) {
        setVisibleGameProjects((prev) => [...prev, ...projects.games]);
      }
    };

    if (left) left.addEventListener("scroll", handleLeftScroll, { passive: true });
    if (right) right.addEventListener("scroll", handleRightScroll, { passive: true });

    return () => {
      if (left) left.removeEventListener("scroll", handleLeftScroll);
      if (right) right.removeEventListener("scroll", handleRightScroll);
    };
  }, [projects, isMobile]);

  // Scroll infinito para móvil
  useEffect(() => {
    if (!isMobile) return;
    const handleScroll = (e) => {
      const { scrollTop, scrollHeight, clientHeight } = e.target;
      if (scrollTop + clientHeight >= scrollHeight * 0.7) {
        setVisibleMobileProjects((prev) => [
          ...prev,
          ...projects.web,
          ...projects.games
        ]);
      }
    };
    const container = document.getElementById("mobile-scroll-container");
    if (container) container.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      if (container) container.removeEventListener("scroll", handleScroll);
    };
  }, [isMobile, setVisibleMobileProjects]);

  return (
    <>
      <Helmet>
        {/* Título, descripción, autor*/}
        <title>Marc Basas - Web Developer & Game Developer Barcelona | Portfolio Frontend & Fullstack</title>
        <meta name="description" content="Portfolio de Marc Basas, programador web autónomo en Barcelona. Especializado en desarrollo frontend y fullstack, servicios de programación web para empresas y proyectos personalizados. Descubre mis proyectos de desarrollo web y aplicaciones interactivas." />
        <meta name="keywords" content="programador autonomo, programador web autonomo, programador barcelona, portfolio programador, desarrollo web barcelona, programador freelance barcelona, servicios programacion web, frontend barcelona, fullstack barcelona, proyectos web barcelona, Marc Basas, desarrollador independiente" />
        <meta name="author" content="Marc Basas" />

        {/* Open Graph*/}
        <meta property="og:title" content="Marc Basas - Programador Web Autónomo Barcelona | Portfolio" />
        <meta property="og:description" content="Portfolio de programador web autónomo en Barcelona. Proyectos de desarrollo frontend y fullstack, aplicaciones web interactivas y servicios de programación para empresas." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.marcbasas.com" />
        <meta property="og:site_name" content="Marc Basas - Programador Web Autónomo Barcelona" />
        <meta property="og:locale" content="es_ES" />

        {/* Twitter*/}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Marc Basas - Programador Web Autónomo Barcelona" />
        <meta name="twitter:description" content="Portfolio de programador web autónomo en Barcelona. Servicios de desarrollo frontend y fullstack para empresas y proyectos personalizados." />
        <meta name="twitter:url" content="https://www.marcbasas.com" />

        {/* Canonical*/}
        <link rel="canonical" href="https://www.marcbasas.com/" />
      </Helmet>

      {isMobile ? (
        <div
          id="mobile-scroll-container"
          className="mobile-landing-container"
          role="main"
          aria-label="Lista de proyectos"
        >
          {visibleMobileProjects.map((project, index) => (
            <ProjectCard
              key={`mobile-${index}`}
              data={project}
              aria-label={`Proyecto: ${project.title}`}
              translate="no"
            />
          ))}
        </div>
      ) : (
        <div id="smooth-wrapper-landing">
          <div id="smooth-content-landing">
            <div 
              className="landing-container"
              role="main"
              aria-label="Lista de proyectos"
            >
              <div
                className="column left-column"
                ref={leftColumnRef}
                role="region"
                aria-label="Proyectos web"
              >
                {visibleWebProjects.map((project, index) => (
                  <ProjectCard 
                    key={`web-${index}`} 
                    data={project}
                    aria-label={`Proyecto web: ${project.title}`}
                  />
                ))}
              </div>

              <div
                className="column right-column"
                ref={rightColumnRef}
                role="region"
                aria-label="Proyectos de videojuegos"
              >
                {visibleGameProjects.map((project, index) => (
                  <ProjectCard 
                    key={`game-${index}`} 
                    data={project}
                    aria-label={`Proyecto de videojuego: ${project.title}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Landing;