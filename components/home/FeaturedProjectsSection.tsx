'use client'

import { useRef } from 'react'
import Link from 'next/link'
import { ArrowRight, Code2 } from 'lucide-react'
import { PROJECTS, type Project } from '@/content/data/work'
import { Badge } from '@/components/ui/Badge'
import { useScrollReveal } from '@/lib/animations/useScrollReveal'
import { useCardHover } from '@/lib/animations/useCardHover'

function ProjectCard({ project }: { project: Project }) {
  const { cardRef, handleMouseMove, handleMouseLeave } = useCardHover({
    maxRotation: 2.5,
    scale: 1.015,
    liftY: -5,
  })

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="project-card group relative flex flex-col justify-between rounded-2xl border border-border-subtle/80 bg-surface/40 p-7 transition-colors duration-300 hover:border-border-strong/90 hover:bg-surface/80 hover:shadow-card overflow-hidden"
    >
      {/* Radial glow halo on hover */}
      <div
        className="pointer-events-none absolute inset-0 -z-10 rounded-2xl bg-radial-gradient(ellipse at center, var(--accent-glow) 0%, transparent 70%) opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        aria-hidden="true"
      />

      <div>
        <span className="font-mono text-xs font-medium uppercase tracking-wider text-foreground-dim">
          Case Study · {project.year}
        </span>
        <h3 className="mt-2.5 font-display text-2xl font-bold text-foreground transition-colors group-hover:text-accent-light">
          {project.title}
        </h3>
        <p className="mt-3 text-sm leading-relaxed text-foreground-muted">
          {project.description}
        </p>
      </div>

      <div className="mt-6 border-t border-border-subtle/50 pt-4">
        <div className="mb-4 flex flex-wrap gap-2">
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
              className="group/link inline-flex items-center gap-1 text-sm font-semibold text-foreground transition-colors hover:text-accent-light"
            >
              Live Demo <ArrowRight className="h-3 w-3 transition-transform group-hover/link:translate-x-0.5" />
            </a>
          )}
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-sm font-semibold text-foreground-muted transition-colors hover:text-foreground"
            >
              GitHub <Code2 className="h-3 w-3" />
            </a>
          )}
        </div>
      </div>
    </div>
  )
}

export function FeaturedProjectsSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const featuredProjects = PROJECTS.filter((p) => p.featured).slice(0, 3)

  useScrollReveal({
    triggerRef: sectionRef,
    targetSelector: '.project-card',
    variant: 'fade-up',
    stagger: 0.12,
  })

  return (
    <section ref={sectionRef} className="container-default mb-24 md:mb-36">
      <div className="mb-12 flex flex-col justify-between md:flex-row md:items-end">
        <div>
          <h2 className="font-display text-3xl font-bold tracking-tight sm:text-4xl">
            Featured Projects
          </h2>
          <p className="mt-2 text-foreground-muted">
            A selection of digital products built with performance in mind.
          </p>
        </div>

        <div className="mt-4 md:mt-0">
          <Link
            href="/work"
            className="group inline-flex items-center gap-1 font-semibold text-accent-light transition-colors hover:text-accent-light/85"
          >
            See all case studies{' '}
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
        {featuredProjects.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </div>
    </section>
  )
}
