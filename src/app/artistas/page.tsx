import Link from 'next/link'
import { getAllArtists } from '@/lib/artists-data'

export default function ArtistsPage() {
  const artists = getAllArtists()

  return (
    <main className="bg-[#080808] text-[#f0f0f0]">
      {/* Nav */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#080808]/90 backdrop-blur-sm border-b border-[#111]">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <Link href="/" className="text-xl font-black uppercase tracking-tighter">
            KURO <span className="text-[#DC2626]">·</span> STUDIO
          </Link>
          <div className="flex items-center gap-4">
            <Link
              href="/"
              className="text-xs uppercase tracking-[0.15em] text-[#888] hover:text-[#DC2626] transition-colors"
            >
              Inicio
            </Link>
            <Link href="/#contacto" className="btn-primary text-xs py-2 px-4">
              Reservar
            </Link>
          </div>
        </div>
      </nav>

      {/* Header */}
      <section className="pt-32 pb-16 border-t border-[#111]">
        <div className="max-w-6xl mx-auto px-6">
          <p className="label-tag mb-3 block">— El equipo —</p>
          <h1 className="text-6xl md:text-7xl font-black uppercase tracking-tighter mb-6">
            Nuestros <span className="text-[#DC2626]">artistas.</span>
          </h1>
          <p className="text-[#888] text-lg max-w-2xl leading-relaxed">
            Cada artista en Kuro Studio aporta su visión única. Blackwork, realismo, japonés —
            encuentra el estilo que resuena contigo.
          </p>
        </div>
      </section>

      {/* Grid de artistas */}
      <section className="pb-24">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-[#111]">
            {artists.map((artist) => (
              <Link
                key={artist.slug}
                href={`/artistas/${artist.slug}`}
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

                <div className="flex flex-wrap gap-2 mb-6">
                  {artist.badges.slice(0, 2).map((badge) => (
                    <span
                      key={badge}
                      className="px-2 py-1 bg-[#111] border border-[#1a1a1a] text-[10px] uppercase tracking-wider text-[#555]"
                    >
                      {badge}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-2 text-xs text-[#555] group-hover:text-[#DC2626] transition-colors">
                  <span>Ver portfolio</span>
                  <span>→</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 border-t border-[#111] bg-[#050505]">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-black uppercase tracking-tight mb-6">
            ¿Listo para tu <span className="text-[#DC2626]">tatuaje?</span>
          </h2>
          <p className="text-[#888] text-lg mb-8">
            Elige un artista y cuéntale tu idea. Consulta gratuita y sin compromiso.
          </p>
          <Link href="/#contacto" className="btn-primary">
            Reservar cita
          </Link>
        </div>
      </section>

      {/* Footer minimal */}
      <footer className="border-t border-[#111] py-12">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-xl font-black uppercase tracking-tighter">
            KURO <span className="text-[#DC2626]">·</span> STUDIO
          </p>
          <p className="text-[#444] text-xs text-center">
            © {new Date().getFullYear()} Kuro Tattoo Studio · Barcelona
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
    </main>
  )
}
