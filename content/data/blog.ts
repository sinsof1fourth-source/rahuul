export interface BlogPost {
  slug: string
  title: string
  description: string
  date: string
  author: string
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
    slug: 'jyotiai-vedic-astrology-numerology-engine-architecture',
    title: 'Deterministic astro-numerology engines & offline-first mobile architecture in JyotiAI',
    description:
      'Architectural analysis of JyotiAI: deterministic Vedic planetary algorithms (Lahiri Ayanamsha, Bhavas, Nakshatras), dual Chaldean/Pythagorean numerology matrices, offline-first computation pipelines, and pgvector knowledge retrieval.',
    date: '2026-10-08',
    author: 'Rahuul Kalappatt',
    tags: ['Vedic Astrology', 'Numerology', 'Mobile Architecture', 'TypeScript', 'Supabase'],
    cover: '/images/blog/component-api.jpg',
    coverAlt: 'JyotiAI deterministic astro-numerology engine architecture diagram',
    readingTime: '14 min read',
    featured: true,
    draft: false,
  },
  {
    slug: 'aion-deep-space-autonomous-loop-architecture',
    title: 'Autonomous self-healing loops & radiation resilience in 30-year space systems',
    description:
      'Architectural analysis of the 6-stage autonomous decision loop (DETECT → DIAGNOSE → REPAIR → ADAPT → RECORD → COMMUNICATE) for multi-decade deep-space probes.',
    date: '2026-08-10',
    author: 'Rahuul Kalappatt',
    tags: ['Deep-Space Autonomy', 'Robotics', 'Space Systems'],
    cover: '/images/blog/component-api.jpg',
    coverAlt: 'AION autonomous loop decision matrix',
    readingTime: '15 min read',
    featured: true,
    draft: false,
  },
  {
    slug: 'deterministic-execution-in-quantitative-systems',
    title: 'Deterministic execution & state isolation in quantitative systems',
    description:
      'Exploring boundary separation, latency controls, position state recovery, and risk validation in quantitative trade execution engines.',
    date: '2026-07-28',
    author: 'Rahuul Kalappatt',
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
    author: 'Rahuul Kalappatt',
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
    author: 'Rahuul Kalappatt',
    tags: ['Systems Engineering', 'Philosophy', 'Architecture'],
    cover: '/images/blog/css-in-js.jpg',
    coverAlt: 'Systems engineering layers diagram',
    readingTime: '10 min read',
    featured: true,
    draft: false,
  },
]
