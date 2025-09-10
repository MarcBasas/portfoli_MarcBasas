import express from 'express';
import { promises as fs } from 'fs';
import path from 'path';
import cors from 'cors';
import multer from 'multer';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { fileURLToPath } from 'url';
import { config } from 'dotenv';
import { 
  createProjectBackup, 
  listBackups, 
  restoreProjectFromBackup, 
  cleanupOldBackups, 
  deleteBackup 
} from './backup-manager.js';

// Para obtener __dirname en ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Cargar variables de entorno especificando la ruta
config({ path: path.join(__dirname, '.env') });

const app = express();

// Configuración de autenticación
const ADMIN_PIN = process.env.ADMIN_PIN;
const JWT_SECRET = process.env.JWT_SECRET;
const SESSION_DURATION_HOURS = parseInt(process.env.SESSION_DURATION_HOURS);
const PORT = process.env.PORT || 3001;

// Verificar que las variables críticas estén configuradas
if (!ADMIN_PIN) {
  console.error('ERROR: ADMIN_PIN no está configurado');
  console.error('Crea un archivo .env en admin/server/ con:');
  console.error('   ADMIN_PIN=tu-pin-secreto');
  process.exit(1);
}

if (!JWT_SECRET) {
  console.error('ERROR: JWT_SECRET no está configurado');
  console.error('Añade a tu archivo .env:');
  console.error('   JWT_SECRET=tu-clave-secreta-muy-larga');
  console.error('Genera una clave segura con:');
  console.error('   node -e "console.log(require(\'crypto\').randomBytes(64).toString(\'hex\'))"');
  process.exit(1);
}

if (!SESSION_DURATION_HOURS) {
  console.error('ERROR: SESSION_DURATION_HOURS no está configurado');
  console.error('Añade a tu archivo .env:');
  console.error('   SESSION_DURATION_HOURS=24');
  process.exit(1);
}

// ===== SISTEMA DE UPLOAD =====

const createStorage = (subfolder) => multer.diskStorage({
  destination: async (req, file, cb) => {
    const uploadDir = path.join(__dirname, '..', '..', 'public', subfolder);
    try {
      await fs.access(uploadDir);
    } catch {
      await fs.mkdir(uploadDir, { recursive: true });
    }
    cb(null, uploadDir);
  },
  filename: (req, file, cb) => {
    // Generar nombre único con timestamp
    const timestamp = Date.now();
    const originalName = file.originalname.toLowerCase();
    const ext = path.extname(originalName);
    const name = path.basename(originalName, ext).replace(/[^a-z0-9]/g, '-');
    cb(null, `${name}-${timestamp}${ext}`);
  }
});

// Configuración de multer para diferentes tipos de archivos
const imageStorage = createStorage('img');
const videoStorage = createStorage('vids');
const demoStorage = multer.diskStorage({
  destination: (req, file, cb) => {
    const uploadDir = path.join(__dirname, '..', '..', 'src', 'data', 'demos');
    cb(null, uploadDir);
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  }
});

// Filtros de archivos
const imageFilter = (req, file, cb) => {
  const allowedTypes = /jpeg|jpg|png|gif|webp|avif/;
  const extname = allowedTypes.test(path.extname(file.originalname).toLowerCase());
  const mimetype = allowedTypes.test(file.mimetype);
  
  if (mimetype && extname) {
    return cb(null, true);
  } else {
    cb(new Error('Solo se permiten archivos de imagen (jpeg, jpg, png, gif, webp, avif)'));
  }
};

const videoFilter = (req, file, cb) => {
  const allowedTypes = /mp4|webm|mov|avi|mkv/;
  const extname = allowedTypes.test(path.extname(file.originalname).toLowerCase());
  const mimetype = allowedTypes.test(file.mimetype);
  
  if (mimetype && extname) {
    return cb(null, true);
  } else {
    cb(new Error('Solo se permiten archivos de video (mp4, webm, mov, avi, mkv)'));
  }
};

const demoFilter = (req, file, cb) => {
  if (path.extname(file.originalname) === '.js') {
    cb(null, true);
  } else {
    cb(new Error('Solo se permiten archivos .js'));
  }
};

