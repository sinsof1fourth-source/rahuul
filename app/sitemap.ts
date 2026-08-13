import type { MetadataRoute } from 'next'
import { PROJECTS } from '@/content/data/work'
import { BLOG_POSTS } from '@/content/data/blog'

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL ?? 'https://rahuulkalappatt.com'

/**
 * Next.js dynamic sitemap generator.
 * Combines static routes with dynamic projects and research pages.
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date()

  // 1. Static Core Routes
  const staticRoutes = [
    '',
    '/about',
    '/projects',
    '/work',
    '/research',
    '/blog',
    '/speaking',
    '/uses',
    '/now',
    '/contact',
  ].map((route) => ({
    url: `${BASE_URL}${route}`,
    lastModified,
    changeFrequency: (route === '' || route === '/research' || route === '/blog' || route === '/now'
      ? 'daily'
      : 'weekly') as 'daily' | 'weekly',
    priority: route === '' ? 1.0 : 0.9,
  }))

  // 2. Project Routes (/projects/[slug] & /work/[slug])
  const projectRoutes = PROJECTS.flatMap((project) => [
    {
      url: `${BASE_URL}/projects/${project.slug}`,
      lastModified,
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/work/${project.slug}`,
      lastModified,
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    },
  ])

  // 3. Research & Blog Article Routes (/research/[slug] & /blog/[slug])
  const articleRoutes = BLOG_POSTS.flatMap((post) => [
    {
      url: `${BASE_URL}/research/${post.slug}`,
      lastModified: new Date(post.date),
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/blog/${post.slug}`,
      lastModified: new Date(post.date),
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    },
  ])

  return [...staticRoutes, ...projectRoutes, ...articleRoutes]
}
