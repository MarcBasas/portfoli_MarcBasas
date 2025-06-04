import React, { useRef, useState, useEffect } from "react";
import { Helmet } from "react-helmet-async";
import ProjectCard from "../components/ProjectCard";
import { projects } from "../data/projects";
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

  const initialWebProjects = [...projects.web, ...projects.web]; 
  const initialGameProjects = [...projects.games, ...projects.games];

  // Para móvil: lista combinada de proyectos (web primero, luego juegos)
  const initialMobileProjects = [...projects.web, ...projects.games, ...projects.web, ...projects.games];
  const [visibleMobileProjects, setVisibleMobileProjects] = useState(initialMobileProjects);

  const [visibleWebProjects, setVisibleWebProjects] = useState(initialWebProjects);
  const [visibleGameProjects, setVisibleGameProjects] = useState(initialGameProjects);

  useEffect(() => {
    if (isMobile) return; // No inicializar GSAP ni sincronización en móvil
    // GSAP ScrollSmoother
    if (!smootherRef.current) {
      smootherRef.current = ScrollSmoother.create({
        content: '#smooth-content-landing',
        smooth: 1.2
      });
    }

    // Sincronización de scroll
    const panelA = leftColumnRef.current;
    const panelB = rightColumnRef.current;

    const sync = (source, target, flagSource, flagTarget) => {
      if (!flagSource.current) {
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

    return () => {
      if (smootherRef.current) {
        smootherRef.current.kill();
        smootherRef.current = null;
      }
      panelA.removeEventListener('scroll', handleScrollA);
      panelB.removeEventListener('scroll', handleScrollB);
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
  }, [leftColumnRef, rightColumnRef, setVisibleWebProjects, setVisibleGameProjects, isMobile]);

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
        <title>Inicio | Portfolio de Marc Basas</title>
        <meta name="description" content="Bienvenido al portfolio de Marc Basas. Proyectos web y videojuegos interactivos." />
        <meta name="keywords" content="portfolio, desarrollo web, videojuegos, proyectos, Marc Basas, REACT, FrontEnd, Web Developer" />
        <meta property="og:title" content="Portfolio de Marc Basas - Desarrollo Web y Videojuegos" />
        <meta property="og:description" content="Explora mis proyectos de desarrollo web y videojuegos interactivos." />
        <meta property="og:type" content="website" />
      </Helmet>

      {isMobile ? (
        <div
          id="mobile-scroll-container"
          className="mobile-landing-container"
          style={{ height: "100vh", overflowY: "auto", width: "100vw" }}
          role="main"
          aria-label="Lista de proyectos"
        >
          {visibleMobileProjects.map((project, index) => (
            <ProjectCard
              key={`mobile-${index}`}
              data={project}
              aria-label={`Proyecto: ${project.title}`}
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