import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet-async";
import { useProjects } from "../contexts/ProjectsContext";
import { saveProjectsToFile, uploadImage, uploadVideo, uploadDemo, listBackups, restoreProjectFromBackup, deleteBackup, createManualBackup } from "../utils/adminApi";
import AdminLogin from "../components/AdminLogin";
import "./AdminPage.css";

const AdminPage = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [token, setToken] = useState(null);
  const { projects, refreshAfterAdminChange } = useProjects();
  const [projectsData, setProjectsData] = useState(projects);
  const [showForm, setShowForm] = useState(false);
  const [editingProject, setEditingProject] = useState(null);
  const [formData, setFormData] = useState({
    type: "web", // web o games
    category: "final", // para web: "final" o "demo"
    title: "",
    titleMin: "",
    slug: "",
    finished: true,
    description: "",
    previewImage: "",
    video: "",
    poster: "",
    url: "",
    git: "",
    keywords: "",
    files: "" // para demos
  });
  const [uploadingFiles, setUploadingFiles] = useState({
    previewImage: false,
    video: false,
    poster: false,
    demo: false
  });
  const [showBackupModal, setShowBackupModal] = useState(false);
  const [backups, setBackups] = useState([]);
  const [loadingBackups, setLoadingBackups] = useState(false);

  // Verificar autenticación al cargar el componente
  useEffect(() => {
    const checkAuth = async () => {
      const savedToken = localStorage.getItem('adminToken');
      const tokenExpiry = localStorage.getItem('adminTokenExpiry');
      
      if (savedToken && tokenExpiry && Date.now() < parseInt(tokenExpiry)) {
        // Verificar que el token sigue siendo válido
        try {
          const response = await fetch('https://portfolio-admin-server-76sn.onrender.com/api/auth/validate', {
            method: 'POST',
            headers: {
              'Authorization': `Bearer ${savedToken}`,
              'Content-Type': 'application/json',
            },
          });
          
                      if (response.ok) {
                        setToken(savedToken);
                        setIsAuthenticated(true);
                        // Cargar proyectos desde el servidor
                        loadProjects();
                      } else {
            // Token inválido, limpiar localStorage
            localStorage.removeItem('adminToken');
            localStorage.removeItem('adminTokenExpiry');
          }
        } catch (error) {
          console.error('Error verificando token:', error);
          localStorage.removeItem('adminToken');
          localStorage.removeItem('adminTokenExpiry');
        }
      }
    };
    
    checkAuth();
  }, []);

  // Sincronizar proyectos del contexto con el estado local
  useEffect(() => {
    setProjectsData(projects);
  }, [projects]);

  const handleLogin = async (newToken) => {
    setToken(newToken);
    setIsAuthenticated(true);
    // Cargar proyectos desde el servidor después del login
    await loadProjects();
  };

  const loadProjects = async () => {
    try {
      // Los proyectos ahora se cargan automáticamente a través del contexto
      // Simplemente refrescar el contexto global
      await refreshAfterAdminChange();
      console.log('PROYECTOS REFRESCADOS DESDE CONTEXTO EN ADMIN');
    } catch (error) {
      console.error('Error refrescando proyectos:', error);
      // Los datos ya están disponibles en el contexto
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('adminToken');
    localStorage.removeItem('adminTokenExpiry');
    setToken(null);
    setIsAuthenticated(false);
  };

  const resetForm = () => {
    setFormData({
      type: "web",
      category: "final",
      title: "",
      titleMin: "",
      slug: "",
      finished: true,
      description: "",
      previewImage: "",
      video: "",
      poster: "",
      url: "",
      git: "",
      keywords: "",
      files: ""
    });
    setUploadingFiles({
      previewImage: false,
      video: false,
      poster: false,
      demo: false
    });
    setEditingProject(null);
    setShowForm(false);
  };

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => {
      const newData = {
        ...prev,
        [name]: type === 'checkbox' ? checked : value
      };
      
      // Si cambia el tipo, resetear categoría
      if (name === 'type') {
        if (value === 'web') {
          newData.category = 'final';
          newData.git = ''; // Los web no tienen git por defecto
        } else if (value === 'games') {
          newData.category = 'games'; // Los games solo tienen una categoría
          newData.files = ''; // Los games no tienen files
        }
      }
      
      // Si cambia a no terminado, limpiar campos específicos
      if (name === 'finished' && !checked) {
        newData.video = '';
        newData.poster = '';
        newData.url = '';
        newData.git = '';
        newData.files = '';
      }
      
      return newData;
    });
  };

  const generateSlug = (title) => {
    return title
      .toLowerCase()
      .replace(/[^a-z0-9\s-]/g, '')
      .replace(/\s+/g, '-')
      .replace(/-+/g, '-')
      .trim();
  };

  const generateId = (type) => {
    const allProjects = [...projectsData.web, ...projectsData.games];
    const maxId = Math.max(...allProjects.map(p => p.id), 0);
    return maxId + 1;
  };

  const handleFileUpload = async (file, type) => {
    setUploadingFiles(prev => ({ ...prev, [type]: true }));
    
    try {
      let result;
      switch (type) {
        case 'previewImage':
        case 'poster':
          result = await uploadImage(file);
          break;
        case 'video':
          result = await uploadVideo(file);
          break;
        case 'demo':
          result = await uploadDemo(file, formData.slug || generateSlug(formData.title));
          // Cuando se sube un demo, asignar automáticamente la propiedad files
          const demoReference = result.exportName || `${formData.slug || generateSlug(formData.title)}Demo`;
          setFormData(prev => ({
            ...prev,
            files: demoReference
          }));
          break;
        default:
          throw new Error('Tipo de archivo no válido');
      }

      // Actualizar el campo correspondiente en el formulario
      setFormData(prev => ({
        ...prev,
        [type]: result.path
      }));

      alert(`${result.message}`);
    } catch (error) {
      alert(`Error en pujar arxiu: ${error.message}`);
    } finally {
      setUploadingFiles(prev => ({ ...prev, [type]: false }));
    }
  };



  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Validación personalizada según el tipo y estado
    if (formData.finished) {
      if (formData.type === 'web' && formData.category === 'final') {
        if (!formData.video || !formData.poster || !formData.url) {
          alert('Els projectes web finals han de tenir vídeo, poster i URL');
          return;
        }
      } else if (formData.type === 'web' && formData.category === 'demo') {
        if (!formData.files) {
          alert('Els projectes web demo han de tenir un arxiu de demo');
          return;
        }
      } else if (formData.type === 'games') {
        if (!formData.video || !formData.poster || !formData.url || !formData.git) {
          alert('Els jocs han de tenir vídeo, poster, URL i GitHub');
          return;
        }
      }
    }
    
    const newProject = {
      ...formData,
      id: editingProject ? editingProject.id : generateId(formData.type),
      slug: formData.slug || generateSlug(formData.title)
    };

    // Limpiar campos no necesarios según el tipo y estado
    if (!formData.finished) {
      // Si no está terminado, solo mantener campos comunes
      delete newProject.video;
      delete newProject.poster;
      delete newProject.url;
      delete newProject.git;
      delete newProject.files;
    } else if (formData.type === 'web') {
      if (formData.category === 'final') {
        // Web final no tiene files ni git
        delete newProject.files;
        delete newProject.git;
      } else if (formData.category === 'demo') {
        // Web demo no tiene git, url, video ni poster
        delete newProject.git;
        delete newProject.url;
        delete newProject.video;
        delete newProject.poster;
      }
    } else if (formData.type === 'games') {
      // Games no tienen files y siempre tienen category 'games'
      delete newProject.files;
      newProject.category = 'games';
    }
    
    // Limpiar el campo type antes de guardar (mantener la estructura original)
    delete newProject.type;

    try {
      // Crear una copia de los datos de proyectos
      const updatedProjects = { ...projectsData };
      
      if (editingProject) {
        // Editar proyecto existente
        const categoryProjects = updatedProjects[editingProject.type];
        const projectIndex = categoryProjects.findIndex(p => p.id === editingProject.id);
        
        if (projectIndex !== -1) {
          categoryProjects[projectIndex] = newProject;
        }
      } else {
        // Agregar nuevo proyecto
        updatedProjects[formData.type] = [...updatedProjects[formData.type], newProject];
      }
      
      // Guardar los cambios
      await saveProjectsToFile(updatedProjects);
      setProjectsData(updatedProjects);
      
      // Refrescar el contexto global usando la función específica para admin
      refreshAfterAdminChange();
      
      resetForm();
      alert(editingProject ? 'Projecte actualitzat correctament' : 'Projecte afegit correctament');
    } catch (error) {
      alert('Error en desar el projecte: ' + error.message);
    }
  };

  const handleEdit = (project, type) => {
    setEditingProject({ ...project, type });
    
    // Determinar la categoría basada en el tipo y propiedades del proyecto
    let category = 'final'; // por defecto
    if (type === 'web' && project.files) {
      category = 'demo';
    } else if (type === 'games') {
      category = 'games';
    }
    
    setFormData({ 
      ...project, 
      type,
      category,
      // Asegurar que todos los campos existan
      video: project.video || '',
      poster: project.poster || '',
      url: project.url || '',
      git: project.git || '',
      files: project.files || ''
    });
    setShowForm(true);
  };

  const handleDelete = async (projectId, type) => {
    if (window.confirm('Estàs segur que vols eliminar aquest projecte?')) {
      try {
        const projectToDelete = projectsData[type].find(p => p.id === projectId);
        const updatedProjects = { ...projectsData };
        updatedProjects[type] = updatedProjects[type].filter(p => p.id !== projectId);
        
        setProjectsData(updatedProjects);
        
        // Enviar información del proyecto eliminado para crear backup
        const response = await fetch('https://portfolio-admin-server-76sn.onrender.com/api/admin/save-projects', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${localStorage.getItem('adminToken')}`,
          },
          body: JSON.stringify({ 
            projects: updatedProjects,
            deletedProject: projectToDelete 
          }),
        });

        if (!response.ok) {
          throw new Error('Error al eliminar el proyecto');
        }

        const result = await response.json();
        
        // Refrescar el contexto global usando la función específica para admin
        refreshAfterAdminChange();
        
        let message = 'Projecte eliminat correctament';
        if (result.backup?.created) {
          message += `\nBackup creat: ${result.backup.backupId}`;
        }
        
        alert(message);
      } catch (error) {
        alert('Error en eliminar el projecte: ' + error.message);
      }
    }
  };

  // Funciones para gestionar backups
  const loadBackups = async () => {
    setLoadingBackups(true);
    try {
      const response = await listBackups();
      setBackups(response.backups || []);
    } catch (error) {
      alert('Error carregant backups: ' + error.message);
    } finally {
      setLoadingBackups(false);
    }
  };

  const handleShowBackups = async () => {
    setShowBackupModal(true);
    await loadBackups();
  };

  const handleRestoreBackup = async (backupId, projectTitle) => {
    if (window.confirm(`Estàs segur que vols restaurar el projecte "${projectTitle}"?`)) {
      try {
        const response = await restoreProjectFromBackup(backupId);
        
        // Refrescar proyectos desde el contexto para obtener la versión actualizada
        await refreshAfterAdminChange();
        
        alert(`Projecte "${projectTitle}" restaurat correctament`);
        setShowBackupModal(false);
      } catch (error) {
        alert('Error restaurant el backup: ' + error.message);
      }
    }
  };

  const handleDeleteBackup = async (backupId, projectTitle) => {
    if (window.confirm(`Estàs segur que vols eliminar el backup de "${projectTitle}"?`)) {
      try {
        await deleteBackup(backupId);
        alert('Backup eliminat correctament');
        await loadBackups(); // Recargar lista
      } catch (error) {
        alert('Error eliminant el backup: ' + error.message);
      }
    }
  };

  const handleCreateManualBackup = async (project) => {
    try {
      const response = await createManualBackup(project);
      alert(`Backup manual creat per "${project.title}"`);
      await loadBackups(); // Recargar lista
    } catch (error) {
      alert('Error creant backup manual: ' + error.message);
    }
  };



  // Si no está autenticado, mostrar el login
  if (!isAuthenticated) {
    return <AdminLogin onLogin={handleLogin} />;
  }

  return (
    <>
      <Helmet>
        <title>Panell d'Administració - Portfolio</title>
        <meta name="robots" content="noindex, nofollow" />
        <style>{`
          body {
            margin: 0;
            padding: 0;
            overflow: auto !important;
            height: auto !important;
          }
          #root {
            height: auto !important;
            overflow: visible !important;
          }
        `}</style>
      </Helmet>

      <div className="admin-page">
        <div className="admin-header">
          <a href="/" className="btn-back-portfolio">← TORNAR AL PORTFOLIO</a>
          <h1>PANELL D'ADMINISTRACIÓ</h1>
          <div className="admin-header-actions">
            <button 
              className="btn-backup-history"
              onClick={handleShowBackups}
              title="Veure historial de backups"
            >
              HISTORIAL
            </button>
            <button 
              className="btn-logout"
              onClick={handleLogout}
              title="Cerrar sesión"
            >
              SORTIR
            </button>
          </div>
        </div>

        {showForm && (
          <div className="modal-overlay">
            <div className="project-form-modal">
              <div className="modal-header">
                <h2>{editingProject ? 'EDITAR PROJECTE' : 'AFEGIR NOU PROJECTE'}</h2>
                <button className="btn-close" onClick={resetForm}>×</button>
              </div>

              <form onSubmit={handleSubmit} className="project-form">
                <div className="form-group">
                  <label>Tipus:</label>
                  <select
                    name="type"
                    value={formData.type}
                    onChange={handleInputChange}
                    required
                  >
                    <option value="web">Web</option>
                    <option value="games">Jocs</option>
                  </select>
                </div>

                {formData.type === "web" && (
                  <div className="form-group">
                    <label>Categoria:</label>
                    <select
                      name="category"
                      value={formData.category}
                      onChange={handleInputChange}
                      required
                    >
                      <option value="final">Final</option>
                      <option value="demo">Demo</option>
                    </select>
                  </div>
                )}

                <div className="form-group">
                  <label>Títol:</label>
                  <input
                    type="text"
                    name="title"
                    value={formData.title}
                    onChange={handleInputChange}
                    required
                  />
                </div>

                <div className="form-group">
                  <label>Títol Curt:</label>
                  <input
                    type="text"
                    name="titleMin"
                    value={formData.titleMin}
                    onChange={handleInputChange}
                    required
                  />
                </div>

                <div className="form-group">
                  <label>Slug (URL):</label>
                  <input
                    type="text"
                    name="slug"
                    value={formData.slug}
                    onChange={handleInputChange}
                    placeholder="Es genera automàticament del títol"
                  />
                </div>

                <div className="form-group">
                  <label>
                    <input
                      type="checkbox"
                      name="finished"
                      checked={formData.finished}
                      onChange={handleInputChange}
                    />
                    Projecte acabat
                  </label>
                </div>

                <div className="form-group">
                  <label>Descripció:</label>
                  <textarea
                    name="description"
                    value={formData.description}
                    onChange={handleInputChange}
                    rows="4"
                    required
                  />
                </div>

                <div className="form-group">
                  <label>Imatge de previsualització:</label>
                  <input
                    type="text"
                    name="previewImage"
                    value={formData.previewImage}
                    onChange={handleInputChange}
                    placeholder="ex: img/LandingPreview_ElMeuProjecte.webp"
                    required
                  />
                  <div className="file-upload-simple">
                    <label className="file-button">
                      Seleccionar arxiu
                      <input
                        type="file"
                        accept="image/*"
                        onChange={(e) => e.target.files[0] && handleFileUpload(e.target.files[0], 'previewImage')}
                        className="file-input-hidden"
                        disabled={uploadingFiles.previewImage}
                      />
                    </label>
                    <span className={`file-status ${uploadingFiles.previewImage ? 'uploading' : ''}`}>
                      {uploadingFiles.previewImage ? 'Pujant...' : 'Cap arxiu seleccionat'}
                    </span>
                  </div>
                </div>

                {/* Campos específicos solo si el proyecto está terminado */}
                {formData.finished && (
                  <>
                    {/* Video - requerido para web final y games */}
                    {(formData.type === "games" || (formData.type === "web" && formData.category === "final")) && (
                      <div className="form-group">
                        <label>Vídeo {formData.type === "games" || (formData.type === "web" && formData.category === "final") ? "*" : "(opcional)"}:</label>
                        <input
                          type="text"
                          name="video"
                          value={formData.video}
                          onChange={handleInputChange}
                          placeholder="ex: vids/ElMeuProjecte.webm"
                          required={formData.type === "games" || (formData.type === "web" && formData.category === "final")}
                        />
                        <div className="file-upload-simple">
                          <label className="file-button">
                            Seleccionar arxiu
                            <input
                              type="file"
                              accept="video/*"
                              onChange={(e) => e.target.files[0] && handleFileUpload(e.target.files[0], 'video')}
                              className="file-input-hidden"
                              disabled={uploadingFiles.video}
                            />
                          </label>
                          <span className={`file-status ${uploadingFiles.video ? 'uploading' : ''}`}>
                            {uploadingFiles.video ? 'Pujant...' : 'Cap arxiu seleccionat'}
                          </span>
                        </div>
                      </div>
                    )}

                    {/* Poster - requerido para web final y games */}
                    {(formData.type === "games" || (formData.type === "web" && formData.category === "final")) && (
                      <div className="form-group">
                        <label>Poster del vídeo *:</label>
                        <input
                          type="text"
                          name="poster"
                          value={formData.poster}
                          onChange={handleInputChange}
                          placeholder="ex: vids/PosterElMeuProjecte.webp"
                          required
                        />
                        <div className="file-upload-simple">
                          <label className="file-button">
                            Seleccionar arxiu
                            <input
                              type="file"
                              accept="image/*"
                              onChange={(e) => e.target.files[0] && handleFileUpload(e.target.files[0], 'poster')}
                              className="file-input-hidden"
                              disabled={uploadingFiles.poster}
                            />
                          </label>
                          <span className={`file-status ${uploadingFiles.poster ? 'uploading' : ''}`}>
                            {uploadingFiles.poster ? 'Pujant...' : 'Cap arxiu seleccionat'}
                          </span>
                        </div>
                      </div>
                    )}

                    {/* URL - requerida para web final y games */}
                    {(formData.type === "games" || (formData.type === "web" && formData.category === "final")) && (
                      <div className="form-group">
                        <label>URL del projecte *:</label>
                        <input
                          type="url"
                          name="url"
                          value={formData.url}
                          onChange={handleInputChange}
                          placeholder="https://elmeuprojecte.com"
                          required
                        />
                      </div>
                    )}

                    {/* Git - solo para games */}
                    {formData.type === "games" && (
                      <div className="form-group">
                        <label>URL de GitHub *:</label>
                        <input
                          type="url"
                          name="git"
                          value={formData.git}
                          onChange={handleInputChange}
                          placeholder="https://github.com/usuari/projecte"
                          required
                        />
                      </div>
                    )}

                    {/* Files - solo para web demo */}
                    {formData.type === "web" && formData.category === "demo" && (
                      <div className="form-group">
                        <label>Arxiu demo (.js) *:</label>
                        <div className="file-upload-simple">
                          <label className="file-button">
                            Seleccionar arxiu
                            <input
                              type="file"
                              accept=".js"
                              onChange={(e) => e.target.files[0] && handleFileUpload(e.target.files[0], 'demo')}
                              className="file-input-hidden"
                              disabled={uploadingFiles.demo}
                            />
                          </label>
                          <span className={`file-status ${uploadingFiles.demo ? 'uploading' : ''}`}>
                            {uploadingFiles.demo ? 'Pujant arxiu demo...' : 'Cap arxiu seleccionat'}
                          </span>
                        </div>
                        {formData.files && (
                          <div style={{ marginTop: '0.5rem', padding: '0.5rem', backgroundColor: '#e8f5e8', borderRadius: '4px', fontSize: '0.9rem' }}>
                            <strong>Referència del demo:</strong> {formData.files}
                          </div>
                        )}
                        <small style={{ display: 'block', marginTop: '0.5rem', color: '#1b1b1b', fontSize: '0.8rem', opacity: '0.7' }}>
                          L'arxiu ha d'exportar: export const elMeuDemo = &#123; html: "...", css: "...", js: "..." &#125;
                        </small>
                      </div>
                    )}
                  </>
                )}

                <div className="form-group">
                  <label>Paraules clau (separades per comes):</label>
                  <textarea
                    name="keywords"
                    value={formData.keywords}
                    onChange={handleInputChange}
                    rows="2"
                    placeholder="React, JavaScript, Desenvolupament Web, Portfolio"
                  />
                </div>


                <div className="form-actions">
                  <button type="button" onClick={resetForm} className="btn-cancel">
                    Cancel·lar
                  </button>
                  <button type="submit" className="btn-save">
                    {editingProject ? 'Actualitzar' : 'Desar'} Projecte
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}

        <div className="projects-section">
          <h2>Projectes Web</h2>
          <div className="projects-list">
            {projectsData.web.map(project => (
              <div key={project.id} className="project-item">
                <div className="project-info">
                  <h3>{project.title}</h3>
                  <p>{project.titleMin}</p>
                  <span className={`status ${project.finished ? 'finished' : 'in-progress'}`}>
                    {project.finished ? 'Acabat' : 'En desenvolupament'}
                  </span>
                </div>
                <div className="project-actions">
                  <button 
                    onClick={() => handleEdit(project, 'web')}
                    className="btn-edit"
                  >
                    Editar
                  </button>
                  <button 
                    onClick={() => handleDelete(project.id, 'web')}
                    className="btn-delete"
                  >
                    Eliminar
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="projects-section">
          <h2>Jocs</h2>
          <div className="projects-list">
            {projectsData.games.map(project => (
              <div key={project.id} className="project-item">
                <div className="project-info">
                  <h3>{project.title}</h3>
                  <p>{project.titleMin}</p>
                  <span className={`status ${project.finished ? 'finished' : 'in-progress'}`}>
                    {project.finished ? 'Acabat' : 'En desenvolupament'}
                  </span>
                </div>
                <div className="project-actions">
                  <button 
                    onClick={() => handleEdit(project, 'games')}
                    className="btn-edit"
                  >
                    Editar
                  </button>
                  <button 
                    onClick={() => handleDelete(project.id, 'games')}
                    className="btn-delete"
                  >
                    Eliminar
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Modal de Historial de Backups */}
        {showBackupModal && (
          <div className="modal-overlay">
            <div className="backup-modal">
              <div className="modal-header">
                <h2>HISTORIAL DE BACKUPS</h2>
                <button className="btn-close" onClick={() => setShowBackupModal(false)}>×</button>
              </div>

              <div className="backup-modal-content">
                {loadingBackups ? (
                  <div className="loading-backups">
                    <p>Carregant backups...</p>
                  </div>
                ) : backups.length === 0 ? (
                  <div className="no-backups">
                    <p>No hi ha backups disponibles</p>
                  </div>
                ) : (
                  <div className="backups-list">
                    {backups.map(backup => (
                      <div key={backup.id} className="backup-item">
                        <div className="backup-info">
                          <h3>{backup.project.title}</h3>
                          <div className="backup-details">
                            <span className="backup-date">
                              {new Date(backup.timestamp).toLocaleString('ca-ES')}
                            </span>
                            <span className={`backup-operation operation-${backup.operation}`}>
                              {backup.operation === 'delete' ? 'Eliminació' : 
                               backup.operation === 'manual' ? 'Manual' : 'Actualització'}
                            </span>
                            <span className={`backup-files ${backup.hasFiles ? 'has-files' : 'no-files'}`}>
                              {backup.hasFiles ? 'Amb arxius' : 'Només metadades'}
                            </span>
                          </div>
                          <p className="backup-description">{backup.project.description}</p>
                        </div>
                        <div className="backup-actions">
                          <button 
                            onClick={() => handleRestoreBackup(backup.id, backup.project.title)}
                            className="btn-restore"
                            title="Restaurar aquest projecte"
                          >
                            Restaurar
                          </button>
                          <button 
                            onClick={() => handleCreateManualBackup(backup.project)}
                            className="btn-backup"
                            title="Crear backup manual d'aquest projecte"
                          >
                            Backup
                          </button>
                          <button 
                            onClick={() => handleDeleteBackup(backup.id, backup.project.title)}
                            className="btn-delete-backup"
                            title="Eliminar aquest backup"
                          >
                            Eliminar
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              <div className="backup-modal-footer">
                <p className="backup-info-text">
                  Els backups es creen automàticament quan elimines projectes. 
                  Es mantenen {backups.length > 0 ? `${Math.min(10, backups.length)}` : '10'} backups màxim.
                </p>
              </div>
            </div>
          </div>
        )}
        
        {/* Botón flotante para añadir proyecto */}
        <button 
          className="btn-floating-add"
          onClick={() => setShowForm(true)}
          title="Afegir nou projecte"
        >
          +
        </button>
      </div>
    </>
  );
};

export default AdminPage;
