const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const outDir = path.join(__dirname, '..', 'assets', 'branding');
if (!fs.existsSync(outDir)) {
  fs.mkdirSync(outDir, { recursive: true });
}

// =========================================================================
// VARIANTE 1: EL SELLO IMPERIAL (Royal Heritage Seal)
// =========================================================================
const v1Svg = `<?xml version="1.0" encoding="UTF-8"?>
<svg width="1080" height="1080" viewBox="0 0 1080 1080" fill="none" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <style>
      @import url('https://fonts.googleapis.com/css2?family=Cinzel:wght@700;800;900&amp;family=Montserrat:wght@500;600;700;800&amp;display=swap');
      .v1-title { font-family: 'Cinzel', serif; font-weight: 800; letter-spacing: 14px; font-size: 62px; fill: url(#goldGradText1); }
      .v1-sub { font-family: 'Montserrat', sans-serif; font-weight: 700; letter-spacing: 6px; font-size: 21px; fill: #FDE68A; }
      .v1-origin { font-family: 'Montserrat', sans-serif; font-weight: 600; letter-spacing: 4px; font-size: 15px; fill: #D97706; }
    </style>
    <radialGradient id="bgGrad1" cx="50%" cy="45%" r="65%">
      <stop offset="0%" stop-color="#1E150F" /><stop offset="55%" stop-color="#0E0A07" /><stop offset="100%" stop-color="#050403" />
    </radialGradient>
    <linearGradient id="goldGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#FDE68A" /><stop offset="25%" stop-color="#F59E0B" /><stop offset="60%" stop-color="#D97706" /><stop offset="100%" stop-color="#92400E" />
    </linearGradient>
    <linearGradient id="goldGradText1" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="#FFFBEB" /><stop offset="30%" stop-color="#FBBF24" /><stop offset="70%" stop-color="#F59E0B" /><stop offset="100%" stop-color="#B45309" />
    </linearGradient>
    <radialGradient id="glow1" cx="50%" cy="50%" r="50%">
      <stop offset="0%" stop-color="#F59E0B" stop-opacity="0.22" /><stop offset="60%" stop-color="#D97706" stop-opacity="0.06" /><stop offset="100%" stop-color="#000000" stop-opacity="0" />
    </radialGradient>
  </defs>

  <rect width="1080" height="1080" fill="url(#bgGrad1)" />
  <circle cx="540" cy="500" r="380" fill="url(#glow1)" />
  <circle cx="540" cy="500" r="450" stroke="url(#goldGrad1)" stroke-width="2" stroke-opacity="0.3" stroke-dasharray="10 8" />
  <circle cx="540" cy="500" r="435" stroke="url(#goldGrad1)" stroke-width="3.5" stroke-opacity="0.85" />
  <circle cx="540" cy="500" r="418" stroke="url(#goldGrad1)" stroke-width="1.5" stroke-opacity="0.4" />

  <circle cx="540" cy="65" r="4.5" fill="#F59E0B" /><circle cx="540" cy="935" r="4.5" fill="#F59E0B" />
  <circle cx="105" cy="500" r="4.5" fill="#F59E0B" /><circle cx="975" cy="500" r="4.5" fill="#F59E0B" />

  <g transform="translate(540, 435) scale(5.3) translate(-50, -50)">
    <circle cx="50" cy="50" r="46" stroke="url(#goldGrad1)" stroke-width="1.8" stroke-dasharray="3 2" opacity="0.5" />
    <circle cx="50" cy="50" r="42" stroke="url(#goldGrad1)" stroke-width="2.2" />
    <path d="M50 24C40 32 36 44 40 56C42 60 46 64 50 66C50 56 46 44 48 36C49 32 50 26 50 24Z" fill="url(#goldGrad1)" />
    <path d="M42 46C46 44 49 40 50 36" stroke="#0E0A07" stroke-width="1.6" stroke-linecap="round" />
    <path d="M50 34C58 34 66 42 66 52C66 62 58 70 50 70C54 62 54 42 50 34Z" fill="url(#goldGrad1)" />
    <path d="M52 38C58 44 58 60 52 66" stroke="#0E0A07" stroke-width="1.8" stroke-linecap="round" />
    <path d="M47 18C47 18 45 20 47 22C49 24 51 22 51 22" stroke="url(#goldGrad1)" stroke-width="1.8" stroke-linecap="round" opacity="0.85" />
    <path d="M53 15C53 15 55 17 53 19C51 21 53 23 53 23" stroke="url(#goldGrad1)" stroke-width="1.8" stroke-linecap="round" opacity="0.85" />
    <circle cx="24" cy="50" r="2" fill="url(#goldGrad1)" /><circle cx="76" cy="50" r="2" fill="url(#goldGrad1)" />
    <path d="M43 80L50 76L57 80" stroke="url(#goldGrad1)" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" opacity="0.9" />
  </g>

  <text x="540" y="730" text-anchor="middle" class="v1-title">TÉ O CAFÉ</text>
  <g transform="translate(540, 765)">
    <line x1="-150" y1="0" x2="-25" y2="0" stroke="url(#goldGrad1)" stroke-width="2" stroke-opacity="0.7" />
    <circle cx="0" cy="3.5" r="3.5" fill="#F59E0B" />
    <line x1="25" y1="0" x2="150" y2="0" stroke="url(#goldGrad1)" stroke-width="2" stroke-opacity="0.7" />
  </g>
  <text x="540" y="810" text-anchor="middle" class="v1-sub">TEOCAFE.CL</text>
  <text x="540" y="850" text-anchor="middle" class="v1-origin">ESPECIALIDAD • SANTIAGO • CHILE</text>
</svg>`;

