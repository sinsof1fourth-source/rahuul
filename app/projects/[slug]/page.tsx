import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { PROJECTS } from '@/content/data/work'
import { Badge } from '@/components/ui/Badge'
import { generatePageMetadata } from '@/lib/seo'
import {
  ArrowLeft,
  ArrowRight,
  ShieldCheck,
  AlertTriangle,
  User,
} from 'lucide-react'

interface PageProps {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return PROJECTS.map((project) => ({
    slug: project.slug,
  }))
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params
  const project = PROJECTS.find((p) => p.slug === slug)

  if (!project) {
    return generatePageMetadata({ title: 'Project Not Found' })
  }

  return generatePageMetadata({
    title: `${project.title} — ${project.subtitle}`,
    description: project.description,
    url: `/projects/${project.slug}`,
  })
}

export default async function ProjectDetailPage({ params }: PageProps) {
  const { slug } = await params
  const project = PROJECTS.find((p) => p.slug === slug)

  if (!project) {
    notFound()
  }

  const isAion = project.slug === 'aion'
  const relatedProjects = PROJECTS.filter((p) => p.slug !== project.slug).slice(0, 3)

  const softwareAppJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: project.title,
    description: project.description,
    applicationCategory: project.category,
    author: {
      '@type': 'Person',
      '@id': 'https://rahuulkalappatt.com/#person',
      name: 'Rahuul Kalappatt',
      url: 'https://rahuulkalappatt.com',
    },
    creator: {
      '@type': 'Person',
      '@id': 'https://rahuulkalappatt.com/#person',
      name: 'Rahuul Kalappatt',
      url: 'https://rahuulkalappatt.com',
    },
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
        name: 'Projects',
        item: 'https://rahuulkalappatt.com/projects',
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: project.title,
        item: `https://rahuulkalappatt.com/projects/${project.slug}`,
      },
    ],
  }

  return (
    <div className="relative isolate overflow-hidden py-16 sm:py-24">
      {/* Inject SoftwareApplication & BreadcrumbList JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareAppJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />

      <div className="pointer-events-none absolute top-1/4 left-1/2 -z-10 h-[600px] w-[600px] -translate-x-1/2 rounded-full bg-accent/10 blur-[160px] dark:bg-accent/5" aria-hidden="true" />

      <div className="container-default">
        <div className="mb-10">
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 text-sm font-mono font-medium text-foreground-muted transition-colors hover:text-accent-light"
          >
            <ArrowLeft className="h-4 w-4" /> Back to Projects Ecosystem
          </Link>
        </div>

        <div className="max-w-4xl">
          <div className="flex flex-wrap items-center gap-3 mb-6">
            <span className="inline-flex items-center gap-2 rounded-full border border-accent/30 bg-accent/5 px-4 py-1 text-xs font-mono font-semibold text-accent-light uppercase tracking-wider">
              <ShieldCheck className="h-3.5 w-3.5" />
              {project.category}
            </span>
            <Badge variant="subtle" size="md">
              Status: {project.status}
            </Badge>
            <span className="font-mono text-xs text-foreground-dim flex items-center gap-1">
              <User className="h-3.5 w-3.5 text-accent-light" /> Architect: Rahuul Kalappatt
            </span>
          </div>

          <h1 className="font-display text-4xl font-bold tracking-tight sm:text-6xl lg:text-7xl leading-[1.05]">
            {project.title}
          </h1>
          <p className="mt-3 font-mono text-lg sm:text-xl text-accent-light font-medium">
            {project.subtitle}
          </p>

          <p className="mt-6 text-lg sm:text-xl leading-relaxed text-foreground-muted max-w-3xl">
            {project.description}
          </p>

          <div className="mt-8 flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="inline-flex items-center rounded-lg border border-border-subtle/80 bg-surface/60 px-3 py-1.5 text-xs font-mono font-medium text-foreground-muted"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* ─── AION CUSTOM ARCHITECTURE PRESENTATION ─── */}
        {isAion && (
          <div className="mt-16 sm:mt-24 space-y-24">
            <div className="rounded-2xl border border-amber-500/30 bg-amber-500/5 p-6 sm:p-8 backdrop-blur-md">
              <div className="flex items-start gap-4">
                <div className="rounded-xl bg-amber-500/10 p-3 text-amber-400 border border-amber-500/20 shrink-0">
                  <AlertTriangle className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-mono text-xs font-bold uppercase tracking-widest text-amber-400">
                    RESEARCH CONCEPT &amp; NON-OPERATIONAL DISCLAIMER
                  </h3>
                  <p className="mt-2 text-sm sm:text-base leading-relaxed text-foreground-muted">
                    AION is a long-horizon private space-systems research concept founded by Rahuul Kalappatt in 2026.
                    It is <strong className="text-foreground">not</strong> an existing operational aerospace company, active commercial venture, completed technology, or currently funded space mission.
                  </p>
                </div>
              </div>
            </div>

            <div className="relative rounded-3xl border border-accent/40 bg-surface/40 p-8 sm:p-12 shadow-elevated overflow-hidden">
              <span className="font-mono text-xs font-bold uppercase tracking-widest text-accent-light">
                Core Mission Statement
              </span>
              <blockquote className="mt-4 font-display text-2xl sm:text-4xl font-semibold text-foreground leading-snug">
                “Develop autonomous spacecraft capable of operating independently for decades and eventually enabling safe, long-duration human deep-space missions.”
              </blockquote>
            </div>

            <section className="relative rounded-3xl border border-border-subtle/80 bg-background/80 p-8 sm:p-12 shadow-card">
              <div className="max-w-3xl">
                <span className="font-mono text-xs font-bold uppercase tracking-widest text-amber-400">
                  Core Engineering Challenge
                </span>
                <h2 className="mt-3 font-display text-3xl sm:text-5xl font-bold tracking-tight text-foreground">
                  THE 30-YEAR QUESTION
                </h2>
                <div className="mt-6 p-6 rounded-2xl border border-amber-500/20 bg-amber-500/5">
                  <p className="font-display text-xl sm:text-2xl font-medium text-amber-300 leading-relaxed italic">
                    “Can we build a machine capable of surviving, diagnosing, repairing, adapting and communicating for thirty years without physical human maintenance?”
                  </p>
                </div>
              </div>
            </section>
          </div>
        )}

        {!isAion && (
          <div className="mt-16 rounded-3xl border border-border-subtle/80 bg-surface/30 p-8 sm:p-12">
            <h2 className="font-display text-2xl font-bold text-foreground">Architecture Overview</h2>
            <p className="mt-4 text-base leading-relaxed text-foreground-muted">
              {project.description}
            </p>
          </div>
        )}

        {/* RELATED PROJECTS */}
        <div className="mt-24 border-t border-border-subtle/60 pt-16">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 mb-10">
            <div>
              <span className="font-mono text-xs font-semibold uppercase tracking-widest text-accent-light">
                Ecosystem
              </span>
              <h2 className="font-display text-2xl sm:text-3xl font-bold text-foreground mt-1">
                Explore Related Systems
              </h2>
            </div>
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 text-sm font-semibold text-accent-light hover:underline"
            >
              View all projects <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {relatedProjects.map((rel) => (
              <Link
                key={rel.slug}
                href={`/projects/${rel.slug}`}
                className="group rounded-2xl border border-border-subtle/80 bg-surface/30 p-6 transition-all hover:border-accent/40 hover:bg-surface/60"
              >
                <div className="flex items-center justify-between text-xs font-mono text-foreground-dim mb-2">
                  <span>{rel.category}</span>
                  <Badge variant="subtle" size="sm">{rel.status}</Badge>
                </div>
                <h3 className="font-display font-bold text-lg text-foreground group-hover:text-accent-light transition-colors">
                  {rel.title}
                </h3>
                <p className="mt-2 text-xs leading-relaxed text-foreground-muted line-clamp-2">
                  {rel.description}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
