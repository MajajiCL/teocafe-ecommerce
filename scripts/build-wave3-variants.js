const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const outDir = path.join(__dirname, '..', 'assets', 'branding');
if (!fs.existsSync(outDir)) {
  fs.mkdirSync(outDir, { recursive: true });
}

// =========================================================================
// VARIANTE 11: LA BALANZA DEL BARISTA & SOMMELIER (The Precision Scale)
// =========================================================================
const v11Svg = `<?xml version="1.0" encoding="UTF-8"?>
<svg width="1080" height="1080" viewBox="0 0 1080 1080" fill="none" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <style>
      @import url('https://fonts.googleapis.com/css2?family=Cinzel:wght@600;700;800;900&amp;family=Montserrat:wght@400;500;600;700&amp;display=swap');
      .v11-title { font-family: 'Cinzel', serif; font-weight: 700; letter-spacing: 16px; font-size: 54px; fill: url(#goldGrad11); }
      .v11-sub { font-family: 'Montserrat', sans-serif; font-weight: 600; letter-spacing: 9px; font-size: 16px; fill: #FDE68A; }
      .v11-foot { font-family: 'Montserrat', sans-serif; font-weight: 500; letter-spacing: 5px; font-size: 14px; fill: #D97706; }
    </style>
    <radialGradient id="bgGrad11" cx="50%" cy="45%" r="65%">
      <stop offset="0%" stop-color="#19130E" /><stop offset="60%" stop-color="#090705" /><stop offset="100%" stop-color="#030202" />
    </radialGradient>
    <linearGradient id="goldGrad11" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#FFFBEB" /><stop offset="30%" stop-color="#FCD34D" /><stop offset="65%" stop-color="#F59E0B" /><stop offset="100%" stop-color="#B45309" />
    </linearGradient>
    <radialGradient id="glow11" cx="50%" cy="40%" r="45%">
      <stop offset="0%" stop-color="#F59E0B" stop-opacity="0.22" /><stop offset="70%" stop-color="#000000" stop-opacity="0" />
    </radialGradient>
  </defs>

  <rect width="1080" height="1080" fill="url(#bgGrad11)" />
  <circle cx="540" cy="420" r="300" fill="url(#glow11)" />

  <!-- Aro circular geométrico de fondo -->
  <circle cx="540" cy="420" r="260" stroke="url(#goldGrad11)" stroke-width="1.2" stroke-opacity="0.3" stroke-dasharray="6 6" />

  <!-- Símbolo Balanza Alquímica del Barista -->
  <g transform="translate(540, 420)">
    <!-- Base y Pilar Central -->
    <path d="M -70, 160 L 70, 160" stroke="url(#goldGrad11)" stroke-width="3" stroke-linecap="round" />
    <path d="M -40, 150 L 40, 150" stroke="url(#goldGrad11)" stroke-width="1.5" stroke-linecap="round" stroke-opacity="0.6" />
    <line x1="0" y1="160" x2="0" y2="-120" stroke="url(#goldGrad11)" stroke-width="3.5" stroke-linecap="round" />
    
    <!-- Corona superior de precisión (Estrella de cata) -->
    <polygon points="0,-155 8,-135 28,-135 12,-120 18,-100 0,-112 -18,-100 -12,-120 -28,-135 -8,-135" fill="url(#goldGrad11)" />

    <!-- Barra de equilibrio horizontal -->
    <path d="M -180, -90 C -90, -105 90, -105 180, -90" stroke="url(#goldGrad11)" stroke-width="4" stroke-linecap="round" fill="none" />
    <circle cx="0" cy="-97" r="6" fill="url(#goldGrad11)" />

    <!-- Platillo Izquierdo: Té de Ceilán -->
    <line x1="-180" y1="-90" x2="-215" y2="10" stroke="url(#goldGrad11)" stroke-width="1.8" stroke-linecap="round" />
    <line x1="-180" y1="-90" x2="-145" y2="10" stroke="url(#goldGrad11)" stroke-width="1.8" stroke-linecap="round" />
    <path d="M -230, 10 C -230, 45 -130, 45 -130, 10 Z" stroke="url(#goldGrad11)" stroke-width="2.5" fill="none" />
    <!-- Hoja de té sobre el platillo izquierdo -->
    <path d="M -180, -35 C -205, -15 -195, 15 -180, 20 C -165, 15 -155, -15 -180, -35 Z" fill="url(#goldGrad11)" />
    <path d="M -180, -30 L -180, 15" stroke="#090705" stroke-width="1.2" stroke-linecap="round" />

    <!-- Platillo Derecho: Café Arábica -->
    <line x1="180" y1="-90" x2="145" y2="10" stroke="url(#goldGrad11)" stroke-width="1.8" stroke-linecap="round" />
    <line x1="180" y1="-90" x2="215" y2="10" stroke="url(#goldGrad11)" stroke-width="1.8" stroke-linecap="round" />
    <path d="M 130, 10 C 130, 45 230, 45 230, 10 Z" stroke="url(#goldGrad11)" stroke-width="2.5" fill="none" />
    <!-- Grano de café sobre el platillo derecho -->
    <ellipse cx="180" cy="-5" rx="22" ry="30" fill="url(#goldGrad11)" />
    <path d="M 180, -30 C 187, -15 173, 10 180, 20" stroke="#090705" stroke-width="3" stroke-linecap="round" fill="none" />
  </g>

  <!-- Tipografía -->
  <text x="540" y="760" text-anchor="middle" class="v11-title">TÉ O CAFÉ</text>
  
  <g transform="translate(540, 795)">
    <line x1="-140" y1="0" x2="-25" y2="0" stroke="url(#goldGrad11)" stroke-width="1.5" stroke-opacity="0.6" />
    <polygon points="0,-4 4,0 0,4 -4,0" fill="url(#goldGrad11)" />
    <line x1="25" y1="0" x2="140" y2="0" stroke="url(#goldGrad11)" stroke-width="1.5" stroke-opacity="0.6" />
  </g>

  <text x="540" y="845" text-anchor="middle" class="v11-sub">EL ARTE DEL EQUILIBRIO</text>
  <text x="540" y="890" text-anchor="middle" class="v11-foot">CURADURÍA DE AUTOR · TEOCAFE.CL</text>
</svg>`;

