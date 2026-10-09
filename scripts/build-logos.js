const fs = require('fs');
const path = require('path');

const outDir = path.join(__dirname, '..', 'assets', 'branding');
if (!fs.existsSync(outDir)) {
  fs.mkdirSync(outDir, { recursive: true });
}

// 1. AVATAR DE INSTAGRAM (1080x1080, Fondo Oscuro de Lujo, Centrado Óptimo)
const instagramAvatarSvg = `<?xml version="1.0" encoding="UTF-8"?>
<svg width="1080" height="1080" viewBox="0 0 1080 1080" fill="none" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <style>
      @import url('https://fonts.googleapis.com/css2?family=Cinzel:wght@700;800;900&amp;family=Montserrat:wght@400;500;600;700;800&amp;display=swap');
      .brand-title {
        font-family: 'Cinzel', 'Times New Roman', serif;
        font-weight: 800;
        letter-spacing: 14px;
        fill: url(#goldGradText);
      }
      .brand-sub {
        font-family: 'Montserrat', sans-serif;
        font-weight: 700;
        letter-spacing: 6px;
        font-size: 21px;
        fill: #FDE68A;
      }
      .brand-origin {
        font-family: 'Montserrat', sans-serif;
        font-weight: 600;
        letter-spacing: 4px;
        font-size: 15px;
        fill: #D97706;
      }
    </style>
    
    <radialGradient id="bgGrad" cx="50%" cy="45%" r="65%">
      <stop offset="0%" stop-color="#1E150F" />
      <stop offset="55%" stop-color="#0E0A07" />
      <stop offset="100%" stop-color="#050403" />
    </radialGradient>

    <linearGradient id="goldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#FDE68A" />
      <stop offset="25%" stop-color="#F59E0B" />
      <stop offset="60%" stop-color="#D97706" />
      <stop offset="100%" stop-color="#92400E" />
    </linearGradient>

    <linearGradient id="goldGradText" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="#FFFBEB" />
      <stop offset="30%" stop-color="#FBBF24" />
      <stop offset="70%" stop-color="#F59E0B" />
      <stop offset="100%" stop-color="#B45309" />
    </linearGradient>

    <radialGradient id="goldGlow" cx="50%" cy="50%" r="50%">
      <stop offset="0%" stop-color="#F59E0B" stop-opacity="0.22" />
      <stop offset="60%" stop-color="#D97706" stop-opacity="0.06" />
      <stop offset="100%" stop-color="#000000" stop-opacity="0" />
    </radialGradient>
  </defs>

  <rect width="1080" height="1080" fill="url(#bgGrad)" />
  <circle cx="540" cy="500" r="380" fill="url(#goldGlow)" />

  <circle cx="540" cy="500" r="450" stroke="url(#goldGrad)" stroke-width="2" stroke-opacity="0.3" stroke-dasharray="10 8" />
  <circle cx="540" cy="500" r="435" stroke="url(#goldGrad)" stroke-width="3.5" stroke-opacity="0.85" />
  <circle cx="540" cy="500" r="418" stroke="url(#goldGrad)" stroke-width="1.5" stroke-opacity="0.4" />

  <circle cx="540" cy="65" r="4.5" fill="#F59E0B" />
  <circle cx="540" cy="935" r="4.5" fill="#F59E0B" />
  <circle cx="105" cy="500" r="4.5" fill="#F59E0B" />
  <circle cx="975" cy="500" r="4.5" fill="#F59E0B" />

  <g transform="translate(540, 435) scale(5.3) translate(-50, -50)">
    <circle cx="50" cy="50" r="46" stroke="url(#goldGrad)" stroke-width="1.8" stroke-dasharray="3 2" opacity="0.5" />
    <circle cx="50" cy="50" r="42" stroke="url(#goldGrad)" stroke-width="2.2" />

    <path d="M50 24C40 32 36 44 40 56C42 60 46 64 50 66C50 56 46 44 48 36C49 32 50 26 50 24Z" fill="url(#goldGrad)" />
    <path d="M42 46C46 44 49 40 50 36" stroke="#0E0A07" stroke-width="1.6" stroke-linecap="round" />

    <path d="M50 34C58 34 66 42 66 52C66 62 58 70 50 70C54 62 54 42 50 34Z" fill="url(#goldGrad)" />
    <path d="M52 38C58 44 58 60 52 66" stroke="#0E0A07" stroke-width="1.8" stroke-linecap="round" />

    <path d="M47 18C47 18 45 20 47 22C49 24 51 22 51 22" stroke="url(#goldGrad)" stroke-width="1.8" stroke-linecap="round" opacity="0.85" />
    <path d="M53 15C53 15 55 17 53 19C51 21 53 23 53 23" stroke="url(#goldGrad)" stroke-width="1.8" stroke-linecap="round" opacity="0.85" />

    <circle cx="24" cy="50" r="2" fill="url(#goldGrad)" />
    <circle cx="76" cy="50" r="2" fill="url(#goldGrad)" />
    <path d="M43 80L50 76L57 80" stroke="url(#goldGrad)" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" opacity="0.9" />
  </g>

  <text x="540" y="730" text-anchor="middle" class="brand-title" font-size="62">TÉ O CAFÉ</text>
  
  <g transform="translate(540, 765)">
    <line x1="-150" y1="0" x2="-25" y2="0" stroke="url(#goldGrad)" stroke-width="2" stroke-opacity="0.7" />
    <circle cx="0" cy="3.5" r="3.5" fill="#F59E0B" />
    <line x1="25" y1="0" x2="150" y2="0" stroke="url(#goldGrad)" stroke-width="2" stroke-opacity="0.7" />
  </g>

  <text x="540" y="810" text-anchor="middle" class="brand-sub">TEOCAFE.CL</text>
  <text x="540" y="850" text-anchor="middle" class="brand-origin">ESPECIALIDAD • SANTIAGO • CHILE</text>
</svg>`;

