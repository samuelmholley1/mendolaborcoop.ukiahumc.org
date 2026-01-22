const sharp = require('sharp');
const path = require('path');
const fs = require('fs');

const workersDir = path.join(__dirname, 'public', 'workers');
const originalsDir = path.join(workersDir, 'originals');

// Photos to process - mapping original filenames to output names
const photos = [
  { original: 'braven-original.jpg', output: 'braven.jpg' },
  { original: 'casey-original.jpg', output: 'casey.jpg' },
  { original: 'david-original.jpg', output: 'david.jpg' },
  { original: 'efren-original.jpg', output: 'efren.jpg' },
  { original: 'tony-original.jpg', output: 'tony.jpg' },
  { original: 'tony-maples-original.jpg', output: 'tony-maples.jpg' },
];

async function cropPhoto(inputPath, outputPath) {
  try {
    // Get image metadata
    const metadata = await sharp(inputPath).metadata();
    const { width, height } = metadata;
    
    console.log(`Processing: ${path.basename(inputPath)} (${width}x${height})`);
    
    // Calculate crop dimensions - keep middle 50% in each dimension
    // Remove 25% from each side
    const cropWidth = Math.round(width * 0.5);
    const cropHeight = Math.round(height * 0.5);
    const left = Math.round(width * 0.25);
    const top = Math.round(height * 0.25);
    
    console.log(`  Cropping to: ${cropWidth}x${cropHeight} (starting at ${left},${top})`);
    
    await sharp(inputPath)
      .extract({ left, top, width: cropWidth, height: cropHeight })
      .jpeg({ quality: 90 })
      .toFile(outputPath);
    
    console.log(`  Saved: ${path.basename(outputPath)}`);
    return true;
  } catch (error) {
    console.error(`Error processing ${inputPath}:`, error.message);
    return false;
  }
}

async function main() {
  console.log('Cropping worker photos (keeping middle 50%)...\n');
  
  for (const photo of photos) {
    const inputPath = path.join(originalsDir, photo.original);
    const outputPath = path.join(workersDir, photo.output);
    
    if (fs.existsSync(inputPath)) {
      await cropPhoto(inputPath, outputPath);
    } else {
      console.log(`Skipping ${photo.original} - file not found`);
    }
  }
  
  console.log('\nDone! Cropped photos saved to public/workers/');
  console.log('Originals preserved in public/workers/originals/');
}

main();