// =========================================================================
// VARIANTE 12: EL RELOJ DE ARENA / TIEMPO DE INFUSIÓN (The Extraction Hourglass)
// =========================================================================
const v12Svg = `<?xml version="1.0" encoding="UTF-8"?>
<svg width="1080" height="1080" viewBox="0 0 1080 1080" fill="none" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <style>
      @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,600;0,700;1,600&amp;family=Montserrat:wght@400;500;600;700&amp;display=swap');
      .v12-title { font-family: 'Playfair Display', serif; font-weight: 700; letter-spacing: 14px; font-size: 64px; fill: url(#goldGrad12); }
      .v12-sub { font-family: 'Montserrat', sans-serif; font-weight: 600; letter-spacing: 8px; font-size: 16px; fill: #FDE68A; }
      .v12-foot { font-family: 'Montserrat', sans-serif; font-weight: 500; letter-spacing: 5px; font-size: 14px; fill: #D97706; }
    </style>
    <radialGradient id="bgGrad12" cx="50%" cy="45%" r="65%">
      <stop offset="0%" stop-color="#1A130E" /><stop offset="60%" stop-color="#090705" /><stop offset="100%" stop-color="#020202" />
    </radialGradient>
    <linearGradient id="goldGrad12" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#FFFBEB" /><stop offset="30%" stop-color="#FCD34D" /><stop offset="65%" stop-color="#F59E0B" /><stop offset="100%" stop-color="#B45309" />
    </linearGradient>
  </defs>

  <rect width="1080" height="1080" fill="url(#bgGrad12)" />

  <!-- Símbolo Reloj de Arena / Ampolleta de Extracción de Precisión -->
  <g transform="translate(540, 420)">
    <!-- Marco exterior del reloj -->
    <path d="M -130, -180 L 130, -180" stroke="url(#goldGrad12)" stroke-width="4" stroke-linecap="round" />
    <path d="M -130, 180 L 130, 180" stroke="url(#goldGrad12)" stroke-width="4" stroke-linecap="round" />
    
    <!-- Columnas laterales de soporte -->
    <line x1="-120" y1="-180" x2="-120" y2="180" stroke="url(#goldGrad12)" stroke-width="2" stroke-opacity="0.4" />
    <line x1="120" y1="-180" x2="120" y2="180" stroke="url(#goldGrad12)" stroke-width="2" stroke-opacity="0.4" />

    <!-- Cristal de la ampolleta (Cuerpo estilizado en X) -->
    <path d="M -90,-165 C -90,-80 -15,-20 -8,0 C -15,20 -90,80 -90,165" stroke="url(#goldGrad12)" stroke-width="3" stroke-linecap="round" fill="none" />
    <path d="M 90,-165 C 90,-80 15,-20 8,0 C 15,20 90,80 90,165" stroke="url(#goldGrad12)" stroke-width="3" stroke-linecap="round" fill="none" />

    <!-- Cámara Superior: Café (Granos descendiendo en cascada) -->
    <ellipse cx="0" cy="-110" rx="16" ry="24" fill="url(#goldGrad12)" />
    <path d="M 0,-130 C 5,-110 -5,-110 0,-90" stroke="#090705" stroke-width="2.5" stroke-linecap="round" fill="none" />
    <!-- Gotitas de extracción que gotean por el cuello estrecho -->
    <circle cx="0" cy="-35" r="4" fill="url(#goldGrad12)" />
    <circle cx="0" cy="-10" r="3" fill="url(#goldGrad12)" />
    <circle cx="0" cy="15" r="4" fill="url(#goldGrad12)" />

    <!-- Cámara Inferior: Té (Infusión floreciendo en hojas doradas) -->
    <path d="M 0, 70 C -35, 95 -45, 135 0, 155 C 45, 135 35, 95 0, 70 Z" fill="url(#goldGrad12)" />
    <path d="M 0, 80 L 0, 145" stroke="#090705" stroke-width="2" stroke-linecap="round" />
    <path d="M -12, 105 L -26, 120" stroke="#090705" stroke-width="1.8" stroke-linecap="round" />
    <path d="M 12, 115 L 26, 130" stroke="#090705" stroke-width="1.8" stroke-linecap="round" />
  </g>

  <!-- Tipografía Editorial -->
  <text x="540" y="750" text-anchor="middle" class="v12-title">TÉ O CAFÉ</text>
  <text x="540" y="810" text-anchor="middle" class="v12-sub">EL TIEMPO PERFECTO DE EXTRACCIÓN</text>
  <text x="540" y="860" text-anchor="middle" class="v12-foot">SLOW COFFEE &amp; PURE LEAF TEA · TEOCAFE.CL</text>
</svg>`;

