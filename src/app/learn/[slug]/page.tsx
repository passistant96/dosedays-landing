import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { getArticle, getArticleSlugs } from '@/lib/learn'

const SITE = 'https://dosedays.me'
const APP_STORE = 'https://apps.apple.com/app/id6758736481'

type Params = { params: Promise<{ slug: string }> }

export function generateStaticParams() {
  return getArticleSlugs().map((slug) => ({ slug }))
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = await params
  let article
  try {
    article = getArticle(slug)
  } catch {
    return {}
  }
  const url = `${SITE}/learn/${slug}`
  return {
    title: article.title,
    description: article.description,
    keywords: article.keywords,
    alternates: { canonical: `/learn/${slug}` },
    openGraph: {
      title: article.title,
      description: article.description,
      url,
      type: 'article',
      images: ['/og-image.png'],
    },
    twitter: {
      card: 'summary_large_image',
      title: article.title,
      description: article.description,
      images: ['/og-image.png'],
    },
  }
}

function formatDate(iso: string) {
  return new Date(iso + 'T00:00:00').toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })
}

export default async function ArticlePage({ params }: Params) {
  const { slug } = await params
  let article
  try {
    article = getArticle(slug)
  } catch {
    notFound()
  }

  const url = `${SITE}/learn/${slug}`
  const jsonLd: Record<string, unknown>[] = [
    {
      '@context': 'https://schema.org',
      '@type': 'Article',
      headline: article.title,
      description: article.description,
      datePublished: article.date,
      dateModified: article.date,
      mainEntityOfPage: url,
      author: { '@type': 'Organization', name: 'Dose Days' },
      publisher: { '@type': 'Organization', name: 'Dose Days', url: SITE },
    },
  ]
  if (article.faqs.length) {
    jsonLd.push({
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: article.faqs.map((f) => ({
        '@type': 'Question',
        name: f.question,
        acceptedAnswer: { '@type': 'Answer', text: f.answer },
      })),
    })
  }

  return (
    <div className="min-h-screen bg-[#1a1f16] text-[#FAF8F5]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <nav className="border-b border-white/5">
        <div className="max-w-2xl mx-auto px-6 py-6 flex items-center justify-between">
          <Link href="/learn" className="text-sm text-[#A4B494] hover:text-[#FAF8F5] transition-colors">
            ← All guides
          </Link>
          <a
            href={APP_STORE}
            className="text-sm px-5 py-2 bg-[#8B9E82] text-[#1a1f16] rounded-full hover:bg-[#A4B494] transition-colors font-medium"
          >
            Download
          </a>
        </div>
      </nav>

      <article className="max-w-2xl mx-auto px-6 pt-16 pb-12">
        <div className="flex items-center gap-4 text-xs text-[#A4B494]/60 mb-5">
          <span>{formatDate(article.date)}</span>
          {article.readingTime ? <span>· {article.readingTime}</span> : null}
        </div>
        <h1 className="text-3xl md:text-4xl font-normal leading-[1.15] tracking-tight mb-10">
          {article.title}
        </h1>
        <div
          className="article"
          dangerouslySetInnerHTML={{ __html: article.html }}
        />
      </article>

      <section className="px-6 pb-24">
        <div className="max-w-2xl mx-auto rounded-2xl border border-white/10 bg-[#222a1d] p-8 md:p-10 text-center">
          <h2 className="text-2xl md:text-3xl font-normal mb-4">
            Track your protocol with <span className="italic text-[#A4B494]">Dose Days</span>
          </h2>
          <p className="text-[#A4B494] leading-relaxed mb-8 max-w-md mx-auto font-light">
            Log doses, intentions and moods in seconds. Watch the patterns emerge across your whole
            cycle. Free to start, all data on your device.
          </p>
          <a
            href={APP_STORE}
            className="inline-flex items-center gap-3 px-8 py-4 bg-[#8B9E82] text-[#1a1f16] rounded-full text-lg font-medium hover:bg-[#A4B494] transition-colors"
          >
            <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
              <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
            </svg>
            Download on the App Store
          </a>
        </div>
      </section>

      <footer className="border-t border-white/10 py-10 px-6">
        <div className="max-w-2xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 text-sm text-[#A4B494]/60">
          <p>© 2026 Dose Days. All rights reserved.</p>
          <div className="flex gap-8">
            <Link href="/learn" className="hover:text-[#FAF8F5] transition-colors">Learn</Link>
            <Link href="/privacy" className="hover:text-[#FAF8F5] transition-colors">Privacy</Link>
            <Link href="/terms" className="hover:text-[#FAF8F5] transition-colors">Terms</Link>
          </div>
        </div>
      </footer>
    </div>
  )
}
