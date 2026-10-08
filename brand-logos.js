// Logos vectoriales de lujo para cada marca
const brandLogos = {
  "Té o Café": `
    <svg viewBox="0 0 100 100" class="w-full h-full text-current" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="50" cy="50" r="46" stroke="currentColor" stroke-width="1.8" stroke-dasharray="3 2" class="opacity-40" />
      <circle cx="50" cy="50" r="42" stroke="currentColor" stroke-width="2" />
      <!-- Hoja de té izquierda -->
      <path d="M50 24C40 32 36 44 40 56C42 60 46 64 50 66C50 56 46 44 48 36C49 32 50 26 50 24Z" fill="currentColor" class="opacity-90" />
      <path d="M42 46C46 44 49 40 50 36" stroke="var(--brand-bg, #fff)" stroke-width="1.2" stroke-linecap="round" />
      <!-- Grano de café derecho -->
      <path d="M50 34C58 34 66 42 66 52C66 62 58 70 50 70C54 62 54 42 50 34Z" fill="currentColor" />
      <path d="M52 38C58 44 58 60 52 66" stroke="var(--brand-bg, #fff)" stroke-width="1.5" stroke-linecap="round" />
      <!-- Gotas y acentos de vapor -->
      <path d="M47 18C47 18 45 20 47 22C49 24 51 22 51 22" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" class="opacity-70" />
      <path d="M53 15C53 15 55 17 53 19C51 21 53 23 53 23" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" class="opacity-70" />
      <!-- Estrellas / Sello -->
      <circle cx="24" cy="50" r="1.5" fill="currentColor" />
      <circle cx="76" cy="50" r="1.5" fill="currentColor" />
      <path d="M43 80L50 76L57 80" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="opacity-80" />
    </svg>
  `,
  "Café o Té": `
    <svg viewBox="0 0 100 100" class="w-full h-full text-current" fill="none" xmlns="http://www.w3.org/2000/svg">
      <!-- Escudo heráldico minimalista -->
      <path d="M50 12L80 24V48C80 68 50 86 50 86C50 86 20 68 20 48V24L50 12Z" stroke="currentColor" stroke-width="2" stroke-linejoin="round" />
      <path d="M50 17L75 27V48C75 64 50 79 50 79C50 79 25 64 25 48V27L50 17Z" stroke="currentColor" stroke-width="1" stroke-dasharray="2 2" class="opacity-50" />
      <!-- Taza con vapor en espiral y hoja -->
      <path d="M37 54H63C63 61 58 66 50 66C42 66 37 61 37 54Z" fill="currentColor" />
      <path d="M63 56H68C70 56 71 58 71 60C71 62 70 63 68 63H62" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" />
      <!-- Hoja botánica que brota de la taza -->
      <path d="M50 48C46 42 46 36 50 32C54 36 54 42 50 48Z" fill="currentColor" class="opacity-85" />
      <path d="M43 38C46 40 48 44 50 48" stroke="currentColor" stroke-width="1.2" stroke-linecap="round" />
      <!-- Línea base pedestal -->
      <path d="M34 71H66" stroke="currentColor" stroke-width="2" stroke-linecap="round" />
    </svg>
  `,
  "Mundo Té o Café": `
    <svg viewBox="0 0 100 100" class="w-full h-full text-current" fill="none" xmlns="http://www.w3.org/2000/svg">
      <!-- Globo terráqueo orgánico -->
      <circle cx="50" cy="50" r="42" stroke="currentColor" stroke-width="2" />
      <ellipse cx="50" cy="50" rx="42" ry="18" stroke="currentColor" stroke-width="1.5" stroke-dasharray="4 2" class="opacity-50" />
      <path d="M50 8V92" stroke="currentColor" stroke-width="1.5" stroke-dasharray="4 2" class="opacity-50" />
      <!-- Hoja y grano en el ecuador -->
      <g transform="translate(26, 32) scale(0.48)">
        <path d="M50 10C35 24 30 45 36 65C40 72 46 78 52 82C52 66 46 48 50 36C52 30 52 20 50 10Z" fill="currentColor" />
        <path d="M50 25C65 25 80 40 80 58C80 75 65 90 50 90C58 75 58 40 50 25Z" fill="currentColor" class="opacity-90" />
        <path d="M53 32C64 42 64 72 53 82" stroke="var(--brand-bg, #fff)" stroke-width="3" stroke-linecap="round" />
      </g>
      <!-- Corona circular de estrellas de origen -->
      <circle cx="16" cy="35" r="1.5" fill="currentColor" />
      <circle cx="84" cy="35" r="1.5" fill="currentColor" />
      <circle cx="16" cy="65" r="1.5" fill="currentColor" />
      <circle cx="84" cy="65" r="1.5" fill="currentColor" />
    </svg>
  `,
  "TeoCafé": `
    <svg viewBox="0 0 100 100" class="w-full h-full text-current" fill="none" xmlns="http://www.w3.org/2000/svg">
      <!-- Hexágono geométrico moderno -->
      <polygon points="50,10 88,30 88,70 50,90 12,70 12,30" stroke="currentColor" stroke-width="2" stroke-linejoin="round" />
      <polygon points="50,16 82,33 82,67 50,84 18,67 18,33" stroke="currentColor" stroke-width="1" class="opacity-30" />
      <!-- Monograma TC moderno entrelazado -->
      <text x="34" y="58" font-family="'Cinzel', serif" font-size="28" font-weight="bold" fill="currentColor">T</text>
      <text x="50" y="65" font-family="'Playfair Display', serif" font-size="32" font-style="italic" font-weight="bold" fill="currentColor" class="opacity-90">C</text>
      <!-- Hoja botánica que corona la T -->
      <path d="M37 32C42 26 48 26 50 30C48 36 42 36 37 32Z" fill="currentColor" />
      <!-- Pequeño grano al pie -->
      <circle cx="50" cy="76" r="2" fill="currentColor" />
    </svg>
  `
};