// =========================================================================
// VARIANTE 13: CINTA DE MÖBIUS 3D ESCULTURAL (The Golden Ribbon TC)
// =========================================================================
const v13Svg = `<?xml version="1.0" encoding="UTF-8"?>
<svg width="1080" height="1080" viewBox="0 0 1080 1080" fill="none" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <style>
      @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700;800&amp;display=swap');
      .v13-title { font-family: 'Montserrat', sans-serif; font-weight: 800; letter-spacing: 18px; font-size: 54px; fill: url(#goldGrad13Text); }
      .v13-sub { font-family: 'Montserrat', sans-serif; font-weight: 500; letter-spacing: 9px; font-size: 16px; fill: #FDE68A; }
      .v13-foot { font-family: 'Montserrat', sans-serif; font-weight: 600; letter-spacing: 5px; font-size: 14px; fill: #D97706; }
    </style>
    <radialGradient id="bgGrad13" cx="50%" cy="45%" r="65%">
      <stop offset="0%" stop-color="#14100D" /><stop offset="60%" stop-color="#080605" /><stop offset="100%" stop-color="#020101" />
    </radialGradient>
    <linearGradient id="ribbon13A" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#FFFBEB" /><stop offset="25%" stop-color="#FCD34D" /><stop offset="70%" stop-color="#D97706" /><stop offset="100%" stop-color="#78350F" />
    </linearGradient>
    <linearGradient id="ribbon13B" x1="100%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="#FDE68A" /><stop offset="50%" stop-color="#F59E0B" /><stop offset="100%" stop-color="#92400E" />
    </linearGradient>
    <linearGradient id="goldGrad13Text" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="#FFFBEB" /><stop offset="30%" stop-color="#FDE68A" /><stop offset="70%" stop-color="#F59E0B" /><stop offset="100%" stop-color="#B45309" />
    </linearGradient>
  </defs>

  <rect width="1080" height="1080" fill="url(#bgGrad13)" />

  <!-- Símbolo Cinta de Oro Escultural (Fusión infinita T y C) -->
  <g transform="translate(540, 420)">
    <!-- Halo exterior -->
    <circle cx="0" cy="0" r="240" stroke="url(#ribbon13A)" stroke-width="1.2" stroke-opacity="0.25" />

    <!-- Trazo continuo de lazo infinito que dibuja la T (travesaño y tronco) y fluye hacia la C envolvente -->
    <!-- Bucle Superior Izquierdo (Hoja en bucle) -->
    <path d="M -160, -90 C -160, -170 -60, -180 0, -180 C 60, -180 160, -170 160, -90 C 160, -20 100, 20 20, 20" stroke="url(#ribbon13A)" stroke-width="26" stroke-linecap="round" fill="none" />
    
    <!-- Tronco Central descendente de la T -->
    <path d="M 0, -175 L 0, 70" stroke="url(#ribbon13B)" stroke-width="24" stroke-linecap="round" fill="none" />

    <!-- Bucle Inferior que abraza como 'C' y culmina en un grano de café -->
    <path d="M 0, 70 C -70, 70 -150, 110 -150, 180 C -150, 240 -60, 260 30, 230 C 120, 200 160, 130 160, 50" stroke="url(#ribbon13A)" stroke-width="26" stroke-linecap="round" fill="none" />

    <!-- Destellos dorados en las intersecciones clave -->
    <circle cx="0" cy="-180" r="8" fill="#FFFBEB" />
    <circle cx="160" cy="50" r="7" fill="#FCD34D" />
  </g>

  <!-- Tipografía Bold Minimalista -->
  <text x="540" y="780" text-anchor="middle" class="v13-title">TÉ O CAFÉ</text>
  
  <g transform="translate(540, 815)">
    <circle cx="-50" cy="0" r="2.5" fill="#D97706" />
    <circle cx="0" cy="0" r="4" fill="url(#ribbon13A)" />
    <circle cx="50" cy="0" r="2.5" fill="#D97706" />
  </g>

  <text x="540" y="865" text-anchor="middle" class="v13-sub">ESPECIALIDAD SIN LÍMITES</text>
  <text x="540" y="910" text-anchor="middle" class="v13-foot">BOUTIQUE &amp; ROASTERY · TEOCAFE.CL</text>
</svg>`;

