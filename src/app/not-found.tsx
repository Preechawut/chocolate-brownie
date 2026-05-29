import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center px-6">
      <div className="w-full max-w-sm">
        <p className="mb-3 text-[11px] font-black uppercase tracking-[0.2em] text-t3">404</p>
        <h1 className="mb-2 text-3xl font-black tracking-[-0.04em] text-t1">Page not found.</h1>
        <p className="mb-8 text-[14px] text-t2">
          This page doesn't exist or was moved.
        </p>
        <Link
          href="/"
          className="inline-flex h-10 items-center bg-t1 px-6 text-[12px] font-black uppercase tracking-[0.08em] text-[var(--bg)] transition-opacity hover:opacity-80"
        >
          Go home
        </Link>
      </div>
    </div>
  )
}
