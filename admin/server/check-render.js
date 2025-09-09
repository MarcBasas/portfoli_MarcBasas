#!/usr/bin/env node

import { promises as fs } from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

console.log('🔍 VERIFICANDO CONFIGURACIÓN PARA RENDER...\n');

const checks = [
  {
    name: 'package.json',
    file: 'package.json',
    required: true,
    check: async (content) => {
      const pkg = JSON.parse(content);
      return pkg.engines && pkg.engines.node && pkg.engines.node >= '18.0.0';
    }
  },
  {
    name: 'server.js',
    file: 'server.js',
    required: true,
    check: async (content) => {
      return content.includes('process.env.PORT || 3001');
    }
  },
  {
    name: 'Procfile',
    file: 'Procfile',
    required: true,
    check: async (content) => {
      return content.trim() === 'web: npm start';
    }
  },
  {
    name: 'render.yaml',
    file: 'render.yaml',
    required: false,
    check: async (content) => {
      return content.includes('type: web') && content.includes('env: node');
    }
  }
];

let allPassed = true;

for (const check of checks) {
  try {
    const filePath = path.join(__dirname, check.file);
    const content = await fs.readFile(filePath, 'utf8');
    
    if (check.check) {
      const result = await check.check(content);
      if (result) {
        console.log(`✅ ${check.name} - OK`);
      } else {
        console.log(`❌ ${check.name} - CONFIGURACIÓN INCORRECTA`);
        allPassed = false;
      }
    } else {
      console.log(`✅ ${check.name} - EXISTE`);
    }
  } catch (error) {
    if (check.required) {
      console.log(`❌ ${check.name} - NO ENCONTRADO`);
      allPassed = false;
    } else {
      console.log(`⚠️  ${check.name} - NO ENCONTRADO (opcional)`);
    }
  }
}

console.log('\n📋 VARIABLES DE ENTORNO REQUERIDAS EN RENDER:');
console.log('   NODE_ENV=production');
console.log('   ADMIN_PIN=tu-pin-secreto');
console.log('   JWT_SECRET=tu-clave-secreta-muy-larga');
console.log('   SESSION_DURATION_HOURS=24');

console.log('\n🚀 COMANDOS DE DESPLIEGUE:');
console.log('   Build Command: cd admin/server && npm install');
console.log('   Start Command: cd admin/server && npm start');

if (allPassed) {
  console.log('\n🎉 ¡TODO LISTO PARA RENDER!');
  console.log('   Puedes proceder con el despliegue.');
} else {
  console.log('\n⚠️  HAY PROBLEMAS QUE RESOLVER ANTES DEL DESPLIEGUE.');
}

console.log('\n📖 Para más información, consulta: admin/server/README.md');
