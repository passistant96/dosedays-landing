import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { marked } from 'marked'

// File-based content engine for the /learn channel. Each article is a markdown
// file in /content/learn with frontmatter. Read at build time only (the site is
// a static export), so there is no runtime filesystem cost. This is the single
// source the index page, the article pages, and the sitemap all read from, so
// dropping a new .md file is the only step needed to publish an article.

const LEARN_DIR = path.join(process.cwd(), 'content', 'learn')

export type Faq = { question: string; answer: string }

export type ArticleMeta = {
  slug: string
  title: string
  description: string
  date: string // ISO yyyy-mm-dd
  readingTime: string // e.g. "6 min read"
  keywords: string[]
  faqs: Faq[]
}

export type Article = ArticleMeta & { html: string }

function readRaw(slug: string) {
  const full = path.join(LEARN_DIR, `${slug}.md`)
  const file = fs.readFileSync(full, 'utf8')
  return matter(file)
}

function toMeta(slug: string, data: Record<string, unknown>): ArticleMeta {
  return {
    slug,
    title: String(data.title ?? slug),
    description: String(data.description ?? ''),
    date: String(data.date ?? '1970-01-01'),
    readingTime: String(data.readingTime ?? ''),
    keywords: Array.isArray(data.keywords) ? (data.keywords as string[]) : [],
    faqs: Array.isArray(data.faqs) ? (data.faqs as Faq[]) : [],
  }
}

export function getArticleSlugs(): string[] {
  if (!fs.existsSync(LEARN_DIR)) return []
  return fs
    .readdirSync(LEARN_DIR)
    .filter((f) => f.endsWith('.md'))
    .map((f) => f.replace(/\.md$/, ''))
}

export function getArticle(slug: string): Article {
  const { data, content } = readRaw(slug)
  const html = marked.parse(content, { async: false }) as string
  return { ...toMeta(slug, data), html }
}

export function getAllArticles(): ArticleMeta[] {
  return getArticleSlugs()
    .map((slug) => toMeta(slug, readRaw(slug).data))
    .sort((a, b) => (a.date < b.date ? 1 : -1))
}
