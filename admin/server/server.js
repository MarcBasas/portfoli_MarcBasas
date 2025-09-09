import express from 'express';
import { promises as fs } from 'fs';
import path from 'path';
import cors from 'cors';
import multer from 'multer';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { fileURLToPath } from 'url';
import { config } from 'dotenv';

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
app.use('/uploads', express.static(path.join(__dirname, '..', '..', 'public')));

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

// ===== FUNCIONES DE BACKUP =====

// Función para crear backup de archivos multimedia antes de eliminarlos
const backupProjectFiles = async (projectData) => {
  const timestamp = Date.now();
  const backupDir = path.join(__dirname, '..', 'backups', 'files', `${timestamp}`);
  const projectBackupDir = path.join(backupDir, `project-${projectData.slug}`);
  
  const backedUpFiles = {
    images: [],
    videos: [],
    demos: [],
    posters: []
  };

  try {
    console.log(`CREANDO BACKUP DE ARCHIVOS PARA: ${projectData.title} (${projectData.slug})`);
    
    // Crear estructura de directorios
    await fs.mkdir(path.join(projectBackupDir, 'images'), { recursive: true });
    await fs.mkdir(path.join(projectBackupDir, 'videos'), { recursive: true });
    await fs.mkdir(path.join(projectBackupDir, 'posters'), { recursive: true });
    await fs.mkdir(path.join(projectBackupDir, 'demos'), { recursive: true });

    // Backup de imagen de preview
    if (projectData.previewImage) {
      const imagePath = extractRealPath(projectData.previewImage);
      const fullImagePath = path.join(__dirname, '..', '..', 'public', imagePath);
      const backupImagePath = path.join(projectBackupDir, 'images', path.basename(fullImagePath));
      
      try {
        await fs.access(fullImagePath);
        await fs.copyFile(fullImagePath, backupImagePath);
        backedUpFiles.images.push(path.basename(fullImagePath));
        console.log(`BACKUP IMAGEN: ${path.basename(fullImagePath)}`);
      } catch (error) {
        console.log(`Imagen no encontrada para backup: ${imagePath}`);
      }
    }

    // Backup de video
    if (projectData.video) {
      const videoPath = extractRealPath(projectData.video);
      const fullVideoPath = path.join(__dirname, '..', '..', 'public', videoPath);
      const backupVideoPath = path.join(projectBackupDir, 'videos', path.basename(fullVideoPath));
      
      try {
        await fs.access(fullVideoPath);
        await fs.copyFile(fullVideoPath, backupVideoPath);
        backedUpFiles.videos.push(path.basename(fullVideoPath));
        console.log(`BACKUP VIDEO: ${path.basename(fullVideoPath)}`);
      } catch (error) {
        console.log(`Video no encontrado para backup: ${videoPath}`);
      }
    }

    // Backup de poster
    if (projectData.poster) {
      const posterPath = extractRealPath(projectData.poster);
      const fullPosterPath = path.join(__dirname, '..', '..', 'public', posterPath);
      const backupPosterPath = path.join(projectBackupDir, 'posters', path.basename(fullPosterPath));
      
      try {
        await fs.access(fullPosterPath);
        await fs.copyFile(fullPosterPath, backupPosterPath);
        backedUpFiles.posters.push(path.basename(fullPosterPath));
        console.log(`BACKUP POSTER: ${path.basename(fullPosterPath)}`);
      } catch (error) {
        console.log(`Poster no encontrado para backup: ${posterPath}`);
      }
    }

    // Backup de demo asociado
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
        const backupDemoPath = path.join(projectBackupDir, 'demos', demoFile);
        
        try {
          await fs.access(demoPath);
          await fs.copyFile(demoPath, backupDemoPath);
          backedUpFiles.demos.push(demoFile);
          console.log(`BACKUP DEMO: ${demoFile}`);
          break;
        } catch (error) {
          // Archivo no existe, continuar con el siguiente
        }
      }
    }

    // Crear metadata del backup
    const metadata = {
      timestamp: timestamp,
      project: {
        title: projectData.title,
        slug: projectData.slug,
        category: projectData.category,
        id: projectData.id
      },
      files: backedUpFiles,
      backupDate: new Date().toISOString()
    };

    const metadataPath = path.join(backupDir, 'metadata.json');
    await fs.writeFile(metadataPath, JSON.stringify(metadata, null, 2));

    console.log(`BACKUP DE ARCHIVOS COMPLETADO: ${backupDir}`);
    return {
      backupDir: backupDir,
      files: backedUpFiles,
      metadata: metadata
    };

  } catch (error) {
    console.error('ERROR AL CREAR BACKUP DE ARCHIVOS:', error);
    return {
      backupDir: null,
      files: backedUpFiles,
      error: error.message
    };
  }
};

