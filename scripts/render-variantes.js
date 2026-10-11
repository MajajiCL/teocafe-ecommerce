/**
 * render-variantes.js — pasa a PNG 1080x1080 las variantes que se le indiquen.
 *
 * Mismo método que `render-pngs.js`: Edge headless captura una página que solo
 * contiene el SVG. Se usa un navegador y no una librería porque los SVG de esta
 * marca traen @import de Google Fonts, y eso solo lo resuelve algo que sepa
 * pedir la hoja de estilos por red. Un renderizador offline dibujaría el texto
 * con una fuente de respaldo y el PNG saldría con otra tipografía sin avisar.
 *
 * DOS COSAS QUE PARECEN DE MÁS Y NO LO SON
 *
 * 1. `--user-data-dir` ÚNICO por render. Sin él, Edge reutiliza la instancia
 *    que ya está en marcha y la segunda captura en adelante devuelve LA PÁGINA
 *    ANTERIOR. No da error: escribe un PNG válido con el dibujo equivocado. Se
 *    detectó porque cuatro variantes distintas salieron byte a byte idénticas
 *    —mismo hash, mismos 77.824 px de tinta, mismo radio máximo—. Si no
 *    hubieran coincidido con tanta exactitud, habría pasado por bueno.
 *
 * 2. Un HTML temporal POR VARIANTE. Con uno compartido, un Edge que tarda en
 *    leerlo se encuentra el fichero ya reescrito por la vuelta siguiente, y
 *    falla de forma intermitente — la peor manera de fallar.
 *
 * Y cuando algo falla se enseña lo que dijo Edge, no solo «falló»: un script
 * que se traga el stderr obliga a adivinar.
 *
 * Uso:  node scripts/render-variantes.js variant-25 variant-26
 *       node scripts/render-variantes.js            (todas las que falten)
 */
const fs = require('fs');
const os = require('os');
const path = require('path');
const { execSync } = require('child_process');

const DIR = path.join(__dirname, '..', 'assets', 'branding');
const EDGE = 'C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe';
const LADO = 1080;
const ESPERA_FUENTES = 2500;   // ms de tiempo virtual antes de capturar
const INTENTOS = 2;

if (!fs.existsSync(EDGE)) {
  console.error(`No encuentro Edge en ${EDGE}`);
  process.exit(1);
}

const pedidos = process.argv.slice(2);
let svgs = fs.readdirSync(DIR).filter(f => f.endsWith('.svg') && f.startsWith('variant-'));
svgs = pedidos.length
  ? svgs.filter(f => pedidos.some(p => f.includes(p)))
  : svgs.filter(f => !fs.existsSync(path.join(DIR, f.replace('.svg', '.png'))));

if (!svgs.length) {
  console.log('Nada que renderizar.');
  process.exit(0);
}

const CABECERA = `<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Cinzel:wght@400;500;600;700;800;900&family=Montserrat:wght@200;300;400;500;600;700;800;900&family=Playfair+Display:ital,wght@0,400;0,600;0,700;0,900;1,400&display=swap" rel="stylesheet">`;

const temporales = [];
let ok = 0;

for (const svgFile of svgs) {
  const base = svgFile.replace(/\W/g, '');
  const svg = fs.readFileSync(path.join(DIR, svgFile), 'utf8');
  const png = path.join(DIR, svgFile.replace('.svg', '.png'));
  const tmp = path.join(__dirname, `temp-${base}.html`);
  temporales.push(tmp);

  fs.writeFileSync(tmp, `<!DOCTYPE html>
<html><head><meta charset="utf-8">
${CABECERA}
<style>
  *{margin:0;padding:0;box-sizing:border-box}
  html,body{width:${LADO}px;height:${LADO}px;overflow:hidden;background:#050403}
  svg{width:${LADO}px;height:${LADO}px;display:block}
</style></head>
<body>${svg}</body></html>`, 'utf8');

  process.stdout.write(`  ${svgFile.replace('.svg', '').padEnd(34)}`);

  let logrado = false;
  let ultimoMotivo = '';
  for (let intento = 1; intento <= INTENTOS && !logrado; intento++) {
    const perfil = path.join(os.tmpdir(), `edge-render-${base}-${intento}`);
    try {
      execSync(
        `"${EDGE}" --headless --disable-gpu --hide-scrollbars --force-device-scale-factor=1 ` +
        `--user-data-dir="${perfil}" --no-first-run --no-default-browser-check ` +
        `--virtual-time-budget=${ESPERA_FUENTES} --window-size=${LADO},${LADO} ` +
        `--screenshot="${png}" "${tmp}"`,
        { stdio: 'pipe', timeout: 120000 }
      );
      if (!fs.existsSync(png)) throw new Error('Edge terminó sin escribir el PNG');
      const kb = Math.round(fs.statSync(png).size / 1024);
      console.log(`  OK  ${kb} KB${intento > 1 ? '  (al 2.º intento)' : ''}`);
      ok++;
      logrado = true;
    } catch (err) {
      ultimoMotivo = (err.stderr || err.stdout || '').toString().trim().split('\n')
        .filter(l => l && !/^\[\d+:\d+/.test(l)).slice(-2).join(' | ')
        || String(err.message).split('\n')[0];
    }
  }
  if (!logrado) console.log(`  x  ${ultimoMotivo}`.slice(0, 160));
}

for (const t of temporales) if (fs.existsSync(t)) fs.unlinkSync(t);
console.log(`\n${ok} de ${svgs.length} renderizadas en assets/branding/`);
process.exitCode = ok === svgs.length ? 0 : 1;
