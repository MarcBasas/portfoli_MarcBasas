# 🛠️ Panel de Administración - Portfolio

Esta carpeta contiene todos los archivos relacionados con el sistema de administración del portfolio.

## 📁 Estructura de Archivos

```
admin/
├── server/                  # Backend del sistema de administración
│   ├── server.js           # Servidor Express principal
│   └── package.json        # Dependencias del servidor
├── scripts/                # Scripts utilitarios
│   └── check-server.js     # Script para verificar estado del servidor
├── docs/                   # Documentación
│   └── ADMIN_GUIDE.md      # Guía técnica completa
└── examples/               # Archivos de ejemplo
    └── ejemplo-demo.js     # Ejemplo de estructura para demos
```

## 🚀 Comandos Principales

### Desde la raíz del proyecto:

```bash
# Verificar estado del servidor
npm run check-server

# Iniciar servidor de administración
npm run admin-server

# Iniciar frontend de desarrollo
npm run dev
```

### Panel de Administración:
- **URL:** http://localhost:5173/Admin1997
- **Backend:** http://localhost:3001

## 📝 Funcionalidades

- ✅ **Gestión completa de proyectos** (añadir, editar, eliminar)
- ✅ **Subida de archivos** (imágenes hasta 10MB, videos hasta 100MB)
- ✅ **Demos interactivos** con código HTML/CSS/JS
- ✅ **Backups automáticos** con timestamp
- ✅ **Detección inteligente** de archivos demo

## 📖 Documentación

Para instrucciones detalladas, consulta:
- **[docs/ADMIN_GUIDE.md](./docs/ADMIN_GUIDE.md)** - Guía técnica completa

## 🔧 Desarrollo

El frontend del admin se encuentra en:
- `src/pages/AdminPage.jsx` - Interfaz principal
- `src/pages/AdminPage.css` - Estilos
- `src/utils/adminApi.js` - API utilities
