import { generatePageMetadata } from '@/lib/seo'

export const metadata = generatePageMetadata({
  title: 'Uses & Engineering Workstation',
  description: 'Hardware, software tools, research stack, and workstation setup used daily by Rahuul Kalappatt.',
  url: '/uses',
})

const GEAR = [
  { category: 'Workstation', item: 'MacBook Pro 16" (M3 Max, 64GB RAM)' },
  { category: 'Display', item: 'Apple Studio Display 27" 5K' },
  { category: 'Editor & Terminal', item: 'VS Code / Antigravity IDE & Ghostty Terminal' },
  { category: 'Design Stack', item: 'Figma & Principle' },
]

export default function UsesPage() {
  return (
    <div className="container-default py-16 sm:py-24">
      <div className="max-w-3xl mb-16">
        <span className="font-mono text-xs font-semibold uppercase tracking-widest text-accent-light">
          Setup
        </span>
        <h1 className="mt-3 font-display text-4xl font-bold tracking-tight sm:text-6xl">
          Hardware &amp; Software Tools
        </h1>
        <p className="mt-4 text-lg leading-relaxed text-foreground-muted">
          A living document of the developer tools, hardware peripherals, and design software I use daily to build digital products.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-6 max-w-3xl">
        {GEAR.map((g) => (
          <div key={g.item} className="flex flex-col sm:flex-row sm:items-center justify-between rounded-xl border border-border-subtle/80 bg-surface/40 p-6">
            <span className="font-mono text-xs font-semibold uppercase text-accent-light">
              {g.category}
            </span>
            <span className="font-display font-bold text-foreground text-lg mt-1 sm:mt-0">
              {g.item}
            </span>
          </div>
        ))}
      </div>
    </div>
  )
}
