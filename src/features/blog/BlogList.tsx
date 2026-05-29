'use client'

import { useState } from 'react'
import { PostCard } from './PostCard'
import type { Post } from '@/content/posts'

export function BlogList({ posts }: { posts: Post[] }) {
  const [active, setActive] = useState('All')

  const allTags = ['All', ...Array.from(new Set(posts.flatMap((p) => p.tags))).sort()]
  const filtered = active === 'All' ? posts : posts.filter((p) => p.tags.includes(active))

  return (
    <div>
      <div className="mb-8 flex flex-wrap gap-2">
        {allTags.map((tag) => (
          <button
            key={tag}
            onClick={() => setActive(tag)}
            className={`px-3.5 py-1.5 text-[12px] font-medium transition-colors ${
              active === tag
                ? 'bg-t1 text-[var(--bg)]'
                : 'border border-[var(--border2)] bg-[var(--bg-soft)] text-t2 hover:border-t1 hover:text-t1'
            }`}
          >
            {tag}
          </button>
        ))}
      </div>

      <div>
        {filtered.length > 0 ? (
          filtered.map((post) => <PostCard key={post.slug} post={post} />)
        ) : (
          <p className="py-10 text-center text-sm text-t3">No posts in this category.</p>
        )}
      </div>
    </div>
  )
}
