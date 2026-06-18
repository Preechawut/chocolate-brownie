'use client'

import { useState } from 'react'
import type { Repo } from '@/content/data'
import { Badge } from '@/shared/components/ui/Badge'

export function RepoCard({ repo }: { repo: Repo }) {
  const [expanded, setExpanded] = useState(false)

  return (
    <div className="border border-[var(--border2)] bg-[var(--surface)] transition-colors hover:border-t1">
      <button
        type="button"
        onClick={() => setExpanded((v) => !v)}
        className="group flex w-full items-start justify-between gap-3 p-4 text-left"
      >
        <div className="min-w-0 flex-1">
          <div className="flex items-center gap-2">
            <span className={`text-[11px] text-t3 transition-transform duration-200 ${expanded ? 'rotate-90' : ''}`}>
              ›
            </span>
            <span className="text-[14px] font-bold text-t1">{repo.name}</span>
          </div>
          <p className="mt-1 pl-4 text-[13px] leading-5 text-t2">{repo.description}</p>
        </div>

        <a
          href={repo.githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="View source on GitHub"
          className="mt-0.5 shrink-0 text-t3 transition-colors hover:text-t1"
          onClick={(e) => e.stopPropagation()}
        >
          <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
          </svg>
        </a>
      </button>

      {expanded && (
        <div className="space-y-3 border-t border-[var(--border)] px-4 py-3 pl-8">
          <div className="flex flex-wrap gap-1.5">
            {repo.tech.map((t) => (
              <Badge key={t} size="sm">{t}</Badge>
            ))}
          </div>
          <div className="flex items-center justify-between">
            <span className="flex items-center gap-1.5 text-[12px] text-t3">
              <span className="h-2.5 w-2.5 rounded-full" style={{ backgroundColor: repo.languageColor }} />
              {repo.language}
            </span>
            <a
              href={repo.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[12px] font-bold text-t2 transition-colors hover:text-t1"
            >
              View source ↗
            </a>
          </div>
        </div>
      )}
    </div>
  )
}
