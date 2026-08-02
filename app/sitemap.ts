import type { MetadataRoute } from 'next'
import { PROJECTS } from '@/content/data/work'
import { BLOG_POSTS } from '@/content/data/blog'

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL ?? 'https://rahuul.dev'

/**
 * Next.js dynamic sitemap generator.
 * Combines static routes with dynamic blog posts and case studies.
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date()

  // 1. Static Routes
  const staticRoutes = [
    '',
    '/about',
    '/work',
    '/blog',
    '/speaking',
    '/uses',
    '/now',
    '/contact',
  ].map((route) => ({
    url: `${BASE_URL}${route}`,
    lastModified,
    changeFrequency: (route === '' || route === '/blog' || route === '/now'
      ? 'daily'
      : 'weekly') as 'daily' | 'weekly',
    priority: route === '' ? 1.0 : 0.8,
  }))

  // 2. Dynamic Case Study Routes
  const projectRoutes = PROJECTS.map((project) => ({
    url: `${BASE_URL}/work/${project.slug}`,
    lastModified,
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }))

  // 3. Dynamic Blog Post Routes
  const blogRoutes = BLOG_POSTS.map((post) => ({
    url: `${BASE_URL}/blog/${post.slug}`,
    lastModified: new Date(post.date),
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }))

  return [...staticRoutes, ...projectRoutes, ...blogRoutes]
}
