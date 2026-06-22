import type { Metadata } from 'next'
import './globals.css'

const SITE = 'https://dosedays.me'
const APP_STORE = 'https://apps.apple.com/app/id6758736481'

export const metadata: Metadata = {
  metadataBase: new URL(SITE),
  title: {
    default: 'Dose Days: Microdosing Tracker & Protocol Journal',
    template: '%s · Dose Days',
  },
  description:
    'Dose Days is the microdosing tracker that understands integration days. Log doses, intentions and moods, follow protocols like Fadiman, and watch the patterns emerge across your whole cycle. Free, private, all data on your device.',
  keywords: [
    'microdosing tracker',
    'microdose tracker',
    'microdosing journal',
    'Fadiman protocol',
    'Stamets stack',
    'integration days',
    'psilocybin',
    'mood tracker',
    'microdosing app',
    'wellness',
  ],
  applicationName: 'Dose Days',
  authors: [{ name: 'Dose Days' }],
  creator: 'Dose Days',
  publisher: 'Dose Days',
  alternates: { canonical: '/' },
  openGraph: {
    title: 'Dose Days: Microdosing Tracker & Protocol Journal',
    description:
      'The microdosing tracker that understands integration days. Log doses, intentions and moods. See the patterns emerge across your whole cycle.',
    url: SITE,
    siteName: 'Dose Days',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Dose Days, the microdosing tracker and protocol journal',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Dose Days: Microdosing Tracker & Protocol Journal',
    description: 'The microdosing tracker that understands integration days.',
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

// Site-wide structured data. The SoftwareApplication block makes the listing
// eligible for app rich results in Google; WebSite gives the brand a known
// entity. Articles add their own Article/FAQ JSON-LD per page.
const jsonLd = [
  {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: 'Dose Days',
    applicationCategory: 'HealthApplication',
    operatingSystem: 'iOS',
    description:
      'The microdosing tracker that understands integration days. Log doses, intentions and moods, follow protocols like Fadiman, and watch the patterns emerge across your whole cycle.',
    url: SITE,
    downloadUrl: APP_STORE,
    offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
    publisher: { '@type': 'Organization', name: 'Dose Days', url: SITE },
  },
  {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'Dose Days',
    url: SITE,
  },
]

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  )
}
