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
    Visit ↗
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
    Check the code in GitHub
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

  if (!project) return <NotFoundPage />;

  return (
    <div 
      className="project-page"
      role="main"
      aria-label={`${project.title} - Project Details - Marco Vilarrubias Portfolio`}
      itemScope
      itemType="https://schema.org/CreativeWork"
    >
      <Helmet>
        <title>{project.title} | Portfolio de Marco</title>
        <meta name="description" content={project.description} />
        <meta property="og:title" content={`${project.title} | Portfolio de Marco`} />
        <meta property="og:description" content={project.description} />
        {project.previewImage && (
          <meta property="og:image" content={project.previewImage} />
        )}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={`${project.title} | Portfolio de Marco`} />
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
          {project.title}
        </h1>

        <p 
          className="project-description"
          itemProp="description"
        >
          {project.description}
        </p>

        <div className="project-dynamic-content">
          {/* WEB DEMO */}
          {project.category === "demo" && project.files && <LiveEditor project={project} />}
          {/* WEB FINAL */}
          {project.category === "final" && project.video && (
            <VideoPlayer src={project.video} poster={project.poster || project.previewImage} />
          )}
          {/* GAMES */}
          {project.url && project.slug && project.category !== "demo" && project.category !== "final" && (
            <GameFrame title={project.title} url={project.url} />
          )}
          {/* LINKS */}
          <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginTop: 16 }}>
            {project.url && <ProjectLink url={project.url} />}
            {project.git && <ProjectGitLink git={project.git} />}
          </div>
        </div>
      </div>
    </div>
  );
};

export default React.memo(ProjectPage);

