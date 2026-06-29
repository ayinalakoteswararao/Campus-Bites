const fs = require('fs');
const path = require('path');

const directoryPath = path.join(__dirname, 'frontend', 'frontend', 'src');

function replaceInFile(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');
  let originalContent = content;

  // Replace single quoted strings: 'http://localhost:4000/something' -> `${process.env.REACT_APP_API_URL || 'http://localhost:4000'}/something`
  // We match 'http://localhost:4000...' and capture the rest of the string until the closing quote.
  content = content.replace(/'http:\/\/localhost:4000([^']*)'/g, "`\\${process.env.REACT_APP_API_URL || 'http://localhost:4000'}$1`");

  // Replace double quoted strings: "http://localhost:4000/something" -> `${process.env.REACT_APP_API_URL || 'http://localhost:4000'}/something`
  content = content.replace(/"http:\/\/localhost:4000([^"]*)"/g, "`\\${process.env.REACT_APP_API_URL || 'http://localhost:4000'}$1`");

  // Replace template literals: `http://localhost:4000/something` -> `${process.env.REACT_APP_API_URL || 'http://localhost:4000'}/something`
  content = content.replace(/`http:\/\/localhost:4000([^`]*)`/g, "`\\${process.env.REACT_APP_API_URL || 'http://localhost:4000'}$1`");

  if (content !== originalContent) {
    fs.writeFileSync(filePath, content, 'utf8');
    console.log('Updated:', filePath);
  }
}

function traverseDirectory(dir) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const fullPath = path.join(dir, file);
    if (fs.statSync(fullPath).isDirectory()) {
      traverseDirectory(fullPath);
    } else if (fullPath.endsWith('.js') || fullPath.endsWith('.jsx')) {
      replaceInFile(fullPath);
    }
  }
}

traverseDirectory(directoryPath);
console.log('Done replacing URLs');
