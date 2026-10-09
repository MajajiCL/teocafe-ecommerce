const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const outDir = path.join(__dirname, '..', 'assets', 'branding');
if (!fs.existsSync(outDir)) {
  fs.mkdirSync(outDir, { recursive: true });
}

// =========================================================================
// VARIANTE 6: THE GOLDEN "O" / DUALIDAD ICÓNICA (Yin-Yang Geometric)
// =========================================================================
const v6Svg = `<?xml version="1.0" encoding="UTF-8"?>
<svg width="1080" height="1080" viewBox="0 0 1080 1080" fill="none" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <style>
      @import url('https://fonts.googleapis.com/css2?family=Cinzel:wght@600;700;800;900&amp;family=Montserrat:wght@300;400;500;600;700&amp;display=swap');
      .v6-title { font-family: 'Cinzel', serif; font-weight: 700; letter-spacing: 16px; font-size: 56px; fill: url(#goldGradText6); }
      .v6-sub { font-family: 'Montserrat', sans-serif; font-weight: 500; letter-spacing: 9px; font-size: 17px; fill: #FDE68A; }
      .v6-domain { font-family: 'Montserrat', sans-serif; font-weight: 600; letter-spacing: 5px; font-size: 15px; fill: #D97706; }
    </style>
    <radialGradient id="bgGrad6" cx="50%" cy="45%" r="65%">
      <stop offset="0%" stop-color="#1B140F" /><stop offset="60%" stop-color="#0B0806" /><stop offset="100%" stop-color="#040302" />
    </radialGradient>
    <linearGradient id="goldGrad6" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#FFFBEB" /><stop offset="25%" stop-color="#FCD34D" /><stop offset="55%" stop-color="#F59E0B" /><stop offset="85%" stop-color="#D97706" /><stop offset="100%" stop-color="#92400E" />
    </linearGradient>
    <linearGradient id="goldGradText6" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="#FFFBEB" /><stop offset="35%" stop-color="#FDE68A" /><stop offset="70%" stop-color="#F59E0B" /><stop offset="100%" stop-color="#B45309" />
    </linearGradient>
    <radialGradient id="glow6" cx="50%" cy="43%" r="45%">
      <stop offset="0%" stop-color="#F59E0B" stop-opacity="0.25" /><stop offset="60%" stop-color="#D97706" stop-opacity="0.05" /><stop offset="100%" stop-color="#000000" stop-opacity="0" />
    </radialGradient>
  </defs>

  <rect width="1080" height="1080" fill="url(#bgGrad6)" />
  <circle cx="540" cy="440" r="320" fill="url(#glow6)" />

  <!-- Delicado aro fino exterior -->
  <circle cx="540" cy="440" r="280" stroke="url(#goldGrad6)" stroke-width="1.5" stroke-opacity="0.3" stroke-dasharray="6 6" />

  <!-- Isotipo Central: La "O" Dorada de Dualidad Té & Café -->
  <g id="dual-o" transform="translate(540, 440)">
    <!-- Aro exterior principal de la "O" -->
    <circle cx="0" cy="0" r="220" stroke="url(#goldGrad6)" stroke-width="7" />
    <circle cx="0" cy="0" r="202" stroke="url(#goldGrad6)" stroke-width="1.5" stroke-opacity="0.5" />
    
    <!-- Lado Izquierdo: Hoja Botánica de Té estilizada -->
    <path d="M 0,-180 C -120,-140 -160,-40 -160,20 C -160,110 -90,170 0,180 C -60,130 -80,50 -70,-20 C -60,-80 -25,-140 0,-180 Z" fill="url(#goldGrad6)" fill-opacity="0.9" />
    <!-- Nervaduras de la hoja de té -->
    <path d="M 0,-160 Q -70, -20 0, 160" stroke="#0B0806" stroke-width="3.5" stroke-linecap="round" fill="none" />
    <path d="M -25,-90 Q -65,-75 -105,-80" stroke="#0B0806" stroke-width="2.5" stroke-linecap="round" fill="none" />
    <path d="M -38,-20 Q -85,-10 -125,-18" stroke="#0B0806" stroke-width="2.5" stroke-linecap="round" fill="none" />
    <path d="M -28,50 Q -75,65 -110,55" stroke="#0B0806" stroke-width="2.5" stroke-linecap="round" fill="none" />

    <!-- Lado Derecho: Grano de Café Arábica de Precisión -->
    <path d="M 0,-180 C 110,-150 175,-70 175,25 C 175,120 100,175 0,180 C 40,140 70,80 70,10 C 70,-60 35,-130 0,-180 Z" fill="url(#goldGrad6)" />
    <!-- Fisura sinuosa del grano de café -->
    <path d="M 0,-170 C 45,-100 50,-40 30,10 C 10,60 35,120 0,170" stroke="#0B0806" stroke-width="4.5" stroke-linecap="round" fill="none" />

    <!-- Puntos cardinales sutiles -->
    <circle cx="0" cy="-245" r="3" fill="url(#goldGrad6)" />
    <circle cx="0" cy="245" r="3" fill="url(#goldGrad6)" />
    <circle cx="-245" cy="0" r="3" fill="url(#goldGrad6)" />
    <circle cx="245" cy="0" r="3" fill="url(#goldGrad6)" />
  </g>

  <!-- Tipografía de Lujo -->
  <text x="540" y="780" text-anchor="middle" class="v6-title">TÉ O CAFÉ</text>
  
  <g transform="translate(540, 816)">
    <line x1="-160" y1="0" x2="-35" y2="0" stroke="url(#goldGrad6)" stroke-width="1.5" stroke-opacity="0.6" />
    <polygon points="0,-4 4,0 0,4 -4,0" fill="url(#goldGrad6)" />
    <line x1="35" y1="0" x2="160" y2="0" stroke="url(#goldGrad6)" stroke-width="1.5" stroke-opacity="0.6" />
  </g>

  <text x="540" y="865" text-anchor="middle" class="v6-sub">ESPECIALIDAD &amp; ORIGEN</text>
  <text x="540" y="910" text-anchor="middle" class="v6-domain">TEOCAFE.CL</text>
</svg>`;

