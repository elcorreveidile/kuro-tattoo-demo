/* ─── ARTISTAS DATA ───────────────────────────────────────────────── */

export interface Artist {
  slug: string
  name: string
  specialty: string
  bio: string
  bioFull: string
  img: string
  imgHero: string
  ig: string
  stats: {
    experience: string
    tattoos: string
    sessions: string
  }
  badges: string[]
  styles: string[]
  sizes: string[]
  gallery: Array<{
    id: number
    src: string
    alt: string
    style: string
  }>
  availability: {
    days: string
    hours: string
    waitTime: string
  }
  pricing: {
    min: string
    hourly: string
  }
  process: {
    consultation: string
    designTime: string
    execution: string
  }
  approach: string
  favorites: string[]
}

export const ARTISTS_DATA: Artist[] = [
  {
    slug: 'akira-vega',
    name: 'Akira Vega',
    specialty: 'Blackwork · Geométrico',
    bio: '12 años de experiencia. Especialista en diseños geométricos y patrones complejos inspirados en el arte ancestral.',
    bioFull: `Akira Vega descubrió su pasión por el blackwork hace más de una década, cuando un viaje a Japón le reveló la belleza de la tinta sólida y los patrones precisos. Formada inicialmente en estudio tradicional, pronto desarrolló un estilo único que fusiona la precisión geométrica con el simbolismo del arte sagrado.

Su enfoque matemático del tatuaje le ha llevado a estudiar proporciones áureas, simetría radial y patrones fractales, aplicando estos principios a cada pieza que crea. Akira cree que cada línea tiene un propósito y que el espacio negativo es tan importante como la tinta.

Especializada en mandalas, dotwork y composiciones simétricas, ha desarrollado una técnica que combina la solidez del blackwork con la delicadeza del puntillismo. Su estudio está decorado con espirales y geometrías sagradas que inspiran cada pieza única.`,
    img: 'https://loremflickr.com/400/400/tattoo,artist,woman?lock=10',
    imgHero: 'https://loremflickr.com/1200/800/tattoo,artist,woman,portrait?lock=100',
    ig: '@akiravega_ink',
    stats: {
      experience: '12 años',
      tattoos: '+400',
      sessions: '2-4h avg',
    },
    badges: ['Especialista en mandalas', 'Patrones complejos', 'Dotwork'],
    styles: ['Blackwork', 'Geométrico', 'Dotwork', 'Minimal'],
    sizes: ['Pequeño', 'Mediano', 'Manga', 'Full piece'],
    gallery: [
      {
        id: 1,
        src: 'https://loremflickr.com/800/800/tattoo,blackwork,geometric?lock=201',
        alt: 'Mandala blackwork',
        style: 'Mandala',
      },
      {
        id: 2,
        src: 'https://loremflickr.com/800/800/tattoo,geometric,pattern?lock=202',
        alt: 'Patrón geométrico antebrazo',
        style: 'Geométrico',
      },
      {
        id: 3,
        src: 'https://loremflickr.com/800/800/tattoo,dotwork,black?lock=203',
        alt: 'Dotwork puntillismo',
        style: 'Dotwork',
      },
      {
        id: 4,
        src: 'https://loremflickr.com/800/800/tattoo,blackwork,solid?lock=204',
        alt: 'Blackwork sólido',
        style: 'Blackwork',
      },
      {
        id: 5,
        src: 'https://loremflickr.com/800/800/tattoo,geometric,symmetry?lock=205',
        alt: 'Pieza simétrica',
        style: 'Simétrico',
      },
      {
        id: 6,
        src: 'https://loremflickr.com/800/800/tattoo,minimal,black?lock=206',
        alt: 'Diseño minimal',
        style: 'Minimal',
      },
    ],
    availability: {
      days: 'Martes - Sábado',
      hours: '11:00 - 19:00',
      waitTime: '2-3 semanas',
    },
    pricing: {
      min: '120€',
      hourly: '150-200€/h',
    },
    process: {
      consultation: 'Zoom o presencial (30 min)',
      designTime: '3-5 días',
      execution: '1-3 sesiones',
    },
    approach: 'Cada línea se mide milimétricamente. El diseño se crea digitalmente y se ajusta hasta que la simetría es perfecta. Prefiero trabajar en piezas que fluyan con la anatomía natural del cuerpo.',
    favorites: ['Mandalas', 'Patrones sagrados', 'Composiciones simétricas', 'Espalda completa'],
  },
  {
    slug: 'marta-solano',
    name: 'Marta Solano',
    specialty: 'Realismo · Retrato',
    bio: 'Premiada en International Tattoo Expo 2023. Sus retratos en blanco y negro son inconfundibles.',
    bioFull: `Marta Solano comenzó su carrera en el arte tradicional antes de descubrir que su verdadera pasión era capturar la esencia humana a través del tatuaje realista. Con formación en bellas artes y años de estudio de anatomía, ha perfeccionado una técnica que va más allá del simple retrato.

Su reconocimiento en la International Tattoo Expo 2023 vino con su pieza "Madre Tierra", un retrato hiperrrealista que combinó técnicas de puntillismo y sombreado suave para crear una imagen de profundidad fotográfica.

Marta se especializa en retratos que capturan no solo el aspecto físico sino también la emoción y personalidad del sujeto. Cada ojo, cada arruga, cada expresión se estudia y reproduce con obsesiva atención al detalle. Su enfoque combina la paciencia del miniaturista con la audacia del artista contemporáneo.`,
    img: 'https://loremflickr.com/400/400/tattoo,artist,woman?lock=11',
    imgHero: 'https://loremflickr.com/1200/800/tattoo,artist,woman,realism?lock=101',
    ig: '@msolano_tattoo',
    stats: {
      experience: '8 años',
      tattoos: '+200',
      sessions: '4-8h avg',
    },
    badges: ['Premiada International Tattoo Expo 2023', 'Especialista en retratos', '98% satisfacción'],
    styles: ['Realismo B/N', 'Retrato', 'Realismo color', 'Animales'],
    sizes: ['Mediano', 'Grande', 'Manga', 'Pecho completo'],
    gallery: [
      {
        id: 1,
        src: 'https://loremflickr.com/800/800/tattoo,portrait,realism?lock=211',
        alt: 'Retrato B/N',
        style: 'Retrato',
      },
      {
        id: 2,
        src: 'https://loremflickr.com/800/800/tattoo,realistic,animal?lock=212',
        alt: 'Leon realista',
        style: 'Animal',
      },
      {
        id: 3,
        src: 'https://loremflickr.com/800/800/tattoo,realism,woman?lock=213',
        alt: 'Retrato mujer',
        style: 'Retrato',
      },
      {
        id: 4,
        src: 'https://loremflickr.com/800/800/tattoo,realistic,eye?lock=214',
        alt: 'Ojo hiperrealista',
        style: 'Detallado',
      },
      {
        id: 5,
        src: 'https://loremflickr.com/800/800/tattoo,realism,bird?lock=215',
        alt: 'Pájaro realista',
        style: 'Animal',
      },
      {
        id: 6,
        src: 'https://loremflickr.com/800/800/tattoo,portrait,elder?lock=216',
        alt: 'Retrato anciano',
        style: 'Retrato',
      },
    ],
    availability: {
      days: 'Lunes - Viernes',
      hours: '10:00 - 18:00',
      waitTime: '4-6 semanas',
    },
    pricing: {
      min: '200€',
      hourly: '180-250€/h',
    },
    process: {
      consultation: 'Presencial obligatoria',
      designTime: '1-2 semanas',
      execution: '2-6 sesiones',
    },
    approach: 'El realismo requiere tiempo y paciencia. Cada retrato pasa por múltiples fases de diseño y ajuste. Las sesiones son largas pero los resultados hablan por sí solos. Me tomo el tiempo que cada pieza necesita.',
    favorites: ['Retratos familiares', 'Animales domésticos', 'Figuras históricas', 'Ojos realistas'],
  },
  {
    slug: 'ren-nakamura',
    name: 'Ren Nakamura',
    specialty: 'Japonés · Neo-tradicional',
    bio: 'Formado en Osaka durante 5 años. Koi, dragones y flores de cerezo ejecutados con precisión milimétrica.',
    bioFull: `Ren Nakamura comenzó su aprendizaje en Osaka a los 18 años, donde pasó cinco años estudiando bajo la tutela de un maestro del Irezumi tradicional. Durante ese tiempo, aprendió no solo las técnicas del tatuaje japonés sino también la filosofía y espiritualidad que rodea este arte antiguo.

Su formación incluyó el estudio de la iconografía clásica: el significado de cada koi, cada dragón, cada flor de cerezo; cómo componer una pieza que fluya con el cuerpo; y la importancia de contar historias a través de la piel.

Aunque respeta profundamente las tradiciones, Ren ha desarrollado un estilo que combina la técnica japonesa con elementos neo-tradicionales, creando piezas que respetan el pasado mientras miran hacia el futuro. Especializado en trabajos grandes, es conocido por sus mangas y backpieces completos que son verdaderas obras de arte.`,
    img: 'https://loremflickr.com/400/400/tattoo,artist,man?lock=12',
    imgHero: 'https://loremflickr.com/1200/800/tattoo,artist,man,japanese?lock=102',
    ig: '@ren.kuro',
    stats: {
      experience: '15 años',
      tattoos: '+60 grandes',
      sessions: '6-10h avg',
    },
    badges: ['Formado en Osaka 5 años', 'Maestro Irezumi', 'Especialista en piezas grandes'],
    styles: ['Japonés tradicional', 'Neo-tradicional', 'Irezumi', ' Oriental'],
    sizes: ['Mediano', 'Grande', 'Manga', 'Body suit'],
    gallery: [
      {
        id: 1,
        src: 'https://loremflickr.com/800/800/tattoo,japanese,koi?lock=221',
        alt: 'Koi carp',
        style: 'Koi',
      },
      {
        id: 2,
        src: 'https://loremflickr.com/800/800/tattoo,japanese,dragon?lock=222',
        alt: 'Dragón japonés',
        style: 'Dragón',
      },
      {
        id: 3,
        src: 'https://loremflickr.com/800/800/tattoo,japanese,cherry?lock=223',
        alt: 'Flores de cerezo',
        style: 'Sakura',
      },
      {
        id: 4,
        src: 'https://loremflickr.com/800/800/tattoo,japanese,crane?lock=224',
        alt: 'Grulla',
        style: 'Grulla',
      },
      {
        id: 5,
        src: 'https://loremflickr.com/800/800/tattoo,japanese,sleeve?lock=225',
        alt: 'Manga japonesa',
        style: 'Manga',
      },
      {
        id: 6,
        src: 'https://loremflickr.com/800/800/tattoo,japanese,wave?lock=226',
        alt: 'Ola gran onda',
        style: 'Ola',
      },
    ],
    availability: {
      days: 'Miércoles - Domingo',
      hours: '12:00 - 20:00',
      waitTime: '8-12 semanas',
    },
    pricing: {
      min: '300€',
      hourly: '200-300€/h',
    },
    process: {
      consultation: 'Presencial con ceremony',
      designTime: '2-4 semanas',
      execution: '5-20 sesiones',
    },
    approach: 'Cada pieza japonesa cuenta una historia. Trabajo con clientes que comprenden y respetan la tradición. Las piezas grandes requieren compromiso y paciencia, pero el resultado es una obra de arte para toda la vida.',
    favorites: ['Dragones', 'Koi', 'Mangas completas', 'Backpieces', 'Onis'],
  },
]

export function getArtistBySlug(slug: string): Artist | undefined {
  return ARTISTS_DATA.find((artist) => artist.slug === slug)
}

export function getAllArtists(): Artist[] {
  return ARTISTS_DATA
}
