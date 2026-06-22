import type { Metadata } from 'next'
import Link from 'next/link'
import { getAllArticles, type ArticleMeta } from '@/lib/learn'

const APP_STORE = 'https://apps.apple.com/app/id6758736481'

// Section headings for the learning path, keyed by tier (see the Learn Hub
// Content Architecture roadmap). Any tier with no articles is skipped; anything
// unsorted falls into "More guides".
const TIERS: { tier: number; label: string; blurb: string }[] = [
  { tier: 0, label: 'Start here', blurb: 'New to microdosing? Begin with the basics.' },
  { tier: 1, label: 'Getting started', blurb: 'Protocols, schedules, and your first steps.' },
  { tier: 2, label: 'Practising', blurb: 'Getting more from a protocol once you are going.' },
  { tier: 3, label: 'Substances', blurb: 'What people microdose, and how they differ.' },
  { tier: 4, label: 'Benefits and use cases', blurb: 'What people report, with the honest caveats.' },
  { tier: 5, label: 'The science', blurb: 'The mechanisms and the real evidence picture.' },
  { tier: 99, label: 'More guides', blurb: '' },
]

export const metadata: Metadata = {
  title: 'Learn: Microdosing Protocols, Schedules & Tracking',
  description:
    'Clear, practical guides to microdosing, from the basics to the science. Protocols like Fadiman and the Stamets stack, integration days, and how to track what actually works for you.',
  alternates: { canonical: '/learn' },
  openGraph: {
    title: 'Learn: Microdosing Protocols, Schedules & Tracking',
    description:
      'Clear, practical guides to microdosing, from the basics to the science.',
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

function ArticleRow({ a }: { a: ArticleMeta }) {
  return (
    <Link href={`/learn/${a.slug}`} className="group block py-8 transition-colors">
      <div className="flex items-center gap-4 text-xs text-[#A4B494]/60 mb-3">
        <span>{formatDate(a.date)}</span>
        {a.readingTime ? <span>· {a.readingTime}</span> : null}
      </div>
      <h3 className="text-2xl font-medium mb-3 group-hover:text-[#A4B494] transition-colors">
        {a.title}
      </h3>
      <p className="text-[#A4B494] leading-relaxed font-light">{a.description}</p>
      <span className="inline-block mt-4 text-sm text-[#8B9E82] group-hover:text-[#A4B494] transition-colors">
        Read →
      </span>
    </Link>
  )
}

export default function LearnIndex() {
  const articles = getAllArticles()
  const sections = TIERS.map((t) => ({
    ...t,
    items: articles.filter((a) => a.tier === t.tier),
  })).filter((s) => s.items.length > 0)

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

      <header className="max-w-3xl mx-auto px-6 pt-20 pb-8">
        <p className="text-sm uppercase tracking-[0.18em] text-[#8B9E82] mb-5">Learn</p>
        <h1 className="text-4xl md:text-5xl font-normal leading-[1.1] tracking-tight mb-6">
          Microdosing, <span className="italic text-[#A4B494]">explained</span>
        </h1>
        <p className="text-lg text-[#A4B494] leading-relaxed max-w-xl font-light">
          Clear, practical guides that take you from the basics to the science. Educational only,
          never medical advice.
        </p>
      </header>

      <main className="max-w-3xl mx-auto px-6 pb-24">
        {sections.map((s) => (
          <section key={s.tier} className="mt-16 first:mt-6">
            <div className="mb-2">
              <h2 className="text-sm uppercase tracking-[0.16em] text-[#8B9E82]">{s.label}</h2>
              {s.blurb ? <p className="text-sm text-[#A4B494]/60 mt-2">{s.blurb}</p> : null}
            </div>
            <div className="divide-y divide-white/10 border-t border-white/10">
              {s.items.map((a) => (
                <ArticleRow key={a.slug} a={a} />
              ))}
            </div>
          </section>
        ))}
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