// =========================================================================
// VARIANTE 14: EL ATELIER DE CRISTAL (Prensa Francesa & Tetera Tetera Cuello de Cisne)
// =========================================================================
const v14Svg = `<?xml version="1.0" encoding="UTF-8"?>
<svg width="1080" height="1080" viewBox="0 0 1080 1080" fill="none" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <style>
      @import url('https://fonts.googleapis.com/css2?family=Cinzel:wght@700;800&amp;family=Montserrat:wght@400;500;600;700&amp;display=swap');
      .v14-title { font-family: 'Cinzel', serif; font-weight: 700; letter-spacing: 14px; font-size: 54px; fill: url(#goldGrad14); }
      .v14-sub { font-family: 'Montserrat', sans-serif; font-weight: 600; letter-spacing: 8px; font-size: 16px; fill: #FDE68A; }
      .v14-foot { font-family: 'Montserrat', sans-serif; font-weight: 500; letter-spacing: 5px; font-size: 14px; fill: #D97706; }
    </style>
    <radialGradient id="bgGrad14" cx="50%" cy="45%" r="65%">
      <stop offset="0%" stop-color="#18130E" /><stop offset="60%" stop-color="#080605" /><stop offset="100%" stop-color="#020202" />
    </radialGradient>
    <linearGradient id="goldGrad14" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#FFFBEB" /><stop offset="30%" stop-color="#FCD34D" /><stop offset="65%" stop-color="#F59E0B" /><stop offset="100%" stop-color="#B45309" />
    </linearGradient>
  </defs>

  <rect width="1080" height="1080" fill="url(#bgGrad14)" />

  <!-- Símbolo: Síntesis de Prensa Francesa & Tetera en Línea Única de Cristal -->
  <g transform="translate(540, 420)">
    <!-- Silueta de la Prensa de Café (Cuerpo cilíndrico de vidrio) -->
    <rect x="-80" y="-120" width="160" height="240" rx="20" stroke="url(#goldGrad14)" stroke-width="3" fill="none" />
    
    <!-- Émbolo superior de la Prensa -->
    <line x1="0" y1="-170" x2="0" y2="40" stroke="url(#goldGrad14)" stroke-width="3.5" stroke-linecap="round" />
    <circle cx="0" cy="-185" r="14" fill="url(#goldGrad14)" />
    <!-- Filtro de malla del émbolo -->
    <line x1="-70" y1="40" x2="70" y2="40" stroke="url(#goldGrad14)" stroke-width="4" stroke-linecap="round" />

    <!-- Asa de la Prensa a la derecha -->
    <path d="M 80, -70 C 130, -70 130, 70 80, 70" stroke="url(#goldGrad14)" stroke-width="3.5" fill="none" />

    <!-- Pico vertedor de Tetera Cuello de Cisne a la izquierda -->
    <path d="M -80, -30 C -130, -40 -160, -90 -130, -130 C -120, -145 -95, -125 -80, -110" stroke="url(#goldGrad14)" stroke-width="3.5" stroke-linecap="round" fill="none" />

    <!-- Contenido líquido: Hoja de té flotando arriba, Grano de café reposando abajo -->
    <path d="M -25, -45 C -45, -25 -35, 5 -15, 10 C 5, 5 15, -25 -25, -45 Z" fill="url(#goldGrad14)" />
    <ellipse cx="25" cy="80" rx="18" ry="24" fill="url(#goldGrad14)" />
    <path d="M 25, 60 C 30, 80 20, 80 25, 100" stroke="#080605" stroke-width="2.5" stroke-linecap="round" fill="none" />
  </g>

  <!-- Tipografía -->
  <text x="540" y="755" text-anchor="middle" class="v14-title">TÉ O CAFÉ</text>
  
  <g transform="translate(540, 790)">
    <line x1="-150" y1="0" x2="-30" y2="0" stroke="url(#goldGrad14)" stroke-width="1.5" stroke-opacity="0.6" />
    <circle cx="0" cy="0" r="3" fill="url(#goldGrad14)" />
    <line x1="30" y1="0" x2="150" y2="0" stroke="url(#goldGrad14)" stroke-width="1.5" stroke-opacity="0.6" />
  </g>

  <text x="540" y="840" text-anchor="middle" class="v14-sub">RITUALES &amp; MÉTODOS DE PREPARACIÓN</text>
  <text x="540" y="885" text-anchor="middle" class="v14-foot">ACCESORIOS · CAFÉ EN GRANO · TÉ PURO</text>
</svg>`;

