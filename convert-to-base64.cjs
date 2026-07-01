const fs = require('fs');
const path = require('path');

const imagePath = process.argv[2];

if (!imagePath) {
  console.error('Please provide an image path as an argument.');
  console.error('Usage: node convert-to-base64.js <path-to-image>');
  process.exit(1);
}

try {
  const absolutePath = path.resolve(imagePath);
  const fileData = fs.readFileSync(absolutePath);
  const ext = path.extname(absolutePath).toLowerCase();
  
  let mimeType = 'image/jpeg';
  if (ext === '.png') mimeType = 'image/png';
  else if (ext === '.gif') mimeType = 'image/gif';
  else if (ext === '.svg') mimeType = 'image/svg+xml';
  else if (ext === '.webp') mimeType = 'image/webp';

  const base64String = `data:${mimeType};base64,${fileData.toString('base64')}`;
  
  console.log('Base64 string generated successfully!');
  console.log('\nCopy the string below:\n');
  console.log(base64String.substring(0, 100) + '... [TRUNCATED]'); // Showing truncated for terminal, they can pipe to file
  
  // Optionally write to a file
  const outputPath = path.join(path.dirname(absolutePath), 'base64-output.txt');
  fs.writeFileSync(outputPath, base64String);
  console.log(`\nFull Base64 string saved to: ${outputPath}`);
  
} catch (error) {
  console.error('Error converting file:', error.message);
}