// Configuraciones de upload
const uploadImage = multer({ 
  storage: imageStorage, 
  fileFilter: imageFilter,
  limits: { fileSize: 10 * 1024 * 1024 } // 10MB
});

const uploadVideo = multer({ 
  storage: videoStorage, 
  fileFilter: videoFilter,
  limits: { fileSize: 100 * 1024 * 1024 } // 100MB
});

const uploadDemo = multer({ 
  storage: demoStorage, 
  fileFilter: demoFilter,
  limits: { fileSize: 5 * 1024 * 1024 } // 5MB
});

// ===== MIDDLEWARES =====

app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, '..', '..', 'public')));

// Middleware de autenticación para rutas protegidas
const authenticateToken = (req, res, next) => {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1]; // Bearer TOKEN

  if (!token) {
    return res.status(401).json({ error: 'Token de acceso requerido' });
  }

  jwt.verify(token, JWT_SECRET, (err, user) => {
    if (err) {
      return res.status(403).json({ error: 'Token inválido o expirado' });
    }
    req.user = user;
    next();
  });
};

// Función para extraer el path real de un string que puede tener BASE +
const extractRealPath = (pathString) => {
  if (!pathString) return '';
  
  // Si contiene BASE + "path", extraer solo el path
  if (pathString.includes('BASE + "')) {
    return pathString.split('BASE + "')[1].replace(/"/g, '');
  }
  return pathString;
};

// ===== FUNCIONES DE LIMPIEZA =====

// Función para limpiar archivos huérfanos de un proyecto eliminado
const cleanupProjectFiles = async (projectData) => {
  const cleanedFiles = {
    images: [],
    videos: [],
    demos: [],
    posters: []
  };

  try {
    console.log(`LIMPIANDO ARCHIVOS DEL PROYECTO: ${projectData.title} (${projectData.slug})`);
    
    // Eliminar los archivos originales
    // Limpiar imagen de preview
    if (projectData.previewImage) {
      const imagePath = extractRealPath(projectData.previewImage);
      const fullImagePath = path.join(__dirname, '..', '..', 'public', imagePath);
      try {
        await fs.access(fullImagePath);
        await fs.unlink(fullImagePath);
        cleanedFiles.images.push(path.basename(fullImagePath));
        console.log(`Imagen eliminada: ${path.basename(fullImagePath)}`);
      } catch (error) {
        console.log(`Imagen no encontrada: ${imagePath}`);
      }
    }

    // Limpiar video
    if (projectData.video) {
      const videoPath = extractRealPath(projectData.video);
      const fullVideoPath = path.join(__dirname, '..', '..', 'public', videoPath);
      try {
        await fs.access(fullVideoPath);
        await fs.unlink(fullVideoPath);
        cleanedFiles.videos.push(path.basename(fullVideoPath));
        console.log(`Video eliminado: ${path.basename(fullVideoPath)}`);
      } catch (error) {
        console.log(`Video no encontrado: ${videoPath}`);
      }
    }

    // Limpiar poster
    if (projectData.poster) {
      const posterPath = extractRealPath(projectData.poster);
      const fullPosterPath = path.join(__dirname, '..', '..', 'public', posterPath);
      try {
        await fs.access(fullPosterPath);
        await fs.unlink(fullPosterPath);
        cleanedFiles.posters.push(path.basename(fullPosterPath));
        console.log(`Poster eliminado: ${path.basename(fullPosterPath)}`);
      } catch (error) {
        console.log(`Poster no encontrado: ${posterPath}`);
      }
    }

    // Limpiar demo asociado
    if (projectData.category === 'demo' || projectData.files) {
      const slug = projectData.slug;
      const possibleDemoFiles = [
        `${slug}-demo.js`,
        `${slug.replace(/-/g, '')}-demo.js`,
        `${slug}Demo.js`,
        `${slug.replace(/-/g, '')}Demo.js`
      ];

      const demosDir = path.join(__dirname, '..', '..', 'src', 'data', 'demos');
      
      for (const demoFile of possibleDemoFiles) {
        const demoPath = path.join(demosDir, demoFile);
        try {
          await fs.access(demoPath);
          await fs.unlink(demoPath);
          cleanedFiles.demos.push(demoFile);
          console.log(`Demo eliminado: ${demoFile}`);
          break; 
        } catch (error) {
          // Archivo no existe, continuar con el siguiente
        }
      }
    }

    console.log('Limpieza completada:', cleanedFiles);
    return {
      cleanedFiles: cleanedFiles
    };

  } catch (error) {
    console.error('Error durante la limpieza:', error);
    return {
      cleanedFiles: cleanedFiles,
      error: error.message
    };
  }
};

// ===== ENDPOINTS DE AUTENTICACIÓN =====

// Endpoint para login con PIN
app.post('/api/auth/login', async (req, res) => {
  try {
    const { pin } = req.body;

    if (!pin) {
      return res.status(400).json({ error: 'PIN requerido' });
    }

    // Validar PIN
    if (pin !== ADMIN_PIN) {
      console.log(`ACCESO FALLIDO CON PIN: ${pin}`);
      return res.status(401).json({ error: 'PIN incorrecto' });
    }

    // Generar JWT token
    const token = jwt.sign(
      { 
        admin: true,
        timestamp: Date.now()
      },
      JWT_SECRET,
      { expiresIn: `${SESSION_DURATION_HOURS}h` }
    );

    console.log(`ACCESO AUTORIZADO AL PANEL DE ADMINISTRACION`);
    
    res.json({
      success: true,
      message: 'Autenticación exitosa',
      token,
      expiresIn: SESSION_DURATION_HOURS * 60 * 60 * 1000 // en milisegundos
    });

  } catch (error) {
    console.error('Error en login:', error);
    res.status(500).json({ 
      error: 'Error interno del servidor', 
      details: error.message 
    });
  }
});

// Endpoint para validar token existente
app.post('/api/auth/validate', authenticateToken, (req, res) => {
  res.json({
    success: true,
    message: 'Token válido',
    user: req.user
  });
});

// Endpoint para logout (client-side)
app.post('/api/auth/logout', (req, res) => {
  res.json({
    success: true,
    message: 'Logout exitoso'
  });
});

// ===== ENDPOINTS PROTEGIDOS =====

// Endpoint para guardar proyectos
app.post('/api/admin/save-projects', authenticateToken, async (req, res) => {
  console.log('=== ENDPOINT SAVE-PROJECTS EJECUTADO ===');
  console.log('Datos recibidos:', {
    hasProjects: !!req.body.projects,
    hasDeletedProject: !!req.body.deletedProject,
    webCount: req.body.projects?.web?.length || 0,
    gamesCount: req.body.projects?.games?.length || 0
  });
  
  try {
    const { projects, deletedProject } = req.body;
    
    if (!projects) {
      console.log('ERROR: No se enviaron datos de proyectos');
      return res.status(400).json({ error: 'Los datos de proyectos son requeridos' });
    }

    // Si se está eliminando un proyecto, crear backup y luego limpiar archivos
    let cleanupResult = null;
    let backupResult = null;
    if (deletedProject) {
      console.log(`PROYECTO ELIMINADO DETECTADO: ${deletedProject.title}`);
      
      // Crear backup antes de eliminar
      try {
        const backupId = `backup-${Date.now()}-${deletedProject.slug}`;
        backupResult = await createProjectBackup(deletedProject, backupId, 'delete');
        console.log(`BACKUP CREADO ANTES DE ELIMINACION: ${backupId}`);
      } catch (backupError) {
        console.error('ERROR CREANDO BACKUP:', backupError);
        // Continuar con la eliminación aunque falle el backup
      }
      
      // Limpiar archivos después del backup
      cleanupResult = await cleanupProjectFiles(deletedProject);
      
      // Limpiar backups antiguos automáticamente
      try {
        await cleanupOldBackups();
      } catch (cleanupError) {
        console.warn('ERROR EN LIMPIEZA AUTOMATICA DE BACKUPS:', cleanupError);
      }
    }

    // Generar imports automáticamente basado en archivos existentes
    const demosDir = path.join(__dirname, '..', '..', 'src', 'data', 'demos');
    let demoFiles = [];
    try {
      demoFiles = await fs.readdir(demosDir);
      demoFiles = demoFiles.filter(file => file.endsWith('.js'));
    } catch (error) {
      console.warn('No se pudo leer directorio de demos:', error.message);
    }
    
    // Mapear nombres de archivos a nombres de exportación
    const fileToExportMap = {
      'cinevision-demo': 'cinevisionDemo',
      'crealab-demo': 'crealabDemo',
      'portfolio-demo': 'portfolioDemo'
    };
    
    const imports = demoFiles
      .map(file => {
        const fileName = path.parse(file).name; // nombre sin extensión
        const exportName = fileToExportMap[fileName] || fileName;
        return `import { ${exportName} } from './demos/${fileName}';`;
      })
      .join('\n');

    // Formatear proyectos manteniendo solo referencias (no contenido)
    const formatProject = (project) => {
      const lines = ['    {'];
      
      lines.push(`      id: ${project.id},`);
      if (project.category) lines.push(`      category: "${project.category}",`);
      lines.push(`      title: "${project.title}",`);
      lines.push(`      titleMin: "${project.titleMin}",`);
      lines.push(`      slug: "${project.slug}",`);
      lines.push(`      finished: ${project.finished},`);
      lines.push(`      description:"${project.description}",`);
      
      // Detectar si es un archivo subido (tiene timestamp) o archivo existente
      const RENDER_SERVER_URL = 'https://portfolio-admin-server-76sn.onrender.com';
      
      const cleanImagePath = project.previewImage.replace(/^.*\/img\//, 'img/');
      const isUploadedFile = cleanImagePath.includes('-175'); // Archivos subidos tienen timestamp
      
      if (isUploadedFile) {
        lines.push(`      previewImage: "${RENDER_SERVER_URL}/${cleanImagePath}",`);
      } else {
        lines.push(`      previewImage: BASE + "${cleanImagePath}",`);
      }
      
      if (project.video) {
        const cleanVideoPath = project.video.replace(/^.*\/vids\//, 'vids/');
        const isUploadedVideo = cleanVideoPath.includes('-175');
        
        if (isUploadedVideo) {
          lines.push(`      video: "${RENDER_SERVER_URL}/${cleanVideoPath}",`);
        } else {
          lines.push(`      video: BASE + "${cleanVideoPath}",`);
        }
      }
      
      if (project.poster) {
        const cleanPosterPath = project.poster.includes('/vids/') 
          ? project.poster.replace(/^.*\/vids\//, 'vids/')
          : project.poster.replace(/^.*\/img\//, 'img/');
        const isUploadedPoster = cleanPosterPath.includes('-175');
        
        if (isUploadedPoster) {
          lines.push(`      poster: "${RENDER_SERVER_URL}/${cleanPosterPath}",`);
        } else {
          lines.push(`      poster: BASE + "${cleanPosterPath}",`);
        }
      }
      
      if (project.url) lines.push(`      url: "${project.url}",`);
      if (project.git) lines.push(`      git: "${project.git}",`);
      if (project.playable !== undefined) lines.push(`      playable: ${project.playable},`);
      
      // Para files, manejar tanto referencias como contenido serializado
      if (project.files) {
        if (typeof project.files === 'string') {

          lines.push(`      files: ${project.files},`);
        } else if (typeof project.files === 'object' && project.files.html) {
          const matchingImport = demoFiles.find(file => {
            const fileName = path.parse(file).name;
            return fileName.toLowerCase().includes(project.slug.toLowerCase()) ||
                  fileName.toLowerCase() === `${project.slug.replace(/-/g, '')}demo` ||
                  fileName.toLowerCase() === `${project.slug}demo`;
          });
          
          if (matchingImport) {
            const fileName = path.parse(matchingImport).name;
            const demoReference = fileToExportMap[fileName] || fileName;
            lines.push(`      files: ${demoReference},`);
            console.log(`CONVERTIDO objeto serializado a referencia: ${demoReference} para proyecto ${project.title}`);
          } else {
            console.warn(`No se pudo encontrar referencia para proyecto ${project.title} (${project.slug}) - tiene contenido serializado`);

            const fallbackFileName = demoFiles[0] ? path.parse(demoFiles[0]).name : 'ejemploDemo';
            const fallbackDemo = fileToExportMap[fallbackFileName] || fallbackFileName;
            lines.push(`      files: ${fallbackDemo},`);
          }
        } else {
          console.warn(`Formato de files no reconocido para proyecto ${project.title}:`, typeof project.files);
        }
      }
      
      lines.push(`      keywords: "${project.keywords}"`);
      lines.push('    }');
      
      return lines.join('\n');
    };

    const webProjects = projects.web.map(formatProject).join(',\n');
    const gameProjects = projects.games.map(formatProject).join(',\n');

    const fileContent = `${imports}
// Fallback si no existe import.meta.env
const BASE = typeof import.meta !== 'undefined' && import.meta.env
  ? import.meta.env.BASE_URL
  : '';


export const projects = {
  web: [
${webProjects}
  ],
  games: [
${gameProjects}
  ]
};
`;
    
    // Ruta al archivo projects.js
    const projectsFilePath = path.join(__dirname, '..', '..', 'src', 'data', 'projects.js');
    
    // Escribir el nuevo contenido
    await fs.writeFile(projectsFilePath, fileContent, 'utf8');
    console.log('ARCHIVO PROJECTS.JS ACTUALIZADO EXITOSAMENTE');
    console.log(`PROYECTOS GUARDADOS: web: ${projects.web.length}, games: ${projects.games.length}`);
    console.log('CONTENIDO ESCRITO (primeros 500 chars):');
    console.log(fileContent.substring(0, 500));
    
    const response = { 
      success: true, 
      message: 'Proyectos guardados correctamente'
    };

    // Incluir información de limpieza si se realizó
    if (cleanupResult) {
      response.cleanup = {
        performed: true,
        files: cleanupResult.cleanedFiles
      };
    }

    // Incluir información de backup si se realizó
    if (backupResult) {
      response.backup = {
        created: true,
        backupId: backupResult.id,
        timestamp: backupResult.timestamp,
        filesBackedUp: backupResult.files
      };
    }
    
    res.json(response);
    
  } catch (error) {
    console.error('Error al guardar proyectos:', error);
    res.status(500).json({ 
      error: 'Error interno del servidor', 
      details: error.message 
    });
  }
});

// Endpoint para subir imágenes
app.post('/api/admin/upload-image', authenticateToken, uploadImage.single('image'), async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ error: 'No se envió ninguna imagen' });
    }

    const relativePath = `img/${req.file.filename}`;
    
    res.json({
      success: true,
      message: 'Imagen subida correctamente',
      fileName: req.file.filename,
      path: relativePath,
      url: `/${relativePath}`
    });

  } catch (error) {
    console.error('Error al subir imagen:', error);
    res.status(500).json({ 
      error: 'Error interno del servidor', 
      details: error.message 
    });
  }
});

