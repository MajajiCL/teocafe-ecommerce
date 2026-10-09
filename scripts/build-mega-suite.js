const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const outDir = path.join(__dirname, '..', 'assets', 'branding');
if (!fs.existsSync(outDir)) {
  fs.mkdirSync(outDir, { recursive: true });
}

// =========================================================================
// VARIANTE 16: THE GOLDEN "O" HAIRLINE (Ultra-Precision Fine Line)
// =========================================================================
const v16Svg = `<?xml version="1.0" encoding="UTF-8"?>
<svg width="1080" height="1080" viewBox="0 0 1080 1080" fill="none" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <style>
      @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600;700&amp;display=swap');
      .v16-title { font-family: 'Montserrat', sans-serif; font-weight: 300; letter-spacing: 22px; font-size: 46px; fill: #FFFBEB; }
      .v16-sub { font-family: 'Montserrat', sans-serif; font-weight: 500; letter-spacing: 10px; font-size: 14px; fill: #F59E0B; }
    </style>
    <radialGradient id="bgGrad16" cx="50%" cy="45%" r="65%">
      <stop offset="0%" stop-color="#120E0A" /><stop offset="60%" stop-color="#070504" /><stop offset="100%" stop-color="#020101" />
    </radialGradient>
    <linearGradient id="goldGrad16" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#FFFBEB" /><stop offset="40%" stop-color="#FCD34D" /><stop offset="80%" stop-color="#F59E0B" /><stop offset="100%" stop-color="#B45309" />
    </linearGradient>
  </defs>

  <rect width="1080" height="1080" fill="url(#bgGrad16)" />

  <g transform="translate(540, 430)">
    <circle cx="0" cy="0" r="230" stroke="url(#goldGrad16)" stroke-width="1.5" />
    <circle cx="0" cy="0" r="218" stroke="url(#goldGrad16)" stroke-width="0.8" stroke-dasharray="3 3" opacity="0.4" />
    
    <!-- Hoja Hairline Izquierda -->
    <path d="M 0,-180 C -110,-130 -150,-40 -150,20 C -150,100 -80,160 0,180" stroke="url(#goldGrad16)" stroke-width="2" fill="none" />
    <path d="M 0,-150 Q -60,-20 0,150" stroke="url(#goldGrad16)" stroke-width="1.2" fill="none" opacity="0.7" />
    <path d="M -25,-80 L -80,-70" stroke="url(#goldGrad16)" stroke-width="1" opacity="0.5" />
    <path d="M -35,-15 L -105,-15" stroke="url(#goldGrad16)" stroke-width="1" opacity="0.5" />
    <path d="M -25,50 L -85,55" stroke="url(#goldGrad16)" stroke-width="1" opacity="0.5" />

    <!-- Grano Hairline Derecho -->
    <path d="M 0,-180 C 110,-130 150,-40 150,20 C 150,100 80,160 0,180" stroke="url(#goldGrad16)" stroke-width="2" fill="none" />
    <path d="M 0,-165 C 40,-95 45,-30 25,15 C 8,55 30,110 0,165" stroke="url(#goldGrad16)" stroke-width="1.8" fill="none" />

    <!-- Puntos cardinales de agrimensura -->
    <circle cx="0" cy="-245" r="2" fill="url(#goldGrad16)" />
    <circle cx="0" cy="245" r="2" fill="url(#goldGrad16)" />
    <circle cx="-245" cy="0" r="2" fill="url(#goldGrad16)" />
    <circle cx="245" cy="0" r="2" fill="url(#goldGrad16)" />
  </g>

  <text x="540" y="775" text-anchor="middle" class="v16-title">TÉ O CAFÉ</text>
  <text x="540" y="830" text-anchor="middle" class="v16-sub">HAIRLINE EDITION · SANTIAGO · TEOCAFE.CL</text>
</svg>`;