// 2. LOGO TRANSPARENTE DORADO (1080x1080)
const transparentGoldSvg = `<?xml version="1.0" encoding="UTF-8"?>
<svg width="1080" height="1080" viewBox="0 0 1080 1080" fill="none" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <style>
      @import url('https://fonts.googleapis.com/css2?family=Cinzel:wght@700;800;900&amp;family=Montserrat:wght@600;700&amp;display=swap');
      .brand-title {
        font-family: 'Cinzel', 'Times New Roman', serif;
        font-weight: 800;
        letter-spacing: 14px;
        fill: url(#goldGradText);
      }
      .brand-sub {
        font-family: 'Montserrat', sans-serif;
        font-weight: 700;
        letter-spacing: 6px;
        font-size: 21px;
        fill: #FDE68A;
      }
      .brand-origin {
        font-family: 'Montserrat', sans-serif;
        font-weight: 600;
        letter-spacing: 4px;
        font-size: 15px;
        fill: #F59E0B;
      }
    </style>
    
    <linearGradient id="goldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#FDE68A" />
      <stop offset="25%" stop-color="#F59E0B" />
      <stop offset="60%" stop-color="#D97706" />
      <stop offset="100%" stop-color="#92400E" />
    </linearGradient>

    <linearGradient id="goldGradText" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="#FFFBEB" />
      <stop offset="30%" stop-color="#FBBF24" />
      <stop offset="70%" stop-color="#F59E0B" />
      <stop offset="100%" stop-color="#B45309" />
    </linearGradient>
  </defs>

  <circle cx="540" cy="500" r="450" stroke="url(#goldGrad)" stroke-width="2" stroke-opacity="0.3" stroke-dasharray="10 8" />
  <circle cx="540" cy="500" r="435" stroke="url(#goldGrad)" stroke-width="3.5" stroke-opacity="0.85" />
  <circle cx="540" cy="500" r="418" stroke="url(#goldGrad)" stroke-width="1.5" stroke-opacity="0.4" />

  <g transform="translate(540, 435) scale(5.3) translate(-50, -50)">
    <circle cx="50" cy="50" r="46" stroke="url(#goldGrad)" stroke-width="1.8" stroke-dasharray="3 2" opacity="0.5" />
    <circle cx="50" cy="50" r="42" stroke="url(#goldGrad)" stroke-width="2.2" />

    <path d="M50 24C40 32 36 44 40 56C42 60 46 64 50 66C50 56 46 44 48 36C49 32 50 26 50 24Z" fill="url(#goldGrad)" />
    <path d="M42 46C46 44 49 40 50 36" stroke="#000000" stroke-width="1.6" stroke-linecap="round" />

    <path d="M50 34C58 34 66 42 66 52C66 62 58 70 50 70C54 62 54 42 50 34Z" fill="url(#goldGrad)" />
    <path d="M52 38C58 44 58 60 52 66" stroke="#000000" stroke-width="1.8" stroke-linecap="round" />

    <path d="M47 18C47 18 45 20 47 22C49 24 51 22 51 22" stroke="url(#goldGrad)" stroke-width="1.8" stroke-linecap="round" opacity="0.85" />
    <path d="M53 15C53 15 55 17 53 19C51 21 53 23 53 23" stroke="url(#goldGrad)" stroke-width="1.8" stroke-linecap="round" opacity="0.85" />

    <circle cx="24" cy="50" r="2" fill="url(#goldGrad)" />
    <circle cx="76" cy="50" r="2" fill="url(#goldGrad)" />
    <path d="M43 80L50 76L57 80" stroke="url(#goldGrad)" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" opacity="0.9" />
  </g>

  <text x="540" y="730" text-anchor="middle" class="brand-title" font-size="62">TÉ O CAFÉ</text>
  
  <g transform="translate(540, 765)">
    <line x1="-150" y1="0" x2="-25" y2="0" stroke="url(#goldGrad)" stroke-width="2" stroke-opacity="0.7" />
    <circle cx="0" cy="3.5" r="3.5" fill="#F59E0B" />
    <line x1="25" y1="0" x2="150" y2="0" stroke="url(#goldGrad)" stroke-width="2" stroke-opacity="0.7" />
  </g>

  <text x="540" y="810" text-anchor="middle" class="brand-sub">TEOCAFE.CL</text>
  <text x="540" y="850" text-anchor="middle" class="brand-origin">ESPECIALIDAD • SANTIAGO • CHILE</text>
</svg>`;