// =========================================================================
// VARIANTE 7: EDITORIAL DIDOT / QUIET LUXURY (Haute Couture)
// =========================================================================
const v7Svg = `<?xml version="1.0" encoding="UTF-8"?>
<svg width="1080" height="1080" viewBox="0 0 1080 1080" fill="none" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <style>
      @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,500;0,600;0,700;1,500;1,600&amp;family=Montserrat:wght@300;400;500;600&amp;display=swap');
      .v7-title { font-family: 'Playfair Display', serif; font-weight: 600; letter-spacing: 12px; font-size: 78px; fill: url(#goldGrad7); }
      .v7-amp { font-family: 'Playfair Display', serif; font-style: italic; font-weight: 500; font-size: 52px; fill: #FDE68A; }
      .v7-sub { font-family: 'Montserrat', sans-serif; font-weight: 500; letter-spacing: 11px; font-size: 15px; fill: #D97706; }
      .v7-foot { font-family: 'Montserrat', sans-serif; font-weight: 400; letter-spacing: 7px; font-size: 14px; fill: #FDE68A; opacity: 0.85; }
    </style>
    <radialGradient id="bgGrad7" cx="50%" cy="50%" r="70%">
      <stop offset="0%" stop-color="#15100C" /><stop offset="65%" stop-color="#080605" /><stop offset="100%" stop-color="#030202" />
    </radialGradient>
    <linearGradient id="goldGrad7" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#FFFBEB" /><stop offset="30%" stop-color="#FCD34D" /><stop offset="65%" stop-color="#F59E0B" /><stop offset="100%" stop-color="#B45309" />
    </linearGradient>
  </defs>

  <rect width="1080" height="1080" fill="url(#bgGrad7)" />

  <!-- Marco Editorial Fino de Alta Costura -->
  <rect x="120" y="120" width="840" height="840" stroke="url(#goldGrad7)" stroke-width="1.2" stroke-opacity="0.35" fill="none" />
  <rect x="134" y="134" width="812" height="812" stroke="url(#goldGrad7)" stroke-width="0.8" stroke-opacity="0.15" fill="none" />
  
  <!-- Esquinas ornamentales mínimas -->
  <g stroke="url(#goldGrad7)" stroke-width="1.8" stroke-opacity="0.7">
    <path d="M 110,140 L 110,110 L 140,110" fill="none" />
    <path d="M 970,140 L 970,110 L 940,110" fill="none" />
    <path d="M 110,940 L 110,970 L 140,970" fill="none" />
    <path d="M 970,940 L 970,970 L 940,970" fill="none" />
  </g>

  <!-- Isotipo: Fina rama de té cruzando una gota de café dorada -->
  <g transform="translate(540, 340)">
    <!-- Gota estilizada -->
    <path d="M 0,-90 C -40,-35 -50,-5 -50,25 C -50,65 -25,90 0,90 C 25,90 50,65 50,25 C 50,-5 40,-35 0,-90 Z" stroke="url(#goldGrad7)" stroke-width="2" fill="none" stroke-opacity="0.4" />
    <!-- Rama botánica en línea única fina -->
    <path d="M -70,45 C -30,20 30,-20 70,-45" stroke="url(#goldGrad7)" stroke-width="2.5" stroke-linecap="round" fill="none" />
    <!-- Brotes de té -->
    <path d="M 10,-6 C 25,-25 45,-30 45,-30 C 45,-30 40,-10 25,5" fill="url(#goldGrad7)" />
    <path d="M -15,10 C -30,30 -50,35 -50,35 C -50,35 -45,15 -30,0" fill="url(#goldGrad7)" />
    <path d="M 50,-32 C 65,-45 80,-45 80,-45 C 80,-45 75,-30 62,-20" fill="url(#goldGrad7)" />
    <!-- Grano sutil central -->
    <ellipse cx="0" cy="20" rx="14" ry="20" fill="url(#goldGrad7)" />
    <path d="M 0,5 Q 4,20 0,35" stroke="#080605" stroke-width="2.2" stroke-linecap="round" fill="none" />
  </g>

  <!-- Tipografía Editorial Principal -->
  <text x="540" y="565" text-anchor="middle" class="v7-title">TÉ <tspan class="v7-amp">o</tspan> CAFÉ</text>

  <!-- Línea de filo de navaja con estrella dorada -->
  <g transform="translate(540, 620)">
    <line x1="-220" y1="0" x2="-40" y2="0" stroke="url(#goldGrad7)" stroke-width="1.2" stroke-opacity="0.5" />
    <text x="0" y="5" text-anchor="middle" font-family="'Cinzel', serif" font-size="16" fill="url(#goldGrad7)">✦</text>
    <line x1="40" y1="0" x2="220" y2="0" stroke="url(#goldGrad7)" stroke-width="1.2" stroke-opacity="0.5" />
  </g>

  <text x="540" y="685" text-anchor="middle" class="v7-sub">MAISON DE CAFÉ &amp; TÉ DE ORIGEN</text>
  <text x="540" y="740" text-anchor="middle" class="v7-foot">SANTIAGO · CHILE · EST. 2026</text>
  
  <text x="540" y="820" text-anchor="middle" font-family="'Montserrat', sans-serif" font-weight="600" letter-spacing="6px" font-size="16px" fill="#D97706">TEOCAFE.CL</text>
</svg>`;

