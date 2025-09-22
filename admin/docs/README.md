# Sistema de Administración del Portfolio

## Descripción General

El sistema de administración permite gestionar de forma completa los proyectos del portfolio a través de una interfaz web intuitiva. Incluye funcionalidades para crear, editar, eliminar proyectos, subir archivos multimedia y gestionar demos interactivos.

## Arquitectura del Sistema

### Frontend (React)
- **Interfaz:** `src/pages/AdminPage.jsx` 
- **API Client:** `src/utils/adminApi.js` - Funciones para comunicación con backend
- **Componente de Login:** `src/components/AdminLogin.jsx`
- **Ruta de acceso:** `http://localhost:5173/Admin1997`

### Backend (Express.js)
- **Servidor:** `admin/server/server.js` (Express + Multer)
- **Puerto:** 3001 (local) / Render.com (producción)
- **API Base:** `http://localhost:3001/api/admin/` (local) / `https://portfolio-admin-server-76sn.onrender.com/api/admin/` (producción)

### Estructura de Archivos
```
admin/
├── server/
│   ├── server.js          # Servidor Express principal
│   ├── package.json       # Dependencias del servidor
│   ├── Procfile           # Configuración para Render.com
│   ├── render.yaml        # Configuración de despliegue
│   └── .env               # Variables de entorno (crear manualmente)
├── scripts/
│   └── check-server.js     # Verificación de estado del servidor
├── docs/
│   └── ADMIN_GUIDE.md     # Guía técnica detallada
└── examples/
    └── ejemplo-demo.js     # Ejemplo de archivo demo
```

## Instalación y Configuración

### 1. Instalación de Dependencias
```bash
# Desde la raíz del proyecto
npm install
```

### 2. Configuración del Servidor
Crear archivo `.env` en `admin/server/`:
```env
ADMIN_PIN=tu-pin-secreto-aqui
JWT_SECRET=tu-clave-secreta-muy-larga-aqui
SESSION_DURATION_HOURS=24
PORT=3001
```

**Generación de JWT_SECRET seguro:**
```bash
node -e "console.log(require('crypto').randomBytes(64).toString('hex'))"
```

### 3. Ejecución del Sistema

#### Desarrollo Local
```bash
# Terminal 1: Backend
npm run admin-server

# Terminal 2: Frontend
npm run dev

# Verificación de estado
npm run check-server
```

#### Scripts Disponibles
- `npm run admin-server` - Ejecuta el servidor de administración
- `npm run admin-dev` - Ejecuta con nodemon para desarrollo
- `npm run check-server` - Verifica el estado del servidor
- `npm run dev` - Ejecuta el frontend en modo desarrollo

## Funcionalidades Principales

### 1. Autenticación
- **Método:** PIN de administración
- **Duración:** Sesión configurable (por defecto 24 horas)
- **Seguridad:** JWT tokens con expiración automática
- **Acceso:** Ruta `/Admin1997` (seguridad por oscuridad)

### 2. Gestión de Proyectos
- **CRUD completo:** Crear, leer, actualizar, eliminar proyectos
- **Categorías:** Web y Juegos
- **Campos principales:**
  - Título completo y título corto
  - Slug (URL) generado automáticamente
  - Descripción
  - Estado (terminado/en desarrollo)
  - URLs del proyecto y GitHub
  - Palabras clave
  - Archivos multimedia

### 3. Sistema de Upload de Archivos

#### Imágenes
- **Tipos permitidos:** jpeg, jpg, png, gif, webp, avif
- **Tamaño máximo:** 10MB
- **Destino:** `public/img/`
- **Nomenclatura:** `nombre-timestamp.ext`

#### Videos
- **Tipos permitidos:** mp4, webm, mov, avi, mkv
- **Tamaño máximo:** 100MB
- **Destino:** `public/vids/`
- **Nomenclatura:** `nombre-timestamp.ext`

#### Archivos Demo
- **Tipo:** Archivos JavaScript (.js)
- **Tamaño máximo:** 5MB
- **Destino:** `src/data/demos/`
- **Validación:** Estructura de exportación requerida

### 4. Sistema de Demos Interactivos

Los demos son archivos JavaScript que exportan un objeto con estructura específica:

```javascript
export const miProyectoDemo = {
  html: `
    <!DOCTYPE html>
    <html>
    <head>
        <title>Mi Demo</title>
    </head>
    <body>
        <div id="app">Contenido HTML</div>
    </body>
    </html>
  `,
  css: `
    #app {
        padding: 20px;
        background: #f0f0f0;
    }
  `,
  js: `
    document.addEventListener('DOMContentLoaded', function() {
        console.log('Demo cargado');
    });
  `
};
```

