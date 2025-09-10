import React from 'react';
import { projects as staticProjects } from './projects.js';

// URL del servidor de administración en Render
const ADMIN_SERVER_URL = 'https://portfolio-admin-server-76sn.onrender.com';

// Cache para evitar múltiples peticiones
let cachedProjects = null;
let lastFetchTime = 0;
const CACHE_DURATION = 5 * 60 * 1000; // 5 minutos

/**
 * Carga proyectos dinámicamente desde el servidor con fallback estático
 * @param {boolean} forceRefresh - Forzar actualización ignorando cache
 * @returns {Promise<Object>} Objeto con proyectos web y games
 */
export const loadProjects = async (forceRefresh = false) => {
  // Si hay cache válido y no se fuerza refresh, usar cache
  if (!forceRefresh && cachedProjects && (Date.now() - lastFetchTime) < CACHE_DURATION) {
    console.log('USANDO PROYECTOS DESDE CACHE');
    return cachedProjects;
  }

  try {
    console.log('CARGANDO PROYECTOS DESDE SERVIDOR...');
    
    // Intentar cargar desde el servidor
    const response = await fetch(`${ADMIN_SERVER_URL}/api/admin/load-projects`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
      // Timeout de 5 segundos
      signal: AbortSignal.timeout(5000)
    });

    if (!response.ok) {
      throw new Error(`Error del servidor: ${response.status}`);
    }

    const data = await response.json();
    
    if (data.success && data.projects) {
      console.log('PROYECTOS CARGADOS DESDE SERVIDOR:', {
        web: data.projects.web?.length || 0,
        games: data.projects.games?.length || 0
      });
      
      // Actualizar cache
      cachedProjects = data.projects;
      lastFetchTime = Date.now();
      
      return data.projects;
    } else {
      throw new Error('Respuesta del servidor inválida');
    }

  } catch (error) {
    console.warn('ERROR CARGANDO DESDE SERVIDOR, USANDO FALLBACK ESTÁTICO:', error.message);
    
    // Usar proyectos estáticos como fallback
    cachedProjects = staticProjects;
    lastFetchTime = Date.now();
    
    return staticProjects;
  }
};

/**
 * Hook para React que gestiona el estado de carga de proyectos
 * @returns {Object} { projects, loading, error, refresh }
 */
export const useProjects = () => {
  const [projects, setProjects] = React.useState(staticProjects);
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState(null);

  const loadProjectsData = async (forceRefresh = false) => {
    setLoading(true);
    setError(null);
    
    try {
      const projectsData = await loadProjects(forceRefresh);
      setProjects(projectsData);
    } catch (err) {
      setError(err.message);
      // En caso de error, mantener los proyectos estáticos
      setProjects(staticProjects);
    } finally {
      setLoading(false);
    }
  };

  // Cargar proyectos al montar el componente
  React.useEffect(() => {
    loadProjectsData();
  }, []);

  return {
    projects,
    loading,
    error,
    refresh: () => loadProjectsData(true)
  };
};

/**
 * Función para invalidar el cache manualmente
 */
export const invalidateProjectsCache = () => {
  cachedProjects = null;
  lastFetchTime = 0;
  console.log('CACHE DE PROYECTOS INVALIDADO');
};

/**
 * Función para obtener el estado del cache
 */
export const getCacheStatus = () => {
  return {
    hasCachedData: !!cachedProjects,
    lastFetchTime,
    cacheAge: Date.now() - lastFetchTime,
    isExpired: (Date.now() - lastFetchTime) > CACHE_DURATION
  };
};

// Exportar también los proyectos estáticos para compatibilidad
export { staticProjects };
