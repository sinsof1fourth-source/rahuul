import Link from 'next/link'
import { BLOG_POSTS } from '@/content/data/blog'
import { Badge } from '@/components/ui/Badge'
import { formatDateShort } from '@/lib/utils'
import { generatePageMetadata } from '@/lib/seo'

export const metadata = generatePageMetadata({
  title: 'Research & Technical Essays',
  description: 'Research essays, architecture notes, and technical papers on AI systems, quantitative research, and deep-space autonomy by Rahuul Kalappatt.',
  url: '/blog',
})

export default function BlogPage() {
  return (
    <div className="container-default py-16 sm:py-24">
      <div className="max-w-3xl mb-16">
        <span className="font-mono text-xs font-semibold uppercase tracking-widest text-accent-light">
          Research &amp; Publications
        </span>
        <h1 className="mt-3 font-display text-4xl font-bold tracking-tight sm:text-6xl">
          Research &amp; Technical Essays
        </h1>
        <p className="mt-4 text-lg leading-relaxed text-foreground-muted">
          Technical papers, architecture analyses, and engineering essays authored by Rahuul Kalappatt on autonomous systems, quantitative execution, multi-agent pipelines, and system durability.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
        {BLOG_POSTS.map((post) => (
          <article
            key={post.slug}
            className="group relative flex flex-col justify-between rounded-2xl border border-border-subtle/80 bg-surface/40 p-8 transition-all duration-300 hover:border-border-strong/90 hover:bg-surface/80 hover:shadow-card overflow-hidden"
          >
            <div>
              <div className="flex items-center gap-3 font-mono text-xs text-foreground-dim">
                <time dateTime={post.date}>{formatDateShort(post.date)}</time>
                <span>•</span>
                <span>{post.readingTime}</span>
              </div>

              <h2 className="mt-4 font-display text-2xl font-bold text-foreground transition-colors group-hover:text-accent-light sm:text-3xl">
                <Link href={`/blog/${post.slug}`} className="focus:outline-none">
                  {post.title}
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