// =========================================================================
// VARIANTE 17: THE GOLDEN "O" ECLIPSE (Light & Shadow Contrast)
// =========================================================================
const v17Svg = `<?xml version="1.0" encoding="UTF-8"?>
<svg width="1080" height="1080" viewBox="0 0 1080 1080" fill="none" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <style>
      @import url('https://fonts.googleapis.com/css2?family=Cinzel:wght@700;800&amp;family=Montserrat:wght@400;500;600&amp;display=swap');
      .v17-title { font-family: 'Cinzel', serif; font-weight: 700; letter-spacing: 16px; font-size: 54px; fill: url(#goldGrad17Text); }
      .v17-sub { font-family: 'Montserrat', sans-serif; font-weight: 600; letter-spacing: 8px; font-size: 15px; fill: #FDE68A; }
    </style>
    <radialGradient id="bgGrad17" cx="50%" cy="45%" r="65%">
      <stop offset="0%" stop-color="#1B120B" /><stop offset="60%" stop-color="#080605" /><stop offset="100%" stop-color="#000000" />
    </radialGradient>
    <linearGradient id="goldGrad17" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#FFFBEB" /><stop offset="35%" stop-color="#F59E0B" /><stop offset="100%" stop-color="#78350F" />
    </linearGradient>
    <linearGradient id="goldGrad17Text" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="#FFFBEB" /><stop offset="50%" stop-color="#FCD34D" /><stop offset="100%" stop-color="#D97706" />
    </linearGradient>
  </defs>

  <rect width="1080" height="1080" fill="url(#bgGrad17)" />

  <!-- Eclipse Corona Glow -->
  <circle cx="540" cy="425" r="240" fill="none" stroke="url(#goldGrad17)" stroke-width="1" opacity="0.3" />
  
  <g transform="translate(540, 425)">
    <!-- Aro exterior con borde cortado estilo eclipse -->
    <path d="M 0,-210 C 120,-210 210,-120 210,0 C 210,120 120,210 0,210 C -120,210 -210,120 -210,0 C -210,-120 -120,-210 0,-210" stroke="url(#goldGrad17)" stroke-width="6" fill="none" />
    
    <!-- Lado Iluminado (Oro puro): La hoja de té que recibe el rayo de sol -->
    <path d="M 0,-180 C -110,-130 -160,-40 -160,20 C -160,110 -90,170 0,180 C -50,130 -60,50 -50,-20 C -45,-80 -20,-140 0,-180 Z" fill="url(#goldGrad17)" />
    
    <!-- Lado Sombra (Negro Obsidiana con contorno dorado): El Grano de Café Tostado Oscuro -->
    <path d="M 0,-180 C 110,-150 160,-70 160,25 C 160,120 90,175 0,180 Z" fill="#0E0A07" stroke="url(#goldGrad17)" stroke-width="3" />
    <path d="M 0,-165 C 40,-95 45,-30 25,15 C 8,55 30,110 0,165" stroke="url(#goldGrad17)" stroke-width="3" stroke-linecap="round" fill="none" />
  </g>

  <text x="540" y="765" text-anchor="middle" class="v17-title">TÉ O CAFÉ</text>
  <text x="540" y="825" text-anchor="middle" class="v17-sub">ECLIPSE NOIR EDITION · TEOCAFE.CL</text>
</svg>`;

