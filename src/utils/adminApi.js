// Función para cargar proyectos desde el servidor
export const loadProjectsFromServer = async () => {
  try {
    const token = localStorage.getItem('adminToken');
    const response = await fetch('https://portfolio-admin-server-76sn.onrender.com/api/admin/load-projects', {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${token}`,
      },
    });

    if (!response.ok) {
      throw new Error('Error al cargar los proyectos');
    }

    return await response.json();
  } catch (error) {
    console.error('Error:', error);
    throw error;
  }
};

// Utilidad para manejar las operaciones de administración
export const saveProjectsToFile = async (projectsData) => {
  try {
    const token = localStorage.getItem('adminToken');
    const response = await fetch('https://portfolio-admin-server-76sn.onrender.com/api/admin/save-projects', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`,
      },
      body: JSON.stringify({ projects: projectsData }),
    });

    if (!response.ok) {
      throw new Error('Error al guardar los proyectos');
    }

    return await response.json();
  } catch (error) {
    console.error('Error:', error);
    throw error;
  }
};

// Función para subir imágenes
export const uploadImage = async (file) => {
  try {
    const token = localStorage.getItem('adminToken');
    const formData = new FormData();
    formData.append('image', file);

    const response = await fetch('https://portfolio-admin-server-76sn.onrender.com/api/admin/upload-image', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${token}`,
      },
      body: formData,
    });

    if (!response.ok) {
      const error = await response.json();
      throw new Error(error.error || 'Error al subir la imagen');
    }

    return await response.json();
  } catch (error) {
    console.error('Error uploading image:', error);
    throw error;
  }
};

// Función para subir videos
export const uploadVideo = async (file) => {
  try {
    const token = localStorage.getItem('adminToken');
    const formData = new FormData();
    formData.append('video', file);

    const response = await fetch('https://portfolio-admin-server-76sn.onrender.com/api/admin/upload-video', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${token}`,
      },
      body: formData,
    });

    if (!response.ok) {
      const error = await response.json();
      throw new Error(error.error || 'Error al subir el video');
    }

    return await response.json();
  } catch (error) {
    console.error('Error uploading video:', error);
    throw error;
  }
};

// Función para subir archivos demo
export const uploadDemo = async (file, slug) => {
  try {
    const token = localStorage.getItem('adminToken');
    const formData = new FormData();
    formData.append('demoFile', file);
    formData.append('slug', slug);

    const response = await fetch('https://portfolio-admin-server-76sn.onrender.com/api/admin/upload-demo', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${token}`,
      },
      body: formData,
    });

    if (!response.ok) {
      const error = await response.json();
      throw new Error(error.error || 'Error al subir el archivo demo');
    }

    return await response.json();
  } catch (error) {
    console.error('Error uploading demo:', error);
    
    // Si el servidor devuelve detalles específicos, mostrarlos
    if (error.message && error.message.includes('demo:')) {
      throw new Error(`Error en l'arxiu demo: ${error.message}`);
    }
    
    throw error;
  }
};

// ===== FUNCIONES DE BACKUP =====

// Función para listar todos los backups
export const listBackups = async () => {
  try {
    const token = localStorage.getItem('adminToken');
    const response = await fetch('https://portfolio-admin-server-76sn.onrender.com/api/admin/backups', {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${token}`,
      },
    });

    if (!response.ok) {
      throw new Error('Error al cargar los backups');
    }

    return await response.json();
  } catch (error) {
    console.error('Error:', error);
    throw error;
  }
};

// Función para restaurar un proyecto desde backup
export const restoreProjectFromBackup = async (backupId) => {
  try {
    const token = localStorage.getItem('adminToken');
    const response = await fetch(`https://portfolio-admin-server-76sn.onrender.com/api/admin/backups/${backupId}/restore`, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
    });

    if (!response.ok) {
      const error = await response.json();
      throw new Error(error.error || 'Error al restaurar el backup');
    }

    return await response.json();
  } catch (error) {
    console.error('Error:', error);
    throw error;
  }
};

// Función para eliminar un backup específico
export const deleteBackup = async (backupId) => {
  try {
    const token = localStorage.getItem('adminToken');
    const response = await fetch(`https://portfolio-admin-server-76sn.onrender.com/api/admin/backups/${backupId}`, {
      method: 'DELETE',
      headers: {
        'Authorization': `Bearer ${token}`,
      },
    });

    if (!response.ok) {
      const error = await response.json();
      throw new Error(error.error || 'Error al eliminar el backup');
    }

    return await response.json();
  } catch (error) {
    console.error('Error:', error);
    throw error;
  }
};

// Función para crear backup manual de un proyecto
export const createManualBackup = async (project) => {
  try {
    const token = localStorage.getItem('adminToken');
    const response = await fetch('https://portfolio-admin-server-76sn.onrender.com/api/admin/backups/create', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`,
      },
      body: JSON.stringify({ project }),
    });

    if (!response.ok) {
      const error = await response.json();
      throw new Error(error.error || 'Error al crear el backup');
    }

    return await response.json();
  } catch (error) {
    console.error('Error:', error);
    throw error;
  }
};

// Función para limpiar backups antiguos manualmente
export const cleanupOldBackups = async () => {
  try {
    const token = localStorage.getItem('adminToken');
    const response = await fetch('https://portfolio-admin-server-76sn.onrender.com/api/admin/backups/cleanup', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${token}`,
      },
    });

    if (!response.ok) {
      const error = await response.json();
      throw new Error(error.error || 'Error al limpiar los backups');
    }

    return await response.json();
  } catch (error) {
    console.error('Error:', error);
    throw error;
  }
};

// NOTA: La generación del contenido de projects.js se hace en el servidor (server.js)