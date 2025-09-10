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
    return cachedProjects;
  }

  try {
    console.log('DEBUG: Intentando cargar proyectos desde servidor...');
    // Intentar cargar desde el servidor (endpoint público)
    const response = await fetch(`${ADMIN_SERVER_URL}/api/projects?t=${Date.now()}`, {
      method: 'GET',
      headers: {
        'Cache-Control': 'no-cache, no-store, must-revalidate',
        'Pragma': 'no-cache',
        'Expires': '0'
      },
      // Timeout de 8 segundos (un poco más para dar tiempo)
      signal: AbortSignal.timeout(8000)
    });

    if (!response.ok) {
      throw new Error(`Error del servidor: ${response.status}`);
    }

    // Obtener el código JavaScript del servidor
    const jsCode = await response.text();
    console.log('DEBUG: Código recibido del servidor, longitud:', jsCode.length);
    
    // Crear un módulo temporal para evaluar el código
    const module = { exports: {} };
    const exports = module.exports;
    
    // Evaluar el código JavaScript de manera segura
    const evalCode = jsCode.replace(/import\s+.*?from\s+.*?;?\n?/g, ''); // Remover imports
    const projectsMatch = evalCode.match(/export const projects = ({[\s\S]*?});/);
    console.log('DEBUG: Match encontrado:', !!projectsMatch);
    
    if (projectsMatch) {
      console.log('DEBUG: Cargando demos...');
      // Usar los demos estáticos como fallback
      const { cinevisionDemo } = await import('./demos/cinevision-demo');
      const { crealabDemo } = await import('./demos/crealab-demo');  
      const { portfolioDemo } = await import('./demos/portfolio-demo');
      console.log('DEBUG: Demos cargados exitosamente');
      
      // Evaluar el código con el contexto de los demos
      const projectsData = new Function('BASE', 'portfolioDemo', 'cinevisionDemo', 'crealabDemo', 'return ' + projectsMatch[1])(
        '', // BASE vacío
        portfolioDemo,
        cinevisionDemo, 
        crealabDemo
      );
      
      console.log('DEBUG: Proyectos procesados:', {
        web: projectsData.web?.length,
        games: projectsData.games?.length
      });
      
      // Actualizar cache
      cachedProjects = projectsData;
      lastFetchTime = Date.now();
      
      return projectsData;
    } else {
      throw new Error('No se pudo extraer los datos de proyectos del servidor');
    }

  } catch (error) {
    console.warn('ERROR CARGANDO DESDE SERVIDOR, USANDO FALLBACK ESTÁTICO:', error.message);
    
    // Usar proyectos estáticos como fallback solo si no hay cache
    if (!cachedProjects) {
      cachedProjects = staticProjects;
      lastFetchTime = Date.now();
      return staticProjects;
    }
    
    // Si hay cache, usarlo aunque sea viejo
    return cachedProjects;
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
