import Link from 'next/link'
import { Hero } from '@/features/hero'
import { PostCard } from '@/features/blog/PostCard'
import { Experience } from '@/features/experience'
import { Skills } from '@/features/skills'
import { QuoteCard } from '@/features/quotes/QuoteCard'
import { getAllPosts } from '@/content/posts'
import { quotes } from '@/content/data'
import { SITE } from '@/content/site'
import { Button } from '@/shared/components/ui/Button'
import { PixelCat } from '@/shared/components/PixelCat'

export default function HomePage() {
  const recentPosts = getAllPosts().slice(0, 2)
  const featuredQuote = quotes[0]

  return (
    <main>
      <Hero />

      {/* Experience + Skills */}
      <section className="border-t border-[var(--border)] px-6 py-10">
        <div className="mx-auto max-w-2xl">
          <h2 className="text-[13px] font-black uppercase tracking-[0.2em] text-t3 mb-4">Skills</h2>
          <Skills />
          <h2 className="text-[13px] font-black uppercase tracking-[0.2em] text-t3 mt-8 mb-4">Experience</h2>
          <div className="mt-0">
            <Experience compact limit={3} />
          </div>
          <div className="mt-8 flex justify-center">
            <Link
              href="/work"
              className="flex h-10 items-center bg-t1 px-6 text-[12px] font-black uppercase tracking-[0.08em] text-[var(--bg)] transition-opacity hover:opacity-80"
            >
              Show all
            </Link>
          </div>
        </div>
      </section>

      {/* Recent Posts */}
      <section className="border-t border-[var(--border)] px-6 py-10">
        <div className="mx-auto max-w-2xl">
          <div className="mb-6 flex items-baseline justify-between">
            <h2 className="text-[13px] font-black uppercase tracking-[0.2em] text-t3">Recent Posts</h2>
            <Link href="/blog" className="text-[12px] font-bold text-t2 transition-colors hover:text-t1">
              View all →
            </Link>
          </div>
          <div className="flex flex-col gap-3">
            {recentPosts.map((post) => (
              <PostCard key={post.slug} post={post} />
            ))}
          </div>
        </div>
      </section>

      {/* Quote */}
      {featuredQuote && (
        <section className="border-t border-[var(--border)] px-6 py-10">
          <div className="mx-auto max-w-2xl">
            <QuoteCard quote={featuredQuote} />
          </div>
        </section>
      )}

      {/* Cat + CTA */}
      <section className="border-t border-[var(--border)] px-6 py-6">
        <div className="mx-auto max-w-2xl flex items-end gap-4">
          <div className="flex-1 min-w-0">
            <PixelCat />
          </div>
          <div className="shrink-0 flex gap-2 pb-1">
            <Button href={`mailto:${SITE.email}`} external variant="solid">Email me</Button>
            <Button href="/resume">Resume</Button>
          </div>
        </div>
      </section>
    </main>
  )
}
