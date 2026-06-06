import Link from 'next/link'

/* ─── DATA ─────────────────────────────────────────────────── */

const GALLERY = [
  { id: 1, src: 'https://loremflickr.com/800/800/tattoo?lock=1', alt: 'Trabajo blackwork' },
  { id: 2, src: 'https://loremflickr.com/800/800/tattooing?lock=3', alt: 'Tatuaje realismo' },
  { id: 3, src: 'https://loremflickr.com/800/800/tattooing?lock=5', alt: 'Diseño geométrico' },
  { id: 4, src: 'https://loremflickr.com/800/800/tattoo?lock=18', alt: 'Estilo japonés' },
  { id: 5, src: 'https://loremflickr.com/800/800/tattoo?lock=25', alt: 'Manga tattoo' },
  { id: 6, src: 'https://loremflickr.com/800/800/tattoo?lock=55', alt: 'Sesión en estudio' },
]

const ARTISTS = [
  {
    name: 'Akira Vega',
    specialty: 'Blackwork · Geométrico',
    bio: '12 años de experiencia. Especialista en diseños geométricos y patrones complejos inspirados en el arte ancestral.',
    img: 'https://loremflickr.com/400/400/tattoo,artist,woman?lock=10',
    ig: '@akiravega_ink',
  },
  {
    name: 'Marta Solano',
    specialty: 'Realismo · Retrato',
    bio: 'Premiada en International Tattoo Expo 2023. Sus retratos en blanco y negro son inconfundibles.',
    img: 'https://loremflickr.com/400/400/tattoo,artist,woman?lock=11',
    ig: '@msolano_tattoo',
  },
  {
    name: 'Ren Nakamura',
    specialty: 'Japonés · Neo-tradicional',
    bio: 'Formado en Osaka durante 5 años. Koi, dragones y flores de cerezo ejecutados con precisión milimétrica.',
    img: 'https://loremflickr.com/400/400/tattoo,artist,man?lock=12',
    ig: '@ren.kuro',
  },
]

const STYLES = [
  {
    name: 'Blackwork',
    desc: 'Tinta negra sólida. Diseños audaces, geométricos o abstractos con un impacto visual máximo.',
    icon: '◼',
    img: 'https://loremflickr.com/600/400/tattoo,blackwork,black?lock=30',
  },
  {
    name: 'Realismo',
    desc: 'Retratos, animales y paisajes con un nivel de detalle fotográfico. En color o en blanco y negro.',
    icon: '◎',
    img: 'https://loremflickr.com/600/400/tattoo,realism,portrait?lock=31',
  },
  {
    name: 'Japonés',
    desc: 'La tradición del Irezumi. Koi, dragones, grullas y olas en la iconografía clásica japonesa.',
    icon: '波',
    img: 'https://loremflickr.com/600/400/tattoo,japanese,dragon?lock=32',
  },
  {
    name: 'Geométrico',
    desc: 'Líneas precisas, patrones matemáticos y figuras sagradas que crean composiciones únicas.',
    icon: '△',
    img: 'https://loremflickr.com/600/400/tattoo,geometric,mandala?lock=33',
  },
]

const STEPS = [
  {
    num: '01',
    title: 'Consulta gratuita',
    desc: 'Cuéntanos tu idea por Instagram o email. Te respondemos en menos de 24 horas con orientación de estilo y presupuesto aproximado.',
  },
  {
    num: '02',
    title: 'Diseño personalizado',
    desc: 'El artista asignado crea un diseño exclusivo para ti. Ajustamos hasta que sea perfecto antes de empezar.',
  },
  {
    num: '03',
    title: 'Tu tatuaje',
    desc: 'Sesión en un entorno cuidado y estéril. Te acompañamos antes, durante y después con cuidados post-tatuaje.',
  },
]

/* ─── COMPONENTS ────────────────────────────────────────────── */

function Nav() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#080808]/90 backdrop-blur-sm border-b border-[#111]">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <a href="#" className="text-xl font-black uppercase tracking-tighter">
          KURO <span className="text-[#DC2626]">·</span> STUDIO
        </a>
        <nav className="hidden md:flex items-center gap-8">
          {[
            { label: 'Galería', href: 'galeria' },
            { label: 'Artistas', href: 'artistas' },
            { label: 'Estilos', href: 'estilos' },
            { label: 'Contacto', href: 'contacto' },
          ].map((item) => (
            <a
              key={item.href}
              href={`#${item.href}`}
              className="text-xs uppercase tracking-[0.15em] text-[#888] hover:text-[#DC2626] transition-colors"
            >
              {item.label}
            </a>
          ))}
        </nav>
        <a href="#contacto" className="btn-primary text-xs py-2.5 px-5">
          Reservar cita
        </a>
      </div>
    </header>
  )
}

