import { generatePageMetadata } from '@/lib/seo'
import { Badge } from '@/components/ui/Badge'
import { Mic, MapPin } from 'lucide-react'

export const metadata = generatePageMetadata({
  title: 'Speaking & Keynotes',
  description: 'Technical keynotes, architecture presentations, and systems talks by Rahuul Kalappatt.',
  url: '/speaking',
})

const TALKS = [
  {
    title: 'Building Fluid Motion in React 19 without Jank',
    event: 'React Summit',
    year: '2026',
    location: 'Amsterdam / Online',
    type: 'Keynote Talk',
  },
  {
    title: 'Design Tokens to Production Code: Automating Design Systems',
    event: 'Frontend Masters Workshop',
    year: '2025',
    location: 'San Francisco, CA',
    type: 'Workshop',
  },
]

export default function SpeakingPage() {
  return (
    <div className="container-default py-16 sm:py-24">
      <div className="max-w-3xl mb-16">
        <span className="font-mono text-xs font-semibold uppercase tracking-widest text-accent-light">
          Events &amp; Talks
        </span>
        <h1 className="mt-3 font-display text-4xl font-bold tracking-tight sm:text-6xl">
          Speaking &amp; Workshops
        </h1>
        <p className="mt-4 text-lg leading-relaxed text-foreground-muted">
          I enjoy sharing lessons learned from building large-scale frontend architectures, design token pipelines, and high-performance Web applications.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
        {TALKS.map((talk) => (
          <div key={talk.title} className="rounded-2xl border border-border-subtle/80 bg-surface/40 p-8">
            <div className="flex items-center gap-2 mb-4">
              <Badge variant="accent" size="sm">
                {talk.type}
              </Badge>
              <span className="font-mono text-xs text-foreground-dim">{talk.year}</span>
            </div>

            <h2 className="font-display text-2xl font-bold text-foreground">
              {talk.title}
            </h2>

            <div className="mt-6 flex flex-wrap gap-4 text-xs text-foreground-muted">
              <span className="flex items-center gap-1.5">
                <Mic className="h-3.5 w-3.5 text-accent-light" />
                {talk.event}
              </span>
              <span className="flex items-center gap-1.5">
                <MapPin className="h-3.5 w-3.5 text-accent-light" />
                {talk.location}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
