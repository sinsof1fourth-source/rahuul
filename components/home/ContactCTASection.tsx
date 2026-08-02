'use client'

import { useRef } from 'react'
import { MessageSquare } from 'lucide-react'
import { Button } from '@/components/ui/Button'
import { useScrollReveal } from '@/lib/animations/useScrollReveal'

export function ContactCTASection() {
  const sectionRef = useRef<HTMLElement>(null)

  useScrollReveal({
    triggerRef: sectionRef,
    variant: 'scale-up',
    duration: 0.8,
  })

  return (
    <section ref={sectionRef} className="container-default">
      <div className="relative overflow-hidden rounded-3xl border border-border-subtle bg-surface/50 p-8 text-center shadow-elevated sm:p-12 md:p-16">
        {/* Subtle background glow accents */}
        <div
          className="pointer-events-none absolute -left-24 -top-24 -z-10 h-72 w-72 rounded-full bg-accent/20 blur-[100px]"
          aria-hidden="true"
        />
        <div
          className="pointer-events-none absolute -bottom-24 -right-24 -z-10 h-72 w-72 rounded-full bg-accent-warm/15 blur-[100px]"
          aria-hidden="true"
        />

        <div className="mx-auto max-w-2xl">
          <div className="inline-flex rounded-full bg-accent/10 p-3 text-accent-light">
            <MessageSquare className="h-6 w-6" />
          </div>
          <h2 className="mt-6 font-display text-3xl font-bold tracking-tight sm:text-5xl">
            Let&apos;s build something great.
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-foreground-muted sm:text-base">
            Whether you want to audit a performance issue, kick off a new Next.js project, or just say hello, my inbox is always open.
          </p>
          <div className="mt-8 flex justify-center gap-4">
            <Button href="/contact" size="lg">
              Get in Touch
            </Button>
            <Button href="/about" variant="secondary" size="lg">
              More About Me
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