function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background photo - tattoo studio */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="https://images.pexels.com/photos/7005797/pexels-photo-7005797.jpeg?auto=compress&cs=tinysrgb&w=1920"
        alt=""
        className="absolute inset-0 w-full h-full object-cover opacity-20 grayscale"
      />
      {/* Gradient overlays */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#080808]/70 via-[#080808]/50 to-[#080808]/90" />
      <div className="absolute inset-0" style={{ background: 'radial-gradient(ellipse 80% 60% at 50% 40%, rgba(220,38,38,0.08) 0%, transparent 70%)' }} />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#DC2626]/30 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#DC2626]/10 to-transparent" />
      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
        <p className="label-tag mb-6 block">Estudio de tatuaje · Barcelona</p>
        <h1 className="text-6xl sm:text-8xl md:text-[10rem] font-black uppercase tracking-tighter leading-none mb-8">
          TU HISTORIA
          <br />
          <span className="text-[#DC2626]">EN TU PIEL.</span>
        </h1>
        <p className="text-[#888] text-lg max-w-xl mx-auto mb-12 leading-relaxed">
          Arte permanente creado por los mejores artistas de Barcelona.
          Blackwork, realismo, japonés y geométrico.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="#contacto" className="btn-primary">
            Reservar cita
          </a>
          <a href="#galeria" className="btn-outline">
            Ver trabajos
          </a>
        </div>

        {/* Stats */}
        <div className="mt-20 grid grid-cols-3 gap-8 max-w-lg mx-auto border-t border-[#1a1a1a] pt-10">
          {[
            { val: '+1.200', label: 'Tatuajes realizados' },
            { val: '12', label: 'Años de experiencia' },
            { val: '3', label: 'Artistas especializados' },
          ].map((s) => (
            <div key={s.label}>
              <div className="text-3xl font-black text-[#DC2626]">{s.val}</div>
              <div className="text-xs text-[#555] uppercase tracking-widest mt-1">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function Gallery() {
  return (
    <section id="galeria" className="py-24 border-t border-[#111]">
      <div className="max-w-6xl mx-auto px-6">
        <div className="mb-12">
          <p className="label-tag mb-3 block">— Portfolio —</p>
          <h2 className="section-title">
            Nuestro <span className="text-[#DC2626]">trabajo.</span>
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-1">
          {GALLERY.map((item, i) => (
            <div
              key={item.id}
              className={`group overflow-hidden bg-[#111] ${i === 0 ? 'md:col-span-2 md:row-span-2' : ''}`}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={item.src}
                alt={item.alt}
                className="w-full h-full object-cover aspect-square group-hover:scale-105 transition-transform duration-700 grayscale hover:grayscale-0"
              />
            </div>
          ))}
        </div>

        <p className="text-center text-[#555] text-xs uppercase tracking-widest mt-8">
          Más en{' '}
          <a href="#" className="text-[#DC2626] hover:underline">
            @kuro.tattoo.studio
          </a>
        </p>
      </div>
    </section>
  )
}

function Artists() {
  // Map artist names to slugs
  const artistSlugs: Record<string, string> = {
    'Akira Vega': 'akira-vega',
    'Marta Solano': 'marta-solano',
    'Ren Nakamura': 'ren-nakamura',
  }

  return (
    <section id="artistas" className="py-24 border-t border-[#111]">
      <div className="max-w-6xl mx-auto px-6">
        <div className="mb-12">
          <p className="label-tag mb-3 block">— El equipo —</p>
          <h2 className="section-title">
            Los <span className="text-[#DC2626]">artistas.</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-[#111]">
          {ARTISTS.map((artist) => {
            const slug = artistSlugs[artist.name]
            return (
              <Link
                key={artist.name}
                href={`/artistas/${slug}`}
                className="bg-[#080808] p-8 group hover:bg-[#0f0f0f] transition-colors block"
              >
                <div className="w-24 h-24 rounded-full overflow-hidden mb-6 border-2 border-[#1a1a1a] group-hover:border-[#DC2626] transition-colors">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={artist.img} alt={artist.name} className="w-full h-full object-cover grayscale" />
                </div>
                <h3 className="text-xl font-black uppercase tracking-tight mb-1 group-hover:text-[#DC2626] transition-colors">
                  {artist.name}
                </h3>
                <p className="text-[#DC2626] text-xs uppercase tracking-widest mb-4">{artist.specialty}</p>
                <p className="text-[#666] text-sm leading-relaxed mb-6">{artist.bio}</p>
                <div className="flex items-center gap-2 text-xs text-[#555] group-hover:text-[#DC2626] transition-colors">
                  <span>{artist.ig}</span>
                  <span className="ml-auto">Ver más →</span>
                </div>
              </Link>
            )
          })}
        </div>

        <div className="mt-12 text-center">
          <Link
            href="/artistas"
            className="text-xs text-[#555] hover:text-[#DC2626] uppercase tracking-wider transition-colors"
          >
            Ver todos los artistas →
          </Link>
        </div>
      </div>
    </section>
  )
}

function Styles() {
  return (
    <section id="estilos" className="py-24 border-t border-[#111]">
      <div className="max-w-6xl mx-auto px-6">
        <div className="mb-12">
          <p className="label-tag mb-3 block">— Especialidades —</p>
          <h2 className="section-title">
            Nuestros <span className="text-[#DC2626]">estilos.</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-px bg-[#111]">
          {STYLES.map((style) => (
            <div key={style.name} className="bg-[#080808] group hover:bg-[#0f0f0f] transition-colors overflow-hidden">
              <div className="aspect-video overflow-hidden">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={style.img}
                  alt={style.name}
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-500"
                />
              </div>
              <div className="p-8">
                <div className="text-2xl mb-3 text-[#333] group-hover:text-[#DC2626] transition-colors font-black">
                  {style.icon}
                </div>
                <h3 className="text-2xl font-black uppercase tracking-tight mb-3">{style.name}</h3>
                <p className="text-[#666] text-sm leading-relaxed">{style.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function Process() {
  return (
    <section className="py-24 border-t border-[#111] bg-[#050505]">
      <div className="max-w-6xl mx-auto px-6">
        <div className="mb-16 text-center">
          <p className="label-tag mb-3 block">— Simple —</p>
          <h2 className="section-title">
            Cómo <span className="text-[#DC2626]">funciona.</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {STEPS.map((step) => (
            <div key={step.num} className="relative">
              <div className="text-[6rem] font-black text-[#DC2626]/20 leading-none mb-4 select-none">{step.num}</div>
              <h3 className="text-xl font-black uppercase tracking-tight mb-3">{step.title}</h3>
              <p className="text-[#666] text-sm leading-relaxed">{step.desc}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <a href="#contacto" className="btn-primary">
            Empezar ahora
          </a>
        </div>
      </div>
    </section>
  )
}

function Contact() {
  return (
    <section id="contacto" className="py-24 border-t border-[#111]">
      <div className="max-w-6xl mx-auto px-6">
        <div className="mb-12">
          <p className="label-tag mb-3 block">— Reservas —</p>
          <h2 className="section-title">
            Hablemos de <span className="text-[#DC2626]">tu idea.</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Form */}
          <form className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-xs uppercase tracking-widest text-[#555] mb-2">Nombre</label>
                <input
                  type="text"
                  className="w-full bg-[#111] border border-[#1a1a1a] text-[#f0f0f0] px-4 py-3 text-sm focus:outline-none focus:border-[#DC2626] transition-colors"
                  placeholder="Tu nombre"
                />
              </div>
              <div>
                <label className="block text-xs uppercase tracking-widest text-[#555] mb-2">Email</label>
                <input
                  type="email"
                  className="w-full bg-[#111] border border-[#1a1a1a] text-[#f0f0f0] px-4 py-3 text-sm focus:outline-none focus:border-[#DC2626] transition-colors"
                  placeholder="tu@email.com"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs uppercase tracking-widest text-[#555] mb-2">Estilo</label>
              <select className="w-full bg-[#111] border border-[#1a1a1a] text-[#f0f0f0] px-4 py-3 text-sm focus:outline-none focus:border-[#DC2626] transition-colors appearance-none">
                <option value="">Selecciona un estilo</option>
                <option>Blackwork</option>
                <option>Realismo</option>
                <option>Japonés</option>
                <option>Geométrico</option>
                <option>No lo sé aún</option>
              </select>
            </div>

            <div>
              <label className="block text-xs uppercase tracking-widest text-[#555] mb-2">Zona del cuerpo</label>
              <input
                type="text"
                className="w-full bg-[#111] border border-[#1a1a1a] text-[#f0f0f0] px-4 py-3 text-sm focus:outline-none focus:border-[#DC2626] transition-colors"
                placeholder="Brazo, espalda, tobillo..."
              />
            </div>

            <div>
              <label className="block text-xs uppercase tracking-widest text-[#555] mb-2">Cuéntanos tu idea</label>
              <textarea
                rows={5}
                className="w-full bg-[#111] border border-[#1a1a1a] text-[#f0f0f0] px-4 py-3 text-sm focus:outline-none focus:border-[#DC2626] transition-colors resize-none"
                placeholder="Describe el diseño que tienes en mente, referencias, tamaño aproximado..."
              />
            </div>

            <button type="submit" className="btn-primary w-full text-center">
              Enviar consulta
            </button>
            <p className="text-xs text-[#444] text-center">Respondemos en menos de 24 horas · Consulta gratuita</p>
          </form>

          {/* Info */}
          <div className="space-y-10">
            <div>
              <p className="label-tag mb-4 block">Estudio</p>
              <address className="not-italic space-y-2 text-[#666] text-sm">
                <p className="text-[#f0f0f0] font-bold text-base">Kuro Tattoo Studio</p>
                <p>Carrer de Enric Granados, 82</p>
                <p>08008 Barcelona</p>
              </address>
            </div>

            <div>
              <p className="label-tag mb-4 block">Horario</p>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between border-b border-[#111] pb-2">
                  <span className="text-[#666]">Lunes – Viernes</span>
                  <span className="text-[#f0f0f0]">11:00 – 20:00</span>
                </div>
                <div className="flex justify-between border-b border-[#111] pb-2">
                  <span className="text-[#666]">Sábado</span>
                  <span className="text-[#f0f0f0]">10:00 – 18:00</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#666]">Domingo</span>
                  <span className="text-[#DC2626]">Cerrado</span>
                </div>
              </div>
            </div>

            <div>
              <p className="label-tag mb-4 block">Contacto directo</p>
              <div className="space-y-3 text-sm">
                <a href="mailto:hola@kurotattoo.com" className="flex items-center gap-3 text-[#666] hover:text-[#DC2626] transition-colors">
                  <span className="text-[#DC2626]">→</span> hola@kurotattoo.com
                </a>
                <a href="tel:+34931234567" className="flex items-center gap-3 text-[#666] hover:text-[#DC2626] transition-colors">
                  <span className="text-[#DC2626]">→</span> +34 931 234 567
                </a>
                <a href="#" className="flex items-center gap-3 text-[#666] hover:text-[#DC2626] transition-colors">
                  <span className="text-[#DC2626]">→</span> @kuro.tattoo.studio
                </a>
              </div>
            </div>

            <div className="border border-[#1a1a1a] p-6">
              <p className="text-xs uppercase tracking-widest text-[#555] mb-2">Política de depósito</p>
              <p className="text-sm text-[#666] leading-relaxed">
                Se requiere un depósito del 30% para confirmar la cita. El importe se descuenta del total del tatuaje.
                Cancelaciones con más de 48h de antelación son reembolsables.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer className="border-t border-[#111] py-12">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
        <p className="text-xl font-black uppercase tracking-tighter">
          KURO <span className="text-[#DC2626]">·</span> STUDIO
        </p>
        <p className="text-[#444] text-xs text-center">
          © {new Date().getFullYear()} Kuro Tattoo Studio · Barcelona · Todos los derechos reservados
        </p>
        <div className="flex items-center gap-6">
          {['Instagram', 'TikTok', 'Pinterest'].map((s) => (
            <a key={s} href="#" className="text-xs text-[#444] hover:text-[#DC2626] transition-colors uppercase tracking-wider">
              {s}
            </a>
          ))}
        </div>
      </div>
    </footer>
  )
}

/* ─── PAGE ──────────────────────────────────────────────────── */

export default function Home() {
  return (
    <main className="bg-[#080808] text-[#f0f0f0]">
      <div className="watermark" />
      <Nav />
      <Hero />
      <Gallery />
      <Artists />
      <Styles />
      <Process />
      <Contact />
      <Footer />
    </main>
  )
}
