import React, { useRef, useEffect, useMemo } from "react";
import { Helmet } from "react-helmet-async";
import ProjectCard from "../components/ProjectCard";
import { useProjects } from "../contexts/ProjectsContext";
import "./Landing.css";
import useIsMobile from "../utils/UseIsMobile";

const COPIES = 3;
// Toggle desde la consola: window.__SCROLL_DEBUG__ = true
const dbg = (...args) => {
  if (typeof window !== "undefined" && window.__SCROLL_DEBUG__) {
    console.log("[scroll]", ...args);
  }
};

const repeat = (arr, n) => Array.from({ length: n }, () => arr).flat();

const Landing = () => {
  const leftColumnRef = useRef(null);
  const rightColumnRef = useRef(null);
  const suppressLeft = useRef(false);
  const suppressRight = useRef(false);
  const prevLeftTop = useRef(0);
  const prevRightTop = useRef(0);
  const isMobile = useIsMobile();
  const { projects } = useProjects();

  const webProjects = useMemo(() => repeat(projects.web, COPIES), [projects.web]);
  const gameProjects = useMemo(() => repeat(projects.games, COPIES), [projects.games]);
  const mobileProjects = useMemo(
    () => repeat([...projects.web, ...projects.games], COPIES),
    [projects.web, projects.games]
  );

  // Desktop: sync delta-based + silent modulo wrap
  useEffect(() => {
    if (isMobile) return;
    const left = leftColumnRef.current;
    const right = rightColumnRef.current;
    if (!left || !right) return;

    // copyH = clientHeight × (cards en una copia). Evita el redondeo de scrollHeight/COPIES.
    const copyHOf = (el) => el.clientHeight * (el.children.length / COPIES);

    // Mantiene scrollTop dentro de [copyH, 2*copyH)
    const wrapToMiddle = (top, copyH) => {
      const offset = top - copyH;
      const wrapped = ((offset % copyH) + copyH) % copyH;
      return copyH + wrapped;
    };

    // Centra en la copia del medio
    const initTimer = setTimeout(() => {
      const lch = copyHOf(left);
      const rch = copyHOf(right);
      suppressLeft.current = true;
      suppressRight.current = true;
      left.scrollTop = lch;
      right.scrollTop = rch;
      prevLeftTop.current = left.scrollTop;
      prevRightTop.current = right.scrollTop;
      dbg("init", { lch, rch, leftTop: left.scrollTop, rightTop: right.scrollTop });
    }, 50);

    const handle = (label, source, target, sourcePrev, targetPrev, suppressSource, suppressTarget) => {
      if (suppressSource.current) {
        suppressSource.current = false;
        sourcePrev.current = source.scrollTop;
        dbg(label, "echo consumed", { top: source.scrollTop });
        return;
      }

      const sourceCopyH = copyHOf(source);
      const targetCopyH = copyHOf(target);
      const newSourceTop = source.scrollTop;
      const delta = newSourceTop - sourcePrev.current;
      sourcePrev.current = newSourceTop;

      // Espejo del delta en el otro panel (cada uno con su propio wrap)
      const targetWanted = wrapToMiddle(target.scrollTop + delta, targetCopyH);
      const targetBefore = target.scrollTop;
      if (targetWanted !== target.scrollTop) {
        suppressTarget.current = true;
        target.scrollTop = targetWanted;
        targetPrev.current = targetWanted;
      }

      // Wrap silencioso del propio source si cruzó su frontera
      const sourceWanted = wrapToMiddle(newSourceTop, sourceCopyH);
      const sourceWrapped = sourceWanted !== newSourceTop;
      if (sourceWrapped) {
        suppressSource.current = true;
        source.scrollTop = sourceWanted;
        sourcePrev.current = sourceWanted;
      }

      dbg(label, {
        delta: delta.toFixed(2),
        srcTop: newSourceTop.toFixed(2),
        srcWrap: sourceWrapped ? `${newSourceTop.toFixed(1)}→${sourceWanted.toFixed(1)}` : "—",
        tgtBefore: targetBefore.toFixed(2),
        tgtAfter: targetWanted.toFixed(2),
        srcCopyH: sourceCopyH,
        tgtCopyH: targetCopyH,
      });
    };

    // rAF throttle: scroll events sólo marcan pending; la mirror corre 1x por frame.
    // Esto evita que cada wheel tick fuerce un reflow sincrónico que el navegador
    // compensa coalesciendo los siguientes eventos en uno con delta gigante.
    let pendingLeft = false;
    let pendingRight = false;
    let rafId = 0;

    const flush = () => {
      rafId = 0;
      if (pendingLeft) {
        pendingLeft = false;
        handle("L", left, right, prevLeftTop, prevRightTop, suppressLeft, suppressRight);
      }
      if (pendingRight) {
        pendingRight = false;
        handle("R", right, left, prevRightTop, prevLeftTop, suppressRight, suppressLeft);
      }
    };

    const scheduleFlush = () => {
      if (rafId === 0) rafId = requestAnimationFrame(flush);
    };

    const handleLeft = () => { pendingLeft = true; scheduleFlush(); };
    const handleRight = () => { pendingRight = true; scheduleFlush(); };

    left.addEventListener("scroll", handleLeft, { passive: true });
    right.addEventListener("scroll", handleRight, { passive: true });

    return () => {
      clearTimeout(initTimer);
      if (rafId !== 0) cancelAnimationFrame(rafId);
      left.removeEventListener("scroll", handleLeft);
      right.removeEventListener("scroll", handleRight);
    };
  }, [isMobile]);

  // Mobile: silent modulo wrap on a single column
  useEffect(() => {
    if (!isMobile) return;
    const container = document.getElementById("mobile-scroll-container");
    if (!container) return;

    const copyHOf = (el) => el.clientHeight * (el.children.length / COPIES);

    const initTimer = setTimeout(() => {
      container.scrollTop = copyHOf(container);
    }, 50);

    let rafId = 0;
    const flush = () => {
      rafId = 0;
      const copyH = copyHOf(container);
      if (container.scrollTop >= 2 * copyH) {
        dbg("M wrap down", { from: container.scrollTop, to: container.scrollTop - copyH });
        container.scrollTop -= copyH;
      } else if (container.scrollTop < copyH) {
        dbg("M wrap up", { from: container.scrollTop, to: container.scrollTop + copyH });
        container.scrollTop += copyH;
      }
    };
    const handleScroll = () => {
      if (rafId === 0) rafId = requestAnimationFrame(flush);
    };

    container.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      clearTimeout(initTimer);
      if (rafId !== 0) cancelAnimationFrame(rafId);
      container.removeEventListener("scroll", handleScroll);
    };
  }, [isMobile]);

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
          {mobileProjects.map((project, index) => (
            <ProjectCard
              key={`mobile-${index}`}
              data={project}
              aria-label={`Proyecto: ${project.title}`}
              translate="no"
            />
          ))}
        </div>
      ) : (
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
            {webProjects.map((project, index) => (
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
            {gameProjects.map((project, index) => (
              <ProjectCard 
                key={`game-${index}`} 
                data={project}
                aria-label={`Proyecto de videojuego: ${project.title}`}
              />
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default Landing;