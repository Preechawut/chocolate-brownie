// ── Site profile ─────────────────────────────────────────
export const SITE = {
  name: 'Preechawut Pothimakul',
  heroName: 'GAIN',
  initials: 'LI',
  role: 'Software Developer',
  location: 'Bangkok, Thailand',
  email: 'gain.pcw@gmail.com',
  bio: 'I\'m a software developer.',
  available: true,
  avatar: '',
  googleDriveFileId: '1i1YHpodFvrGuREFTcixBRQuLVB_N3Fh2',
}

// ── Social links ─────────────────────────────────────────
export const SOCIALS = [
  { label: 'GitHub',   href: 'https://github.com/Preechawut',   external: true,  enabled: true },
  { label: 'Email',    href: `mailto:${SITE.email}`, external: false, enabled: true },
  // { label: 'LinkedIn', href: 'https://linkedin.com', external: true,  enabled: true },
  // { label: 'Twitter',  href: 'https://twitter.com',  external: true,  enabled: true },
]

// ── Navigation ───────────────────────────────────────────
export const NAV_LINKS = [
  { href: '/',       label: 'Home' },
  { href: '/work',   label: 'Work' },
  { href: '/blog',   label: 'Blog' },
  { href: '/resume', label: 'Resume' },
]