import Link from 'next/link'
import { BLOG_POSTS } from '@/content/data/blog'
import { Badge } from '@/components/ui/Badge'
import { formatDateShort } from '@/lib/utils'
import { generatePageMetadata } from '@/lib/seo'
import { User, Calendar, Clock, ArrowRight } from 'lucide-react'

export const metadata = generatePageMetadata({
  title: 'Research & Technical Papers',
  description: 'Research papers, system analyses, and architecture notes by Rahuul Kalappatt on AI systems, quantitative research, and autonomous engineering.',
  url: '/research',
})

export default function ResearchPage() {
  return (
    <div className="container-default py-16 sm:py-24">
      <div className="max-w-3xl mb-16">
        <span className="font-mono text-xs font-semibold uppercase tracking-widest text-accent-light">
          Research Index
        </span>
        <h1 className="mt-3 font-display text-4xl font-bold tracking-tight sm:text-6xl">
          Research &amp; Technical Papers
        </h1>
        <p className="mt-4 text-lg leading-relaxed text-foreground-muted">
          Original research, technical papers, and system architecture studies authored by <strong className="text-foreground">Rahuul Kalappatt</strong>.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
        {BLOG_POSTS.map((post) => (
          <article
            key={post.slug}
            className="group relative flex flex-col justify-between rounded-2xl border border-border-subtle/80 bg-surface/40 p-8 transition-all duration-300 hover:border-border-strong/90 hover:bg-surface/80 hover:shadow-card overflow-hidden"
          >
            <div>
              <div className="flex flex-wrap items-center gap-3 font-mono text-xs text-foreground-dim mb-3">
                <span className="text-accent-light font-semibold inline-flex items-center gap-1">
                  <User className="h-3 w-3" /> {post.author}
                </span>
                <span>•</span>
                <span className="inline-flex items-center gap-1">
                  <Calendar className="h-3 w-3" /> {formatDateShort(post.date)}
                </span>
                <span>•</span>
                <span className="inline-flex items-center gap-1">
                  <Clock className="h-3 w-3" /> {post.readingTime}
                </span>
              </div>

              <h2 className="font-display text-2xl font-bold text-foreground transition-colors group-hover:text-accent-light sm:text-3xl">
                <Link href={`/research/${post.slug}`} className="focus:outline-none flex items-center justify-between">
                  <span>{post.title}</span>
                  <ArrowRight className="h-4 w-4 opacity-0 -translate-x-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0 text-accent-light shrink-0 ml-2" />
                </Link>
              </h2>

              <p className="mt-4 text-sm sm:text-base leading-relaxed text-foreground-muted">
                {post.description}
              </p>
            </div>

            <div className="mt-8 flex flex-wrap gap-2 pt-5 border-t border-border-subtle/40">
              {post.tags.map((tag) => (
                <Badge key={tag} variant="accent" size="sm">
                  {tag}
                </Badge>
              ))}
            </div>
          </article>
        ))}
      </div>
    </div>
  )
}
