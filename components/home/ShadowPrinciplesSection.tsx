import { Lock, Cpu, BarChart3, ShieldCheck } from 'lucide-react'

const PRINCIPLES = [
  {
    number: '01',
    title: 'Build Before Broadcasting',
    description:
      'Prototype, test, validate, and improve before publishing. Internal standards precede public exposure.',
    icon: Lock,
  },
  {
    number: '02',
    title: 'Systems Over Hype',
    description:
      'Create durable infrastructure instead of chasing temporary attention. Architecture compounds over time.',
    icon: Cpu,
  },
  {
    number: '03',
    title: 'Evidence Over Impression',
    description:
      'Measure progress through working systems, clean data, and documented results rather than narrative claims.',
    icon: BarChart3,
  },
  {
    number: '04',
    title: 'Quiet Execution',
    description:
      'Protect focus, reduce unnecessary exposure, and let completed work establish long-term credibility.',
    icon: ShieldCheck,
  },
]

export function ShadowPrinciplesSection() {
  return (
    <section className="relative py-24 sm:py-32 bg-background border-t border-border-subtle/50">
      <div className="container-default">
        <div className="max-w-2xl mx-auto text-center mb-16">
          <span className="font-mono text-xs font-semibold uppercase tracking-widest text-accent-light">
            Operating Philosophy
          </span>
          <h2 className="mt-3 font-display text-3xl sm:text-5xl font-bold tracking-tight text-foreground">
            Built in Shadow
          </h2>
          <p className="mt-4 text-base sm:text-lg leading-relaxed text-foreground-muted">
            Core principles guiding private experimentation, disciplined execution, and long-term systems engineering.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {PRINCIPLES.map((principle) => {
            const Icon = principle.icon
            return (
              <div
                key={principle.number}
                className="group relative flex flex-col justify-between rounded-2xl border border-border-subtle/80 bg-surface/30 p-8 sm:p-10 transition-all duration-300 hover:border-accent/40 hover:bg-surface/60 hover:shadow-elevated"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="font-mono text-2xl font-bold text-accent-light/60 group-hover:text-accent-light transition-colors">
                      {principle.number}
                    </span>
                    <div className="rounded-xl bg-accent/10 p-3 text-accent-light border border-accent/20">
                      <Icon className="h-5 w-5" />
                    </div>
                  </div>
                  <h3 className="font-display text-xl sm:text-2xl font-bold text-foreground mb-3">
                    {principle.title}
                  </h3>
                  <p className="text-sm sm:text-base leading-relaxed text-foreground-muted">
                    {principle.description}
                  </p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
