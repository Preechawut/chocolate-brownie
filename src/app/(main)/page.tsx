import Link from 'next/link'
import { Hero } from '@/features/hero'
import { PostCard } from '@/features/blog/PostCard'
import { Experience } from '@/features/experience'
import { Skills } from '@/features/skills'
import { Repos } from '@/features/repos'
import { QuoteCard } from '@/features/quotes/QuoteCard'
import { getAllPosts } from '@/content/posts'
import { quotes } from '@/content/data'

function SectionHeading({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  return (
    <h2 className={`text-[20px] font-black tracking-[-0.01em] text-t1 ${className}`}>
      {children}
    </h2>
  )
}

export default function HomePage() {
  const recentPosts = getAllPosts().slice(0, 2)
  const featuredQuote = quotes[0]

  return (
    <main>
      <Hero />

      {/* Skills */}
      <section className="border-t border-[var(--border)] px-6 py-10">
        <div className="mx-auto max-w-2xl">
          <SectionHeading className="mb-5">Skills</SectionHeading>
          <Skills />
        </div>
      </section>

      {/* Experience */}
      <section className="border-t border-[var(--border)] px-6 py-10">
        <div className="mx-auto max-w-2xl">
          <SectionHeading className="mb-5">Experience</SectionHeading>
          <div className="mt-0">
            <Experience limit={3} blurred simplified />
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
          <SectionHeading className="mb-3">Repos</SectionHeading>
          <Repos />
        </div>
      </section>

      {/* Recent Posts */}
      <section className="border-t border-[var(--border)] px-6 py-10">
        <div className="mx-auto max-w-2xl">
          <div className="mb-6 flex items-center justify-between">
            <SectionHeading>Recent Posts</SectionHeading>
            {recentPosts.length > 0 && (
              <Link href="/blog" className="text-[12px] font-bold text-t2 transition-colors hover:text-t1">
                View all →
              </Link>
            )}
          </div>
          {recentPosts.length > 0 ? (
            <div className="flex flex-col gap-3">
              {recentPosts.map((post) => (
                <PostCard key={post.slug} post={post} />
              ))}
            </div>
          ) : (
            <p className="py-4 text-center text-sm text-t3">Coming soon...</p>
          )}
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

    </main>
  )
}
