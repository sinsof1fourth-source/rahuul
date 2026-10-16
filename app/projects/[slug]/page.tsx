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
  ExternalLink,
  Sparkles,
  Cpu,
  Calendar,
  Compass,
  Activity,
  CheckCircle2,
  Database,
  Smartphone,
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
  const isJyotiAi = project.slug === 'jyotiai'
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

        {/* ─── JyotiAI CUSTOM ARCHITECTURE PRESENTATION ─── */}
        {isJyotiAi && (
          <div className="mt-16 sm:mt-24 space-y-20">
            {/* Live Web Experience Callout Banner */}
            <div className="relative rounded-3xl border border-accent/40 bg-surface/50 p-8 sm:p-12 shadow-elevated overflow-hidden">
              <div
                className="pointer-events-none absolute inset-0 -z-10 bg-radial-gradient(ellipse at center, var(--accent-glow) 0%, transparent 70%) opacity-30"
                aria-hidden="true"
              />
              <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
                <div>
                  <span className="font-mono text-xs font-bold uppercase tracking-widest text-accent-light">
                    Verified Web Experience &amp; Mobile Platform
                  </span>
                  <h2 className="mt-2 font-display text-2xl sm:text-4xl font-bold text-foreground">
                    JyotiAI: A Living System of Patterns
                  </h2>
                  <p className="mt-2 text-sm sm:text-base text-foreground-muted max-w-2xl">
                    Explore the live Three.js 3D interactive universe, interactive pattern web, and mathematical numerology/astrology reflections at the official domain.
                  </p>
                </div>
                <div className="shrink-0 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                  <a
                    href="https://jyotiai.app"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 rounded-xl bg-accent px-6 py-3.5 text-sm font-semibold text-background transition-all hover:bg-accent-light hover:shadow-glow"
                  >
                    Launch jyotiai.app <ExternalLink className="h-4 w-4" />
                  </a>
                  <Link
                    href="/blog/jyotiai-vedic-astrology-numerology-engine-architecture"
                    className="inline-flex items-center justify-center gap-2 rounded-xl border border-border-subtle/80 bg-surface/60 px-5 py-3.5 text-sm font-mono font-medium text-foreground hover:border-accent/40 transition-colors"
                  >
                    Read Technical Paper <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>
            </div>

            {/* Core Architecture Pillars Grid */}
            <section>
              <div className="max-w-2xl mb-10">
                <span className="font-mono text-xs font-semibold uppercase tracking-widest text-accent-light">
                  Mathematical &amp; Systems Architecture
                </span>
                <h2 className="mt-2 font-display text-3xl sm:text-4xl font-bold tracking-tight text-foreground">
                  Core Engineering Pillars
                </h2>
                <p className="mt-2 text-foreground-muted">
                  Deterministic offline-first engines designed for sub-millisecond calculation and total data privacy.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                  {
                    title: 'Deterministic Vedic Astrological Engine',
                    icon: Compass,
                    tag: 'Astro Calculations',
                    desc: 'Mathematical calculation of the D1 (Rashi) chart, Ascendant (Lagna) determination via precise geographic coordinates and UTC timestamps, Lahiri Ayanamsha subtraction from tropical longitudes, 12 Bhavas, 27 Nakshatras & 108 padas, and 120-year Vimshottari Dasha timeline balances.',
                  },
                  {
                    title: 'Dual Numerology Computation Matrices',
                    icon: Cpu,
                    tag: 'Numerology Engine',
                    desc: 'Simultaneous evaluation across Chaldean (sound-vibrational frequencies 1-8 with compound master numbers) and Pythagorean (1-9 alphabet matrix) systems. Computes Life Path, Destiny, Soul Urge, Personality, and dynamic Personal Year, Month, and Day cycles.',
                  },
                  {
                    title: 'Kundli Screen & Geometric Visualizer',
                    icon: Sparkles,
                    tag: 'Visual Chart Engine',
                    desc: 'Precision visual chart renderer supporting both North Indian diamond and South Indian square geometric formats with zero third-party chart bloat. Evaluates house cusps, planetary placements, and aspect angle matrices dynamically.',
                  },
                  {
                    title: 'Transit & Daily Forecast Engine',
                    icon: Activity,
                    tag: 'Forecast Engine',
                    desc: 'Real-time ephemeris planetary movements evaluated against the native natal chart positions, combined with personal day vibrational numbers to provide contextual, grounded daily guidance without superstitious or supernatural claims.',
                  },
                  {
                    title: 'Numerology Calendar',
                    icon: Calendar,
                    tag: 'Cycle Tracking',
                    desc: 'Interactive personal day calendar mapping daily vibrational frequencies, transition inflection points, and auspicious activity timing windows according to classical cycle mathematics.',
                  },
                  {
                    title: 'Supabase pgvector & Privacy Guarantee',
                    icon: Database,
                    tag: 'Knowledge Retrieval',
                    desc: 'Supabase PostgreSQL database equipped with pgvector embeddings indexing 13 authentic classical Vedic sources across 27 chunks. Protected by 9 strict Row-Level Security (RLS) policies guaranteeing total isolation of user birth details.',
                  },
                ].map((pillar) => {
                  const IconComp = pillar.icon
                  return (
                    <div
                      key={pillar.title}
                      className="group rounded-2xl border border-border-subtle/80 bg-surface/30 p-6 transition-all duration-300 hover:border-accent/40 hover:bg-surface/60 hover:shadow-card flex flex-col justify-between"
                    >
                      <div>
                        <div className="flex items-center justify-between mb-4">
                          <span className="inline-flex items-center rounded-full border border-accent/20 bg-accent/5 px-2.5 py-0.5 text-[11px] font-mono text-accent-light">
                            {pillar.tag}
                          </span>
                          <div className="rounded-xl bg-accent/10 p-2 text-accent-light border border-accent/20">
                            <IconComp className="h-4 w-4" />
                          </div>
                        </div>
                        <h3 className="font-display font-bold text-lg text-foreground group-hover:text-accent-light transition-colors">
                          {pillar.title}
                        </h3>
                        <p className="mt-3 text-xs leading-relaxed text-foreground-muted">
                          {pillar.desc}
                        </p>
                      </div>
                    </div>
                  )
                })}
              </div>
            </section>

            {/* Mobile Architecture & Client Stack */}
            <section className="rounded-3xl border border-border-subtle/80 bg-surface/40 p-8 sm:p-12 shadow-elevated">
              <div className="flex flex-col lg:flex-row items-start justify-between gap-10">
                <div className="max-w-2xl">
                  <div className="inline-flex items-center gap-2 rounded-full border border-accent/30 bg-accent/10 px-3 py-1 text-xs font-mono font-semibold text-accent-light uppercase tracking-wider mb-4">
                    <Smartphone className="h-3.5 w-3.5" /> Mobile Application Client
                  </div>
                  <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground">
                    Offline-First Mobile Architecture
                  </h2>
                  <p className="mt-4 text-base sm:text-lg leading-relaxed text-foreground-muted">
                    Engineered with React Native and Expo in strict TypeScript mode. All core astrological calculations, numerology reductions, and Kundli geometry generation execute 100% locally on the device with zero network dependency.
                  </p>

                  <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm font-mono text-foreground-muted">
                    {[
                      'React Native Expo SDK 51/52 Framework',
                      'Deterministic Local Math Calculation (0ms API latency)',
                      'Zustand Reactive State Architecture',
                      'RevenueCat Subscription Bridge (₹288/mo · ₹2,880/yr)',
                      'Free Forever Daily Reading & Core Numbers Tier',
                      'Edge Static Web Experience on Cloudflare Workers',
                    ].map((feature) => (
                      <div key={feature} className="flex items-center gap-2.5 p-3 rounded-xl border border-border-subtle/60 bg-surface/60">
                        <CheckCircle2 className="h-4 w-4 text-accent-light shrink-0" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="w-full lg:w-80 rounded-2xl border border-border-subtle/80 bg-background/90 p-6 space-y-4">
                  <span className="font-mono text-xs font-bold uppercase tracking-widest text-accent-light block border-b border-border-subtle/50 pb-2">
                    Verified Empirical Status
                  </span>
                  <div className="space-y-3 text-xs font-mono">
                    <div>
                      <span className="text-foreground-dim block">Test Suites:</span>
                      <span className="text-foreground font-semibold">96 / 96 Passing (0 Failures)</span>
                    </div>
                    <div>
                      <span className="text-foreground-dim block">Database Vector Index:</span>
                      <span className="text-foreground font-semibold">13 Classical Sources / 27 Chunks</span>
                    </div>
                    <div>
                      <span className="text-foreground-dim block">Row-Level Security:</span>
                      <span className="text-foreground font-semibold">9 Active Strict RLS Policies</span>
                    </div>
                    <div>
                      <span className="text-foreground-dim block">Android Package:</span>
                      <span className="text-accent-light font-semibold">ai.jyoti.app (Closed Test Track)</span>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Disclaimer & Status Callout */}
            <div className="rounded-2xl border border-border-subtle/80 bg-background/90 p-6 sm:p-8">
              <span className="font-mono text-xs font-bold uppercase tracking-widest text-foreground-dim">
                Scientific Context &amp; Implementation Boundary
              </span>
              <p className="mt-2 text-sm leading-relaxed text-foreground-muted">
                JyotiAI presents numerology and Vedic astrology as traditional interpretive frameworks for self-reflection and personal inquiry. It does <strong className="text-foreground">not</strong> claim deterministic fortune-telling, medical diagnosis, or legal/financial advice. The deterministic mathematical calculation engines, Kundli visualizer, and numerology cycle calendars are fully implemented and verified; commercial store access is currently managed via Google Play closed tester tracks.
              </p>
            </div>
          </div>
        )}

        {!isAion && !isJyotiAi && (
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
