import { HeroSection } from '@/components/home/HeroSection'
import { FeaturedProjectsSection } from '@/components/home/FeaturedProjectsSection'
import { LatestWritingSection } from '@/components/home/LatestWritingSection'
import { ContactCTASection } from '@/components/home/ContactCTASection'

export default function Home() {
  return (
    <div className="relative isolate overflow-hidden py-16 sm:py-24">
      {/* ── Background Aesthetic Glow Detail ── */}
      <div
        className="pointer-events-none absolute bottom-1/4 left-1/4 -z-10 h-[500px] w-[500px] rounded-full bg-accent-warm/10 blur-[150px] dark:bg-accent-warm/5"
        aria-hidden="true"
      />

      {/* ── 1. Hero Section ── */}
      <HeroSection />

      {/* ── 2. Featured Projects Grid ── */}
      <FeaturedProjectsSection />

      {/* ── 3. Latest Writing ── */}
      <LatestWritingSection />

      {/* ── 4. Unified Contact CTA ── */}
      <ContactCTASection />
    </div>
  )
}
