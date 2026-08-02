# RAHUUL v1.0 — Post-Launch Ops Checklist

> **Author:** Principal Engineer & Release Manager  
> **Status:** Post-Launch Operational Playbook  
> **Last Updated:** 2026-08-02

---

## 1. Analytics & Traffic Telemetry

- [ ] **Privacy-Focused Analytics**: Enable Vercel Analytics or Plausible (`NEXT_PUBLIC_ANALYTICS_ID`).
- [ ] **Core Web Vitals Monitoring**: Enable Vercel Speed Insights to track real-user LCP, CLS, and INP metrics across global locations.

---

## 2. Search Console & SEO Health Checks

- [ ] **Indexation Verification**: Check Google Search Console 48 hours post-launch to confirm `/`, `/sitemap.xml`, and dynamic URLs are indexed.
- [ ] **Canonical URL Audit**: Verify GSC reports zero canonical URL mismatches.
- [ ] **Structured Data Inspection**: Run Google's [Rich Results Test](https://search.google.com/test/rich-results) on `https://rahuul.dev` to confirm Person schema validation.

---

## 3. Error Monitoring & Telemetry

- [ ] **Sentry Integration**: Install `@sentry/nextjs` for real-time unhandled client/server exception tracking.
- [ ] **Console Cleanliness**: Periodically monitor production browser developer console logs for zero client-side exceptions or hydration warnings.

---

## 4. Security & Dependabot Maintenance

- [ ] **Security Audits**: Run `npm audit` monthly to catch downstream dependency vulnerabilities early.
- [ ] **Dependabot / Renovate**: Enable automated PR checks for Next.js security patch upgrades.

---

## 5. Version Control & Backup Strategy

- [ ] **Production Tags**: Tag every production release:
  ```bash
  git tag -a v1.0.0 -m "RAHUUL v1.0 Production Release"
  git push origin v1.0.0
  ```
- [ ] **Immutable Builds**: Vercel automatically maintains deployment history allowing 1-click rollbacks to any prior production deployment in under 5 seconds.

---

## 6. Routine Maintenance Schedule

| Cadence | Task | Action Owner |
|---------|------|--------------|
| **Weekly** | GSC Indexation Review | Release Manager |
| **Monthly** | `npm audit` + Security Headers Check | Lead Engineer |
| **Quarterly** | Core Web Vitals Performance Audit | Lead Engineer |
| **Bi-annually** | Major Dependency Upgrades (Next.js, React) | Principal Engineer |