// =========================================================================
// VARIANTE 8: MINIMALISMO GEOMÉTRICO (% STYLE / KIOTO MODERN)
// =========================================================================
const v8Svg = `<?xml version="1.0" encoding="UTF-8"?>
<svg width="1080" height="1080" viewBox="0 0 1080 1080" fill="none" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <style>
      @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600;700;800&amp;display=swap');
      .v8-title { font-family: 'Montserrat', sans-serif; font-weight: 800; letter-spacing: 18px; font-size: 58px; fill: url(#goldGrad8); }
      .v8-sub { font-family: 'Montserrat', sans-serif; font-weight: 500; letter-spacing: 8px; font-size: 16px; fill: #FDE68A; }
      .v8-dot { font-family: 'Montserrat', sans-serif; font-weight: 700; letter-spacing: 4px; font-size: 14px; fill: #D97706; }
    </style>
    <linearGradient id="bgGrad8" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#120E0A" /><stop offset="60%" stop-color="#090705" /><stop offset="100%" stop-color="#020201" />
    </linearGradient>
    <linearGradient id="goldGrad8" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#FFFBEB" /><stop offset="25%" stop-color="#FDE68A" /><stop offset="60%" stop-color="#F59E0B" /><stop offset="100%" stop-color="#B45309" />
    </linearGradient>
  </defs>

  <rect width="1080" height="1080" fill="url(#bgGrad8)" />

  <!-- Geometría Arquitectónica Central -->
  <g transform="translate(540, 410)">
    <!-- Cuadrante de fondo muy sutil -->
    <circle cx="0" cy="0" r="230" stroke="url(#goldGrad8)" stroke-width="1" stroke-opacity="0.2" />
    <line x1="-240" y1="0" x2="240" y2="0" stroke="url(#goldGrad8)" stroke-width="0.8" stroke-opacity="0.15" />
    <line x1="0" y1="-240" x2="0" y2="240" stroke="url(#goldGrad8)" stroke-width="0.8" stroke-opacity="0.15" />

    <!-- Símbolo Monolítico: La barra 'T' y el arco 'C' fusionados -->
    <!-- Barra T -->
    <rect x="-140" y="-140" width="160" height="22" rx="11" fill="url(#goldGrad8)" />
    <rect x="-71" y="-140" width="22" height="230" rx="11" fill="url(#goldGrad8)" />
    
    <!-- Arco 'C' envolvente -->
    <path d="M 70,-110 C 145,-75 165,15 140,85 C 115,145 40,165 -30,140" stroke="url(#goldGrad8)" stroke-width="22" stroke-linecap="round" fill="none" />

    <!-- Hoja geométrica pura (ratio áureo) -->
    <path d="M -130,-120 C -130,-185 -70,-200 -70,-200 C -70,-200 -70,-135 -130,-120 Z" fill="url(#goldGrad8)" />

    <!-- Grano de café esférico con corte oblicuo -->
    <g transform="translate(110, 110) rotate(-45)">
      <ellipse cx="0" cy="0" rx="36" ry="50" fill="url(#goldGrad8)" />
      <path d="M 0,-44 Q 10,0 0,44" stroke="#090705" stroke-width="7" stroke-linecap="round" fill="none" />
    </g>
  </g>

  <!-- Tipografía Minimalista Contemporánea -->
  <text x="540" y="745" text-anchor="middle" class="v8-title">TÉ O CAFÉ</text>
  
  <g transform="translate(540, 785)">
    <circle cx="-60" cy="0" r="2.5" fill="#D97706" />
    <circle cx="0" cy="0" r="3.5" fill="url(#goldGrad8)" />
    <circle cx="60" cy="0" r="2.5" fill="#D97706" />
  </g>

  <text x="540" y="840" text-anchor="middle" class="v8-sub">TOSTADURÍA &amp; BLENDS DE AUTOR</text>
  <text x="540" y="890" text-anchor="middle" class="v8-dot">WWW.TEOCAFE.CL</text>
</svg>`;

