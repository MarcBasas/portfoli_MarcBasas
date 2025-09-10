import { promises as fs } from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Configuración del sistema de backup
const BACKUP_CONFIG = {
  maxBackups: 10,           // Máximo número de backups a mantener
  maxFullBackups: 5,        // Máximo número de backups con archivos completos
  backupDir: path.join(__dirname, '..', 'backups'),
  projectsBackupDir: path.join(__dirname, '..', 'backups', 'projects'),
  filesBackupDir: path.join(__dirname, '..', 'backups', 'files'),
  compressedBackupDir: path.join(__dirname, '..', 'backups', 'compressed')
};

// Crear directorios de backup si no existen
const initBackupDirs = async () => {
  const dirs = [
    BACKUP_CONFIG.backupDir,
    BACKUP_CONFIG.projectsBackupDir,
    BACKUP_CONFIG.filesBackupDir,
    BACKUP_CONFIG.compressedBackupDir
  ];

  for (const dir of dirs) {
    try {
      await fs.access(dir);
    } catch {
      await fs.mkdir(dir, { recursive: true });
      console.log(`DIRECTORIO DE BACKUP CREADO: ${path.basename(dir)}`);
    }
  }
};

// Generar nombre único para backup
const generateBackupId = () => {
  const now = new Date();
  const timestamp = now.toISOString().replace(/[:.]/g, '-').slice(0, -5);
  return `backup-${timestamp}`;
};

// Copiar archivo de forma segura
const copyFile = async (src, dest) => {
  try {
    await fs.access(src);
    await fs.mkdir(path.dirname(dest), { recursive: true });
    await fs.copyFile(src, dest);
    return true;
  } catch (error) {
    console.warn(`NO SE PUDO COPIAR ARCHIVO: ${src} -> ${error.message}`);
    return false;
  }
};

