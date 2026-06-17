'use client'

import { useState } from 'react'
import { Badge } from '@/shared/components/ui/Badge'
import { Button } from '@/shared/components/ui/Button'
import { Checkbox } from '@/shared/components/ui/Checkbox'
import { Dropdown } from '@/shared/components/ui/Dropdown'
import { QuoteCard } from '@/features/quotes/QuoteCard'
import { RepoCard } from '@/features/repos/RepoCard'
import { Skills } from '@/features/skills'

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="border-t border-[var(--border)] px-6 py-10">
      <div className="mx-auto max-w-2xl">
        <p className="section-heading mb-6">{title}</p>
        {children}
      </div>
    </section>
  )
}

function Label({ children }: { children: React.ReactNode }) {
  return <p className="mt-2 text-[10px] font-mono text-t3">{children}</p>
}

const COLORS = [
  { token: '--bg',           label: 'Background',      hex: '#ffffff / #111111' },
  { token: '--bg-soft',      label: 'Background Soft', hex: '#f5f5f5 / #1a1a1a' },
  { token: '--bg-mute',      label: 'Background Mute', hex: '#ebebeb / #222222' },
  { token: '--surface',      label: 'Surface',         hex: '#ffffff / #161616' },
  { token: '--t1',           label: 'Text Primary',    hex: '#111111 / #f0ede8' },
  { token: '--t2',           label: 'Text Secondary',  hex: '#5f5f5a / #8a8780' },
  { token: '--t3',           label: 'Text Tertiary',   hex: '#a5a29b / #4a4845' },
]

const BORDERS = [
  { token: '--border',        label: 'Border' },
  { token: '--border2',       label: 'Border Strong' },
  { token: '--border-strong', label: 'Border Bolder' },
]

const DROPDOWN_OPTIONS = [
  { value: 'go', label: 'Go' },
  { value: 'typescript', label: 'TypeScript' },
  { value: 'python', label: 'Python' },
  { value: 'dart', label: 'Dart' },
  { value: 'nextjs', label: 'Next.js' },
  { value: 'react', label: 'React' },
]

