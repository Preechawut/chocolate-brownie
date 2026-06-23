'use client'

import { useEffect, useRef, useState } from 'react'
import { useRouter } from 'next/navigation'
import { useCommandPalette } from './CommandPaletteProvider'
import { NAV_LINKS, SOCIALS, SITE } from '@/content/site'

interface Command {
  group: string
  label: string
  sub?: string
  action: string
  external?: boolean
}

const PAGE_SUBS: Record<string, string> = {
  '/':       'Introduction & overview',
  '/work':   'Career & experience',
  '/blog':   'Writing & notes',
  '/resume': 'Experience & skills',
}

const COMMANDS: Command[] = [
  ...NAV_LINKS.map(({ href, label }) => ({
    group: 'Pages', label, sub: PAGE_SUBS[href], action: href,
  })),
  ...SOCIALS.filter(s => s.external).map(({ label, href }) => ({
    group: 'Social', label, action: href, external: true,
  })),
  { group: 'Action', label: 'Send email',      sub: SITE.email,  action: `mailto:${SITE.email}`, external: true },
  { group: 'Action', label: 'Download resume', sub: 'PDF',       action: '/resume.pdf',           external: true },
]

export function CommandPalette() {
  const { open, setOpen } = useCommandPalette()
  const [query, setQuery] = useState('')
  const [activeIdx, setActiveIdx] = useState(0)
  const inputRef = useRef<HTMLInputElement>(null)
  const router = useRouter()

  const filtered = query.trim()
    ? COMMANDS.filter(
        (c) =>
          c.label.toLowerCase().includes(query.toLowerCase()) ||
          c.group.toLowerCase().includes(query.toLowerCase()) ||
          c.sub?.toLowerCase().includes(query.toLowerCase()),
      )
    : COMMANDS

  type Item = Command & { flatIdx: number }
  let counter = 0
  const groups = filtered.reduce<Record<string, Item[]>>((acc, cmd) => {
    const item: Item = { ...cmd, flatIdx: counter++ }
    if (!acc[cmd.group]) acc[cmd.group] = []
    acc[cmd.group].push(item)
    return acc
  }, {})

  useEffect(() => {
    function onKeydown(e: KeyboardEvent) {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault()
        setOpen(true)
      }
    }
    document.addEventListener('keydown', onKeydown)
    return () => document.removeEventListener('keydown', onKeydown)
  }, [setOpen])

  useEffect(() => {
    if (open) {
      setQuery('')
      setActiveIdx(0)
      const t = setTimeout(() => inputRef.current?.focus(), 30)
      return () => clearTimeout(t)
    }
  }, [open])

  function execute(cmd: Command) {
    setOpen(false)
    if (cmd.external) {
      window.open(cmd.action, '_blank', 'noopener')
    } else {
      router.push(cmd.action)
    }
  }

  function onKeyDown(e: React.KeyboardEvent) {
    if (e.key === 'ArrowDown') {
      e.preventDefault()
      setActiveIdx((i) => Math.min(i + 1, filtered.length - 1))
    } else if (e.key === 'ArrowUp') {
      e.preventDefault()
      setActiveIdx((i) => Math.max(i - 1, 0))
    } else if (e.key === 'Enter') {
      e.preventDefault()
      const cmd = filtered[activeIdx]
      if (cmd) execute(cmd)
    } else if (e.key === 'Escape') {
      setOpen(false)
    }
  }

  if (!open) return null

  return (
    <div
      className="palette-backdrop fixed inset-0 z-50 flex items-start justify-center px-4 pt-[18vh] bg-[var(--t1)]/30 backdrop-blur-[2px]"
      onClick={() => setOpen(false)}
    >
      <div
        className="palette-box w-full max-w-[480px] border border-[var(--border-strong)] bg-[var(--surface)] shadow-[0_24px_64px_rgba(0,0,0,0.18)]"
        onClick={(e) => e.stopPropagation()}
        onKeyDown={onKeyDown}
      >
        {/* Input */}
        <div className="flex items-center gap-3 border-b border-[var(--border)] px-4">
          <svg className="h-4 w-4 shrink-0 text-t3" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <circle cx="11" cy="11" r="8" />
            <path d="m21 21-4.35-4.35" />
          </svg>
          <input
            ref={inputRef}
            value={query}
            onChange={(e) => { setQuery(e.target.value); setActiveIdx(0) }}
            placeholder="Type a command or search..."
            className="flex-1 bg-transparent py-4 text-sm text-t1 outline-none placeholder:text-t3"
          />
          <kbd>ESC</kbd>
        </div>

        {/* Results */}
        <div className="palette-scroll max-h-[340px] overflow-y-auto py-1.5">
          {Object.entries(groups).map(([group, items]) => (
            <div key={group}>
              <p className="px-4 pb-1 pt-3 text-[10px] font-black uppercase tracking-[0.2em] text-t3">
                {group}
              </p>
              {items.map((cmd) => (
                <button
                  key={cmd.label}
                  className={`flex w-full items-center gap-3 px-4 py-2.5 text-left transition-colors ${
                    cmd.flatIdx === activeIdx ? 'bg-[var(--bg-soft)]' : 'hover:bg-[var(--bg-soft)]'
                  }`}
                  onClick={() => execute(cmd)}
                  onMouseEnter={() => setActiveIdx(cmd.flatIdx)}
                >
                  <span className="flex-1">
                    <span className="block text-sm font-medium text-t1">{cmd.label}</span>
                    {cmd.sub && <span className="block text-xs text-t3">{cmd.sub}</span>}
                  </span>
                  {cmd.external && (
                    <svg className="h-3.5 w-3.5 shrink-0 text-t3" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                      <polyline points="15,3 21,3 21,9" />
                      <line x1="10" y1="14" x2="21" y2="3" />
                    </svg>
                  )}
                </button>
              ))}
            </div>
          ))}

          {filtered.length === 0 && (
            <p className="px-4 py-8 text-center text-sm text-t3">
              No results for <span className="text-t2">"{query}"</span>
            </p>
          )}
        </div>

        {/* Footer */}
        <div className="flex items-center gap-4 border-t border-[var(--border)] px-4 py-2">
          <span className="flex items-center gap-1.5 text-[10px] text-t3"><kbd>↑↓</kbd> navigate</span>
          <span className="flex items-center gap-1.5 text-[10px] text-t3"><kbd>↵</kbd> select</span>
          <span className="flex items-center gap-1.5 text-[10px] text-t3"><kbd>ESC</kbd> close</span>
        </div>
      </div>
    </div>
  )
}