// =========================================================================
// VARIANTE 9: NORDIC SPECIALTY / CLEAN LINE ART (Third Wave Roaster)
// =========================================================================
const v9Svg = `<?xml version="1.0" encoding="UTF-8"?>
<svg width="1080" height="1080" viewBox="0 0 1080 1080" fill="none" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <style>
      @import url('https://fonts.googleapis.com/css2?family=Cinzel:wght@700;800&amp;family=Montserrat:wght@400;500;600;700&amp;display=swap');
      .v9-title { font-family: 'Montserrat', sans-serif; font-weight: 800; letter-spacing: 12px; font-size: 52px; fill: url(#goldGrad9); }
      .v9-sub { font-family: 'Cinzel', serif; font-weight: 700; letter-spacing: 8px; font-size: 18px; fill: #FDE68A; }
      .v9-meta { font-family: 'Montserrat', sans-serif; font-weight: 600; letter-spacing: 4px; font-size: 14px; fill: #D97706; }
    </style>
    <radialGradient id="bgGrad9" cx="50%" cy="45%" r="65%">
      <stop offset="0%" stop-color="#1A130E" /><stop offset="60%" stop-color="#0A0806" /><stop offset="100%" stop-color="#030202" />
    </radialGradient>
    <linearGradient id="goldGrad9" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#FFFBEB" /><stop offset="30%" stop-color="#FCD34D" /><stop offset="65%" stop-color="#F59E0B" /><stop offset="100%" stop-color="#B45309" />
    </linearGradient>
  </defs>

  <rect width="1080" height="1080" fill="url(#bgGrad9)" />

  <!-- Escudo Octogonal Biselado Minimalista (Etiqueta de Especialidad Nórdica) -->
  <polygon points="540,140 760,230 850,450 760,670 540,760 320,670 230,450 320,230" stroke="url(#goldGrad9)" stroke-width="2.5" stroke-opacity="0.7" fill="none" />
  <polygon points="540,160 745,245 830,450 745,655 540,740 335,655 250,450 335,245" stroke="url(#goldGrad9)" stroke-width="1" stroke-opacity="0.25" fill="none" />

  <!-- Gráfico de Línea Continua de Especialidad -->
  <g transform="translate(540, 450)">
    <!-- Taza de cata vista desde arriba -->
    <circle cx="0" cy="0" r="160" stroke="url(#goldGrad9)" stroke-width="3" fill="none" />
    <circle cx="0" cy="0" r="145" stroke="url(#goldGrad9)" stroke-width="1.2" stroke-dasharray="4 4" stroke-opacity="0.5" fill="none" />
    
    <!-- Asa de la taza estilizada -->
    <path d="M 160,-35 C 195,-35 210,-15 210,0 C 210,15 195,35 160,35" stroke="url(#goldGrad9)" stroke-width="3" fill="none" />

    <!-- División botánica dentro de la taza: Hoja a la izquierda, Grano a la derecha -->
    <path d="M 0,-130 C -80,-90 -105,-20 -105,30 C -105,85 -60,125 0,130" stroke="url(#goldGrad9)" stroke-width="2.5" fill="none" />
    <path d="M -15,-60 L -65,-75" stroke="url(#goldGrad9)" stroke-width="2" stroke-linecap="round" />
    <path d="M -25,0 L -85,-5" stroke="url(#goldGrad9)" stroke-width="2" stroke-linecap="round" />
    <path d="M -15,60 L -65,55" stroke="url(#goldGrad9)" stroke-width="2" stroke-linecap="round" />

    <!-- Grano dentro del hemisferio derecho -->
    <path d="M 0,-130 C 80,-90 105,-20 105,30 C 105,85 60,125 0,130" stroke="url(#goldGrad9)" stroke-width="2.5" fill="none" />
    <path d="M 0,-115 C 35,-60 40,0 20,40 C 5,75 25,105 0,115" stroke="url(#goldGrad9)" stroke-width="3" stroke-linecap="round" fill="none" />
  </g>

  <!-- Año 20 y 26 a los costados -->
  <text x="180" y="460" text-anchor="middle" font-family="'Cinzel', serif" font-size="28" font-weight="700" fill="url(#goldGrad9)">20</text>
  <text x="900" y="460" text-anchor="middle" font-family="'Cinzel', serif" font-size="28" font-weight="700" fill="url(#goldGrad9)">26</text>

  <!-- Tipografía Nórdica -->
  <text x="540" y="825" text-anchor="middle" class="v9-title">TÉ O CAFÉ</text>
  <text x="540" y="875" text-anchor="middle" class="v9-sub">ROASTERY &amp; TEA ATELIER</text>
  <text x="540" y="920" text-anchor="middle" class="v9-meta">SANTIAGO · TEOCAFE.CL</text>
</svg>`;

