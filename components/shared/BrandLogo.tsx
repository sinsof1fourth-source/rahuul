'use client'

import Image from 'next/image'
import { cn } from '@/lib/utils'

type LogoSize = 'sm' | 'md' | 'lg' | 'xl'

interface BrandLogoProps {
  size?: LogoSize | number
  showText?: boolean
  className?: string
  animated?: boolean
  priority?: boolean
}

/**
 * Path to the official production logo.
 * Changing this single constant to an SVG (e.g., '/images/logo.svg')
 * updates the entire site without touching component call-sites.
 */
const LOGO_SRC = '/images/ra-logo.png'

const SIZE_PRESETS: Record<LogoSize, { width: number; height: number; class: string }> = {
  sm: { width: 32, height: 32, class: 'h-8 w-8' },
  md: { width: 40, height: 40, class: 'h-10 w-10' },
  lg: { width: 64, height: 64, class: 'h-16 w-16' },
  xl: { width: 80, height: 80, class: 'h-20 w-20' },
}

/**
 * Reusable BrandLogo component for RAHUUL v1.0.
 * Displays the official metallic gold RA monogram emblem with optional wordmark and gold glow.
 * Preserves high DPI vector crispness across mobile, tablet, desktop, and retina displays.
 */
export function BrandLogo({
  size = 'md',
  showText = false,
  className,
  animated = true,
  priority = false,
}: BrandLogoProps) {
  const isPreset = typeof size === 'string' && size in SIZE_PRESETS
  const preset = isPreset ? SIZE_PRESETS[size as LogoSize] : null

  const width = preset ? preset.width : (size as number)
  const height = preset ? preset.height : (size as number)
  const sizeClass = preset ? preset.class : ''

  return (
    <div className={cn('inline-flex items-center gap-3 select-none', className)}>
      <div
        className={cn(
          'group relative flex items-center justify-center overflow-hidden rounded-xl bg-surface/80 border border-border-subtle/80 p-1 shadow-sm transition-all duration-300',
          animated && 'hover:border-accent/40 hover:shadow-[0_0_24px_var(--accent-glow)] hover:scale-[1.03]',
          sizeClass
        )}
        style={!isPreset ? { width, height } : undefined}
      >
        {/* Subtle radial gold glow ambient aura */}
        <div
          className="pointer-events-none absolute inset-0 -z-10 rounded-xl bg-radial-gradient(ellipse at center, var(--accent-glow) 0%, transparent 70%) opacity-40 transition-opacity duration-300 group-hover:opacity-100"
          aria-hidden="true"
        />

        <Image
          src={LOGO_SRC}
          alt="RAHUUL Brand Logo"
          width={width}
          height={height}
          priority={priority}
          sizes={`${width * 2}px`}
          className="h-full w-full object-contain transition-transform duration-300 group-hover:scale-105"
        />
      </div>

      {showText && (
        <span className="font-display font-bold tracking-tight text-foreground text-lg">
          RAHUUL<span className="text-accent-light">.</span>
        </span>
      )}
    </div>
  )
}
