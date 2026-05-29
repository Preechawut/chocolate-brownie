import type { Project } from '@/content/data'
import { Badge } from '@/shared/components/ui/Badge'

export function ProjectCard({ project }: { project: Project }) {
  return (
    <div className="border-b border-[var(--border)] py-6 last:border-b-0">
      <div className="mb-3 flex items-start gap-3">
        <div className="flex-1 min-w-0">
          <h3 className="text-[15px] font-bold leading-snug text-t1">
            {project.name}
            <span className="font-normal text-t2"> — {project.tagline}</span>
          </h3>
        </div>
        <a
          href={project.href}
          target="_blank"
          rel="noopener"
          aria-label="Open project"
          className="shrink-0 mt-0.5 text-t3 transition-colors hover:text-t1"
        >
          <svg className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
            <polyline points="15,3 21,3 21,9" /><line x1="10" y1="14" x2="21" y2="3" />
          </svg>
        </a>
      </div>

      <p className="mb-4 text-sm leading-7 text-t2">{project.description}</p>

      <ul className="mb-4 space-y-1.5">
        {project.features.map((f) => (
          <li key={f} className="flex items-start gap-2.5 text-sm leading-6 text-t2">
            <span className="mt-[10px] h-1 w-1 shrink-0 bg-t3" />
            {f}
          </li>
        ))}
      </ul>

      <div className="flex flex-wrap gap-1.5">
        {project.tags.map((tag) => (
          <Badge key={tag}>{tag}</Badge>
        ))}
      </div>
    </div>
  )
}
