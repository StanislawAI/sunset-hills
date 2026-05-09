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

## About Us page — v2 enhancements (May 2026)
- **Cinematic dossier hero** (`aboutHero`): REC dot, scene slug `EXT. STUDIO — DAY`, timecode, polaroid collage of Jack/Dawn/Germano + film stills, gradient title `A STUDIO BUILT TO FINISH FILMS.` (red accent on last word), monospace stat chips (EST. 1991, YRS 35, OFFICES 02, PICTURES 09, CREW 280+, LANG. EN·PL·IT·ES), corner-bracket frame, scroll cue.
- **By the Numbers band** (`aboutStats`): 5 animated counters (35+ yrs, 9 features, 2 offices, 4 languages, 280+ freelancers) with red baseline reveal on hover.
- **Origin filmstrip**: Three Decades of Pictures rebuilt with film perforations + `F.001` frame IDs.
- **Roster Call Sheet**: red banner header with `CALL SHEET · ROSTER · 2026 · WAW + LDN · ACTIVE` + dept/name/credit/since columns + hover-fill mark squares.
- **Festival Ledger laurels** above the awards table (hand-drawn SVG laurels reusing existing `laurelSVG`).
- **Memo summary**: faux-paper letter with `FROM/TO/DATE/RE` header, drop-cap, hand-drawn animated signature (Jacek Wielgopolan), red circle stamp.
- Light-leak dividers added between major About sections.
- `setupCounters` selector loosened to `[data-count]` so non-`.stat-num` counters animate too.

## The Adventures of Tom — page redesign (May 2026)
- **Expedition Hero** (`tomHero`): REC + 24fps marker, scene slug `EXT. AUSTRALIAN OUTBACK — DAWN`, GPS coordinates `N 22°00' · E 144°00'`, animated rotating compass, meridian curves, white→gold→red gradient title (THE / *Adventures* / OF TOM.), monospace stat chips (BUDGET $45M, VOLUMES IX, SOURCE A. SZKLARSKI, PARTNER SCREEN AUSTRALIA, RIGHTS EXCLUSIVE/WORLDWIDE), corner-bracket frame.
- **Source Material card** (Alfred Szklarski IX volumes, 30M+ readers, EXCL. WORLDWIDE stamp, 6-cell metadata grid).
- **Scale of the Expedition** stat band (animated counters: 9 pictures, $45M Vol I budget, 7 shoot countries, 18 months, 30M+ readers).
- **The Nine-Picture Slate**: 9 volume cards mapped to actual Szklarski covers (book-tomek/glowy/wojnie/yeti/wyprawa/amazonka/chaco/faraon + tom-main for Vol I); each card shows VOL. roman numeral, coloured-pill status (GREENLIT / OPTIONED / DEVELOPMENT / CONCEPT), setting + year, hover-lift with red bar reveal, and `request treatment →` CTA.
- **Expedition Atlas**: hand-drawn equirectangular SVG world-map with stylised continents, equator+tropics dashed lines, 9 pulsing red volume pins at real-ish lat/lng, plus a 3-column legend.
- **Volume I — First Picture**: dedicated dossier card with poster, gradient title, italic logline, 6-cell facts grid (setting, budget, runtime, language, partner, festival path), and ON-SCREEN HAZARDS chip row (red kangaroos, saltwater crocodile, bush fires, frontier law, tiger snake).
- **Partners Engaged** strip: 5 cards (Screen Australia, PISF, UIP, Szklarski Estate, WFDiF/ATM) with rotated `CONFIRMED` stamps.
- **Closing CTA**: "Request the Volume I treatment" with primary `mailto:cool@world.pl` button, ghost "Open contact" button, and contact metadata (office, phone, reply window).
- Existing generic `renderProject` retained for the Kings page; `/the-adventures-of-tom/` is now routed to the new `renderTom`.
- **Atlas → Slate cross-linking** (May 2026): each atlas pin and its legend row are now native SVG/HTML anchors (`href="#tom-vol-I"`). Clicking either smooth-scrolls the corresponding volume card into view and fires a 1.6s red flash + left-bar reveal animation (`tom-vol-flash`). Pin hover scales 1.4× and warm-tints the dot; legend rows hover in red with a left red bar slide. Wired via `setupTomPins()` invoked at the end of `route()`.

