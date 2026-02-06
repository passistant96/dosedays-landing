import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Dose — Track Your Microdosing Journey',
  description: 'The first microdosing companion that understands integration days. Log doses, reflections, and moods. See patterns emerge over time. 100% private, all data stays on your device.',
  keywords: ['microdosing', 'psilocybin', 'tracker', 'journal', 'microdose app', 'integration days', 'wellness', 'mental health', 'mushroom tracker'],
  authors: [{ name: 'Dose' }],
  creator: 'Dose',
  publisher: 'Dose',
  metadataBase: new URL('https://dosedays.me'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Dose — Track Your Microdosing Journey',
    description: 'The first microdosing companion that understands integration days. Log doses, reflections, and moods. See patterns emerge.',
    url: 'https://dosedays.me',
    siteName: 'Dose',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Dose - Microdose Tracker App',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Dose — Track Your Microdosing Journey',
    description: 'The first microdosing companion that understands integration days.',
    images: ['/og-image.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: '/favicon.svg',
    apple: '/apple-touch-icon.png',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
