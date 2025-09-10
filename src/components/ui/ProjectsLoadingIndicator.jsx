import React from 'react';
import { useProjects } from '../../contexts/ProjectsContext';
import './ProjectsLoadingIndicator.css';

/**
 * Componente que muestra el estado de carga de los proyectos
 * @component
 * @returns {JSX.Element|null} El indicador de carga o null si no se necesita
 */
const ProjectsLoadingIndicator = () => {
  const { loading, error, isFromServer } = useProjects();

  // No mostrar nada si no hay estado especial
  if (!loading && !error && isFromServer) return null;

  return (
    <div className="projects-loading-indicator">
      {loading && (
        <div className="loading-message">
          <div className="loading-spinner"></div>
          <span>Cargando proyectos desde el servidor...</span>
        </div>
      )}
      
      {error && (
        <div className="error-message">
          <span className="error-icon">⚠️</span>
          <span>Error cargando proyectos del servidor. Usando datos locales.</span>
        </div>
      )}
      
      {!loading && !error && !isFromServer && (
        <div className="fallback-message">
          <span className="info-icon">ℹ️</span>
          <span>Usando datos locales (servidor no disponible)</span>
        </div>
      )}
    </div>
  );
};

export default ProjectsLoadingIndicator;
