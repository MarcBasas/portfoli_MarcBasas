import { createRequire } from 'module';
const require = createRequire(import.meta.url);

async function checkServer() {
  try {
    console.log('\nVerificando estado del servidor...\n');
    
    // Intentar conectar al servidor
    const response = await fetch('http://localhost:3001/api/health');
    
    if (response.ok) {
      const data = await response.json();
      console.log('========================================');
      console.log('SERVIDOR FUNCIONANDO CORRECTAMENTE');
      console.log('========================================');
      console.log('URL del servidor: http://localhost:3001');
      console.log('Panel de admin: http://localhost:5173/Admin1997');
      console.log('Estado API:', data.status);
      console.log('Mensaje:', data.message);
      console.log('========================================\n');
    } else {
      console.log('Servidor responde pero con error:', response.status);
    }
  } catch (error) {
    console.log('========================================');
    console.log('SERVIDOR NO ESTÁ FUNCIONANDO');
    console.log('========================================');
    console.log('No se puede conectar al puerto 3001');
    console.log('Para iniciarlo: npm run admin-server');
    console.log('Error:', error.message);
    console.log('========================================');
    console.log('1. Ejecuta: npm run admin-server');
    console.log('2. En otra terminal: npm run dev');
    console.log('3. Ve a: http://localhost:5173/Admin1997');
    console.log('========================================\n');
  }
}

checkServer();
