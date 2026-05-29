import Link from 'next/link'
import type { Project } from '@/content/data'
import { Badge } from '@/shared/components/ui/Badge'

export function ProjectRow({ project }: { project: Project }) {
  return (
    <Link
      href={`/work#${project.id}`}
      className="group flex items-start gap-4 border-b border-[var(--border)] py-4 last:border-b-0 transition-colors hover:opacity-80"
    >
      <div className="flex-1 min-w-0">
        <p className="text-[14px] font-bold text-t1 leading-snug">
          {project.name}
          <span className="font-normal text-t2"> — {project.tagline}</span>
        </p>
        <div className="mt-2 flex flex-wrap gap-1.5">
          {project.tags.slice(0, 3).map((tag) => (
            <Badge key={tag} size="sm">{tag}</Badge>
          ))}
          {project.tags.length > 3 && (
            <span className="text-[10px] text-t3 self-center">+{project.tags.length - 3}</span>
          )}
        </div>
      </div>

      <span className="mt-1 shrink-0 text-t3 transition-transform group-hover:translate-x-0.5">→</span>
    </Link>
  )
}
