import { notFound } from 'next/navigation'
import Link from 'next/link'
import { getAllArtists, getArtistBySlug } from '@/lib/artists-data'

export async function generateStaticParams() {
  const artists = getAllArtists()
  return artists.map((artist) => ({
    slug: artist.slug,
  }))
}

export default async function ArtistPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const artist = getArtistBySlug(slug)

  if (!artist) {
    notFound()
  }

  const allArtists = getAllArtists()
  const currentIndex = allArtists.findIndex((a) => a.slug === artist.slug)
  const prevArtist = currentIndex > 0 ? allArtists[currentIndex - 1] : null
  const nextArtist = currentIndex < allArtists.length - 1 ? allArtists[currentIndex + 1] : null

  return (
    <main className="bg-[#080808] text-[#f0f0f0]">
      {/* Nav simplificado */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#080808]/90 backdrop-blur-sm border-b border-[#111]">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <Link href="/" className="text-xl font-black uppercase tracking-tighter">
            KURO <span className="text-[#DC2626]">·</span> STUDIO
          </Link>
          <div className="flex items-center gap-4">
            <Link
              href="/artistas"
              className="text-xs uppercase tracking-[0.15em] text-[#888] hover:text-[#DC2626] transition-colors"
            >
              Todos los artistas
            </Link>
            <Link href="/#contacto" className="btn-primary text-xs py-2 px-4">
              Reservar
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero del artista */}
      <section className="relative min-h-[60vh] flex items-center overflow-hidden pt-16">
        <div className="absolute inset-0">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={artist.imgHero}
            alt={artist.name}
            className="w-full h-full object-cover opacity-30 grayscale"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-[#080808] via-[#080808]/80 to-transparent" />

        <div className="relative z-10 max-w-6xl mx-auto px-6 py-20">
          <div className="flex flex-col md:flex-row gap-12 items-start">
            {/* Foto circular */}
            <div className="flex-shrink-0">
              <div className="w-48 h-48 rounded-full overflow-hidden border-2 border-[#1a1a1a]">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={artist.img}
                  alt={artist.name}
                  className="w-full h-full object-cover grayscale"
                />
              </div>
            </div>

            {/* Info principal */}
            <div className="flex-1">
              <div className="flex flex-wrap gap-2 mb-4">
                {artist.badges.map((badge) => (
                  <span
                    key={badge}
                    className="px-3 py-1 bg-[#DC2626]/10 border border-[#DC2626]/30 text-[#DC2626] text-xs uppercase tracking-wider"
                  >
                    {badge}
                  </span>
                ))}
              </div>

              <h1 className="text-5xl sm:text-6xl font-black uppercase tracking-tighter mb-3">
                {artist.name}
              </h1>
              <p className="text-[#DC2626] text-lg uppercase tracking-widest mb-6">
                {artist.specialty}
              </p>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-8 max-w-md border-t border-[#1a1a1a] pt-6 mb-8">
                <div>
                  <div className="text-2xl font-black text-[#DC2626]">{artist.stats.experience}</div>
                  <div className="text-xs text-[#555] uppercase tracking-widest mt-1">Experiencia</div>
                </div>
                <div>
                  <div className="text-2xl font-black text-[#DC2626]">{artist.stats.tattoos}</div>
                  <div className="text-xs text-[#555] uppercase tracking-widest mt-1">Tatuajes</div>
                </div>
                <div>
                  <div className="text-2xl font-black text-[#DC2626]">{artist.stats.sessions}</div>
                  <div className="text-xs text-[#555] uppercase tracking-widest mt-1">Sesión media</div>
                </div>
              </div>

              <div className="flex gap-4">
                <a
                  href={`https://instagram.com/${artist.ig.replace('@', '')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary"
                >
                  {artist.ig}
                </a>
                <a href="/#contacto" className="btn-outline">
                  Reservar cita
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Biografía completa */}
      <section className="py-16 border-t border-[#111]">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl font-black uppercase tracking-tight mb-6">
            Sobre <span className="text-[#DC2626]">{artist.name.split(' ')[0]}</span>
          </h2>
          <div className="prose prose-invert prose-lg max-w-none">
            <p className="text-[#888] leading-relaxed whitespace-pre-line">{artist.bioFull}</p>
          </div>

          {/* Filosofía de trabajo */}
          <div className="mt-12 p-8 border border-[#1a1a1a] bg-[#050505]">
            <p className="label-tag mb-4 block">— Enfoque —</p>
            <p className="text-[#666] leading-relaxed italic">{artist.approach}</p>
          </div>
        </div>
      </section>

      {/* Especialidades técnicas */}
      <section className="py-16 border-t border-[#111]">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-black uppercase tracking-tight mb-8">
            Especialidades <span className="text-[#DC2626]">técnicas.</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Estilos */}
            <div>
              <p className="label-tag mb-4 block">Estilos que domina</p>
              <div className="flex flex-wrap gap-2">
                {artist.styles.map((style) => (
                  <span
                    key={style}
                    className="px-4 py-2 bg-[#111] border border-[#1a1a1a] text-sm uppercase tracking-wider hover:border-[#DC2626] transition-colors"
                  >
                    {style}
                  </span>
                ))}
              </div>
            </div>

            {/* Tamaños */}
            <div>
              <p className="label-tag mb-4 block">Tamaños que trabaja</p>
              <div className="flex flex-wrap gap-2">
                {artist.sizes.map((size) => (
                  <span
                    key={size}
                    className="px-4 py-2 bg-[#111] border border-[#1a1a1a] text-sm uppercase tracking-wider hover:border-[#DC2626] transition-colors"
                  >
                    {size}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Favoritos */}
          <div className="mt-12">
            <p className="label-tag mb-4 block">Especialidades favoritas</p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {artist.favorites.map((fav) => (
                <div
                  key={fav}
                  className="p-4 border border-[#1a1a1a] bg-[#0a0a0a] hover:border-[#DC2626]/50 transition-colors"
                >
                  <p className="text-sm uppercase tracking-wider text-[#888]">{fav}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Galería personal */}
      <section className="py-16 border-t border-[#111]">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-black uppercase tracking-tight mb-8">
            Galería de <span className="text-[#DC2626]">{artist.name.split(' ')[0]}</span>
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-1">
            {artist.gallery.map((item) => (
              <div key={item.id} className="group overflow-hidden bg-[#111]">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={item.src}
                  alt={item.alt}
                  className="w-full h-full object-cover aspect-square group-hover:scale-105 transition-transform duration-700 grayscale hover:grayscale-0"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                  <p className="text-xs uppercase tracking-wider text-white">{item.style}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Proceso de trabajo */}
      <section className="py-16 border-t border-[#111] bg-[#050505]">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-black uppercase tracking-tight mb-8">
            Proceso de <span className="text-[#DC2626]">trabajo.</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="border border-[#1a1a1a] p-6">
              <div className="text-[3rem] font-black text-[#DC2626]/20 leading-none mb-3">01</div>
              <h3 className="text-lg font-black uppercase tracking-tight mb-2">Consulta</h3>
              <p className="text-[#666] text-sm leading-relaxed">{artist.process.consultation}</p>
            </div>

            <div className="border border-[#1a1a1a] p-6">
              <div className="text-[3rem] font-black text-[#DC2626]/20 leading-none mb-3">02</div>
              <h3 className="text-lg font-black uppercase tracking-tight mb-2">Diseño</h3>
              <p className="text-[#666] text-sm leading-relaxed">{artist.process.designTime}</p>
            </div>

            <div className="border border-[#1a1a1a] p-6">
              <div className="text-[3rem] font-black text-[#DC2626]/20 leading-none mb-3">03</div>
              <h3 className="text-lg font-black uppercase tracking-tight mb-2">Ejecución</h3>
              <p className="text-[#666] text-sm leading-relaxed">{artist.process.execution}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Disponibilidad y precios */}
      <section className="py-16 border-t border-[#111]">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-black uppercase tracking-tight mb-8">
            Disponibilidad <span className="text-[#DC2626]">y precios.</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Disponibilidad */}
            <div className="border border-[#1a1a1a] p-8">
              <p className="label-tag mb-6 block">Horario</p>
              <div className="space-y-4">
                <div className="flex justify-between border-b border-[#111] pb-3">
                  <span className="text-[#666]">Días</span>
                  <span className="text-[#f0f0f0]">{artist.availability.days}</span>
                </div>
                <div className="flex justify-between border-b border-[#111] pb-3">
                  <span className="text-[#666]">Horas</span>
                  <span className="text-[#f0f0f0]">{artist.availability.hours}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#666]">Tiempo de espera</span>
                  <span className="text-[#DC2626]">{artist.availability.waitTime}</span>
                </div>
              </div>
            </div>

            {/* Precios */}
            <div className="border border-[#1a1a1a] p-8">
              <p className="label-tag mb-6 block">Tarifas</p>
              <div className="space-y-4">
                <div className="flex justify-between border-b border-[#111] pb-3">
                  <span className="text-[#666]">Precio mínimo</span>
                  <span className="text-[#f0f0f0]">{artist.pricing.min}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#666]">Precio por hora</span>
                  <span className="text-[#f0f0f0]">{artist.pricing.hourly}</span>
                </div>
              </div>
              <p className="text-xs text-[#444] mt-6">
                Precios orientativos. El presupuesto final se determina en consulta según tamaño y complejidad.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contacto directo */}
      <section className="py-16 border-t border-[#111]">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-black uppercase tracking-tight mb-6">
            ¿Te gusta su <span className="text-[#DC2626]">estilo?</span>
          </h2>
          <p className="text-[#888] text-lg mb-8">
            Reserva una consulta con {artist.name.split(' ')[0]} y cuenta tu idea.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/#contacto" className="btn-primary">
              Reservar con {artist.name.split(' ')[0]}
            </a>
            <a
              href={`https://instagram.com/${artist.ig.replace('@', '')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline"
            >
              Seguir en Instagram
            </a>
          </div>

          <p className="text-xs text-[#444] mt-8">
            Consulta gratuita · Sin compromiso · Respondemos en 24h
          </p>
        </div>
      </section>

      {/* Navegación entre artistas */}
      <section className="py-16 border-t border-[#111]">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex items-center justify-between">
            {/* Anterior */}
            {prevArtist ? (
              <Link
                href={`/artistas/${prevArtist.slug}`}
                className="group flex items-center gap-4 hover:opacity-70 transition-opacity"
              >
                <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-[#1a1a1a] group-hover:border-[#DC2626] transition-colors">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={prevArtist.img}
                    alt={prevArtist.name}
                    className="w-full h-full object-cover grayscale"
                  />
                </div>
                <div>
                  <p className="text-xs text-[#555] uppercase tracking-wider mb-1">Anterior</p>
                  <p className="text-sm font-black uppercase tracking-tight">{prevArtist.name}</p>
                  <p className="text-xs text-[#DC2626]">{prevArtist.specialty}</p>
                </div>
              </Link>
            ) : (
              <div />
            )}

            {/* Centro */}
            <Link
              href="/artistas"
              className="text-xs text-[#555] hover:text-[#DC2626] uppercase tracking-wider transition-colors"
            >
              Ver todos los artistas
            </Link>

            {/* Siguiente */}
            {nextArtist ? (
              <Link
                href={`/artistas/${nextArtist.slug}`}
                className="group flex items-center gap-4 hover:opacity-70 transition-opacity text-right"
              >
                <div>
                  <p className="text-xs text-[#555] uppercase tracking-wider mb-1">Siguiente</p>
                  <p className="text-sm font-black uppercase tracking-tight">{nextArtist.name}</p>
                  <p className="text-xs text-[#DC2626]">{nextArtist.specialty}</p>
                </div>
                <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-[#1a1a1a] group-hover:border-[#DC2626] transition-colors">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={nextArtist.img}
                    alt={nextArtist.name}
                    className="w-full h-full object-cover grayscale"
                  />
                </div>
              </Link>
            ) : (
              <div />
            )}
          </div>
        </div>
      </section>

      {/* Footer minimal */}
      <footer className="border-t border-[#111] py-12">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <p className="text-xl font-black uppercase tracking-tighter mb-4">
            KURO <span className="text-[#DC2626]">·</span> STUDIO
          </p>
          <p className="text-[#444] text-xs">Barcelona · Arte permanente · Estudio de tatuaje</p>
        </div>
      </footer>
    </main>
  )
}
