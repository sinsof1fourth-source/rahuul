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

/* ─── Sample Posts ─── */
export const BLOG_POSTS: BlogPost[] = [
  {
    slug: 'why-i-stopped-using-css-in-js',
    title: 'Why I stopped using CSS-in-JS (and what I use instead)',
    description:
      "After three years of Styled Components and Emotion, I made the switch. Here's the honest breakdown of performance, DX, and the real-world trade-offs no one talks about.",
    date: '2026-07-15',
    tags: ['Engineering', 'CSS', 'Performance'],
    cover: '/images/blog/css-in-js.jpg',
    coverAlt: 'Split-screen comparison of CSS-in-JS versus utility-first CSS approaches',
    readingTime: '8 min read',
    featured: true,
    draft: false,
  },
  {
    slug: 'anatomy-of-a-perfect-component-api',
    title: 'The anatomy of a perfect component API',
    description:
      'What separates a component you dread using from one you reach for instinctively? A deep dive into API design principles for React component libraries.',
    date: '2026-06-28',
    tags: ['Design Systems', 'React', 'Engineering'],
    cover: '/images/blog/component-api.jpg',
    coverAlt: 'Diagram illustrating component API design patterns and composition strategies',
    readingTime: '11 min read',
    featured: true,
    draft: false,
  },
  {
    slug: 'how-i-structure-nextjs-projects-2026',
    title: 'How I structure my Next.js projects in 2026',
    description:
      "After shipping dozens of Next.js apps, I've converged on a folder structure and architecture that scales from solo side-project to large team. Here it is.",
    date: '2026-06-10',
    tags: ['Engineering', 'Next.js', 'Architecture'],
    cover: '/images/blog/nextjs-structure.jpg',
    coverAlt: 'File tree showing a well-organized Next.js App Router project structure',
    readingTime: '7 min read',
    featured: false,
    draft: false,
  },
]
