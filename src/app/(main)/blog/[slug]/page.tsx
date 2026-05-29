import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { getAllPosts, getPost } from '@/content/posts'
import { SITE } from '@/content/site'
import { Badge } from '@/shared/components/ui/Badge'

interface Props {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return getAllPosts().map((p) => ({ slug: p.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const post = getPost(slug)
  if (!post) return {}
  return { title: `${post.title} — ${SITE.name}`, description: post.excerpt }
}

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params
  const post = getPost(slug)
  if (!post) notFound()

  return (
    <main>
      <article className="px-6">
        <div className="mx-auto max-w-2xl py-10">
          <Link
            href="/blog"
            className="mb-10 flex items-center gap-2 text-[12px] font-bold text-t3 transition-colors hover:text-t1"
          >
            ← Back to Blog
          </Link>

          <div className="mb-4 flex flex-wrap items-center gap-2">
            {post.tags.map((tag) => (
              <Badge key={tag}>{tag}</Badge>
            ))}
          </div>

          <h1 className="mb-4 text-[clamp(24px,4vw,36px)] font-black leading-tight tracking-[-0.04em] text-t1">
            {post.title}
          </h1>

          <div className="mb-10 flex items-center gap-3 text-xs text-t3">
            <span>{formatDate(post.date)}</span>
            <span>·</span>
            <span>{post.readingTime}</span>
          </div>

          <div className="h-px bg-[var(--border)] mb-10" />

          <div
            className="prose-custom text-[15px] leading-8 text-t2"
            dangerouslySetInnerHTML={{ __html: post.contentHtml }}
          />

          <div className="mt-16 border-t border-[var(--border)] pt-10">
            <Link href="/blog" className="text-[13px] font-bold text-t2 transition-colors hover:text-t1">
              ← All posts
            </Link>
          </div>
        </div>
      </article>
    </main>
  )
}
