# portfoli_MarcBasas - Documentación Técnica Completa

## Resumen Ejecutivo

**Marc Basas Portfolio** es un portfolio web desarrollador completo con sistema de administración CMS personalizado. Incluye frontend en React/Vite, backend en Node.js/Express, sistema de demos interactivos, gestión de archivos multimedia y despliegue en GitHub Pages.

### Características Principales
- **Portfolio responsivo** con proyectos web y juegos
- **Panel de administración completo** para gestión de contenido
- **Sistema de demos interactivos** con editor de código en vivo
- **Gestión de archivos multimedia** (imágenes, videos, demos)
- **Backups automáticos** con rotación inteligente
- **Limpieza automática** de archivos huérfanos
- **SEO optimizado** con sitemap dinámico y react-snap

---

## Arquitectura del Sistema

### Stack Tecnológico

#### Frontend
- **React 19** - Librería principal. Se recomienda usar React 18 por compatibilidad con dependencias
- **Vite 6.2** - Build tool y dev server
- **React Router DOM 7.5** - Enrutamiento SPA
- **React Helmet Async** - Gestión de meta tags
- **CodeMirror 6** - Editor de código para demos
- **GSAP 3** - Animaciones
- **Bootstrap 5** - Componentes UI selectivos

#### Backend (Administración)
- **Node.js 18+** - Runtime
- **Express 4.18** - Framework web
- **Multer 2.0** - Upload de archivos
- **CORS 2.8** - Cross-origin requests

#### DevOps & Deployment
- **GitHub Pages** - Hosting del frontend
- **React-snap** - Pre-renderizado estático
- **Vite-plugin-sitemap** - Generación automática de sitemap
- **ESLint** - Linting de código

### Estructura de Directorios

```
marco-portfoli/
├── admin/                       # Sistema de administración
│   ├── server/                  # Backend Express
│   │   ├── server.js            # Servidor principal
│   │   └── package.json         # Deps del servidor
│   ├── scripts/                 # Scripts utilitarios
│   │   └── check-server.js      # Health check
│   ├── docs/                    # Documentación
│   │   └── ADMIN_GUIDE.md       # Guía técnica
│   └── examples/                # Archivos de ejemplo
│       └── ejemplo-demo.js      # Template demo
├── public/                      # Assets estáticos
│   ├── img/                     # Imágenes del portfolio
│   ├── vids/                    # Videos y posters
│   ├── games/                   # Juegos embebidos
│   └── robots.txt, manifest...  # PWA y SEO
├── src/                         # Código fuente React
│   ├── components/              # Componentes reutilizables
│   │   ├── ui/                  # UI base (Header, Footer, Layout)
│   │   ├── projectComponents/   # Componentes específicos
│   │   ├── LiveEditor*.jsx      # Sistema de demos
│   │   └── *.jsx/.css          # Componentes individuales
│   ├── data/                    # Datos del portfolio
│   │   ├── demos/               # Demos interactivos (.js)
│   │   ├── projects.js          # Datos principales
│   │   └── projectSlugs.js      # Slugs para sitemap
│   ├── pages/                   # Páginas principales
│   │   ├── AdminPage.jsx/css    # Panel de administración
│   │   ├── Landing.jsx          # Página principal
│   │   ├── ProjectPage.jsx      # Detalle de proyecto
│   │   └── About.jsx            # Página sobre mí
│   ├── styles/                  # Estilos globales
│   │   ├── variables.css        # Variables CSS
│   │   ├── base.css             # Estilos base
│   │   └── index.css            # Entrada principal
│   ├── utils/                   # Utilidades
│   │   ├── adminApi.js          # Cliente API admin
│   │   ├── ContactContext.jsx   # Context para contacto
│   │   └── *.jsx                # Utilidades diversas
│   └── main.jsx                 # Punto de entrada React
├── package.json                 # Dependencias y scripts
├── vite.config.js               # Configuración Vite
└── TECHNICAL_DOCUMENTATION.md   # Este archivo
```

