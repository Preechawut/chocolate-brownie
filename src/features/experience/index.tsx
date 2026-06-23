'use client'

import { useState } from 'react'
import { experiences as allExperiences } from '@/content/data'
import { Badge } from '@/shared/components/ui/Badge'

export function Experience({ compact, limit, blurred, simplified }: { compact?: boolean; limit?: number; blurred?: boolean; simplified?: boolean } = {}) {
  const experiences = limit ? allExperiences.slice(0, limit) : allExperiences
  const [expandedId, setExpandedId] = useState<string | null>(null)

  return (
    <div id="experience" className="space-y-5">
      {experiences.map((exp, index) => {
        const isExpanded = expandedId === exp.id
        const showDetails = !compact || isExpanded

        return (
          <div key={exp.id} className="flex gap-4">
            <div className="mt-[6px] shrink-0">
              <span className={`block h-2.5 w-2.5 ${exp.current ? 'bg-t1' : 'bg-[var(--border2)]'}`} />
            </div>

            <div className="flex-1 pb-2">
              <button
                type="button"
                onClick={compact ? () => setExpandedId(isExpanded ? null : exp.id) : undefined}
                className={`block w-full text-left ${compact ? 'group cursor-pointer' : 'cursor-default'}`}
                disabled={!compact}
              >
                <div className="flex flex-wrap items-start justify-between gap-2">
                  <div>
                    <div className="flex items-center gap-2">
                      <h3 className="text-[14px] font-black text-t1 flex items-center gap-1.5">
                        <span
                          className={
                            (blurred && index === 0) || exp.current
                              ? 'blur-[4px] hover:blur-none transition-[filter] duration-300 cursor-pointer select-none'
                              : ''
                          }
                        >
                          {exp.company}
                        </span>
                        {compact && (
                          <span
                            className={`inline-block text-[18px] leading-none text-t3 transition-all duration-200 ${
                              isExpanded
                                ? 'opacity-100 translate-x-0 rotate-90'
                                : 'opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0'
                            }`}
                          >
                            ›
                          </span>
                        )}
                      </h3>
                    </div>
                    <p className="text-[13px] font-medium text-t2">{exp.role}</p>
                  </div>
                  <span className="whitespace-nowrap text-xs text-t3">{exp.period}</span>
                </div>

                {compact && !isExpanded && exp.description && (
                  <p className="mt-1 text-[13px] leading-5 text-t3">{exp.description}</p>
                )}
              </button>

              {showDetails && (
                <>
                  {!simplified && exp.projects && exp.projects.length > 0 ? (
                    <div className="mt-4 mb-4 space-y-5">
                      {exp.projects.map((proj) => (
                        <div key={proj.name} className="border-l-2 border-[var(--border2)] pl-3.5 py-0.5">
                          <h4 className="text-[13px] font-bold text-t1 mb-1.5">{proj.name}</h4>
                          {proj.description && (
                            <p className="text-[12px] text-t3 mb-2">{proj.description}</p>
                          )}
                          <ul className="space-y-1.5">
                            {proj.bullets.map((b) => (
                              <li key={b} className="flex items-start gap-2 text-[13px] leading-6 text-t2">
                                <span className="mt-[10px] h-1 w-1 shrink-0 bg-t3" />
                                <span>{b}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <ul className="mt-3 mb-3 space-y-1.5">
                      {exp.bullets.map((b) => (
                        <li key={b} className="flex items-start gap-2.5 text-sm leading-6 text-t2">
                          <span className="mt-[10px] h-1 w-1 shrink-0 bg-t3" />
                          {b}
                        </li>
                      ))}
                    </ul>
                  )}
                  <div className="flex flex-wrap gap-1.5">
                    {exp.tags.map((tag) => (
                      <Badge key={tag}>{tag}</Badge>
                    ))}
                  </div>
                </>
              )}
            </div>
          </div>
        )
      })}
    </div>
  )
}