// =========================================================================
// VARIANTE 15: EL TERROIR TOPOGRÁFICO (Altitude Curves & Origin Peak)
// =========================================================================
const v15Svg = `<?xml version="1.0" encoding="UTF-8"?>
<svg width="1080" height="1080" viewBox="0 0 1080 1080" fill="none" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <style>
      @import url('https://fonts.googleapis.com/css2?family=Cinzel:wght@700;800&amp;family=Montserrat:wght@400;500;600;700&amp;display=swap');
      .v15-title { font-family: 'Montserrat', sans-serif; font-weight: 800; letter-spacing: 14px; font-size: 52px; fill: url(#goldGrad15); }
      .v15-sub { font-family: 'Cinzel', serif; font-weight: 700; letter-spacing: 9px; font-size: 17px; fill: #FDE68A; }
      .v15-foot { font-family: 'Montserrat', sans-serif; font-weight: 500; letter-spacing: 5px; font-size: 14px; fill: #D97706; }
    </style>
    <radialGradient id="bgGrad15" cx="50%" cy="45%" r="65%">
      <stop offset="0%" stop-color="#1A140F" /><stop offset="60%" stop-color="#090705" /><stop offset="100%" stop-color="#020202" />
    </radialGradient>
    <linearGradient id="goldGrad15" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#FFFBEB" /><stop offset="25%" stop-color="#FCD34D" /><stop offset="65%" stop-color="#F59E0B" /><stop offset="100%" stop-color="#B45309" />
    </linearGradient>
  </defs>

  <rect width="1080" height="1080" fill="url(#bgGrad15)" />

  <!-- Símbolo: Curvas de Altitud Topográficas (Terroir > 1800 m.s.n.m.) -->
  <g transform="translate(540, 420)">
    <!-- Marco circular exterior -->
    <circle cx="0" cy="0" r="230" stroke="url(#goldGrad15)" stroke-width="2.5" />
    <circle cx="0" cy="0" r="215" stroke="url(#goldGrad15)" stroke-width="1" stroke-dasharray="4 4" stroke-opacity="0.4" />

    <!-- Líneas Topográficas de Nivel (Curvas geográficas de origen) -->
    <path d="M -190, 70 C -130, 110 -60, 40 0, 70 C 60, 100 130, 50 190, 70" stroke="url(#goldGrad15)" stroke-width="1.8" stroke-opacity="0.5" fill="none" />
    <path d="M -170, 0 C -110, 40 -50, -30 0, 0 C 50, 30 110, -20 170, 0" stroke="url(#goldGrad15)" stroke-width="1.8" stroke-opacity="0.6" fill="none" />
    <path d="M -140, -60 C -80, -20 -30, -90 0, -60 C 30, -30 80, -80 140, -60" stroke="url(#goldGrad15)" stroke-width="1.8" stroke-opacity="0.75" fill="none" />

    <!-- La Cumbre: Hoja de Té & Grano emergiendo en la cima de la montaña -->
    <g transform="translate(0, -60)">
      <!-- Hoja a la izquierda -->
      <path d="M 0, -85 C -45, -55 -40, -15 0, 0 C -15, -30 -10, -65 0, -85 Z" fill="url(#goldGrad15)" />
      <!-- Grano a la derecha -->
      <ellipse cx="28" cy="-35" rx="18" ry="26" fill="url(#goldGrad15)" transform="rotate(15 28 -35)" />
      <path d="M 28, -55 C 33, -35 23, -35 28, -15" stroke="#090705" stroke-width="2.5" stroke-linecap="round" fill="none" />
      <!-- Sol / Estrella de altitud -->
      <circle cx="0" cy="-110" r="6" fill="#FFFBEB" />
    </g>

    <!-- Indicador de Altura -->
    <text x="0" y="150" text-anchor="middle" font-family="'Montserrat', sans-serif" font-size="14" font-weight="700" letter-spacing="4" fill="url(#goldGrad15)">1.850 M.S.N.M. · SINGLE ORIGIN</text>
  </g>

  <!-- Tipografía -->
  <text x="540" y="760" text-anchor="middle" class="v15-title">TÉ O CAFÉ</text>
  <text x="540" y="815" text-anchor="middle" class="v15-sub">FINCAS DE ALTURA &amp; JARDINES DE CEILÁN</text>
  <text x="540" y="865" text-anchor="middle" class="v15-foot">SANTIAGO · CHILE · TEOCAFE.CL</text>
</svg>`;

