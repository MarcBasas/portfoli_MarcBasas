# Guía de Despliegue - Servidor de Administración

Esta guía te ayudará a desplegar tu servidor de administración en la nube de forma gratuita.

## 🚀 Opciones Recomendadas

### 1. **Render** (MÁS RECOMENDADA)
- ✅ Siempre activo
- ✅ Fácil configuración
- ✅ 750 horas gratis/mes
- ✅ Soporte completo para Node.js

### 2. **Railway**
- ✅ Muy fácil de usar
- ✅ $5 crédito gratis/mes
- ✅ Siempre activo

### 3. **Fly.io**
- ✅ Muy potente
- ✅ Plan gratuito generoso
- ✅ Siempre activo

## 📋 Pasos para Desplegar en Render

### Paso 1: Preparar el Repositorio
1. Sube tu proyecto a GitHub (si no lo has hecho)
2. Asegúrate de que la carpeta `admin/server/` esté en el repositorio

### Paso 2: Crear Cuenta en Render
1. Ve a [render.com](https://render.com)
2. Regístrate con tu cuenta de GitHub
3. Conecta tu repositorio

### Paso 3: Crear Servicio Web
1. Haz clic en "New +" → "Web Service"
2. Conecta tu repositorio de GitHub
3. Configura el servicio:
   - **Name:** `portfolio-admin-server`
   - **Environment:** `Node`
   - **Build Command:** `cd admin/server && npm install`
   - **Start Command:** `cd admin/server && npm start`
   - **Plan:** `Free`

### Paso 4: Configurar Variables de Entorno
En la sección "Environment Variables", añade:

```
NODE_ENV=production
ADMIN_PIN=tu-pin-secreto-aqui
JWT_SECRET=tu-clave-secreta-muy-larga-aqui
SESSION_DURATION_HOURS=24
```

**Para generar JWT_SECRET seguro:**
```bash
node -e "console.log(require('crypto').randomBytes(64).toString('hex'))"
```

### Paso 5: Desplegar
1. Haz clic en "Create Web Service"
2. Espera a que se complete el despliegue (5-10 minutos)
3. Tu servidor estará disponible en: `https://tu-servicio.onrender.com`

## 🔧 Configuración del Frontend

Una vez desplegado, actualiza tu frontend para usar la nueva URL:

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

## 📱 Acceso al Panel de Administración

Una vez desplegado:
1. Ve a tu sitio web: `https://tu-dominio.com/Admin1997`
2. Usa el PIN que configuraste en las variables de entorno
3. ¡Ya puedes gestionar tu contenido desde cualquier lugar!

## 🔍 Verificar que Funciona

### Health Check:
```bash
curl https://tu-servicio.onrender.com/api/health
```

Debería devolver:
```json
{
  "status": "OK",
  "message": "Servidor de administración funcionando"
}
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

## 💡 Consejos Adicionales

1. **Backup automático:** Tu sistema de backups seguirá funcionando en la nube
2. **Dominio personalizado:** Puedes conectar tu dominio a Render
3. **SSL:** Render proporciona certificados SSL automáticamente
4. **Logs:** Revisa los logs en el dashboard de Render para debugging

## 🔄 Actualizaciones

Para actualizar tu servidor:
1. Haz push de los cambios a GitHub
2. Render detectará automáticamente los cambios
3. Se desplegará la nueva versión automáticamente

## 📊 Monitoreo

Render proporciona:
- Logs en tiempo real
- Métricas de uso
- Estado del servicio
- Alertas por email

---

¡Con esto tendrás tu gestor de contenido funcionando 24/7 en la nube de forma gratuita!