// =========================================================================
// VARIANTE 18: THE GOLDEN "O" GEOMETRÍA SAGRADA (Fibonacci Blueprint)
// =========================================================================
const v18Svg = `<?xml version="1.0" encoding="UTF-8"?>
<svg width="1080" height="1080" viewBox="0 0 1080 1080" fill="none" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <style>
      @import url('https://fonts.googleapis.com/css2?family=Cinzel:wght@700;800&amp;family=Montserrat:wght@400;500;600;700&amp;display=swap');
      .v18-title { font-family: 'Cinzel', serif; font-weight: 700; letter-spacing: 16px; font-size: 54px; fill: url(#goldGrad18); }
      .v18-sub { font-family: 'Montserrat', sans-serif; font-weight: 600; letter-spacing: 8px; font-size: 15px; fill: #FDE68A; }
    </style>
    <radialGradient id="bgGrad18" cx="50%" cy="45%" r="65%">
      <stop offset="0%" stop-color="#18130E" /><stop offset="60%" stop-color="#080605" /><stop offset="100%" stop-color="#020202" />
    </radialGradient>
    <linearGradient id="goldGrad18" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#FFFBEB" /><stop offset="30%" stop-color="#FCD34D" /><stop offset="65%" stop-color="#F59E0B" /><stop offset="100%" stop-color="#B45309" />
    </linearGradient>
  </defs>

  <rect width="1080" height="1080" fill="url(#bgGrad18)" />

  <g transform="translate(540, 420)">
    <!-- Círculos de Construcción Áurea (Líneas Blueprint) -->
    <circle cx="0" cy="0" r="230" stroke="url(#goldGrad18)" stroke-width="2" />
    <circle cx="0" cy="0" r="142" stroke="url(#goldGrad18)" stroke-width="0.8" stroke-dasharray="4 4" opacity="0.4" />
    <circle cx="0" cy="0" r="88" stroke="url(#goldGrad18)" stroke-width="0.8" stroke-dasharray="3 3" opacity="0.3" />
    <circle cx="-54" cy="0" r="88" stroke="url(#goldGrad18)" stroke-width="0.8" opacity="0.25" />
    <circle cx="54" cy="0" r="88" stroke="url(#goldGrad18)" stroke-width="0.8" opacity="0.25" />

    <!-- Isotipo Central Destacado -->
    <path d="M 0,-180 C -110,-140 -150,-40 -150,20 C -150,110 -80,170 0,180 C -55,130 -75,50 -65,-20 C -55,-80 -25,-140 0,-180 Z" fill="url(#goldGrad18)" opacity="0.95" />
    <path d="M 0,-180 C 105,-150 165,-70 165,25 C 165,120 95,175 0,180 C 38,140 68,80 68,10 C 68,-60 33,-130 0,-180 Z" fill="url(#goldGrad18)" />
    
    <path d="M 0,-170 C 45,-100 50,-40 30,10 C 10,60 35,120 0,170" stroke="#080605" stroke-width="4" stroke-linecap="round" fill="none" />
  </g>

  <text x="540" y="760" text-anchor="middle" class="v18-title">TÉ O CAFÉ</text>
  <text x="540" y="818" text-anchor="middle" class="v18-sub">GEOMETRÍA ÁUREA · PROPORCIÓN FIBONACCI</text>
</svg>`;

// =========================================================================
// VARIANTE 19: THE GOLDEN "O" SOLID BADGE (Micro-Scale & Favicon Ready)
// =========================================================================
const v19Svg = `<?xml version="1.0" encoding="UTF-8"?>
<svg width="1080" height="1080" viewBox="0 0 1080 1080" fill="none" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <style>
      @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@800;900&amp;display=swap');
      .v19-title { font-family: 'Montserrat', sans-serif; font-weight: 900; letter-spacing: 14px; font-size: 58px; fill: url(#goldGrad19); }
      .v19-sub { font-family: 'Montserrat', sans-serif; font-weight: 700; letter-spacing: 7px; font-size: 15px; fill: #D97706; }
    </style>
    <linearGradient id="bgGrad19" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#14100D" /><stop offset="60%" stop-color="#080605" /><stop offset="100%" stop-color="#000000" />
    </linearGradient>
    <linearGradient id="goldGrad19" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#FFFBEB" /><stop offset="25%" stop-color="#FCD34D" /><stop offset="65%" stop-color="#F59E0B" /><stop offset="100%" stop-color="#92400E" />
    </linearGradient>
  </defs>

  <rect width="1080" height="1080" fill="url(#bgGrad19)" />

  <g transform="translate(540, 420)">
    <!-- Medallón Sólido Grueso de Alto Impacto Visual -->
    <circle cx="0" cy="0" r="230" fill="url(#goldGrad19)" />
    <!-- Círculo interior recortado -->
    <circle cx="0" cy="0" r="200" fill="#080605" />

    <!-- Núcleo de Alto Contraste -->
    <path d="M 0,-160 C -95,-120 -130,-35 -130,20 C -130,95 -70,145 0,160 Z" fill="url(#goldGrad19)" />
    <path d="M 0,-160 C 95,-120 130,-35 130,20 C 130,95 70,145 0,160 Z" fill="url(#goldGrad19)" />
    
    <!-- Hendidura negra recortada -->
    <circle cx="0" cy="0" r="30" fill="#080605" />
    <path d="M 0,-150 C 30,-90 35,-30 15,10 C 0,45 20,95 0,140" stroke="#080605" stroke-width="8" stroke-linecap="round" fill="none" />
  </g>

  <text x="540" y="770" text-anchor="middle" class="v19-title">TÉ O CAFÉ</text>
  <text x="540" y="825" text-anchor="middle" class="v19-sub">SOLID BADGE EDITION · FAVICON &amp; PACKAGING</text>
</svg>`;

