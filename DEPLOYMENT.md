# RAHUUL v1.0 — Production Deployment Guide

> **Author:** Principal Engineer & Release Manager  
> **Target Platform:** Vercel / Edge Network  
> **Last Updated:** 2026-08-02

---

## 1. Pre-Deployment Verification

Before triggering a production build, verify that all three quality gates pass locally:

```bash
# 1. Typecheck
npx tsc --noEmit

# 2. Linting
npm run lint

# 3. Production Build Test
npm run build
```

---

## 2. Vercel Deployment (Recommended)

### Option A: Via Vercel Dashboard (GitHub Integration)

1. Push your repository to GitHub (`main` branch).
2. Navigate to [Vercel Dashboard](https://vercel.com/new).
3. Import the `rahuul` repository.
4. Framework Preset: **Next.js** (automatically detected).
5. Build Command: `npm run build` (`next build --webpack`).
6. Environment Variables:
   - `NEXT_PUBLIC_BASE_URL`: `https://rahuulkalappatt.com` (canonical primary domain)
7. Click **Deploy**.

### Option B: Via Vercel CLI

```bash
# Install Vercel CLI globally
npm install -g vercel

# Login to your account
vercel login

# Deploy to preview environment
vercel

# Deploy to production
vercel --prod
```

---

## 3. Custom Domain & HTTPS Setup

1. In the Vercel Dashboard, go to **Settings** ➔ **Domains**.
2. Add your custom domain (e.g., `rahuul.dev` and `www.rahuul.dev`).
3. Configure your DNS provider:
   - **A Record**: `@` ➔ `76.76.21.21`
   - **CNAME Record**: `www` ➔ `cname.vercel-dns.com`
4. Vercel will automatically provision an SSL/TLS certificate via Let's Encrypt with automatic 90-day renewals and HTTPS redirection.

---

## 4. Environment Variables Checklist

| Variable Name | Environment | Sample Value | Purpose |
|---------------|-------------|--------------|---------|
| `NEXT_PUBLIC_BASE_URL` | Production | `https://rahuul.dev` | Canonical metadata & OpenGraph URL generation |

---

## 5. Search Engine Indexing & Verification

### Google Search Console

1. Log into [Google Search Console](https://search.google.com/search-console).
2. Add Domain property: `rahuul.dev`.
3. Copy the TXT verification record and add it to your DNS settings.
4. Once verified, navigate to **Sitemaps** in GSC.
5. Submit: `https://rahuul.dev/sitemap.xml`.

### Bing Webmaster Tools

1. Log into [Bing Webmaster Tools](https://www.bing.com/webmasters).
2. Import site directly from Google Search Console (or add URL manually).
3. Submit sitemap: `https://rahuul.dev/sitemap.xml`.

### Robots & Sitemap Live URL Check

Verify both endpoints return valid headers and status `200 OK`:

```bash
curl -I https://rahuul.dev/robots.txt
curl -I https://rahuul.dev/sitemap.xml
```

---

## 6. Security Headers Verification

Verify HTTP response headers include all security policies configured in `next.config.ts`:

```bash
curl -I https://rahuul.dev
```

Expected headers:
- `Strict-Transport-Security: max-age=63072000; includeSubDomains; preload`
- `X-Frame-Options: DENY`
- `X-Content-Type-Options: nosniff`
- `Referrer-Policy: strict-origin-when-cross-origin`
- `Permissions-Policy: camera=(), microphone=(), geolocation=()`
- `Content-Security-Policy: ...`