// =========================================================================
// VARIANTE 2: MONOGRAMA TC MINIMAL (Modern Luxury Monogram)
// =========================================================================
const v2Svg = `<?xml version="1.0" encoding="UTF-8"?>
<svg width="1080" height="1080" viewBox="0 0 1080 1080" fill="none" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <style>
      @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700;800;900&amp;family=Cinzel:wght@700;800;900&amp;display=swap');
      .v2-title { font-family: 'Cinzel', serif; font-weight: 800; letter-spacing: 16px; font-size: 60px; fill: url(#goldGradText2); }
      .v2-sub { font-family: 'Montserrat', sans-serif; font-weight: 700; letter-spacing: 7px; font-size: 20px; fill: #FDE68A; }
      .v2-desc { font-family: 'Montserrat', sans-serif; font-weight: 600; letter-spacing: 5px; font-size: 14px; fill: #D97706; }
      .mono-t { font-family: 'Cinzel', serif; font-weight: 900; font-size: 220px; fill: url(#goldGrad2); }
      .mono-c { font-family: 'Cinzel', serif; font-weight: 900; font-size: 240px; fill: url(#goldGrad2); }
    </style>
    <radialGradient id="bgGrad2" cx="50%" cy="50%" r="70%">
      <stop offset="0%" stop-color="#14100E" /><stop offset="60%" stop-color="#0A0807" /><stop offset="100%" stop-color="#040303" />
    </radialGradient>
    <linearGradient id="goldGrad2" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#FFFBEB" /><stop offset="25%" stop-color="#FBBF24" /><stop offset="70%" stop-color="#D97706" /><stop offset="100%" stop-color="#92400E" />
    </linearGradient>
    <linearGradient id="goldGradText2" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="#FFFFFF" /><stop offset="40%" stop-color="#FBBF24" /><stop offset="100%" stop-color="#D97706" />
    </linearGradient>
  </defs>

  <rect width="1080" height="1080" fill="url(#bgGrad2)" />

  <!-- Marco Circular con Bisel Estelar -->
  <circle cx="540" cy="500" r="440" stroke="url(#goldGrad2)" stroke-width="2" stroke-opacity="0.3" stroke-dasharray="10 8" />
  <circle cx="540" cy="500" r="425" stroke="url(#goldGrad2)" stroke-width="3.5" stroke-opacity="0.85" />
  <polygon points="540,90 850,225 960,500 850,775 540,910 230,775 120,500 230,225" stroke="url(#goldGrad2)" stroke-width="1.5" stroke-opacity="0.4" />

  <!-- MONOGRAMA CENTRAL TC ESCULPIDO -->
  <g transform="translate(540, 420)">
    <circle cx="0" cy="0" r="190" fill="#120D0A" stroke="url(#goldGrad2)" stroke-width="2" />
    
    <!-- Corona de Hoja de té sobre la T -->
    <path d="M -40 -120 Q 0 -160 40 -120 Q 15 -135 0 -135 Q -15 -135 -40 -120 Z" fill="url(#goldGrad2)" />
    <line x1="0" y1="-155" x2="0" y2="-125" stroke="#0E0A07" stroke-width="2.5" />

    <!-- Letra T romana mayúscula -->
    <text x="-35" y="65" text-anchor="middle" class="mono-t">T</text>
    
    <!-- Letra C entrelazada -->
    <text x="40" y="90" text-anchor="middle" class="mono-c" opacity="0.92">C</text>

    <!-- Grano de café dorado en el corazón del lazo -->
    <g transform="translate(15, 20) scale(0.38) rotate(20)">
      <path d="M 0 -60 C 45 -60 70 -25 70 20 C 70 65 45 100 0 100 C 18 55 18 -10 0 -60 Z" fill="#FFFBEB" />
      <path d="M 12 -40 C 26 0 26 50 12 80" stroke="#0A0807" stroke-width="6" stroke-linecap="round" />
    </g>
  </g>

  <text x="540" y="730" text-anchor="middle" class="v2-title">TÉ O CAFÉ</text>
  <g transform="translate(540, 765)">
    <line x1="-140" y1="0" x2="-20" y2="0" stroke="url(#goldGrad2)" stroke-width="1.5" stroke-opacity="0.8" />
    <polygon points="0,-4 4,0 0,4 -4,0" fill="#F59E0B" />
    <line x1="20" y1="0" x2="140" y2="0" stroke="url(#goldGrad2)" stroke-width="1.5" stroke-opacity="0.8" />
  </g>
  <text x="540" y="810" text-anchor="middle" class="v2-sub">TEOCAFE.CL</text>
  <text x="540" y="850" text-anchor="middle" class="v2-desc">MONOGRAMA DE AUTOR • SANTIAGO</text>
</svg>`;

