import Image from 'next/image'
import { Button } from '@/components/ui/Button'
import { Badge } from '@/components/ui/Badge'
import { generatePageMetadata } from '@/lib/seo'
import { ArrowRight, Cpu, Terminal, Compass } from 'lucide-react'

export const metadata = generatePageMetadata({
  title: 'About Rahuul Kalappatt',
  description:
    'Rahuul Kalappatt is an engineer, researcher, builder and creative technologist exploring AI systems, quantitative research, automation, digital infrastructure and experimental technology.',
  url: '/about',
})

const CAPABILITIES = [
  'Artificial Intelligence Systems',
  'Quantitative Strategy & Execution',
  'Multi-Agent Orchestration',
  'Deep-Space Systems Autonomy',
  'Media Engineering & Pipelines',
  'TypeScript & Next.js Architecture',
  'Python & High-Performance Compute',
  'Self-Healing Systems Design',
]

export default function AboutPage() {
  return (
    <div className="container-default py-16 sm:py-24">
      {/* ── 1. Hero Biography & Primary Identity ── */}
      <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 items-center mb-24">
        <div className="lg:col-span-7">
          <span className="font-mono text-xs font-semibold uppercase tracking-widest text-accent-light">
            Identity &amp; Biography
          </span>
          <h1 className="mt-3 font-display text-4xl font-bold tracking-tight sm:text-6xl">
            About Rahuul Kalappatt
          </h1>
          <p className="mt-2 font-mono text-sm text-accent-light">
            AI Architect, Quant Researcher &amp; Systems Engineer
          </p>

          <p className="mt-6 text-lg leading-relaxed text-foreground-muted">
            Rahuul Kalappatt is an engineer, researcher, builder, and creative technologist operating under the identity <strong className="text-foreground">RAHUUL</strong> (The Shadow Architect). His work centers on engineering autonomous software systems, quantitative research engines, media infrastructure, and deep-space autonomy concepts built to compound over time.
          </p>
          <p className="mt-4 text-base leading-relaxed text-foreground-muted">
            Driven by a philosophy of private experimentation and disciplined execution—<em>“Build systems in silence. Reveal results, not intentions.”</em>—Rahuul focuses on architecture that prioritizes mathematical validity, fault tolerance, and long-term durability over short-lived noise.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <Button href="/work" size="lg">
              Explore Core Systems
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button href="/contact" variant="secondary" size="lg">
              Get in Touch
            </Button>
          </div>
        </div>

        <div className="lg:col-span-5 flex justify-center">
          <div className="group relative w-full max-w-sm overflow-hidden rounded-3xl border border-border-subtle/80 bg-surface/50 p-3 shadow-elevated transition-all duration-300 hover:border-accent/40">
            <div className="relative aspect-[4/5] w-full overflow-hidden rounded-2xl bg-surface">
              <Image
                src="/images/portrait.png"
                alt="Rahuul Kalappatt — The Shadow Architect"
                fill
                priority
                sizes="(max-width: 768px) 100vw, 380px"
                className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-[1.03]"
              />
            </div>
            <div className="absolute bottom-6 right-6 flex flex-col rounded-xl border border-border-subtle/80 bg-surface/90 px-3.5 py-2 shadow-card backdrop-blur-xl">
              <span className="font-display text-xs font-bold tracking-wider text-foreground uppercase">
                Rahuul Kalappatt
              </span>
              <span className="text-[10px] font-mono text-accent-light">
                Official Digital Headquarters
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* ── 2. Core Capabilities & Domains ── */}
      <section className="mb-24">
        <span className="font-mono text-xs font-semibold uppercase tracking-widest text-accent-light block mb-2">
          Engineering &amp; Research Vectors
        </span>
        <h2 className="font-display text-3xl font-bold tracking-tight mb-8">
          Core Domains &amp; Technical Focus
        </h2>
        <div className="flex flex-wrap gap-3">
          {CAPABILITIES.map((item) => (
            <Badge key={item} variant="accent" size="md">
              {item}
            </Badge>
          ))}
        </div>
      </section>

      {/* ── 3. Engineering Pillars ── */}
      <section className="grid grid-cols-1 gap-8 md:grid-cols-3">
        <div className="rounded-2xl border border-border-subtle/80 bg-surface/30 p-8">
          <div className="inline-flex rounded-xl bg-accent/10 p-3 text-accent-light mb-4">
            <Cpu className="h-6 w-6" />
          </div>
          <h3 className="font-display text-xl font-bold">Autonomous Systems &amp; AI</h3>
          <p className="mt-2 text-sm leading-relaxed text-foreground-muted">
            Designing deterministic execution engines, agent orchestration frameworks (OPENCLAW), and evidence-driven AI decision architectures.
          </p>
        </div>

        <div className="rounded-2xl border border-border-subtle/80 bg-surface/30 p-8">
          <div className="inline-flex rounded-xl bg-accent/10 p-3 text-accent-light mb-4">
            <Terminal className="h-6 w-6" />
          </div>
          <h3 className="font-display text-xl font-bold">Quantitative Research</h3>
          <p className="mt-2 text-sm leading-relaxed text-foreground-muted">
            Building mathematical strategy evaluation platforms (VEGA OMEGA) and modular trading execution engines (RAHUULBOT) with strict risk controls.
          </p>
        </div>

        <div className="rounded-2xl border border-border-subtle/80 bg-surface/30 p-8">
          <div className="inline-flex rounded-xl bg-accent/10 p-3 text-accent-light mb-4">
            <Compass className="h-6 w-6" />
          </div>
          <h3 className="font-display text-xl font-bold">Deep-Space Autonomy (AION)</h3>
          <p className="mt-2 text-sm leading-relaxed text-foreground-muted">
            Exploring multi-decade self-healing spacecraft concepts (AION), robotic caretaker architectures (AION ORACLE), and long-horizon space systems.
          </p>
        </div>
      </section>
    </div>
  )
}
