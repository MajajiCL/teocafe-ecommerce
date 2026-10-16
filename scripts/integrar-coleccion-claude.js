/**
 * integrar-coleccion-claude.js — mete la Colección Claude Code en el catálogo.
 *
 * El catálogo no se edita a mano: `brand-kit.html` lo ESCRIBE ENTERO
 * `generate-brand-kit-catalog.js`. Tocar el HTML directamente funciona hasta
 * que alguien vuelve a ejecutar el generador y lo pisa sin avisar. Así que lo
 * que se modifica es el generador, y el HTML se regenera después.
 *
 * Tres cosas, y las tres fallan en silencio si se olvida una:
 *   1. las fichas, al final de `variantsData`
 *   2. el botón de la familia nueva — sin él las variantes existen pero no hay
 *      forma de filtrarlas
 *   3. el contador de «Todas las Variantes (N)», que está escrito a mano
 *
 * Uso:  node scripts/integrar-coleccion-claude.js <fichas.json>
 */
const fs = require('fs');
const path = require('path');

const GEN = path.join(__dirname, 'generate-brand-kit-catalog.js');
const entrada = process.argv[2];
if (!entrada || !fs.existsSync(entrada)) {
  console.error('Uso: node scripts/integrar-coleccion-claude.js <fichas.json>');
  process.exit(1);
}

const fichas = JSON.parse(fs.readFileSync(entrada, 'utf8'));
let src = fs.readFileSync(GEN, 'utf8');

if (src.includes('family: "claude"')) {
  console.log('   La colección ya estaba integrada. No toco nada.');
  process.exit(0);
}

// ── 1 · las fichas, al final del array ───────────────────────────────────
const esc = (s) => String(s).replace(/\\/g, '\\\\').replace(/"/g, '\\"');
const bloques = fichas.map(f => `  {
    id: ${f.n},
    family: "claude",
    familyName: "Colección Claude Code",
    badge: "${esc(f.badge)}",
    badgeClass: "bg-gradient-to-r from-amber-500/20 to-amber-300/10 text-amber-200 border border-amber-400/50",
    name: "${esc(f.name)}",
    subtitle: "${esc(f.subtitle)}",
    png: "assets/branding/variant-${f.n}-${f.slug}.png",
    svg: "assets/branding/variant-${f.n}-${f.slug}.svg",
    author: "🤖 Creado por Claude Code",
    justification: "${esc(f.justification)}",
    symbolism: "${esc(f.symbolism)}",
    audience: "${esc(f.audience)}",
    bestFor: "${esc(f.bestFor)}"
  }`).join(',\n');

// El array termina en «\n];» — se busca el cierre que sigue a la última ficha.
const cierre = src.indexOf('\n];');
if (cierre < 0) { console.error('   x no encuentro el cierre de variantsData'); process.exit(1); }
src = src.slice(0, cierre) + ',\n\n  // ── COLECCIÓN CLAUDE CODE ──\n' + bloques + src.slice(cierre);
console.log(`   OK ${fichas.length} fichas añadidas a variantsData`);

// ── 2 · el botón de la familia ───────────────────────────────────────────
const anclaBoton = `          <button onclick="setFilter('heritage')"`;
if (!src.includes(anclaBoton)) { console.error('   x no encuentro el botón de heritage'); process.exit(1); }
const nuevoBoton = `          <button onclick="setFilter('claude')" data-family-btn="claude" class="family-tab-btn px-4 py-2 rounded-xl text-xs font-bold transition bg-white/5 hover:bg-white/10 text-amber-200 border border-amber-400/40">
            🤖 Colección Claude Code (${fichas.length})
          </button>
`;
src = src.replace(anclaBoton, nuevoBoton + anclaBoton);
console.log('   OK botón «🤖 Colección Claude Code» añadido al filtro');

// ── 3 · el contador escrito a mano ───────────────────────────────────────
const totalPrevio = (src.match(/id: \d+/g) || []).length;
const m = src.match(/Todas las Variantes \((\d+)\)/);
if (m) {
  src = src.replace(m[0], `Todas las Variantes (${totalPrevio})`);
  console.log(`   OK contador: ${m[1]} -> ${totalPrevio}`);
} else {
  console.log('   ! no encontré el contador «Todas las Variantes (N)»');
}

// ── 4 · que la ficha muestre la autoría ──────────────────────────────────
// La tarjeta se arma en una plantilla literal dentro del generador. Se engancha
// la línea de autoría justo después del subtítulo, solo si la variante la trae.
const anclaSub = '${v.subtitle}';
if (src.includes(anclaSub) && !src.includes('${v.author')) {
  const i = src.indexOf(anclaSub);
  const finTag = src.indexOf('</', i);
  const cierreTag = src.indexOf('>', finTag) + 1;
  src = src.slice(0, cierreTag)
      + '\n              ${v.author ? `<p class="text-[10px] font-bold text-amber-300/90 mt-1">${v.author}</p>` : \'\'}'
      + src.slice(cierreTag);
  console.log('   OK la tarjeta muestra «🤖 Creado por Claude Code»');
}

fs.writeFileSync(GEN, src, 'utf8');
console.log(`\n   generate-brand-kit-catalog.js actualizado · ${totalPrevio} variantes en total`);
console.log('   Ahora: node scripts/generate-brand-kit-catalog.js');
