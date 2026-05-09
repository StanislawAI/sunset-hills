# Sunset Hills Motion Pictures — Landing Page

## Original Problem Statement
"Keep working on the landing page, making it more beautiful."

## Architecture
- Static, multi-page site (HTML + vanilla JS + CSS), client-side routing in `app.js`.
- Served locally with `python3 -m http.server 3000`. Deployed via Vercel (`vercel.json`).
- Files: `/app/index.html`, `/app/app.js`, `/app/styles.css`, page folders (`/about-us/`, `/the-kings-of-life/`, etc.).

## What's been implemented (Jan 2026)
- Cinematic dark theme already established (Archivo + IBM Plex Mono, red `#d12025` accent, grain overlay, page transition).
- **Landing page redesign**: cinematic hero (REC frame, animated word-rise title, city marquee, glass info bar), filmstrip-marquee Brand Philosophy, "By the Numbers" animated counter section, hand-built CSS art for Core Capabilities tiles (filmstrip, lens iris, world-map pings), Germano Saracco pull-quote testimonial, refined slate cards (4:5, hover CTA reveal), stylised closing world-map CTA with city pulse markers (Warsaw / London / LA / Sydney). Scroll-reveal IntersectionObserver + counter animator added.
- **Hero parallax**: `--mouse-x / --mouse-y` wired into 3 layered transforms (video moves most ~±35px, vignette subtle, grid counter-direction, content drifts subtly), `prefers-reduced-motion` respected.
- **Curtain wipe transition (universal)**:
  - Triggers on every page navigation (skipped only on first page load).
  - Two letterbox panels close (cubic-bezier .86,0,.07,1 · 720ms) with a red center scanline flash.
  - Slate clapper-board displays screenwriting-style scene heading per route — e.g. `INT. / SUNSET HILLS — DAY`, `EXT. / WARSAW STREET — NIGHT`, `EXT. / KANGAROO KINGDOM — DUSK`, `INT. / WRITERS' ROOM — DAY`, `INT. / PRODUCTION OFFICE — NIGHT`. Title field uses white→red gradient highlighting the time-of-day.
  - Web-Audio synthesised "clack" (light: bright HP-filtered noise burst + brief 900→420 Hz triangle tick, no sub-bass) plays when panels seal (~360 ms in). Wrapped in try/catch with `failsilent`.
  - Panels open (880ms) revealing the new page; `prefers-reduced-motion` disables all curtain animation.

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
