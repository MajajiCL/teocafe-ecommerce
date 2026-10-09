const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const brandingDir = path.join(__dirname, '..', 'assets', 'branding');
const edgePath = 'C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe';

const assets = [
  {
    svgName: 'teocafe-instagram-avatar.svg',
    pngName: 'teocafe-instagram-avatar.png',
    width: 1080,
    height: 1080,
    bg: '#050403'
  },
  {
    svgName: 'teocafe-logo-transparent-gold.svg',
    pngName: 'teocafe-logo-transparent-gold.png',
    width: 1080,
    height: 1080,
    bg: 'transparent'
  },
  {
    svgName: 'teocafe-logo-transparent-white.svg',
    pngName: 'teocafe-logo-transparent-white.png',
    width: 1080,
    height: 1080,
    bg: 'transparent'
  },
  {
    svgName: 'teocafe-logo-horizontal.svg',
    pngName: 'teocafe-logo-horizontal.png',
    width: 1200,
    height: 400,
    bg: '#050403'
  },
  {
    svgName: 'teocafe-instagram-post-lanzamiento.svg',
    pngName: 'teocafe-instagram-post-lanzamiento.png',
    width: 1080,
    height: 1080,
    bg: '#050403'
  }
];

const tempHtml = path.join(__dirname, 'temp-render.html');

for (const item of assets) {
  const svgPath = path.join(brandingDir, item.svgName);
  const outPng = path.join(brandingDir, item.pngName);
  const svgContent = fs.readFileSync(svgPath, 'utf8');

  const html = `<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Cinzel:wght@600;700;800;900&family=Montserrat:wght@400;500;600;700;800&display=swap" rel="stylesheet">
  <style>
    * { margin: 0; padding: 0; box-sizing: border-box; }
    html, body {
      width: ${item.width}px;
      height: ${item.height}px;
      overflow: hidden;
      background: ${item.bg};
    }
    svg {
      width: ${item.width}px;
      height: ${item.height}px;
      display: block;
    }
  </style>
</head>
<body>
  ${svgContent}
</body>
</html>`;

  fs.writeFileSync(tempHtml, html, 'utf8');

  console.log(`Rendering ${item.pngName} (${item.width}x${item.height})...`);
  const cmd = `"${edgePath}" --headless --disable-gpu --hide-scrollbars --window-size=${item.width},${item.height} --screenshot="${outPng}" "${tempHtml}"`;
  
  try {
    execSync(cmd, { stdio: 'pipe' });
    console.log(`✅ Creado: ${item.pngName}`);
  } catch (err) {
    console.error(`Error al renderizar ${item.pngName}:`, err.message);
  }
}

if (fs.existsSync(tempHtml)) {
  fs.unlinkSync(tempHtml);
}

console.log('🎉 Todos los PNGs fueron renderizados con éxito!');
