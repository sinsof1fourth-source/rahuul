import { cn } from '@/lib/utils'
import type { ComponentPropsWithoutRef } from 'react'
import Link from 'next/link'

/* ─── Types ─── */
type Variant = 'primary' | 'secondary' | 'ghost' | 'destructive'
type Size = 'sm' | 'md' | 'lg'

interface ButtonBaseProps {
  variant?: Variant
  size?: Size
  className?: string
}

/**
 * Polymorphic Button: renders as <button> when no `href` is given,
 * or as a Next.js <Link> when `href` is provided.
 * This avoids the prop-drilling of a separate LinkButton component.
 */
type ButtonProps =
  | (ButtonBaseProps &
      ComponentPropsWithoutRef<'button'> & { href?: undefined })
  | (ButtonBaseProps &
      ComponentPropsWithoutRef<typeof Link> & { href: string })

/* ─── Style Maps ─── */
const VARIANT_CLASSES: Record<Variant, string> = {
  primary: [
    'bg-accent text-white',
    'hover:bg-accent-light',
    'shadow-[0_0_20px_var(--accent-glow)]',
    'hover:shadow-[0_0_32px_var(--accent-glow)]',
    'border border-transparent',
  ].join(' '),

  secondary: [
    'bg-surface text-foreground',
    'border border-border-subtle',
    'hover:border-border-strong hover:bg-elevated',
  ].join(' '),

  ghost: [
    'bg-transparent text-foreground-muted',
    'border border-transparent',
    'hover:text-foreground hover:bg-surface',
  ].join(' '),

  destructive: [
    'bg-red-600 text-white',
    'border border-transparent',
    'hover:bg-red-500',
  ].join(' '),
}

const SIZE_CLASSES: Record<Size, string> = {
  sm: 'h-8  px-3 text-sm  gap-1.5 rounded-md',
  md: 'h-10 px-4 text-sm  gap-2   rounded-lg',
  lg: 'h-12 px-6 text-base gap-2.5 rounded-lg',
}

const BASE_CLASSES = [
  'inline-flex items-center justify-center',
  'font-medium whitespace-nowrap select-none',
  'transition-all duration-200 ease-out',
  'hover:-translate-y-0.5 active:scale-[0.98]',
  'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background',
  'disabled:pointer-events-none disabled:opacity-50',
].join(' ')

/* ─── Component ─── */
export function Button({
  variant = 'primary',
  size = 'md',
  className,
  children,
  href,
  ...props
}: ButtonProps) {
  const classes = cn(BASE_CLASSES, VARIANT_CLASSES[variant], SIZE_CLASSES[size], className)

  if (href !== undefined) {
    return (
      <Link
        href={href}
        className={classes}
        {...(props as Omit<ComponentPropsWithoutRef<typeof Link>, 'href'>)}
      >
        {children}
      </Link>
    )
  }

  return (
    <button className={classes} {...(props as ComponentPropsWithoutRef<'button'>)}>
      {children}
    </button>
  )
}