---

## Sistema de Diseño

### Paleta de Colores
```css
--color-background: #dbd9c3;  /* Beige principal */
--color-menu: #e5ff70;        /* Verde fluor (accent) */
--color-text: #1b1b1b;        /* Negro para texto */
```

### Tipografía
- **Inter**: Títulos, menús, texto destacado
- **Arimo**: Texto general, descripciones

### Grid System
- **Unidades base**: `calc(100vw / 192)` y `calc(100vh / 108)`
- **Breakpoints**: 480px (sm), 768px (md), 1024px (lg)

### Componentes de Diseño
- **Layout responsivo** con header fijo y footer
- **Sistema de grid** flexible para proyectos
- **Navegación dropdown** para proyectos
- **Modales** para detalles de proyecto
- **Estados de carga** y feedback visual

---

## Sistema de Componentes

### Layout y Navegación

#### Layout.jsx
```jsx
// Estructura base de toda la aplicación
<ContactProvider>
  <Helmet> // Meta tags globales
  <div className="layout">
    <Header />
    <main><Outlet /></main> // React Router outlet
    <Footer />
  </div>
</ContactProvider>
```

#### Header.jsx
- **Navegación principal**: About, Logo (desktop), Proyectos
- **Dropdown de proyectos**: Lista completa con filtrado
- **Versión móvil**: Overlay full-screen
- **Estado activo**: Highlighting de página actual

#### Características avanzadas:
- **Click outside** para cerrar dropdown
- **Keyboard navigation** (Escape para cerrar)
- **Schema.org markup** para SEO
- **Lazy loading** de imágenes en dropdown

### Sistema de Páginas

#### Landing.jsx
- **Hero section** con introducción
- **Grid de proyectos** responsivo
- **Filtros por categoría** (web/games)
- **Animaciones GSAP** en scroll
- **Contact section** integrado

#### ProjectPage.jsx
- **Detalle completo** del proyecto
- **Galería de imágenes/videos**
- **Player de video** personalizado
- **Demos interactivos** (si aplica)
- **Navegación entre proyectos**
- **Meta tags dinámicos** por proyecto

#### AdminPage.jsx
- **CRUD completo** de proyectos
- **Upload de archivos** con progress
- **Preview en tiempo real**
- **Gestión de demos** interactivos
- **Interface independiente** del layout principal

### Sistema de Demos Interactivos

#### LiveEditor Components
```jsx
// Estructura del sistema de demos
LiveEditor.jsx (wrapper)
├── LiveEditorDesktop.jsx  // Versión escritorio
└── LiveEditorMobile.jsx   // Versión móvil
```

#### Características del Editor:
- **CodeMirror 6** para edición de código
- **Split view** ajustable (código/preview)
- **Tabs dinámicos** (HTML, CSS, JS)
- **Preview en iframe** en tiempo real
- **Responsive preview** (desktop/mobile)
- **Export/Open in new tab**

