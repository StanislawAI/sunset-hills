# Sunset Hills Motion Pictures — Landing Page

## Original Problem Statement
"Keep working on the landing page, making it more beautiful."

## Architecture
- Static, multi-page site (HTML + vanilla JS + CSS), client-side routing in `app.js`.
- Served locally with `python3 -m http.server 3000`. Deployed via Vercel (`vercel.json`).
- Files: `/app/index.html`, `/app/app.js`, `/app/styles.css`, page folders (`/about-us/`, `/the-kings-of-life/`, etc.).

## What's been implemented (Jan 2026)
- Cinematic dark theme already established (Archivo + IBM Plex Mono, red `#d12025` accent, grain overlay, page transition).
- **Landing page redesign (this session)**:
  - Hero: cinematic frame corners, REC indicator (24 fps · SCN 01 · TAKE 04), city marquee, brand-mark eyebrow, animated word-rise title with white→red gradient on "Pictures.", vignette + grid overlay, glass info bar (EST. 1991).
  - Brand Philosophy: filmstrip marquee with multiple stills (was repeating 1 image), perforated film-edges, white-to-grey title gradient, refined copy, +1 tag chip ("Original IP").
  - **NEW** "By the Numbers" stats section with animated counters (35+, 9, 2, $45M).
  - Core Capabilities: hand-built CSS art for each tile (filmstrip pattern, lens iris, world-map dots with pings) — previously empty placeholders.
  - **NEW** Pull-quote testimonial section featuring Germano Saracco (with portrait + glassy frame).
  - Slate cards: 4:5 aspect, white text fixed (was inheriting blue), reveal "Project details →" CTA on hover, deeper gradient overlays, cleaner typography.
  - Closing CTA: replaced blank "globe" with a stylised world map showing Warsaw / London / Los Angeles / Sydney with pulsing markers and expanding rings.
  - Scroll-reveal IntersectionObserver + counter animator added to `app.js`.

## Core requirements (static)
- Aesthetic: cinematic, dark, premium, film-industry vibe.
- Brand: Sunset Hills Motion Pictures (Warsaw / London / LA).
- No backend; pure static delivery.

## Backlog / next ideas
- P1: Add subtle parallax on hero video (mouse-tilt) using existing `--mouse-x/--mouse-y` vars.
- P1: Page-route reveal on slate cards click → cinematic curtain wipe.
- P2: Replicate stats / testimonial styling on About Us page for consistency.
- P2: Lazy-load hero video poster fallback for slow connections.
- P2: Press logos / festival laurels strip below testimonial.

## Notes
- No backend/MongoDB/auth involved.
- No third-party integrations were added.
