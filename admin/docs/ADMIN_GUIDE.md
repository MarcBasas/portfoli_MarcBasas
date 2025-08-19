# Panel de Administración - Guía Técnica

## Arquitectura

### Frontend
- **Interfaz:** `src/pages/AdminPage.jsx` con estilos en `AdminPage.css`
- **API Client:** `src/utils/adminApi.js` - Funciones para comunicación con backend
- **Ruta de acceso:** `http://localhost:5173/Admin1997`

### Backend
- **Servidor:** `admin/server/server.js` (Express + Multer)
- **Puerto:** 3001
- **API Base:** `http://localhost:3001/api/admin/`

### Estructura de archivos reorganizada
```
admin/
├── server/
│   ├── server.js           # Backend Express
│   └── package.json        # Dependencias del servidor
├── scripts/
│   └── check-server.js     # Verificación de estado
├── docs/                   # Documentación
└── examples/               # Archivos de ejemplo
```

## Instalación y ejecución

### Setup inicial
```bash
cd marco-portfoli
npm install
```

### Ejecución
```bash
# Terminal 1: Backend
npm run admin-server

# Terminal 2: Frontend  
npm run dev

# Verificación de estado
npm run check-server
```

### Scripts disponibles
- `npm run admin-server` - Ejecuta `admin/server/server.js`
- `npm run admin-dev` - Con nodemon para desarrollo
- `npm run check-server` - Ejecuta `admin/scripts/check-server.js`

## Funcionalidades

### Gestión de proyectos
- CRUD completo de proyectos (web/games)
- Formulario modal con validación
- Generación automática de slugs
- Gestión de estado (terminado/en desarrollo)

### Upload de archivos
- **Imágenes:** 10MB max (jpeg, jpg, png, gif, webp, avif) → `public/img/`
- **Videos:** 100MB max (mp4, webm, mov, avi, mkv) → `public/vids/`
- **Demos:** 5MB max (.js) → `src/data/demos/`

### Sistema de demos interactivos
Los demos son archivos JS que exportan un objeto con estructura:
```javascript
export const miProyectoDemo = {
  html: `<!-- HTML code -->`,
  css: `/* CSS code */`,
  js: `// JavaScript code`
};
```

**Convenciones de nombres:**
- Archivo: `proyecto-slug-demo.js`
- Export: `proyectoSlugDemo` (camelCase)

### Persistencia de datos
- **Archivo principal:** `src/data/projects.js`
- **Backups automáticos:** `src/data/projects.backup.{timestamp}.js`
- **Imports dinámicos:** Generación automática de imports para demos
- **Hot reload:** El frontend se actualiza automáticamente

## API Endpoints

```
GET  /api/health                    # Health check
POST /api/admin/save-projects       # Guardar proyectos
POST /api/admin/upload-image        # Upload de imágenes
POST /api/admin/upload-video        # Upload de videos  
POST /api/admin/upload-demo         # Upload de demos
GET  /api/admin/demos              # Listar demos disponibles
```

## Configuración del servidor

### Multer storage
- **Imágenes/Videos:** Timestamp + nombre sanitizado
- **Demos:** `{slug}-demo.js` en `src/data/demos/`

### CORS y Static files
- CORS habilitado para localhost:5173
- Static serving: `/uploads` → `public/`

### Detección automática de demos
El servidor escanea `src/data/demos/` y mapea:
- `crealab-demo.js` → `crealabDemo`
- `cinevision-demo.js` → `cinevisionDemo`
- Conversión automática kebab-case → camelCase

## Estructura de datos

### Proyecto típico
```javascript
{
  id: 1,
  category: "web|games",
  title: "Título completo",
  titleMin: "Título corto",
  slug: "url-slug",
  finished: boolean,
  description: "Descripción",
  previewImage: "img/preview.webp",
  video: "vids/video.webm",          // Opcional
  poster: "vids/poster.webp",        // Opcional
  url: "https://proyecto.com",       // Opcional
  git: "https://github.com/...",     // Opcional
  files: demoObject,                 // Opcional
  keywords: "keyword1, keyword2"
}
```

## Seguridad

- **Acceso:** Ruta `/Admin1997` sin autenticación (seguridad por oscuridad)
- **Validación:** Filtros de archivos por extensión y MIME type
- **Límites:** Restricciones de tamaño por tipo de archivo
- **Sanitización:** Nombres de archivo sanitizados

## Monitoreo y debugging

### Health check
```bash
curl http://localhost:3001/api/health
```

### Logs del servidor
El servidor muestra información detallada sobre:
- Inicio y configuración
- Detección de demos
- Operaciones de upload
- Errores de validación

### Backups
Cada operación de guardado crea un backup automático con timestamp, permitiendo recuperación en caso de errores.

## Troubleshooting común

- **Puerto 3001 ocupado:** El servidor ya está ejecutándose
- **Error de rutas:** Verificar que los comandos se ejecuten desde la raíz del proyecto
- **Problemas de dependencias:** Usar `npm install --legacy-peer-deps`
- **Hot reload no funciona:** Reiniciar ambos servidores
