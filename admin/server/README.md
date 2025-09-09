# 🚀 Servidor de Administración - Portfolio

Servidor backend para gestionar el contenido del portfolio de forma remota.

## 📋 Características

- ✅ **Gestión completa de proyectos** (añadir, editar, eliminar)
- ✅ **Sistema de autenticación PIN** con JWT tokens
- ✅ **Subida de archivos** (imágenes, videos, demos)
- ✅ **Backups automáticos** con rotación
- ✅ **API REST** completa
- ✅ **Siempre activo** en Render

## 🛠️ Tecnologías

- **Node.js** + **Express**
- **JWT** para autenticación
- **Multer** para upload de archivos
- **Archiver** para backups
- **CORS** habilitado

## 🚀 Despliegue en Render

### Paso 1: Preparar el Repositorio
```bash
# Asegúrate de que tu proyecto esté en GitHub
git add .
git commit -m "Preparar para despliegue en Render"
git push origin main
```

### Paso 2: Crear Servicio en Render
1. Ve a [render.com](https://render.com)
2. Regístrate con GitHub
3. Haz clic en "New +" → "Web Service"
4. Conecta tu repositorio

### Paso 3: Configurar el Servicio
```
Name: portfolio-admin-server
Environment: Node
Build Command: cd admin/server && npm install
Start Command: cd admin/server && npm start
Plan: Free
```

### Paso 4: Variables de Entorno
Configura estas variables en Render:

```
NODE_ENV=production
ADMIN_PIN=tu-pin-secreto-aqui
JWT_SECRET=tu-clave-secreta-muy-larga-aqui
SESSION_DURATION_HOURS=24
```

**Generar JWT_SECRET seguro:**
```bash
node -e "console.log(require('crypto').randomBytes(64).toString('hex'))"
```

### Paso 5: Desplegar
1. Haz clic en "Create Web Service"
2. Espera el despliegue (5-10 minutos)
3. Tu servidor estará en: `https://tu-servicio.onrender.com`

## 🔧 Configuración del Frontend

Una vez desplegado, actualiza tu frontend:

### En `src/utils/adminApi.js`:
```javascript
// Cambiar de:
const API_BASE_URL = 'http://localhost:3001';

// A:
const API_BASE_URL = 'https://tu-servicio.onrender.com';
```

### En `src/pages/AdminPage.jsx`:
```javascript
// Actualizar la URL del servidor
const SERVER_URL = 'https://tu-servicio.onrender.com';
```

## 📱 Uso del Panel de Administración

1. Ve a tu sitio web: `https://tu-dominio.com/Admin1997`
2. Introduce el PIN configurado en las variables de entorno
3. ¡Gestiona tu contenido desde cualquier lugar!

## 🔍 Endpoints de la API

### Autenticación
- `POST /api/auth/login` - Login con PIN
- `POST /api/auth/validate` - Validar token
- `POST /api/auth/logout` - Logout

### Administración
- `POST /api/admin/save-projects` - Guardar proyectos
- `POST /api/admin/upload-image` - Subir imagen
- `POST /api/admin/upload-video` - Subir video
- `POST /api/admin/upload-demo` - Subir demo
- `GET /api/admin/backups` - Listar backups
- `POST /api/admin/download-projects-backup` - Descargar backup
- `POST /api/admin/download-files-backup` - Descargar backup de archivos

### Health Check
- `GET /api/health` - Estado del servidor

## 🧪 Verificar que Funciona

### Health Check:
```bash
curl https://tu-servicio.onrender.com/api/health
```

Respuesta esperada:
```json
{
  "status": "OK",
  "message": "Servidor de administración funcionando"
}
```

### Test de Autenticación:
```bash
curl -X POST https://tu-servicio.onrender.com/api/auth/login \
  -H "Content-Type: application/json" \
  -d '{"pin":"tu-pin-aqui"}'
```

## 🚨 Solución de Problemas

### Error: "Cannot find module"
- Verifica que `package.json` esté en `admin/server/`
- Asegúrate de que el build command sea: `cd admin/server && npm install`

### Error: "ADMIN_PIN no está configurado"
- Verifica que las variables de entorno estén configuradas en Render
- Asegúrate de que no haya espacios extra en los valores

### Servidor no responde
- Verifica los logs en el dashboard de Render
- Asegúrate de que el puerto sea dinámico (Render lo asigna automáticamente)

### Error de CORS
- El servidor ya tiene CORS habilitado
- Verifica que la URL del frontend sea correcta

## 📊 Monitoreo

Render proporciona:
- **Logs en tiempo real** - Revisa el dashboard
- **Métricas de uso** - CPU, memoria, red
- **Estado del servicio** - Disponibilidad 24/7
- **Alertas por email** - Si el servicio falla

## 🔄 Actualizaciones

Para actualizar tu servidor:
1. Haz push de los cambios a GitHub
2. Render detectará automáticamente los cambios
3. Se desplegará la nueva versión automáticamente

## 💡 Consejos

1. **Backup automático:** Tu sistema de backups seguirá funcionando en la nube
2. **Dominio personalizado:** Puedes conectar tu dominio a Render
3. **SSL:** Render proporciona certificados SSL automáticamente
4. **Logs:** Revisa los logs en el dashboard de Render para debugging

## 📁 Estructura del Proyecto

```
admin/server/
├── server.js              # Servidor principal
├── package.json           # Dependencias
├── Procfile              # Para compatibilidad
├── render.yaml           # Configuración de Render
├── .env                  # Variables de entorno (local)
└── README.md             # Este archivo
```

## 🎯 Próximos Pasos

1. ✅ Subir proyecto a GitHub
2. ✅ Crear servicio en Render
3. ✅ Configurar variables de entorno
4. ✅ Desplegar
5. ✅ Actualizar frontend con nueva URL
6. ✅ ¡Disfrutar del gestor de contenido en la nube!

---

**¡Tu gestor de contenido estará funcionando 24/7 en la nube de forma gratuita!** 🎉