// Endpoint para subir videos
app.post('/api/admin/upload-video', authenticateToken, uploadVideo.single('video'), async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ error: 'No se envió ningún video' });
    }

    const relativePath = `vids/${req.file.filename}`;
    
    res.json({
      success: true,
      message: 'Video subido correctamente',
      fileName: req.file.filename,
      path: relativePath,
      url: `/${relativePath}`
    });

  } catch (error) {
    console.error('Error al subir video:', error);
    res.status(500).json({ 
      error: 'Error interno del servidor', 
      details: error.message 
    });
  }
});

// Endpoint para subir archivos demo
app.post('/api/admin/upload-demo', authenticateToken, uploadDemo.single('demoFile'), async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ error: 'No se envió ningún archivo' });
    }

    // Validar que el archivo subido tenga la estructura correcta
    const filePath = req.file.path;
    const fileContent = await fs.readFile(filePath, 'utf8');
    
    // Validación 1: Verificar que el archivo tenga una exportación válida
    if (!fileContent.includes('export const') && !fileContent.includes('export default')) {
      await fs.unlink(filePath);
      return res.status(400).json({ 
        error: 'El archivo debe contener una exportación válida (export const miDemo = {...})' 
      });
    }

    // Validación 2: Verificar sintaxis JavaScript básica
    try {
      new Function('return ' + fileContent.replace(/export\s+(const|default)\s+/, ''));
    } catch (syntaxError) {
      await fs.unlink(filePath);
      return res.status(400).json({ 
        error: `Error de sintaxis en el archivo demo: ${syntaxError.message}`,
        details: 'Comprueba que el código JavaScript sea válido'
      });
    }

    // Validación 3: Verificar que tenga un export válido (sin restricción de nombre)
    const exportMatch = fileContent.match(/export\s+const\s+(\w+)\s*=/);
    
    if (!exportMatch) {
      await fs.unlink(filePath);
      return res.status(400).json({ 
        error: 'El archivo debe tener un export válido (export const nombreDemo = {...})',
        details: 'Formato esperado: export const miDemo = { html: "...", css: "...", js: "..." }'
      });
    }
    
    const exportName = exportMatch[1];

    // Validación 4: Verificar estructura del objeto demo
    try {
      const demoMatch = fileContent.match(/export\s+const\s+\w+\s*=\s*(\{[\s\S]*\});?$/);
      if (demoMatch) {
        const demoObject = new Function('return ' + demoMatch[1])();
        
        // Verificar que tenga las propiedades requeridas
        if (!demoObject.html || !demoObject.css || !demoObject.js) {
          await fs.unlink(filePath);
          return res.status(400).json({ 
            error: 'El objeto demo debe tener las propiedades: html, css, js',
            details: 'Estructura esperada: { html: "...", css: "...", js: "..." }'
          });
        }
      }
    } catch (structureError) {
      await fs.unlink(filePath);
      return res.status(400).json({ 
        error: `Error en la estructura del objeto demo: ${structureError.message}`,
        details: 'Comprueba que el objeto demo tenga la estructura correcta'
      });
    }

    console.log(`DEMO SUBIDO: ${req.file.filename} con export: ${exportName}`);

    res.json({
      success: true,
      message: 'Archivo demo subido correctamente',
      fileName: req.file.filename,
      exportName: exportName,
      path: req.file.path
    });

  } catch (error) {
    console.error('Error al subir archivo demo:', error);
    res.status(500).json({ 
      error: 'Error interno del servidor', 
      details: error.message 
    });
  }
});


