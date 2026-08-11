'use client'

import { useRef } from 'react'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { PROJECTS, type Project } from '@/content/data/work'
import { Badge } from '@/components/ui/Badge'
import { useScrollReveal } from '@/lib/animations/useScrollReveal'
import { useCardHover } from '@/lib/animations/useCardHover'

function ProjectCard({ project }: { project: Project }) {
  const { cardRef, handleMouseMove, handleMouseLeave } = useCardHover<HTMLAnchorElement>({
    maxRotation: 2,
    scale: 1.01,
    liftY: -4,
  })

  return (
    <Link
      href={`/work/${project.slug}`}
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="project-card group relative flex flex-col justify-between rounded-2xl border border-border-subtle/80 bg-surface/40 p-7 transition-colors duration-300 hover:border-accent/40 hover:bg-surface/80 hover:shadow-card overflow-hidden"
    >
      {/* Radial glow halo on hover */}
      <div
        className="pointer-events-none absolute inset-0 -z-10 rounded-2xl bg-radial-gradient(ellipse at center, var(--accent-glow) 0%, transparent 70%) opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        aria-hidden="true"
      />

      <div>
        <div className="flex items-center justify-between gap-2 mb-3">
          <span className="font-mono text-xs font-semibold uppercase tracking-wider text-accent-light">
            {project.category}
          </span>
          <Badge variant="subtle" size="sm">
            {project.status}
          </Badge>
        </div>

        <h3 className="font-display text-2xl font-bold text-foreground transition-colors group-hover:text-accent-light flex items-center justify-between">
          <span>{project.title}</span>
          <ArrowRight className="h-4 w-4 opacity-0 -translate-x-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0 text-accent-light" />
        </h3>
        <p className="mt-1 text-xs font-mono text-foreground-dim">
          {project.subtitle}
        </p>

        <p className="mt-4 text-sm leading-relaxed text-foreground-muted">
          {project.description}
        </p>
      </div>

      <div className="mt-6 border-t border-border-subtle/50 pt-4">
        <div className="flex flex-wrap gap-1.5">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="inline-flex items-center rounded-md border border-border-subtle/60 bg-surface/60 px-2.5 py-1 text-[11px] font-mono text-foreground-muted"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </Link>
  )
}

export function FeaturedProjectsSection() {
  const sectionRef = useRef<HTMLElement>(null)

  useScrollReveal({
    triggerRef: sectionRef,
    targetSelector: '.project-card',
    variant: 'fade-up',
    stagger: 0.1,
  })

  return (
    <section id="projects" ref={sectionRef} className="container-default mb-24 md:mb-36">
      <div className="mb-12 flex flex-col justify-between md:flex-row md:items-end">
        <div>
          <span className="font-mono text-xs font-semibold uppercase tracking-widest text-accent-light">
            Core Ecosystem
          </span>
          <h2 className="mt-2 font-display text-3xl font-bold tracking-tight sm:text-4xl">
            Core Project Ecosystem
          </h2>
          <p className="mt-2 text-foreground-muted">
            Systems, research initiatives, and automated platforms engineered for execution.
          </p>
        </div>

        <div className="mt-4 md:mt-0">
          <Link
            href="/work"
            className="group inline-flex items-center gap-1 font-semibold text-accent-light transition-colors hover:text-accent-light/85"
          >
            Explore all {PROJECTS.length} core systems{' '}
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        {PROJECTS.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </div>
    </section>
  )
}
