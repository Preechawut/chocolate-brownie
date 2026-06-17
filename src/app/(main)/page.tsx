import Link from 'next/link'
import { Hero } from '@/features/hero'
import { PostCard } from '@/features/blog/PostCard'
import { Experience } from '@/features/experience'
import { Skills } from '@/features/skills'
import { Repos } from '@/features/repos'
import { QuoteCard } from '@/features/quotes/QuoteCard'
import { getAllPosts } from '@/content/posts'
import { quotes } from '@/content/data'
import { PixelCat } from '@/shared/components/PixelCat'

export default function HomePage() {
  const recentPosts = getAllPosts().slice(0, 2)
  const featuredQuote = quotes[0]

  return (
    <main>
      <Hero />

      {/* Skills */}
      <section className="border-t border-[var(--border)] px-6 py-10">
        <div className="mx-auto max-w-2xl">
          <h2 className="text-[13px] font-black uppercase tracking-[0.08em] text-t1 mb-4">Skills</h2>
          <Skills />
        </div>
      </section>

      {/* Experience */}
      <section className="border-t border-[var(--border)] px-6 py-10">
        <div className="mx-auto max-w-2xl">
          <h2 className="text-[13px] font-black uppercase tracking-[0.08em] text-t1 mb-4">Experience</h2>
          <div className="mt-0">
            <Experience limit={3} />
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

      {/* Repos */}
      <section className="border-t border-[var(--border)] px-6 py-10">
        <div className="mx-auto max-w-2xl">
          <h2 className="text-[13px] font-black uppercase tracking-[0.08em] text-t1 mb-2">Repos</h2>
          <Repos />
        </div>
      </section>

      {/* Recent Posts */}
      <section className="border-t border-[var(--border)] px-6 py-10">
        <div className="mx-auto max-w-2xl">
          <div className="mb-6 flex items-baseline justify-between">
            <h2 className="text-[13px] font-black uppercase tracking-[0.08em] text-t1">Recent Posts</h2>
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

      {/* Cat */}
      <section className="border-t border-[var(--border)] px-6 py-6">
        <div className="mx-auto max-w-2xl">
          <PixelCat />
        </div>
      </section>
    </main>
  )
}
