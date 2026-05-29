'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'
import { useCommandPalette } from './CommandPaletteProvider'
import { useTheme } from './ThemeProvider'
import { useIntro } from '@/shared/contexts/IntroContext'
import { NAV_LINKS, SITE } from '@/content/site'

export function Navbar() {
  const { setOpen } = useCommandPalette()
  const { toggle } = useTheme()
  const { introDone } = useIntro()
  const pathname = usePathname()
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  const isHome = pathname === '/'

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 20)
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => { setMenuOpen(false) }, [pathname])

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  const shown = !isHome || introDone || menuOpen

  return (
    <>
      <nav
        className={`fixed inset-x-0 top-0 z-40 flex h-[60px] items-center px-6 transition-all duration-500 ${
          shown ? 'translate-y-0 opacity-100' : '-translate-y-2 opacity-0 pointer-events-none'
        } ${scrolled || menuOpen ? 'bg-[var(--bg)]/95 backdrop-blur-sm' : ''}`}
      >
        <div className="mx-auto flex w-full max-w-2xl items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 text-[13px] font-black tracking-tight text-t1">
            <span className="inline-block h-4 w-4 shrink-0 bg-t1" />
            {SITE.initials}
          </Link>

          <div className="flex items-center gap-1">
            {/* Nav links — desktop only */}
            <div className="mr-3 hidden items-center md:flex">
              {NAV_LINKS.map(({ href, label }) => (
                <Link
                  key={href}
                  href={href}
                  className={`px-3 py-1.5 text-[13px] font-medium transition-colors ${
                    pathname === href ? 'text-t1' : 'text-t3 hover:text-t1'
                  }`}
                >
                  {label}
                </Link>
              ))}
            </div>

            {/* Theme toggle */}
            <button
              onClick={toggle}
              aria-label="Toggle theme"
              className="flex h-8 w-8 items-center justify-center border border-[var(--border2)] bg-[var(--surface)] text-t2 transition-colors hover:border-[var(--border-strong)] hover:text-t1"
            >
              <svg className="hidden h-3.5 w-3.5 dark:block" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <circle cx="12" cy="12" r="4" />
                <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41" />
              </svg>
              <svg className="block h-3.5 w-3.5 dark:hidden" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
              </svg>
            </button>

            {/* ⌘K — desktop only */}
            <button
              onClick={() => setOpen(true)}
              className="hidden sm:flex h-8 items-center gap-2 border border-[var(--border2)] bg-[var(--surface)] px-3 text-[12px] font-medium text-t2 transition-colors hover:border-[var(--border-strong)] hover:text-t1"
            >
              <svg className="h-3.5 w-3.5 text-t3" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <circle cx="11" cy="11" r="8" /><path d="m21 21-4.35-4.35" />
              </svg>
              <span className="hidden sm:inline text-t3">Search</span>
              <kbd>⌘K</kbd>
            </button>

            {/* Hamburger — mobile only */}
            <button
              onClick={() => setMenuOpen(v => !v)}
              aria-label="Toggle menu"
              className="ml-1 flex h-8 w-8 items-center justify-center border border-[var(--border2)] bg-[var(--surface)] text-t2 transition-colors hover:border-[var(--border-strong)] hover:text-t1 md:hidden"
            >
              {menuOpen ? (
                <svg className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path d="M18 6 6 18M6 6l12 12" />
                </svg>
              ) : (
                <svg className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="fixed inset-0 z-30 flex flex-col bg-[var(--bg)] pt-[60px] md:hidden">
          <nav className="flex flex-col border-t border-[var(--border)] px-6 py-4">
            {NAV_LINKS.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className={`border-b border-[var(--border)] py-4 text-[15px] font-medium transition-colors ${
                  pathname === href ? 'text-t1' : 'text-t2 hover:text-t1'
                }`}
              >
                {label}
              </Link>
            ))}
          </nav>
          <div className="px-6 py-4">
            <button
              onClick={() => { setMenuOpen(false); setOpen(true) }}
              className="flex w-full items-center gap-3 border border-[var(--border2)] bg-[var(--surface)] px-4 py-3 text-[13px] font-medium text-t2"
            >
              <svg className="h-4 w-4 text-t3" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <circle cx="11" cy="11" r="8" /><path d="m21 21-4.35-4.35" />
              </svg>
              Search commands
              <kbd className="ml-auto">⌘K</kbd>
            </button>
          </div>
        </div>
      )}
    </>
  )
}
