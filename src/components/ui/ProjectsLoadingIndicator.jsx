import React from 'react';
import { useProjects } from '../../contexts/ProjectsContext';
import './ProjectsLoadingIndicator.css';

/**
 * Componente que muestra el estado de carga de los proyectos
 * @component
 * @returns {JSX.Element|null} El indicador de carga o null si no se necesita
 */
const ProjectsLoadingIndicator = () => {
  const { loading, error, isFromServer, dataSource } = useProjects();
  const [shouldShow, setShouldShow] = React.useState(false);
  const [currentMessage, setCurrentMessage] = React.useState(null);

  // Lógica mejorada para mostrar/ocultar el indicador
  React.useEffect(() => {
    console.log('INDICADOR - Estado:', { loading, error, isFromServer, dataSource });
    
    if (loading) {
      setShouldShow(true);
      setCurrentMessage('loading');
    } else if (error) {
      setShouldShow(true);
      setCurrentMessage('error');
    } else if (dataSource === 'static') {
      setShouldShow(true);
      setCurrentMessage('fallback');
    } else if (dataSource === 'server' || dataSource === 'cache') {
      // Ocultar el indicador después de un breve delay para evitar flicker
      const timer = setTimeout(() => {
        setShouldShow(false);
        setCurrentMessage(null);
      }, 1500); // 1.5 segundos para que el usuario vea que se cargó correctamente
      
      return () => clearTimeout(timer);
    }
  }, [loading, error, isFromServer, dataSource]);

  // No mostrar nada si no debe mostrarse
  if (!shouldShow) return null;

  return (
    <div className="projects-loading-indicator">
      {currentMessage === 'loading' && (
        <div className="loading-message">
          <div className="loading-spinner"></div>
          <span>Cargando proyectos desde el servidor...</span>
        </div>
      )}
      
      {currentMessage === 'error' && (
        <div className="error-message">
          <span className="error-icon">⚠️</span>
          <span>Error cargando proyectos del servidor. Usando datos locales.</span>
        </div>
      )}
      
      {currentMessage === 'fallback' && (
        <div className="fallback-message">
          <span className="info-icon">ℹ️</span>
          <span>Usando datos locales (servidor no disponible)</span>
        </div>
      )}
    </div>
  );
};

export default ProjectsLoadingIndicator;
