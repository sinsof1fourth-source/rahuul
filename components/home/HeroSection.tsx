'use client'

import { useRef } from 'react'
import Image from 'next/image'
import { ArrowRight, ShieldCheck } from 'lucide-react'
import { BrandLogo } from '@/components/shared/BrandLogo'
import { Button } from '@/components/ui/Button'
import { useHeroAnimation } from '@/lib/animations/useHeroAnimation'

export function HeroSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const badgeRef = useRef<HTMLDivElement>(null)
  const headlineRef = useRef<HTMLHeadingElement>(null)
  const descriptionRef = useRef<HTMLParagraphElement>(null)
  const actionsRef = useRef<HTMLDivElement>(null)
  const portraitRef = useRef<HTMLDivElement>(null)
  const glowRef = useRef<HTMLDivElement>(null)

  useHeroAnimation({
    sectionRef,
    badgeRef,
    headlineRef,
    descriptionRef,
    actionsRef,
    portraitRef,
    glowRef,
  })

  return (
    <section ref={sectionRef} className="container-default relative mb-20 md:mb-32">
      {/* Background Ambient Glow layer for Hero Parallax */}
      <div
        ref={glowRef}
        className="pointer-events-none absolute -top-12 right-1/4 -z-10 h-[450px] w-[450px] rounded-full bg-accent/15 blur-[120px] dark:bg-accent/10"
        aria-hidden="true"
      />

      <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-8">
        {/* Left Column: Headline & Bio Content */}
        <div className="lg:col-span-7">
          <div
            ref={badgeRef}
            className="inline-flex items-center gap-2 rounded-full border border-accent/30 bg-accent/5 px-4 py-1.5 text-xs sm:text-sm font-mono text-accent-light shadow-sm"
          >
            <ShieldCheck className="h-4 w-4 text-accent-light" />
            <span className="font-semibold uppercase tracking-wider">RAHUUL KALAPPATT // THE SHADOW ARCHITECT</span>
          </div>

          <div className="mt-6 max-w-4xl">
            <h1
              ref={headlineRef}
              className="font-display text-4xl font-bold tracking-tight sm:text-6xl lg:text-7xl leading-[1.08] sm:leading-[1.05]"
            >
              Building intelligent systems <br />
              <span className="text-gradient">before the world sees them.</span>
            </h1>
          </div>

          <div className="mt-6 max-w-2xl">
            <p
              ref={descriptionRef}
              className="text-base sm:text-lg leading-relaxed text-foreground-muted"
            >
              I design and build AI systems, quantitative research platforms, automation infrastructure, and digital media workflows. My work focuses on disciplined experimentation, reliable architecture, and long-term systems that compound.
            </p>

            <div className="mt-4 pt-4 border-t border-border-subtle/40 flex items-center gap-3 text-xs sm:text-sm font-mono text-amber-400/90">
              <span className="inline-block h-2 w-2 rounded-full bg-amber-400 animate-pulse" />
              <span>&ldquo;Build systems in silence. Reveal results, not intentions.&rdquo;</span>
            </div>
          </div>

          <div ref={actionsRef} className="mt-8 flex flex-wrap gap-4 sm:gap-5">
            <Button href="#projects" size="lg">
              Explore the systems
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button href="#roadmap" variant="secondary" size="lg">
              View the architecture
            </Button>
          </div>
        </div>

        {/* Right Column: Hero Focal Point (Portrait Card & RK Metallic Logo) */}
        <div className="lg:col-span-5 flex justify-center lg:justify-end">
          <div
            ref={portraitRef}
            className="group relative w-full max-w-md overflow-hidden rounded-3xl border border-border-subtle/80 bg-surface/50 p-3 shadow-elevated transition-all duration-300 hover:border-accent/40"
          >
            {/* Subtle glow halo inside card */}
            <div
              className="pointer-events-none absolute inset-0 -z-10 bg-radial-gradient(ellipse at center, var(--accent-glow) 0%, transparent 70%) opacity-0 transition-opacity duration-300 group-hover:opacity-100"
              aria-hidden="true"
            />

            <div className="relative aspect-[4/5] w-full overflow-hidden rounded-2xl bg-surface">
              <Image
                src="/images/portrait.png"
                alt="Rahuul Kalappatt — The Shadow Architect"
                fill
                priority
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 440px"
                className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-[1.03]"
              />
            </div>

            {/* Overlaid Official Metallic Emblem Focal Badge */}
            <div className="absolute bottom-6 right-6 flex items-center gap-3 rounded-2xl border border-border-subtle/80 bg-surface/90 px-4 py-2.5 shadow-card backdrop-blur-xl transition-all duration-300 group-hover:border-accent/40">
              <BrandLogo size="sm" animated={false} />
              <div className="flex flex-col">
                <span className="font-display text-xs font-bold tracking-wider text-foreground uppercase">
                  RAHUUL KALAPPATT
                </span>
                <span className="text-[10px] font-mono text-accent-light">
                  The Shadow Architect
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
