import { PROJECTS } from '@/content/data/work'
import { Badge } from '@/components/ui/Badge'
import { generatePageMetadata } from '@/lib/seo'
import { ArrowRight, Code2 } from 'lucide-react'

export const metadata = generatePageMetadata({
  title: 'Work & Case Studies',
  description: 'Selected digital products, open-source libraries, and high-performance applications built by Rahul.',
})

export default function WorkPage() {
  return (
    <div className="container-default py-16 sm:py-24">
      <div className="max-w-3xl mb-16">
        <span className="font-mono text-xs font-semibold uppercase tracking-widest text-accent-light">
          Portfolio
        </span>
        <h1 className="mt-3 font-display text-4xl font-bold tracking-tight sm:text-6xl">
          Work &amp; Case Studies
        </h1>
        <p className="mt-4 text-lg leading-relaxed text-foreground-muted">
          A collection of production applications, component design systems, and frontend architectures engineered with performance, accessibility, and clean code in mind.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3">
        {PROJECTS.map((project) => (
          <div
            key={project.slug}
            className="group relative flex flex-col justify-between rounded-2xl border border-border-subtle/80 bg-surface/40 p-7 transition-all duration-300 hover:border-border-strong/90 hover:bg-surface/80 hover:shadow-card overflow-hidden"
          >
            <div>
              <span className="font-mono text-xs font-medium uppercase tracking-wider text-foreground-dim">
                Case Study · {project.year}
              </span>
              <h2 className="mt-3 font-display text-2xl font-bold text-foreground transition-colors group-hover:text-accent-light">
                {project.title}
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-foreground-muted">
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

              <div className="flex items-center gap-4">
                {project.url && (
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-sm font-semibold text-foreground transition-colors hover:text-accent-light"
                  >
                    Live Demo <ArrowRight className="h-3.5 w-3.5" />
                  </a>
                )}
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-sm font-semibold text-foreground-muted transition-colors hover:text-foreground"
                  >
                    GitHub <Code2 className="h-3.5 w-3.5" />
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
