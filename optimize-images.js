const imagemin = require('imagemin');
const imageminMozjpeg = require('imagemin-mozjpeg');
const imageminPngquant = require('imagemin-pngquant');
const fs = require('fs').promises;
const path = require('path');

async function optimizeImages() {
  try {
    const images = await fs.readdir(path.join(__dirname, 'public/images'));
    
    await imagemin(
      images.map(image => path.join(__dirname, 'public/images', image)),
      {
        destination: path.join(__dirname, 'public/images'),
        plugins: [
          imageminMozjpeg({ quality: 80 }),
          imageminPngquant({
            quality: [0.6, 0.8],
            speed: 4
          })
        ]
      }
    );

    console.log('画像の最適化が完了しました！');
  } catch (error) {
    console.error('画像の最適化中にエラーが発生しました:', error);
  }
}

optimizeImages();