// =========================================================================
// VARIANTE 3: ALQUIMIA BOTÁNICA (Botanical Yin-Yang)
// =========================================================================
const v3Svg = `<?xml version="1.0" encoding="UTF-8"?>
<svg width="1080" height="1080" viewBox="0 0 1080 1080" fill="none" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <style>
      @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,700;0,800;1,700&amp;family=Montserrat:wght@500;600;700&amp;display=swap');
      .v3-title { font-family: 'Playfair Display', serif; font-weight: 800; letter-spacing: 10px; font-size: 64px; fill: url(#goldGradText3); }
      .v3-sub { font-family: 'Montserrat', sans-serif; font-weight: 700; letter-spacing: 6px; font-size: 20px; fill: #FDE68A; }
      .v3-tag { font-family: 'Montserrat', sans-serif; font-weight: 600; letter-spacing: 4px; font-size: 14px; fill: #D97706; }
    </style>
    <radialGradient id="bgGrad3" cx="50%" cy="45%" r="65%">
      <stop offset="0%" stop-color="#1A130C" /><stop offset="60%" stop-color="#0E0906" /><stop offset="100%" stop-color="#040302" />
    </radialGradient>
    <linearGradient id="goldGrad3" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#FFFBEB" /><stop offset="30%" stop-color="#F59E0B" /><stop offset="70%" stop-color="#D97706" /><stop offset="100%" stop-color="#78350F" />
    </linearGradient>
    <linearGradient id="goldGradText3" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="#FFFFFF" /><stop offset="35%" stop-color="#FDE68A" /><stop offset="75%" stop-color="#F59E0B" /><stop offset="100%" stop-color="#B45309" />
    </linearGradient>
  </defs>

  <rect width="1080" height="1080" fill="url(#bgGrad3)" />

  <circle cx="540" cy="500" r="440" stroke="url(#goldGrad3)" stroke-width="2" stroke-opacity="0.3" stroke-dasharray="4 6" />
  <circle cx="540" cy="500" r="425" stroke="url(#goldGrad3)" stroke-width="3" stroke-opacity="0.85" />

  <g transform="translate(540, 420)">
    <circle cx="0" cy="0" r="195" fill="#120B06" stroke="url(#goldGrad3)" stroke-width="3" />

    <!-- HOJA NOBLE ELEGANTE A LA IZQUIERDA -->
    <path d="M 0 -160 C -85 -140 -140 -80 -140 0 C -140 80 -80 140 0 160 C -40 90 -40 20 0 -160 Z" fill="url(#goldGrad3)" />
    <!-- Nervaduras de la hoja -->
    <path d="M 0 -140 C -50 -70 -50 40 0 140" stroke="#0E0906" stroke-width="5" stroke-linecap="round" fill="none" />
    <line x1="-35" y1="-50" x2="-80" y2="-65" stroke="#0E0906" stroke-width="3.5" stroke-linecap="round" />
    <line x1="-42" y1="0" x2="-95" y2="-5" stroke="#0E0906" stroke-width="3.5" stroke-linecap="round" />
    <line x1="-30" y1="50" x2="-75" y2="55" stroke="#0E0906" stroke-width="3.5" stroke-linecap="round" />

    <!-- GRANO DE CAFÉ ARÁBICA A LA DERECHA -->
    <g transform="translate(45, 0)">
      <path d="M 0 -130 C 75 -130 115 -75 115 0 C 115 75 75 130 0 130 C 30 70 30 -70 0 -130 Z" fill="url(#goldGrad3)" />
      <!-- Fisura en S del grano -->
      <path d="M 15 -100 C 40 -30 40 30 15 100" stroke="#0E0906" stroke-width="6" stroke-linecap="round" fill="none" />
      <circle cx="55" cy="-20" r="6" fill="#FFFBEB" opacity="0.8" />
    </g>

    <!-- Rayos solares de los cuatro puntos cardinales -->
    <circle cx="0" cy="-195" r="5" fill="#F59E0B" />
    <circle cx="0" cy="195" r="5" fill="#F59E0B" />
    <circle cx="-195" cy="0" r="5" fill="#F59E0B" />
    <circle cx="195" cy="0" r="5" fill="#F59E0B" />
  </g>

  <text x="540" y="730" text-anchor="middle" class="v3-title">Té o Café</text>
  <g transform="translate(540, 765)">
    <line x1="-150" y1="0" x2="-25" y2="0" stroke="url(#goldGrad3)" stroke-width="1.8" stroke-opacity="0.7" />
    <circle cx="0" cy="0" r="3" fill="#F59E0B" />
    <line x1="25" y1="0" x2="150" y2="0" stroke="url(#goldGrad3)" stroke-width="1.8" stroke-opacity="0.7" />
  </g>
  <text x="540" y="810" text-anchor="middle" class="v3-sub">TEOCAFE.CL</text>
  <text x="540" y="850" text-anchor="middle" class="v3-tag">ALQUIMIA DEL GRANO &amp; LA HOJA • CHILE</text>
</svg>`;

