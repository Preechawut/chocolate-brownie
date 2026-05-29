export default function Loading() {
  return (
    <div className="flex min-h-[60vh] flex-col items-center justify-center gap-3 px-6">
      <span className="h-7 w-7 bg-t1 animate-spin" />
      <span className="text-[11px] font-mono uppercase tracking-[0.18em] text-t3">Loading</span>
    </div>
  )
}
