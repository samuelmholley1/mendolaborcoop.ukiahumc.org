const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const inputFile = path.join(__dirname, 'public', 'mendo_labor_coop_favicon.png');
const outputDir = path.join(__dirname, 'public');

// Favicon sizes to generate
const sizes = [
  { name: 'favicon-16x16.png', size: 16 },
  { name: 'favicon-32x32.png', size: 32 },
  { name: 'apple-touch-icon.png', size: 180 },
  { name: 'android-chrome-192x192.png', size: 192 },
  { name: 'android-chrome-512x512.png', size: 512 },
];

async function generateFavicons() {
  console.log('🎨 Generating favicons from mendo_labor_coop_favicon.png...\n');

  // Check if input file exists
  if (!fs.existsSync(inputFile)) {
    console.error('❌ Error: mendo_labor_coop_favicon.png not found in public directory');
    process.exit(1);
  }

  // Generate each size
  for (const { name, size } of sizes) {
    const outputPath = path.join(outputDir, name);
    await sharp(inputFile)
      .resize(size, size, {
        fit: 'contain',
        background: { r: 255, g: 255, b: 255, alpha: 0 }
      })
      .png()
      .toFile(outputPath);
    console.log(`✅ Generated ${name} (${size}x${size})`);
  }

  // Generate favicon.ico (using 32x32 as base)
  const icoPath = path.join(outputDir, 'favicon.ico');
  await sharp(inputFile)
    .resize(32, 32, {
      fit: 'contain',
      background: { r: 255, g: 255, b: 255, alpha: 0 }
    })
    .png()
    .toFile(icoPath);
  console.log(`✅ Generated favicon.ico (32x32)`);

  console.log('\n🎉 All favicons generated successfully!');
}

generateFavicons().catch(err => {
  console.error('❌ Error generating favicons:', err);
  process.exit(1);
});