export default function DesignPage() {
  const [dropdownVal, setDropdownVal] = useState('')
  return (
    <main>
      {/* Header */}
      <section className="px-6">
        <div className="mx-auto max-w-2xl py-10">
          <p className="section-heading">Design System</p>
          <h1 className="text-3xl font-black tracking-[-0.04em] text-t1 mb-1">Tokens & Components</h1>
          <p className="text-[14px] text-t2">Colors, typography, and UI components used throughout this site.</p>
        </div>
      </section>

      {/* Colors */}
      <Section title="Colors">
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
          {COLORS.map(({ token, label, hex }) => (
            <div key={token}>
              <div className="h-10 w-full border border-[var(--border)]" style={{ background: `var(${token})` }} />
              <p className="mt-1.5 text-[12px] font-medium text-t1">{label}</p>
              <p className="text-[10px] font-mono text-t3">{token}</p>
              <p className="text-[10px] font-mono text-t3">{hex}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Grid */}
      <Section title="Grid Background">
        <div className="h-32 w-full border border-[var(--border)]" style={{
          background: `
            repeating-linear-gradient(0deg,  transparent 0 63px, var(--grid-line) 63px 64px),
            repeating-linear-gradient(90deg, transparent 0 63px, var(--grid-line) 63px 64px),
            var(--surface)`
        }} />
        <Label>repeating-linear-gradient grid — 64px cells — var(--grid-line)</Label>
      </Section>

      {/* Borders */}
      <Section title="Borders">
        <div className="flex flex-col gap-4">
          {BORDERS.map(({ token, label }) => (
            <div key={token} className="flex items-center gap-4">
              <div className="w-20 shrink-0" style={{ borderTop: `1px solid var(${token})` }} />
              <span className="text-[13px] font-medium text-t1">{label}</span>
              <span className="font-mono text-[10px] text-t3">{token}</span>
            </div>
          ))}
        </div>
      </Section>

      {/* Typography */}
      <Section title="Typography">
        <div className="space-y-6">
          <div>
            <h1 className="text-3xl font-black tracking-[-0.04em] text-t1">Heading 1</h1>
            <Label>text-3xl font-black tracking-[-0.04em]</Label>
          </div>
          <div>
            <h2 className="text-xl font-black tracking-[-0.03em] text-t1">Heading 2</h2>
            <Label>text-xl font-black tracking-[-0.03em]</Label>
          </div>
          <div>
            <h3 className="text-[15px] font-bold text-t1">Heading 3</h3>
            <Label>text-[15px] font-bold</Label>
          </div>
          <div>
            <p className="section-heading mb-0">Section Heading</p>
            <Label>section-heading — 13px, 900, uppercase, tracking-[0.2em], text-t3</Label>
          </div>
          <div>
            <p className="text-[15px] leading-7 text-t2">Body — 15px regular with comfortable line height for reading longer paragraphs of text content.</p>
            <Label>text-[15px] leading-7 text-t2</Label>
          </div>
          <div>
            <p className="text-[14px] text-t2">Small body — 14px for secondary descriptions.</p>
            <Label>text-[14px] text-t2</Label>
          </div>
          <div>
            <p className="text-[11px] font-bold uppercase tracking-[0.12em] text-t3">Caption Label</p>
            <Label>text-[11px] font-bold uppercase tracking-[0.12em] text-t3</Label>
          </div>
        </div>
      </Section>

      {/* Badge */}
      <Section title="Badge">
        <div className="space-y-4">
          <div>
            <div className="flex flex-wrap gap-2">
              <Badge>Default</Badge>
              <Badge>Next.js</Badge>
              <Badge>TypeScript</Badge>
            </div>
            <Label>size="md" (default)</Label>
          </div>
          <div>
            <div className="flex flex-wrap gap-2">
              <Badge size="sm">Small</Badge>
              <Badge size="sm">React</Badge>
              <Badge size="sm">Docker</Badge>
            </div>
            <Label>size="sm"</Label>
          </div>
          <div>
            <div className="flex flex-wrap gap-2">
              <span className="inline-flex items-center gap-1 border border-emerald-500/40 bg-emerald-500/10 px-2 py-[2px] text-[10px] font-bold text-emerald-500">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />Working
              </span>
              <span className="inline-flex items-center gap-1 border border-emerald-500/30 bg-emerald-500/10 px-2.5 py-0.5 text-[10px] font-bold text-emerald-500">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />Available for work
              </span>
            </div>
            <Label>Status badges — emerald</Label>
          </div>
        </div>
      </Section>

      {/* Button */}
      <Section title="Button">
        <div className="space-y-4">
          <div>
            <div className="flex flex-wrap gap-3">
              <Button variant="solid">Solid</Button>
              <Button variant="outline">Outline</Button>
            </div>
            <Label>size="md" (default)</Label>
          </div>
          <div>
            <div className="flex flex-wrap gap-3">
              <Button variant="solid" size="sm">Solid SM</Button>
              <Button variant="outline" size="sm">Outline SM</Button>
            </div>
            <Label>size="sm"</Label>
          </div>
          <div>
            <div className="flex flex-wrap gap-3">
              <button className="flex h-10 items-center bg-t1 px-6 text-[12px] font-black uppercase tracking-[0.08em] text-[var(--bg)] transition-opacity hover:opacity-80">
                CTA Button
              </button>
            </div>
            <Label>CTA — bg-t1 text-[var(--bg)] h-10 px-6 uppercase</Label>
          </div>
        </div>
      </Section>

      {/* Checkbox */}
      <Section title="Checkbox">
        <div className="flex flex-col gap-3">
          <Checkbox checked={true} onChange={() => {}} label="Checked state" />
          <Checkbox checked={false} onChange={() => {}} label="Unchecked state" />
          <Checkbox checked={true} onChange={() => {}} label="Disabled" disabled />
        </div>
        <Label>Checkbox — square, no border-radius, theme-consistent</Label>
      </Section>

      {/* Quote Card */}
      <Section title="Quote Card">
        <QuoteCard quote={{ id: 'demo', text: 'Simplicity is the soul of efficiency.', author: 'Austin Freeman' }} />
        <Label>Spotlight reveal on hover — circle follows cursor — opposite theme color</Label>
      </Section>

      {/* Repo Card */}
      <Section title="Repo Card">
        <RepoCard
          repo={{
            id: 'demo',
            name: 'chocolate-brownie',
            description: 'Personal portfolio built with Next.js and Tailwind CSS.',
            language: 'TypeScript',
            languageColor: '#3178c6',
            tech: ['TypeScript', 'Next.js', 'Tailwind CSS'],
            githubUrl: 'https://github.com',
          }}
        />
        <Label>Click to expand — tech badges + language dot + view source — GitHub icon links out</Label>
      </Section>

      {/* Star button */}
      <Section title="Star Button">
        <button className="text-t3 transition-colors hover:text-t1 group" aria-label="Star">
          <svg
            className="h-8 w-8 transition-transform duration-700 group-hover:rotate-[180deg]"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path d="M12 2 L13.2 10.8 L22 12 L13.2 13.2 L12 22 L10.8 13.2 L2 12 L10.8 10.8 Z" />
          </svg>
        </button>
        <Label>4-point star — hover rotates 180° — used in hero intro dismiss</Label>
      </Section>

      {/* Dropdown */}
      <Section title="Dropdown">
        <div className="max-w-xs space-y-4">
          <div>
            <Dropdown
              value={dropdownVal}
              onChange={setDropdownVal}
              placeholder="— select icon —"
              options={DROPDOWN_OPTIONS}
            />
            <Label>Dropdown — custom select with icon support — click outside closes</Label>
          </div>
          <div>
            <Dropdown
              value="react"
              onChange={() => {}}
              options={DROPDOWN_OPTIONS}
            />
            <Label>selected state</Label>
          </div>
        </div>
      </Section>

      {/* Skills */}
      <Section title="Skills">
        <div className="space-y-6">
          <div>
            <Skills variant="tags" />
            <Label>variant="tags" (default) — compact pill row — used on home page</Label>
          </div>
          <div>
            <Skills variant="grid" />
            <Label>variant="grid" — icon grid with name below — 6→12 cols</Label>
          </div>
        </div>
      </Section>

      {/* Loading */}
      <Section title="Loading">
        <div className="flex flex-col items-center justify-center gap-3 py-10 border border-[var(--border)]">
          <span className="h-7 w-7 bg-t1 animate-spin" />
          <span className="text-[11px] font-mono uppercase tracking-[0.18em] text-t3">Loading</span>
        </div>
        <Label>solid square — bg-t1 — animate-spin — route-level loading.tsx</Label>
      </Section>

      {/* Keyboard */}
      <Section title="Keyboard">
        <div className="flex flex-wrap gap-3">
          {['⌘K', 'ESC', '↑↓', '↵', 'Tab'].map((k) => (
            <kbd key={k}>{k}</kbd>
          ))}
        </div>
      </Section>

      {/* Spacing */}
      <Section title="Spacing Scale">
        <div className="flex flex-wrap items-end gap-4">
          {[1, 2, 3, 4, 6, 8, 10, 12, 16].map((n) => (
            <div key={n} className="flex flex-col items-center gap-1">
              <div className="w-4 bg-t1" style={{ height: `${n * 4}px` }} />
              <span className="text-[10px] font-mono text-t3">{n * 4}</span>
            </div>
          ))}
        </div>
      </Section>
    </main>
  )
}