// Función para limpiar backups de archivos antiguos (max 5 backups de archivos)
const cleanupOldFileBackups = async () => {
  const MAX_FILE_BACKUPS = 5;
  
  try {
    const fileBackupsDir = path.join(__dirname, '..', 'backups', 'files');

    try {
      await fs.access(fileBackupsDir);
    } catch (error) {
      // No existe directorio de backups de archivos, no hay nada que limpiar
      return;
    }
    
    const backupFolders = await fs.readdir(fileBackupsDir);
    const timestampFolders = backupFolders.filter(folder => /^\d+$/.test(folder));
    
    if (timestampFolders.length <= MAX_FILE_BACKUPS) {
      return; 
    }
    
    // Ordenar por timestamp (más reciente primero)
    timestampFolders.sort((a, b) => parseInt(b) - parseInt(a));
    
    // Eliminar los backups más antiguos
    const foldersToDelete = timestampFolders.slice(MAX_FILE_BACKUPS);
    
    for (const folder of foldersToDelete) {
      const folderPath = path.join(fileBackupsDir, folder);
      
      // Eliminar recursivamente todo el contenido del folder
      const deleteFolderRecursive = async (folderPath) => {
        const files = await fs.readdir(folderPath);
        for (const file of files) {
          const filePath = path.join(folderPath, file);
          const stat = await fs.stat(filePath);
          if (stat.isDirectory()) {
            await deleteFolderRecursive(filePath);
          } else {
            await fs.unlink(filePath);
          }
        }
        await fs.rmdir(folderPath);
      };
      
      await deleteFolderRecursive(folderPath);
      console.log(`BACKUP DE ARCHIVOS ANTIGUO ELIMINADO: ${folder}`);
    }
    
    if (foldersToDelete.length > 0) {
      console.log(`LIMPIEZA DE BACKUPS DE ARCHIVOS COMPLETADA. ELIMINADOS: ${foldersToDelete.length}, CONSERVADOS: ${Math.min(timestampFolders.length, MAX_FILE_BACKUPS)}`);
    }
    
  } catch (error) {
    console.error('ERROR AL LIMPIAR BACKUPS DE ARCHIVOS ANTIGUOS:', error);
  }
};

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

    // PRIMERO: Crear backup de todos los archivos
    const backupResult = await backupProjectFiles(projectData);
    
    // SEGUNDO: Eliminar los archivos originales
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

    // TERCERO: Limpiar backups de archivos antiguos
    await cleanupOldFileBackups();

    console.log('Limpieza completada:', cleanedFiles);
    return {
      cleanedFiles: cleanedFiles,
      backupResult: backupResult
    };

  } catch (error) {
    console.error('Error durante la limpieza:', error);
    return {
      cleanedFiles: cleanedFiles,
      error: error.message
    };
  }
};

