import { HeroSection } from '@/components/home/HeroSection'
import { ShadowPrinciplesSection } from '@/components/home/ShadowPrinciplesSection'
import { MasterRoadmapSection } from '@/components/home/MasterRoadmapSection'
import { FeaturedProjectsSection } from '@/components/home/FeaturedProjectsSection'
import { LatestWritingSection } from '@/components/home/LatestWritingSection'
import { ContactCTASection } from '@/components/home/ContactCTASection'

export default function Home() {
  return (
    <div className="relative isolate overflow-hidden py-12 sm:py-20">
      {/* ── Background Aesthetic Glow Detail ── */}
      <div
        className="pointer-events-none absolute bottom-1/4 left-1/4 -z-10 h-[500px] w-[500px] rounded-full bg-accent-warm/10 blur-[150px] dark:bg-accent-warm/5"
        aria-hidden="true"
      />

      {/* ── 1. Identity & Hero Section ── */}
      <HeroSection />

      {/* ── 2. Built in Shadow Principles ── */}
      <ShadowPrinciplesSection />

      {/* ── 3. Systems Master Roadmap (Pyramid) ── */}
      <MasterRoadmapSection />

      {/* ── 4. Core Project Ecosystem ── */}
      <FeaturedProjectsSection />

      {/* ── 5. Research & Writing ── */}
      <LatestWritingSection />

      {/* ── 6. Contact CTA ── */}
      <ContactCTASection />
    </div>
  )
}
