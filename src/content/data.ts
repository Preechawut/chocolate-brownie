// ─────────────────────────────────────────────────────────
// All non-blog content lives here. Edit, commit, deploy.
// Blog posts live in src/content/posts/*.md
// ─────────────────────────────────────────────────────────

// ── Types ─────────────────────────────────────────────────
export interface Experience {
  id: string
  company: string
  role: string
  period: string
  current?: boolean
  description: string
  bullets: string[]
  tags: string[]
}

export type Skill = { id: string; name: string; category: string }
export type Quote = { id: string; text: string; author: string }

export interface Project {
  id: string
  name: string
  tagline: string
  description: string
  features: string[]
  tags: string[]
  year: string
  href: string
  emoji: string
}

// ── Experience ────────────────────────────────────────────
export const experiences: Experience[] = [
  {
    id: 'lorem-1',
    company: 'Lorem Ipsum Co.',
    role: 'Lorem Ipsum Developer',
    period: 'May 2025 – Present',
    current: true,
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin elementum id eros at facilisis. Mauris egestas magna non tellus viverra scelerisque.',
    bullets: [
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      'Ut enim ad minim veniam, quis nostrud exercitation ullamco.',
      'Laboris nisi ut aliquip ex ea commodo consequat.',
      'Duis aute irure dolor in reprehenderit in voluptate velit.',
    ],
    tags: ['Lorem', 'Ipsum', 'Dolor', 'Sit', 'Amet'],
  },
  {
    id: 'lorem-2',
    company: 'Dolor Sit Amet Corp.',
    role: 'Lorem Ipsum Intern',
    period: 'Nov 2024 – Mar 2025',
    description: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    bullets: [
      'Duis aute irure dolor in reprehenderit in voluptate velit.',
      'Esse cillum dolore eu fugiat nulla pariatur.',
    ],
    tags: ['Consectetur', 'Adipiscing', 'Elit'],
  },
]

// ── Skills ────────────────────────────────────────────────
export const skills: Skill[] = [
  { id: 'lorem',       name: 'Lorem',       category: 'Languages' },
  { id: 'ipsum',       name: 'Ipsum',       category: 'Languages' },
  { id: 'dolor',       name: 'Dolor',       category: 'Languages' },
  { id: 'sit',         name: 'Sit',         category: 'Languages' },
  { id: 'amet',        name: 'Amet',        category: 'Frameworks' },
  { id: 'consectetur', name: 'Consectetur', category: 'Frameworks' },
  { id: 'adipiscing',  name: 'Adipiscing',  category: 'Frameworks' },
  { id: 'elit',        name: 'Elit',        category: 'Frameworks' },
  { id: 'sed',         name: 'Sed',         category: 'Frameworks' },
]

// ── Quotes ────────────────────────────────────────────────
export const quotes: Quote[] = [
  { id: '1', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', author: 'Lorem Ipsum' },
  { id: '2', text: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', author: 'Dolor Sit' },
  { id: '3', text: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.', author: 'Amet Consectetur' },
]

// ── Projects ──────────────────────────────────────────────
export const projects: Project[] = [
  {
    id: 'lorem-project-1',
    name: 'Lorem Ipsum Project 1',
    tagline: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    features: [
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      'Ut enim ad minim veniam, quis nostrud exercitation ullamco.',
      'Laboris nisi ut aliquip ex ea commodo consequat.',
    ],
    tags: ['Lorem', 'Ipsum', 'Dolor', 'Sit'],
    year: '2025',
    href: '#',
    emoji: '📦',
  },
  {
    id: 'lorem-project-2',
    name: 'Lorem Ipsum Project 2',
    tagline: 'Duis aute irure dolor in reprehenderit in voluptate',
    description:
      'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    features: [
      'Duis aute irure dolor in reprehenderit in voluptate velit.',
      'Esse cillum dolore eu fugiat nulla pariatur.',
      'Excepteur sint occaecat cupidatat non proident.',
      'Sunt in culpa qui officia deserunt mollit anim id est.',
    ],
    tags: ['Amet', 'Consectetur', 'Adipiscing'],
    year: '2025',
    href: '#',
    emoji: '⚙️',
  },
  {
    id: 'lorem-project-3',
    name: 'Lorem Ipsum Project 3',
    tagline: 'Excepteur sint occaecat cupidatat non proident',
    description:
      'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
    features: [
      'Ut enim ad minim veniam, quis nostrud exercitation.',
      'Ullamco laboris nisi ut aliquip ex ea commodo.',
      'Duis aute irure dolor in reprehenderit.',
      'Velit esse cillum dolore eu fugiat.',
    ],
    tags: ['Elit', 'Sed', 'Do'],
    year: '2025',
    href: '#',
    emoji: '🚀',
  },
]