// Función para limpiar backups antiguos (max 10)
const cleanupOldBackups = async () => {
  const MAX_BACKUPS = 10;
  
  try {
    const backupsDir = path.join(__dirname, '..', 'backups', 'projects');

    try {
      await fs.access(backupsDir);
    } catch (error) {
      await fs.mkdir(backupsDir, { recursive: true });
      console.log(`DIRECTORIO DE BACKUPS CREADO: ${backupsDir}`);
      return;
    }
    
    const files = await fs.readdir(backupsDir);
    const backupFiles = files.filter(file => file.startsWith('projects.backup.') && file.endsWith('.js'));
    
    if (backupFiles.length <= MAX_BACKUPS) {
      return; 
    }
    
    // Ordenar por timestamp (más reciente primero)
    backupFiles.sort((a, b) => {
      const timestampA = parseInt(a.match(/projects\.backup\.(\d+)\.js/)[1]);
      const timestampB = parseInt(b.match(/projects\.backup\.(\d+)\.js/)[1]);
      return timestampB - timestampA; // Orden descendente
    });
    
    // Eliminar los backups más antiguos
    const filesToDelete = backupFiles.slice(MAX_BACKUPS);
    
    for (const file of filesToDelete) {
      const filePath = path.join(backupsDir, file);
      await fs.unlink(filePath);
      console.log(`BACKUP ANTIGUO ELIMINADO: ${file}`);
    }
    
    if (filesToDelete.length > 0) {
      console.log(`LIMPIEZA DE BACKUPS COMPLETADA. ELIMINADOS: ${filesToDelete.length}, CONSERVADOS: ${Math.min(backupFiles.length, MAX_BACKUPS)}`);
    }
    
  } catch (error) {
    console.error('ERROR AL LIMPIAR BACKUPS ANTIGUOS:', error);
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
  try {
    const { projects, deletedProject } = req.body;
    
    if (!projects) {
      return res.status(400).json({ error: 'Los datos de proyectos son requeridos' });
    }

    // Si se está eliminando un proyecto, limpiar sus archivos automáticamente
    let cleanupResult = null;
    if (deletedProject) {
      console.log(`Proyecto eliminado detectado: ${deletedProject.title}`);
      cleanupResult = await cleanupProjectFiles(deletedProject);
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
    
    const imports = demoFiles
      .map(file => {
        const fileName = path.parse(file).name; // nombre sin extensión
        return `import { ${fileName} } from './demos/${fileName}';`;
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
      
      // Limpiar rutas de imágenes manteniendo BASE +
      const cleanImagePath = project.previewImage.replace(/^.*\/img\//, 'img/');
      lines.push(`      previewImage: BASE + "${cleanImagePath}",`);
      
      if (project.video) {
        const cleanVideoPath = project.video.replace(/^.*\/vids\//, 'vids/');
        lines.push(`      video: BASE + "${cleanVideoPath}",`);
      }
      
      if (project.poster) {
        const cleanPosterPath = project.poster.includes('/vids/') 
          ? project.poster.replace(/^.*\/vids\//, 'vids/')
          : project.poster.replace(/^.*\/img\//, 'img/');
        lines.push(`      poster: BASE + "${cleanPosterPath}",`);
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
            const demoReference = path.parse(matchingImport).name;
            lines.push(`      files: ${demoReference},`);
            console.log(`CONVERTIDO objeto serializado a referencia: ${demoReference} para proyecto ${project.title}`);
          } else {
            console.warn(`No se pudo encontrar referencia para proyecto ${project.title} (${project.slug}) - tiene contenido serializado`);

            const fallbackDemo = demoFiles[0] ? path.parse(demoFiles[0]).name : 'ejemploDemo';
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
    
    // Crear backup del archivo actual en la nueva ubicación
    const backupPath = path.join(__dirname, '..', 'backups', 'projects', `projects.backup.${Date.now()}.js`);
    
    try {
      const currentContent = await fs.readFile(projectsFilePath, 'utf8');
      
      // Asegurar que el directorio de backups existe
      const backupDir = path.dirname(backupPath);
      await fs.mkdir(backupDir, { recursive: true });
      
      await fs.writeFile(backupPath, currentContent);
      console.log(`BACKUP CREADO: ${path.basename(backupPath)}`);
      
      // Limpiar backups antiguos después de crear el nuevo
      await cleanupOldBackups();
      
    } catch (error) {
      console.log('No se pudo crear backup, archivo probablemente no existe:', error.message);
    }
    
    // Escribir el nuevo contenido
    await fs.writeFile(projectsFilePath, fileContent, 'utf8');
    
    const response = { 
      success: true, 
      message: 'Proyectos guardados correctamente',
      backupCreated: backupPath
    };

    // Incluir información de limpieza si se realizó
    if (cleanupResult) {
      response.cleanup = {
        performed: true,
        files: cleanupResult.cleanedFiles,
        backupCreated: cleanupResult.backupResult.backupDir
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
      url: `/uploads/${relativePath}`
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
      url: `/uploads/${relativePath}`
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

// Endpoint para obtener información de backups
app.get('/api/admin/backups', authenticateToken, async (req, res) => {
  try {
    const BACKUPS_DIR = path.join(__dirname, '..', 'backups');
    const FILES_BACKUPS_DIR = path.join(BACKUPS_DIR, 'files');
    const PROJECTS_BACKUPS_DIR = path.join(BACKUPS_DIR, 'projects');
    
    const backupsInfo = {
      projects: [],
      files: [],
      stats: {
        totalProjectsBackups: 0,
        totalFilesBackups: 0,
        totalSize: 0
      }
    };

    // Obtener backups de projects.js
    try {
      const projectFiles = await fs.readdir(PROJECTS_BACKUPS_DIR);
      const backupFiles = projectFiles.filter(file => file.startsWith('projects.backup.') && file.endsWith('.js'));
      
      // Ordenar por timestamp (más reciente primero)
      backupFiles.sort((a, b) => {
        const timestampA = parseInt(a.match(/projects\.backup\.(\d+)\.js/)[1]);
        const timestampB = parseInt(b.match(/projects\.backup\.(\d+)\.js/)[1]);
        return timestampB - timestampA;
      });

      // Tomar solo los 10 más recientes
      const recentProjectBackups = backupFiles.slice(0, 10);
      
      for (const file of recentProjectBackups) {
        const timestamp = file.match(/projects\.backup\.(\d+)\.js/)[1];
        const filePath = path.join(PROJECTS_BACKUPS_DIR, file);
        const stats = await fs.stat(filePath);
        
        backupsInfo.projects.push({
          filename: file,
          timestamp: parseInt(timestamp),
          date: new Date(parseInt(timestamp)).toISOString(),
          size: stats.size,
          sizeFormatted: formatBytes(stats.size)
        });
      }
      
      backupsInfo.stats.totalProjectsBackups = backupFiles.length;
    } catch (error) {
      console.log('No se pudo leer directorio de backups de projects:', error.message);
    }

    // Obtener backups de archivos multimedia
    try {
      const folders = await fs.readdir(FILES_BACKUPS_DIR);
      const timestampFolders = folders.filter(folder => /^\d+$/.test(folder));
      
      // Ordenar por timestamp (más reciente primero)
      timestampFolders.sort((a, b) => parseInt(b) - parseInt(a));
      
      // Tomar solo los 5 más recientes
      const recentFileBackups = timestampFolders.slice(0, 5);
      
      for (const folder of recentFileBackups) {
        const folderPath = path.join(FILES_BACKUPS_DIR, folder);
        const metadataPath = path.join(folderPath, 'metadata.json');
        
        try {
          const metadataContent = await fs.readFile(metadataPath, 'utf8');
          const metadata = JSON.parse(metadataContent);
          
          // Calcular tamaño del backup
          const folderSize = await calculateFolderSize(folderPath);
          
          backupsInfo.files.push({
            timestamp: parseInt(folder),
            date: new Date(parseInt(folder)).toISOString(),
            project: metadata.project,
            files: metadata.files,
            totalFiles: metadata.files.images.length + metadata.files.videos.length + metadata.files.posters.length + metadata.files.demos.length,
            size: folderSize,
            sizeFormatted: formatBytes(folderSize)
          });
          
          backupsInfo.stats.totalSize += folderSize;
        } catch (error) {
          console.log(`No se pudo leer metadata de ${folder}:`, error.message);
        }
      }
      
      backupsInfo.stats.totalFilesBackups = timestampFolders.length;
    } catch (error) {
      console.log('No se pudo leer directorio de backups de archivos:', error.message);
    }

    // Formatear tamaño total
    backupsInfo.stats.totalSizeFormatted = formatBytes(backupsInfo.stats.totalSize);

    res.json({
      success: true,
      data: backupsInfo
    });

  } catch (error) {
    console.error('Error al obtener información de backups:', error);
    res.status(500).json({ 
      error: 'Error interno del servidor', 
      details: error.message 
    });
  }
});

// Endpoint para descargar backup de projects.js
app.post('/api/admin/download-projects-backup', authenticateToken, async (req, res) => {
  try {
    const { filename } = req.body;
    
    if (!filename) {
      return res.status(400).json({ error: 'Nombre de archivo requerido' });
    }

    const filePath = path.join(__dirname, '..', 'backups', 'projects', filename);
    
    // Verificar que el archivo existe
    try {
      await fs.access(filePath);
    } catch (error) {
      return res.status(404).json({ error: 'Archivo de backup no encontrado' });
    }

    // Enviar el archivo
    res.download(filePath, filename);

  } catch (error) {
    console.error('Error al descargar backup de projects:', error);
    res.status(500).json({ 
      error: 'Error interno del servidor', 
      details: error.message 
    });
  }
});

// Endpoint para descargar backup de archivos multimedia
app.post('/api/admin/download-files-backup', authenticateToken, async (req, res) => {
  try {
    const { timestamp } = req.body;
    
    if (!timestamp) {
      return res.status(400).json({ error: 'Timestamp requerido' });
    }

    const backupDir = path.join(__dirname, '..', 'backups', 'files', timestamp.toString());
    
    // Verificar que el directorio existe
    try {
      await fs.access(backupDir);
    } catch (error) {
      return res.status(404).json({ error: 'Backup de archivos no encontrado' });
    }

    // Crear un archivo ZIP temporal con el contenido del backup
    const archiver = await import('archiver');
    const archive = archiver.default('zip', { zlib: { level: 9 } });
    
    // Configurar headers para descarga
    res.attachment(`backup-files-${timestamp}.zip`);
    archive.pipe(res);

    // Añadir todo el contenido del directorio al ZIP
    archive.directory(backupDir, false);

    // Finalizar el archivo ZIP
    await archive.finalize();

  } catch (error) {
    console.error('Error al descargar backup de archivos:', error);
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


// ===== FUNCIONES AUXILIARES =====

// Función auxiliar para calcular tamaño de carpeta
const calculateFolderSize = async (folderPath) => {
  let totalSize = 0;
  
  const calculateSize = async (dir) => {
    const files = await fs.readdir(dir);
    for (const file of files) {
      const filePath = path.join(dir, file);
      const stat = await fs.stat(filePath);
      if (stat.isDirectory()) {
        await calculateSize(filePath);
      } else {
        totalSize += stat.size;
      }
    }
  };
  
  await calculateSize(folderPath);
  return totalSize;
};

// Función auxiliar para formatear bytes
const formatBytes = (bytes) => {
  if (bytes === 0) return '0 Bytes';
  const k = 1024;
  const sizes = ['Bytes', 'KB', 'MB', 'GB'];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
};


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
