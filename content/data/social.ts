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
    href: 'https://github.com/sinsof1fourth-source',
    handle: '@sinsof1fourth-source',
    icon: 'Github',
  },
  {
    name: 'Twitter / X',
    href: 'https://x.com/rahuul',
    handle: '@rahuul',
    icon: 'Twitter',
  },
  {
    name: 'Mail',
    href: 'mailto:rahuul@rahuulkalappatt.com',
    handle: 'rahuul@rahuulkalappatt.com',
    icon: 'Mail',
  },
]
