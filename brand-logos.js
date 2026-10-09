// Logos vectoriales de lujo para cada marca
const brandLogos = {
  "Té o Café": `
    <svg viewBox="0 0 100 100" class="w-full h-full text-current" fill="none" xmlns="http://www.w3.org/2000/svg">
      <!-- Aro exterior de la 'O' -->
      <circle cx="50" cy="50" r="45" stroke="currentColor" stroke-width="2.2" />
      <circle cx="50" cy="50" r="41" stroke="currentColor" stroke-width="0.8" opacity="0.4" stroke-dasharray="2 1" />
      
      <!-- Lado Izquierdo: Hoja Botánica de Té estilizada -->
      <path d="M 50 14 C 26 22 18 42 18 54 C 18 72 32 84 50 86 C 38 76 34 60 36 46 C 38 34 45 22 50 14 Z" fill="currentColor" opacity="0.9" />
      <!-- Nervaduras de la hoja de té -->
      <path d="M 50 18 Q 36 46 50 82" stroke="var(--brand-bg, #080605)" stroke-width="1.2" stroke-linecap="round" fill="none" />
      <path d="M 45 32 Q 37 35 29 34" stroke="var(--brand-bg, #080605)" stroke-width="0.9" stroke-linecap="round" fill="none" />
      <path d="M 42 46 Q 33 48 25 46" stroke="var(--brand-bg, #080605)" stroke-width="0.9" stroke-linecap="round" fill="none" />
      <path d="M 44 60 Q 35 63 28 61" stroke="var(--brand-bg, #080605)" stroke-width="0.9" stroke-linecap="round" fill="none" />

      <!-- Lado Derecho: Grano de Café Arábica de Precisión -->
      <path d="M 50 14 C 72 20 85 36 85 55 C 85 74 70 85 50 86 C 58 78 64 66 64 52 C 64 38 57 24 50 14 Z" fill="currentColor" />
      <!-- Fisura sinuosa del grano de café -->
      <path d="M 50 16 C 59 30 60 42 56 52 C 52 62 57 74 50 84" stroke="var(--brand-bg, #080605)" stroke-width="1.4" stroke-linecap="round" fill="none" />
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
