/* ─── Types ─── */
export interface Project {
  slug: string
  title: string
  description: string
  tags: string[]
  year: number
  featured: boolean
  cover: string
  coverAlt: string
  url?: string
  github?: string
  draft?: boolean
}

/* ─── Sample Projects ─── */
export const PROJECTS: Project[] = [
  {
    slug: 'velocity',
    title: 'Velocity',
    description:
      'A lightning-fast SaaS analytics dashboard that processes millions of events in real-time. Delivers insights in under 100ms with Clickhouse-powered aggregations and a tRPC API layer.',
    tags: ['Next.js', 'TypeScript', 'tRPC', 'Clickhouse'],
    year: 2026,
    featured: true,
    cover: '/images/work/velocity.jpg',
    coverAlt: 'Velocity dashboard showing real-time analytics charts and KPI cards',
    url: 'https://velocity.demo',
  },
  {
    slug: 'bloom',
    title: 'Bloom Design System',
    description:
      'A comprehensive design system powering three production applications. 80+ accessible components, full Figma library with 2,000+ frames, and a zero-runtime token architecture.',
    tags: ['React', 'TypeScript', 'Storybook', 'Figma'],
    year: 2025,
    featured: true,
    cover: '/images/work/bloom.jpg',
    coverAlt: 'Bloom design system component library showing button and form variants',
    github: 'https://github.com/rahul/bloom',
  },
  {
    slug: 'chronicle',
    title: 'Chronicle',
    description:
      'An open-source personal CRM that helps you stay genuinely connected with the people that matter. Built privacy-first with local-first sync via CRDTs.',
    tags: ['Next.js', 'SQLite', 'CRDT', 'PWA'],
    year: 2025,
    featured: true,
    cover: '/images/work/chronicle.jpg',
    coverAlt: 'Chronicle personal CRM showing contact timeline and relationship graph',
    github: 'https://github.com/rahul/chronicle',
    url: 'https://chronicle.app',
  },
]
