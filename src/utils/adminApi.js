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

// NOTA: La generación del contenido de projects.js se hace en el servidor (server.js)