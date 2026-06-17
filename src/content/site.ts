// ── Site profile ─────────────────────────────────────────
export const SITE = {
  name: 'GAIN',
  initials: 'LI',
  role: 'developer',
  location: 'Lorem Ipsum, LI',
  email: 'lorem.ipsum@example.com',
  bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
  available: true,
  avatar: '',
  googleDriveFileId: '1234567890abcdefghijklmnopqrstuvwxyz',
}

// ── Social links ─────────────────────────────────────────
export const SOCIALS = [
  { label: 'GitHub',   href: 'https://github.com',   external: true,  enabled: true },
  // { label: 'LinkedIn', href: 'https://linkedin.com', external: true,  enabled: true },
  // { label: 'Twitter',  href: 'https://twitter.com',  external: true,  enabled: true },
  { label: 'Email',    href: `mailto:${SITE.email}`, external: false, enabled: true },
]

// ── Navigation ───────────────────────────────────────────
export const NAV_LINKS = [
  { href: '/',       label: 'Home' },
  { href: '/work',   label: 'Work' },
  { href: '/blog',   label: 'Blog' },
  { href: '/resume', label: 'Resume' },
]

// ── Tech stack (for /resume) ─────────────────────────────
export const STACK: { category: string; items: string[] }[] = [
  { category: 'Languages',      items: ['Lorem', 'Ipsum', 'Dolor', 'Sit', 'Amet'] },
  { category: 'Frameworks',     items: ['Consectetur', 'Adipiscing', 'Elit', 'Sed', 'Eiusmod'] },
  { category: 'DevOps',         items: ['Tempor', 'Incididunt', 'Ut', 'Labore', 'Dolore'] },
  { category: 'Tools',          items: ['Magna', 'Aliqua', 'Enim', 'Minim', 'Veniam'] },
]