// =========================================================================
// VARIANTE 4: TAZA DE CATA & HOJA NACIENTE (Artisan Tasting Cup)
// =========================================================================
const v4Svg = `<?xml version="1.0" encoding="UTF-8"?>
<svg width="1080" height="1080" viewBox="0 0 1080 1080" fill="none" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <style>
      @import url('https://fonts.googleapis.com/css2?family=Cinzel:wght@700;800;900&amp;family=Montserrat:wght@500;600;700&amp;display=swap');
      .v4-title { font-family: 'Cinzel', serif; font-weight: 800; letter-spacing: 14px; font-size: 60px; fill: url(#goldGradText4); }
      .v4-sub { font-family: 'Montserrat', sans-serif; font-weight: 700; letter-spacing: 6px; font-size: 20px; fill: #FDE68A; }
      .v4-desc { font-family: 'Montserrat', sans-serif; font-weight: 600; letter-spacing: 4px; font-size: 14px; fill: #D97706; }
    </style>
    <radialGradient id="bgGrad4" cx="50%" cy="45%" r="65%">
      <stop offset="0%" stop-color="#1B140E" /><stop offset="60%" stop-color="#0E0A07" /><stop offset="100%" stop-color="#040303" />
    </radialGradient>
    <linearGradient id="goldGrad4" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#FFFBEB" /><stop offset="25%" stop-color="#F59E0B" /><stop offset="70%" stop-color="#D97706" /><stop offset="100%" stop-color="#92400E" />
    </linearGradient>
    <linearGradient id="goldGradText4" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="#FFFFFF" /><stop offset="35%" stop-color="#FBBF24" /><stop offset="100%" stop-color="#B45309" />
    </linearGradient>
  </defs>

  <rect width="1080" height="1080" fill="url(#bgGrad4)" />

  <circle cx="540" cy="500" r="445" stroke="url(#goldGrad4)" stroke-width="2" stroke-opacity="0.3" stroke-dasharray="8 6" />
  <circle cx="540" cy="500" r="430" stroke="url(#goldGrad4)" stroke-width="3" stroke-opacity="0.85" />

  <g transform="translate(540, 420)">
    <!-- Plato base elíptico -->
    <ellipse cx="0" cy="140" rx="165" ry="18" stroke="url(#goldGrad4)" stroke-width="4.5" fill="none" />
    <line x1="-125" y1="140" x2="125" y2="140" stroke="url(#goldGrad4)" stroke-width="2.5" stroke-opacity="0.5" />

    <!-- Taza de porcelana de degustación -->
    <path d="M -100 15 L -85 125 C -85 135 85 135 85 125 L 100 15 Z" fill="url(#goldGrad4)" />
    <ellipse cx="0" cy="20" rx="100" ry="20" fill="#120D08" stroke="url(#goldGrad4)" stroke-width="4" />

    <!-- Asa de la taza -->
    <path d="M 95 35 C 150 35 150 100 90 105" stroke="url(#goldGrad4)" stroke-width="8" stroke-linecap="round" fill="none" />

    <!-- Vapor aromático que asciende y corona en Hoja noble -->
    <path d="M 0 -5 C 20 -50 -20 -95 0 -145 L 0 -175" stroke="url(#goldGrad4)" stroke-width="5" stroke-linecap="round" fill="none" />
    
    <!-- Hoja de Té grande en la cúspide -->
    <path d="M 0 -175 C -50 -205 -40 -260 0 -285 C 40 -260 50 -205 0 -175 Z" fill="url(#goldGrad4)" />
    <path d="M 0 -275 L 0 -190" stroke="#120D08" stroke-width="3.5" stroke-linecap="round" />

    <!-- Grano de café en el vapor izquierdo -->
    <g transform="translate(-50, -75) scale(0.45) rotate(-25)">
      <path d="M 0 -50 C 45 -50 70 -20 70 20 C 70 65 45 100 0 100 C 18 55 18 -10 0 -50 Z" fill="url(#goldGrad4)" />
      <path d="M 12 -35 C 26 0 26 50 12 80" stroke="#120D08" stroke-width="6" stroke-linecap="round" />
    </g>

    <!-- Gota de espresso crema que desciende derecha -->
    <path d="M 50 -100 C 50 -100 68 -70 68 -55 C 68 -42 58 -32 50 -32 C 42 -32 32 -42 32 -55 C 32 -70 50 -100 50 -100 Z" fill="#FDE68A" />
  </g>

  <text x="540" y="730" text-anchor="middle" class="v4-title">TÉ O CAFÉ</text>
  <g transform="translate(540, 765)">
    <line x1="-150" y1="0" x2="-25" y2="0" stroke="url(#goldGrad4)" stroke-width="2" stroke-opacity="0.7" />
    <circle cx="0" cy="0" r="3.5" fill="#F59E0B" />
    <line x1="25" y1="0" x2="150" y2="0" stroke="url(#goldGrad4)" stroke-width="2" stroke-opacity="0.7" />
  </g>
  <text x="540" y="810" text-anchor="middle" class="v4-sub">TEOCAFE.CL</text>
  <text x="540" y="850" text-anchor="middle" class="v4-desc">CULTURA DE CATA &amp; ESPECIALIDAD • SANTIAGO</text>
</svg>`;

