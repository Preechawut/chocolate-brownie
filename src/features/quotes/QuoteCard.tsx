'use client'

import { useRef } from 'react'
import type { Quote } from '@/content/data'

export function QuoteCard({ quote }: { quote: Quote }) {
  const overlayRef = useRef<HTMLDivElement>(null)

  const oppBg = 'var(--opp-bg)'
  const oppT1 = 'var(--opp-t1)'
  const oppT3 = 'var(--opp-t3)'

  function onMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    if (!overlayRef.current) return
    const rect = e.currentTarget.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top
    overlayRef.current.style.clipPath = `circle(72px at ${x}px ${y}px)`
  }

  function onMouseLeave() {
    if (!overlayRef.current) return
    overlayRef.current.style.transition = 'clip-path 0.35s ease'
    overlayRef.current.style.clipPath = 'circle(0px at 50% 50%)'
    setTimeout(() => {
      if (overlayRef.current) overlayRef.current.style.transition = ''
    }, 350)
  }

  function onMouseEnter(e: React.MouseEvent<HTMLDivElement>) {
    if (!overlayRef.current) return
    const rect = e.currentTarget.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top
    overlayRef.current.style.transition = ''
    overlayRef.current.style.clipPath = `circle(72px at ${x}px ${y}px)`
  }

  return (
    <div
      className="relative overflow-hidden border border-[var(--border2)] bg-[var(--surface)] p-8 cursor-default select-none min-h-[160px] flex flex-col items-center justify-center"
      onMouseMove={onMouseMove}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      {/* Base layer — text hidden, just holds card height */}
      <div className="text-center">
        <p className="text-[15px] font-medium leading-7 text-transparent">"{quote.text}"</p>
        <p className="mt-2 text-[11px] font-bold uppercase tracking-[0.12em] text-transparent text-right">— {quote.author}</p>
      </div>

      {/* Spotlight overlay */}
      <div
        ref={overlayRef}
        className="pointer-events-none absolute inset-0 p-8 flex items-center justify-center"
        style={{ background: oppBg, clipPath: 'circle(0px at 50% 50%)' }}
      >
        <div className="text-center">
          <p className="text-[15px] font-medium leading-7" style={{ color: oppT1 }}>"{quote.text}"</p>
          <p className="mt-2 text-[11px] font-bold uppercase tracking-[0.12em] text-right" style={{ color: oppT3 }}>— {quote.author}</p>
        </div>
      </div>
    </div>
  )
}
