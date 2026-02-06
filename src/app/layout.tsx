import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Dose — Track Your Microdosing Journey',
  description: 'A mindful companion for tracking your microdosing rhythm. Log doses, reflections, and moods. See patterns emerge. 100% private, all data on device.',
  keywords: ['microdosing', 'psilocybin', 'tracker', 'journal', 'wellness', 'mental health'],
  openGraph: {
    title: 'Dose — Track Your Microdosing Journey',
    description: 'A mindful companion for tracking your microdosing rhythm.',
    url: 'https://dosedays.me',
    siteName: 'Dose',
    type: 'website',
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