// 3. LOGO TRANSPARENTE BLANCO (1080x1080)
const transparentWhiteSvg = `<?xml version="1.0" encoding="UTF-8"?>
<svg width="1080" height="1080" viewBox="0 0 1080 1080" fill="none" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <style>
      @import url('https://fonts.googleapis.com/css2?family=Cinzel:wght@700;800;900&amp;family=Montserrat:wght@600;700&amp;display=swap');
      .brand-title-w {
        font-family: 'Cinzel', 'Times New Roman', serif;
        font-weight: 800;
        letter-spacing: 14px;
        fill: #FFFFFF;
      }
      .brand-sub-w {
        font-family: 'Montserrat', sans-serif;
        font-weight: 700;
        letter-spacing: 6px;
        font-size: 21px;
        fill: rgba(255, 255, 255, 0.95);
      }
      .brand-origin-w {
        font-family: 'Montserrat', sans-serif;
        font-weight: 600;
        letter-spacing: 4px;
        font-size: 15px;
        fill: rgba(255, 255, 255, 0.7);
      }
    </style>
  </defs>

  <circle cx="540" cy="500" r="450" stroke="#FFFFFF" stroke-width="2" stroke-opacity="0.3" stroke-dasharray="10 8" />
  <circle cx="540" cy="500" r="435" stroke="#FFFFFF" stroke-width="3.5" stroke-opacity="0.9" />
  <circle cx="540" cy="500" r="418" stroke="#FFFFFF" stroke-width="1.5" stroke-opacity="0.3" />

  <g transform="translate(540, 435) scale(5.3) translate(-50, -50)">
    <circle cx="50" cy="50" r="46" stroke="#FFFFFF" stroke-width="1.8" stroke-dasharray="3 2" opacity="0.4" />
    <circle cx="50" cy="50" r="42" stroke="#FFFFFF" stroke-width="2.2" />

    <path d="M50 24C40 32 36 44 40 56C42 60 46 64 50 66C50 56 46 44 48 36C49 32 50 26 50 24Z" fill="#FFFFFF" />
    <path d="M42 46C46 44 49 40 50 36" stroke="#000000" stroke-width="1.6" stroke-linecap="round" />

    <path d="M50 34C58 34 66 42 66 52C66 62 58 70 50 70C54 62 54 42 50 34Z" fill="#FFFFFF" />
    <path d="M52 38C58 44 58 60 52 66" stroke="#000000" stroke-width="1.8" stroke-linecap="round" />

    <path d="M47 18C47 18 45 20 47 22C49 24 51 22 51 22" stroke="#FFFFFF" stroke-width="1.8" stroke-linecap="round" opacity="0.85" />
    <path d="M53 15C53 15 55 17 53 19C51 21 53 23 53 23" stroke="#FFFFFF" stroke-width="1.8" stroke-linecap="round" opacity="0.85" />

    <circle cx="24" cy="50" r="2" fill="#FFFFFF" />
    <circle cx="76" cy="50" r="2" fill="#FFFFFF" />
    <path d="M43 80L50 76L57 80" stroke="#FFFFFF" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" opacity="0.9" />
  </g>

  <text x="540" y="730" text-anchor="middle" class="brand-title-w" font-size="62">TÉ O CAFÉ</text>
  
  <g transform="translate(540, 765)">
    <line x1="-150" y1="0" x2="-25" y2="0" stroke="#FFFFFF" stroke-width="2" stroke-opacity="0.6" />
    <circle cx="0" cy="3.5" r="3.5" fill="#FFFFFF" />
    <line x1="25" y1="0" x2="150" y2="0" stroke="#FFFFFF" stroke-width="2" stroke-opacity="0.6" />
  </g>

  <text x="540" y="810" text-anchor="middle" class="brand-sub-w">TEOCAFE.CL</text>
  <text x="540" y="850" text-anchor="middle" class="brand-origin-w">ESPECIALIDAD • SANTIAGO • CHILE</text>
</svg>`;

