import express from 'express';
import { promises as fs } from 'fs';
import path from 'path';
import cors from 'cors';
import multer from 'multer';
import { fileURLToPath } from 'url';

// Para obtener __dirname en ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = 3001;

// Configuración de multer para diferentes tipos de archivos
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

// Configuraciones específicas para cada tipo de archivo
const imageStorage = createStorage('img');
const videoStorage = createStorage('vids');
const demoStorage = multer.diskStorage({
  destination: (req, file, cb) => {
    const uploadDir = path.join(__dirname, '..', '..', 'src', 'data', 'demos');
    cb(null, uploadDir);
  },
  filename: (req, file, cb) => {
    const slug = req.body.slug || 'demo';
    cb(null, `${slug}-demo.js`);
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

// Middlewares
app.use(cors());
app.use(express.json());
app.use('/uploads', express.static(path.join(__dirname, '..', '..', 'public')));

// Función para detectar archivos demo disponibles
const getAvailableDemos = async () => {
  try {
    const demosDir = path.join(__dirname, '..', '..', 'src', 'data', 'demos');
    const files = await fs.readdir(demosDir);
    const demoFiles = files.filter(file => file.endsWith('.js'));
    
    const demos = {};
    for (const file of demoFiles) {
      const fileName = path.basename(file, '.js');
      
      // Manejar casos específicos conocidos y mantener nombres originales
      let varName;
      if (fileName === 'crealab-demo') {
        varName = 'crealabDemo';
      } else if (fileName === 'cinevision-demo') {
        varName = 'cinevisionDemo';
      } else if (fileName === 'portfolio-demo') {
        varName = 'portfolioDemo';
      } else {
        // Para archivos nuevos, convertir a camelCase
        varName = fileName
          .split('-')
          .map((word, index) => {
            if (index === 0) return word.toLowerCase();
            return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
          })
          .join('');
      }
      
      demos[fileName] = {
        fileName: file,
        varName: varName,
        importPath: `./demos/${fileName}`
      };
    }
    
    return demos;
  } catch (error) {
    console.error('Error al leer archivos demo:', error);
    return {
      'cinevision-demo': { fileName: 'cinevision-demo.js', varName: 'cinevisionDemo', importPath: './demos/cinevision-demo' },
      'crealab-demo': { fileName: 'crealab-demo.js', varName: 'crealabDemo', importPath: './demos/crealab-demo' },
      'portfolio-demo': { fileName: 'portfolio-demo.js', varName: 'portfolioDemo', importPath: './demos/portfolio-demo' }
    };
  }
};

// Función para generar el contenido del archivo projects.js
const generateProjectsFileContent = async (data) => {
  const availableDemos = await getAvailableDemos();
  
  // Generar imports dinámicamente con manejo de errores
  const imports = Object.values(availableDemos).map(demo => {
    // Verificar que el archivo demo existe y es válido antes de crear el import
    try {
      return `import { ${demo.varName} } from '${demo.importPath}';`;
    } catch (error) {
      console.warn(`Demo ${demo.varName} no se pudo importar:`, error.message);
      return `// ${demo.varName} - Error en importación: ${error.message}`;
    }
  }).join('\n');

  const baseConfig = [
    "// Fallback si no existe import.meta.env",
    "const BASE = typeof import.meta !== 'undefined' && import.meta.env",
    "  ? import.meta.env.BASE_URL",
    "  : '';",
    ""
  ].join('\n');

  const formatProject = (project) => {
    const lines = [
      '    {',
      `      id: ${project.id},`
    ];

    if (project.category) lines.push(`      category: "${project.category}",`);
    lines.push(`      title: "${project.title}",`);
    lines.push(`      titleMin: "${project.titleMin}",`);
    lines.push(`      slug: "${project.slug}",`);
    lines.push(`      finished: ${project.finished},`);
    lines.push(`      description:"${project.description}",`);
    
    // Limpiar las rutas de las imágenes
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
    
    // Manejar archivos demo específicos dinámicamente con validación
    if (project.files || (project.category === 'demo')) {
      try {
        // Buscar si existe un archivo demo para este proyecto
        const demoKey = Object.keys(availableDemos).find(key => 
          key === project.slug || 
          key === project.slug.replace(/-/g, '') ||
          availableDemos[key].varName.toLowerCase() === project.slug.toLowerCase()
        );
        
        if (demoKey && availableDemos[demoKey]) {
          lines.push(`      files: ${availableDemos[demoKey].varName},`);
        }
      } catch (error) {
        console.warn(`Error al asignar demo al proyecto ${project.slug}:`, error.message);
        // No agregar el campo files si hay error, pero continuar con el proyecto
      }
    }
    
    lines.push(`      keywords: "${project.keywords}"`);
    lines.push('    }');

    return lines.join('\n');
  };

  const webProjects = data.web.map(formatProject).join(',\n');
  const gameProjects = data.games.map(formatProject).join(',\n');

  return `${imports}
${baseConfig}

export const projects = {
  web: [
${webProjects}
  ],
  games: [
${gameProjects}
  ]
};
`;
};

// Endpoint para guardar proyectos
app.post('/api/admin/save-projects', async (req, res) => {
  try {
    const { projects } = req.body;
    
    if (!projects) {
      return res.status(400).json({ error: 'Los datos de proyectos son requeridos' });
    }

    // Generar el contenido del archivo
    const fileContent = await generateProjectsFileContent(projects);
    
    // Ruta al archivo projects.js
    const projectsFilePath = path.join(__dirname, '..', '..', 'src', 'data', 'projects.js');
    
    // Crear backup del archivo actual
    const backupPath = path.join(__dirname, '..', '..', 'src', 'data', `projects.backup.${Date.now()}.js`);
    
    try {
      const currentContent = await fs.readFile(projectsFilePath, 'utf8');
      await fs.writeFile(backupPath, currentContent);
    } catch (error) {
      console.log('No se pudo crear backup, archivo probablemente no existe:', error.message);
    }
    
    // Escribir el nuevo contenido
    await fs.writeFile(projectsFilePath, fileContent, 'utf8');
    
    res.json({ 
      success: true, 
      message: 'Proyectos guardados correctamente',
      backupCreated: backupPath
    });
    
  } catch (error) {
    console.error('Error al guardar proyectos:', error);
    res.status(500).json({ 
      error: 'Error interno del servidor', 
      details: error.message 
    });
  }
});

// Endpoint para subir imágenes
app.post('/api/admin/upload-image', uploadImage.single('image'), async (req, res) => {
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
app.post('/api/admin/upload-video', uploadVideo.single('video'), async (req, res) => {
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
app.post('/api/admin/upload-demo', uploadDemo.single('demoFile'), async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ error: 'No se envió ningún archivo' });
    }

    const { slug } = req.body;
    
    if (!slug) {
      return res.status(400).json({ error: 'El slug del proyecto es requerido' });
    }

    // Validar que el archivo subido tenga la estructura correcta
    const filePath = req.file.path;
    const fileContent = await fs.readFile(filePath, 'utf8');
    
    // Validación 1: Verificar que el archivo tenga una exportación válida
    if (!fileContent.includes('export const') && !fileContent.includes('export default')) {
      await fs.unlink(filePath);
      return res.status(400).json({ 
        error: 'L\'arxiu ha de contenir una exportació vàlida (export const elMeuDemo = {...})' 
      });
    }

    // Validación 2: Verificar sintaxis JavaScript básica
    try {
      // Intentar evaluar la sintaxis del archivo
      new Function('return ' + fileContent.replace(/export\s+(const|default)\s+/, ''));
    } catch (syntaxError) {
      await fs.unlink(filePath);
      return res.status(400).json({ 
        error: `Error de sintaxi a l'arxiu demo: ${syntaxError.message}`,
        details: 'Comprova que el codi JavaScript sigui vàlid'
      });
    }

    // Validación 3: Verificar estructura del objeto demo
    try {
      const demoMatch = fileContent.match(/export\s+const\s+\w+\s*=\s*(\{[\s\S]*\});?$/);
      if (demoMatch) {
        const demoObject = new Function('return ' + demoMatch[1])();
        
        // Verificar que tenga las propiedades requeridas
        if (!demoObject.html || !demoObject.css || !demoObject.js) {
          await fs.unlink(filePath);
          return res.status(400).json({ 
            error: 'L\'objecte demo ha de tenir les propietats: html, css, js',
            details: 'Estructura esperada: { html: "...", css: "...", js: "..." }'
          });
        }
      }
    } catch (structureError) {
      await fs.unlink(filePath);
      return res.status(400).json({ 
        error: `Error en l'estructura de l'objecte demo: ${structureError.message}`,
        details: 'Comprova que l\'objecte demo tingui la estructura correcta'
      });
    }

    res.json({
      success: true,
      message: 'Archivo demo subido correctamente',
      fileName: req.file.filename,
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

// Endpoint para obtener demos disponibles
app.get('/api/admin/demos', async (req, res) => {
  try {
    const demos = await getAvailableDemos();
    res.json({ demos });
  } catch (error) {
    console.error('Error al obtener demos:', error);
    res.status(500).json({ 
      error: 'Error al obtener demos disponibles', 
      details: error.message 
    });
  }
});

// Endpoint de salud
app.get('/api/health', (req, res) => {
  res.json({ status: 'OK', message: 'Servidor de administración funcionando' });
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
    console.log('⚠️EL SERVIDOR YA ESTÁ FUNCIONANDO');
    console.log('========================================');
    console.log(`Puerto ${PORT} ya está en uso`);
    console.log(` http://localhost:5173/Admin1997`);
    console.log('========================================');
    console.log('Verificar estado: npm run check-server');
    console.log('Para detener: Ctrl+C en la terminal del servidor');
    console.log('========================================\n');
  } else {
    console.error('❌ Error del servidor:', err);
  }
});

export default app;