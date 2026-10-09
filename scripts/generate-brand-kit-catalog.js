const fs = require('fs');
const path = require('path');

const variantsData = [
  // FAMILIA 1: DUALIDAD THE GOLDEN "O"
  {
    id: 6,
    family: "dualidad",
    familyName: "Dualidad The Golden O",
    badge: "⭐ Logotipo Oficial",
    badgeClass: "bg-amber-500 text-black",
    name: "The Golden 'O' (Balance Clásico)",
    subtitle: "Dualidad Té & Café en Ratio Áureo",
    png: "assets/branding/variant-6-golden-o.png",
    svg: "assets/branding/variant-6-golden-o.svg",
    justification: "El puente definitivo entre dos mundos: la 'O' dorada equilibra en perfecta simetría la hoja de té de Ceilán con nervaduras grabadas y el grano arábica con su fisura característica.",
    symbolism: "Círculo armónico, proporción áurea y complementariedad sin rival. Máxima legibilidad a cualquier escala.",
    audience: "Público general, amantes del té y café, y avatar insuperable para Instagram móvil.",
    bestFor: "Avatar de Instagram, favicon, empaque oficial y navbar de la tienda."
  },
  {
    id: 16,
    family: "dualidad",
    familyName: "Dualidad The Golden O",
    badge: "Minimal Hairline",
    badgeClass: "bg-zinc-800 text-amber-300 border border-amber-500/40",
    name: "The Golden 'O' Hairline",
    subtitle: "Línea Fina de Precisión Arquitectónica",
    png: "assets/branding/variant-16-hairline-precision.png",
    svg: "assets/branding/variant-16-hairline-precision.svg",
    justification: "Despoja el concepto a su esencia más pura mediante trazos ultrafinos dorados de 1.5px y tipografía con kerning extremo de 22px.",
    symbolism: "Ingeniería de precisión, ligereza, elegancia silenciosa (Quiet Luxury) y agrimensura botánica.",
    audience: "Arquitectos, diseñadores, minimalistas y público exigente de alta costura.",
    bestFor: "Papelería corporativa, tarjetas de presentación en papel de algodón y membretes."
  },
  {
    id: 17,
    family: "dualidad",
    familyName: "Dualidad The Golden O",
    badge: "Eclipse Noir",
    badgeClass: "bg-zinc-800 text-amber-300 border border-amber-500/40",
    name: "The Golden 'O' Eclipse",
    subtitle: "Sombra & Luz en Contraste Noir",
    png: "assets/branding/variant-17-eclipse-contrast.png",
    svg: "assets/branding/variant-17-eclipse-contrast.svg",
    justification: "Juego dramático de luz donde el café tostado oscuro actúa como la sombra del eclipse, mientras la hoja dorada de té irradia la corona de luz.",
    symbolism: "Dualidad luz/oscuridad, el amanecer del día con té y la profundidad nocturna con café espresso.",
    audience: "Fotógrafos, amantes del tueste oscuro intenso y estética noir.",
    bestFor: "Bolsas de café Dark Roast, reels nocturnos de Instagram y packaging negro mate."
  },
  {
    id: 18,
    family: "dualidad",
    familyName: "Dualidad The Golden O",
    badge: "Geometría Sagrada",
    badgeClass: "bg-zinc-800 text-amber-300 border border-amber-500/40",
    name: "The Golden 'O' Geometría Sagrada",
    subtitle: "Proporción Fibonacci & Arcos Áureos",
    png: "assets/branding/variant-18-geometria-sagrada.png",
    svg: "assets/branding/variant-18-geometria-sagrada.svg",
    justification: "Revela la matemática oculta del logotipo: círculos concéntricos basados en la secuencia de Fibonacci (1, 1, 2, 3, 5, 8, 13) que guían cada curva.",
    symbolism: "Armonía universal de la naturaleza botánica, perfección de las espirales florales y proporciones clásicas.",
    audience: "Entusiastas del diseño matemático, aficionados a la ciencia y la botánica de precisión.",
    bestFor: "Manual de normas gráficas, infografías educativas y cápsulas de ValerIA."
  },
  {
    id: 19,
    family: "dualidad",
    familyName: "Dualidad The Golden O",
    badge: "Sólido & Compacto",
    badgeClass: "bg-zinc-800 text-amber-300 border border-amber-500/40",
    name: "The Golden 'O' Solid Badge",
    subtitle: "Núcleo Grueso para Micro-Escala",
    png: "assets/branding/variant-19-solid-badge.png",
    svg: "assets/branding/variant-19-solid-badge.svg",
    justification: "Diseñado para resistir reducciones extremas de tamaño (16x16 px) sin perder legibilidad, mediante masa sólida de oro pulido y líneas contrastadas.",
    symbolism: "Fuerza, presencia de marca inconfundible y contundencia visual.",
    audience: "Consumo masivo, aplicaciones móviles y señalética física.",
    bestFor: "Favicon web, bordados en delantales de barista, pines metálicos y sellos de cera."
  },

  // FAMILIA 2: RITUALES, TIEMPOS & EXTRACCIÓN
  {
    id: 11,
    family: "rituales",
    familyName: "Rituales & Extracción",
    badge: "Curaduría",
    badgeClass: "bg-amber-950/80 text-amber-300 border border-amber-600/50",
    name: "La Balanza del Barista",
    subtitle: "El Arte del Ratio y la Precisión",
    png: "assets/branding/variant-11-balanza-barista.png",
    svg: "assets/branding/variant-11-balanza-barista.svg",
    justification: "En Té o Café nada se improvisa: cada gramo de té de Ceilán y cada ratio de extracción de café se pesa con rigor y devoción técnica.",
    symbolism: "Platillo izquierdo con hoja noble, platillo derecho con grano tostado, coronados por la estrella polar de calidad.",
    audience: "Baristas, sommeliers y clientes que buscan métodos de infusión calibrados.",
    bestFor: "Menús de cafetería de especialidad, certificados de catación y recetas oficiales."
  },
  {
    id: 12,
    family: "rituales",
    familyName: "Rituales & Extracción",
    badge: "Slow Living",
    badgeClass: "bg-amber-950/80 text-amber-300 border border-amber-600/50",
    name: "El Reloj de Arena",
    subtitle: "El Tiempo Perfecto de Extracción",
    png: "assets/branding/variant-12-reloj-arena.png",
    svg: "assets/branding/variant-12-reloj-arena.svg",
    justification: "El tiempo es el ingrediente invisible: los 4 minutos exactos de infusión del té Basilur y los 28 segundos de extracción del espresso perfecto.",
    symbolism: "Cámara superior goteando café y cámara inferior floreciendo en hojas doradas de té.",
    audience: "Clientes hedonistas que disfrutan desconectar y valorar la pausa consciente.",
    bestFor: "Guías de preparación, temporizadores web y campañas de bienestar."
  },
  {
    id: 14,
    family: "rituales",
    familyName: "Rituales & Extracción",
    badge: "Diseño Atelier",
    badgeClass: "bg-amber-950/80 text-amber-300 border border-amber-600/50",
    name: "El Atelier de Cristal",
    subtitle: "Prensa Francesa & Tetera Cuello de Cisne",
    png: "assets/branding/variant-14-atelier-cristal.png",
    svg: "assets/branding/variant-14-atelier-cristal.svg",
    justification: "Fusiona en una síntesis lineal continua la silueta icónica de una prensa francesa de émbolo con el cuello elegante de una tetera inglesa.",
    symbolism: "Cristalería de laboratorio, métodos manuales y utensilios de preparación de origen.",
    audience: "Compradores de cafeteras, prensas francesas, teteras de vidrio y accesorios.",
    bestFor: "Sección de Accesorios & Cafeteras, catálogos de equipamiento y manuales de uso."
  },
  {
    id: 20,
    family: "rituales",
    familyName: "Rituales & Extracción",
    badge: "Pour-Over V60",
    badgeClass: "bg-amber-950/80 text-amber-300 border border-amber-600/50",
    name: "El Gotero V60 & Filtro de Porcelana",
    subtitle: "Filtrado Manual de Especialidad",
    png: "assets/branding/variant-20-v60-pourover.png",
    svg: "assets/branding/variant-20-v60-pourover.svg",
    justification: "El cono estriado en ángulo de 60 grados es el icono universal del café de especialidad de tercera ola, con nervaduras que liberan notas florales.",
    symbolism: "Extracción lenta gota a gota, pureza en taza y notas de cata limpias.",
    audience: "Brewers profesionales, amantes del café filtrado y fanáticos de Hario/Kalita.",
    bestFor: "Etiquetas de orígenes africanos y cafés geisha de notas florales."
  },
  {
    id: 21,
    family: "rituales",
    familyName: "Rituales & Extracción",
    badge: "Alquimia Elemental",
    badgeClass: "bg-amber-950/80 text-amber-300 border border-amber-600/50",
    name: "El Fuego & El Agua Pura",
    subtitle: "Los Dos Elementos Alquímicos",
    png: "assets/branding/variant-21-fuego-y-agua.png",
    svg: "assets/branding/variant-21-fuego-y-agua.svg",
    justification: "Une el fuego del tambor tostador que transforma el grano verde en oro negro, con el agua pura a 90°C que extrae la esencia de la hoja de té.",
    symbolism: "Complementariedad física: el calor que dora y el líquido que disuelve.",
    audience: "Tostadores artesanales y apasionados de la ciencia de la extracción.",
    bestFor: "Bolsas de tueste fresco semanal y cajas de colección mixtas de té + café."
  },

  // FAMILIA 3: TERROIR, ORIGEN & BOTÁNICA
  {
    id: 15,
    family: "origen",
    familyName: "Terroir & Botánica",
    badge: "Single Origin",
    badgeClass: "bg-emerald-950/80 text-emerald-300 border border-emerald-600/50",
    name: "El Terroir Topográfico",
    subtitle: "Fincas de Altura a 1.850 m.s.n.m.",
    png: "assets/branding/variant-15-terroir-topografico.png",
    svg: "assets/branding/variant-15-terroir-topografico.svg",
    justification: "El café de especialidad y el té noble de Ceilán solo desarrollan notas complejas gracias a la altitud montañosa y el suelo volcánico fértil.",
    symbolism: "Isolíneas topográficas geográficas con la cumbre coronada por el brote y el grano.",
    audience: "Connoisseurs de microlotes de origen único, trazabilidad y comercio justo.",
    bestFor: "Fichas técnicas de origen, mapas de cultivo y etiquetas de microlotes."
  },
  {
    id: 22,
    family: "origen",
    familyName: "Terroir & Botánica",
    badge: "Amanecer de Origen",
    badgeClass: "bg-emerald-950/80 text-emerald-300 border border-emerald-600/50",
    name: "El Solsticio de Origen",
    subtitle: "Amanecer en las Montañas de Ceilán & Andes",
    png: "assets/branding/variant-22-solsticio-origen.png",
    svg: "assets/branding/variant-22-solsticio-origen.svg",
    justification: "Captura el momento exacto en que la neblina matinal se disipa en las terrazas de Nuwara Eliya (Sri Lanka) y los Andes colombianos.",
    symbolism: "Sol naciente de energía, cordilleras de cultivo y recolección manual de las primeras horas.",
    audience: "Consumidores mañaneros que buscan vitalidad, frescura y café del día.",
    bestFor: "Líneas de desayuno (Breakfast Blends), tés verdes y cafés ligeros matutinos."
  },
  {
    id: 23,
    family: "origen",
    familyName: "Terroir & Botánica",
    badge: "Grabado Clásico",
    badgeClass: "bg-emerald-950/80 text-emerald-300 border border-emerald-600/50",
    name: "El Grabado Botánico Francés",
    subtitle: "Herbolario Antiguo del Siglo XVIII",
    png: "assets/branding/variant-23-grabado-botanico.png",
    svg: "assets/branding/variant-23-grabado-botanico.svg",
    justification: "Inspirado en las láminas botánicas científicas de Linneo y grabadores franceses. Muestra las especies Camellia Sinensis y Coffea Arabica entrelazadas.",
    symbolism: "Estudio botánico, pureza fitosanitaria y elegancia renacentista.",
    audience: "Historiadores, herbolarios, amantes de las infusiones puras y té a granel.",
    bestFor: "Cajas metálicas de lata vintage Basilur, libros de té y packs de regalo gourmet."
  },
  {
    id: 10,
    family: "origen",
    familyName: "Terroir & Botánica",
    badge: "Wabi-Sabi",
    badgeClass: "bg-emerald-950/80 text-emerald-300 border border-emerald-600/50",
    name: "Zen Ensō de Autor",
    subtitle: "Pincelada Orgánica & El Ritual del Buen Vivir",
    png: "assets/branding/variant-10-zen-artisan.png",
    svg: "assets/branding/variant-10-zen-artisan.svg",
    justification: "El círculo Ensō japonés abierto en pan de oro simboliza el vacío fértil, la belleza en la imperfección (wabi-sabi) y el espíritu libre del ritual.",
    symbolism: "Calma mental, serenidad y fluidez orgánica entre cuerpo y mente.",
    audience: "Practicantes de yoga, mindfulness, bebedores de té matcha y café de sombra.",
    bestFor: "Té verde, matcha ceremonial, infusiones herbales y campañas de relajación."
  },
  {
    id: 3,
    family: "origen",
    familyName: "Terroir & Botánica",
    badge: "Yin-Yang Botánico",
    badgeClass: "bg-emerald-950/80 text-emerald-300 border border-emerald-600/50",
    name: "Alquimia Botánica",
    subtitle: "Vórtice Orgánico de Hoja de Té & Grano Tostado",
    png: "assets/branding/variant-3-alquimia-botanica.png",
    svg: "assets/branding/variant-3-alquimia-botanica.svg",
    justification: "Vórtice armónico donde una rama botánica de té de Ceilán con nervaduras finas abraza la silueta curva de un grano Arábica en perfecta simbiosis.",
    symbolism: "Naturaleza viva, equilibrio ecológico y agricultura sustentable.",
    audience: "Amantes de productos orgánicos, certificados Fair Trade y de comercio justo.",
    bestFor: "Campañas de sustentabilidad, reels explicativos de origen y bolsas ecológicas."
  },

  // FAMILIA 4: VANGUARDIA, TIPOGRAFÍA & MONOGRAMAS
  {
    id: 7,
    family: "tipografia",
    familyName: "Tipografía & Monogramas",
    badge: "Haute Couture",
    badgeClass: "bg-amber-500 text-black",
    name: "Editorial Didot (Quiet Luxury)",
    subtitle: "Maison de Café & Té de Alta Costura",
    png: "assets/branding/variant-7-editorial-didot.png",
    svg: "assets/branding/variant-7-editorial-didot.svg",
    justification: "Máxima sofisticación editorial inspirada en Vogue, Cartier y Bacha Coffee. Tipografía Playfair Display con serifas afiladas de contraste extremo y marco hairline.",
    symbolism: "Alta sociedad, elegancia discreta y estética parisina.",
    audience: "Compradores de lujo, eventos corporativos VIP y regalos de alta gama.",
    bestFor: "Packaging de lujo, etiquetas en relieve dorado, bolsas de satén y membresías VIP."
  },
  {
    id: 8,
    family: "tipografia",
    familyName: "Tipografía & Monogramas",
    badge: "Kioto Modern",
    badgeClass: "bg-zinc-800 text-amber-300 border border-amber-500/40",
    name: "Minimalismo Geométrico (% Style)",
    subtitle: "Vanguardia Monolítica Japonesa",
    png: "assets/branding/variant-8-minimal-geometric.png",
    svg: "assets/branding/variant-8-minimal-geometric.svg",
    justification: "Inspirado en la escuela de diseño de Kioto y cafeterías de vanguardia (% Arabica, Muji). Fusión de barras monolíticas T y C con una hoja áurea y grano elíptico.",
    symbolism: "Racionalismo, modernidad absoluta y estética urbana.",
    audience: "Jóvenes profesionales, baristas modernos, nómadas digitales y arquitectos.",
    bestFor: "Vasos de café para llevar (takeaway), señalética exterior y merchandising urbano."
  },
  {
    id: 13,
    family: "tipografia",
    familyName: "Tipografía & Monogramas",
    badge: "Lazo Infinito 3D",
    badgeClass: "bg-zinc-800 text-amber-300 border border-amber-500/40",
    name: "Cinta de Möbius Escultural",
    subtitle: "Monograma 3D de Oro Pulido",
    png: "assets/branding/variant-13-cinta-mobius.png",
    svg: "assets/branding/variant-13-cinta-mobius.svg",
    justification: "Una cinta tridimensional que se dobla en el espacio dibujando la T y la C en una curva sin fin. Acabado metálico satinado con reflejos envolventes.",
    symbolism: "Evolución continua, dinamismo y lujo atemporal sin aristas.",
    audience: "Mercado corporativo prémium y compradores de suscripciones gourmet.",
    bestFor: "Cajas de suscripción mensual, tarjetas de membresía y sellos magnéticos."
  },
  {
    id: 24,
    family: "tipografia",
    familyName: "Tipografía & Monogramas",
    badge: "Swiss Roaster",
    badgeClass: "bg-zinc-800 text-amber-300 border border-amber-500/40",
    name: "Escudo Hexagonal Suizo",
    subtitle: "Swiss Precision Roasting Est. 2026",
    png: "assets/branding/variant-24-escudo-suizo.png",
    svg: "assets/branding/variant-24-escudo-suizo.svg",
    justification: "Hexágono geométrico de proporción matemática con cruz interior estilizada y tipografía Montserrat Bold de corte suizo contemporáneo.",
    symbolism: "Calidad certificada, precisión técnica y exactitud en el tueste.",
    audience: "Consumidores técnicos que valoran la consistencia y perfiles de tueste estables.",
    bestFor: "Sacos de café verde, etiquetas de tostaduría técnica y certificados de lote."
  },
  {
    id: 2,
    family: "tipografia",
    familyName: "Tipografía & Monogramas",
    badge: "Clásico Imperial",
    badgeClass: "bg-zinc-800 text-amber-300 border border-amber-500/40",
    name: "Monograma TC de Lujo",
    subtitle: "Iniciales Romanas con Anillo Estelar",
    png: "assets/branding/variant-2-monograma-tc.png",
    svg: "assets/branding/variant-2-monograma-tc.svg",
    justification: "Las iniciales T y C se entrelazan con serifas clásicas de corte imperial, enmarcadas en una constelación de 12 estrellas facetadas doradas.",
    symbolism: "Linaje comercial, unión fraterna de té y café y distinción sobria.",
    audience: "Clientes tradicionales que valoran monogramas de corte inglés o francés.",
    bestFor: "Bordados en delantales, sellos en seco en papel y vajilla grabada."
  },

  // FAMILIA 5: HERITAGE, SELLOS & BLASONES CLÁSICOS
  {
    id: 1,
    family: "heritage",
    familyName: "Heritage & Blasones",
    badge: "Heritage",
    badgeClass: "bg-zinc-800 text-amber-300 border border-amber-500/40",
    name: "El Sello de Autor (Imperial)",
    subtitle: "Medalla Circular de Tostaduría Europea",
    png: "assets/branding/variant-1-sello-imperial.png",
    svg: "assets/branding/variant-1-sello-imperial.svg",
    justification: "Inspirado en las medallas de los gremios de té británico y tostadurías de Viena del siglo XIX. Doble orla concéntrica, estrellas de calidad y simetría total.",
    symbolism: "Tradición inquebrantable, garantía de origen y prestigio histórico.",
    audience: "Consumidores conservadores que buscan solidez y confianza garantizada.",
    bestFor: "Sellos de lacre para cajas de regalo, etiquetas de té clásico y timbres de garantía."
  },
  {
    id: 4,
    family: "heritage",
    familyName: "Heritage & Blasones",
    badge: "Sommelier",
    badgeClass: "bg-zinc-800 text-amber-300 border border-amber-500/40",
    name: "Taza de Cata & Hoja Naciente",
    subtitle: "Servicio de Salón & Sommelier",
    png: "assets/branding/variant-4-taza-artesanal.png",
    svg: "assets/branding/variant-4-taza-artesanal.svg",
    justification: "Silueta minimalista de una taza de cata de porcelana profesional cuyo vapor ascendente se transforma con delicadeza en una hoja de té con una gota dorada.",
    symbolism: "Hospitalidad, aroma envolvente, servicio en mesa y calidez humana.",
    audience: "Clientes de salón de té, cafeterías con atención a la mesa y catas guiadas.",
    bestFor: "Menú de cafetería, servilletas impresas, cartas de té y uniformes de personal."
  },
  {
    id: 5,
    family: "heritage",
    familyName: "Heritage & Blasones",
    badge: "Blasón",
    badgeClass: "bg-zinc-800 text-amber-300 border border-amber-500/40",
    name: "Blasón Tostaduría 2026",
    subtitle: "Escudo Cuartelado Heráldico",
    png: "assets/branding/variant-5-escudo-tostaduria.png",
    svg: "assets/branding/variant-5-escudo-tostaduria.svg",
    justification: "Escudo cuartelado europeo tradicional: Q1 (hoja de té), Q2 (grano tostado), Q3 (año 2026), Q4 (estrella polar de origen), coronado con la cinta de la tostaduría.",
    symbolism: "Escudo de armas gremial, maestría tostadora y linaje de importación.",
    audience: "Coleccionistas de café, cajas de madera rústica y latas conmemorativas.",
    bestFor: "Ediciones de aniversario, café Centenario Colo-Colo y cajas de madera noble."
  },
  {
    id: 9,
    family: "heritage",
    familyName: "Heritage & Blasones",
    badge: "Third Wave",
    badgeClass: "bg-zinc-800 text-amber-300 border border-amber-500/40",
    name: "Nordic Specialty (Octágono)",
    subtitle: "Roastery & Tea Atelier",
    png: "assets/branding/variant-9-nordic-craft.png",
    svg: "assets/branding/variant-9-nordic-craft.svg",
    justification: "Estilo tostaduría nórdica de tercera ola (Nomad, The Barn, Tim Wendelboe). Escudo octogonal facetado con vista cenital de taza de cata e infusión botánica.",
    symbolism: "Transparencia de procesos, perfilado de tueste y pureza nórdica.",
    audience: "Coffee geeks, baristas independientes y aficionados al tostado claro nórdico.",
    bestFor: "Bolsas de café con fuelle y válvula, tarjetas de perfil sensorial y pósters."
  }
];