// =========================================================================
// VARIANTE 5: ESCUDO TOSTADURÍA 2026 (Heritage Roastery Crest)
// =========================================================================
const v5Svg = `<?xml version="1.0" encoding="UTF-8"?>
<svg width="1080" height="1080" viewBox="0 0 1080 1080" fill="none" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <style>
      @import url('https://fonts.googleapis.com/css2?family=Cinzel:wght@700;800;900&amp;family=Montserrat:wght@600;700;800&amp;display=swap');
      .v5-title { font-family: 'Cinzel', serif; font-weight: 800; letter-spacing: 12px; font-size: 60px; fill: url(#goldGradText5); }
      .v5-sub { font-family: 'Montserrat', sans-serif; font-weight: 700; letter-spacing: 6px; font-size: 20px; fill: #FDE68A; }
      .v5-desc { font-family: 'Montserrat', sans-serif; font-weight: 600; letter-spacing: 4px; font-size: 14px; fill: #D97706; }
      .v5-year { font-family: 'Cinzel', serif; font-weight: 800; letter-spacing: 3px; font-size: 20px; fill: #FDE68A; }
    </style>
    <radialGradient id="bgGrad5" cx="50%" cy="45%" r="65%">
      <stop offset="0%" stop-color="#1E140D" /><stop offset="55%" stop-color="#0E0906" /><stop offset="100%" stop-color="#050302" />
    </radialGradient>
    <linearGradient id="goldGrad5" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#FFFBEB" /><stop offset="25%" stop-color="#F59E0B" /><stop offset="70%" stop-color="#D97706" /><stop offset="100%" stop-color="#78350F" />
    </linearGradient>
    <linearGradient id="goldGradText5" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="#FFFFFF" /><stop offset="35%" stop-color="#FBBF24" /><stop offset="100%" stop-color="#B45309" />
    </linearGradient>
  </defs>

  <rect width="1080" height="1080" fill="url(#bgGrad5)" />

  <circle cx="540" cy="500" r="445" stroke="url(#goldGrad5)" stroke-width="2" stroke-opacity="0.3" stroke-dasharray="10 8" />
  <circle cx="540" cy="500" r="430" stroke="url(#goldGrad5)" stroke-width="3" stroke-opacity="0.85" />

  <g transform="translate(540, 420)">
    <!-- Corona superior de brotes de té -->
    <path d="M -60 -185 Q -30 -235 0 -240 Q 30 -235 60 -185 Q 25 -205 0 -205 Q -25 -205 -60 -185 Z" fill="url(#goldGrad5)" />
    <circle cx="0" cy="-250" r="6" fill="#FFFBEB" />

    <!-- BLASÓN DEL ESCUDO -->
    <path d="M 0 -170 L 140 -120 C 145 0 110 120 0 180 C -110 120 -145 0 -140 -120 Z" stroke="url(#goldGrad5)" stroke-width="7" fill="#120A06" />
    <path d="M 0 -155 L 125 -110 C 130 0 95 105 0 160 C -95 105 -130 0 -125 -110 Z" stroke="url(#goldGrad5)" stroke-width="1.8" stroke-dasharray="6 4" fill="none" opacity="0.6" />

    <!-- Ejes del escudo -->
    <line x1="0" y1="-150" x2="0" y2="155" stroke="url(#goldGrad5)" stroke-width="2.5" stroke-opacity="0.5" />
    <line x1="-120" y1="-10" x2="120" y2="-10" stroke="url(#goldGrad5)" stroke-width="2.5" stroke-opacity="0.5" />

    <!-- Cuadrante 1: Hoja de Té de Ceilán dorada sólida -->
    <g transform="translate(-50, -75) scale(0.85)">
      <path d="M 0 -45 C -35 -20 -30 30 0 50 C 30 30 35 -20 0 -45 Z" fill="url(#goldGrad5)" />
      <line x1="0" y1="-35" x2="0" y2="40" stroke="#120A06" stroke-width="3.5" />
    </g>

    <!-- Cuadrante 2: Grano de Café Arábica dorado sólido -->
    <g transform="translate(50, -75) scale(0.8)">
      <path d="M 0 -50 C 40 -50 65 -15 65 25 C 65 65 40 100 0 100 C 15 50 15 -10 0 -50 Z" fill="url(#goldGrad5)" />
      <path d="M 12 -35 C 26 0 26 50 12 80" stroke="#120A06" stroke-width="5" stroke-linecap="round" />
    </g>

    <!-- Cuadrante 3: Año 20 -->
    <text x="-55" y="75" text-anchor="middle" class="v5-year">20</text>

    <!-- Cuadrante 4: Año 26 -->
    <text x="55" y="75" text-anchor="middle" class="v5-year">26</text>

    <!-- Estrella central -->
    <polygon points="0,-12 4,-4 12,0 4,4 0,12 -4,4 -12,0 -4,-4" fill="#FFFFFF" />

    <!-- Ribbon inferior con TEOCAFE.CL -->
    <g transform="translate(0, 205)">
      <path d="M -145 0 L 145 0 L 130 32 L -130 32 Z" fill="#0A0604" stroke="url(#goldGrad5)" stroke-width="2.5" />
      <text x="0" y="22" text-anchor="middle" font-family="'Montserrat', monospace" font-weight="800" font-size="15" letter-spacing="4" fill="#FDE68A">TEOCAFE.CL</text>
    </g>
  </g>

  <text x="540" y="735" text-anchor="middle" class="v5-title">TÉ O CAFÉ</text>
  <g transform="translate(540, 770)">
    <line x1="-150" y1="0" x2="-25" y2="0" stroke="url(#goldGrad5)" stroke-width="2" stroke-opacity="0.7" />
    <circle cx="0" cy="0" r="3.5" fill="#F59E0B" />
    <line x1="25" y1="0" x2="150" y2="0" stroke="url(#goldGrad5)" stroke-width="2" stroke-opacity="0.7" />
  </g>
  <text x="540" y="815" text-anchor="middle" class="v5-sub">TOSTADURÍA &amp; HOJA NOBLE</text>
  <text x="540" y="855" text-anchor="middle" class="v5-desc">ESPECIALIDAD CHILENA • SANTIAGO</text>
</svg>`;

