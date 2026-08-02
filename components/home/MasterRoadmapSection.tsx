import { Compass, Sparkles, Layers, Terminal, Shield } from 'lucide-react'

const ROADMAP_TIERS = [
  {
    tier: 'APEX',
    title: 'Strategic Autonomy & Integrated Systems',
    color: 'border-amber-500/40 bg-amber-500/5 text-amber-400',
    icon: Sparkles,
    items: ['Strategic Mastery', 'Integrated Systems Engine', 'Long-term Autonomy'],
  },
  {
    tier: 'OPPORTUNITY',
    title: 'Research to Asset Conversion',
    color: 'border-accent/40 bg-accent/5 text-accent-light',
    icon: Compass,
    items: [
      'Discover Unseen Opportunities',
      'Convert Research into Prototypes',
      'Convert Prototypes into Systems',
      'Convert Systems into Durable Assets',
    ],
  },
  {
    tier: 'EXECUTION',
    title: 'Production Infrastructure & Media Workflows',
    color: 'border-accent-cool/40 bg-accent-cool/5 text-accent-cool',
    icon: Terminal,
    items: [
      'Intelligent Automation',
      'Algorithmic Trading Research',
      'Software Architecture',
      'Media Systems',
      'Content Production',
      'Business Operations',
    ],
  },
  {
    tier: 'KNOWLEDGE',
    title: 'Theoretical & Analytical Domains',
    color: 'border-border-strong/60 bg-surface/60 text-foreground',
    icon: Layers,
    items: [
      'Systems Thinking',
      'Artificial Intelligence',
      'Quantitative Research',
      'Market Structure',
      'Quantum Physics (Study)',
      'Cognitive Science (Study)',
    ],
  },
  {
    tier: 'FOUNDATION',
    title: 'Core Discipline & Psychological Resilience',
    color: 'border-border-subtle bg-surface/40 text-foreground-muted',
    icon: Shield,
    items: [
      'Personal Discipline',
      'Psychological Control',
      'Resilience',
      'Deep Work Focus',
      'Rigorous Documentation',
    ],
  },
]

export function MasterRoadmapSection() {
  return (
    <section id="roadmap" className="relative py-24 sm:py-32 bg-surface/20 border-t border-border-subtle/50">
      <div className="container-default">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="font-mono text-xs font-semibold uppercase tracking-widest text-accent-light">
            Systems Architecture Pyramid
          </span>
          <h2 className="mt-3 font-display text-3xl sm:text-5xl font-bold tracking-tight text-foreground">
            The Master Roadmap
          </h2>
          <p className="mt-4 text-base sm:text-lg leading-relaxed text-foreground-muted">
            An ascending blueprint for systematic engineering — from psychological foundation to strategic autonomy.
          </p>
        </div>

        {/* ── Ascending Architecture Pyramid Diagram ── */}
        <div className="max-w-4xl mx-auto flex flex-col gap-5">
          {ROADMAP_TIERS.map((level, idx) => {
            const Icon = level.icon
            return (
              <div
                key={level.tier}
                className={`relative rounded-2xl border p-6 sm:p-8 transition-all duration-300 ${level.color} shadow-elevated`}
                style={{
                  // Visual pyramid taper effect
                  maxWidth: `${100 - idx * 4}%`,
                  margin: '0 auto',
                  width: '100%',
                }}
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-4 pb-4 border-b border-border-subtle/30">
                  <div className="flex items-center gap-3">
                    <div className="rounded-lg bg-surface/80 p-2 border border-border-subtle/50">
                      <Icon className="h-5 w-5" />
                    </div>
                    <div>
                      <span className="font-mono text-xs font-bold uppercase tracking-widest opacity-75">
                        Tier 0{5 - idx} · {level.tier}
                      </span>
                      <h3 className="font-display text-lg sm:text-xl font-bold text-foreground">
                        {level.title}
                      </h3>
                    </div>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2.5">
                  {level.items.map((item) => (
                    <span
                      key={item}
                      className="inline-flex items-center rounded-lg border border-border-subtle/60 bg-surface/80 px-3 py-1.5 text-xs font-mono font-medium text-foreground transition-colors hover:border-accent/40"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            )
          })}
        </div>

        {/* ── Symbolic Principles Disclosures ── */}
        <div className="mt-16 max-w-3xl mx-auto rounded-2xl border border-border-subtle/80 bg-surface/40 p-6 sm:p-8 text-center">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left mb-6">
            <div className="p-4 rounded-xl border border-border-subtle/50 bg-background/50">
              <span className="font-mono text-xs font-semibold uppercase text-accent-light block mb-1">
                Execution Directive
              </span>
              <p className="text-sm font-display font-medium text-foreground">
                &ldquo;Protect unfinished work until it is ready.&rdquo;
              </p>
            </div>
            <div className="p-4 rounded-xl border border-border-subtle/50 bg-background/50">
              <span className="font-mono text-xs font-semibold uppercase text-amber-400 block mb-1">
                Opportunity Strategy
              </span>
              <p className="text-sm font-display font-medium text-foreground">
                &ldquo;Build systems that expand the field of possible opportunities.&rdquo;
              </p>
            </div>
          </div>
          <p className="text-xs font-mono text-foreground-dim">
            * Note: Fear and certainty metrics in systems diagrams represent symbolic internal reminders, not scientific measurements.
          </p>
        </div>
      </div>
    </section>
  )
}