// Guardar SVGs
const wave3Variants = [
  { svg: 'variant-11-balanza-barista.svg', png: 'variant-11-balanza-barista.png', code: v11Svg },
  { svg: 'variant-12-reloj-arena.svg', png: 'variant-12-reloj-arena.png', code: v12Svg },
  { svg: 'variant-13-cinta-mobius.svg', png: 'variant-13-cinta-mobius.png', code: v13Svg },
  { svg: 'variant-14-atelier-cristal.svg', png: 'variant-14-atelier-cristal.png', code: v14Svg },
  { svg: 'variant-15-terroir-topografico.svg', png: 'variant-15-terroir-topografico.png', code: v15Svg },
];

for (const v of wave3Variants) {
  fs.writeFileSync(path.join(outDir, v.svg), v.code, 'utf8');
  console.log(`Guardado SVG: ${v.svg}`);
}

// Renderizar PNGs
const edgePath = 'C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe';
const tempHtml = path.join(__dirname, 'temp-wave3.html');

for (const v of wave3Variants) {
  const svgContent = fs.readFileSync(path.join(outDir, v.svg), 'utf8');
  const outPng = path.join(outDir, v.png);

  const html = `<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Cinzel:wght@600;700;800;900&family=Montserrat:wght@400;500;600;700;800&family=Playfair+Display:ital,wght@0,600;0,700;1,600&display=swap" rel="stylesheet">
  <style>
    * { margin: 0; padding: 0; box-sizing: border-box; }
    html, body { width: 1080px; height: 1080px; overflow: hidden; background: #050302; }
    svg { width: 1080px; height: 1080px; display: block; }
  </style>
</head>
<body>
  ${svgContent}
</body>
</html>`;

  fs.writeFileSync(tempHtml, html, 'utf8');
  console.log(`Rendering ${v.png}...`);
  try {
    execSync(`"${edgePath}" --headless --disable-gpu --hide-scrollbars --window-size=1080,1080 --screenshot="${outPng}" "${tempHtml}"`, { stdio: 'pipe' });
    console.log(`✅ Creado: ${v.png}`);
  } catch (err) {
    console.error(`Error en ${v.png}:`, err.message);
  }
}

if (fs.existsSync(tempHtml)) {
  fs.unlinkSync(tempHtml);
}

console.log('🎉 ¡Las 5 variantes de la Ola 3 (11 a 15) están creadas y renderizadas!');
