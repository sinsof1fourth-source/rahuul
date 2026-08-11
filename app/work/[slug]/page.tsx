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
  Cpu,
  Layers,
  Sparkles,
  Zap,
  Wrench,
  Database,
  Dna,
  Compass,
  AlertTriangle,
  Radio,
  Activity,
  CheckCircle2,
  Terminal,
  Shield,
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
    url: `/work/${project.slug}`,
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

  return (
    <div className="relative isolate overflow-hidden py-16 sm:py-24">
      {/* Background ambient glow */}
      <div
        className="pointer-events-none absolute top-1/4 left-1/2 -z-10 h-[600px] w-[600px] -translate-x-1/2 rounded-full bg-accent/10 blur-[160px] dark:bg-accent/5"
        aria-hidden="true"
      />

      <div className="container-default">
        {/* Navigation back */}
        <div className="mb-10">
          <Link
            href="/work"
            className="inline-flex items-center gap-2 text-sm font-mono font-medium text-foreground-muted transition-colors hover:text-accent-light"
          >
            <ArrowLeft className="h-4 w-4" /> Back to Work &amp; Case Studies
          </Link>
        </div>

        {/* Header Hero */}
        <div className="max-w-4xl">
          <div className="flex flex-wrap items-center gap-3 mb-6">
            <span className="inline-flex items-center gap-2 rounded-full border border-accent/30 bg-accent/5 px-4 py-1 text-xs font-mono font-semibold text-accent-light uppercase tracking-wider">
              <ShieldCheck className="h-3.5 w-3.5" />
              {project.category}
            </span>
            <Badge variant="subtle" size="md">
              Status: {project.status}
            </Badge>
            <span className="font-mono text-xs text-foreground-dim">
              Timeline: {project.year}
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

          {/* Tags */}
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

        {/* ─── AION FLAGSHIP CUSTOM ARCHITECTURE PRESENTATION ─── */}
        {isAion && (
          <div className="mt-16 sm:mt-24 space-y-24">
            {/* Disclaimer & Non-Operational Status Callout */}
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
                    It is <strong className="text-foreground">not</strong> an existing operational aerospace company, active commercial venture, completed technology, or currently funded space mission. AION represents a theoretical architecture framework for autonomous deep-space systems and zero-human-intervention spacecraft operations.
                  </p>
                </div>
              </div>
            </div>

            {/* Core Mission Banner */}
            <div className="relative rounded-3xl border border-accent/40 bg-surface/40 p-8 sm:p-12 shadow-elevated overflow-hidden">
              <div
                className="pointer-events-none absolute inset-0 -z-10 bg-radial-gradient(ellipse at center, var(--accent-glow) 0%, transparent 70%) opacity-30"
                aria-hidden="true"
              />
              <span className="font-mono text-xs font-bold uppercase tracking-widest text-accent-light">
                Core Mission Statement
              </span>
              <blockquote className="mt-4 font-display text-2xl sm:text-4xl font-semibold text-foreground leading-snug">
                “Develop autonomous spacecraft capable of operating independently for decades and eventually enabling safe, long-duration human deep-space missions.”
              </blockquote>
            </div>

            {/* THE 30-YEAR QUESTION SECTION */}
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
                <p className="mt-6 text-base sm:text-lg leading-relaxed text-foreground-muted">
                  Operating in deep space beyond the inner solar system presents extreme isolation where signal latencies render real-time Earth control impossible. A 30-year mission requires a fundamentally self-contained system capable of absorbing cosmic ray bit-flips, thermal degradation, kinetic micrometer impacts, and component failures through internal autonomous reasoning and local fabrication.
                </p>
              </div>
            </section>

            {/* THE AUTONOMOUS OPERATIONAL LOOP */}
            <section>
              <div className="max-w-2xl mb-12">
                <span className="font-mono text-xs font-semibold uppercase tracking-widest text-accent-light">
                  System Self-Healing Architecture
                </span>
                <h2 className="mt-2 font-display text-3xl sm:text-4xl font-bold tracking-tight text-foreground">
                  The Autonomous Operational Loop
                </h2>
                <p className="mt-2 text-foreground-muted">
                  Continuous 6-stage closed-loop decision matrix running locally on radiation-hardened edge compute nodes.
                </p>
              </div>

              {/* Loop Diagram Banner */}
              <div className="mb-10 rounded-2xl border border-accent/30 bg-surface/60 p-6 shadow-inner">
                <div className="flex flex-wrap items-center justify-between gap-3 text-xs sm:text-sm font-mono font-bold text-accent-light">
                  <span className="flex items-center gap-1.5"><Activity className="h-4 w-4" /> DETECT</span>
                  <span className="text-foreground-dim">→</span>
                  <span className="flex items-center gap-1.5"><Cpu className="h-4 w-4" /> DIAGNOSE</span>
                  <span className="text-foreground-dim">→</span>
                  <span className="flex items-center gap-1.5"><Wrench className="h-4 w-4" /> REPAIR</span>
                  <span className="text-foreground-dim">→</span>
                  <span className="flex items-center gap-1.5"><Compass className="h-4 w-4" /> ADAPT</span>
                  <span className="text-foreground-dim">→</span>
                  <span className="flex items-center gap-1.5"><Database className="h-4 w-4" /> RECORD</span>
                  <span className="text-foreground-dim">→</span>
                  <span className="flex items-center gap-1.5"><Radio className="h-4 w-4" /> COMMUNICATE</span>
                </div>
              </div>

              {/* Loop Details Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                  {
                    step: '01',
                    name: 'DETECT',
                    icon: Activity,
                    desc: 'Continuous multi-spectral telemetry monitoring, thermal variance sensing, structural strain gauge analysis, and cosmic ray anomaly identification.',
                  },
                  {
                    step: '02',
                    name: 'DIAGNOSE',
                    icon: Cpu,
                    desc: 'Local edge AI fault isolation, root-cause probability modeling, and predictive wear estimation without Earth-based human intervention.',
                  },
                  {
                    step: '03',
                    name: 'REPAIR',
                    icon: Wrench,
                    desc: 'Robotic component re-routing, self-healing solid-state memory re-mapping, automated soldering, and in-situ 3D additive manufacturing.',
                  },
                  {
                    step: '04',
                    name: 'ADAPT',
                    icon: Compass,
                    desc: 'Dynamic power allocation, degraded-mode execution, trajectory micro-adjustments, and fail-safe isolation of compromised modules.',
                  },
                  {
                    step: '05',
                    name: 'RECORD',
                    icon: Database,
                    desc: 'Cryptographically immutable mission log vaulting, local state storage in optical quartz memory, and long-term diagnostic history retention.',
                  },
                  {
                    step: '06',
                    name: 'COMMUNICATE',
                    icon: Radio,
                    desc: 'High-frequency directional laser burst transmission, ultra-compressed telemetry telemetry bursts, and interstellar optical beacon signals.',
                  },
                ].map((item) => {
                  const IconComp = item.icon
                  return (
                    <div
                      key={item.name}
                      className="rounded-2xl border border-border-subtle/80 bg-surface/30 p-6 transition-all duration-300 hover:border-accent/40 hover:bg-surface/60"
                    >
                      <div className="flex items-center justify-between mb-4">
                        <span className="font-mono text-xs font-bold text-accent-light/70">{item.step}</span>
                        <div className="rounded-xl bg-accent/10 p-2.5 text-accent-light border border-accent/20">
                          <IconComp className="h-4 w-4" />
                        </div>
                      </div>
                      <h3 className="font-display font-bold text-lg text-foreground">{item.name}</h3>
                      <p className="mt-2 text-xs leading-relaxed text-foreground-muted">{item.desc}</p>
                    </div>
                  )
                })}
              </div>
            </section>

            {/* 10 ARCHITECTURE MODULES GRID */}
            <section>
              <div className="max-w-2xl mb-12">
                <span className="font-mono text-xs font-semibold uppercase tracking-widest text-accent-light">
                  System Modular Specification
                </span>
                <h2 className="mt-2 font-display text-3xl sm:text-4xl font-bold tracking-tight text-foreground">
                  10 Architecture Modules
                </h2>
                <p className="mt-2 text-foreground-muted">
                  The ten functional pillars comprising the AION deep-space spacecraft design concept.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {[
                  {
                    num: '01',
                    name: 'AION-1 — Technology Demonstrator',
                    tag: 'Orbital Testbed',
                    desc: 'Initial low-Earth and lunar orbit testbed designed to validate autonomous software fault-recovery, radiation-hardened edge compute architectures, and closed-loop decision algorithms under real space environmental conditions.',
                    icon: Terminal,
                  },
                  {
                    num: '02',
                    name: 'AION-2 — Multi-Year Autonomous Spacecraft',
                    tag: 'Precursor Vessel',
                    desc: 'Outer solar system precursor vessel engineered for multi-year uncrewed planetary flybys, autonomous deep-space navigation, long-distance optical communication, and self-contained system maintenance.',
                    icon: Layers,
                  },
                  {
                    num: '03',
                    name: 'AION-3 — 30-Year Deep-Space Demonstrator',
                    tag: 'Interstellar Probe',
                    desc: 'Ultra-long-duration interstellar and heliopause boundary demonstrator engineered for 30+ years of continuous operational life without physical human maintenance or real-time ground control.',
                    icon: Sparkles,
                  },
                  {
                    num: '04',
                    name: 'AION ORACLE — Autonomous Robotic Caretaker',
                    tag: 'Intelligence Core',
                    desc: 'Multi-agent intelligent core and robotic caretaker responsible for spacecraft telemetry monitoring, physical maintenance, scientific payload management, emergency protocols, and mission archiving.',
                    icon: Cpu,
                  },
                  {
                    num: '05',
                    name: 'AION LIFE — Life Support & Preservation Research',
                    tag: 'Bio-Research Vector',
                    desc: 'Theoretical long-horizon research into closed-loop bio-regenerative life support systems, environmental recycling, and speculative human preservation research. (Requires extensive future scientific validation).',
                    icon: Dna,
                  },
                  {
                    num: '06',
                    name: 'AION SHIELD — Radiation Protection Systems',
                    tag: 'Defensive Barrier',
                    desc: 'Advanced active electromagnetic shielding concepts, hydrogen-dense polymer material layers, and magnetic deflection field generators designed to mitigate solar particle events and galactic cosmic radiation.',
                    icon: Shield,
                  },
                  {
                    num: '07',
                    name: 'AION POWER — Long-Duration Power Systems',
                    tag: 'Multi-Decade Energy',
                    desc: 'Hybrid micro-nuclear thermo-electric generators, decay-heat energy harvesting systems, and ultra-high-density solid-state power storage engineered for steady performance across decades.',
                    icon: Zap,
                  },
                  {
                    num: '08',
                    name: 'AION FAB — Autonomous Repair & Manufacturing',
                    tag: 'In-Situ Fabrication',
                    desc: 'In-situ 3D metal and polymer additive manufacturing units, micro-robotic internal repair crawlers, automated laser soldering, and modular unit swapping subsystems.',
                    icon: Wrench,
                  },
                  {
                    num: '09',
                    name: 'AION ARCHIVE — Knowledge Preservation',
                    tag: 'Immutable Vault',
                    desc: 'High-density optical quartz mass storage, radiation-hardened memory matrices, and multi-generational knowledge vaulting to preserve human scientific data across space and time.',
                    icon: Database,
                  },
                  {
                    num: '10',
                    name: 'AION RESEARCH — Physics, Biology & Autonomy',
                    tag: 'Theoretical Physics',
                    desc: 'Theoretical research initiatives focusing on high-Isp advanced propulsion concepts, relativistic communication dynamics, extremophile biology, and deep-space autonomous AI models.',
                    icon: Compass,
                  },
                ].map((mod) => {
                  const ModIcon = mod.icon
                  return (
                    <div
                      key={mod.num}
                      className="group relative flex flex-col justify-between rounded-2xl border border-border-subtle/80 bg-surface/30 p-8 transition-all duration-300 hover:border-accent/40 hover:bg-surface/60 hover:shadow-card"
                    >
                      <div>
                        <div className="flex items-center justify-between mb-4">
                          <span className="font-mono text-xs font-bold text-accent-light/80">MODULE {mod.num}</span>
                          <span className="inline-flex items-center rounded-full border border-accent/20 bg-accent/5 px-2.5 py-0.5 text-[11px] font-mono text-accent-light">
                            {mod.tag}
                          </span>
                        </div>
                        <div className="flex items-start gap-3">
                          <div className="rounded-xl bg-accent/10 p-2.5 text-accent-light border border-accent/20 shrink-0 mt-1">
                            <ModIcon className="h-5 w-5" />
                          </div>
                          <div>
                            <h3 className="font-display text-xl font-bold text-foreground group-hover:text-accent-light transition-colors">
                              {mod.name}
                            </h3>
                            <p className="mt-3 text-sm leading-relaxed text-foreground-muted">
                              {mod.desc}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  )
                })}
              </div>
            </section>

            {/* AION ORACLE DEEP-DIVE SECTION */}
            <section className="rounded-3xl border border-accent/30 bg-surface/40 p-8 sm:p-12 shadow-elevated">
              <div className="flex flex-col lg:flex-row items-start justify-between gap-10">
                <div className="max-w-2xl">
                  <div className="inline-flex items-center gap-2 rounded-full border border-accent/30 bg-accent/10 px-3 py-1 text-xs font-mono font-semibold text-accent-light uppercase tracking-wider mb-4">
                    <Cpu className="h-3.5 w-3.5" /> Autonomous Core Intelligence
                  </div>
                  <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground">
                    AION ORACLE — Autonomous Robotic Caretaker
                  </h2>
                  <p className="mt-4 text-base sm:text-lg leading-relaxed text-foreground-muted">
                    AION ORACLE serves as the core intelligent caretaker and central multi-agent orchestrator embedded directly inside the spacecraft. Designed to execute continuous engineering, scientific, and safety duties across multi-decade isolation.
                  </p>

                  <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm font-mono text-foreground-muted">
                    {[
                      'Spacecraft Telemetry & Environment Monitoring',
                      'Engineering Maintenance & Robotics Control',
                      'Autonomous Scientific Experimentation',
                      'High-Latency Communication Compression',
                      'Emergency Fail-Safe & Safe-Mode Protocols',
                      'Immutable Mission Log Archiving',
                    ].map((duty) => (
                      <div key={duty} className="flex items-center gap-2.5 p-3 rounded-xl border border-border-subtle/60 bg-surface/60">
                        <CheckCircle2 className="h-4 w-4 text-accent-light shrink-0" />
                        <span>{duty}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="w-full lg:w-80 rounded-2xl border border-border-subtle/80 bg-background/90 p-6 space-y-4">
                  <span className="font-mono text-xs font-bold uppercase tracking-widest text-accent-light block border-b border-border-subtle/50 pb-2">
                    ORACLE Core Parameters
                  </span>
                  <div className="space-y-3 text-xs font-mono">
                    <div>
                      <span className="text-foreground-dim block">Architecture:</span>
                      <span className="text-foreground font-semibold">Triple-Redundant Edge Neural Mesh</span>
                    </div>
                    <div>
                      <span className="text-foreground-dim block">Fault Recovery:</span>
                      <span className="text-foreground font-semibold">Sub-millisecond Self-Healing Memory</span>
                    </div>
                    <div>
                      <span className="text-foreground-dim block">Decision Authority:</span>
                      <span className="text-foreground font-semibold">Full Autonomous Mission Protocol</span>
                    </div>
                    <div>
                      <span className="text-foreground-dim block">Human Intervention:</span>
                      <span className="text-accent-light font-semibold">Zero Required (Deep Space)</span>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* HUMAN HIBERNATION / SUSPENDED-ANIMATION RESEARCH DISCLAIMER */}
            <section className="rounded-3xl border border-border-subtle/80 bg-background/90 p-8 sm:p-12">
              <div className="max-w-3xl">
                <span className="font-mono text-xs font-bold uppercase tracking-widest text-accent-cool">
                  Scientific Validation &amp; Ethics Statement
                </span>
                <h2 className="mt-3 font-display text-3xl sm:text-4xl font-bold text-foreground">
                  Human Preservation &amp; Hibernation Research Focus
                </h2>
                <div className="mt-6 p-6 rounded-2xl border border-accent-cool/30 bg-accent-cool/5 text-sm sm:text-base leading-relaxed text-foreground-muted space-y-4">
                  <p>
                    <strong className="text-foreground">Scientific Status Note:</strong> Current biological and medical science does <strong className="text-foreground">not</strong> provide a proven, safe, or human-rated 30-year human suspended-animation or synthetic hibernation capability.
                  </p>
                  <p>
                    Within the AION LIFE framework, human preservation is treated strictly as a <strong className="text-foreground">speculative future research discipline</strong>. Any future transition from theoretical biological modeling to physical human applications would require decades of peer-reviewed biological research, ground-based laboratory validation, extensive ethical review, and international space agency regulatory approvals.
                  </p>
                  <p className="text-xs font-mono text-foreground-dim">
                    * AION does not claim current possession of hibernation technology, 30-year human-rated spacecraft, or deep-space crewed propulsion systems.
                  </p>
                </div>
              </div>
            </section>

            {/* 2026 → 2056 ROADMAP TIMELINE */}
            <section>
              <div className="max-w-2xl mb-12">
                <span className="font-mono text-xs font-semibold uppercase tracking-widest text-accent-light">
                  Long-Horizon Execution Blueprint
                </span>
                <h2 className="mt-2 font-display text-3xl sm:text-5xl font-bold tracking-tight text-foreground">
                  2026 → 2056 Conceptual Roadmap
                </h2>
                <p className="mt-2 text-foreground-muted">
                  A multi-decade ascending roadmap outlining conceptual research milestones over thirty years.
                </p>
              </div>

              <div className="relative border-l-2 border-accent/30 ml-4 sm:ml-8 space-y-12 pl-6 sm:pl-10">
                {[
                  {
                    phase: 'PHASE 01',
                    years: '2026 — 2030',
                    title: 'Foundation & Mathematical Modeling',
                    status: 'Active Conceptual Research',
                    desc: 'Specification of autonomous loop algorithms, radiation-hardened software architecture, trade-off studies in closed-loop power systems, and peer-reviewed theoretical paper publications.',
                  },
                  {
                    phase: 'PHASE 02',
                    years: '2030 — 2038',
                    title: 'AION-1 Earth/Lunar Orbit Technology Demonstrator',
                    status: 'Future Conceptual Phase',
                    desc: 'Deployment of orbital software testbeds to validate local edge fault recovery, autonomous diagnostic loops, and micro-robotic self-repair simulations in real space environment conditions.',
                  },
                  {
                    phase: 'PHASE 03',
                    years: '2038 — 2046',
                    title: 'AION-2 Multi-Year Outer System Precursor Probe',
                    status: 'Future Conceptual Phase',
                    desc: 'Deep-space uncrewed probe launched to outer solar system planets (Jupiter/Saturn system flybys) to test multi-year zero-ground-intervention operations and long-distance optical communications.',
                  },
                  {
                    phase: 'PHASE 04',
                    years: '2046 — 2056',
                    title: 'AION-3 30-Year Deep-Space Demonstrator',
                    status: 'Future Conceptual Phase',
                    desc: 'Target launch of a 30-year interstellar/heliopause boundary demonstrator probe powered by AION ORACLE autonomous caretaker intelligence for multi-decade zero-maintenance survival.',
                  },
                  {
                    phase: 'PHASE 05',
                    years: '2056+',
                    title: 'Long-Horizon Deep-Space Infrastructure',
                    status: 'Long-Term Vision',
                    desc: 'Integration of mature autonomous systems, validated life-support technologies, and deep-space infrastructure laying foundations for safe future human deep-space missions.',
                  },
                ].map((step) => (
                  <div key={step.phase} className="relative group">
                    {/* Circle marker */}
                    <div className="absolute -left-[31px] sm:-left-[47px] top-1.5 h-5 w-5 rounded-full border-2 border-accent bg-background group-hover:bg-accent transition-colors" />

                    <div className="rounded-2xl border border-border-subtle/80 bg-surface/30 p-6 sm:p-8 transition-all duration-300 hover:border-accent/40 hover:bg-surface/60">
                      <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                        <div className="flex items-center gap-3">
                          <span className="font-mono text-xs font-bold text-accent-light">{step.phase}</span>
                          <span className="font-mono text-xs text-foreground-dim">· {step.years}</span>
                        </div>
                        <span className="inline-flex items-center rounded-full border border-border-subtle px-2.5 py-0.5 text-xs font-mono text-foreground-muted">
                          {step.status}
                        </span>
                      </div>
                      <h3 className="font-display font-bold text-xl sm:text-2xl text-foreground">
                        {step.title}
                      </h3>
                      <p className="mt-3 text-sm leading-relaxed text-foreground-muted">
                        {step.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </div>
        )}

        {/* DEFAULT PRESENTATION FOR OTHER PROJECTS */}
        {!isAion && (
          <div className="mt-16 rounded-3xl border border-border-subtle/80 bg-surface/30 p-8 sm:p-12">
            <h2 className="font-display text-2xl font-bold text-foreground">Architecture Overview</h2>
            <p className="mt-4 text-base leading-relaxed text-foreground-muted">
              {project.description}
            </p>
          </div>
        )}

        {/* RELATED PROJECTS & FOOTER NAVIGATION */}
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
              href="/work"
              className="inline-flex items-center gap-2 text-sm font-semibold text-accent-light hover:underline"
            >
              View all systems <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {relatedProjects.map((rel) => (
              <Link
                key={rel.slug}
                href={`/work/${rel.slug}`}
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
