#!/usr/bin/env node

/**
 * Script para verificar que el servidor tenga los cambios necesarios
 * Ejecutar con: node admin/scripts/deploy-server-fix.js
 */

import https from 'https';

const SERVER_URL = 'https://portfolio-admin-server-76sn.onrender.com';

console.log('🔍 VERIFICANDO ESTADO DEL SERVIDOR...\n');

// Test del nuevo endpoint público
function testPublicEndpoint() {
  return new Promise((resolve, reject) => {
    const req = https.get(`${SERVER_URL}/api/projects?t=${Date.now()}`, (res) => {
      let data = '';
      
      res.on('data', (chunk) => {
        data += chunk;
      });
      
      res.on('end', () => {
        try {
          const response = JSON.parse(data);
          resolve({
            status: res.statusCode,
            success: response.success,
            projectCount: {
              web: response.projects?.web?.length || 0,
              games: response.projects?.games?.length || 0
            }
          });
        } catch (error) {
          reject(error);
        }
      });
    });
    
    req.on('error', (error) => {
      reject(error);
    });
    
    req.setTimeout(10000, () => {
      req.abort();
      reject(new Error('Timeout'));
    });
  });
}

// Test del endpoint de salud
function testHealthEndpoint() {
  return new Promise((resolve, reject) => {
    const req = https.get(`${SERVER_URL}/api/health`, (res) => {
      let data = '';
      
      res.on('data', (chunk) => {
        data += chunk;
      });
      
      res.on('end', () => {
        try {
          const response = JSON.parse(data);
          resolve({
            status: res.statusCode,
            message: response.message
          });
        } catch (error) {
          reject(error);
        }
      });
    });
    
    req.on('error', (error) => {
      reject(error);
    });
    
    req.setTimeout(5000, () => {
      req.abort();
      reject(new Error('Timeout'));
    });
  });
}

async function main() {
  try {
    console.log('1️⃣  Verificando servidor base...');
    const health = await testHealthEndpoint();
    console.log(`   ✅ Servidor funcionando: ${health.message}`);
    
    console.log('\n2️⃣  Verificando endpoint público de proyectos...');
    const projects = await testPublicEndpoint();
    
    if (projects.status === 200 && projects.success) {
      console.log(`   ✅ Endpoint público funcionando correctamente`);
      console.log(`   📊 Proyectos encontrados: ${projects.projectCount.web} web, ${projects.projectCount.games} games`);
      
      console.log('\n🎉 ¡SERVIDOR ACTUALIZADO CORRECTAMENTE!');
      console.log('\n📋 Próximos pasos:');
      console.log('   1. Refresca tu frontend (F5)');
      console.log('   2. Abre la consola del navegador (F12)');
      console.log('   3. Deberías ver: "PROYECTOS CARGADOS DESDE SERVIDOR"');
      console.log('   4. Prueba agregar un proyecto desde el admin');
      
    } else if (projects.status === 404) {
      console.log('   ❌ Endpoint público no encontrado');
      console.log('   🔄 El servidor necesita ser redesplegado con los cambios');
      console.log('\n📋 Para desplegar en Render:');
      console.log('   1. Haz commit de los cambios: git add . && git commit -m "Add public projects endpoint"');
      console.log('   2. Haz push: git push');
      console.log('   3. Render redesplegará automáticamente');
      
    } else {
      console.log(`   ⚠️  Respuesta inesperada: Status ${projects.status}`);
      console.log(`   📄 Contenido: ${JSON.stringify(projects, null, 2)}`);
    }
    
  } catch (error) {
    console.log(`   ❌ Error: ${error.message}`);
    console.log('\n🔧 Posibles soluciones:');
    console.log('   1. Verifica que el servidor esté funcionando');
    console.log('   2. Revisa los logs del servidor en Render');
    console.log('   3. Asegúrate de haber desplegado los cambios');
  }
}

main();
