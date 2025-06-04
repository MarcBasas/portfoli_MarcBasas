import React, { lazy, Suspense, useMemo } from "react";
import { useParams } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import PropTypes from "prop-types";

import { projects } from "../data/projects";
import LiveEditor from "../components/LiveEditor";
import GameFrame from "../components/GameFrame";
import VideoPlayer from "../components/projectComponents/VideoPlayer";
import "./ProjectPage.css";
import NotFoundPage from "./NotFoundPage";
import useIsMobile from "../utils/UseIsMobile";
import ExternalLinkIcon from "../components/ExternalLinkIcon";

const componentModules = import.meta.glob("../components/projectComponents/*.{jsx,js}");

const LoadingFallback = () => (
  <div className="loading-fallback">Cargando componente…</div>
);

const ProjectLink = ({ url }) => (
  <a
    href={url}
    target="_blank"
    rel="noopener noreferrer"
    className="project-link"
  >
    Visit <ExternalLinkIcon style={{ marginLeft: 4, verticalAlign: 'middle' }} />
  </a>
);

ProjectLink.propTypes = {
  url: PropTypes.string.isRequired,
};

const ProjectGitLink = ({ git }) => (
  <a
    href={git}
    target="_blank"
    rel="noopener noreferrer"
    className="project-link"
    style={{ marginLeft: 12 }}
  >
    Check the code in GitHub ↗
  </a>
);

ProjectGitLink.propTypes = {
  git: PropTypes.string.isRequired,
};

const ProjectPage = () => {
  const { slug } = useParams();
  const project = useMemo(() => {
    const allProjects = [...projects.web, ...projects.games];
    return allProjects.find((p) => p.slug === slug);
  }, [slug]);
  const isMobile = useIsMobile();

  if (!project) return <NotFoundPage />;

  const isConstelations = project.slug === "constellations";

  return (
    <div 
      className="project-page"
      role="main"
      aria-label={`${project.title} - Project Details - Marc Basas Portfolio`}
      itemScope
      itemType="https://schema.org/CreativeWork"
    >
      <Helmet>
        <title>{project.title} | Marc Basas Portfolio</title>
        <meta name="description" content={project.description} />
        <meta property="og:title" content={`${project.title} | Portfolio de Marc Basas`} />
        <meta property="og:description" content={project.description} />
        {project.previewImage && (
          <meta property="og:image" content={project.previewImage} />
        )}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={`${project.title} | Portfolio de Marc Basas`} />
        <meta name="twitter:description" content={project.description} />
        {project.previewImage && (
          <meta name="twitter:image" content={project.previewImage} />
        )}
      </Helmet>

      <div 
        className="project-content"
        itemScope
        itemType="https://schema.org/WebPage"
      >
        <h1 
          className="project-title"
          itemProp="name"
        >
          {project.titleMin}
        </h1>

        <p 
          className="project-description"
          itemProp="description"
        >
          {project.description}
        </p>

        <div className="project-dynamic-content">
          {/* VIDEO para Constelations solo en móvil */}
          {isConstelations && isMobile && project.video && (
            <VideoPlayer src={project.video} poster={project.poster || project.previewImage} />
          )}
          {/* VIDEO para otros proyectos */}
          {!isConstelations && project.video && (
            <VideoPlayer src={project.video} poster={project.poster || project.previewImage} />
          )}
          {/* WEB DEMO */}
          {project.category === "demo" && project.files && <LiveEditor project={project} />}
          {/* GAMES: Constelations solo en escritorio, otros juegos igual que antes */}
          {((isConstelations && !isMobile) || (!isConstelations && project.url && project.slug && project.category !== "demo" && project.category !== "final")) && (
            <GameFrame title={project.title} url={project.url} />
          )}
          {/* LINKS */}
          <div className="project-links-row">
            {/* Juegos: solo enlace GitHub */}
            {project.git && project.category === undefined && (
              <ProjectGitLink git={project.git} />
            )}
            {/* Web final: solo enlace al sitio */}
            {project.category === "final" && project.url && (
              <ProjectLink url={project.url} />
            )}
            {/* Web demo: ningún enlace */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default React.memo(ProjectPage);

