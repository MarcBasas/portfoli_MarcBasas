import React, { lazy, Suspense, useMemo } from "react";
import { useParams } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import PropTypes from "prop-types";

import { projects } from "../data/projects";
import LiveEditor from "../components/LiveEditor";
import GameFrame from "../components/GameFrame";
import "./ProjectPage.css";

const componentModules = import.meta.glob("../components/projectComponents/*.{jsx,js}");

const LoadingFallback = () => (
  <div className="loading-fallback">Cargando componente…</div>
);

const ProjectNotFound = () => (
  <div className="project-content">
    <h1>Proyecto no encontrado</h1>
    <p>Lo sentimos, el proyecto que buscas no existe o ha sido eliminado.</p>
  </div>
);

const ProjectImages = ({ images, title }) => {
  if (!images?.length) return null;

  return (
    <div className="project-images-grid">
      {images.map((img, i) => (
        <img
          key={i}
          src={img}
          alt={`Captura ${i + 1} del proyecto ${title}`}
          loading="lazy"
          className="project-image"
        />
      ))}
    </div>
  );
};

ProjectImages.propTypes = {
  images: PropTypes.arrayOf(PropTypes.string),
  title: PropTypes.string.isRequired,
};

const ProjectLink = ({ url }) => (
  <a
    href={url}
    target="_blank"
    rel="noopener noreferrer"
    className="project-link"
  >
    Ver sitio web
  </a>
);

ProjectLink.propTypes = {
  url: PropTypes.string.isRequired,
};

const ProjectPreview = ({ project }) => {
  if (project.webType !== "final") return null;

  return (
    <div>
      <img
        src={project.previewImage}
        alt={`Vista previa del proyecto ${project.title}`}
        loading="lazy"
        className="project-preview-image"
      />
      <ProjectImages images={project.images} title={project.title} />
      {project.websiteUrl && (
        <ProjectLink url={project.websiteUrl} />
      )}
    </div>
  );
};

ProjectPreview.propTypes = {
  project: PropTypes.shape({
    webType: PropTypes.string,
    previewImage: PropTypes.string,
    images: PropTypes.arrayOf(PropTypes.string),
    websiteUrl: PropTypes.string,
    title: PropTypes.string,
  }).isRequired,
};

const ProjectComponent = ({ project }) => {
  const ComponentPreview = useMemo(() => {
    if (project.webType !== "component") return null;

    const modulePaths = Object.keys(componentModules);
    const match = modulePaths.find(
      (path) =>
        path.endsWith(`/${project.componentName}.jsx`) ||
        path.endsWith(`/${project.componentName}.js`)
    );

    if (!match) {
      console.error(`Componente no encontrado: ${project.componentName}`, modulePaths);
      return null;
    }

    return lazy(componentModules[match]);
  }, [project.componentName, project.webType]);

  if (!ComponentPreview || project.webType !== "component") return null;

  return (
    <Suspense fallback={<LoadingFallback />}>
      <ComponentPreview />
    </Suspense>
  );
};

ProjectComponent.propTypes = {
  project: PropTypes.shape({
    webType: PropTypes.string,
    componentName: PropTypes.string,
  }).isRequired,
};

const ProjectIframe = ({ project }) => {
  if (!project.url) return null;

  return (
    <iframe
      src={project.url}
      title={project.title}
      className="project-iframe"
      allowFullScreen
    />
  );
};

ProjectIframe.propTypes = {
  project: PropTypes.shape({
    url: PropTypes.string,
    title: PropTypes.string,
  }).isRequired,
};

const ProjectPage = () => {
  const { slug } = useParams();
  const project = useMemo(() => {
    const allProjects = [...projects.web, ...projects.games];
    return allProjects.find((p) => p.slug === slug);
  }, [slug]);

  if (!project) return <ProjectNotFound />;

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
          {project.webType === "demo" && <LiveEditor project={project} />}
          {project.url && <GameFrame title={project.title} url={project.url} />}
          <ProjectPreview project={project} />
          <ProjectComponent project={project} />
        </div>
      </div>
    </div>
  );
};

ProjectPage.propTypes = {
  project: PropTypes.shape({
    title: PropTypes.string,
    description: PropTypes.string,
    webType: PropTypes.string,
    previewImage: PropTypes.string,
    images: PropTypes.arrayOf(PropTypes.string),
    websiteUrl: PropTypes.string,
    url: PropTypes.string,
    componentName: PropTypes.string,
  }),
};

export default React.memo(ProjectPage);

