import { cn } from '@/lib/utils'
import type { ReactNode } from 'react'

/* ─── Types ─── */
type BadgeVariant = 'subtle' | 'accent' | 'warm' | 'cool' | 'outline'
type BadgeSize = 'sm' | 'md'

interface BadgeProps {
  children: ReactNode
  variant?: BadgeVariant
  size?: BadgeSize
  className?: string
}

/* ─── Style Maps ─── */
const VARIANT_CLASSES: Record<BadgeVariant, string> = {
  subtle:  'bg-surface  text-foreground-muted border border-border-subtle',
  accent:  'bg-accent/10 text-accent-light    border border-accent/20',
  warm:    'bg-accent-warm/10 text-accent-warm border border-accent-warm/20',
  cool:    'bg-accent-cool/10 text-accent-cool border border-accent-cool/20',
  outline: 'bg-transparent text-foreground-muted border border-border-strong',
}

const SIZE_CLASSES: Record<BadgeSize, string> = {
  sm: 'px-2   py-0.5 text-xs',
  md: 'px-2.5 py-1   text-xs',
}

/* ─── Component ─── */
export function Badge({
  children,
  variant = 'subtle',
  size = 'md',
  className,
}: BadgeProps) {
  return (
    <span
      className={cn(
        'inline-flex items-center rounded-full font-medium leading-none',
        VARIANT_CLASSES[variant],
        SIZE_CLASSES[size],
        className,
      )}
    >
      {children}
    </span>
  )
}
