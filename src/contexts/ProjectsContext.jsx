import React, { createContext, useContext, useState, useEffect } from 'react';
import { loadProjects, invalidateProjectsCache } from '../data/projectsLoader.js';
import { projects as staticProjects } from '../data/projects.js';

// Crear el contexto
const ProjectsContext = createContext();

// Hook personalizado para usar el contexto
export const useProjects = () => {
  const context = useContext(ProjectsContext);
  if (!context) {
    throw new Error('useProjects debe usarse dentro de ProjectsProvider');
  }
  return context;
};

// Provider del contexto
export const ProjectsProvider = ({ children }) => {
  const [projects, setProjects] = useState(staticProjects);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [isFromServer, setIsFromServer] = useState(false);
  const [dataSource, setDataSource] = useState('static'); // 'static', 'server', 'cache'

  // Función para cargar proyectos
  const loadProjectsData = async (forceRefresh = false) => {
    console.log('CARGANDO PROYECTOS - forceRefresh:', forceRefresh);
    setLoading(true);
    setError(null);
    
    try {
      const result = await loadProjects(forceRefresh);
      
      // loadProjects ahora retorna { projects, source }
      const projectsData = result.projects || result;
      const source = result.source || 'unknown';
      
      console.log('PROYECTOS CARGADOS - source:', source, 'proyectos:', {
        web: projectsData.web?.length || 0,
        games: projectsData.games?.length || 0
      });
      
      setProjects(projectsData);
      setDataSource(source);
      
      // Mejorar la lógica de detección del servidor
      const fromServer = source === 'server' || source === 'cache';
      setIsFromServer(fromServer);
      
      console.log('ESTADO ACTUALIZADO - isFromServer:', fromServer, 'dataSource:', source);
      
    } catch (err) {
      console.error('Error cargando proyectos:', err);
      setError(err.message);
      // En caso de error, mantener los proyectos estáticos
      setProjects(staticProjects);
      setDataSource('static');
      setIsFromServer(false);
    } finally {
      setLoading(false);
    }
  };

  // Función para refrescar proyectos
  const refresh = async () => {
    console.log('REFRESCANDO PROYECTOS DESDE CONTEXTO...');
    invalidateProjectsCache();
    await loadProjectsData(true);
  };

  // Función específica para cuando se hacen cambios en admin
  const refreshAfterAdminChange = async () => {
    console.log('REFRESCANDO DESPUÉS DE CAMBIO EN ADMIN...');
    invalidateProjectsCache();
    // Esperar un poco más para asegurar que el servidor haya procesado
    setTimeout(async () => {
      await loadProjectsData(true);
    }, 1000);
  };

  // Cargar proyectos al montar el componente
  useEffect(() => {
    loadProjectsData();
  }, []);

  // Valor del contexto
  const value = {
    projects,
    loading,
    error,
    isFromServer,
    dataSource,
    refresh,
    refreshAfterAdminChange,
    // Funciones de utilidad
    getProjectBySlug: (slug) => {
      const allProjects = [...projects.web, ...projects.games];
      return allProjects.find(project => project.slug === slug);
    },
    getProjectById: (id) => {
      const allProjects = [...projects.web, ...projects.games];
      return allProjects.find(project => project.id === id);
    }
  };

  return (
    <ProjectsContext.Provider value={value}>
      {children}
    </ProjectsContext.Provider>
  );
};
