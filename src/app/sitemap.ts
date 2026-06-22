import type { MetadataRoute } from 'next'
import { getAllArticles } from '@/lib/learn'

const SITE = 'https://dosedays.me'

export const dynamic = 'force-static'

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages: MetadataRoute.Sitemap = [
    { url: SITE, changeFrequency: 'monthly', priority: 1 },
    { url: `${SITE}/learn`, changeFrequency: 'weekly', priority: 0.8 },
    { url: `${SITE}/privacy`, changeFrequency: 'yearly', priority: 0.3 },
    { url: `${SITE}/terms`, changeFrequency: 'yearly', priority: 0.3 },
  ]

  const articles: MetadataRoute.Sitemap = getAllArticles().map((a) => ({
    url: `${SITE}/learn/${a.slug}`,
    lastModified: a.date,
    changeFrequency: 'monthly',
    priority: 0.7,
  }))

  return [...staticPages, ...articles]
}