// ===== ENDPOINTS DE BACKUP =====

// Endpoint para listar todos los backups
app.get('/api/admin/backups', authenticateToken, async (req, res) => {
  try {
    const backups = await listBackups();
    
    console.log(`BACKUPS LISTADOS: ${backups.length} encontrados`);
    
    res.json({
      success: true,
      backups: backups,
      total: backups.length
    });

  } catch (error) {
    console.error('ERROR LISTANDO BACKUPS:', error);
    res.status(500).json({ 
      error: 'Error interno del servidor', 
      details: error.message 
    });
  }
});

// Endpoint para restaurar un proyecto desde backup
app.post('/api/admin/backups/:backupId/restore', authenticateToken, async (req, res) => {
  try {
    const { backupId } = req.params;
    
    console.log(`INICIANDO RESTAURACION DE BACKUP: ${backupId}`);
    
    const restoreResult = await restoreProjectFromBackup(backupId);
    
    res.json({
      success: true,
      message: `Proyecto restaurado desde backup ${backupId}`,
      project: restoreResult.project,
      filesRestored: restoreResult.filesRestored,
      backupInfo: {
        id: restoreResult.backupInfo.id,
        timestamp: restoreResult.backupInfo.timestamp,
        operation: restoreResult.backupInfo.operation
      }
    });

  } catch (error) {
    console.error(`ERROR RESTAURANDO BACKUP ${req.params.backupId}:`, error);
    res.status(500).json({ 
      error: 'Error interno del servidor', 
      details: error.message 
    });
  }
});

