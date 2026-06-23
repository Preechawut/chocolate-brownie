// ─────────────────────────────────────────────────────────
// All non-blog content lives here. Edit, commit, deploy.
// Blog posts live in src/content/posts/*.md
// ─────────────────────────────────────────────────────────

// ── Types ─────────────────────────────────────────────────
export interface ExperienceProject {
  name: string
  description?: string
  bullets: string[]
}

export interface Experience {
  id: string
  company: string
  role: string
  period: string
  current?: boolean
  description: string
  bullets: string[]
  projects?: ExperienceProject[]
  tags: string[]
}

export type Skill = { id: string; name: string; category: string }
export type Quote = { id: string; text: string; author: string }

// ── Experience ────────────────────────────────────────────
export const experiences: Experience[] = [
  {
    id: '1',
    company: 'Enersys Co. Ltd.',
    role: 'Software Developer',
    period: 'May 2025 – Present',
    current: true,
    description: 'Developed and optimized RESTful APIs, customized corporate management web applications, customized ERP modules, and built onboarding/registration workflows.',
    bullets: [
      'Write, test, and maintain clean, efficient, and reliable code.',
      'Develop software solutions based on technical requirements and user needs.',
      'Debug and troubleshoot issues in existing applications.',
    ],
    projects: [
      {
        name: 'Insurance Online Sale Open API Backend',
        bullets: [
          'Developed RESTful backend services for a digital insurance platform using Go/Fiber in a monorepo architecture.',
          'Implemented workflows for customer identity verification.',
          'Integrated backend services with external and third-party systems.',
          'Worked in a backend environment using Argo CD, Kubernetes, and AWS for deployment and operations.',
        ],
      },
      {
        name: 'Fsmart Corporate System',
        bullets: [
          'Developed and customized web application for corporate data management, financial tracking, and reporting using Go and Next.js based on user and business requirements.',
          'Worked in a vendor-managed GitLab CI/CD workflow across QAS, UAT, and production, including code quality and security checks with SonarQube and Coverity.',
        ],
      },
      {
        name: 'Odoo ERP',
        bullets: [
          'Customized ERP workflows to support internal business operations using Python.',
          'Delivered feature enhancements and process improvements across related modules.',
        ],
      },
      {
        name: 'Trading Open Account App',
        bullets: [
          'Developed backend and mobile features for account registration and onboarding using Go and Flutter.',
          'Implemented customer identity verification workflows for digital account opening.',
        ],
      },
    ],
    tags: ['Go', 'Python', 'Typescript', 'Odoo ERP', 'Flutter'],
  },
  {
    id: '2',
    company: 'Airport of Thailand Public Company Limited',
    role: 'Internship',
    period: 'November 2024 – March 2025',
    description: 'Built a responsive E-Learning web application using ReactJS and Firebase and Implemented simple user authentication, course listing, and basic learning flow',
    bullets: [
      'Project: E-Learning Website',
      'Built a responsive E-Learning web application using ReactJS and Firebase and Implemented simple user authentication, course listing, and basic learning flow',
    ],
    tags: ['React', 'Firebase', 'Javascript', 'HTML', 'CSS'],
  },
]

// ── Skills ────────────────────────────────────────────────
export const skills: Skill[] = [
  { id: 'go', name: 'Go', category: 'Languages' },
  { id: 'python', name: 'Python', category: 'Languages' },
  { id: 'javascript', name: 'Javascript', category: 'Languages' },
  { id: 'typescript', name: 'Typescript', category: 'Languages' },
  { id: 'gin', name: 'Gin', category: 'Frameworks' },
  { id: 'fiber', name: 'Fiber', category: 'Frameworks' },
  { id: 'nextjs', name: 'Next.js', category: 'Frameworks' },
  { id: 'react', name: 'React', category: 'Frameworks' },
  { id: 'odoo', name: 'odoo', category: 'Frameworks' },
  { id: 'docker', name: 'Docker', category: 'DevOps' },
  { id: 'kubernetes', name: 'Kubernetes', category: 'DevOps' },
  { id: 'github-actions', name: 'Github Actions', category: 'DevOps' },
  { id: 'gitlab-ci-cd', name: 'GitLab CI/CD', category: 'DevOps' },
  { id: 'argocd', name: 'ArgoCD', category: 'DevOps' },
]

// ── Quotes ────────────────────────────────────────────────
export const quotes: Quote[] = [
  { id: '1', text: 'just do it.', author: 'gain' },
]

// ── Repos ─────────────────────────────────────────────────
export interface Repo {
  id: string
  name: string
  description: string
  language: string
  languageColor: string
  tech: string[]
  githubUrl: string
}

export const repos: Repo[] = [
  {
    id: 'repo-1',
    name: 'chocolate-brownie',
    description: 'Personal portfolio built with Next.js and Tailwind CSS.',
    language: 'TypeScript',
    languageColor: '#3178c6',
    tech: ['TypeScript', 'Next.js', 'Tailwind CSS'],
    githubUrl: 'https://github.com/Preechawut/chocolate-brownie',
  },
  // {
  //   id: 'repo-2',
  //   name: 'lorem-ipsum-api',
  //   description: 'REST API for lorem ipsum generation with custom endpoints.',
  //   language: 'Go',
  //   languageColor: '#00ADD8',
  //   tech: ['Go', 'PostgreSQL', 'Docker'],
  //   githubUrl: 'https://github.com',
  // },
  // {
  //   id: 'repo-3',
  //   name: 'dolor-sit-cli',
  //   description: 'Command-line tool for automating lorem ipsum workflows.',
  //   language: 'Python',
  //   languageColor: '#3572A5',
  //   tech: ['Python', 'Click', 'SQLite'],
  //   githubUrl: 'https://github.com',
  // },
]

