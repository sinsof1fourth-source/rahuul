/* ─── Types ─── */
export interface NavLink {
  /** Display label shown in the UI */
  label: string
  /** Internal path or external URL */
  href: string
  /** Set to true for external links — adds rel="noopener noreferrer" and target="_blank" */
  external?: boolean
}

/* ─── Primary Navigation ─── */
export const NAV_LINKS: NavLink[] = [
  { label: 'Work', href: '/work' },
  { label: 'Blog', href: '/blog' },
  { label: 'About', href: '/about' },
  { label: 'Speaking', href: '/speaking' },
]

/* ─── Footer Navigation (grouped columns) ─── */
export const FOOTER_LINKS: NavLink[][] = [
  [
    { label: 'Home', href: '/' },
    { label: 'Work', href: '/work' },
    { label: 'Blog', href: '/blog' },
    { label: 'About', href: '/about' },
  ],
  [
    { label: 'Speaking', href: '/speaking' },
    { label: 'Uses', href: '/uses' },
    { label: 'Now', href: '/now' },
    { label: 'Contact', href: '/contact' },
  ],
]