// 4. LOGO HORIZONTAL DE LUJO (1200x400)
const horizontalDarkSvg = `<?xml version="1.0" encoding="UTF-8"?>
<svg width="1200" height="400" viewBox="0 0 1200 400" fill="none" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <style>
      @import url('https://fonts.googleapis.com/css2?family=Cinzel:wght@700;800;900&amp;family=Montserrat:wght@500;600;700;800&amp;display=swap');
      .h-title {
        font-family: 'Cinzel', 'Times New Roman', serif;
        font-weight: 800;
        letter-spacing: 12px;
        font-size: 76px;
        fill: url(#goldGradTextH);
      }
      .h-badge {
        font-family: 'Montserrat', monospace;
        font-weight: 700;
        font-size: 16px;
        letter-spacing: 3px;
        fill: #F59E0B;
      }
      .h-tagline {
        font-family: 'Montserrat', sans-serif;
        font-weight: 600;
        letter-spacing: 5px;
        font-size: 19px;
        fill: #E5E7EB;
      }
      .h-sub {
        font-family: 'Montserrat', sans-serif;
        font-weight: 500;
        letter-spacing: 3px;
        font-size: 15px;
        fill: #A1A1AA;
      }
    </style>
    
    <radialGradient id="hBgGrad" cx="30%" cy="50%" r="70%">
      <stop offset="0%" stop-color="#19120C" />
      <stop offset="60%" stop-color="#0D0907" />
      <stop offset="100%" stop-color="#050403" />
    </radialGradient>

    <linearGradient id="goldGradH" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#FDE68A" />
      <stop offset="30%" stop-color="#F59E0B" />
      <stop offset="70%" stop-color="#D97706" />
      <stop offset="100%" stop-color="#92400E" />
    </linearGradient>

    <linearGradient id="goldGradTextH" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="#FFFBEB" />
      <stop offset="30%" stop-color="#FBBF24" />
      <stop offset="70%" stop-color="#F59E0B" />
      <stop offset="100%" stop-color="#B45309" />
    </linearGradient>
  </defs>

  <rect width="1200" height="400" fill="url(#hBgGrad)" />

  <g transform="translate(190, 200) scale(3.2) translate(-50, -50)">
    <circle cx="50" cy="50" r="46" stroke="url(#goldGradH)" stroke-width="1.8" stroke-dasharray="3 2" opacity="0.4" />
    <circle cx="50" cy="50" r="42" stroke="url(#goldGradH)" stroke-width="2.2" />

    <path d="M50 24C40 32 36 44 40 56C42 60 46 64 50 66C50 56 46 44 48 36C49 32 50 26 50 24Z" fill="url(#goldGradH)" />
    <path d="M42 46C46 44 49 40 50 36" stroke="#0E0A07" stroke-width="1.6" stroke-linecap="round" />

    <path d="M50 34C58 34 66 42 66 52C66 62 58 70 50 70C54 62 54 42 50 34Z" fill="url(#goldGradH)" />
    <path d="M52 38C58 44 58 60 52 66" stroke="#0E0A07" stroke-width="1.8" stroke-linecap="round" />

    <path d="M47 18C47 18 45 20 47 22C49 24 51 22 51 22" stroke="url(#goldGradH)" stroke-width="1.8" stroke-linecap="round" opacity="0.85" />
    <path d="M53 15C53 15 55 17 53 19C51 21 53 23 53 23" stroke="url(#goldGradH)" stroke-width="1.8" stroke-linecap="round" opacity="0.85" />

    <circle cx="24" cy="50" r="2" fill="url(#goldGradH)" />
    <circle cx="76" cy="50" r="2" fill="url(#goldGradH)" />
    <path d="M43 80L50 76L57 80" stroke="url(#goldGradH)" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" opacity="0.9" />
  </g>

  <g transform="translate(390, 140)">
    <rect x="0" y="0" width="135" height="26" rx="6" fill="#F59E0B" fill-opacity="0.15" stroke="#F59E0B" stroke-opacity="0.4" />
    <text x="67" y="18" text-anchor="middle" class="h-badge">TEOCAFE.CL</text>

    <text x="0" y="95" class="h-title">TÉ O CAFÉ</text>

    <text x="5" y="145" class="h-tagline">CAFÉ DE ESPECIALIDAD &amp; TÉ DE CEILÁN</text>
    <text x="5" y="178" class="h-sub">TOSTADURÍA DE AUTOR • SANTIAGO, CHILE</text>
  </g>
</svg>`;

