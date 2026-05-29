import { BlogList } from '@/features/blog/BlogList'
import { getAllPosts } from '@/content/posts'

export default function BlogPage() {
  const posts = getAllPosts()
  return (
    <main>
      <section className="px-6">
        <div className="mx-auto max-w-2xl py-10">
          <p className="section-heading">Writing</p>
          <h1 className="text-3xl font-black tracking-[-0.04em] text-t1 mb-1">Blog</h1>
          <p className="text-[14px] text-t2">Thoughts, tutorials, and notes on engineering and programming.</p>
        </div>
      </section>

      <section className="border-t border-[var(--border)] px-6 pb-14">
        <div className="mx-auto max-w-2xl pt-8">
          <BlogList posts={posts} />
        </div>
      </section>
    </main>
  )
}