// Extraer path real de un string que puede tener BASE +
const extractRealPath = (pathString) => {
  if (!pathString) return '';
  
  if (pathString.includes('BASE + "')) {
    return pathString.split('BASE + "')[1].replace(/"/g, '');
  }
  return pathString;
};

// Crear backup completo de un proyecto (metadatos + archivos)
const createProjectBackup = async (projectData, backupId, operation = 'delete') => {
  await initBackupDirs();
  
  const backupInfo = {
    id: backupId,
    timestamp: new Date().toISOString(),
    operation: operation, // 'delete', 'update', 'manual'
    project: {
      ...projectData,
      originalFiles: {} // Guarda las rutas originales de los archivos
    },
    files: {
      images: [],
      videos: [],
      demos: [],
      posters: []
    }
  };

  console.log(`CREANDO BACKUP: ${backupId} para proyecto: ${projectData.title} (${operation})`);

  try {
    // Backup de archivos multimedia
    const publicDir = path.join(__dirname, '..', '..', 'public');
    const demosDir = path.join(__dirname, '..', '..', 'src', 'data', 'demos');
    
    // Backup imagen de preview
    if (projectData.previewImage) {
      const imagePath = extractRealPath(projectData.previewImage);
      const srcPath = path.join(publicDir, imagePath);
      const destPath = path.join(BACKUP_CONFIG.filesBackupDir, backupId, imagePath);
      
      if (await copyFile(srcPath, destPath)) {
        backupInfo.files.images.push(imagePath);
        backupInfo.project.originalFiles.previewImage = srcPath;
      }
    }

    // Backup video
    if (projectData.video) {
      const videoPath = extractRealPath(projectData.video);
      const srcPath = path.join(publicDir, videoPath);
      const destPath = path.join(BACKUP_CONFIG.filesBackupDir, backupId, videoPath);
      
      if (await copyFile(srcPath, destPath)) {
        backupInfo.files.videos.push(videoPath);
        backupInfo.project.originalFiles.video = srcPath;
      }
    }

    // Backup poster
    if (projectData.poster) {
      const posterPath = extractRealPath(projectData.poster);
      const srcPath = path.join(publicDir, posterPath);
      const destPath = path.join(BACKUP_CONFIG.filesBackupDir, backupId, posterPath);
      
      if (await copyFile(srcPath, destPath)) {
        backupInfo.files.posters.push(posterPath);
        backupInfo.project.originalFiles.poster = srcPath;
      }
    }

    // Backup demo asociado
    if (projectData.category === 'demo' || projectData.files) {
      const slug = projectData.slug;
      const possibleDemoFiles = [
        `${slug}-demo.js`,
        `${slug.replace(/-/g, '')}-demo.js`,
        `${slug}Demo.js`,
        `${slug.replace(/-/g, '')}Demo.js`
      ];

      for (const demoFile of possibleDemoFiles) {
        const srcPath = path.join(demosDir, demoFile);
        const destPath = path.join(BACKUP_CONFIG.filesBackupDir, backupId, 'demos', demoFile);
        
        if (await copyFile(srcPath, destPath)) {
          backupInfo.files.demos.push(demoFile);
          backupInfo.project.originalFiles.demo = srcPath;
          break;
        }
      }
    }

    // Guardar metadatos del backup
    const backupMetadataPath = path.join(BACKUP_CONFIG.projectsBackupDir, `${backupId}.json`);
    await fs.writeFile(backupMetadataPath, JSON.stringify(backupInfo, null, 2), 'utf8');

    console.log(`BACKUP CREADO EXITOSAMENTE: ${backupId}`);
    console.log(`- Imagenes: ${backupInfo.files.images.length}`);
    console.log(`- Videos: ${backupInfo.files.videos.length}`);
    console.log(`- Posters: ${backupInfo.files.posters.length}`);
    console.log(`- Demos: ${backupInfo.files.demos.length}`);

    return backupInfo;

  } catch (error) {
    console.error(`ERROR CREANDO BACKUP ${backupId}:`, error);
    throw error;
  }
};

// Listar todos los backups disponibles
const listBackups = async () => {
  await initBackupDirs();
  
  try {
    const backupFiles = await fs.readdir(BACKUP_CONFIG.projectsBackupDir);
    const backups = [];

    for (const file of backupFiles) {
      if (file.endsWith('.json')) {
        try {
          const backupPath = path.join(BACKUP_CONFIG.projectsBackupDir, file);
          const backupData = JSON.parse(await fs.readFile(backupPath, 'utf8'));
          
          // Verificar si tiene archivos disponibles
          const filesDir = path.join(BACKUP_CONFIG.filesBackupDir, backupData.id);
          let hasFiles = false;
          try {
            await fs.access(filesDir);
            hasFiles = true;
          } catch {
            hasFiles = false;
          }

          backups.push({
            ...backupData,
            hasFiles: hasFiles
          });
        } catch (error) {
          console.warn(`BACKUP CORRUPTO: ${file} - ${error.message}`);
        }
      }
    }

    // Ordenar por timestamp (más reciente primero)
    backups.sort((a, b) => new Date(b.timestamp) - new Date(a.timestamp));

    return backups;
  } catch (error) {
    console.error('ERROR LISTANDO BACKUPS:', error);
    return [];
  }
};

// Restaurar proyecto desde backup
const restoreProjectFromBackup = async (backupId) => {
  await initBackupDirs();

  try {
    // Cargar metadatos del backup
    const backupMetadataPath = path.join(BACKUP_CONFIG.projectsBackupDir, `${backupId}.json`);
    const backupData = JSON.parse(await fs.readFile(backupMetadataPath, 'utf8'));

    console.log(`RESTAURANDO PROYECTO DESDE BACKUP: ${backupId}`);
    console.log(`- Proyecto: ${backupData.project.title}`);

    // Verificar si tiene archivos de respaldo
    const filesDir = path.join(BACKUP_CONFIG.filesBackupDir, backupId);
    let filesRestored = {
      images: [],
      videos: [],
      demos: [],
      posters: []
    };

    try {
      await fs.access(filesDir);
      
      const publicDir = path.join(__dirname, '..', '..', 'public');
      const demosDir = path.join(__dirname, '..', '..', 'src', 'data', 'demos');

      // Restaurar archivos multimedia
      for (const imagePath of backupData.files.images) {
        const srcPath = path.join(filesDir, imagePath);
        const destPath = path.join(publicDir, imagePath);
        
        if (await copyFile(srcPath, destPath)) {
          filesRestored.images.push(imagePath);
        }
      }

      for (const videoPath of backupData.files.videos) {
        const srcPath = path.join(filesDir, videoPath);
        const destPath = path.join(publicDir, videoPath);
        
        if (await copyFile(srcPath, destPath)) {
          filesRestored.videos.push(videoPath);
        }
      }

      for (const posterPath of backupData.files.posters) {
        const srcPath = path.join(filesDir, posterPath);
        const destPath = path.join(publicDir, posterPath);
        
        if (await copyFile(srcPath, destPath)) {
          filesRestored.posters.push(posterPath);
        }
      }

      for (const demoFile of backupData.files.demos) {
        const srcPath = path.join(filesDir, 'demos', demoFile);
        const destPath = path.join(demosDir, demoFile);
        
        if (await copyFile(srcPath, destPath)) {
          filesRestored.demos.push(demoFile);
        }
      }

    } catch (error) {
      console.warn(`NO SE PUDIERON RESTAURAR ARCHIVOS PARA BACKUP ${backupId}: ${error.message}`);
    }

    console.log(`ARCHIVOS RESTAURADOS:`);
    console.log(`- Imagenes: ${filesRestored.images.length}`);
    console.log(`- Videos: ${filesRestored.videos.length}`);
    console.log(`- Posters: ${filesRestored.posters.length}`);
    console.log(`- Demos: ${filesRestored.demos.length}`);

    return {
      project: backupData.project,
      filesRestored: filesRestored,
      backupInfo: backupData
    };

  } catch (error) {
    console.error(`ERROR RESTAURANDO BACKUP ${backupId}:`, error);
    throw error;
  }
};

// Limpiar backups antiguos (mantener solo los configurados)
const cleanupOldBackups = async () => {
  await initBackupDirs();

  try {
    const backups = await listBackups();
    
    if (backups.length <= BACKUP_CONFIG.maxBackups) {
      return { cleaned: 0, message: 'No hay backups para limpiar' };
    }

    const backupsToDelete = backups.slice(BACKUP_CONFIG.maxBackups);
    let cleanedCount = 0;

    for (const backup of backupsToDelete) {
      try {
        // Eliminar metadatos
        const metadataPath = path.join(BACKUP_CONFIG.projectsBackupDir, `${backup.id}.json`);
        await fs.unlink(metadataPath);

        // Eliminar archivos si existen
        const filesDir = path.join(BACKUP_CONFIG.filesBackupDir, backup.id);
        try {
          await fs.rm(filesDir, { recursive: true, force: true });
        } catch {
          // Directorio no existe, continuar
        }

        cleanedCount++;
        console.log(`BACKUP ELIMINADO: ${backup.id} (${backup.project.title})`);
      } catch (error) {
        console.warn(`ERROR ELIMINANDO BACKUP ${backup.id}: ${error.message}`);
      }
    }

    // Limpiar archivos de backups antiguos (mantener solo los primeros N con archivos)
    const backupsWithFiles = backups.filter(b => b.hasFiles).slice(BACKUP_CONFIG.maxFullBackups);
    for (const backup of backupsWithFiles) {
      const filesDir = path.join(BACKUP_CONFIG.filesBackupDir, backup.id);
      try {
        await fs.rm(filesDir, { recursive: true, force: true });
        console.log(`ARCHIVOS DE BACKUP ELIMINADOS: ${backup.id} (manteniendo metadatos)`);
      } catch (error) {
        console.warn(`ERROR ELIMINANDO ARCHIVOS DE BACKUP ${backup.id}: ${error.message}`);
      }
    }

    return { 
      cleaned: cleanedCount, 
      message: `${cleanedCount} backups eliminados. Manteniendo ${BACKUP_CONFIG.maxBackups} backups.` 
    };

  } catch (error) {
    console.error('ERROR EN LIMPIEZA DE BACKUPS:', error);
    return { cleaned: 0, error: error.message };
  }
};

// Eliminar un backup específico
const deleteBackup = async (backupId) => {
  await initBackupDirs();

  try {
    // Eliminar metadatos
    const metadataPath = path.join(BACKUP_CONFIG.projectsBackupDir, `${backupId}.json`);
    await fs.unlink(metadataPath);

    // Eliminar archivos si existen
    const filesDir = path.join(BACKUP_CONFIG.filesBackupDir, backupId);
    try {
      await fs.rm(filesDir, { recursive: true, force: true });
    } catch {
      // Directorio no existe, continuar
    }

    console.log(`BACKUP ELIMINADO MANUALMENTE: ${backupId}`);
    return { success: true, message: `Backup ${backupId} eliminado correctamente` };

  } catch (error) {
    console.error(`ERROR ELIMINANDO BACKUP ${backupId}:`, error);
    throw error;
  }
};

export {
  createProjectBackup,
  listBackups,
  restoreProjectFromBackup,
  cleanupOldBackups,
  deleteBackup,
  BACKUP_CONFIG
};
