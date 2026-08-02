import Image from 'next/image'
import { Button } from '@/components/ui/Button'
import { Badge } from '@/components/ui/Badge'
import { generatePageMetadata } from '@/lib/seo'
import { ArrowRight, Cpu, Layers, ShieldCheck } from 'lucide-react'

export const metadata = generatePageMetadata({
  title: 'About Me',
  description: 'Learn more about Rahul — senior frontend architect, designer, and systems builder.',
})

const SKILLS = [
  'React 19 & Next.js 16',
  'TypeScript Strict',
  'Tailwind CSS v4',
  'GSAP & Lenis Motion',
  'Design Tokens & Systems',
  'WCAG 2.2 Accessibility',
  'Performance & Core Web Vitals',
  'Web Architecture & State',
]

export default function AboutPage() {
  return (
    <div className="container-default py-16 sm:py-24">
      {/* ── 1. Hero Biography ── */}
      <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 items-center mb-24">
        <div className="lg:col-span-7">
          <span className="font-mono text-xs font-semibold uppercase tracking-widest text-accent-light">
            Biography
          </span>
          <h1 className="mt-3 font-display text-4xl font-bold tracking-tight sm:text-6xl">
            Software engineer with a designer&apos;s eye.
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-foreground-muted">
            I am Rahul, a senior frontend architect with over 8 years of experience engineering high-performance Web applications, design component systems, and scalable UI architectures.
          </p>
          <p className="mt-4 text-base leading-relaxed text-foreground-muted">
            My engineering philosophy centers on technical precision, fluid interaction design, and uncompromising performance. I bridge the gap between complex backend systems and delightful user experiences.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Button href="/contact" size="lg">
              Get in Touch
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button href="/work" variant="secondary" size="lg">
              View Work
            </Button>
          </div>
        </div>

        <div className="lg:col-span-5 flex justify-center">
          <div className="relative w-full max-w-sm overflow-hidden rounded-3xl border border-border-subtle/80 bg-surface/50 p-3 shadow-elevated">
            <div className="relative aspect-[4/5] w-full overflow-hidden rounded-2xl bg-surface">
              <Image
                src="/images/portrait.png"
                alt="Rahul Portrait"
                fill
                priority
                sizes="(max-width: 768px) 100vw, 380px"
                className="object-cover object-center"
              />
            </div>
          </div>
        </div>
      </div>

      {/* ── 2. Core Capabilities ── */}
      <section className="mb-24">
        <h2 className="font-display text-3xl font-bold tracking-tight mb-8">
          Technical Stack &amp; Focus
        </h2>
        <div className="flex flex-wrap gap-3">
          {SKILLS.map((skill) => (
            <Badge key={skill} variant="accent" size="md">
              {skill}
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
          <h3 className="font-display text-xl font-bold">Performance First</h3>
          <p className="mt-2 text-sm leading-relaxed text-foreground-muted">
            Optimized bundles, zero CLS, sub-second LCP, and 60 FPS GPU-accelerated motion pipeline.
          </p>
        </div>

        <div className="rounded-2xl border border-border-subtle/80 bg-surface/30 p-8">
          <div className="inline-flex rounded-xl bg-accent/10 p-3 text-accent-light mb-4">
            <ShieldCheck className="h-6 w-6" />
          </div>
          <h3 className="font-display text-xl font-bold">Accessible by Default</h3>
          <p className="mt-2 text-sm leading-relaxed text-foreground-muted">
            WCAG 2.2 AA compliant focus management, keyboard navigation, and reduced motion fallbacks.
          </p>
        </div>

        <div className="rounded-2xl border border-border-subtle/80 bg-surface/30 p-8">
          <div className="inline-flex rounded-xl bg-accent/10 p-3 text-accent-light mb-4">
            <Layers className="h-6 w-6" />
          </div>
          <h3 className="font-display text-xl font-bold">Design Systems</h3>
          <p className="mt-2 text-sm leading-relaxed text-foreground-muted">
            Reusable component APIs, dark/light token architecture, and strict type safety.
          </p>
        </div>
      </section>
    </div>
  )
}
