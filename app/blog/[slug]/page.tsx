import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { BLOG_POSTS } from '@/content/data/blog'
import { Badge } from '@/components/ui/Badge'
import { formatDateShort } from '@/lib/utils'
import { generatePageMetadata } from '@/lib/seo'
import { ArrowLeft, User, Calendar, Clock } from 'lucide-react'
import { JyotiAiTechnicalArticle } from '@/components/blog/JyotiAiTechnicalArticle'

interface PageProps {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return BLOG_POSTS.map((post) => ({
    slug: post.slug,
  }))
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params
  const post = BLOG_POSTS.find((p) => p.slug === slug)

  if (!post) {
    return generatePageMetadata({ title: 'Essay Not Found' })
  }

  return generatePageMetadata({
    title: `${post.title}`,
    description: post.description,
    url: `/blog/${post.slug}`,
    type: 'article',
    publishedAt: post.date,
    tags: post.tags,
  })
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params
  const post = BLOG_POSTS.find((p) => p.slug === slug)

  if (!post) {
    notFound()
  }

  const techArticleJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'TechArticle',
    headline: post.title,
    description: post.description,
    datePublished: post.date,
    dateModified: post.date,
    author: {
      '@type': 'Person',
      '@id': 'https://rahuulkalappatt.com/#person',
      name: 'Rahuul Kalappatt',
      url: 'https://rahuulkalappatt.com',
    },
    publisher: {
      '@type': 'Person',
      '@id': 'https://rahuulkalappatt.com/#person',
      name: 'Rahuul Kalappatt',
      url: 'https://rahuulkalappatt.com',
    },
    mainEntityOfPage: `https://rahuulkalappatt.com/blog/${post.slug}`,
  }

  const breadcrumbJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: 'https://rahuulkalappatt.com',
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Blog',
        item: 'https://rahuulkalappatt.com/blog',
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: post.title,
        item: `https://rahuulkalappatt.com/blog/${post.slug}`,
      },
    ],
  }

  return (
    <article className="container-default py-16 sm:py-24">
      {/* Inject TechArticle & BreadcrumbList JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(techArticleJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />

      <div className="mb-10 max-w-4xl">
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 text-sm font-mono font-medium text-foreground-muted transition-colors hover:text-accent-light mb-8"
        >
          <ArrowLeft className="h-4 w-4" /> Back to Research &amp; Writing
        </Link>

        <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-foreground-dim mb-4">
          <span className="inline-flex items-center gap-1.5 text-accent-light font-semibold">
            <User className="h-3.5 w-3.5" /> Author: {post.author}
          </span>
          <span>•</span>
          <span className="inline-flex items-center gap-1.5">
            <Calendar className="h-3.5 w-3.5" /> {formatDateShort(post.date)}
          </span>
          <span>•</span>
          <span className="inline-flex items-center gap-1.5">
            <Clock className="h-3.5 w-3.5" /> {post.readingTime}
          </span>
        </div>

        <h1 className="font-display text-3xl sm:text-5xl font-bold tracking-tight text-foreground leading-tight">
          {post.title}
        </h1>

        <p className="mt-6 text-lg sm:text-xl leading-relaxed text-foreground-muted">
          {post.description}
        </p>

        <div className="mt-8 flex flex-wrap gap-2 pt-6 border-t border-border-subtle/50">
          {post.tags.map((tag) => (
            <Badge key={tag} variant="accent" size="sm">
              {tag}
            </Badge>
          ))}
        </div>
      </div>

      {/* Essay Main Body */}
      {post.slug === 'jyotiai-vedic-astrology-numerology-engine-architecture' ? (
        <JyotiAiTechnicalArticle />
      ) : (
        <div className="max-w-4xl rounded-3xl border border-border-subtle/80 bg-surface/30 p-8 sm:p-12 leading-relaxed text-foreground-muted space-y-6">
          <p className="text-base sm:text-lg">
            This technical essay by <strong className="text-foreground">Rahuul Kalappatt</strong> details the underlying system architecture, constraints, and empirical principles behind {post.title.toLowerCase()}.
          </p>
          <p>
            In complex software systems—whether operating in quantitative financial markets or autonomous long-duration deep-space environments—reliability stems from strict state isolation, deterministic recovery loops, and explicit failure domain boundaries.
          </p>
          <div className="p-6 rounded-2xl border border-accent/20 bg-accent/5 font-mono text-sm text-accent-light">
            “Build systems in silence. Reveal results, not intentions.” — Rahuul Kalappatt
          </div>
        </div>
      )}
    </article>
  )
}
