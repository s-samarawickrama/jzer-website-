const fs = require('fs');
const { createCanvas, Image } = require('canvas');

const svgContent = fs.readFileSync('public/jzer-logo.svg', 'utf8');
const match = svgContent.match(/href="data:image\/png;base64,([^"]+)"/);

if (match) {
  const base64Data = match[1];
  const buffer = Buffer.from(base64Data, 'base64');
  
  const img = new Image();
  img.onload = () => {
    const canvas = createCanvas(img.width, img.height);
    const ctx = canvas.getContext('2d');
    ctx.drawImage(img, 0, 0);
    const imageData = ctx.getImageData(0, 0, img.width, img.height);
    const data = imageData.data;
    
    let minX = img.width, minY = img.height, maxX = 0, maxY = 0;
    
    for (let y = 0; y < img.height; y++) {
      for (let x = 0; x < img.width; x++) {
        const alpha = data[(y * img.width + x) * 4 + 3];
        if (alpha > 100) { // non-transparent
          if (x < minX) minX = x;
          if (x > maxX) maxX = x;
          if (y < minY) minY = y;
          if (y > maxY) maxY = y;
        }
      }
    }
    
    console.log(`Bounding box: x=${minX}, y=${minY}, width=${maxX - minX}, height=${maxY - minY}`);
  };
  img.src = buffer;
} else {
  console.log("No base64 found");
}
