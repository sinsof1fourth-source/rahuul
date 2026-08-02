import { ArrowLeft, Compass } from 'lucide-react'
import { Button } from '@/components/ui/Button'
import { generatePageMetadata } from '@/lib/seo'

export const metadata = generatePageMetadata({
  title: 'Page Not Found',
  description: 'The requested page could not be found.',
})

export default function NotFound() {
  return (
    <div className="container-default flex min-h-[70vh] flex-col items-center justify-center py-20 text-center">
      <div className="relative isolate overflow-hidden rounded-3xl border border-border-subtle bg-surface/40 p-8 sm:p-12 md:p-16 max-w-xl w-full">
        {/* Ambient background glow */}
        <div
          className="pointer-events-none absolute -top-24 -left-24 -z-10 h-64 w-64 rounded-full bg-accent/20 blur-[100px]"
          aria-hidden="true"
        />

        <div className="inline-flex rounded-full bg-accent/10 p-3.5 text-accent-light mb-6">
          <Compass className="h-8 w-8" />
        </div>

        <span className="block font-mono text-xs font-semibold uppercase tracking-widest text-accent-light">
          404 Error
        </span>

        <h1 className="mt-3 font-display text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
          Page not found
        </h1>

        <p className="mt-4 text-sm sm:text-base leading-relaxed text-foreground-muted">
          The page you are looking for doesn&apos;t exist or may have been moved to another location.
        </p>

        <div className="mt-8 flex justify-center gap-4">
          <Button href="/" size="lg">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Home
          </Button>
          <Button href="/contact" variant="secondary" size="lg">
            Contact Me
          </Button>
        </div>
      </div>
    </div>
  )
}