**Convenciones de nombres:**
- Archivo: `proyecto-slug-demo.js`
- Export: `proyectoSlugDemo` (camelCase)

### 5. Sistema de Backup y Historial

El sistema incluye un sistema completo de backup automático que preserva el historial de proyectos eliminados y modificados.

#### Características Principales
- **Backup automático**: Se crea automáticamente al eliminar proyectos
- **Historial visual**: Modal en la interfaz para gestionar backups
- **Rotación inteligente**: Mantiene máximo 10 backups, solo 5 con archivos completos
- **Restauración selectiva**: Restaurar proyectos específicos desde el historial
- **Backup manual**: Crear backups de proyectos existentes

#### Estructura de Directorios
```
admin/backups/
├── projects/           # Metadatos de backups (JSON)
├── files/             # Archivos multimedia respaldados
└── compressed/        # Backups antiguos comprimidos (futuro)
```

#### Tipos de Backup
1. **Automático (delete)**: Creado al eliminar un proyecto
2. **Manual**: Creado manualmente desde la interfaz
3. **Actualización (update)**: Creado al modificar proyectos (futuro)

#### Estrategia de Rotación
- **Backups 1-5**: Metadatos + archivos completos
- **Backups 6-10**: Solo metadatos (archivos eliminados)
- **Backups >10**: Eliminados automáticamente

#### Funcionalidades de la Interfaz
- **Botón "Historial"**: Acceso al modal de gestión de backups
- **Lista de backups**: Ordenados por fecha (más reciente primero)
- **Información detallada**: Fecha, tipo de operación, disponibilidad de archivos
- **Acciones disponibles**:
  - **Restaurar**: Restaura el proyecto y sus archivos
  - **Backup**: Crea backup manual del proyecto
  - **Eliminar**: Elimina el backup específico

#### Información de Backups
Cada backup incluye:
- **Metadatos del proyecto**: Título, descripción, configuración
- **Archivos multimedia**: Imágenes, videos, posters (si están disponibles)
- **Archivos demo**: Código JavaScript de demos interactivos
- **Timestamp**: Fecha y hora de creación
- **Tipo de operación**: delete, manual, update


## API Endpoints

### Autenticación
```
POST /api/auth/login          # Login con PIN
POST /api/auth/validate       # Validar token existente
POST /api/auth/logout         # Logout (client-side)
```

### Administración (Requiere autenticación)
```
POST /api/admin/save-projects        # Guardar proyectos
POST /api/admin/upload-image         # Subir imagen
POST /api/admin/upload-video         # Subir video
POST /api/admin/upload-demo          # Subir archivo demo
```

### Público (Sin autenticación)
```
GET  /api/projects                   # Cargar proyectos (público)
```

### Sistema de Backup (Requiere autenticación)
```
GET  /api/admin/backups              # Listar todos los backups
POST /api/admin/backups/:id/restore  # Restaurar proyecto desde backup
DELETE /api/admin/backups/:id        # Eliminar backup específico
POST /api/admin/backups/create       # Crear backup manual
POST /api/admin/backups/cleanup      # Limpiar backups antiguos
```

### Utilidades
```
GET  /api/health               # Health check del servidor
```

## Estructura de Datos

### Proyecto Típico
```javascript
{
  id: 1,
  category: "web|games",
  title: "Título completo del proyecto",
  titleMin: "Título corto",
  slug: "url-slug-generado",
  finished: true,
  description: "Descripción detallada del proyecto",
  previewImage: "img/preview-image.webp",
  video: "vids/project-video.webm",        // Opcional
  poster: "vids/poster-image.webp",        // Opcional
  url: "https://proyecto.com",             // Opcional
  git: "https://github.com/usuario/proyecto", // Opcional
  files: "nombreDelDemo",                  // Opcional (referencia al demo)
  keywords: "React, JavaScript, Web"
}
```

### Archivo projects.js
```javascript
import { portfolioDemo } from './demos/portfolioDemo';
import { cinevisionDemo } from './demos/cinevisionDemo';

const BASE = typeof import.meta !== 'undefined' && import.meta.env
  ? import.meta.env.BASE_URL
  : '';

export const projects = {
  web: [
    {
      id: 1,
      category: "web",
      title: "Mi Proyecto Web",
      // ... resto de propiedades
    }
  ],
  games: [
    {
      id: 2,
      category: "games",
      title: "Mi Juego",
      // ... resto de propiedades
    }
  ]
};
```

