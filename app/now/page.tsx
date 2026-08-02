import { generatePageMetadata } from '@/lib/seo'

export const metadata = generatePageMetadata({
  title: 'Now',
  description: 'What Rahul is currently focused on, building, and reading right now.',
})

export default function NowPage() {
  return (
    <div className="container-default py-16 sm:py-24">
      <div className="max-w-3xl mb-16">
        <span className="font-mono text-xs font-semibold uppercase tracking-widest text-accent-light">
          Current Focus
        </span>
        <h1 className="mt-3 font-display text-4xl font-bold tracking-tight sm:text-6xl">
          What I&apos;m Doing Now
        </h1>
        <p className="mt-4 text-sm font-mono text-foreground-dim">
          Updated August 2026 from Bangalore, India.
        </p>
      </div>

      <div className="max-w-3xl flex flex-col gap-8">
        <div className="rounded-2xl border border-border-subtle/80 bg-surface/40 p-8">
          <h2 className="font-display text-2xl font-bold mb-3">1. Building RAHUUL v1.0</h2>
          <p className="text-base leading-relaxed text-foreground-muted">
            Fine-tuning production design tokens, GSAP scroll-driven motion architecture, and Next.js 16 App Router static export performance.
          </p>
        </div>

        <div className="rounded-2xl border border-border-subtle/80 bg-surface/40 p-8">
          <h2 className="font-display text-2xl font-bold mb-3">2. Systems &amp; Quant Research</h2>
          <p className="text-base leading-relaxed text-foreground-muted">
            Investigating market micro-structure data pipelines and building high-throughput event processing systems.
          </p>
        </div>
      </div>
    </div>
  )
}
