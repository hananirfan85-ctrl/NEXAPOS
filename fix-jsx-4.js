import fs from 'fs';
import path from 'path';

function fixFile(filePath) {
  let content = fs.readFileSync(filePath, 'utf-8');
  let originalContent = content;

  content = content.replace(/<div[\s\}]+key=/g, '<div key=');
  content = content.replace(/<Route[\s\n]+path="admin"[\s\n]+element=\{[\s\n]+<AdminRoute>[\s\n]+<AdminPanel \/>[\s\n]+<\/AdminRoute>[\s\n]+\}\s*\/>/g, 
  '<Route path="admin" element={<AdminRoute><AdminPanel /></AdminRoute>} />');
  
  if (content !== originalContent) {
    fs.writeFileSync(filePath, content);
    console.log('Fixed', filePath);
  }
}

function traverseDir(dir) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const fullPath = path.join(dir, file);
    if (fs.statSync(fullPath).isDirectory()) {
      traverseDir(fullPath);
    } else if (fullPath.endsWith('.tsx') || fullPath.endsWith('.ts')) {
      fixFile(fullPath);
    }
  }
}

traverseDir('./src');
