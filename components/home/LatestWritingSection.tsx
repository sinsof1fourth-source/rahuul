'use client'

import { useRef } from 'react'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { BLOG_POSTS, type BlogPost } from '@/content/data/blog'
import { Badge } from '@/components/ui/Badge'
import { formatDateShort } from '@/lib/utils'
import { useScrollReveal } from '@/lib/animations/useScrollReveal'
import { useCardHover } from '@/lib/animations/useCardHover'

function PostCard({ post }: { post: BlogPost }) {
  const { cardRef, handleMouseMove, handleMouseLeave } = useCardHover({
    maxRotation: 2,
    scale: 1.015,
    liftY: -4,
  })

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="post-card group relative flex flex-col justify-between rounded-2xl border border-border-subtle/80 bg-surface/40 p-7 sm:p-8 transition-colors duration-300 hover:border-accent/40 hover:bg-surface/80 hover:shadow-card overflow-hidden"
    >
      {/* Radial glow halo on hover */}
      <div
        className="pointer-events-none absolute inset-0 -z-10 rounded-2xl bg-radial-gradient(ellipse at center, var(--accent-glow) 0%, transparent 70%) opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        aria-hidden="true"
      />

      <div>
        <div className="flex items-center gap-3 font-mono text-xs text-foreground-dim">
          <time dateTime={post.date}>{formatDateShort(post.date)}</time>
          <span>•</span>
          <span>{post.readingTime}</span>
        </div>
        <h3 className="mt-3 font-display text-2xl font-bold text-foreground transition-colors group-hover:text-accent-light sm:text-3xl">
          <Link href={`/blog/${post.slug}`} className="focus:outline-none">
            {post.title}
          </Link>
        </h3>
        <p className="mt-4 text-sm leading-relaxed text-foreground-muted sm:text-base">
          {post.description}
        </p>
      </div>

      <div className="mt-6 flex flex-wrap gap-2 pt-4 border-t border-border-subtle/40">
        {post.tags.map((tag) => (
          <Badge key={tag} variant="accent" size="sm">
            {tag}
          </Badge>
        ))}
      </div>
    </div>
  )
}

export function LatestWritingSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const featuredPosts = BLOG_POSTS.slice(0, 2)

  useScrollReveal({
    triggerRef: sectionRef,
    targetSelector: '.post-card',
    variant: 'fade-up',
    stagger: 0.15,
  })

  return (
    <section ref={sectionRef} className="container-default mb-24 md:mb-36">
      <div className="mb-12 flex flex-col justify-between md:flex-row md:items-end">
        <div>
          <span className="font-mono text-xs font-semibold uppercase tracking-widest text-accent-light">
            Research &amp; Writing
          </span>
          <h2 className="mt-2 font-display text-3xl font-bold tracking-tight sm:text-4xl">
            Systems Notes &amp; Essays
          </h2>
          <p className="mt-2 font-medium text-foreground-muted">
            Documented research on quantitative systems, multi-agent orchestration, and durable architecture.
          </p>
        </div>

        <div className="mt-4 md:mt-0">
          <Link
            href="/blog"
            className="group inline-flex items-center gap-1 font-semibold text-accent-light transition-colors hover:text-accent-light/85"
          >
            Read all technical essays{' '}
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
        {featuredPosts.map((post) => (
          <PostCard key={post.slug} post={post} />
        ))}
      </div>
    </section>
  )
}
