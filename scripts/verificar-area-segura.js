/**
 * verificar-area-segura.js — ¿se sale el arte del recorte circular de Instagram?
 *
 * POR QUÉ NO SE COMPRUEBA LEYENDO EL SVG
 * --------------------------------------
 * La tentación es parsear el SVG y mirar las coordenadas. No sirve:
 *
 *   · un <text> no tiene ancho en el fichero — depende de la fuente, del
 *     font-size, del letter-spacing y de cuántos caracteres tenga, y hay que
 *     estimarlo. Una estimación que falla por 20 px aprueba un logo cortado.
 *   · los <g transform="translate(...)"> anidan, y las coordenadas de dentro
 *     son relativas. Hay que acumularlas bien o el cálculo miente.
 *   · un stroke-width de 8 sobresale 4 px por fuera del path.
 *
 * El PNG ya renderizado no estima nada: o hay píxel pintado fuera del círculo
 * o no lo hay. Se mide sobre la verdad, no sobre el plano.
 *
 * CÓMO DISTINGUE TINTA DE FONDO
 * -----------------------------
 * El fondo de esta marca es un degradado radial casi negro (#120E0A →
 * #020101) y la tinta es oro (#F59E0B y familia). El oro es claro Y saturado;
 * el fondo no es ninguna de las dos cosas. Así que cuenta como tinta todo
 * píxel con luminancia por encima del umbral o con saturación apreciable.
 * El degradado del fondo es acromático, así que no dispara el criterio de
 * saturación, y su punto más claro (#120E0A, luma ~15) queda muy por debajo
 * del umbral de luminancia.
 *
 * Uso:  node scripts/verificar-area-segura.js [patrón]
 *       node scripts/verificar-area-segura.js variant-2
 */
const fs = require('fs');
const path = require('path');
const zlib = require('zlib');

const DIR = path.join(__dirname, '..', 'assets', 'branding');
const CX = 540, CY = 540, R_SEGURO = 440;
const LUMA_MIN = 58;     // por encima de esto ya no es el fondo
const SAT_MIN = 26;      // max-min de los canales: el oro lo supera, el gris no

/** Decodifica un PNG a {w, h, px: Uint8Array RGBA}. Sin dependencias. */
function leerPng(archivo) {
  const buf = fs.readFileSync(archivo);
  if (buf.readUInt32BE(0) !== 0x89504e47) throw new Error('no es un PNG');

  let pos = 8, w = 0, h = 0, prof = 0, tipo = 0;
  const trozos = [];
  while (pos < buf.length) {
    const largo = buf.readUInt32BE(pos);
    const nombre = buf.toString('ascii', pos + 4, pos + 8);
    const datos = buf.subarray(pos + 8, pos + 8 + largo);
    if (nombre === 'IHDR') {
      w = datos.readUInt32BE(0); h = datos.readUInt32BE(4);
      prof = datos[8]; tipo = datos[9];
    } else if (nombre === 'IDAT') {
      trozos.push(datos);
    } else if (nombre === 'IEND') break;
    pos += 12 + largo;
  }
  if (prof !== 8 || (tipo !== 2 && tipo !== 6)) {
    throw new Error(`PNG en un formato que no leo (profundidad ${prof}, tipo ${tipo})`);
  }
  const canales = tipo === 6 ? 4 : 3;
  const crudo = zlib.inflateSync(Buffer.concat(trozos));
  const bpp = canales;
  const linea = w * bpp;
  const px = Buffer.alloc(h * linea);

  // Deshacer los filtros por línea del PNG (sección 9 de la especificación).
  for (let y = 0; y < h; y++) {
    const filtro = crudo[y * (linea + 1)];
    const ent = crudo.subarray(y * (linea + 1) + 1, y * (linea + 1) + 1 + linea);
    const sal = px.subarray(y * linea, (y + 1) * linea);
    const arriba = y > 0 ? px.subarray((y - 1) * linea, y * linea) : null;
    for (let i = 0; i < linea; i++) {
      const a = i >= bpp ? sal[i - bpp] : 0;
      const b = arriba ? arriba[i] : 0;
      const c = (arriba && i >= bpp) ? arriba[i - bpp] : 0;
      let v = ent[i];
      if (filtro === 1) v += a;
      else if (filtro === 2) v += b;
      else if (filtro === 3) v += (a + b) >> 1;
      else if (filtro === 4) {
        const p = a + b - c, pa = Math.abs(p - a), pb = Math.abs(p - b), pc = Math.abs(p - c);
        v += (pa <= pb && pa <= pc) ? a : (pb <= pc ? b : c);
      }
      sal[i] = v & 0xff;
    }
  }
  return { w, h, px, canales };
}

function medir(archivo) {
  const { w, h, px, canales } = leerPng(archivo);
  let rMax = 0, fuera = 0, tinta = 0;
  let peor = null;

  for (let y = 0; y < h; y++) {
    for (let x = 0; x < w; x++) {
      const i = (y * w + x) * canales;
      const r = px[i], g = px[i + 1], b = px[i + 2];
      const alfa = canales === 4 ? px[i + 3] : 255;
      if (alfa < 40) continue;
      const luma = 0.2126 * r + 0.7152 * g + 0.0722 * b;
      const sat = Math.max(r, g, b) - Math.min(r, g, b);
      if (luma < LUMA_MIN && sat < SAT_MIN) continue;   // es el fondo

      tinta++;
      const d = Math.hypot(x - CX, y - CY);
      if (d > rMax) { rMax = d; peor = { x, y }; }
      if (d > R_SEGURO) fuera++;
    }
  }
  return { w, h, tinta, fuera, rMax: Math.round(rMax), peor };
}

const patron = process.argv[2] || 'variant-';
const archivos = fs.readdirSync(DIR)
  .filter(f => f.endsWith('.png') && f.includes(patron))
  .sort((a, b) => {
    const na = parseInt((a.match(/variant-(\d+)/) || [])[1] || '0', 10);
    const nb = parseInt((b.match(/variant-(\d+)/) || [])[1] || '0', 10);
    return na - nb;
  });

if (!archivos.length) {
  console.log(`No hay PNGs que casen con «${patron}» en assets/branding/`);
  process.exit(1);
}

console.log(`ÁREA SEGURA DE INSTAGRAM — círculo (${CX},${CY}) r=${R_SEGURO}`);
console.log('='.repeat(78));
let malos = 0;
for (const f of archivos) {
  try {
    const m = medir(path.join(DIR, f));
    const ok = m.fuera === 0;
    if (!ok) malos++;
    const marca = ok ? 'OK' : 'x ';
    const detalle = ok
      ? `radio máx ${m.rMax} px  (margen ${R_SEGURO - m.rMax})`
      : `${m.fuera.toLocaleString('es-CL')} px fuera · radio máx ${m.rMax} · el peor en (${m.peor.x},${m.peor.y})`;
    console.log(`  ${marca} ${f.replace('.png', '').padEnd(34)} ${detalle}`);
  } catch (e) {
    console.log(`  ?  ${f.padEnd(34)} no pude leerlo: ${e.message}`);
  }
}
console.log('='.repeat(78));
console.log(malos === 0
  ? `  las ${archivos.length} caben dentro del recorte`
  : `  ${malos} de ${archivos.length} se salen del recorte`);
process.exitCode = malos === 0 ? 0 : 1;