// =========================================================================
// VARIANTE 10: ZEN ENSŌ / ARTE BOTÁNICO ORGÁNICO (Ritual & Flow)
// =========================================================================
const v10Svg = `<?xml version="1.0" encoding="UTF-8"?>
<svg width="1080" height="1080" viewBox="0 0 1080 1080" fill="none" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <style>
      @import url('https://fonts.googleapis.com/css2?family=Cinzel:wght@600;700;800&amp;family=Montserrat:wght@400;500;600&amp;display=swap');
      .v10-title { font-family: 'Cinzel', serif; font-weight: 700; letter-spacing: 14px; font-size: 56px; fill: url(#goldGrad10); }
      .v10-sub { font-family: 'Montserrat', sans-serif; font-weight: 500; letter-spacing: 8px; font-size: 17px; fill: #FDE68A; }
      .v10-domain { font-family: 'Montserrat', sans-serif; font-weight: 600; letter-spacing: 5px; font-size: 15px; fill: #D97706; }
    </style>
    <radialGradient id="bgGrad10" cx="50%" cy="45%" r="65%">
      <stop offset="0%" stop-color="#18120D" /><stop offset="60%" stop-color="#0A0806" /><stop offset="100%" stop-color="#030202" />
    </radialGradient>
    <linearGradient id="goldGrad10" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#FFFBEB" /><stop offset="30%" stop-color="#FCD34D" /><stop offset="60%" stop-color="#F59E0B" /><stop offset="100%" stop-color="#B45309" />
    </linearGradient>
  </defs>

  <rect width="1080" height="1080" fill="url(#bgGrad10)" />

  <!-- Trazo Ensō Orgánico Dorado -->
  <g transform="translate(540, 430)">
    <!-- Círculo Ensō abierto con pincelada cónica viva -->
    <path d="M 140,-160 C 220,-80 230,80 160,180 C 90,260 -70,260 -160,180 C -250,90 -240,-90 -150,-170 C -70,-240 50,-240 100,-210" stroke="url(#goldGrad10)" stroke-width="12" stroke-linecap="round" fill="none" opacity="0.9" />
    <path d="M 120,-175 C 200,-100 210,60 145,160 C 80,240 -60,240 -145,160" stroke="url(#goldGrad10)" stroke-width="3" stroke-linecap="round" fill="none" opacity="0.4" />

    <!-- Centro del Ensō: Dos siluetas puras flotando en armonía zen -->
    <!-- Hoja de Té verde/oro ascendente -->
    <path d="M -45,30 C -85,-10 -65,-95 -20,-130 C -15,-60 -25,-10 -45,30 Z" fill="url(#goldGrad10)" />
    <!-- Grano de café tostado en balance -->
    <g transform="translate(35, 10) rotate(25)">
      <ellipse cx="0" cy="0" rx="38" ry="54" fill="url(#goldGrad10)" />
      <path d="M 0,-48 C 12,-20 8,20 0,48" stroke="#0A0806" stroke-width="5.5" stroke-linecap="round" fill="none" />
    </g>

    <!-- Gotita de esencia dorada en la cima -->
    <circle cx="8" cy="-155" r="4" fill="url(#goldGrad10)" />
  </g>

  <!-- Tipografía Zen & Lujo -->
  <text x="540" y="775" text-anchor="middle" class="v10-title">TÉ O CAFÉ</text>
  
  <g transform="translate(540, 810)">
    <line x1="-140" y1="0" x2="-25" y2="0" stroke="url(#goldGrad10)" stroke-width="1.5" stroke-opacity="0.5" />
    <circle cx="0" cy="0" r="3" fill="url(#goldGrad10)" />
    <line x1="25" y1="0" x2="140" y2="0" stroke="url(#goldGrad10)" stroke-width="1.5" stroke-opacity="0.5" />
  </g>

  <text x="540" y="860" text-anchor="middle" class="v10-sub">EL RITUAL DEL BUEN VIVIR</text>
  <text x="540" y="905" text-anchor="middle" class="v10-domain">TEOCAFE.CL</text>
</svg>`;

