# Sunset Hills Motion Pictures — Landing Page

## Original Problem Statement
"Keep working on the landing page, making it more beautiful."

## Architecture
- Static, multi-page site (HTML + vanilla JS + CSS), client-side routing in `app.js`.
- Served locally with `python3 -m http.server 3000`. Deployed via Vercel (`vercel.json`).
- Files: `/app/index.html`, `/app/app.js`, `/app/styles.css`, page folders (`/about-us/`, `/the-kings-of-life/`, etc.).

## What's been implemented (Jan 2026)
- Cinematic dark theme established (Archivo + IBM Plex Mono, red `#d12025` accent, grain overlay).
- **Hero**: REC frame markers, animated word-rise title with white→red gradient, city marquee, glass info bar, mouse-tracked parallax (3 layers + content drift).
- **Site-wide mouse-tracked lens flare** layered as a real DOM element (`<div class="lens-flare">`) with two-stop warm radial gradients, no `mix-blend-mode` so it works through every stacking context. Visible on every page.
- **Curtain wipe transition (universal)** with screenwriting-style scene heading slate (INT./EXT., location, time of day) per route, synthesised clapper "clack" via Web Audio (no asset), and **TAKE counter** that increments every navigation.
- **Light-leak section dividers** — pulsing orange/red film-burn strip between major sections.
- **Brand Philosophy + filmstrip-marquee** with multi-still cycling.
- **By the Numbers** — animated counters (35+, 9, 2, $45M).
- **Director's Manifesto** — typewriter-style memo on faux-paper with red signature scribble that draws on reveal.
- **Core Capabilities** — 3 hand-built CSS art tiles (filmstrip pattern, lens iris, world-map pings).
- **From Script to Screen / Process Timeline** — 4 storyboard panels with custom SVG sketches (filmstrip page, camera+marker, camera+light, color bars).
- **Shoot Anywhere From Poland (Locations Atlas)** — 6-tile grid with "STANDS IN FOR" tags (Berlin, Prague, Tuscany, Siberia, Detroit, etc.).
- **Pull-quote testimonial** (Germano Saracco).
- **Selections & Recognition** — 5 hand-drawn SVG laurel wreaths (Cannes, Atlantic City, Venice, Sundance, Gold Condor) + rotating press-quote marquee.
- **Current Slate** — refined slate cards with hover CTA reveal.
- **Production Status Board** — live-feeling clapper slates per project showing 5-stage pipeline (Develop → Pre-Prod → Shoot → Post → Deliver) with pulsing red current-stage marker, days-in-stage counter, location.
- **Color Palette Lookbook** — 3 project rows × 5 swatches with hex codes and named scenes ("Warsaw Smoke", "Outback Earth", "Iris Velvet"...), click to lock active.
- **Selected Frames (scrubbable trailer reel)** — 8-still horizontal scrubber with FRAME / TC overlay, drag-to-scrub via Pointer Events, click-tick navigation.
- **Closing CTA** with stylised world-map and city pulse markers.
- Scroll-reveal IntersectionObserver, counter animator, reel scrubber, and palette swatch interactions all wired into `route()`.

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
