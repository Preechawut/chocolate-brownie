'use client'

import React from 'react'
import { skills } from '@/content/data'
import { Badge } from '@/shared/components/ui/Badge'
interface SkillsProps {
  variant?: 'tags' | 'grid'
}

export function Skills({ variant = 'tags' }: SkillsProps) {
  if (variant === 'grid') {
    return (
      <div className="grid grid-cols-3 gap-3 sm:grid-cols-6 md:grid-cols-9">
        {skills.map((s) => {
          return (
            <div
              key={s.id}
              className="flex flex-col items-center justify-center border border-[var(--border)] bg-[var(--bg-soft)] p-4 text-center transition-colors hover:border-t1 group min-h-[64px]"
            >
              <span className="text-[12px] font-bold text-t2 group-hover:text-t1 transition-colors">{s.name}</span>
            </div>
          )
        })}
      </div>
    )
  }

  const categories = Array.from(new Set(skills.map((s) => s.category)))

  return (
    <div id="skills" className="grid grid-cols-[auto_1fr] gap-x-6 gap-y-2.5">
      {categories.map((cat) => (
        <React.Fragment key={cat}>
          <span className="pt-[3px] text-[11px] font-bold uppercase tracking-[0.12em] text-t3 whitespace-nowrap">
            {cat}
          </span>
          <div className="flex flex-wrap gap-1.5">
            {skills.filter((s) => s.category === cat).map((s) => (
              <Badge key={s.id}>{s.name}</Badge>
            ))}
          </div>
        </React.Fragment>
      ))}
    </div>
  )
}

