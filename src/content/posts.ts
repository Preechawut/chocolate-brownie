import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { Marked } from 'marked'
import { markedHighlight } from 'marked-highlight'
import hljs from 'highlight.js'

const POSTS_DIR = path.join(process.cwd(), 'src/content/posts')

const marked = new Marked(
  markedHighlight({
    langPrefix: 'hljs language-',
    highlight(code, lang) {
      const language = hljs.getLanguage(lang) ? lang : 'plaintext'
      return hljs.highlight(code, { language }).value
    },
  }),
)

export interface Post {
  slug: string
  title: string
  date: string
  excerpt: string
  readingTime: string
  tags: string[]
}

export interface PostWithContent extends Post {
  contentHtml: string
}

function toDateString(d: unknown): string {
  if (d instanceof Date) return d.toISOString().slice(0, 10)
  if (typeof d === 'string') return d
  return ''
}

function readPost(file: string): Post {
  const slug = file.replace(/\.md$/, '')
  const raw = fs.readFileSync(path.join(POSTS_DIR, file), 'utf8')
  const { data } = matter(raw)
  return {
    slug,
    title: data.title ?? slug,
    date: toDateString(data.date),
    excerpt: data.excerpt ?? '',
    readingTime: data.readingTime ?? '',
    tags: data.tags ?? [],
  }
}

export function getAllPosts(): Post[] {
  if (!fs.existsSync(POSTS_DIR)) {
    return []
  }
  const files = fs.readdirSync(POSTS_DIR).filter((f) => f.endsWith('.md'))
  return files
    .map(readPost)
    .sort((a, b) => b.date.localeCompare(a.date))
}

export function getPost(slug: string): PostWithContent | null {
  const filePath = path.join(POSTS_DIR, `${slug}.md`)
  if (!fs.existsSync(filePath)) return null
  const raw = fs.readFileSync(filePath, 'utf8')
  const { data, content } = matter(raw)
  const html = marked.parse(content, { async: false }) as string
  return {
    slug,
    title: data.title ?? slug,
    date: toDateString(data.date),
    excerpt: data.excerpt ?? '',
    readingTime: data.readingTime ?? '',
    tags: data.tags ?? [],
    contentHtml: html,
  }
}
