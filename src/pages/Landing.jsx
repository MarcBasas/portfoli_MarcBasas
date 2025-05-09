import React, { useRef, useState, useEffect } from "react";
import { Helmet } from "react-helmet-async";
import ProjectCard from "../components/ProjectCard";
import { projects } from "../data/projects";
import "./Landing.css";


let isSyncingLeft = false;
let isSyncingRight = false;

/**
 * Componente Landing que muestra los proyectos en dos columnas con scroll sincronizado
 * @component
 * @description Muestra proyectos web y de videojuegos en dos columnas con scroll infinito y sincronizado
 * @returns {JSX.Element} El componente Landing renderizado
 */
const Landing = () => {
  const leftColumnRef = useRef(null);
  const rightColumnRef = useRef(null);

  const initialWebProjects = [...projects.web, ...projects.web]; 
  const initialGameProjects = [...projects.games, ...projects.games];

  const [visibleWebProjects, setVisibleWebProjects] = useState(initialWebProjects);
  const [visibleGameProjects, setVisibleGameProjects] = useState(initialGameProjects);

  useEffect(() => {
    const left = leftColumnRef.current;
    const right = rightColumnRef.current;

    const handleLeftScroll = (e) => {
      if (isSyncingLeft) {
        isSyncingLeft = false;
        return;
      }
      isSyncingRight = true;
      requestAnimationFrame(() => {
        if (right && right.scrollTop !== e.target.scrollTop) {
          right.scrollTop = e.target.scrollTop;
        }
      });
      // Carga infinita
      const { scrollTop, scrollHeight, clientHeight } = e.target;
      if (scrollTop + clientHeight >= scrollHeight * 0.7) {
        setVisibleWebProjects((prev) => [...prev, ...projects.web]);
      }
    };

    const handleRightScroll = (e) => {
      if (isSyncingRight) {
        isSyncingRight = false;
        return;
      }
      isSyncingLeft = true;
      requestAnimationFrame(() => {
        if (left && left.scrollTop !== e.target.scrollTop) {
          left.scrollTop = e.target.scrollTop;
        }
      });
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
    </>
  );
};

export default Landing;