// =========================================================================
// VARIANTE 20: EL GOTERO V60 & FILTRO DE PORCELANA (Specialty Pour-Over)
// =========================================================================
const v20Svg = `<?xml version="1.0" encoding="UTF-8"?>
<svg width="1080" height="1080" viewBox="0 0 1080 1080" fill="none" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <style>
      @import url('https://fonts.googleapis.com/css2?family=Cinzel:wght@700;800&amp;family=Montserrat:wght@500;600;700&amp;display=swap');
      .v20-title { font-family: 'Cinzel', serif; font-weight: 700; letter-spacing: 14px; font-size: 54px; fill: url(#goldGrad20); }
      .v20-sub { font-family: 'Montserrat', sans-serif; font-weight: 600; letter-spacing: 8px; font-size: 16px; fill: #FDE68A; }
    </style>
    <radialGradient id="bgGrad20" cx="50%" cy="45%" r="65%">
      <stop offset="0%" stop-color="#19130E" /><stop offset="60%" stop-color="#080605" /><stop offset="100%" stop-color="#020202" />
    </radialGradient>
    <linearGradient id="goldGrad20" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#FFFBEB" /><stop offset="30%" stop-color="#FCD34D" /><stop offset="65%" stop-color="#F59E0B" /><stop offset="100%" stop-color="#B45309" />
    </linearGradient>
  </defs>

  <rect width="1080" height="1080" fill="url(#bgGrad20)" />

  <g transform="translate(540, 410)">
    <!-- Cono V60 de Porcelana (Trazo estilizado) -->
    <path d="M -150,-140 L 150,-140 L 50,40 L -50,40 Z" stroke="url(#goldGrad20)" stroke-width="3.5" stroke-linejoin="round" fill="none" />
    <!-- Nervaduras cónicas espirales interiores -->
    <path d="M -110,-120 L -35,20" stroke="url(#goldGrad20)" stroke-width="1.8" opacity="0.6" />
    <path d="M -60,-120 L -15,20" stroke="url(#goldGrad20)" stroke-width="1.8" opacity="0.6" />
    <path d="M 0,-120 L 0,20" stroke="url(#goldGrad20)" stroke-width="1.8" opacity="0.6" />
    <path d="M 60,-120 L 15,20" stroke="url(#goldGrad20)" stroke-width="1.8" opacity="0.6" />
    <path d="M 110,-120 L 35,20" stroke="url(#goldGrad20)" stroke-width="1.8" opacity="0.6" />

    <!-- Base y servidor inferior -->
    <path d="M -70,50 L 70,50" stroke="url(#goldGrad20)" stroke-width="3" stroke-linecap="round" />
    
    <!-- Gotita dorada cayendo en el centro -->
    <circle cx="0" cy="85" r="7" fill="url(#goldGrad20)" />
    <circle cx="0" cy="120" r="5" fill="url(#goldGrad20)" />

    <!-- Hoja de té flotando sobre el lecho del cono -->
    <path d="M -40,-180 C -60,-160 -50,-130 -30,-125 C -10,-130 0,-160 -40,-180 Z" fill="url(#goldGrad20)" />
    <!-- Grano de café tostado al costado -->
    <ellipse cx="40" cy="-155" rx="16" ry="22" fill="url(#goldGrad20)" transform="rotate(20 40 -155)" />
    <path d="M 40,-170 C 45,-155 35,-155 40,-140" stroke="#080605" stroke-width="2.5" stroke-linecap="round" fill="none" />
  </g>

  <text x="540" y="755" text-anchor="middle" class="v20-title">TÉ O CAFÉ</text>
  <text x="540" y="815" text-anchor="middle" class="v20-sub">MÉTODOS DE FILTRADO &amp; EXTRACCIÓN MANUAL</text>
</svg>`;

