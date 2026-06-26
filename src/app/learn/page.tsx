import type { Metadata } from 'next'
import Link from 'next/link'
import { getAllArticles, type ArticleMeta } from '@/lib/learn'

const APP_STORE = 'https://apps.apple.com/app/apple-store/id6758736481?pt=128512119&ct=Learn%20Hub&mt=8'

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
    url: 'https://www.dosedays.me/learn',
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

// Articles are bordered, hover-lit cards so they read unmistakably as the
// clickable elements, distinct from the static masthead and the section labels.
function ArticleCard({ a }: { a: ArticleMeta }) {
  return (
    <Link
      href={`/learn/${a.slug}`}
      className="group block rounded-2xl border border-white/10 bg-white/[0.015] px-6 py-6 transition-colors hover:border-[#8B9E82]/40 hover:bg-white/[0.035]"
    >
      <div className="flex items-center gap-3 text-xs text-[#A4B494]/55 mb-3">
        <span>{formatDate(a.date)}</span>
        {a.readingTime ? <span>· {a.readingTime}</span> : null}
      </div>
      <h3 className="text-xl md:text-2xl font-medium leading-snug mb-3 group-hover:text-[#A4B494] transition-colors">
        {a.title}
      </h3>
      <p className="text-[#A4B494] leading-relaxed font-light">{a.description}</p>
      <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-[#8B9E82] group-hover:gap-2.5 transition-all">
        Read guide <span aria-hidden>→</span>
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

      {/* Masthead: the page title, clearly a heading and not interactive. The
          bottom border closes it off so it reads as distinct from the list. */}
      <header className="max-w-3xl mx-auto px-6 pt-24 pb-14 border-b border-white/10">
        <p className="text-xs uppercase tracking-[0.2em] text-[#8B9E82] mb-5">Dose Days · Learn</p>
        <h1 className="text-5xl md:text-6xl font-normal leading-[1.04] tracking-tight mb-6">
          Microdosing, <span className="italic text-[#A4B494]">explained</span>
        </h1>
        <p className="text-lg md:text-xl text-[#A4B494] leading-relaxed max-w-xl font-light">
          Clear, practical guides that take you from the basics to the science. Educational only,
          never medical advice.
        </p>
      </header>

      <main className="max-w-3xl mx-auto px-6 pb-24">
        {sections.map((s) => (
          <section key={s.tier} className="mt-16">
            <div className="mb-6">
              <div className="flex items-baseline gap-3">
                <h2 className="text-sm uppercase tracking-[0.16em] text-[#8B9E82]">{s.label}</h2>
                <span className="text-xs text-[#A4B494]/40 tabular-nums">{s.items.length}</span>
              </div>
              {s.blurb ? <p className="mt-2 text-sm text-[#A4B494]/55">{s.blurb}</p> : null}
            </div>
            <div className="grid gap-3">
              {s.items.map((a) => (
                <ArticleCard key={a.slug} a={a} />
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
