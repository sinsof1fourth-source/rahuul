/* ─── Types ─── */
export interface BlogPost {
  slug: string
  title: string
  description: string
  date: string
  tags: string[]
  cover: string
  coverAlt: string
  readingTime: string
  featured: boolean
  draft?: boolean
}

/* ─── Authentic Research & Technical Essays ─── */
export const BLOG_POSTS: BlogPost[] = [
  {
    slug: 'deterministic-execution-in-quantitative-systems',
    title: 'Deterministic execution & state isolation in quantitative systems',
    description:
      'Exploring boundary separation, latency controls, position state recovery, and risk validation in quantitative trade execution engines.',
    date: '2026-07-28',
    tags: ['Quantitative Research', 'Systems Architecture', 'TypeScript'],
    cover: '/images/blog/component-api.jpg',
    coverAlt: 'Quantitative system execution flow diagram',
    readingTime: '12 min read',
    featured: true,
    draft: false,
  },
  {
    slug: 'multi-agent-orchestration-whisper-ollama',
    title: 'Multi-agent media orchestration with Whisper, Ollama & FFmpeg',
    description:
      'Designing an automated, multi-stage media pipeline (SHIKRAHQ) for local speech transcription, video cutting, and automated asset generation.',
    date: '2026-07-14',
    tags: ['AI Media', 'FastAPI', 'FFmpeg', 'Docker'],
    cover: '/images/blog/nextjs-structure.jpg',
    coverAlt: 'Multi-agent video editing pipeline',
    readingTime: '9 min read',
    featured: true,
    draft: false,
  },
  {
    slug: 'architecture-of-durable-software-systems',
    title: 'The architecture of durable software systems built in shadow',
    description:
      'Why private experimentation, minimal dependencies, and disciplined verification yield far more resilient systems than premature publicity.',
    date: '2026-06-30',
    tags: ['Systems Engineering', 'Philosophy', 'Architecture'],
    cover: '/images/blog/css-in-js.jpg',
    coverAlt: 'Systems engineering layers diagram',
    readingTime: '10 min read',
    featured: true,
    draft: false,
  },
]
