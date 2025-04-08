const fs = require('fs');
const path = require('path');

function copyRecursiveSync(src, dest) {
  if (!fs.existsSync(src)) return;

  const stats = fs.statSync(src);
  if (stats.isDirectory()) {
    if (!fs.existsSync(dest)) {
      fs.mkdirSync(dest, { recursive: true });
    }

    const items = fs.readdirSync(src);
    items.forEach(item => {
      copyRecursiveSync(
        path.join(src, item),
        path.join(dest, item)
      );
    });
  } else {
    fs.copyFileSync(src, dest);
  }
}

const from = path.join(__dirname, '../images/uploads');
const to = path.join(__dirname, '../public/images/uploads');

copyRecursiveSync(from, to);

console.log('✅ Archivos copiados a public/images/uploads');
