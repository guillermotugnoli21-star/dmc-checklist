// Script para generar iconos PWA en múltiples tamaños
// Ejecutar: node scripts/generate-icons.js

const fs = require('fs');
const path = require('path');

// Tamaños requeridos para PWA
const iconSizes = [72, 96, 128, 144, 152, 192, 384, 512];

console.log('=== Generador de Iconos DMC Checklist ===');
console.log('Coloca tu logo como "logo-original.png" en la carpeta public/');
console.log('Luego ejecuta: npm run generate-icons');
console.log('');
console.log('Tamaños que se generarán:');
iconSizes.forEach(size => {
  console.log(`  • ${size}x${size}px`);
});