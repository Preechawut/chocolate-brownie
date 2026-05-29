'use client'

export function PrintButton() {
  return (
    <button
      onClick={() => window.print()}
      className="flex h-9 items-center bg-t1 px-4 text-[12px] font-black uppercase tracking-[0.08em] text-[var(--bg)] transition-opacity hover:opacity-80"
    >
      Print / Save PDF
    </button>
  )
}
