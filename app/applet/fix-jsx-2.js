import fs from 'fs';
import path from 'path';

function fixFile(filePath) {
  let content = fs.readFileSync(filePath, 'utf-8');
  let originalContent = content;

  // fix <div } } className...
  content = content.replace(/<([a-zA-Z0-9_]+)[\s\}]+className=/g, '<$1 className=');
  
  // fix <div } } >
  content = content.replace(/<([a-zA-Z0-9_]+)[\s\}]+>/g, '<$1>');

  // general fix for } } } 
  // If we have lines with just } before a prop or end of tag
  // e.g. 
  //   }
  //   }
  // />
  content = content.replace(/\s*\n\s*\}\s*\n\s*\}\s*\n\s*\}\s*\n\s*(className=|onClick=|>|\/>)/g, '\n          $1');
  content = content.replace(/\s*\n\s*\}\s*\n\s*\}\s*\n\s*(className=|onClick=|>|\/>)/g, '\n          $1');
  content = content.replace(/\s*\n\s*\}\s*\n\s*(className=|onClick=|>|\/>)/g, '\n          $1');
  
  // Also inline ` } } ` before props or `>`
  content = content.replace(/\s+\}\s+\}\s+(className=|onClick=|>|\/>)/g, ' $1');
  content = content.replace(/\s+\}\s+(className=|onClick=|>|\/>)/g, ' $1');
  
  // Let's do a more robust one, just target the broken layout patterns:
  content = content.replace(/<div\s+\}\s+\}\s+className/g, '<div className');
  content = content.replace(/<div\s+\}\s+className/g, '<div className');
  
  content = content.replace(/<h[1-6]\s+\}\s+\}/g, '<h1');
  content = content.replace(/<p\s+\}\s+\}/g, '<p');
  content = content.replace(/<span\s+\}\s+\}/g, '<span');
  
  // For Landing.tsx
  //           }
  //           }
  //           }
  //         />
  content = content.replace(/\n\s*\}\n\s*\}\n\s*\}\n\s*\/>/g, '\n        />');
  content = content.replace(/\n\s*\}\n\s*\}\n\s*\/>/g, '\n        />');
  content = content.replace(/\n\s*\}\n\s*\/>/g, '\n        />');

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
