// Script simple para compilar SCSS
// Instala: npm install sass
// Ejecuta: node compile-sass.js

const sass = require('sass');
const fs = require('fs');
const path = require('path');

const scssFile = path.join(__dirname, 'styles', 'saas.scss');
const cssFile = path.join(__dirname, 'styles', 'saas.css');

try {
  const result = sass.compile(scssFile, { style: 'expanded' });
  fs.writeFileSync(cssFile, result.css);
  console.log('✅ SCSS compilado correctamente a:', cssFile);
} catch (error) {
  console.error('❌ Error al compilar SCSS:', error.message);
  process.exit(1);
}