// Guardar los 5 SVGs
fs.writeFileSync(path.join(outDir, 'variant-1-sello-imperial.svg'), v1Svg);
fs.writeFileSync(path.join(outDir, 'variant-2-monograma-tc.svg'), v2Svg);
fs.writeFileSync(path.join(outDir, 'variant-3-alquimia-botanica.svg'), v3Svg);
fs.writeFileSync(path.join(outDir, 'variant-4-taza-artesanal.svg'), v4Svg);
fs.writeFileSync(path.join(outDir, 'variant-5-escudo-tostaduria.svg'), v5Svg);

console.log('✅ SVGs de las 5 variantes actualizados.');

// Renderizar PNGs
const edgePath = 'C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe';
const variants = [
  { svg: 'variant-1-sello-imperial.svg', png: 'variant-1-sello-imperial.png' },
  { svg: 'variant-2-monograma-tc.svg', png: 'variant-2-monograma-tc.png' },
  { svg: 'variant-3-alquimia-botanica.svg', png: 'variant-3-alquimia-botanica.png' },
  { svg: 'variant-4-taza-artesanal.svg', png: 'variant-4-taza-artesanal.png' },
  { svg: 'variant-5-escudo-tostaduria.svg', png: 'variant-5-escudo-tostaduria.png' },
];

const tempHtml = path.join(__dirname, 'temp-variant.html');

for (const v of variants) {
  const svgContent = fs.readFileSync(path.join(outDir, v.svg), 'utf8');
  const outPng = path.join(outDir, v.png);

  const html = `<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Cinzel:wght@600;700;800;900&family=Montserrat:wght@400;500;600;700;800&family=Playfair+Display:ital,wght@0,700;1,700&display=swap" rel="stylesheet">
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

console.log('🎉 Las 5 variantes están listas!');
