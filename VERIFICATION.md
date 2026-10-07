# Verification record

The rebuilt site was verified against the local production build. No deployment or live-domain changes were made.

## Build and dependency checks

- `npm run lint` passed.
- `npm run build` passed with TypeScript checking enabled. Next.js 16.4.0 prerendered the homepage, enterprise detail page, privacy notice, terms notice, Open Graph image, robots file and sitemap.
- `npm audit --omit=dev` reported zero production dependency vulnerabilities.
- Full `npm audit` reports five high-severity findings in the development-only `eslint-config-next` dependency chain. npm's suggested fix downgrades the config to 14.2.35, which would no longer match the Next.js 16 application, so the framework was kept aligned.

## Browser and interaction checks

The production build was checked at 1440×900, 1024×768, 768×1024, 390×844 and 320×800. The homepage, enterprise detail page, privacy notice and terms notice had no horizontal overflow at any tested size. A 720×450 viewport, the 200% reflow equivalent of a 1440×900 desktop viewport, was also checked on all four pages without horizontal overflow.

The navigation anchors, mobile menu, enterprise accordions, light and dark themes, and direct-contact links were checked. The mobile-app dialog opens at `#details-lightbox`, supports keyboard focus, closes on Escape, removes the fragment and restores focus to its trigger. The `/index.html#details` and `/projects.html` legacy redirects resolve to `/#details`. Privacy and terms pages return `noindex` metadata. Email, telephone, LinkedIn and Instagram destinations match the verified business details.

Lighthouse accessibility, SEO and best-practices scores were 100 on both form factors. Keyboard focus states were checked. Reduced-motion mode was emulated in Chrome: `prefers-reduced-motion` matched, the reveal transition resolved to 0.01ms and its transform was `none`. No browser console errors or warnings appeared during the route sweep.

## Lighthouse

Lighthouse 13.5.0 was run against the production build with its default simulated mobile profile and desktop profile. The mobile profile uses a 412px emulated viewport, 4× CPU slowdown and simulated network throttling. Scores and metrics:

| Profile | Performance | Accessibility | Best practices | SEO | FCP | LCP | CLS | TBT |
| --- | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: |
| Mobile | 94 | 100 | 100 | 100 | 0.9s | 3.2s | 0 | 0ms |
| Desktop | 100 | 100 | 100 | 100 | 0.2s | 0.6s | 0 | 0ms |

The mobile LCP is 0.7s above the 2.5s target under Lighthouse's simulated profile. The hero image is discoverable in the initial document, eager-loaded and high-priority; its optimized transfer was about 12KB. No field INP was measured by this local lab audit.

## Taste workflow checks

The implementation records `DESIGN_VARIANCE: 8`, `MOTION_INTENSITY: 6` and `VISUAL_DENSITY: 3` in the README. The service, strengths, about and contact areas use distinct compositions. Eyebrows are limited to the hero, services and contact openings. Primary actions share one blue treatment; secondary destinations use text links. Desktop and mobile compositions and the mobile collapse were reviewed using the saved screenshots and viewport sweep.

Business copy, service names, contact details, socials, Nairobi location and 2022 founding date were compared with the audited source. The generated fiber and infrastructure images are conceptual, not representations of Bell & Cross premises or delivered projects. The original globe mark and suitable legacy photography were retained. No client logos, testimonials, project results, certifications or partnerships were added. Privacy and terms are notices that state the policy information is unavailable. A submission form is inapplicable because enquiries go directly to email or telephone and there is no submission backend.

Screenshots: [desktop, 1440×900](screenshots/home-desktop.jpg) and [mobile, 390×844](screenshots/home-mobile.jpg).