// Endpoint para eliminar un backup específico
app.delete('/api/admin/backups/:backupId', authenticateToken, async (req, res) => {
  try {
    const { backupId } = req.params;
    
    console.log(`ELIMINANDO BACKUP: ${backupId}`);
    
    const deleteResult = await deleteBackup(backupId);
    
    res.json({
      success: true,
      message: deleteResult.message
    });

  } catch (error) {
    console.error(`ERROR ELIMINANDO BACKUP ${req.params.backupId}:`, error);
    res.status(500).json({ 
      error: 'Error interno del servidor', 
      details: error.message 
    });
  }
});

// Endpoint para crear backup manual de un proyecto
app.post('/api/admin/backups/create', authenticateToken, async (req, res) => {
  try {
    const { project } = req.body;
    
    if (!project) {
      return res.status(400).json({ error: 'Los datos del proyecto son requeridos' });
    }

    const backupId = `manual-${Date.now()}-${project.slug}`;
    const backupResult = await createProjectBackup(project, backupId, 'manual');
    
    console.log(`BACKUP MANUAL CREADO: ${backupId} para proyecto: ${project.title}`);
    
    // Limpiar backups antiguos automáticamente
    try {
      await cleanupOldBackups();
    } catch (cleanupError) {
      console.warn('ERROR EN LIMPIEZA AUTOMATICA DE BACKUPS:', cleanupError);
    }

    res.json({
      success: true,
      message: `Backup manual creado para ${project.title}`,
      backup: {
        id: backupResult.id,
        timestamp: backupResult.timestamp,
        filesBackedUp: backupResult.files
      }
    });

  } catch (error) {
    console.error('ERROR CREANDO BACKUP MANUAL:', error);
    res.status(500).json({ 
      error: 'Error interno del servidor', 
      details: error.message 
    });
  }
});

