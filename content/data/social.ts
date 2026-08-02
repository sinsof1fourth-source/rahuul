/**
 * Social link entries used in the Navbar, Footer, and About page.
 * The `icon` field maps to a Lucide icon name and is resolved in the component.
 */
export interface SocialLink {
  name: string
  href: string
  handle: string
  /** Lucide icon component name */
  icon: 'Github' | 'Twitter' | 'Linkedin' | 'Mail' | 'Rss'
}

export const SOCIAL_LINKS: SocialLink[] = [
  {
    name: 'GitHub',
    href: 'https://github.com/rahul',
    handle: '@rahul',
    icon: 'Github',
  },
  {
    name: 'Twitter / X',
    href: 'https://twitter.com/rahulhere',
    handle: '@rahulhere',
    icon: 'Twitter',
  },
  {
    name: 'LinkedIn',
    href: 'https://linkedin.com/in/rahul',
    handle: 'in/rahul',
    icon: 'Linkedin',
  },
]