// 5. POST DE LANZAMIENTO PARA INSTAGRAM (1080x1080)
const postLaunchSvg = `<?xml version="1.0" encoding="UTF-8"?>
<svg width="1080" height="1080" viewBox="0 0 1080 1080" fill="none" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <style>
      @import url('https://fonts.googleapis.com/css2?family=Cinzel:wght@700;800;900&amp;family=Montserrat:wght@400;500;600;700;800&amp;display=swap');
      .p-tag {
        font-family: 'Montserrat', sans-serif;
        font-weight: 800;
        font-size: 15px;
        letter-spacing: 6px;
        fill: #F59E0B;
      }
      .p-title {
        font-family: 'Cinzel', 'Times New Roman', serif;
        font-weight: 800;
        letter-spacing: 6px;
        font-size: 54px;
        fill: #FFFFFF;
      }
      .p-title-gold {
        font-family: 'Cinzel', 'Times New Roman', serif;
        font-weight: 800;
        letter-spacing: 6px;
        font-size: 54px;
        fill: url(#pGoldText);
      }
      .p-item {
        font-family: 'Montserrat', sans-serif;
        font-weight: 500;
        font-size: 23px;
        fill: #E4E4E7;
      }
      .p-pill {
        font-family: 'Montserrat', sans-serif;
        font-weight: 800;
        font-size: 17px;
        letter-spacing: 3px;
        fill: #000000;
      }
      .p-url {
        font-family: 'Montserrat', monospace;
        font-weight: 800;
        font-size: 26px;
        letter-spacing: 5px;
        fill: #FBBF24;
      }
    </style>
    
    <radialGradient id="pBg" cx="50%" cy="30%" r="85%">
      <stop offset="0%" stop-color="#241810" />
      <stop offset="45%" stop-color="#120D09" />
      <stop offset="100%" stop-color="#050403" />
    </radialGradient>

    <linearGradient id="pGoldText" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="#FFFBEB" />
      <stop offset="40%" stop-color="#FBBF24" />
      <stop offset="100%" stop-color="#D97706" />
    </linearGradient>
  </defs>

  <rect width="1080" height="1080" fill="url(#pBg)" />

  <!-- Marco de orla fina dorada -->
  <rect x="36" y="36" width="1008" height="1008" stroke="#D97706" stroke-width="1.5" stroke-opacity="0.3" rx="16" />
  <rect x="48" y="48" width="984" height="984" stroke="#D97706" stroke-width="1" stroke-dasharray="8 6" stroke-opacity="0.2" rx="12" />

  <!-- Logo centrado superior -->
  <g transform="translate(540, 210) scale(2.6) translate(-50, -50)">
    <circle cx="50" cy="50" r="46" stroke="#F59E0B" stroke-width="1.8" stroke-dasharray="3 2" opacity="0.4" />
    <circle cx="50" cy="50" r="42" stroke="#F59E0B" stroke-width="2.2" />

    <path d="M50 24C40 32 36 44 40 56C42 60 46 64 50 66C50 56 46 44 48 36C49 32 50 26 50 24Z" fill="#F59E0B" />
    <path d="M42 46C46 44 49 40 50 36" stroke="#120D09" stroke-width="1.6" stroke-linecap="round" />

    <path d="M50 34C58 34 66 42 66 52C66 62 58 70 50 70C54 62 54 42 50 34Z" fill="#F59E0B" />
    <path d="M52 38C58 44 58 60 52 66" stroke="#120D09" stroke-width="1.8" stroke-linecap="round" />

    <path d="M47 18C47 18 45 20 47 22C49 24 51 22 51 22" stroke="#F59E0B" stroke-width="1.8" stroke-linecap="round" opacity="0.85" />
    <path d="M53 15C53 15 55 17 53 19C51 21 53 23 53 23" stroke="#F59E0B" stroke-width="1.8" stroke-linecap="round" opacity="0.85" />

    <circle cx="24" cy="50" r="2" fill="#F59E0B" />
    <circle cx="76" cy="50" r="2" fill="#F59E0B" />
    <path d="M43 80L50 76L57 80" stroke="#F59E0B" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" opacity="0.9" />
  </g>

  <!-- Tagline -->
  <text x="540" y="380" text-anchor="middle" class="p-tag">• BIENVENIDOS A LA TOSTADURÍA •</text>

  <!-- Título Oficial -->
  <text x="540" y="455" text-anchor="middle" class="p-title">DONDE EL GRANO Y LA HOJA</text>
  <text x="540" y="525" text-anchor="middle" class="p-title-gold">SE ENCUENTRAN</text>

  <!-- Puntos destacados con viñetas doradas elegantes -->
  <g transform="translate(240, 600)">
    <circle cx="-15" cy="-7" r="4" fill="#F59E0B" />
    <text x="10" y="0" class="p-item">Café de Especialidad con Tueste Semanal</text>
    
    <circle cx="-15" cy="45" r="4" fill="#F59E0B" />
    <text x="10" y="52" class="p-item">103 Variedades de Té Basilur de Ceilán</text>
    
    <circle cx="-15" cy="97" r="4" fill="#F59E0B" />
    <text x="10" y="104" class="p-item">Café Oficial Colo-Colo Centenario</text>
    
    <circle cx="-15" cy="149" r="4" fill="#F59E0B" />
    <text x="10" y="156" class="p-item">Despacho a todo Chile en 24-48 hrs</text>
  </g>

  <!-- Botón CTA -->
  <g transform="translate(540, 885)">
    <rect x="-240" y="-32" width="480" height="64" rx="32" fill="#F59E0B" />
    <text x="0" y="8" text-anchor="middle" class="p-pill">VISITA NUESTRA TIENDA ONLINE</text>
  </g>

  <text x="540" y="980" text-anchor="middle" class="p-url">TEOCAFE.CL</text>
</svg>`;

fs.writeFileSync(path.join(outDir, 'teocafe-instagram-avatar.svg'), instagramAvatarSvg);
fs.writeFileSync(path.join(outDir, 'teocafe-logo-transparent-gold.svg'), transparentGoldSvg);
fs.writeFileSync(path.join(outDir, 'teocafe-logo-transparent-white.svg'), transparentWhiteSvg);
fs.writeFileSync(path.join(outDir, 'teocafe-logo-horizontal.svg'), horizontalDarkSvg);
fs.writeFileSync(path.join(outDir, 'teocafe-instagram-post-lanzamiento.svg'), postLaunchSvg);

console.log('✅ Todos los SVGs fueron actualizados en assets/branding/');