// Guardar los 5 nuevos SVGs
const newVariants = [
  { svg: 'variant-6-golden-o.svg', png: 'variant-6-golden-o.png', code: v6Svg },
  { svg: 'variant-7-editorial-didot.svg', png: 'variant-7-editorial-didot.png', code: v7Svg },
  { svg: 'variant-8-minimal-geometric.svg', png: 'variant-8-minimal-geometric.png', code: v8Svg },
  { svg: 'variant-9-nordic-craft.svg', png: 'variant-9-nordic-craft.png', code: v9Svg },
  { svg: 'variant-10-zen-artisan.svg', png: 'variant-10-zen-artisan.png', code: v10Svg },
];

for (const v of newVariants) {
  fs.writeFileSync(path.join(outDir, v.svg), v.code, 'utf8');
  console.log(`Guardado SVG: ${v.svg}`);
}

// Renderizar PNGs en alta resolución (1080x1080)
const edgePath = 'C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe';
const tempHtml = path.join(__dirname, 'temp-fresh-variant.html');

for (const v of newVariants) {
  const svgContent = fs.readFileSync(path.join(outDir, v.svg), 'utf8');
  const outPng = path.join(outDir, v.png);

  const html = `<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Cinzel:wght@600;700;800;900&family=Montserrat:wght@300;400;500;600;700;800&family=Playfair+Display:ital,wght@0,500;0,600;0,700;1,500;1,600&display=swap" rel="stylesheet">
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

console.log('🎉 ¡Las 5 nuevas variantes frescas (6 a 10) están creadas y renderizadas!');
