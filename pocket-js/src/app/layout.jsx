import { Poppins } from 'next/font/google'
import clsx from 'clsx'

import '@/styles/tailwind.css'

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  display: 'swap',
  variable: '--font-poppins',
})

const SITE_URL = 'https://sakinah.pro'
const DESCRIPTION =
  "Sakinah t'accompagne face au stress, au harcèlement et aux émotions difficiles. Un assistant IA bienveillant, disponible 24h/24, conçu pour les jeunes."

export const metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    template: '%s - Sakinah',
    default: 'Sakinah — Ton espace de bien-être mental',
  },
  description: DESCRIPTION,
  openGraph: {
    title: 'Sakinah — Ton espace de bien-être mental',
    description: DESCRIPTION,
    url: SITE_URL,
    siteName: 'Sakinah',
    locale: 'fr_FR',
    type: 'website',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Sakinah — Ton espace de bien-être mental',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Sakinah — Ton espace de bien-être mental',
    description: DESCRIPTION,
    images: ['/og-image.png'],
  },
  icons: {
    icon: '/favicon.ico',
    apple: '/apple-icon.png',
  },
  alternates: {
    canonical: SITE_URL,
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="fr" className={clsx('bg-gray-50 antialiased', poppins.variable)}>
      <body>{children}</body>
    </html>
  )
}