// Generar el HTML maestro completo
const htmlContent = `<!DOCTYPE html>
<html lang="es" class="scroll-smooth">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Brand Kit Maestro Oficial — 24 Variantes de Logotipo para Té o Café (teocafe.cl)</title>
  <meta name="description" content="Manual de Identidad Visual y 24 Variantes de Logotipo Profesionales con justificación conceptual completa para teocafe.cl.">
  <link rel="icon" type="image/svg+xml" href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='.9em' font-size='90'>☕</text></svg>">

  <!-- Tailwind CSS CDN -->
  <script src="https://cdn.tailwindcss.com"></script>
  <!-- Google Fonts -->
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Cinzel:wght@600;700;800;900&family=Montserrat:wght@300;400;500;600;700;800;900&family=Playfair+Display:ital,wght@0,500;0,600;0,700;1,500;1,600&display=swap" rel="stylesheet">
  <!-- Lucide Icons CDN -->
  <script src="https://unpkg.com/lucide@latest"></script>

  <script>
    tailwind.config = {
      darkMode: 'class',
      theme: {
        extend: {
          colors: {
            brand: {
              gold: '#F59E0B',
              'gold-light': '#FDE68A',
              'gold-dark': '#B45309',
              dark: '#080605',
              card: '#120E0B',
              border: '#2A1F18',
            }
          },
          fontFamily: {
            headline: ['Cinzel', 'serif'],
            editorial: ['"Playfair Display"', 'serif'],
            sans: ['Montserrat', 'sans-serif'],
          }
        }
      }
    }
  </script>

  <style>
    /* Efecto de máscara de avatar circular de Instagram */
    .instagram-circle-mask {
      border-radius: 50% !important;
      box-shadow: 0 0 0 4px #F59E0B, 0 10px 30px rgba(0,0,0,0.8);
    }
  </style>
</head>
<body class="bg-[#050403] text-zinc-100 font-sans min-h-screen flex flex-col selection:bg-amber-500 selection:text-black">

  <!-- Header Fijo de Marca -->
  <header class="sticky top-0 z-50 bg-[#080605]/95 backdrop-blur-md border-b border-amber-900/40 px-4 sm:px-6 py-4">
    <div class="max-w-7xl mx-auto flex items-center justify-between">
      <div class="flex items-center gap-3">
        <div class="w-10 h-10 rounded-full border border-amber-500/60 bg-amber-950/40 flex items-center justify-center text-amber-400 font-headline font-bold text-lg shadow-inner">
          TC
        </div>
        <div>
          <span class="font-headline tracking-widest text-lg font-bold text-white block leading-tight">
            TÉ O CAFÉ
          </span>
          <span class="text-[10px] tracking-widest text-amber-400 uppercase font-medium">
            Brand Kit Maestro • 24 Variantes Profesionales
          </span>
        </div>
      </div>
      <div class="flex items-center gap-3">
        <a href="index.html" class="text-xs text-zinc-400 hover:text-white transition flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-white/5 border border-white/10 hover:border-amber-500/40">
          <i data-lucide="arrow-left" class="w-4 h-4 text-amber-400"></i> Volver a la Tienda
        </a>
      </div>
    </div>
  </header>

  <!-- Hero Section -->
  <section class="py-12 sm:py-16 px-4 sm:px-6 max-w-7xl mx-auto w-full text-center">
    <span class="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-500/20 text-amber-300 border border-amber-500/40 text-xs font-bold uppercase tracking-widest mb-4">
      👑 SISTEMA INTEGRAL DE IDENTIDAD VISUAL • TEOCAFE.CL
    </span>
    <h1 class="font-headline text-3xl sm:text-5xl font-bold text-white mb-4">
      Suite Maestra: <span class="text-amber-400">24 Variantes de Logotipo</span>
    </h1>
    <p class="max-w-3xl mx-auto text-sm sm:text-base text-zinc-300 font-light leading-relaxed mb-8">
      Organizadas sistemáticamente en <strong>5 familias conceptuales</strong> bajo la paleta de lujo <strong>Noir &amp; Gold</strong>. Cada opción incluye su justificación de diseño, simbología y público objetivo para dotar a <strong>@teocafe.cl</strong> y a <strong>ValerIA</strong> de una identidad visual inagotable y coherente.
    </p>
    
    <!-- Filtros de Categorías & Controles Interactivos -->
    <div class="max-w-5xl mx-auto space-y-4">
      
      <!-- Buscador y Switch de Vista Instagram -->
      <div class="flex flex-col sm:flex-row items-center justify-between gap-4 bg-brand-card p-3 rounded-2xl border border-amber-900/40">
        <div class="relative w-full sm:w-80">
          <i data-lucide="search" class="w-4 h-4 text-amber-400 absolute left-3.5 top-3"></i>
          <input type="text" id="variant-search" oninput="filterVariants()" placeholder="Filtrar por nombre, concepto, público..." class="w-full bg-black/60 border border-brand-border rounded-xl pl-10 pr-4 py-2 text-xs text-white outline-none focus:border-amber-500 transition">
        </div>

        <div class="flex items-center gap-3 w-full sm:w-auto justify-end">
          <button id="toggle-circle-btn" onclick="toggleCircleMask()" class="flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold transition bg-white/5 hover:bg-amber-500/20 text-amber-300 border border-amber-500/30">
            <i data-lucide="circle" class="w-4 h-4"></i>
            <span id="circle-btn-text">Simular Recorte Instagram (Círculo)</span>
          </button>
        </div>
      </div>

      <!-- Botones de Familia -->
      <div class="flex flex-wrap items-center justify-center gap-2 pt-2">
        <button onclick="setFilter('all')" data-family-btn="all" class="family-tab-btn px-4 py-2 rounded-xl text-xs font-bold transition bg-amber-500 text-black shadow-md">
          Todas las Variantes (24)
        </button>
        <button onclick="setFilter('dualidad')" data-family-btn="dualidad" class="family-tab-btn px-4 py-2 rounded-xl text-xs font-bold transition bg-white/5 hover:bg-white/10 text-zinc-300 border border-white/10">
          1. The Golden "O" (5)
        </button>
        <button onclick="setFilter('rituales')" data-family-btn="rituales" class="family-tab-btn px-4 py-2 rounded-xl text-xs font-bold transition bg-white/5 hover:bg-white/10 text-zinc-300 border border-white/10">
          2. Rituales &amp; Extracción (5)
        </button>
        <button onclick="setFilter('origen')" data-family-btn="origen" class="family-tab-btn px-4 py-2 rounded-xl text-xs font-bold transition bg-white/5 hover:bg-white/10 text-zinc-300 border border-white/10">
          3. Terroir &amp; Botánica (5)
        </button>
        <button onclick="setFilter('tipografia')" data-family-btn="tipografia" class="family-tab-btn px-4 py-2 rounded-xl text-xs font-bold transition bg-white/5 hover:bg-white/10 text-zinc-300 border border-white/10">
          4. Tipografía &amp; Monogramas (5)
        </button>
        <button onclick="setFilter('heritage')" data-family-btn="heritage" class="family-tab-btn px-4 py-2 rounded-xl text-xs font-bold transition bg-white/5 hover:bg-white/10 text-zinc-300 border border-white/10">
          5. Heritage &amp; Sellos (4)
        </button>
      </div>

    </div>
  </section>

  <!-- GRID MAESTRO DE 24 VARIANTES -->
  <main class="max-w-7xl mx-auto px-4 sm:px-6 pb-20 w-full space-y-12">

    <div id="variants-grid" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      <!-- Se inyecta dinámicamente con JavaScript desde el array de 24 variantes -->
    </div>

    <!-- SECCIÓN DE DESCARGA RÁPIDA DE ASSETS OFICIALES (VALERIA & INSTAGRAM) -->
    <div class="bg-gradient-to-br from-[#1C140E] to-[#0A0705] rounded-3xl border-2 border-amber-500/40 p-8 shadow-2xl mt-16">
      <div class="max-w-3xl mb-8">
        <span class="px-3 py-1 rounded-full bg-amber-500/20 text-amber-300 border border-amber-500/40 text-[10px] font-bold uppercase tracking-wider inline-block mb-3">
          🚀 Kit de Redes Sociales para ValerIA
        </span>
        <h3 class="font-headline text-2xl sm:text-3xl font-bold text-white mb-2">Recursos Maestros Listos para Descargar</h3>
        <p class="text-xs sm:text-sm text-zinc-300 font-light leading-relaxed">
          Archivos oficiales listos para publicar en Instagram @teocafe.cl y estampar como marca de agua transparente sobre fotos de café en grano, té Basilur y accesorios.
        </p>
      </div>

      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        
        <div class="bg-black/60 rounded-xl p-4 border border-amber-900/40 flex flex-col justify-between">
          <div>
            <div class="w-8 h-8 rounded-lg bg-amber-500/20 flex items-center justify-center text-amber-400 mb-2">
              <i data-lucide="user-circle-2" class="w-4 h-4"></i>
            </div>
            <h4 class="text-xs font-bold text-white">Avatar Instagram (The Golden O)</h4>
            <p class="text-[10px] text-zinc-400 mt-1">1080x1080 px listo para perfil.</p>
          </div>
          <a href="assets/branding/teocafe-avatar-instagram.png" download class="mt-3 bg-amber-500 hover:bg-amber-400 text-black py-2 px-3 rounded-lg text-[11px] font-bold text-center block transition">
            Descargar PNG
          </a>
        </div>

        <div class="bg-black/60 rounded-xl p-4 border border-amber-900/40 flex flex-col justify-between">
          <div>
            <div class="w-8 h-8 rounded-lg bg-amber-500/20 flex items-center justify-center text-amber-400 mb-2">
              <i data-lucide="droplet" class="w-4 h-4"></i>
            </div>
            <h4 class="text-xs font-bold text-white">Watermark Oro Transparente</h4>
            <p class="text-[10px] text-zinc-400 mt-1">Para estampar sobre fotos oscuras.</p>
          </div>
          <a href="assets/branding/teocafe-watermark-gold.png" download class="mt-3 bg-amber-500 hover:bg-amber-400 text-black py-2 px-3 rounded-lg text-[11px] font-bold text-center block transition">
            Descargar PNG
          </a>
        </div>

        <div class="bg-black/60 rounded-xl p-4 border border-amber-900/40 flex flex-col justify-between">
          <div>
            <div class="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center text-white mb-2">
              <i data-lucide="droplets" class="w-4 h-4"></i>
            </div>
            <h4 class="text-xs font-bold text-white">Watermark Blanco Transparente</h4>
            <p class="text-[10px] text-zinc-400 mt-1">Para estampar sobre fotos de fondo cálido.</p>
          </div>
          <a href="assets/branding/teocafe-watermark-white.png" download class="mt-3 bg-white hover:bg-zinc-200 text-black py-2 px-3 rounded-lg text-[11px] font-bold text-center block transition">
            Descargar PNG
          </a>
        </div>

        <div class="bg-black/60 rounded-xl p-4 border border-amber-900/40 flex flex-col justify-between">
          <div>
            <div class="w-8 h-8 rounded-lg bg-amber-500/20 flex items-center justify-center text-amber-400 mb-2">
              <i data-lucide="image" class="w-4 h-4"></i>
            </div>
            <h4 class="text-xs font-bold text-white">Post Oficial de Lanzamiento</h4>
            <p class="text-[10px] text-zinc-400 mt-1">1080x1080 px para feed de Instagram.</p>
          </div>
          <a href="assets/branding/teocafe-instagram-post-lanzamiento.png" download class="mt-3 bg-amber-500 hover:bg-amber-400 text-black py-2 px-3 rounded-lg text-[11px] font-bold text-center block transition">
            Descargar Post
          </a>
        </div>

      </div>
    </div>

  </main>

  <!-- Footer -->
  <footer class="border-t border-amber-900/30 bg-black py-8 text-center text-xs text-zinc-500 mt-auto">
    <div class="max-w-7xl mx-auto px-4">
      <p class="font-headline text-amber-500 font-bold mb-1">Té o Café — teocafe.cl</p>
      <p>© 2026 Tostaduría de Autor &amp; Té de Ceilán. Todos los derechos reservados.</p>
    </div>
  </footer>

  <!-- SCRIPT DE FILTRADO Y RENDERIZADO DINÁMICO DE LAS 24 VARIANTES -->
  <script>
    const allVariants = ${JSON.stringify(variantsData, null, 2)};
    let activeFilter = 'all';
    let isCircleMaskActive = false;

    function renderVariants() {
      const query = (document.getElementById('variant-search').value || '').toLowerCase().trim();
      const grid = document.getElementById('variants-grid');
      
      const filtered = allVariants.filter(v => {
        const matchesFamily = (activeFilter === 'all') || (v.family === activeFilter);
        const matchesQuery = !query || 
          v.name.toLowerCase().includes(query) ||
          v.subtitle.toLowerCase().includes(query) ||
          v.justification.toLowerCase().includes(query) ||
          v.audience.toLowerCase().includes(query) ||
          v.familyName.toLowerCase().includes(query);
        return matchesFamily && matchesQuery;
      });

      if (filtered.length === 0) {
        grid.innerHTML = \`
          <div class="col-span-full py-16 text-center text-zinc-400">
            <i data-lucide="search-x" class="w-12 h-12 text-amber-500/50 mx-auto mb-3"></i>
            <h3 class="text-lg font-bold text-white mb-1">No se encontraron variantes con ese criterio</h3>
            <p class="text-xs text-zinc-500">Prueba con palabras como "áureo", "precisión", "ritual", "minimalismo" o "prensa".</p>
          </div>
        \`;
        lucide.createIcons();
        return;
      }

      grid.innerHTML = filtered.map(v => \`
        <div class="bg-brand-card rounded-2xl border \${v.id === 6 ? 'border-2 border-amber-500/70 shadow-2xl' : 'border-brand-border hover:border-amber-500/50'} p-6 flex flex-col justify-between shadow-xl group transition duration-300 relative overflow-hidden">
          
          \${v.id === 6 ? \`
            <div class="absolute -top-1 -right-1 bg-gradient-to-r from-amber-500 to-amber-400 text-black text-[10px] font-black uppercase tracking-wider px-3.5 py-1.5 rounded-bl-xl shadow-lg z-10">
              ⭐ Oficial en Tienda
            </div>
          \` : ''}

          <div>
            <div class="flex items-center justify-between mb-2">
              <span class="text-amber-400 text-xs font-bold uppercase tracking-wider">
                Opción \${v.id} • \${v.familyName}
              </span>
              <span class="px-2 py-0.5 rounded-full text-[10px] font-bold uppercase \${v.badgeClass}">
                \${v.badge}
              </span>
            </div>

            <h3 class="font-headline font-bold text-xl text-white mb-1">\${v.name}</h3>
            <p class="text-xs text-amber-300/80 mb-3 font-medium">\${v.subtitle}</p>

            <!-- Tarjeta de Justificación Profesional -->
            <div class="bg-black/50 border border-amber-900/30 rounded-xl p-3 text-[11px] text-zinc-300 leading-relaxed mb-4 space-y-1.5">
              <p><strong class="text-amber-400 font-semibold">Justificación:</strong> \${v.justification}</p>
              <p><strong class="text-amber-400 font-semibold">Simbología:</strong> \${v.symbolism}</p>
              <p><strong class="text-amber-400 font-semibold">Público:</strong> \${v.audience}</p>
              <p><strong class="text-amber-400 font-semibold">Uso óptimo:</strong> \${v.bestFor}</p>
            </div>

            <!-- Imagen del Logo -->
            <div class="aspect-square rounded-xl overflow-hidden bg-[#0A0705] border border-amber-900/50 p-4 flex items-center justify-center group-hover:border-amber-500/60 transition">
              <img src="\${v.png}" alt="\${v.name}" class="variant-img w-full h-full object-contain transition duration-500 group-hover:scale-105 \${isCircleMaskActive ? 'instagram-circle-mask' : 'rounded-full shadow-2xl'}">
            </div>
          </div>

          <div class="pt-5 border-t border-brand-border/60 flex items-center gap-2 mt-5">
            <a href="\${v.png}" download="teocafe-logo-v\${v.id}.png" class="flex-1 bg-amber-500 hover:bg-amber-400 text-black py-2.5 px-4 rounded-xl text-xs font-bold text-center transition flex items-center justify-center gap-1.5 shadow">
              <i data-lucide="download" class="w-4 h-4"></i> Descargar PNG
            </a>
            <a href="\${v.svg}" download="teocafe-logo-v\${v.id}.svg" class="py-2.5 px-3 rounded-xl border border-white/20 bg-white/5 hover:bg-white/10 text-white text-xs font-bold transition flex items-center justify-center gap-1">
              SVG
            </a>
          </div>

        </div>
      \`).join('');

      lucide.createIcons();
    }

    function setFilter(family) {
      activeFilter = family;
      document.querySelectorAll('.family-tab-btn').forEach(btn => {
        if (btn.dataset.familyBtn === family) {
          btn.className = "family-tab-btn px-4 py-2 rounded-xl text-xs font-bold transition bg-amber-500 text-black shadow-md";
        } else {
          btn.className = "family-tab-btn px-4 py-2 rounded-xl text-xs font-bold transition bg-white/5 hover:bg-white/10 text-zinc-300 border border-white/10";
        }
      });
      renderVariants();
    }

    function filterVariants() {
      renderVariants();
    }

    function toggleCircleMask() {
      isCircleMaskActive = !isCircleMaskActive;
      const btn = document.getElementById('toggle-circle-btn');
      const text = document.getElementById('circle-btn-text');
      
      if (isCircleMaskActive) {
        btn.className = "flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold transition bg-amber-500 text-black border border-amber-400 shadow-lg";
        text.textContent = "✓ Modo Recorte Instagram Activo";
      } else {
        btn.className = "flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold transition bg-white/5 hover:bg-amber-500/20 text-amber-300 border border-amber-500/30";
        text.textContent = "Simular Recorte Instagram (Círculo)";
      }
      renderVariants();
    }

    // Inicializar
    renderVariants();
  </script>
</body>
</html>`;

fs.writeFileSync(path.join(__dirname, '..', 'brand-kit.html'), htmlContent, 'utf8');
console.log('✅ brand-kit.html generado con 24 variantes maestras y catálogo interactivo!');
