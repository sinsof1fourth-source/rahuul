import Link from 'next/link'
import { PROJECTS } from '@/content/data/work'
import { Badge } from '@/components/ui/Badge'
import { generatePageMetadata } from '@/lib/seo'
import { ArrowRight, Code2 } from 'lucide-react'

export const metadata = generatePageMetadata({
  title: 'Work & Case Studies',
  description: 'Selected digital products, space systems concepts, open-source libraries, and high-performance architectures engineered by Rahuul.',
})

export default function WorkPage() {
  return (
    <div className="container-default py-16 sm:py-24">
      <div className="max-w-3xl mb-16">
        <span className="font-mono text-xs font-semibold uppercase tracking-widest text-accent-light">
          Portfolio &amp; Research Systems
        </span>
        <h1 className="mt-3 font-display text-4xl font-bold tracking-tight sm:text-6xl">
          Work &amp; Case Studies
        </h1>
        <p className="mt-4 text-lg leading-relaxed text-foreground-muted">
          A collection of production applications, deep-space autonomy research concepts, component systems, and quantitative software architectures.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3">
        {PROJECTS.map((project) => (
          <Link
            key={project.slug}
            href={`/work/${project.slug}`}
            className="group relative flex flex-col justify-between rounded-2xl border border-border-subtle/80 bg-surface/40 p-7 transition-all duration-300 hover:border-border-strong/90 hover:bg-surface/80 hover:shadow-card overflow-hidden"
          >
            <div>
              <div className="flex items-center justify-between gap-2 mb-3">
                <span className="font-mono text-xs font-medium uppercase tracking-wider text-foreground-dim">
                  {project.category} · {project.year}
                </span>
                <Badge variant="subtle" size="sm">
                  {project.status}
                </Badge>
              </div>

              <h2 className="mt-2 font-display text-2xl font-bold text-foreground transition-colors group-hover:text-accent-light flex items-center justify-between">
                <span>{project.title}</span>
                <ArrowRight className="h-4 w-4 opacity-0 -translate-x-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0 text-accent-light" />
              </h2>
              <p className="mt-1 text-xs font-mono text-foreground-dim">
                {project.subtitle}
              </p>

              <p className="mt-4 text-sm leading-relaxed text-foreground-muted">
                {project.description}
              </p>
            </div>

            <div className="mt-8 border-t border-border-subtle/50 pt-5">
              <div className="mb-5 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <Badge key={tag} variant="subtle" size="sm">
                    {tag}
                  </Badge>
                ))}
              </div>

              <div className="flex items-center justify-between text-xs font-mono text-accent-light">
                <span className="inline-flex items-center gap-1 font-semibold group-hover:underline">
                  View Architecture Details <ArrowRight className="h-3.5 w-3.5" />
                </span>
                {project.github && (
                  <span className="text-foreground-dim flex items-center gap-1">
                    <Code2 className="h-3.5 w-3.5" /> Code
                  </span>
                )}
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}