// =========================================================================
// VARIANTE 21: EL FUEGO DEL TUESTE & EL AGUA PURA (Elements of Alchemy)
// =========================================================================
const v21Svg = `<?xml version="1.0" encoding="UTF-8"?>
<svg width="1080" height="1080" viewBox="0 0 1080 1080" fill="none" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <style>
      @import url('https://fonts.googleapis.com/css2?family=Cinzel:wght@700;800&amp;family=Montserrat:wght@500;600;700&amp;display=swap');
      .v21-title { font-family: 'Cinzel', serif; font-weight: 700; letter-spacing: 16px; font-size: 54px; fill: url(#goldGrad21); }
      .v21-sub { font-family: 'Montserrat', sans-serif; font-weight: 600; letter-spacing: 8px; font-size: 15px; fill: #FDE68A; }
    </style>
    <radialGradient id="bgGrad21" cx="50%" cy="45%" r="65%">
      <stop offset="0%" stop-color="#1A120C" /><stop offset="60%" stop-color="#080605" /><stop offset="100%" stop-color="#020202" />
    </radialGradient>
    <linearGradient id="goldGrad21" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#FFFBEB" /><stop offset="30%" stop-color="#FCD34D" /><stop offset="65%" stop-color="#F59E0B" /><stop offset="100%" stop-color="#B45309" />
    </linearGradient>
  </defs>

  <rect width="1080" height="1080" fill="url(#bgGrad21)" />

  <g transform="translate(540, 420)">
    <!-- Círculo de Protección Alquímica -->
    <circle cx="0" cy="0" r="225" stroke="url(#goldGrad21)" stroke-width="2" />
    
    <!-- Llama Dorada (El Fuego del Tueste del Café) -->
    <path d="M -80,100 C -130,40 -110,-40 -70,-90 C -70,-20 -20,20 -20,80 C -20,130 -60,140 -80,100 Z" fill="url(#goldGrad21)" />
    <!-- Grano dentro de la llama -->
    <ellipse cx="-65" cy="20" rx="14" ry="20" fill="#080605" transform="rotate(-15 -65 20)" />
    <path d="M -65,5 L -65,35" stroke="url(#goldGrad21)" stroke-width="2" stroke-linecap="round" />

    <!-- Gota de Infusión (El Agua Pura del Té) -->
    <path d="M 70,-100 C 130,-40 110,40 70,90 C 70,20 20,-20 20,-80 C 20,-130 60,-140 70,-100 Z" fill="url(#goldGrad21)" opacity="0.9" />
    <!-- Hoja de té dentro de la gota de agua -->
    <path d="M 65,-20 C 50,-40 55,-60 65,-75 C 75,-60 80,-40 65,-20 Z" fill="#080605" />
    <path d="M 65,-70 L 65,-25" stroke="url(#goldGrad21)" stroke-width="1.8" stroke-linecap="round" />
  </g>

  <text x="540" y="760" text-anchor="middle" class="v21-title">TÉ O CAFÉ</text>
  <text x="540" y="818" text-anchor="middle" class="v21-sub">LA ALQUIMIA DEL FUEGO &amp; EL AGUA</text>
</svg>`;

