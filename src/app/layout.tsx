import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Kuro Tattoo Studio — Barcelona',
  description: 'Estudio de tatuaje en Barcelona. Blackwork, realismo, japonés y geométrico. Cita previa.',
  openGraph: {
    title: 'Kuro Tattoo Studio — Barcelona',
    description: 'Tu historia en tu piel. Estudio de tatuaje en Barcelona.',
    type: 'website',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body className="antialiased">{children}</body>
    </html>
  )
}
