const https = require('https');
const fs = require('fs');
const path = require('path');

const fileId = '1C8NPr-frz4zts21ajsgMEhL_wV_mND64';
const downloadUrl = `https://drive.google.com/uc?export=download&id=${fileId}`;
const outputPath = path.join(__dirname, 'public', 'logo-original.png');

console.log('Descargando logo desde Google Drive...');

const file = fs.createWriteStream(outputPath);

https.get(downloadUrl, (response) => {
  if (response.statusCode === 200) {
    response.pipe(file);
    
    file.on('finish', () => {
      file.close();
      console.log('✅ Logo descargado exitosamente:', outputPath);
      
      // Verificar tamaño del archivo
      const stats = fs.statSync(outputPath);
      console.log(`📏 Tamaño: ${stats.size} bytes`);
    });
  } else {
    console.error('❌ Error al descargar:', response.statusCode);
  }
}).on('error', (err) => {
  console.error('❌ Error de conexión:', err.message);
});