// =========================================================================
// VARIANTE 22: EL SOLSTICIO DE ORIGEN (Sunrise over Nuwara Eliya)
// =========================================================================
const v22Svg = `<?xml version="1.0" encoding="UTF-8"?>
<svg width="1080" height="1080" viewBox="0 0 1080 1080" fill="none" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <style>
      @import url('https://fonts.googleapis.com/css2?family=Cinzel:wght@700;800&amp;family=Montserrat:wght@500;600;700&amp;display=swap');
      .v22-title { font-family: 'Cinzel', serif; font-weight: 700; letter-spacing: 16px; font-size: 54px; fill: url(#goldGrad22); }
      .v22-sub { font-family: 'Montserrat', sans-serif; font-weight: 600; letter-spacing: 8px; font-size: 15px; fill: #FDE68A; }
    </style>
    <radialGradient id="bgGrad22" cx="50%" cy="45%" r="65%">
      <stop offset="0%" stop-color="#1B130E" /><stop offset="60%" stop-color="#080605" /><stop offset="100%" stop-color="#020202" />
    </radialGradient>
    <linearGradient id="goldGrad22" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#FFFBEB" /><stop offset="25%" stop-color="#FCD34D" /><stop offset="65%" stop-color="#F59E0B" /><stop offset="100%" stop-color="#B45309" />
    </linearGradient>
  </defs>

  <rect width="1080" height="1080" fill="url(#bgGrad22)" />

  <g transform="translate(540, 420)">
    <circle cx="0" cy="0" r="225" stroke="url(#goldGrad22)" stroke-width="2" />
    
    <!-- Sol naciente en el horizonte (Amanecer en las fincas de altura) -->
    <path d="M -120,-30 A 120 120 0 0 1 120 -30 Z" fill="url(#goldGrad22)" />
    
    <!-- Rayos del Sol de Origen -->
    <line x1="0" y1="-170" x2="0" y2="-195" stroke="url(#goldGrad22)" stroke-width="3" stroke-linecap="round" />
    <line x1="-80" y1="-140" x2="-95" y2="-160" stroke="url(#goldGrad22)" stroke-width="3" stroke-linecap="round" />
    <line x1="80" y1="-140" x2="95" y2="-160" stroke="url(#goldGrad22)" stroke-width="3" stroke-linecap="round" />

    <!-- Cordillera de Ceilán / Andes -->
    <path d="M -180,60 L -90,-20 L 0,40 L 90,-40 L 180,60" stroke="url(#goldGrad22)" stroke-width="3" stroke-linecap="round" fill="none" />
    
    <!-- Brote de Té y Grano en el valle -->
    <path d="M -25,90 C -45,70 -35,50 -20,45 C -5,50 5,70 -25,90 Z" fill="url(#goldGrad22)" />
    <ellipse cx="25" cy="70" rx="12" ry="17" fill="url(#goldGrad22)" transform="rotate(25 25 70)" />
  </g>

  <text x="540" y="760" text-anchor="middle" class="v22-title">TÉ O CAFÉ</text>
  <text x="540" y="818" text-anchor="middle" class="v22-sub">EL SOLSTICIO DE ORIGEN · CEILÁN &amp; ANDES</text>
</svg>`;

