import type { Metadata } from 'next'
import Link from 'next/link'
import { getAllArticles } from '@/lib/learn'

const APP_STORE = 'https://apps.apple.com/app/id6758736481'

export const metadata: Metadata = {
  title: 'Learn: Microdosing Protocols, Schedules & Tracking',
  description:
    'Clear, practical guides to microdosing. Protocols like Fadiman and the Stamets stack, integration days, and how to track what actually works for you.',
  alternates: { canonical: '/learn' },
  openGraph: {
    title: 'Learn: Microdosing Protocols, Schedules & Tracking',
    description:
      'Clear, practical guides to microdosing protocols, integration days, and tracking what works.',
    url: 'https://dosedays.me/learn',
    type: 'website',
  },
}

function formatDate(iso: string) {
  return new Date(iso + 'T00:00:00').toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })
}

export default function LearnIndex() {
  const articles = getAllArticles()

  return (
    <div className="min-h-screen bg-[#1a1f16] text-[#FAF8F5]">
      <nav className="border-b border-white/5">
        <div className="max-w-3xl mx-auto px-6 py-6 flex items-center justify-between">
          <Link href="/" className="text-sm text-[#A4B494] hover:text-[#FAF8F5] transition-colors">
            ← Dose Days
          </Link>
          <a
            href={APP_STORE}
            className="text-sm px-5 py-2 bg-[#8B9E82] text-[#1a1f16] rounded-full hover:bg-[#A4B494] transition-colors font-medium"
          >
            Download
          </a>
        </div>
      </nav>

      <header className="max-w-3xl mx-auto px-6 pt-20 pb-12">
        <p className="text-sm uppercase tracking-[0.18em] text-[#8B9E82] mb-5">Learn</p>
        <h1 className="text-4xl md:text-5xl font-normal leading-[1.1] tracking-tight mb-6">
          Microdosing, <span className="italic text-[#A4B494]">explained</span>
        </h1>
        <p className="text-lg text-[#A4B494] leading-relaxed max-w-xl font-light">
          Clear, practical guides to protocols, integration days, and tracking what actually works.
          Educational only, never medical advice.
        </p>
      </header>

      <main className="max-w-3xl mx-auto px-6 pb-24">
        <div className="divide-y divide-white/10 border-t border-white/10">
          {articles.map((a) => (
            <Link
              key={a.slug}
              href={`/learn/${a.slug}`}
              className="group block py-8 transition-colors"
            >
              <div className="flex items-center gap-4 text-xs text-[#A4B494]/60 mb-3">
                <span>{formatDate(a.date)}</span>
                {a.readingTime ? <span>· {a.readingTime}</span> : null}
              </div>
              <h2 className="text-2xl font-medium mb-3 group-hover:text-[#A4B494] transition-colors">
                {a.title}
              </h2>
              <p className="text-[#A4B494] leading-relaxed font-light">{a.description}</p>
              <span className="inline-block mt-4 text-sm text-[#8B9E82] group-hover:text-[#A4B494] transition-colors">
                Read →
              </span>
            </Link>
          ))}
        </div>
      </main>

      <footer className="border-t border-white/10 py-10 px-6">
        <div className="max-w-3xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 text-sm text-[#A4B494]/60">
          <p>© 2026 Dose Days. All rights reserved.</p>
          <div className="flex gap-8">
            <Link href="/" className="hover:text-[#FAF8F5] transition-colors">Home</Link>
            <Link href="/privacy" className="hover:text-[#FAF8F5] transition-colors">Privacy</Link>
            <Link href="/terms" className="hover:text-[#FAF8F5] transition-colors">Terms</Link>
          </div>
        </div>
      </footer>
    </div>
  )
}
