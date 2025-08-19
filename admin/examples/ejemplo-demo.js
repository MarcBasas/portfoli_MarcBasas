// Ejemplo de estructura para un archivo demo
// Guarda este archivo con el nombre de tu proyecto seguido de "-demo.js"
// Por ejemplo: mi-proyecto-demo.js

export const miProyectoDemo = {
  html: `
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Mi Proyecto Demo</title>
</head>
<body>
    <div class="container">
        <h1>Mi Proyecto</h1>
        <button id="miBoton" class="btn">¡Haz click!</button>
        <div id="resultado"></div>
    </div>
</body>
</html>
  `,
  
  css: `
/* Estilos CSS para tu demo */
.container {
    max-width: 800px;
    margin: 0 auto;
    padding: 2rem;
    font-family: Arial, sans-serif;
}

h1 {
    color: #333;
    text-align: center;
}

.btn {
    background: #007bff;
    color: white;
    border: none;
    padding: 10px 20px;
    border-radius: 5px;
    cursor: pointer;
    font-size: 16px;
    display: block;
    margin: 20px auto;
}

.btn:hover {
    background: #0056b3;
}

#resultado {
    margin-top: 20px;
    padding: 10px;
    background: #f8f9fa;
    border-radius: 5px;
    text-align: center;
}
  `,
  
  js: `
// JavaScript para tu demo
document.addEventListener('DOMContentLoaded', function() {
    const boton = document.getElementById('miBoton');
    const resultado = document.getElementById('resultado');
    
    boton.addEventListener('click', function() {
        resultado.innerHTML = '<p>¡Funciona! Hora actual: ' + new Date().toLocaleTimeString() + '</p>';
    });
});
  `
};

// NOTAS IMPORTANTES:
// 1. El nombre de la exportación debe seguir el patrón camelCase
// 2. Si tu proyecto se llama "mi-super-proyecto", la exportación sería: miSuperProyectoDemo
// 3. El objeto debe contener al menos las propiedades: html, css, js
// 4. Puedes usar template literals (backticks) para código multilínea
// 5. Asegúrate de que el JavaScript sea válido y no tenga errores de sintaxis