// =========================================================================
// VARIANTE 23: EL GRABADO BOTÁNICO FRANCÉS (18th Century Botanical Etching)
// =========================================================================
const v23Svg = `<?xml version="1.0" encoding="UTF-8"?>
<svg width="1080" height="1080" viewBox="0 0 1080 1080" fill="none" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <style>
      @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,600;0,700;1,600&amp;family=Montserrat:wght@400;500;600&amp;display=swap');
      .v23-title { font-family: 'Playfair Display', serif; font-weight: 700; letter-spacing: 14px; font-size: 58px; fill: url(#goldGrad23); }
      .v23-sub { font-family: 'Montserrat', sans-serif; font-weight: 600; letter-spacing: 8px; font-size: 15px; fill: #FDE68A; }
    </style>
    <radialGradient id="bgGrad23" cx="50%" cy="45%" r="65%">
      <stop offset="0%" stop-color="#18130E" /><stop offset="60%" stop-color="#080605" /><stop offset="100%" stop-color="#020202" />
    </radialGradient>
    <linearGradient id="goldGrad23" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#FFFBEB" /><stop offset="30%" stop-color="#FCD34D" /><stop offset="65%" stop-color="#F59E0B" /><stop offset="100%" stop-color="#B45309" />
    </linearGradient>
  </defs>

  <rect width="1080" height="1080" fill="url(#bgGrad23)" />

  <!-- Marco Ovalado de Herbolario Antiguo -->
  <ellipse cx="540" cy="420" rx="220" ry="250" stroke="url(#goldGrad23)" stroke-width="2" fill="none" />
  <ellipse cx="540" cy="420" rx="205" ry="235" stroke="url(#goldGrad23)" stroke-width="0.8" stroke-dasharray="3 3" opacity="0.4" fill="none" />

  <!-- Grabado de Rama Entrelazada (Camellia Sinensis & Coffea Arabica) -->
  <g transform="translate(540, 420)">
    <!-- Tallo principal curvado -->
    <path d="M 0, 160 C -30, 80 30, -40 0, -150" stroke="url(#goldGrad23)" stroke-width="3" stroke-linecap="round" fill="none" />
    
    <!-- Hojas de Té grabadas a los costados -->
    <path d="M -15, 30 C -65, 20 -85, -20 -70, -60 C -35, -45 -20, 0 -15, 30 Z" fill="url(#goldGrad23)" />
    <path d="M -45, -15 L -65, -35" stroke="#080605" stroke-width="1.5" stroke-linecap="round" />
    
    <path d="M 15, -40 C 65, -50 85, -90 70, -130 C 35, -115 20, -70 15, -40 Z" fill="url(#goldGrad23)" />
    <path d="M 45, -85 L 65, -105" stroke="#080605" stroke-width="1.5" stroke-linecap="round" />

    <!-- Cerezas / Granos de Café en racimo -->
    <circle cx="20" cy="60" r="16" fill="url(#goldGrad23)" />
    <circle cx="45" cy="80" r="14" fill="url(#goldGrad23)" />
    <circle cx="25" cy="100" r="15" fill="url(#goldGrad23)" />
    <!-- Brote superior -->
    <path d="M 0, -150 C -15, -170 0, -190 0, -190 C 0, -190 15, -170 0, -150 Z" fill="url(#goldGrad23)" />
  </g>

  <text x="540" y="760" text-anchor="middle" class="v23-title">TÉ O CAFÉ</text>
  <text x="540" y="818" text-anchor="middle" class="v23-sub">GRABADO BOTÁNICO DE AUTOR · MAISON DE THÉ</text>
</svg>`;

