'use client'

import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import { SITE as site, SOCIALS as socials } from '@/content/site'
import { useIntro } from '@/shared/contexts/IntroContext'
import { useTheme } from '@/shared/components/ThemeProvider'

const SOCIAL_ICONS: Record<string, React.ReactNode> = {
  GitHub: (
    <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
    </svg>
  ),
  Twitter: (
    <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  ),
  LinkedIn: (
    <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  ),
  Email: (
    <svg className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
      <rect width="20" height="16" x="2" y="4" rx="0" />
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
    </svg>
  ),
}

export function Hero() {
  const { introDone, setIntroDone } = useIntro()
  const { toggle } = useTheme()
  const triggered = useRef(false)
  const [leaving, setLeaving] = useState(false)

  function dismiss(scrollToTop = false) {
    if (triggered.current) return
    triggered.current = true
    setLeaving(true)
    setTimeout(() => {
      setIntroDone(true)
      if (scrollToTop) window.scrollTo({ top: 0, behavior: 'instant' })
    }, 500)
  }

  useEffect(() => {
    function onScroll() {
      if (window.scrollY > window.innerHeight * 0.9) dismiss()
    }
    function onKeyDown() {
      dismiss(true)
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('keydown', onKeyDown)
    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('keydown', onKeyDown)
    }
  }, []) // eslint-disable-line react-hooks/exhaustive-deps

  if (introDone) {
    return (
      <section className="px-6">
        <div className="mx-auto max-w-2xl py-6">
          <div className="flex items-center gap-5">
            {/* Avatar */}
            <div className="shrink-0">
              {site.avatar ? (
                <Image
                  src={site.avatar}
                  alt={site.name}
                  width={72}
                  height={72}
                  className="rounded-full object-cover"
                />
              ) : (
                <div className="flex h-[72px] w-[72px] items-center justify-center rounded-full bg-[var(--surface)] border border-[var(--border2)] text-xl font-black text-t2">
                  {site.initials}
                </div>
              )}
            </div>

            {/* Info */}
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2 mb-0.5">
                <h1 className="text-[22px] font-black tracking-[-0.03em] text-t1 leading-tight">{site.name}</h1>
              </div>
              <p className="text-[13px] text-t2 mb-3">
                {site.role}
                {site.location && <span className="text-t3"> · {site.location}</span>}
              </p>
              <div className="flex items-center gap-1.5">
                {socials.filter((s) => s.enabled !== false).map(({ label, href, external }) => (
                  <a
                    key={label}
                    href={href}
                    target={external ? '_blank' : undefined}
                    rel="noopener noreferrer"
                    aria-label={label}
                    className="flex h-7 w-7 items-center justify-center border border-[var(--border2)] bg-[var(--surface)] text-t2 transition-colors hover:border-t1 hover:bg-t1 hover:text-[var(--bg)]"
                  >
                    {SOCIAL_ICONS[label]}
                  </a>
                ))}
                <a
                  href="/resume.pdf"
                  className="ml-1 flex h-7 items-center border border-[var(--border2)] bg-[var(--surface)] px-3 text-[11px] font-bold text-t2 transition-colors hover:border-t1 hover:bg-t1 hover:text-[var(--bg)]"
                >
                  Resume ↗
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
  }

  return (
    <>
      <button
        onClick={toggle}
        aria-label="Toggle theme"
        className="fixed right-6 top-6 z-50 flex h-8 w-8 items-center justify-center border border-[var(--border2)] bg-[var(--surface)] text-t2 transition-colors hover:border-[var(--border-strong)] hover:text-t1"
      >
        <svg className="hidden h-3.5 w-3.5 dark:block" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <circle cx="12" cy="12" r="4" />
          <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41" />
        </svg>
        <svg className="block h-3.5 w-3.5 dark:hidden" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
        </svg>
      </button>

      <section
        className={`relative -mt-[60px] flex min-h-screen flex-col items-center justify-center px-6 text-center transition-opacity duration-500 ${leaving ? 'opacity-0' : 'opacity-100'}`}
      >
        <div className="max-w-3xl animate-fade-up">
          {site.available && (
            <div className="mb-6 flex justify-center">
              <span className="flex items-center gap-1.5 border border-emerald-500/30 bg-emerald-500/10 px-3 py-1 text-[11px] font-bold text-emerald-500">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                Available for work
              </span>
            </div>
          )}

          <h1 className="mb-4 text-[clamp(42px,8vw,96px)] font-black leading-[0.95] tracking-[-0.04em] text-t1">
            {site.name}
          </h1>

          <p className="mb-6 text-[clamp(16px,2.5vw,22px)] font-medium text-t2">
            {site.role}
          </p>

          {/* <p className="mx-auto mb-10 max-w-[520px] text-[15px] leading-7 text-t3">
            {site.bio}
          </p> */}

          <div className="flex items-center justify-center gap-2">
            {socials.filter((s) => s.enabled !== false).map(({ label, href, external }) => (
              <a
                key={label}
                href={href}
                target={external ? '_blank' : undefined}
                rel="noopener noreferrer"
                aria-label={label}
                className="flex h-9 w-9 items-center justify-center border border-[var(--border2)] bg-[var(--surface)] text-t2 transition-colors hover:border-t1 hover:bg-t1 hover:text-[var(--bg)]"
              >
                {SOCIAL_ICONS[label]}
              </a>
            ))}
          </div>
        </div>

        {/* Press any key */}
        <button
          onClick={() => dismiss(true)}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-fade-in"
          aria-label="Enter"
          style={{ animation: 'fadeIn 0.4s ease both, blink 1.4s step-start 1s infinite' }}
        >
          <span className="font-mono text-[11px] tracking-[0.18em] uppercase text-t3">
            press any key to continue
          </span>
        </button>
      </section>
    </>
  )
}