## The Kings of Life — page redesign (May 2026)
- **Cinematic hero** (`kingsHero`): REC + scene slug `INT. WARSAW LANDFILL — DUSK`, A-440 / 24fps tag, kings-catalog background tinted in dusk-red, hand-drawn musical staff with notes/stems running across the lower hero, white→red gradient title `THE KINGS / OF LIFE.` (second line italic), 6 monospace stat chips (GENRE Comedy-Drama, LOCATIONS WAR·LDN·NYC, CAST Hollywood + Polish, MUSIC M. Zieliński, DP G. Saracco, MISSION Charitable).
- **Logline card**: red-perforation top-bar, eyebrow `FILE · LOGLINE · CARD 003`, rotated `READER'S PICK` stamp, large italic logline (down-on-his-luck violinist…) in a red-bordered pull-block, plus a 6-cell facts grid (Genre/Locations/Language/Status/Screenplay/Distribution).
- **Production at a glance** stat band (animated counters: 30+ years crew, 3 cities, 136 pages, 2 Hollywood leads, 100% charity).
- **Three Cities — One Story**: WARSAW (warm), LONDON (cool), NEW YORK (rust) cards with role tags (`THE MOTHER`/`THE ECHO`/`THE SHADOW`), real coordinates, regional subtitle, role-in-the-film paragraph, weather strip, and pulsing red dot.
- **Saracco testimonial**: oversized red-tinted blockquote with corner-mark, portrait in red ring, name + role + 5-star.
- **Production Team**: 4 crew cards (Jacek/Filip/Germano/Maciej) with portraits, name overlay, JOINED YYYY red badge, role label and bio (proper EN/PL roles, no longer mixed-language).
- **Mission card**: ECG-pulse heart SVG (red heart-line draws on load), title `Behind every picture — the children the cameras don't show.`, plus 3 hospital chips (WAW Children's Memorial, LDN Great Ormond Street, LAX Children's Hospital LA).
- **Closing CTA**: "Step into The Kings of Life." with primary `mailto:` button and ghost link to `/script-coverage/`.

## Where the Butterflies Fly — page redesign (May 2026)
- Replaced one-screen video placeholder (`renderProjectPlaceholder`) with a full **pre-production teaser dossier** (`renderButterflies`) of 9 sections:
  - **Cinematic teaser hero**: looped muted background video of the existing teaser, REC · DEV marker, `EXT. POLISH HIGHLANDS — DAWN` slug, white→pink italic gradient title `WHERE / the butterflies / FLY.`, 5 monospace stat chips (Status: Development/Stage 03 · Polish Highlands · 64 shoot days · Palette dawn·moss·sand · Release 2027), plus 4 SVG butterflies that flap (animated wings) and drift across the hero on three different paths.
  - **Classified Treatment Card** — bordered `FILE · WTBF · CARD-001 · CLEARANCE · RED` bar, rotated `INVITE ONLY` stamp, italic Anna logline interrupted by inline `[REDACTED — 2 LINES]` and `[REDACTED — NDA CLAUSE]` boxes, fingerprint `FP · 7C-A19-44`.
  - **Scale in outline** stat band (animated counters: 64 days · stage 3 · 1,850 m · 7 locations · 12 species).
  - **Three Acts** (Return / The Hunt / Migration) — italic Roman numerals, location subtitles, with Act III fully redacted via a diagonal-stripe NDA panel.
  - **Mood — Six Frames (CONFIDENTIAL)** — six 2.39:1 frames in rose/sage/rust/sand/moss colour washes with grain, blur, scene IDs (SC.003/014/027/041/063/072), notes (first light, old barn, letter in case, shepherd path, the hunt, the swarm) and timecodes.
  - **Location card** — `Bieszczady. The meadow where the wings remember the way.` with custom mountain SVG, GPS, elevation, shoot window, temperature, golden-hour minutes, basecamp.
  - **Four Wings** symbolism cards — Migration / Metamorphosis / Memory / Mortality, each with an animated butterfly icon and italic copy.
  - **Crew in Outline** — 6 dept cards; sealed entries (`[NAME WITHHELD]`, `[CANDIDATE 01/02]`, `[RESERVED]`) get a diagonal-stripe redaction across the name plus a `SEALED` stamp; confirmed entries (Sunset Hills MP, Dr. M. Pawlak) carry a green `CONFIRMED` stamp.
  - **NDA-only CTA** — `Treatment v3 & lookbook — by invitation.` with `Request the NDA` primary button (mailto with subject prefilled) and ghost link to `/contact/`, plus phase/window/reply metadata.