// =========================================================================
// VARIANTE 24: ESCUDO HEXAGONAL SUIZO (Swiss Precision Roaster)
// =========================================================================
const v24Svg = `<?xml version="1.0" encoding="UTF-8"?>
<svg width="1080" height="1080" viewBox="0 0 1080 1080" fill="none" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <style>
      @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@700;800;900&amp;display=swap');
      .v24-title { font-family: 'Montserrat', sans-serif; font-weight: 800; letter-spacing: 14px; font-size: 52px; fill: url(#goldGrad24); }
      .v24-sub { font-family: 'Montserrat', sans-serif; font-weight: 700; letter-spacing: 7px; font-size: 15px; fill: #FDE68A; }
    </style>
    <radialGradient id="bgGrad24" cx="50%" cy="45%" r="65%">
      <stop offset="0%" stop-color="#19130E" /><stop offset="60%" stop-color="#080605" /><stop offset="100%" stop-color="#020202" />
    </radialGradient>
    <linearGradient id="goldGrad24" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#FFFBEB" /><stop offset="30%" stop-color="#FCD34D" /><stop offset="65%" stop-color="#F59E0B" /><stop offset="100%" stop-color="#B45309" />
    </linearGradient>
  </defs>

  <rect width="1080" height="1080" fill="url(#bgGrad24)" />

  <g transform="translate(540, 410)">
    <!-- Hexágono Suizo de Precisión -->
    <polygon points="0,-220 190,-110 190,110 0,220 -190,110 -190,-110" stroke="url(#goldGrad24)" stroke-width="3" fill="none" />
    <polygon points="0,-200 170,-100 170,100 0,200 -170,100 -170,-100" stroke="url(#goldGrad24)" stroke-width="1" stroke-dasharray="4 4" opacity="0.4" fill="none" />

    <!-- Cruz Suiza Minimalista & Monograma TC integrado -->
    <line x1="0" y1="-120" x2="0" y2="120" stroke="url(#goldGrad24)" stroke-width="4" stroke-linecap="round" />
    <line x1="-120" y1="0" x2="120" y2="0" stroke="url(#goldGrad24)" stroke-width="4" stroke-linecap="round" />

    <!-- Cuadrantes: Hoja arriba izq, Grano arriba der, 20 abajo izq, 26 abajo der -->
    <path d="M -50,-80 C -80,-60 -70,-30 -45,-35 C -35,-45 -35,-70 -50,-80 Z" fill="url(#goldGrad24)" />
    <ellipse cx="50" cy="-55" rx="14" ry="20" fill="url(#goldGrad24)" transform="rotate(25 50 -55)" />
    
    <text x="-50" y="75" text-anchor="middle" font-family="'Montserrat', sans-serif" font-size="22" font-weight="800" fill="url(#goldGrad24)">20</text>
    <text x="50" y="75" text-anchor="middle" font-family="'Montserrat', sans-serif" font-size="22" font-weight="800" fill="url(#goldGrad24)">26</text>
  </g>

  <text x="540" y="755" text-anchor="middle" class="v24-title">TÉ O CAFÉ</text>
  <text x="540" y="815" text-anchor="middle" class="v24-sub">SWISS PRECISION ROASTING · TEOCAFE.CL</text>
</svg>`;

// Guardar y renderizar variantes 16 a 24
const wave4Variants = [
  { svg: 'variant-16-hairline-precision.svg', png: 'variant-16-hairline-precision.png', code: v16Svg },
  { svg: 'variant-17-eclipse-contrast.svg', png: 'variant-17-eclipse-contrast.png', code: v17Svg },
  { svg: 'variant-18-geometria-sagrada.svg', png: 'variant-18-geometria-sagrada.png', code: v18Svg },
  { svg: 'variant-19-solid-badge.svg', png: 'variant-19-solid-badge.png', code: v19Svg },
  { svg: 'variant-20-v60-pourover.svg', png: 'variant-20-v60-pourover.png', code: v20Svg },
  { svg: 'variant-21-fuego-y-agua.svg', png: 'variant-21-fuego-y-agua.png', code: v21Svg },
  { svg: 'variant-22-solsticio-origen.svg', png: 'variant-22-solsticio-origen.png', code: v22Svg },
  { svg: 'variant-23-grabado-botanico.svg', png: 'variant-23-grabado-botanico.png', code: v23Svg },
  { svg: 'variant-24-escudo-suizo.svg', png: 'variant-24-escudo-suizo.png', code: v24Svg },
];

for (const v of wave4Variants) {
  fs.writeFileSync(path.join(outDir, v.svg), v.code, 'utf8');
  console.log(`Guardado SVG: ${v.svg}`);
}

const edgePath = 'C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe';
const tempHtml = path.join(__dirname, 'temp-wave4.html');

for (const v of wave4Variants) {
  const svgContent = fs.readFileSync(path.join(outDir, v.svg), 'utf8');
  const outPng = path.join(outDir, v.png);

  const html = `<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Cinzel:wght@600;700;800;900&family=Montserrat:wght@300;400;500;600;700;800;900&family=Playfair+Display:ital,wght@0,600;0,700;1,600&display=swap" rel="stylesheet">
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

console.log('🎉 ¡Las 24 variantes maestras están completas!');
