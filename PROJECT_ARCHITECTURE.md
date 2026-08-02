# RAHUUL — Project Architecture

> Last updated: 2026-08-02 · Phase 1 Complete

---

## 1. Overview

RAHUUL is a world-class personal website built with the philosophy of **"Quiet Luxury meets Technical Precision."** It is a statically-generated, progressively-enhanced web application designed for maximum performance, accessibility, and SEO.

### Technology Stack

| Layer | Technology | Version | Rationale |
|-------|-----------|---------|-----------|
| **Framework** | Next.js (App Router) | 16.x | Server Components, static export, built-in image optimisation |
| **Language** | TypeScript | 5.x | Type safety, IDE support, refactor confidence |
| **UI Library** | React | 19.x | Server Components, concurrent features, Suspense |
| **Styling** | Tailwind CSS (CSS-first) | 4.x | Zero-runtime, CSS custom properties, `@theme inline` |
| **Animation** | Motion (Framer Motion) | 12.x | Spring physics, viewport triggers, layout animations |
| **Icons** | Lucide React + Custom SVGs | 1.x | Tree-shakeable, consistent stroke style |
| **Class Utils** | clsx + tailwind-merge | Latest | Conditional class composition with conflict resolution |

### Dependencies Explicitly Avoided

| Package | Reason | Replacement |
|---------|--------|-------------|
| `next-themes` | Unmaintained, React 19 hydration warnings | Custom `ThemeProvider` |
| `next-mdx-remote` | Unmaintained | `@next/mdx` (planned Phase 3) |
| `date-fns` | Unnecessarily heavy | Native `Intl.DateTimeFormat` |
| `reading-time` | Trivial logic | Inlined `calculateReadingTime()` |
| `react-icons` / `simple-icons` | Heavy bundle | Custom SVG brand components |

---

## 2. Folder Structure

```
rahuul/
├── app/                          # Next.js App Router
│   ├── globals.css               # Design system (tokens, animations, utilities)
│   ├── layout.tsx                # Root layout (fonts, theme, SEO, nav/footer)
│   ├── page.tsx                  # Home page
│   ├── sitemap.ts                # Dynamic XML sitemap generator
│   ├── robots.ts                 # robots.txt generator
│   ├── about/                    # (Phase 2)
│   ├── work/                     # (Phase 2)
│   ├── blog/                     # (Phase 3)
│   ├── contact/                  # (Phase 2)
│   └── not-found.tsx             # (Phase 2)
│
├── components/
│   ├── icons/                    # Custom SVG icon components
│   │   └── BrandIcons.tsx        # GitHub, Twitter, LinkedIn
│   ├── layout/                   # Structural layout components
│   │   ├── Navbar.tsx            # Sticky header with scroll-aware glass
│   │   ├── Footer.tsx            # 4-column footer with newsletter
│   │   └── MobileMenu.tsx        # Full-screen mobile nav overlay
│   ├── shared/                   # Cross-cutting client components
│   │   ├── ThemeProvider.tsx      # Custom dark/light/system theme context
│   │   ├── ThemeToggle.tsx        # Animated Sun/Moon toggle button
│   │   ├── CustomCursor.tsx       # Spring-physics cursor trail
│   │   └── ScrollReveal.tsx       # Viewport-triggered entry animation
│   └── ui/                       # Primitive UI components
│       ├── Button.tsx             # Polymorphic button/link
│       └── Badge.tsx              # Tag/pill component
│
├── content/
│   └── data/                     # Typed static data (no CMS dependency)
│       ├── navigation.ts         # Nav links & footer link groups
│       ├── social.ts             # Social media entries
│       ├── work.ts               # Project case studies
│       └── blog.ts               # Blog post metadata
│
├── lib/                          # Pure utility functions (no React)
│   ├── utils.ts                  # cn(), formatDate(), slugify(), readingTime
│   └── seo.ts                    # generatePageMetadata(), personJsonLd
│
├── public/                       # Static assets (images, og.jpg, favicon)
├── next.config.ts                # Security headers, image formats, strict mode
├── tsconfig.json                 # TypeScript strict configuration
├── postcss.config.mjs            # PostCSS → Tailwind v4 pipeline
└── package.json                  # Dependencies and scripts
```

