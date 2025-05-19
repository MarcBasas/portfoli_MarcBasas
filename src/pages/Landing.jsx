import React, { useRef, useState, useEffect } from "react";
import { Helmet } from "react-helmet-async";
import ProjectCard from "../components/ProjectCard";
import { projects } from "../data/projects";
import "./Landing.css";
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ScrollSmoother } from 'gsap/ScrollSmoother';

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

  const initialWebProjects = [...projects.web, ...projects.web]; 
  const initialGameProjects = [...projects.games, ...projects.games];

  const [visibleWebProjects, setVisibleWebProjects] = useState(initialWebProjects);
  const [visibleGameProjects, setVisibleGameProjects] = useState(initialGameProjects);

  useEffect(() => {
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
  }, []);

  useEffect(() => {
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
  }, [leftColumnRef, rightColumnRef, setVisibleWebProjects, setVisibleGameProjects]);

  return (
    <>
      <Helmet>
        <title>Inicio | Portfolio de Marco</title>
        <meta name="description" content="Bienvenido al portfolio de Marco. Descubre proyectos web y videojuegos interactivos." />
        <meta name="keywords" content="portfolio, desarrollo web, videojuegos, proyectos, Marco" />
        <meta property="og:title" content="Portfolio de Marco - Desarrollo Web y Videojuegos" />
        <meta property="og:description" content="Explora mis proyectos de desarrollo web y videojuegos interactivos." />
        <meta property="og:type" content="website" />
      </Helmet>

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
    </>
  );
};

export default Landing;