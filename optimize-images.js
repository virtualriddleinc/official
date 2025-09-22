#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

// Image optimization script
const optimizeImages = () => {
  const ofisDir = path.join(__dirname, 'public', 'images', 'ofis');
  const files = fs.readdirSync(ofisDir).filter(file => file.endsWith('.jpg'));
  
  console.log(`Found ${files.length} images to optimize...`);
  
  files.forEach((file, index) => {
    const inputPath = path.join(ofisDir, file);
    const outputPath = path.join(ofisDir, file.replace('.jpg', '_optimized.jpg'));
    
    try {
      // Use ImageMagick to optimize images
      // Resize to max 1200x800, quality 85%, progressive JPEG
      execSync(`convert "${inputPath}" -resize 1200x800> -quality 85 -interlace Plane "${outputPath}"`, { stdio: 'inherit' });
      
      // Get file sizes
      const originalSize = fs.statSync(inputPath).size;
      const optimizedSize = fs.statSync(outputPath).size;
      const savings = ((originalSize - optimizedSize) / originalSize * 100).toFixed(1);
      
      console.log(`${index + 1}/${files.length}: ${file}`);
      console.log(`  Original: ${(originalSize / 1024 / 1024).toFixed(2)}MB`);
      console.log(`  Optimized: ${(optimizedSize / 1024 / 1024).toFixed(2)}MB`);
      console.log(`  Savings: ${savings}%`);
      console.log('');
      
    } catch (error) {
      console.error(`Error optimizing ${file}:`, error.message);
    }
  });
  
  console.log('Image optimization completed!');
  console.log('Replace original files with optimized versions if satisfied with results.');
};

// Check if ImageMagick is installed
try {
  execSync('convert -version', { stdio: 'pipe' });
  optimizeImages();
} catch (error) {
  console.log('ImageMagick not found. Installing via Homebrew...');
  try {
    execSync('brew install imagemagick', { stdio: 'inherit' });
    optimizeImages();
  } catch (brewError) {
    console.error('Please install ImageMagick manually:');
    console.error('  macOS: brew install imagemagick');
    console.error('  Ubuntu: sudo apt-get install imagemagick');
    console.error('  Windows: Download from https://imagemagick.org/script/download.php');
  }
}