### Directory Conventions

- **`app/`** — One directory per route. Each directory contains a `page.tsx` (required) and optionally `layout.tsx`, `loading.tsx`, `error.tsx`.
- **`components/`** — Organised by responsibility: `ui/` (atoms), `layout/` (structural), `shared/` (cross-cutting), `icons/` (SVG components).
- **`content/`** — All content lives here, decoupled from components. Phase 3 adds `content/posts/` for MDX.
- **`lib/`** — Framework-agnostic utilities. No React imports allowed here.

---

## 3. Architectural Principles

### 3.1 Server-First Rendering
All pages default to **React Server Components**. Only components requiring browser APIs (`useState`, `useEffect`, event handlers) are marked `'use client'`. This minimises the client JS bundle.

**Client Components (current):**
- `ThemeProvider`, `ThemeToggle`, `CustomCursor`, `ScrollReveal`
- `Navbar`, `MobileMenu`, `Footer` (event handlers)

**Server Components (current):**
- `layout.tsx`, `page.tsx`, `Button.tsx`, `Badge.tsx`

### 3.2 Zero-Flash Theme System
The theme is applied in three layers:
1. **Blocking `<script>`** in `layout.tsx` reads `localStorage` and applies `.dark`/`.light` to `<html>` before paint.
2. **`ThemeProvider`** syncs React state with the DOM class on mount.
3. **CSS custom properties** in `globals.css` respond to `.dark`/`.light` automatically.

### 3.3 CSS-First Design Tokens
All colours, fonts, shadows, and radii are defined as CSS custom properties in `:root` and `.dark`, then mapped to Tailwind utilities via `@theme inline`. This means:
- Theme switches are pure CSS — no JS re-renders.
- Tailwind utilities like `bg-surface`, `text-accent-light` resolve at paint time.

### 3.4 Content/Component Separation
Data files (`content/data/*.ts`) export typed arrays. Components import and render them. This pattern makes it trivial to swap to a CMS or MDX source later without touching component code.

---

## 4. Security Posture

Security headers are applied to all routes via `next.config.ts`:

| Header | Value | Purpose |
|--------|-------|---------|
| `Strict-Transport-Security` | `max-age=63072000; includeSubDomains; preload` | Force HTTPS |
| `X-Frame-Options` | `DENY` | Prevent clickjacking |
| `X-Content-Type-Options` | `nosniff` | Prevent MIME sniffing |
| `Content-Security-Policy` | Strict allow-list | Prevent XSS, limit script/style sources |
| `Referrer-Policy` | `strict-origin-when-cross-origin` | Limit referrer leakage |
| `Permissions-Policy` | Disable camera/mic/geo | Minimise attack surface |

> **Phase 5 TODO:** Replace `unsafe-inline` in CSP with nonce-based script allowlisting.

---

## 5. Performance Strategy

| Technique | Implementation |
|-----------|---------------|
| **Static Generation** | All pages pre-rendered at build time |
| **Image Optimization** | AVIF → WebP → original via Next.js `<Image>` |
| **Font Loading** | `next/font/google` with `display: swap`, subset `latin` |
| **Bundle Splitting** | Server Components eliminate client JS by default |
| **Passive Listeners** | Scroll and mousemove handlers registered as `{ passive: true }` |
| **Motion Values** | `useMotionValue` avoids React re-renders on cursor movement |
| **Reduced Motion** | CSS and JS both respect `prefers-reduced-motion` |

---

## 6. Deployment

The site is designed for static export and deployment to any edge-capable host:

- **Recommended:** Vercel (zero-config with Next.js)
- **Alternatives:** Netlify, Cloudflare Pages, AWS Amplify

Build command: `npm run build` (uses Webpack bundler for compatibility).