- Lint clean, no console errors, all 9 sections verified via screenshot.

### Where the Butterflies Fly — content corrected to match real story (May 2026)
- Replaced placeholder Bieszczady-entomology copy with the actual film treatment (per the producer's voiceover transcript): a contemporary Hollywood **melodrama** by Jacek Wielgopolan about Jack (29 — young screenwriter), Helen Thorne (35 — front-cover star), Stanley Silverberg (65 — legendary director), and the twist character Matthew (30).
- Hero scene slug → `INT. SUBURBAN MOTEL — RAIN`; new lede ("Hollywood. A small suburban motel. A young screenwriter, a face from every magazine cover, and six Queen tracks on the score. A melodrama about a love never lived — narrated by an author hiding between the frames.").
- Logline excerpt rewritten to the real plot (Jack's break, casting Helen, the unusual motel-shared-apartment condition, the slow burn, the unseen author).
- Stats now read: 3 leads · 6 Queen tracks · 1 director on screen (Silverberg, 65) · 35 (Helen's age) · 1 modest motel.
- Three Acts → `THE GREENLIGHT` (Hollywood/producer's office) · `THE MOTEL` (Suburbs/Room 7/long nights) · `THE SHADOW AUTHOR` (Dawn/labyrinth — REDACTED).
- Mood frames retitled: producer's office, magazine cover, motel · Room 7, rain on the window, the first smile, dawn · the finale.
- Setting card replaced (mountains → window with rain streaks + glowing motel lamp + typewriter silhouette SVG); copy: `Hollywood. A small motel. A typewriter.` plus 6-cell metadata (City LA · CA, Principal Motel · Room 7, Contrast Studio·set·red carpet, Shoot window Q3 2026 — Q1 2027, Palette pink dawn · neon · rain, Camera 2.39:1 · 35mm).
- **NEW Soundtrack section** (`butterfliesSoundtrack` — "Six Tracks · One Band"): full Queen-catalog score table — A Winter's Tale, Who Wants to Live Forever, The Great Pretender (Mercury), Barcelona (Mercury & Caballé), Somebody to Love, These Are the Days of Our Lives — each with artist, scene tag and runtime, plus an "in conversation with Queen Productions Ltd." licensing footer.
- "Four Wings" symbolism rewritten: DREAM / LOVE / AUTHOR / REVEAL (the labyrinth-ending question — "Was Jack actually Matthew?").
- Crew block expanded to 8 cards (4-up grid): Jack/Helen/Stanley/Matthew (twist · sealed) + screenplay (J. Wielgopolan), direction casting (sealed), DP (Germano Saracco soft-attached), score (Queen catalogue · in negotiation).
- CTA copy updated: `Hollywood vs Motel` lookbook + Queen playlist with timecodes (no more Bieszczady reference).

## Notes
- No backend/MongoDB/auth involved.
- No third-party integrations were added.
