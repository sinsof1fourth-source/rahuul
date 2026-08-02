import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

/**
 * Merges Tailwind CSS classes safely, resolving conflicts.
 * Uses clsx for conditional composition + tailwind-merge for deduplication.
 *
 * @example cn('px-4', condition && 'py-2', 'px-6') → 'py-2 px-6'
 */
export function cn(...inputs: ClassValue[]): string {
  return twMerge(clsx(inputs))
}

/**
 * Formats an ISO date string into a long human-readable format.
 * Uses the native Intl API — no external library required.
 *
 * @example formatDate('2026-07-31') → 'July 31, 2026'
 */
export function formatDate(dateString: string): string {
  return new Intl.DateTimeFormat('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  }).format(new Date(dateString))
}

/**
 * Formats an ISO date string into a short human-readable format.
 *
 * @example formatDateShort('2026-07-31') → 'Jul 31, 2026'
 */
export function formatDateShort(dateString: string): string {
  return new Intl.DateTimeFormat('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  }).format(new Date(dateString))
}

/**
 * Calculates estimated reading time from a content string.
 * Assumes a 200 words-per-minute reading speed.
 *
 * @example calculateReadingTime('Hello world ...') → '1 min read'
 */
export function calculateReadingTime(content: string): string {
  const WORDS_PER_MINUTE = 200
  const wordCount = content.trim().split(/\s+/).length
  const minutes = Math.max(1, Math.ceil(wordCount / WORDS_PER_MINUTE))
  return `${minutes} min read`
}

/**
 * Converts arbitrary text into a URL-safe slug.
 *
 * @example slugify('Hello World!') → 'hello-world'
 */
export function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^\w\s-]/g, '')
    .replace(/[\s_-]+/g, '-')
    .replace(/^-+|-+$/g, '')
}