#### Estructura de Demos:
```javascript
export const miDemo = {
  html: `<!-- Código HTML -->`,
  css: `/* Código CSS */`,
  js: `// Código JavaScript`
};
```

---

## Gestión de Datos

### projects.js - Estructura de Datos

```javascript
export const projects = {
  web: [
    {
      id: 1,                           // Único por categoría
      category: "final|demo",          // Tipo de proyecto
      title: "TÍTULO COMPLETO",       // Nombre display
      titleMin: "Título corto",       // Para navegación
      slug: "url-friendly-slug",      // Para routing
      finished: true|false,           // Estado de desarrollo
      description: "Descripción...",  // Texto descriptivo
      previewImage: BASE + "path",    // Imagen principal
      video: BASE + "path",           // Video (opcional)
      poster: BASE + "path",          // Poster video (opcional)
      url: "https://...",             // URL externa (opcional)
      git: "https://github.com/...",  // Repositorio (opcional)
      files: demoObject,              // Objeto demo (opcional)
      keywords: "palabra1, palabra2"  // SEO keywords
    }
  ],
  games: [ /* misma estructura */ ]
};
```

#### Características de la gestión:
- **BASE path dinámico** para deployment
- **Imports automáticos** de demos
- **Validación de estructura** en backend
- **Hot reload** en desarrollo

### Sistema de Demos

#### Convenciones de nombres:
- **Archivo**: `proyecto-slug-demo.js`
- **Export**: `proyectoSlugDemo` (camelCase)
- **Detección automática** por slug

#### Pipeline de demos:
1. **Upload** vía admin panel
2. **Validación** de sintaxis JavaScript
3. **Verificación** de estructura {html, css, js}
4. **Generación automática** de imports
5. **Asignación** a proyecto por slug matching

---

## Panel de Administración

### Backend Express Server

#### API Endpoints:
```javascript
GET  /api/health                  // Health check
POST /api/admin/save-projects     // Guardar proyectos + cleanup
POST /api/admin/upload-image      // Upload imágenes (10MB max)
POST /api/admin/upload-video      // Upload videos (100MB max)
POST /api/admin/upload-demo       // Upload demos JS (5MB max)
GET  /api/admin/demos            // Listar demos disponibles
```

#### Validaciones de upload:
- **Imágenes**: jpeg, jpg, png, gif, webp, avif
- **Videos**: mp4, webm, mov, avi, mkv
- **Demos**: .js con estructura válida

#### Procesamiento de archivos:
```javascript
// Naming convention para uploads
const fileName = `${originalName}-${timestamp}.${ext}`;