// Endpoint para limpiar backups antiguos manualmente
app.post('/api/admin/backups/cleanup', authenticateToken, async (req, res) => {
  try {
    console.log('INICIANDO LIMPIEZA MANUAL DE BACKUPS');
    
    const cleanupResult = await cleanupOldBackups();
    
    res.json({
      success: true,
      message: cleanupResult.message,
      cleaned: cleanupResult.cleaned
    });

  } catch (error) {
    console.error('ERROR EN LIMPIEZA MANUAL DE BACKUPS:', error);
    res.status(500).json({ 
      error: 'Error interno del servidor', 
      details: error.message 
    });
  }
});

// Endpoint health check
app.get('/api/health', (req, res) => {
  res.json({ status: 'OK', message: 'Servidor de administración funcionando' });
});

// ===== ENDPOINT PÚBLICO PARA CARGAR PROYECTOS =====

// Endpoint público para cargar proyectos (sin autenticación)
app.get('/api/projects', async (req, res) => {
  try {
    const projectsFilePath = path.join(__dirname, '..', '..', 'src', 'data', 'projects.js');
    
    // Leer el archivo de proyectos
    const fileContent = await fs.readFile(projectsFilePath, 'utf8');
    
    // Configurar headers para evitar cache en desarrollo
    res.set({
      'Cache-Control': 'no-cache, no-store, must-revalidate',
      'Pragma': 'no-cache',
      'Expires': '0',
      'Content-Type': 'application/javascript'
    });
    
    // Devolver el contenido del archivo tal como está
    res.send(fileContent);
    
  } catch (error) {
    console.error('ERROR AL SERVIR PROYECTOS PÚBLICAMENTE:', error);
    res.status(500).json({ 
      error: 'Error interno del servidor', 
      details: error.message 
    });
  }
});




app.listen(PORT, () => {
  console.log('\n========================================');
  console.log('SERVIDOR DE ADMINISTRACIÓN INICIADO');
  console.log('========================================');
  console.log(`URL del servidor: http://localhost:${PORT}`);
  console.log(`Panel de admin: http://localhost:5173/Admin1997`);
  console.log(`API endpoint: http://localhost:${PORT}/api/admin/save-projects`);
  console.log('========================================');
  console.log('Para detener el servidor: Ctrl+C');
  console.log('FUNCIONANDO CORRECTAMENTE');
  console.log('========================================\n');
}).on('error', (err) => {
  if (err.code === 'EADDRINUSE') {
    console.log('\n========================================');
    console.log('EL SERVIDOR YA ESTA FUNCIONANDO');
    console.log('========================================');
    console.log(`Puerto ${PORT} ya está en uso`);
    console.log(` http://localhost:5173/Admin1997`);
    console.log('========================================');
    console.log('Verificar estado: npm run check-server');
    console.log('Para detener: Ctrl+C en la terminal del servidor');
    console.log('========================================\n');
  } else {
    console.error('ERROR DEL SERVIDOR:', err);
  }
});

export default app;