## Seguridad

### Medidas Implementadas
- **Autenticación JWT:** Tokens con expiración automática
- **Validación de archivos:** Filtros por extensión y MIME type
- **Límites de tamaño:** Restricciones por tipo de archivo
- **Sanitización:** Nombres de archivo sanitizados
- **Ruta oculta:** Acceso solo a través de `/Admin1997`

### Configuración de Seguridad
- **PIN de administración:** Configurable en variables de entorno
- **JWT Secret:** Clave secreta para firmar tokens
- **Duración de sesión:** Configurable en horas
- **CORS:** Configurado para localhost en desarrollo

## Monitoreo y Debugging

### Health Check
```bash
curl http://localhost:3001/api/health
```

### Logs del Servidor
El servidor muestra información detallada sobre:
- Inicio y configuración
- Operaciones de autenticación
- Upload de archivos
- Operaciones de backup
- Errores y validaciones

### Verificación de Estado
```bash
npm run check-server
```

### Configuración Técnica del Servidor

#### Multer Storage
- **Imágenes/Videos:** Timestamp + nombre sanitizado
- **Demos:** `{slug}-demo.js` en `src/data/demos/`

#### CORS y Static Files
- CORS habilitado para localhost:5173
- Static serving: `/uploads` → `public/`

#### Detección Automática de Demos
El servidor escanea `src/data/demos/` y mapea:
- `crealab-demo.js` → `crealabDemo`
- `cinevision-demo.js` → `cinevisionDemo`
- Conversión automática kebab-case → camelCase

## Despliegue en Producción

### Render.com
El servidor está configurado para desplegarse automáticamente en Render.com:

- **Archivo de configuración:** `admin/server/render.yaml`
- **Procfile:** `admin/server/Procfile`
- **Variables de entorno:** Configuradas en el dashboard de Render

### Variables de Entorno en Producción
```env
ADMIN_PIN=pin-de-produccion
JWT_SECRET=clave-secreta-de-produccion
SESSION_DURATION_HOURS=24
NODE_ENV=production
```

## Troubleshooting

### Problemas Comunes

#### Puerto 3001 Ocupado
```
Error: EADDRINUSE
Solución: El servidor ya está ejecutándose
Verificar: npm run check-server
```

#### Error de Dependencias
```bash
npm install --legacy-peer-deps
```

#### Token Expirado
- El token JWT expira automáticamente
- Es necesario volver a hacer login con el PIN
- Verificar configuración de `SESSION_DURATION_HOURS`

#### Archivos No Se Suben
- Verificar límites de tamaño
- Comprobar tipos de archivo permitidos
- Revisar logs del servidor

#### Hot Reload No Funciona
- Reiniciar ambos servidores (frontend y backend)
- Verificar que ambos estén ejecutándose

### Logs de Error
Los errores se registran en la consola del servidor con formato:
```
ERROR: Descripción del error
DETALLES: Información adicional
TIMESTAMP: Fecha y hora del error
```

## Flujo de Trabajo Recomendado

### 1. Crear un Nuevo Proyecto
1. Acceder a `/Admin1997`
2. Hacer login con el PIN
3. Hacer clic en "Afegir Projecte"
4. Completar formulario
5. Subir archivos multimedia
6. Si es demo, subir archivo JavaScript
7. Guardar proyecto

### 2. Editar Proyecto Existente
1. Localizar proyecto en la lista
2. Hacer clic en "Editar"
3. Modificar campos necesarios
4. Subir nuevos archivos si es necesario
5. Guardar cambios

### 3. Eliminar Proyecto
1. Localizar proyecto en la lista
2. Hacer clic en "Eliminar"
3. Confirmar eliminación
4. Los archivos se eliminan automáticamente

## Mantenimiento

### Actualización de Dependencias
```bash
# Verificar dependencias desactualizadas
npm outdated

# Actualizar dependencias
npm update
```


## Soporte

Para problemas técnicos o dudas sobre el sistema:
1. Revisar logs del servidor
2. Verificar configuración de variables de entorno
3. Comprobar estado con `npm run check-server`
4. Consultar esta documentación

---

**Nota:** Este sistema está diseñado para uso interno y no debe exponerse públicamente sin las medidas de seguridad apropiadas.