// Storage locations
Images/Videos → public/img/ | public/vids/
Demos → src/data/demos/
```

### Frontend Admin Interface

#### Características del panel:
- **Modal-based UI** para edición
- **Drag & drop** para archivos
- **Preview en tiempo real** de uploads
- **Validación client-side** antes de submit
- **Progress indicators** para uploads
- **Error handling** con mensajes específicos

#### Estado del formulario:
```javascript
const [formData, setFormData] = useState({
  title: '', titleMin: '', slug: '',
  category: 'web', finished: true,
  description: '', previewImage: '',
  video: '', poster: '', url: '', git: '',
  keywords: '', hasDemo: false
});
```

#### Funcionalidades avanzadas:
- **Auto-generación de slugs** desde título
- **Upload con progress** y preview
- **Detección de demos** existentes
- **Validación en tiempo real**

---

## Sistema de Backups y Limpieza


### Limpieza de Archivos Huérfanos

#### Trigger automático:
- **Al eliminar proyecto** vía admin panel
- **Detección de archivos** asociados
- **Eliminación segura** con logs

#### Archivos que se limpian:
```javascript
const cleanupProjectFiles = async (projectData) => {
  // Imagen preview
  if (projectData.previewImage) { /* eliminar */ }
  // Video
  if (projectData.video) { /* eliminar */ }
  // Poster
  if (projectData.poster) { /* eliminar */ }
  // Demo asociado por slug
  if (projectData.category === 'demo') { /* eliminar demo.js */ }
};
```

#### Manejo de paths:
```javascript
// Extrae path real de "BASE + path"
const extractRealPath = (pathString) => {
  if (pathString.includes('BASE + "')) {
    return pathString.split('BASE + "')[1].replace(/"/g, '');
  }
  return pathString;
};
```

---

## Build y Deployment

### Scripts NPM

```json
{
  "scripts": {
    "dev": "vite",                    // Dev server
    "admin-server": "node admin/server/server.js",  // Backend
    "admin-dev": "nodemon admin/server/server.js",  // Backend con reload
    "check-server": "node admin/scripts/check-server.js", // Health check
    "build": "vite build && copy dist\\index.html dist\\404.html", // Build + SPA fallback
    "postbuild": "react-snap",        // Pre-renderizado
    "deploy": "gh-pages -d dist"      // Deploy a GitHub Pages
  }
}
```

### Vite Configuration

```javascript
export default defineConfig({
  plugins: [
    react(),
    sitemapPlugin({
      hostname: 'https://www.marcbasas.com',
      dynamicRoutes: ["/about"]
        .concat(webSlugs.map(slug => `/project/${slug}`))
        .concat(gameSlugs.map(slug => `/project/${slug}`))
    })
  ],
  base: '/',  // GitHub Pages compatible
  build: { target: 'es2015' }  // Compatibilidad amplia
});
```

### React-snap Configuration

```json
{
  "reactSnap": {
    "source": "dist",
    "include": [
      "/", "/about",
      "/project/kumo-creative-project",
      "/project/cinevision-studios",
      // ... todos los proyectos
    ],
    "removeStyleTags": false,
    "puppeteerArgs": ["--no-sandbox"]
  }
}
```

### GitHub Pages Setup

#### Características del deployment:
- **Custom domain** apuntando a GitHub Pages
- **404.html** idéntico a index.html para SPA routing
- **Static assets** optimizados automáticamente
- **Pre-rendered pages** para mejor SEO
- **Automatic deployments** en push a master

---

## Componentes Específicos

### VideoPlayer Component

```jsx
// Reproductor de video personalizado
<VideoPlayer 
  videoSrc={project.video}
  posterSrc={project.poster}
  title={project.title}
/>
```

#### Características:
- **Controls personalizados** con overlay
- **Lazy loading** hasta interacción
- **Responsive** con aspect ratio fijo
- **Fallback** a poster si no hay video

### GameFrame Component

```jsx
// Iframe para juegos embebidos
<GameFrame 
  src={project.url}
  title={project.title}
  fullscreen={true}
/>
```

#### Características:
- **Sandbox security** para iframes
- **Fullscreen API** integration
- **Loading states** con skeleton
- **Error boundaries** para fallos

### ProjectCard Component

```jsx
// Card para grid de proyectos
<ProjectCard 
  project={project}
  category={category}
  isHighlighted={featured}
/>
```

#### Características:
- **Hover effects** con GSAP
- **Image optimization** con lazy loading
- **Status indicators** (finished/in-progress)
- **Category badges** con colores

---

## SEO y Performance

### Meta Tags Dinámicos

```jsx
// Por página usando React Helmet
<Helmet>
  <title>{project.title} - Marc Basas Portfolio</title>
  <meta name="description" content={project.description} />
  <meta property="og:title" content={project.title} />
  <meta property="og:image" content={project.previewImage} />
  <meta name="keywords" content={project.keywords} />
</Helmet>
```

### Optimizaciones de Performance

#### Code Splitting:
- **Lazy loading** de páginas con React.lazy()
- **Dynamic imports** para componentes pesados
- **Chunk optimization** en Vite build

#### Image Optimization:
- **WebP format** para todas las imágenes
- **Responsive images** con srcset
- **Lazy loading** con Intersection Observer
- **Preload** de imágenes críticas

#### JavaScript Optimization:
- **Tree shaking** automático con Vite
- **Bundle analysis** con rollup-plugin-analyzer
- **Code minification** en production
- **Legacy support** con @vitejs/plugin-legacy

### Sitemap Dinámico

```javascript
// Auto-generación basada en projectSlugs.js
dynamicRoutes: ["/about"]
  .concat(webSlugs.map(slug => `/project/${slug}`))
  .concat(gameSlugs.map(slug => `/project/${slug}`))
```

---

## Seguridad

### Frontend Security

#### CSP Headers (via meta):
```html
<meta http-equiv="Content-Security-Policy" 
      content="default-src 'self'; script-src 'self' 'unsafe-inline'">
```

#### Sanitización:
- **DOMPurify** para contenido user-generated
- **Escape HTML** en demos dinámicos
- **Validation** de slugs y parámetros

### Backend Security

#### File Upload Security:
```javascript
// Validaciones múltiples
const fileFilter = (req, file, cb) => {
  const allowedTypes = /jpeg|jpg|png|gif|webp|avif/;
  const extname = allowedTypes.test(path.extname(file.originalname));
  const mimetype = allowedTypes.test(file.mimetype);
  
  if (extname && mimetype) {
    return cb(null, true);
  } else {
    cb(new Error('Solo se permiten archivos de imagen válidos'));
  }
};
```

#### Path Security:
- **Path traversal protection** con path.resolve()
- **File existence verification** antes de delete
- **Sandbox** para demo execution en iframe

### Admin Panel Security

#### Access Control:
- **Ruta obscura** `/Admin1997` (security by obscurity)
- **Local-only access** (no remote admin)
- **Session-less** (stateless operations)

#### Input Validation:
- **Client-side validation** en tiempo real
- **Server-side sanitization** de inputs
- **File type verification** antes de upload

---

## Testing Strategy

### Development Testing

#### Manual Testing Checklist:
- [ ] **Responsive design** en todos los breakpoints
- [ ] **Cross-browser compatibility** (Chrome, Firefox, Safari, Edge)
- [ ] **Performance** en dispositivos móviles
- [ ] **Accessibility** con screen readers
- [ ] **SEO** con herramientas de audit

#### Admin Panel Testing:
- [ ] **CRUD operations** para proyectos
- [ ] **File uploads** de todos los tipos
- [ ] **Error handling** con archivos inválidos
- [ ] **Backup creation** y recovery
- [ ] **Cleanup functions** al eliminar proyectos

### Production Validation

#### Pre-deployment checks:
```bash
# Build sin errores
npm run build

# Verificar sitemap generado
ls dist/sitemap.xml

# Validar HTML generado
npm run postbuild  # react-snap

# Test local del build
npm run preview
```

---

## Analytics y Monitoring

### Performance Metrics

#### Core Web Vitals:
- **LCP (Largest Contentful Paint)**: < 2.5s
- **FID (First Input Delay)**: < 100ms
- **CLS (Cumulative Layout Shift)**: < 0.1

#### Custom Metrics:
- **Time to Interactive** en páginas de proyecto
- **Demo load time** para componentes interactivos
- **Image loading performance** con lazy loading

### Error Monitoring

#### Client-side Error Handling:
```jsx
// Error Boundaries para componentes críticos
class ProjectErrorBoundary extends React.Component {
  componentDidCatch(error, errorInfo) {
    console.error('Project component error:', error, errorInfo);
  }
}
```

#### Server-side Logging:
```javascript
// Structured logging en operations críticas
app.post('/api/admin/save-projects', async (req, res) => {
  try {
    console.log('Proyectos guardados correctamente');
  } catch (error) {
    console.error('Error en save-projects:', error);
  }
});
```

---

## Troubleshooting Guide

### Problemas Comunes

#### Build Errors:
```bash
# Error: "Could not resolve import"
# Solución: Verificar paths y exports en modules

# Error: "Failed to parse source map"
# Solución: Limpiar node_modules y reinstalar
rm -rf node_modules package-lock.json
npm install
```

#### Admin Panel Issues:
```bash
# Error: "Cannot connect to server"
# Verificar que admin-server esté corriendo
npm run check-server

# Error: "File upload failed"
# Verificar permisos de directorio y tamaño de archivo
```

#### Deployment Problems:
```bash
# GitHub Pages no actualiza
# Forzar rebuild
git commit --allow-empty -m "Force rebuild"
git push origin master

# 404 en rutas SPA
# Verificar que 404.html existe y es idéntico a index.html
```

### Debug Modes

#### Development Debugging:
```javascript
// Enable verbose logging
localStorage.setItem('debug', 'marco-portfolio:*');

// React DevTools profiling
// Chrome Extension: React Developer Tools

// Vite debugging
DEBUG=vite:* npm run dev
```

---

## Recursos y Referencias

### Dependencies Documentation

#### Core Dependencies:
- [React 19 Docs](https://react.dev/)
- [Vite Documentation](https://vitejs.dev/)
- [React Router v6](https://reactrouter.com/)
- [CodeMirror 6](https://codemirror.net/docs/)

#### Dev Dependencies:
- [Express.js Guide](https://expressjs.com/)
- [Multer Documentation](https://github.com/expressjs/multer)
- [React Helmet Async](https://github.com/staylor/react-helmet-async)

### Best Practices Applied

#### React Patterns:
- **Composition over inheritance**
- **Custom hooks** para lógica reutilizable
- **Context API** para estado global
- **Error boundaries** para manejo de errores

#### Performance Patterns:
- **Lazy loading** de componentes y assets
- **Memoization** con React.memo y useMemo
- **Virtualization** para listas largas
- **Code splitting** por rutas

#### CSS Architecture:
- **CSS Variables** para theming
- **Component-scoped styles**
- **Mobile-first** responsive design
- **Utility classes** para spacing y layout

---

## Roadmap y Extensibilidad

### Arquitectura Escalable

#### Para Clientes Futuros:
- **Template system** para diferentes industries
- **Multi-tenant** admin panel
- **Theme customization** engine
- **Plugin architecture** para funcionalidades extra

#### Posibles Mejoras:
- **Authentication system** para admin remoto
- **Database integration** (PostgreSQL/MongoDB)
- **CDN integration** para assets
- **Advanced analytics** dashboard

### Migration Guide

#### De local a cloud:
1. **Containerize** con Docker
2. **Database migration** para projects.js
3. **File storage** to AWS S3/Cloudinary
4. **Deploy** en Vercel/Netlify/Railway

#### Template creation:
1. **Extract** hardcoded values a config
2. **Create** industry-specific variants
3. **Setup** automated deployment pipeline
4. **Document** customization process

---

## Checklist de Implementación

### Setup Inicial
- [ ] **Clone/fork** del repositorio base
- [ ] **Install dependencies**: `npm install`
- [ ] **Configure** variables de entorno
- [ ] **Setup** custom domain (si aplica)

### Customización
- [ ] **Update** colors en `variables.css`
- [ ] **Replace** content en `projects.js`
- [ ] **Customize** about page content
- [ ] **Add** custom favicon y assets

### Testing
- [ ] **Test** admin panel functionality
- [ ] **Verify** responsive design
- [ ] **Check** performance metrics
- [ ] **Validate** SEO implementation

### Deployment
- [ ] **Configure** GitHub Pages
- [ ] **Setup** custom domain DNS
- [ ] **Verify** build process
- [ ] **Test** production site

---

## Conclusión

Este portfolio representa una solución completa y escalable para desarrolladores que necesitan tanto un portfolio profesional como un sistema de gestión de contenido personalizado. La arquitectura modular permite fácil customización para diferentes necesidades de clientes, mientras que el sistema de administración proporciona autonomía total en la gestión de contenido.

### Valor Competitivo:
- **Sistema completo** frontend + backend + admin
- **Deployment gratuito** en GitHub Pages
- **Performance optimizado** con técnicas modernas
- **SEO-friendly** con pre-renderizado
- **Maintenance automated** con limpieza de archivos

### Aplicabilidad:
- **Portfolio personal** de desarrolladores
- **Agencies** pequeñas y medianas
- **Freelancers** que necesitan presencia profesional
- **Startups** con presupuesto limitado para CMS

Este documento sirve como referencia completa para implementar, customizar y mantener el sistema en proyectos futuros.

---

*Documentación técnica generada para Marco Portfolio - Versión 1.0*  
*Última actualización: Agosto 2025*
