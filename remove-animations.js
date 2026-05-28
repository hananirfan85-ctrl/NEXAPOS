import fs from 'fs';
import path from 'path';

function processFile(filePath) {
  let content = fs.readFileSync(filePath, 'utf-8');
  let originalContent = content;

  // 1. Remove motion imports
  content = content.replace(/import\s*\{\s*[^}]*\bmotion\b[^}]*\}\s*from\s*['"]motion\/react['"];?\n?/g, '');
  content = content.replace(/import\s*\{\s*AnimatePresence\s*\}\s*from\s*['"]motion\/react['"];?\n?/g, '');

  content = content.replace(/import\s*\{\s*AnimatePresence\s*,\s*motion\s*\}\s*from\s*['"]motion\/react['"];?\n?/g, '');
  content = content.replace(/import\s*\{\s*motion\s*,\s*AnimatePresence\s*\}\s*from\s*['"]motion\/react['"];?\n?/g, '');

  
  // 2. Remove AnimatePresence wrapper
  content = content.replace(/<AnimatePresence[^>]*>/g, '<>');
  content = content.replace(/<\/AnimatePresence>/g, '</>');

  // 3. Remove motion prefixes
  content = content.replace(/<motion\.([a-zA-Z0-9]+)/g, '<$1');
  content = content.replace(/<\/motion\.([a-zA-Z0-9]+)>/g, '</$1>');

  // 4. Remove animation props
  content = content.replace(/\b(initial|animate|exit|whileInView|viewport|variants|transition|layoutId|layout)=\{[^}]+\}/g, '');
  content = content.replace(/\b(initial|animate|exit|whileHover|whileTap|layout)="[^"]*"/g, '');
  content = content.replace(/\blayout\b\s*/g, '');

  // Clean up any remaining empty props that might look like layout=""
  // Not strictly needed, regex above handles it. But we could have multiple spaces.
  content = content.replace(/<([a-zA-Z0-9]+)\s+>/g, '<$1>');
  
  // Handle "barcode" removals
  content = content.replace(/Utilize barcode scanners with/g, 'Utilize fast entry with');
  content = content.replace(/Hardware or device-bound scanners/g, 'Fast product search options');
  content = content.replace(/Barcode Scanning/g, 'Fast Search');
  content = content.replace(/the moment a barcode is logged/g, 'the moment an item is logged');
  content = content.replace(/lightning-speed barcode scanning to/g, 'lightning-speed item entry to');
  content = content.replace(/laser barcode scanners instantly/g, 'fast search features instantly');
  content = content.replace(/Every time a barcode is scanned/g, 'Every time an item is entered');
  content = content.replace(/receipt printers, barcode scanners/g, 'receipt printers');
  content = content.replace(/USB barcode scanners/g, 'USB peripherals');


  if (content !== originalContent) {
    fs.writeFileSync(filePath, content);
    console.log('Processed', filePath);
  }
}

function traverseDir(dir) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const fullPath = path.join(dir, file);
    if (fs.statSync(fullPath).isDirectory()) {
      traverseDir(fullPath);
    } else if (fullPath.endsWith('.tsx') || fullPath.endsWith('.ts')) {
      processFile(fullPath);
    }
  }
}

traverseDir('./src');
