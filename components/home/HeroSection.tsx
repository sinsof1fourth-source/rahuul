'use client'

import { useRef } from 'react'
import Image from 'next/image'
import { ArrowRight, Sparkles } from 'lucide-react'
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
            className="inline-flex items-center gap-2 rounded-full border border-accent/20 bg-accent/5 px-3.5 py-1.5 text-sm text-accent-light shadow-sm"
          >
            <Sparkles className="h-4 w-4" />
            <span className="font-medium tracking-wide">Open for collaborations</span>
          </div>

          <div className="mt-6 max-w-4xl">
            <h1
              ref={headlineRef}
              className="font-display text-5xl font-bold tracking-tight sm:text-7xl lg:text-8xl leading-[1.08] sm:leading-[1.05]"
            >
              Engineering web <br />
              products that <span className="text-gradient">feel like magic.</span>
            </h1>
          </div>

          <div className="mt-8 max-w-2xl">
            <p
              ref={descriptionRef}
              className="text-lg sm:text-xl leading-relaxed text-foreground-muted"
            >
              I am Rahul, a senior frontend architect specializing in building lightning-fast, accessible, and pixel-perfect applications using React, Next.js, and TypeScript.
            </p>
          </div>

          <div ref={actionsRef} className="mt-10 flex flex-wrap gap-4 sm:gap-5">
            <Button href="/work" size="lg">
              View My Work
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button href="/contact" variant="secondary" size="lg">
              Let&apos;s Connect
            </Button>
          </div>
        </div>

        {/* Right Column: Hero Focal Point (Portrait Card & RK Metallic Logo) */}
        <div className="lg:col-span-5 flex justify-center lg:justify-end">
          <div
            ref={portraitRef}
            className="group relative w-full max-w-md overflow-hidden rounded-3xl border border-border-subtle/80 bg-surface/50 p-3 shadow-elevated transition-all duration-300 hover:border-border-strong"
          >
            {/* Subtle glow halo inside card */}
            <div
              className="pointer-events-none absolute inset-0 -z-10 bg-radial-gradient(ellipse at center, var(--accent-glow) 0%, transparent 70%) opacity-0 transition-opacity duration-300 group-hover:opacity-100"
              aria-hidden="true"
            />

            <div className="relative aspect-[4/5] w-full overflow-hidden rounded-2xl bg-surface">
              <Image
                src="/images/portrait.png"
                alt="Rahul — Senior Frontend Architect & Designer"
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
                  RAHUUL
                </span>
                <span className="text-[10px] font-medium text-foreground-muted">
                  Staff Architect
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
