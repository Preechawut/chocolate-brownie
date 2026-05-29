import Link from 'next/link'
import type { Post } from '@/content/posts'
import { Badge } from '@/shared/components/ui/Badge'

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })
}

export function PostCard({ post }: { post: Post }) {
  return (
    <Link
      href={`/blog/${post.slug}`}
      className="group block border-b border-[var(--border)] py-5 last:border-b-0"
    >
      <div className="flex items-start justify-between gap-6">
        <div className="flex-1 min-w-0">
          <span className="mb-2 block text-[11px] text-t3">{formatDate(post.date)}</span>
          <h3 className="mb-1 text-[15px] font-bold leading-snug text-t1 group-hover:underline group-hover:underline-offset-2">
            {post.title}
          </h3>
          <p className="mb-3 line-clamp-1 text-sm leading-6 text-t2">{post.excerpt}</p>
          <div className="flex flex-wrap gap-1.5">
            {post.tags.slice(0, 2).map((tag) => (
              <Badge key={tag} size="sm">{tag}</Badge>
            ))}
            {post.tags.length > 2 && (
              <span className="text-[11px] text-t3 self-center">+{post.tags.length - 2} more</span>
            )}
          </div>
        </div>
        <span className="shrink-0 whitespace-nowrap pt-0.5 text-sm text-t3 transition-colors group-hover:text-t1">
          Read more →
        </span>
      </div>
    </Link>
  )
}
