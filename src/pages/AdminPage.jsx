import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet-async";
import { projects } from "../data/projects";
import { saveProjectsToFile, uploadImage, uploadVideo, uploadDemo, loadProjectsFromServer } from "../utils/adminApi";
import AdminLogin from "../components/AdminLogin";
import "./AdminPage.css";

const AdminPage = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [token, setToken] = useState(null);
  const [projectsData, setProjectsData] = useState(projects);
  const [showForm, setShowForm] = useState(false);
  const [editingProject, setEditingProject] = useState(null);
  const [formData, setFormData] = useState({
    category: "web",
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
    hasDemo: false
  });
  const [uploadingFiles, setUploadingFiles] = useState({
    previewImage: false,
    video: false,
    poster: false,
    demo: false
  });

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

  const handleLogin = async (newToken) => {
    setToken(newToken);
    setIsAuthenticated(true);
    // Cargar proyectos desde el servidor después del login
    await loadProjects();
  };

  const loadProjects = async () => {
    try {
      const response = await loadProjectsFromServer();
      if (response.success && response.projects) {
        setProjectsData(response.projects);
      }
    } catch (error) {
      console.error('Error cargando proyectos:', error);
      // Si falla, usar los datos estáticos como fallback
      setProjectsData(projects);
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
      category: "web",
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
      hasDemo: false
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
      
      // Si se desmarca hasDemo, eliminar la propiedad files
      if (name === 'hasDemo' && !checked) {
        delete newData.files;
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

  const generateId = (category) => {
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
          // Cuando se sube un demo, asignar automáticamente la propiedad files y categoría demo
          const demoReference = result.exportName || `${formData.slug || generateSlug(formData.title)}Demo`;
          setFormData(prev => ({
            ...prev,
            files: demoReference,
            category: 'web' // Los demos van en la categoría web
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
    
    const newProject = {
      ...formData,
      id: editingProject ? editingProject.id : generateId(formData.category),
      slug: formData.slug || generateSlug(formData.title)
    };

    // Quitar hasDemo del objeto que se guarda
    delete newProject.hasDemo;

    try {
      // Crear una copia de los datos de proyectos
      const updatedProjects = { ...projectsData };
      
      if (editingProject) {
        // Editar proyecto existente
        const categoryProjects = updatedProjects[editingProject.category];
        const projectIndex = categoryProjects.findIndex(p => p.id === editingProject.id);
        
        if (projectIndex !== -1) {
          categoryProjects[projectIndex] = newProject;
        }
      } else {
        // Agregar nuevo proyecto
        updatedProjects[formData.category] = [...updatedProjects[formData.category], newProject];
      }
      
      // Guardar los cambios
      await saveProjectsToFile(updatedProjects);
      setProjectsData(updatedProjects);
      resetForm();
      alert(editingProject ? 'Projecte actualitzat correctament' : 'Projecte afegit correctament');
    } catch (error) {
      alert('Error en desar el projecte: ' + error.message);
    }
  };

  const handleEdit = (project, category) => {
    setEditingProject({ ...project, category });
    setFormData({ 
      ...project, 
      category,
      hasDemo: !!project.files // Marcar como demo si tiene files
    });
    setShowForm(true);
  };

  const handleDelete = async (projectId, category) => {
    if (window.confirm('Estàs segur que vols eliminar aquest projecte?')) {
      try {
        const updatedProjects = { ...projectsData };
        updatedProjects[category] = updatedProjects[category].filter(p => p.id !== projectId);
        setProjectsData(updatedProjects);
        await saveProjectsToFile(updatedProjects);
        alert('Projecte eliminat correctament');
      } catch (error) {
        alert('Error en eliminar el projecte: ' + error.message);
      }
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
              className="btn-add-project"
              onClick={() => setShowForm(true)}
            >
              + Afegir Projecte
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
                  <label>Categoria:</label>
                  <select
                    name="category"
                    value={formData.category}
                    onChange={handleInputChange}
                    required
                  >
                    <option value="web">Web</option>
                    <option value="games">Jocs</option>
                  </select>
                </div>

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

                <div className="form-group">
                  <label>Vídeo (opcional):</label>
                  <input
                    type="text"
                    name="video"
                    value={formData.video}
                    onChange={handleInputChange}
                    placeholder="ex: vids/ElMeuProjecte.webm"
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

                <div className="form-group">
                  <label>Poster del vídeo (opcional):</label>
                  <input
                    type="text"
                    name="poster"
                    value={formData.poster}
                    onChange={handleInputChange}
                    placeholder="ex: vids/PosterElMeuProjecte.webp"
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

                <div className="form-group">
                  <label>URL del projecte (opcional):</label>
                  <input
                    type="url"
                    name="url"
                    value={formData.url}
                    onChange={handleInputChange}
                    placeholder="https://elmeuprojecte.com"
                  />
                </div>

                <div className="form-group">
                  <label>URL de GitHub (opcional):</label>
                  <input
                    type="url"
                    name="git"
                    value={formData.git}
                    onChange={handleInputChange}
                    placeholder="https://github.com/usuari/projecte"
                  />
                </div>

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

                <div className="form-group">
                  <label>
                    <input
                      type="checkbox"
                      name="hasDemo"
                      checked={formData.hasDemo}
                      onChange={handleInputChange}
                    />
                    Aquest projecte té codi demo interactiu
                  </label>
                  {formData.hasDemo && (
                    <div style={{ marginTop: '1rem' }}>
                      <label>Arxiu demo (.js):</label>
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
      </div>
    </>
  );
};

export default AdminPage;
