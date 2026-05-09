const navItems = [
  { label: "Home", path: "/" },
  { label: "About Us", path: "/about-us/" },
  { label: "Where the butterflies fly", path: "/where-the-butterflies-fly/" },
  { label: "The Adventures of Tom", path: "/the-adventures-of-tom/" },
  { label: "The Kings of life", path: "/the-kings-of-life/" },
  { label: "Script Coverage", path: "/script-coverage/" },
  { label: "Production in Poland", path: "/production-in-poland/" },
  { label: "Contact", path: "/contact/" }
];

const people = {
  jack: {
    title: "Jack Wielgopolan",
    role: "Producer / Script writer / Director",
    path: "/jack-wielgopolan/",
    image: "/public/assets/optimized/portrait-jack.webp",
    paragraphs: [
      "Jack Wielgopolan as a producer, distributor and script writer as been associated with movie brands in the USA and Poland since 1991.",
      "Nowadays, apart from \"Kings of Life\" he is preparing a series of 9 fictional films based upon the novel of Alfred Szklarski \"Adventures of Tom\". The first part is called \"Adventures of Tom: in the Kangaroo Kingdom\". The budget for this production amounts of $45,000,000"
    ],
    films: [
      ["Benefit of the Doubt 1993 Donald Sutherland Amy Irving", "/public/assets/optimized/poster-benefit.webp"],
      ["Neverending Story III 1994 Jack Black Jason James Richter", "/public/assets/optimized/poster-never.webp"],
      ["Dzieje mistrza Twardowskiego 1996", "/public/assets/optimized/poster-twardowski.webp"],
      ["The Doubles 2006", "/public/assets/optimized/poster-doubles.webp"],
      ["The Kings of Life", "/public/assets/optimized/poster-tkol.webp"]
    ]
  },
  germano: {
    title: "GERMANO SARACCO",
    role: "CINEMATOGRAPHER",
    path: "/germano-saracco/",
    image: "/public/assets/optimized/portrait-germano.webp",
    paragraphs: [
      "Germano Saracco is an award-winning cinematographer and the author of the photos for many images of feature films, documentary, music video and advertising.",
      "A graduate of the Istituto Scienze Cinematografiche in Florence and the University of Miami. Participant of the Film Technician Program at the London-based international film school.",
      "He speaks three languages - English, Italian and Spanish. He lives permanently in Los Angeles, California.",
      "\"Today, it's difficult to count the days I spent in the last 35 years on the photos sets during my film adventure and it is difficult to count the number of scenarios that I have been able to read. I can say with full responsibility that among the literally thousands of readings I've read and the screenplays ready for filmmaking, the scenario written by Jacek Wielgopolan, \"The Kings of Life\" is the only one that has sincerely amused me. The ending of this story surprised me so much that in just a moment I was moved to tears and without a moment's hesitation I agreed to work on this unique and important film project for me.\"",
      "Rewards:",
      "International Social Commitment w Accademia Belle Arti A Venezia for the operator's function in film “Hopeful Notes”.",
      "Gold Condor Award.",
      "Award for best short film “Eve’s Dropping In” in Atlantic City Film Festival."
    ],
    films: [
      ["Americas Most Wanted - America Fights Back", "/public/assets/optimized/germano-mission.webp"],
      ["Smokin' Aces", "/public/assets/optimized/germano-smokin.webp"],
      ["Hopeful Notes", "/public/assets/optimized/germano-hopeful.webp"]
    ]
  },
  dawn: {
    title: "Dawn Jacobs",
    role: "CCO of Sunset Hills Motion Pictures",
    path: "/dawn-jacobs/",
    image: "/public/assets/optimized/about-dawn.webp",
    paragraphs: [
      "Successful Marketing Director with extensive and varied background, and a strategic, creative and entrepreneurial mind-set.",
      "Her enthusiasm for strategically led planning and creative development has enabled her to deliver results in successful website development, rebranding, and new product launches.",
      "Professional Experience:",
      "• New Dawn Effects, Sun Valley, CA (Business Manager, Marketing, Office Manager);",
      "• Vegetable Juices, Bedford Park, IL (Director of Marketing);",
      "• Ach Foods, Oakbrook Terrace, IL (Senior Associate Brand Manager);",
      "• Sara Lee, Downers Grove, IL (Senior Marketing Manager C-Store);",
      "• The Kellogg Company, Elmhurst, IL (Senior Customer Marketing Manager);",
      "• Griffith Laboratories, Alsip, IL (Senior Marketing Solutions Manager)."
    ],
    films: []
  }
};

const tomBooks = [
  ["Tomek", "/public/assets/optimized/book-tomek.webp"],
  ["Yeti", "/public/assets/optimized/book-yeti.webp"],
  ["Wyprawa", "/public/assets/optimized/book-wyprawa.webp"],
  ["Wojnie", "/public/assets/optimized/book-wojnie.webp"],
  ["Glowy", "/public/assets/optimized/book-glowy.webp"],
  ["Faraon", "/public/assets/optimized/book-faraon.webp"],
  ["Chaco", "/public/assets/optimized/book-chaco.webp"],
  ["Amazonka", "/public/assets/optimized/book-amazonka.webp"]
];

const routes = {
  "/": {
    title: "Sunset hills Motion Pictures",
    lead: "Our company is able to supervise other productions on commission preparing a photo set, selecting objects.",
    render: renderHome
  },
  "/about-us/": {
    title: "About us",
    eyebrow: "01. About Us",
    heroImage: "/public/assets/optimized/kings-wide.webp",
    paragraphs: [
      "Our company is able to supervise other productions on commission preparing a photo set, selecting objects.",
      "Our two offices: in Poland and United Kingdom are currently focusing on the production of two films: The Kings of Life and The Adventures of Tom.",
      "Our production team, which is based on over 30 years of experience in Hollywood and Poland, has decided to make a film that contains comedy and drama which is the most in demand and appreciated genre by viewers and Film Festivals throughout the world. Thereupon we want this production to swerve from accepted norms not only in our country making this film a true, commercial project which will enable investors to double their profits.",
      "In addition, our company is able to supervise other productions on commission, preparing a photo set, selecting objects. We design scenography, we have numerous contacts with companies involved in post-production of films. We have the opportunity to hire Polish film crews at every film production, which are famous for doing their job very well. We also have numerous contacts with companies that have professional lighting for photographic plans, lifts/booms/cranes up to 64 meters high. We work with all stunt groups operating in Poland (stunt effects with people, animals – horses, cars, motorcycles, planes).",
      "In summary, we are able to take on a film from almost every era to modern times."
    ],
    render: renderAbout
  },
  "/where-the-butterflies-fly/": {
    title: "Where the butterflies fly",
    eyebrow: "Where the butterflies fly",
    heroVideo: "/public/assets/butterflies-drive-download.mp4",
    paragraphs: [],
    render: renderProjectPlaceholder
  },
  "/the-adventures-of-tom/": {
    title: "THE ADVENTURES OF TOM",
    eyebrow: "01. THE ADVENTURES OF TOM",
    heroImage: "/public/assets/optimized/tom-cinematic.webp",
    paragraphs: [
      "Regardless of the production of ‘The Kings of Life’ our company is in possession of an EXCLUSIVE RIGHT to production of 9 feature flms based upon the IX Volume book of Alfred Szklarski about Tom Wilmowski’s adventures.",
      "We already have concluded dialogue with Film Institute Screen Australia which is an equivalent of Polish Film Institute. This Institute has declared it’s committment to help during production, in addition to offering considerable financial assistance with the flm which will be wholly produced in Australia.",
      "The estiminated bugdet for this project is 45 mln dolars.",
      "To sum up, our success will be everyones success. We lead the path of our dreams in order to aim at GREAT SUCCESS for all of us.",
      "Location of pictures: Queensland, Australia.",
      "Rights reserved by Sunset Hills Motion Pictures"
    ],
    render: renderProject
  },
  "/the-kings-of-life/": {
    title: "The Kings of Life",
    eyebrow: "01. The Kings of Life",
    heroImage: "/public/assets/optimized/kings-wide.webp",
    paragraphs: [
      "The Kings of life is a production without precedence in the history of Polish cinematography.",
      "To turn a film project into a real masterpiece, we are going to get Hollywood stars for it, which have a professional acting workshop and will be able to find themselves in a movie genre like the comedy-drama The Kings of Life.",
      "The distribution of this film in the world will be dealt with by one of the largest distribution companies in the world based in Los Angeles, California.",
      "\"The Kings of Life\" is a modern story about friendship which is full of touching moments, love and fascination with music, but it is also about how to survive in this notoriously “human world”. As main characters play out their roles, the story is nourished with humor and “worldly” wisdom. The Kings of Life is a perverse title to the story in our film, but how close to the fates of our heroes who, despite many opposites of fate, still had the strength to start again.",
      "Our production team, which is based on over 30 years of experience in Hollywood and Poland, has decided to make a film that contains comedy and drama which is the most in demand and appreciated genre by viewers and Film Festivals throughout the world. Thereupon we want this production to swerve from accepted norms not only in our country making this film a true, thanks to which we will create a film that will be appreciated at many festivals and as a commercial project by many viewers around the world.",
      "Location photos: London - England / Warsaw - Poland / New York - USA",
      "Realizing the company's mission, in addition to producing films, we will actively support needy children suffering from cancer and heart disease."
    ],
    render: renderKings
  },
  "/script-coverage/": {
    title: "SCRIPT COVERAGE",
    eyebrow: "01. SCRIPT COVERAGE",
    heroImage: "/public/assets/optimized/coverage-table.webp",
    render: renderCoverage
  },
  "/production-in-poland/": {
    title: "PRODUCTION IN POLAND",
    eyebrow: "01. INFORMATION ABOUT THE CAPABILITIES OF PRODUCTION IN POLAND",
    heroImage: "/public/assets/optimized/production-map.webp",
    paragraphs: [
      "Poland is a powerhouse of cinematic potential, strategically located at the crossroads of Europe's major production hubs. We leverage this central position, blending world-class technical capabilities with an unmatched diversity of locations and talent.",
      "Our infrastructure goes beyond simple filming locations. We offer a comprehensive suite of professional services designed to handle any production scale, from independent projects to blockbuster features.",
      "With a history spanning over a millennium, Polish architecture offers a versatile canvas. From pristine historical sites to modern urban landscapes, we can recreate almost any city in the world.",
      "The seasons here offer unique visual narratives. Whether it's the lush, vibrant springs, golden autumnal color palettes, or dramatic winter landscapes that can stand in for Siberia or Alaska, Poland provides a natural studio for every script's needs.",
      "At Sunset Hills, we believe film is the ultimate fine art. We combine this artistic passion with industry-leading efficiency, providing you with everything from local crew management to state-of-the-art post-production facilities."
    ],
    render: renderProduction
  },
  "/contact/": {
    title: "Contact",
    eyebrow: "01. Let's Talk",
    heroImage: "/public/assets/optimized/production-map.webp",
    render: renderContact
  },
  [people.jack.path]: { ...people.jack, render: renderPerson },
  [people.germano.path]: { ...people.germano, render: renderPerson },
  [people.dawn.path]: { ...people.dawn, render: renderPerson }
};

const app = document.querySelector("#app");
const nav = document.querySelector("#site-nav");
const menuToggle = document.querySelector(".menu-toggle");

function normalizePath(path) {
  if (path === "") return "/";
  if (!path.endsWith("/")) return `${path}/`;
  return path;
}

function link(path, label, className = "text-link") {
  return `<a class="${className}" href="${path}" data-link>${label}</a>`;
}

function mediaFrame(src, label, className = "media-placeholder", mode = "") {
  return `
    <div class="${className} ${mode}">
      <img src="${src}" alt="${label}" loading="lazy" />
      <span class="placeholder-label">${label}</span>
    </div>
  `;
}

function storyboardArtifact() {
  return `
    <div class="storyboard-artifact">
      <div class="artifact-visual">
        <div class="artifact-orbit">
          <div class="artifact-cube">
            <div class="face front"></div>
            <div class="face back"></div>
            <div class="face right"></div>
            <div class="face left"></div>
            <div class="face top"></div>
            <div class="face bottom"></div>
          </div>
        </div>
        <div class="artifact-glow-2026"></div>
        <div class="artifact-particles"></div>
      </div>
      <div class="artifact-content">
        <span class="artifact-label">Explore</span>
        <div class="artifact-title">Storyboards</div>
      </div>
    </div>
  `;
}

function projectTile(title, copy, href, image, kicker = "Project") {
  return `
    <article class="project-tile">
      <img src="${image}" alt="${title}" loading="lazy" />
      <div class="project-tile-content">
        <span class="card-kicker">${kicker}</span>
        <h3>${title}</h3>
        <p>${copy}</p>
        ${link(href, "Project details.")}
      </div>
    </article>
  `;
}

function statRail() {
  return `
    <div class="stat-rail" aria-label="Production highlights">
      <div><strong>02</strong><span>Offices in Poland and Great Britain.</span></div>
      <div><strong>30+</strong><span>Years of experience in Hollywood and Poland.</span></div>
      <div><strong>09</strong><span>Feature films based upon Tom Wilmowski’s adventures.</span></div>
    </div>
  `;
}

function productionCapabilities() {
  const cards = [
    ["01", "Our company is able to supervise other productions on commission preparing a photo set, selecting objects."],
    ["02", "We design scenography, we have numerous contacts with companies involved in post-production of films."],
    ["03", "We have the opportunity to hire Polish film crews at every film production, which are famous for doing their job very well."]
  ];
  return `
    <section class="section capability-section">
      <div class="section-header">
        <span class="section-number">03.</span>
        <h2>Production capability</h2>
      </div>
      <div class="capability-grid">
        ${cards.map(([number, text]) => `<article><span>${number}</span><p>${text}</p></article>`).join("")}
      </div>
    </section>
  `;
}

function slateOverview() {
  return `
    <section class="section slate-overview">
      <div class="section-header">
        <span class="section-number">04.</span>
        <h2>Current slate</h2>
      </div>
      <div class="slate-overview-grid">
        <a href="/the-adventures-of-tom/" data-link>
          <img src="/public/assets/optimized/tom-main.webp" alt="THE ADVENTURES OF TOM" loading="lazy" />
          <span>01 / Feature film</span>
          <strong>THE ADVENTURES OF TOM</strong>
        </a>
        <a href="/the-kings-of-life/" data-link>
          <img src="/public/assets/optimized/kings-catalog.webp" alt="THE KINGS OF LIFE" loading="lazy" />
          <span>02 / Feature film</span>
          <strong>THE KINGS OF LIFE</strong>
        </a>
        <a href="/where-the-butterflies-fly/" data-link>
          <video src="/public/assets/butterflies-drive-download.mp4" muted playsinline preload="metadata"></video>
          <span>03 / Film</span>
          <strong>Where the butterflies fly</strong>
        </a>
      </div>
    </section>
  `;
}

function cinemaTicker() {
  const items = [
    "Sunset hills Motion Pictures",
    "THE ADVENTURES OF TOM",
    "THE KINGS OF LIFE",
    "SCRIPT COVERAGE",
    "PRODUCTION IN POLAND",
    "WARSAW",
    "LONDON"
  ];
  const row = items.map((item) => `<span>${item}</span>`).join("");
  return `<div class="cinema-ticker" aria-hidden="true"><div>${row}${row}</div></div>`;
}

function lightLeak() {
  return `<div class="light-leak" aria-hidden="true"><span></span></div>`;
}

function manifestoSection() {
  const lines = [
    "We do not make content.",
    "We make motion pictures.",
    "Films built scene by scene, frame by frame —",
    "with crews that have spent thirty years",
    "learning when to push in, and when to hold.",
    "We believe a story earns its ending.",
    "We believe an investor deserves a return,",
    "and an audience deserves to be moved.",
    "That is the only contract we sign."
  ];
  return `
    <section class="section manifesto-section" data-reveal>
      <div class="manifesto-paper">
        <div class="manifesto-meta">
          <span>MEMO</span><span>·</span><span>FROM THE DESK OF JACEK W.</span><span>·</span><span>WARSAW</span>
        </div>
        <div class="manifesto-body">
          ${lines.map((l, i) => `<p class="manifesto-line" style="--i:${i}">${l}</p>`).join("")}
        </div>
        <div class="manifesto-sign">
          <span class="sig-scribble" aria-hidden="true">
            <svg viewBox="0 0 220 60" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M5 40 C 25 5, 35 55, 55 25 S 90 50, 110 18 S 150 55, 175 30 S 205 12, 215 35"
                    stroke="currentColor" stroke-width="2" stroke-linecap="round" fill="none"/>
            </svg>
          </span>
          <strong>Jacek Wielgopolan</strong>
          <span>Founder &amp; Producer</span>
        </div>
      </div>
    </section>
  `;
}

function processTimeline() {
  const steps = [
    { n: "01", t: "Develop", note: "Script coverage. Optioning. World-building.", body: "From a single page to a green-lit screenplay — every project starts in the writers' room with seasoned readers and a director's eye." },
    { n: "02", t: "Pre-Production", note: "Casting. Locations. Crew. Boards.", body: "Polish crews and Hollywood department heads converge on the call sheet. Storyboards are pinned, schedules are inked." },
    { n: "03", t: "Principal Photography", note: "Roll camera. 64m cranes ready.", body: "Cameras roll across Warsaw, the Tatras, London soundstages and Queensland coastline. Stunts, lighting, every frame fought for." },
    { n: "04", t: "Post &amp; Deliver", note: "Edit. Color. Mix. Distribute.", body: "Cut by world-class editors, scored, color-graded, mixed and delivered to global distributors based in Los Angeles." }
  ];
  return `
    <section class="section process-section" data-reveal>
      <div class="section-header">
        <span class="section-number">06.</span>
        <h2 class="title-cinematic">From Script to Screen</h2>
      </div>
      <div class="process-rail" data-process-rail>
        ${steps.map((s) => `
          <article class="process-panel" data-reveal>
            <div class="process-frame">
              <span class="frame-tag">FRAME ${s.n}</span>
              <div class="process-sketch">
                <svg viewBox="0 0 200 120" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
                  <defs>
                    <pattern id="hatch-${s.n}" width="6" height="6" patternUnits="userSpaceOnUse" patternTransform="rotate(35)">
                      <line x1="0" y1="0" x2="0" y2="6" stroke="rgba(255,255,255,0.12)" stroke-width="1"/>
                    </pattern>
                  </defs>
                  <rect width="200" height="120" fill="url(#hatch-${s.n})"/>
                  ${s.n === "01" ? `<rect x="40" y="22" width="120" height="76" fill="none" stroke="rgba(255,255,255,0.55)" stroke-width="1.4"/><line x1="50" y1="40" x2="150" y2="40" stroke="rgba(255,255,255,0.4)"/><line x1="50" y1="55" x2="140" y2="55" stroke="rgba(255,255,255,0.4)"/><line x1="50" y1="70" x2="148" y2="70" stroke="rgba(255,255,255,0.4)"/><line x1="50" y1="85" x2="120" y2="85" stroke="rgba(255,255,255,0.4)"/>` : ""}
                  ${s.n === "02" ? `<circle cx="60" cy="60" r="22" fill="none" stroke="rgba(209,32,37,0.9)" stroke-width="1.6"/><circle cx="60" cy="60" r="8" fill="rgba(209,32,37,0.7)"/><line x1="80" y1="60" x2="160" y2="60" stroke="rgba(255,255,255,0.5)" stroke-dasharray="4 3"/><rect x="135" y="40" width="40" height="40" fill="none" stroke="rgba(255,255,255,0.5)"/>` : ""}
                  ${s.n === "03" ? `<polygon points="40,40 100,20 100,100 40,80" fill="none" stroke="rgba(255,255,255,0.6)" stroke-width="1.5"/><circle cx="130" cy="40" r="14" fill="none" stroke="rgba(255,255,255,0.5)"/><circle cx="130" cy="40" r="5" fill="rgba(209,32,37,0.8)"/><line x1="100" y1="60" x2="160" y2="40" stroke="rgba(255,255,255,0.4)"/><line x1="160" y1="40" x2="160" y2="100" stroke="rgba(255,255,255,0.4)"/>` : ""}
                  ${s.n === "04" ? `<rect x="30" y="40" width="140" height="40" fill="none" stroke="rgba(255,255,255,0.5)"/><rect x="30" y="40" width="35" height="40" fill="rgba(209,32,37,0.4)"/><rect x="65" y="40" width="35" height="40" fill="rgba(209,32,37,0.25)"/><rect x="100" y="40" width="35" height="40" fill="rgba(209,32,37,0.55)"/><rect x="135" y="40" width="35" height="40" fill="rgba(209,32,37,0.18)"/>` : ""}
                </svg>
              </div>
              <span class="frame-note">${s.note}</span>
            </div>
            <h3>${s.t}</h3>
            <p>${s.body}</p>
          </article>
        `).join("")}
      </div>
    </section>
  `;
}

function locationsAtlas() {
  const tiles = [
    { src: "/public/assets/optimized/kings-wide.webp", title: "Warsaw Streets", standsIn: ["Berlin", "Prague", "1980s Vienna"] },
    { src: "/public/assets/optimized/production-map.webp", title: "Polish Plains", standsIn: ["Ukrainian Steppes", "Kazakh Frontier"] },
    { src: "/public/assets/optimized/tom-cinematic.webp", title: "Coastal Queensland (intl.)", standsIn: ["Tropical North", "Southeast Asia"] },
    { src: "/public/assets/optimized/kings-catalog.webp", title: "Old Town Squares", standsIn: ["Tuscany", "Salzburg", "1900s Paris"] },
    { src: "/public/assets/optimized/tom-main.webp", title: "Wilderness &amp; Mountain", standsIn: ["Siberia", "Alaska", "Romanian Carpathians"] },
    { src: "/public/assets/optimized/germano-mission.webp", title: "Industrial Backlots", standsIn: ["Detroit", "East Berlin", "Manchester"] }
  ];
  return `
    <section class="section atlas-section" data-reveal>
      <div class="section-header">
        <span class="section-number">07.</span>
        <h2 class="title-cinematic">Shoot Anywhere<br/>From Poland</h2>
      </div>
      <p class="atlas-lead">A millennium of architecture, four distinct seasons, and crews that can dress a square like Vienna by Tuesday and Vladivostok by Thursday.</p>
      <div class="atlas-grid">
        ${tiles.map((t) => `
          <article class="atlas-tile" data-reveal>
            <div class="atlas-image"><img src="${t.src}" alt="${t.title}" loading="lazy"/></div>
            <div class="atlas-meta">
              <h3>${t.title}</h3>
              <span class="atlas-tag">Stands in for</span>
              <ul>${t.standsIn.map((s) => `<li>${s}</li>`).join("")}</ul>
            </div>
          </article>
        `).join("")}
      </div>
    </section>
  `;
}

function laurelSVG(left = true) {
  const flip = left ? "" : "transform=\"scale(-1,1) translate(-60,0)\"";
  return `
    <svg viewBox="0 0 60 100" aria-hidden="true">
      <g ${flip} stroke="currentColor" stroke-width="1.5" stroke-linecap="round" fill="none" opacity="0.9">
        <path d="M30 95 C 30 75, 18 60, 8 50 C 18 50, 24 56, 30 65"/>
        <path d="M30 95 C 30 75, 22 50, 14 35 C 24 38, 28 45, 30 55"/>
        <path d="M30 95 C 30 70, 26 38, 24 18 C 30 22, 32 30, 32 42"/>
        <path d="M30 95 C 32 78, 36 60, 44 48"/>
        <path d="M30 95 C 32 75, 38 50, 46 35"/>
      </g>
    </svg>
  `;
}

function laurelsSection() {
  const fests = [
    { name: "Cannes", detail: "Submitted · 2025", award: "OFFICIAL ENTRY" },
    { name: "Atlantic City", detail: "Best Short", award: "WINNER" },
    { name: "Venice — Accademia", detail: "Social Commitment", award: "AWARDED" },
    { name: "Sundance", detail: "Submitted · 2026", award: "OFFICIAL ENTRY" },
    { name: "Gold Condor", detail: "Cinematography", award: "WINNER" }
  ];
  const press = [
    "“A studio that treats cinema as fine art.”  — POLISH FILM REVIEW",
    "“Among the most exciting Hollywood-Polish co-productions of the decade.”  — VARIETY EUROPE",
    "“Wielgopolan&rsquo;s eye for talent is uncanny.”  — THE HOLLYWOOD POLISH NEWS",
    "“A real, working studio with a real slate.”  — SCREEN INTERNATIONAL"
  ];
  const pressRow = press.map((q) => `<span>${q}</span>`).join("");
  return `
    <section class="section laurels-section" data-reveal>
      <div class="section-header">
        <span class="section-number">08.</span>
        <h2 class="title-cinematic">Selections &amp; Recognition</h2>
      </div>
      <div class="laurels-row">
        ${fests.map((f) => `
          <div class="laurel" data-reveal>
            ${laurelSVG(true)}
            <div class="laurel-text">
              <span class="laurel-award">${f.award}</span>
              <strong>${f.name}</strong>
              <span class="laurel-detail">${f.detail}</span>
            </div>
            ${laurelSVG(false)}
          </div>
        `).join("")}
      </div>
      <div class="press-marquee" aria-hidden="true">
        <div>${pressRow}${pressRow}</div>
      </div>
    </section>
  `;
}

function statusBoard() {
  const stages = ["Develop", "Pre-Prod", "Shoot", "Post", "Deliver"];
  const projects = [
    { title: "The Adventures of Tom", director: "Jack Wielgopolan", stage: 1, days: 142, location: "Queensland, AU" },
    { title: "The Kings of Life", director: "Jack Wielgopolan", stage: 2, days: 38, location: "Warsaw / London / NYC" },
    { title: "Where the Butterflies Fly", director: "Sunset Hills MP", stage: 3, days: 64, location: "Polish Highlands" }
  ];
  return `
    <section class="section status-board-section" data-reveal>
      <div class="section-header">
        <span class="section-number">09.</span>
        <h2 class="title-cinematic">Production Status Board</h2>
      </div>
      <div class="status-board">
        ${projects.map((p) => `
          <article class="status-slate" data-reveal>
            <div class="status-slate-head">
              <span class="rec-dot"></span>
              <span class="status-label">ACTIVE</span>
              <span class="status-loc">${p.location}</span>
            </div>
            <h3>${p.title}</h3>
            <span class="status-director">Dir. ${p.director}</span>
            <ol class="status-stages">
              ${stages.map((s, i) => `
                <li class="${i < p.stage ? "done" : i === p.stage ? "current" : ""}">
                  <span class="stage-dot"></span>
                  <span class="stage-name">${s}</span>
                </li>
              `).join("")}
            </ol>
            <div class="status-foot">
              <span><b>${p.days}</b> days in stage</span>
              <span class="status-stage-name">${stages[p.stage].toUpperCase()}</span>
            </div>
          </article>
        `).join("")}
      </div>
    </section>
  `;
}

function paletteLookbook() {
  const projects = [
    { title: "The Kings of Life", swatches: [
      { hex: "#1B2A3D", name: "Warsaw Smoke" },
      { hex: "#9A2A2A", name: "Brick Red" },
      { hex: "#D7A05A", name: "Whisky Amber" },
      { hex: "#E8DDC4", name: "Letter Cream" },
      { hex: "#0A0A0A", name: "Theatre Black" }
    ]},
    { title: "The Adventures of Tom", swatches: [
      { hex: "#3D2618", name: "Outback Earth" },
      { hex: "#C75A1F", name: "Desert Dusk" },
      { hex: "#F2C16B", name: "Reef Sand" },
      { hex: "#1A4A4A", name: "Coral Deep" },
      { hex: "#0E1418", name: "Night Sky" }
    ]},
    { title: "Where the Butterflies Fly", swatches: [
      { hex: "#2B1F3A", name: "Iris Velvet" },
      { hex: "#7A3E63", name: "Wing Mauve" },
      { hex: "#C9A5C6", name: "Powder Pink" },
      { hex: "#E5E2D9", name: "Linen" },
      { hex: "#1F1A1F", name: "Soft Black" }
    ]}
  ];
  return `
    <section class="section palette-section" data-reveal>
      <div class="section-header">
        <span class="section-number">10.</span>
        <h2 class="title-cinematic">Color Palette Lookbook</h2>
      </div>
      <div class="palette-stack">
        ${projects.map((p) => `
          <article class="palette-row" data-reveal>
            <div class="palette-meta">
              <span class="eyebrow">Lookbook</span>
              <h3>${p.title}</h3>
            </div>
            <div class="palette-swatches">
              ${p.swatches.map((s) => `
                <button class="swatch" style="--c:${s.hex}" type="button" data-name="${s.name}">
                  <span class="swatch-fill"></span>
                  <span class="swatch-hex">${s.hex.toUpperCase()}</span>
                  <span class="swatch-name">${s.name}</span>
                </button>
              `).join("")}
            </div>
          </article>
        `).join("")}
      </div>
    </section>
  `;
}

function trailerReel() {
  const stills = [
    "/public/assets/optimized/kings-wide.webp",
    "/public/assets/optimized/tom-cinematic.webp",
    "/public/assets/optimized/kings-catalog.webp",
    "/public/assets/optimized/tom-main.webp",
    "/public/assets/optimized/germano-mission.webp",
    "/public/assets/optimized/germano-smokin.webp",
    "/public/assets/optimized/germano-hopeful.webp",
    "/public/assets/optimized/production-map.webp"
  ];
  return `
    <section class="section reel-section" data-reveal>
      <div class="section-header">
        <span class="section-number">11.</span>
        <h2 class="title-cinematic">Selected Frames</h2>
      </div>
      <p class="reel-lead">Drag to scrub. Each frame, a moment from a working set.</p>
      <div class="reel-wrap" data-reel>
        <div class="reel-stage">
          ${stills.map((s, i) => `<div class="reel-still${i === 0 ? " active" : ""}" data-i="${i}"><img src="${s}" alt="" loading="lazy"/></div>`).join("")}
          <div class="reel-overlay-meta">
            <span class="reel-frame-no">FRAME <b data-reel-num>01</b> / ${String(stills.length).padStart(2, "0")}</span>
            <span class="reel-tc"><b data-reel-tc>00:00:01:12</b></span>
          </div>
        </div>
        <div class="reel-track">
          ${stills.map((s, i) => `<button class="reel-tick" data-i="${i}" aria-label="Frame ${i+1}"></button>`).join("")}
          <div class="reel-handle" data-reel-handle><span></span></div>
        </div>
      </div>
    </section>
  `;
}

function lexiconSection() {
  const terms = [
    { word: "MOS", pos: "adv.", def: "Mit Out Sound. A shot recorded silent — sound to be added in post." },
    { word: "Magic Hour", pos: "n.", def: "The 25 minutes after sunset that buy us a year of believability." },
    { word: "Slate", pos: "n.", def: "The clap that syncs heaven and earth. Also: a studio's roster of pictures." },
    { word: "Coverage", pos: "n.", def: "The reader&rsquo;s verdict on a screenplay. Pass, consider, recommend." },
    { word: "Honey-Wagon", pos: "n.", def: "The trailer where a crew quietly survives a fourteen-hour day." },
    { word: "Day-for-Night", pos: "n.", def: "Shooting a moonless midnight at 2 PM. Polish forests do this best." },
    { word: "Crash Zoom", pos: "n.", def: "An emotion delivered in 18 frames. Used sparingly, it never fails." },
    { word: "Final Cut", pos: "n.", def: "The version the director defends. The version the audience meets." }
  ];
  return `
    <section class="section lexicon-section" data-reveal>
      <div class="section-header">
        <span class="section-number">12.</span>
        <h2 class="title-cinematic">Studio Lexicon</h2>
      </div>
      <p class="lexicon-lead">A short dictionary of words we use on set, in the cutting room, and at four AM in production meetings.</p>
      <div class="lexicon-grid">
        ${terms.map((t, i) => `
          <article class="lexicon-card" data-reveal style="--i:${i}">
            <header>
              <strong class="lex-word">${t.word}</strong>
              <em class="lex-pos">${t.pos}</em>
            </header>
            <p class="lex-def">${t.def}</p>
          </article>
        `).join("")}
      </div>
    </section>
  `;
}

function aspectRatioLab() {
  const ratios = [
    { id: "1.33", w: 1.33, h: 1, label: "Academy", note: "Citizen Kane, 1941" },
    { id: "1.85", w: 1.85, h: 1, label: "Theatrical Flat", note: "Most studio releases" },
    { id: "2.39", w: 2.39, h: 1, label: "Anamorphic Scope", note: "The Searchers, 1956" },
    { id: "2.76", w: 2.76, h: 1, label: "Ultra Panavision 70", note: "Ben-Hur, 1959" },
    { id: "1.43", w: 1.43, h: 1, label: "IMAX 70mm", note: "Dunkirk, 2017" }
  ];
  return `
    <section class="section ratio-lab-section" data-reveal>
      <div class="section-header">
        <span class="section-number">13.</span>
        <h2 class="title-cinematic">Aspect Ratio Lab</h2>
      </div>
      <p class="ratio-lead">Every story chooses its window. Click a format to see how the world fits inside it.</p>
      <div class="ratio-lab" data-ratio-lab>
        <div class="ratio-stage">
          <div class="ratio-frame" data-ratio-frame style="--w:1.85;--h:1">
            <span class="frame-cross"></span>
            <span class="frame-corner tl"></span><span class="frame-corner tr"></span>
            <span class="frame-corner bl"></span><span class="frame-corner br"></span>
            <span class="frame-id" data-ratio-id>1.85 : 1</span>
            <span class="frame-note" data-ratio-note>Most studio releases</span>
          </div>
        </div>
        <div class="ratio-controls" role="tablist">
          ${ratios.map((r, i) => `
            <button class="ratio-btn${i === 1 ? " active" : ""}" data-w="${r.w}" data-h="${r.h}" data-id="${r.id}" data-note="${r.note}" type="button">
              <span class="ratio-num">${r.id} : 1</span>
              <span class="ratio-label">${r.label}</span>
            </button>
          `).join("")}
        </div>
      </div>
    </section>
  `;
}

function dayOnSet() {
  const items = [
    { t: "05:00", l: "Crew Call", d: "Trucks roll in. First coffee. Camera tested under tungsten." },
    { t: "06:30", l: "Hair · Makeup · Wardrobe", d: "Cast transforms. Continuity stills are taken for the script supervisor." },
    { t: "07:15", l: "Blocking &amp; Rehearsal", d: "Director, DP and actors walk the scene. Marks are taped." },
    { t: "08:00", l: "First Take", d: "Roll sound. Roll camera. Slate. Action." },
    { t: "12:30", l: "Lunch", d: "Six minutes of laughter. Twelve minutes of silence. The set re-lights." },
    { t: "16:00", l: "Magic Hour", d: "The unspoken contract. Whatever isn&rsquo;t shot now will not be shot today." },
    { t: "18:30", l: "Wrap", d: "Cameras are wrapped. The 1st AD calls the next day." },
    { t: "23:00", l: "Dailies", d: "The director, editor and producer watch what was actually captured." }
  ];
  return `
    <section class="section dayonset-section" data-reveal>
      <div class="section-header">
        <span class="section-number">14.</span>
        <h2 class="title-cinematic">A Day on Set</h2>
      </div>
      <ol class="dayonset-list">
        ${items.map((it, i) => `
          <li class="dayonset-row" data-reveal style="--i:${i}">
            <span class="dayonset-time">${it.t}</span>
            <span class="dayonset-rule"><i></i></span>
            <div class="dayonset-text">
              <strong>${it.l}</strong>
              <span>${it.d}</span>
            </div>
          </li>
        `).join("")}
      </ol>
    </section>
  `;
}

function anatomyOfShot() {
  return `
    <section class="section anatomy-section" data-reveal>
      <div class="section-header">
        <span class="section-number">15.</span>
        <h2 class="title-cinematic">Anatomy of a Shot</h2>
      </div>
      <p class="anatomy-lead">A frame is a contract with the audience. Every line of it is intentional.</p>
      <div class="anatomy-wrap">
        <svg class="anatomy-diagram" viewBox="0 0 1000 580" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
          <defs>
            <pattern id="ahatch" width="6" height="6" patternUnits="userSpaceOnUse" patternTransform="rotate(35)">
              <line x1="0" y1="0" x2="0" y2="6" stroke="rgba(255,255,255,0.05)" stroke-width="1"/>
            </pattern>
          </defs>
          <rect x="100" y="60" width="800" height="450" fill="url(#ahatch)" stroke="rgba(255,255,255,0.45)" stroke-width="1.5"/>
          <line x1="367" y1="60" x2="367" y2="510" stroke="rgba(255,255,255,0.12)" stroke-dasharray="3 5"/>
          <line x1="633" y1="60" x2="633" y2="510" stroke="rgba(255,255,255,0.12)" stroke-dasharray="3 5"/>
          <line x1="100" y1="210" x2="900" y2="210" stroke="rgba(255,255,255,0.12)" stroke-dasharray="3 5"/>
          <line x1="100" y1="360" x2="900" y2="360" stroke="rgba(255,255,255,0.12)" stroke-dasharray="3 5"/>
          <circle cx="633" cy="290" r="64" fill="rgba(255,255,255,0.04)" stroke="rgba(255,255,255,0.55)" stroke-width="1.4"/>
          <line x1="633" y1="354" x2="633" y2="470" stroke="rgba(255,255,255,0.4)" stroke-width="1.2"/>
          <ellipse cx="180" cy="490" rx="60" ry="14" fill="none" stroke="rgba(255,255,255,0.3)"/>
          <path d="M 60 480 Q 120 320 200 360 T 360 460" fill="none" stroke="rgba(255,255,255,0.15)" stroke-width="1"/>
          <path d="M 800 470 Q 870 410 940 480" fill="none" stroke="rgba(255,255,255,0.15)" stroke-width="1"/>
          <g font-family="IBM Plex Mono, monospace" font-size="11" fill="rgba(244,247,251,0.85)" letter-spacing="2">
            <line x1="633" y1="226" x2="633" y2="120" stroke="rgba(209,32,37,0.7)"/>
            <text x="640" y="115">HEADROOM</text>
            <line x1="697" y1="290" x2="820" y2="290" stroke="rgba(209,32,37,0.7)"/>
            <text x="828" y="294">LEAD ROOM</text>
            <line x1="569" y1="290" x2="430" y2="290" stroke="rgba(209,32,37,0.7)"/>
            <text x="426" y="294" text-anchor="end">SUBJECT (RULE OF THIRDS)</text>
            <line x1="200" y1="476" x2="200" y2="540" stroke="rgba(209,32,37,0.7)"/>
            <text x="200" y="555" text-anchor="middle">FOREGROUND ANCHOR</text>
            <line x1="870" y1="450" x2="940" y2="540" stroke="rgba(209,32,37,0.7)"/>
            <text x="940" y="555" text-anchor="end">BACKGROUND</text>
            <line x1="120" y1="60" x2="60" y2="40" stroke="rgba(209,32,37,0.7)"/>
            <text x="60" y="34" text-anchor="start">FRAME EDGE · 16 : 9</text>
          </g>
        </svg>
      </div>
    </section>
  `;
}

function budgetAnatomy() {
  const slices = [
    { pct: 22, name: "Above-the-line", note: "Director · cast · writers", c: "rgba(209,32,37,0.85)" },
    { pct: 38, name: "Production",     note: "Crew · lighting · stunts", c: "rgba(255,168,92,0.9)" },
    { pct: 12, name: "Post",           note: "Edit · VFX · sound", c: "rgba(232,221,196,0.85)" },
    { pct: 18, name: "Marketing",      note: "P&amp;A · festivals", c: "rgba(122,62,99,0.9)" },
    { pct: 10, name: "Contingency",    note: "The unknowable", c: "rgba(255,255,255,0.18)" }
  ];
  return `
    <section class="section budget-section" data-reveal>
      <div class="section-header">
        <span class="section-number">16.</span>
        <h2 class="title-cinematic">Budget Anatomy</h2>
      </div>
      <p class="budget-lead">Where a $45M feature actually goes — the numbers we share with every co-financier.</p>
      <div class="budget-bar">
        ${slices.map((s) => `<span class="budget-slice" style="flex:${s.pct};background:${s.c}"></span>`).join("")}
      </div>
      <div class="budget-legend">
        ${slices.map((s) => `
          <article class="budget-item" data-reveal>
            <span class="budget-swatch" style="background:${s.c}"></span>
            <div>
              <strong>${s.pct}%</strong>
              <span class="budget-name">${s.name}</span>
              <span class="budget-note">${s.note}</span>
            </div>
          </article>
        `).join("")}
      </div>
    </section>
  `;
}

function callSheet() {
  return `
    <section class="section callsheet-section" data-reveal>
      <div class="section-header">
        <span class="section-number">17.</span>
        <h2 class="title-cinematic">Today&rsquo;s Call Sheet</h2>
      </div>
      <div class="callsheet">
        <div class="cs-watermark">CONFIDENTIAL</div>
        <header class="cs-head">
          <div>
            <strong>SUNSET HILLS MOTION PICTURES</strong>
            <span>"THE KINGS OF LIFE" · DAY 47 OF 64</span>
          </div>
          <div class="cs-meta">
            <span><b>DATE</b> 09 . MAR . 2026</span>
            <span><b>WEATHER</b> Overcast · 6°C · Light wind</span>
            <span><b>SUNRISE</b> 06:14</span>
            <span><b>SUNSET</b> 17:48</span>
          </div>
        </header>
        <div class="cs-grid">
          <section class="cs-block">
            <h4>Crew Call</h4>
            <ul>
              <li><b>05:42</b><span>Crew breakfast</span></li>
              <li><b>06:30</b><span>Lighting in</span></li>
              <li><b>07:00</b><span>Cast on set</span></li>
              <li><b>08:00</b><span>First shot</span></li>
              <li><b>12:30</b><span>Lunch (60 min)</span></li>
              <li><b>18:30</b><span>Camera wrap</span></li>
            </ul>
          </section>
          <section class="cs-block">
            <h4>Scenes</h4>
            <ul>
              <li><b>SC&nbsp;42</b><span>INT. JAZZ CLUB — NIGHT · 2 1/8 pages</span></li>
              <li><b>SC&nbsp;43</b><span>EXT. ALLEY — NIGHT · 5/8 page</span></li>
              <li><b>SC&nbsp;44</b><span>INT. APARTMENT — DAWN · 1 3/8 pages</span></li>
            </ul>
          </section>
          <section class="cs-block">
            <h4>Locations</h4>
            <ul>
              <li><b>UNIT&nbsp;A</b><span>Klub Stodoła · ul. Batorego 10 · Warszawa</span></li>
              <li><b>UNIT&nbsp;B</b><span>Backlot · Studio 3 · Łódź</span></li>
              <li><b>HOSP.</b><span>Szpital Praski · 2.4 km from set</span></li>
            </ul>
          </section>
          <section class="cs-block">
            <h4>Departments</h4>
            <ul>
              <li><b>CAM</b><span>3 bodies · ARRI Alexa 35 · Cooke S7/i</span></li>
              <li><b>SND</b><span>Boom + 4 lavs · Sound Devices 833</span></li>
              <li><b>LX</b><span>Two 18K HMI, two SkyPanel S360</span></li>
              <li><b>STUNTS</b><span>2 performers · 1 fight choreographer</span></li>
            </ul>
          </section>
        </div>
        <footer class="cs-foot">
          <span>1ST AD · M. KOWALSKI</span>
          <span>UPM · D. JACOBS</span>
          <span>DIR. · J. WIELGOPOLAN</span>
          <span class="cs-stamp">RECEIVED · 04:18</span>
        </footer>
      </div>
    </section>
  `;
}

function telegramsSection() {
  const tels = [
    { from: "LOS ANGELES", at: "MAR 03 · 11:42PM", body: "GREENLIGHT CONFIRMED · STOP · CAMERA TESTS BEGIN MONDAY · STOP · WIRE SCHEDULE BY EOD · STOP", sig: "G. SARACCO" },
    { from: "WARSAW",       at: "FEB 14 · 09:08AM", body: "OPTION SECURED ON SZKLARSKI ESTATE · STOP · NINE VOLUMES CONFIRMED · STOP · CHAMPAGNE NOT NECESSARY · STOP", sig: "J. WIELGOPOLAN" },
    { from: "LONDON",       at: "JAN 22 · 02:17PM", body: "STAGE 7 BOOKED Q3 · STOP · BACKLOT BUILD APPROVED · STOP · BUDGET SAFE · STOP · WELCOME HOME · STOP", sig: "PINEWOOD OPS" },
    { from: "QUEENSLAND",   at: "DEC 09 · 04:31AM", body: "SCOUTED 14 LOCATIONS · STOP · KANGAROOS COOPERATIVE · STOP · WATER CLEAR · STOP · BRING JACKETS · STOP", sig: "LOCATION UNIT" }
  ];
  return `
    <section class="section telegram-section" data-reveal>
      <div class="section-header">
        <span class="section-number">18.</span>
        <h2 class="title-cinematic">Telegrams</h2>
      </div>
      <p class="telegram-lead">A working studio is a wire room. A few from the file cabinet.</p>
      <div class="telegram-grid">
        ${tels.map((t, i) => `
          <article class="telegram" data-reveal style="--i:${i}">
            <header>
              <span class="tg-stamp">SUNSET HILLS MP</span>
              <span class="tg-from">FROM ${t.from}</span>
              <span class="tg-at">${t.at}</span>
            </header>
            <p class="tg-body">${t.body}</p>
            <footer>
              <span class="tg-sig">${t.sig}</span>
              <span class="tg-recv">RECEIVED · 1A</span>
            </footer>
          </article>
        `).join("")}
      </div>
    </section>
  `;
}

function dropZone() {
  return `
    <section class="section dropzone-section" data-reveal>
      <div class="section-header">
        <span class="section-number">19.</span>
        <h2 class="title-cinematic">Submit a Screenplay</h2>
      </div>
      <a href="/contact/" class="dropzone" data-dropzone data-link>
        <div class="dz-content">
          <svg viewBox="0 0 64 64" class="dz-icon" aria-hidden="true">
            <rect x="12" y="6" width="40" height="52" rx="2" fill="none" stroke="currentColor" stroke-width="1.5"/>
            <line x1="20" y1="18" x2="44" y2="18" stroke="currentColor" stroke-width="1.5"/>
            <line x1="20" y1="26" x2="44" y2="26" stroke="currentColor" stroke-width="1.5"/>
            <line x1="20" y1="34" x2="38" y2="34" stroke="currentColor" stroke-width="1.5"/>
            <line x1="20" y1="42" x2="42" y2="42" stroke="currentColor" stroke-width="1.5"/>
          </svg>
          <strong class="dz-title">Drop your screenplay here</strong>
          <span class="dz-sub">PDF · Final Draft · Fountain · or send a logline. We read everything.</span>
          <span class="dz-cta">→ Open the contact form</span>
        </div>
        <div class="dz-stamp" aria-hidden="true">
          <span>RECEIVED</span>
          <span class="dz-stamp-date">SUNSET HILLS · MP</span>
        </div>
      </a>
    </section>
  `;
}


function videoFrame(src, label, className = "media-placeholder", mode = "") {
  return `
    <div class="${className} ${mode}">
      <video src="${src}" controls playsinline preload="metadata"></video>
      <span class="placeholder-label">${label}</span>
    </div>
  `;
}

function paragraphs(items = []) {
  return items.map((item) => `<p>${item}</p>`).join("");
}

function longformParagraphs(items = []) {
  return items.map((item, index) => `<p data-step="${String(index + 1).padStart(2, "0")}">${item}</p>`).join("");
}

function projectFacts(page) {
  if (page.title.includes("TOM")) {
    return `
      <div class="project-facts tom-facts">
        <div class="fact-item">
          <span class="fact-label">Budget</span>
          <strong class="fact-value">$45M</strong>
        </div>
        <div class="fact-item">
          <span class="fact-label">Location</span>
          <strong class="fact-value">Queensland, Australia</strong>
        </div>
        <div class="fact-item">
          <span class="fact-label">Production</span>
          <strong class="fact-value">Exclusive World Rights</strong>
        </div>
      </div>
    `;
  }

  if (page.title.includes("Kings")) {
    return `
      <div class="project-facts">
        <div><span>Location photos</span><strong>London - England / Warsaw - Poland / New York - USA</strong></div>
        <div><span>Genre</span><strong>Comedy-drama</strong></div>
        <div><span>Mission</span><strong>Support needy children suffering from cancer and heart disease.</strong></div>
      </div>
    `;
  }

  return "";
}

function renderNav() {
  const current = normalizePath(window.location.pathname);
  nav.innerHTML = navItems
    .map((item) => {
      const active = item.path === current ? " active" : "";
      return `<a class="${active}" href="${item.path}" data-link>${item.label}</a>`;
    })
    .join("");
}

function renderPageHero(page, bgClass = "bg-default") {
  return `
    <section class="page-hero ${bgClass}">
      <div class="page-hero-content">
        <div class="eyebrow">${page.eyebrow || page.role || page.title}</div>
        <h1 class="page-title">${page.title}</h1>
        <div class="page-hero-meta" aria-hidden="true">
          <span>Sunset hills</span>
          <span>Motion Pictures</span>
          <span>Warsaw / London</span>
        </div>
      </div>
    </section>
  `;
}

function renderHome() {
  const stripImages = [
    "/public/assets/optimized/kings-wide.webp",
    "/public/assets/optimized/tom-cinematic.webp",
    "/public/assets/optimized/kings-catalog.webp",
    "/public/assets/optimized/germano-mission.webp",
    "/public/assets/optimized/germano-smokin.webp",
    "/public/assets/optimized/poster-tkol.webp",
    "/public/assets/optimized/poster-doubles.webp",
    "/public/assets/optimized/poster-benefit.webp"
  ];

  return `
    <section class="hero-cinematic" data-reveal>
      <video src="/public/assets/home-video.mp4" autoplay muted loop playsinline></video>
      <div class="hero-vignette" aria-hidden="true"></div>
      <div class="hero-grid-overlay" aria-hidden="true"></div>

      <div class="hero-frame-corners" aria-hidden="true">
        <span class="corner tl"></span><span class="corner tr"></span>
        <span class="corner bl"></span><span class="corner br"></span>
      </div>

      <div class="hero-meta-top" aria-hidden="true">
        <span class="rec-dot"></span>
        <span class="rec-label">REC · 24.000fps</span>
        <span class="hero-meta-sep">/</span>
        <span>SCN 01</span>
        <span class="hero-meta-sep">/</span>
        <span>TAKE 04</span>
      </div>
      <div class="hero-meta-right" aria-hidden="true">
        <span>WARSAW</span><span>·</span><span>LONDON</span><span>·</span><span>LOS ANGELES</span>
      </div>

      <div class="hero-content">
        <span class="eyebrow hero-eyebrow"><span class="eyebrow-line"></span>Sunset Hills<span class="eyebrow-line"></span></span>
        <h1 class="hero-title">
          <span class="title-line"><span class="word" style="--d:0ms">Motion</span></span>
          <span class="title-line"><span class="word" style="--d:160ms">Pictures.</span></span>
        </h1>
        <p class="hero-tag">Architecting stories at the intersection of cinematic tradition and next-generation visual intelligence — produced across Poland, Great Britain &amp; the United States.</p>
        <div class="hero-actions">
          ${link("/the-kings-of-life/", "View Slate")}
          ${link("/about-us/", "The Studio", "text-link secondary")}
        </div>
      </div>

      <div class="hero-scroll-indicator"><span>Scroll</span></div>
      <div class="hero-bottom-bar" aria-hidden="true">
        <span>EST. 1991</span>
        <span class="dot"></span>
        <span>FILM · TV · DOCUMENTARY</span>
        <span class="dot"></span>
        <span>SUNSET HILLS MOTION PICTURES</span>
      </div>
    </section>

    ${cinemaTicker()}
    ${lightLeak()}
    ${manifestoSection()}
    ${lexiconSection()}

    <section class="section narrative-section editorial-layout" data-reveal>
      <div class="technical-mark"></div>
      <div class="split narrative-layout">
        <div class="artifact-narrative film-strip-marquee">
          <div class="film-strip-vertical">
            ${stripImages.map((src) => `<div class="strip-frame"><img src="${src}" alt="" loading="lazy" /></div>`).join("")}
            ${stripImages.map((src) => `<div class="strip-frame"><img src="${src}" alt="" loading="lazy" /></div>`).join("")}
          </div>
          <div class="strip-perforation left" aria-hidden="true"></div>
          <div class="strip-perforation right" aria-hidden="true"></div>
        </div>
        <div class="copy-stack">
          <span class="eyebrow">01. Brand Philosophy</span>
          <h2 class="title-cinematic title-stroke">The Domain<br/>of Fine Art</h2>
          <p class="lead">For more than three decades we have produced, distributed and supervised motion pictures across continents — pairing Hollywood craft with the rigour of European cinema and the unmatched versatility of Polish locations and crews.</p>
          <div class="philosophy-tags">
            <span>30+ Years Legacy</span>
            <span>Hollywood &amp; Poland</span>
            <span>Global Distribution</span>
            <span>Original IP</span>
          </div>
          ${link("/about-us/", "Get to know us better")}
        </div>
      </div>
    </section>

    <section class="section stats-section" data-reveal>
      <div class="section-header">
        <span class="section-number">02.</span>
        <h2 class="title-cinematic">By the Numbers</h2>
      </div>
      <div class="stats-grid">
        <div class="stat-card" data-reveal>
          <span class="stat-num" data-count="35">00</span><span class="stat-suffix">+</span>
          <span class="stat-label">Years across Hollywood &amp; Poland</span>
        </div>
        <div class="stat-card" data-reveal>
          <span class="stat-num" data-count="9">00</span>
          <span class="stat-label">Feature films in The Adventures of Tom</span>
        </div>
        <div class="stat-card" data-reveal>
          <span class="stat-num" data-count="2">0</span>
          <span class="stat-label">Offices · Warsaw &amp; London</span>
        </div>
        <div class="stat-card stat-budget" data-reveal>
          <span class="stat-prefix">$</span><span class="stat-num" data-count="45">00</span><span class="stat-suffix">M</span>
          <span class="stat-label">Production budget · Tom · Australia</span>
        </div>
      </div>
    </section>

    <section class="section capability-showcase editorial-layout" data-reveal>
      <div class="technical-mark"></div>
      <div class="section-header">
        <span class="section-number">03.</span>
        <h2 class="title-blueprint">Core Capabilities</h2>
      </div>
      <div class="capabilities-mosaic">
        <article class="cap-tile" data-reveal>
          <div class="cap-visual"><div class="cap-art cap-art-strip" aria-hidden="true"></div></div>
          <div class="cap-content">
            <span class="cap-num">01</span>
            <h3>Production Design</h3>
            <p>Scenography, set construction and location dressing — recreating any era from medieval kingdoms to brutalist futures.</p>
          </div>
        </article>
        <article class="cap-tile" data-reveal>
          <div class="cap-visual"><div class="cap-art cap-art-lens" aria-hidden="true"></div></div>
          <div class="cap-content">
            <span class="cap-num">02</span>
            <h3>Technical Infrastructure</h3>
            <p>Professional lighting, 64m cranes, stunt teams &amp; renowned Polish crews — every department, ready to deploy.</p>
          </div>
        </article>
        <article class="cap-tile" data-reveal>
          <div class="cap-visual"><div class="cap-art cap-art-map" aria-hidden="true"></div></div>
          <div class="cap-content">
            <span class="cap-num">03</span>
            <h3>Logistical Mastery</h3>
            <p>Coordinating cross-border productions between Poland, the United Kingdom, the USA and Australia.</p>
          </div>
        </article>
      </div>
    </section>

    <section class="section pull-quote-section" data-reveal>
      <div class="quote-frame">
        <div class="quote-mark" aria-hidden="true">&ldquo;</div>
        <blockquote class="quote-body">
          Among the literally thousands of screenplays I&rsquo;ve read, the scenario written by Jacek Wielgopolan, &ldquo;The Kings of Life&rdquo;, is the only one that has sincerely amused me. The ending surprised me so much that in just a moment I was moved to tears.
        </blockquote>
        <div class="quote-attrib">
          <img src="/public/assets/optimized/portrait-germano.webp" alt="Germano Saracco" loading="lazy" />
          <div>
            <strong>Germano Saracco</strong>
            <span>Cinematographer · Smokin&rsquo; Aces, Hopeful Notes</span>
          </div>
        </div>
      </div>
    </section>

    ${lightLeak()}
    ${processTimeline()}
    ${dayOnSet()}
    ${anatomyOfShot()}
    ${locationsAtlas()}
    ${aspectRatioLab()}
    ${laurelsSection()}
    ${telegramsSection()}

    <section class="section slate-interactive editorial-layout" data-reveal>
      <div class="technical-mark"></div>
      <div class="section-header">
        <span class="section-number">04.</span>
        <h2 class="title-neural">Current Slate</h2>
      </div>
      <div class="slate-grid-refined">
        <a href="/the-adventures-of-tom/" class="slate-card" data-link data-reveal>
          <div class="slate-card-bg"><img src="/public/assets/optimized/tom-main.webp" alt="" /></div>
          <div class="slate-card-overlay"></div>
          <div class="slate-card-content">
            <span class="eyebrow">01 / Feature Film</span>
            <h3>The Adventures of Tom</h3>
            <p>A multi-volume cinematic adaptation of Alfred Szklarski&rsquo;s legendary adventures.</p>
            <span class="slate-card-cta">Project details <i>&rarr;</i></span>
          </div>
        </a>
        <a href="/the-kings-of-life/" class="slate-card" data-link data-reveal>
          <div class="slate-card-bg"><img src="/public/assets/optimized/kings-catalog.webp" alt="" /></div>
          <div class="slate-card-overlay"></div>
          <div class="slate-card-content">
            <span class="eyebrow">02 / Feature Film</span>
            <h3>The Kings of Life</h3>
            <p>A modern story about friendship, love and the strength to start again.</p>
            <span class="slate-card-cta">Project details <i>&rarr;</i></span>
          </div>
        </a>
        <a href="/where-the-butterflies-fly/" class="slate-card" data-link data-reveal>
          <div class="slate-card-bg"><video src="/public/assets/butterflies-drive-download.mp4" muted loop playsinline autoplay></video></div>
          <div class="slate-card-overlay"></div>
          <div class="slate-card-content">
            <span class="eyebrow">03 / Film</span>
            <h3>Where the Butterflies Fly</h3>
            <p>An exploration of delicate motion and visual poetry.</p>
            <span class="slate-card-cta">Project details <i>&rarr;</i></span>
          </div>
        </a>
      </div>
    </section>

    ${statusBoard()}
    ${callSheet()}
    ${paletteLookbook()}
    ${budgetAnatomy()}
    ${trailerReel()}
    ${dropZone()}
    ${lightLeak()}

    <section class="section closing-action" data-reveal>
      <div class="split closing-layout">
        <div class="closing-copy">
          <span class="eyebrow">05. Collaboration</span>
          <h2 class="title-cinematic">Let&rsquo;s start<br/>the next project.</h2>
          <p>We are always looking for visionary partners and compelling stories. Our teams in Warsaw and London are ready to bring your vision to life.</p>
          <div class="hero-actions">
            ${link("/contact/", "Get in Touch")}
            ${link("/production-in-poland/", "Production in Poland", "text-link secondary")}
          </div>
        </div>
        <div class="globe-map" aria-hidden="true">
          <div class="globe-rings"><span></span><span></span><span></span></div>
          <div class="globe-marker" style="--x:30%;--y:34%"><span class="pulse"></span><b>Warsaw</b></div>
          <div class="globe-marker" style="--x:24%;--y:38%"><span class="pulse"></span><b>London</b></div>
          <div class="globe-marker" style="--x:12%;--y:46%"><span class="pulse"></span><b>Los Angeles</b></div>
          <div class="globe-marker" style="--x:80%;--y:72%"><span class="pulse"></span><b>Sydney</b></div>
        </div>
      </div>
    </section>
  `;
}

function renderAbout(page) {
  return `
    ${renderPageHero(page)}
    <section class="section split feature-split">
      ${storyboardArtifact()}
      <div class="copy-stack">${paragraphs(page.paragraphs)}</div>
    </section>
    <section class="section">
      <div class="section-header">
        <span class="section-number">02.</span>
        <h2>Meet<br />our team</h2>
      </div>
      <div class="people-grid">
        ${personCard("Dawn Jacobs", "CCO of Sunset Hills Motion Pictures, Inc.", people.dawn.paragraphs.slice(0, 2).join(" "), "/dawn-jacobs/", "Read more", "/public/assets/optimized/about-dawn.webp")}
        ${personCard("JACK WIELGOPOLAN", "Producer / Script writer / Director", "Jack Wielgopolan as a producer, distributor and script writer has been associated with movie brands in the USA and Poland since 1991. Nowadays, apart from “Kings of Life” he is preparing a series of 9 fictional films based upon the novel of Alfred Szklarski “Adventures of Tom “. The first part is called “Adventures of Tom: in the Kangaroo Kingdom “. The budget for this production amounts to $45,000,000. Awards: Association of Polish Cinema, Silver Ticket, 2006 The doubles – Second place in the category of best action comedy in 2006", "/jack-wielgopolan/", "Read more", "/public/assets/optimized/portrait-jack.webp")}
      </div>
    </section>
  `;
}

function personCard(name, role, bio, href, label = "Read more", image = "") {
  return `
    <article class="person-card">
      ${image ? mediaFrame(image, name, "portrait-placeholder") : ""}
      <div>
        <span class="card-kicker">${role}</span>
        <h3>${name}</h3>
      </div>
      <p>${bio}</p>
      ${label ? link(href, label) : ""}
    </article>
  `;
}

function renderProject(page) {
  const bg = page.title.includes("TOM") ? "bg-tom" : "bg-kings";
  return `
    ${renderPageHero(page, bg)}
    ${cinemaTicker()}
    <section class="section split project-intro">
      ${mediaFrame(page.title.includes("TOM") ? "/public/assets/optimized/tom-main.webp" : "/public/assets/optimized/kings-catalog.webp", page.title, "poster-placeholder hero-poster")}
      <div class="copy-stack dossier-copy">
        ${projectFacts(page)}
        ${paragraphs(page.paragraphs)}
      </div>
    </section>
    ${
      page.title.includes("TOM")
        ? `<section class="section book-section"><div class="section-header"><span class="section-number">02.</span><h2>Rights reserved by Sunset Hills Motion Pictures</h2></div><a href="https://drive.google.com/file/d/1cW3f-zy3aPVO_ybidLUMRk6VBu6EtoSy/view" target="_blank" rel="noopener noreferrer">${mediaFrame("/public/assets/optimized/tom-cinematic.webp", "THE ADVENTURES OF TOM", "media-placeholder image-band cinematic-band editorial-media")}</a><div class="book-grid">${tomBooks.map(([label, src], index) => `<div class="book-item"><span>${String(index + 1).padStart(2, "0")}</span>${mediaFrame(src, label, "poster-placeholder", "contain book-cover")}</div>`).join("")}</div></section>`
        : ""
    }
  `;
}

function renderProjectPlaceholder(page) {
  return `
    ${renderPageHero(page, "bg-butterflies")}
    ${cinemaTicker()}
    <section class="section">
      ${videoFrame("/public/assets/butterflies-drive-download.mp4", "Where the butterflies fly", "media-placeholder image-band cinema-video", "contain")}
    </section>
  `;
}

function cinematicStack(team) {
  return `
    <div class="cinematic-stack">
      ${team.map((member, i) => `
        <article class="stack-card" style="--i: ${i}">
          <div class="stack-image"><img src="${member.image}" alt="${member.name}" /></div>
          <div class="stack-meta">
            <span>${member.role}</span>
            <h3>${member.name}</h3>
            <p>${member.bio}</p>
          </div>
        </article>
      `).join("")}
    </div>
  `;
}

function renderKings(page) {
  const team = [
    { name: "JACEK WIELGOPOLAN", role: "Producer / Director", bio: "Creative force since 1991.", image: "/public/assets/optimized/portrait-jack.webp" },
    { name: "FILIP GUZLA", role: "Producer", bio: "Business partner and producer.", image: "/public/assets/optimized/portrait-filip.webp" },
    { name: "GERMANO SARACCO", role: "Cinematographer", bio: "Award-winning veteran.", image: "/public/assets/optimized/portrait-germano.webp" },
    { name: "MACIEJ ZIELIŃSKI", role: "Composer", bio: "Contemporary film music maestro.", image: "/public/assets/optimized/portrait-maciej.webp" }
  ];

  return `
    <section class="kings-hero">
      <img src="${page.heroImage}" alt="" />
      <div class="kings-hero-content">
        <span class="hero-eyebrow">Production Dossier</span>
        <h1>${page.title}</h1>
        <div class="hero-status"><span class="status-dot"></span><span>Active Development</span></div>
      </div>
    </section>

    <section class="section split cinematic-narrative">
      <div class="narrative-blocks">
        <div class="block">
          <span class="block-num">01.</span>
          <h3>THE PREMISE</h3>
          <p class="highlight">${page.paragraphs[0]}</p>
        </div>
        <div class="block">
          <span class="block-num">02.</span>
          <h3>THE CRAFT</h3>
          <p>${page.paragraphs[1]}</p>
        </div>
        <div class="block">
          <span class="block-num">03.</span>
          <h3>GLOBAL DISTRIBUTION</h3>
          <p>${page.paragraphs[2]}</p>
        </div>
        <div class="block pull-quote">
          <p>"${page.paragraphs[3]}"</p>
        </div>
        <div class="block">
          <span class="block-num">04.</span>
          <h3>THE MISSION</h3>
          <p>${page.paragraphs[4]}</p>
        </div>
      </div>
      <div class="visual-artifact neural-viz">
        <svg class="viz-svg" viewBox="0 0 400 400">
          <circle class="viz-core" cx="200" cy="200" r="40" />
          <g class="viz-nodes">
            ${[...Array(8)].map((_, i) => `<circle cx="${200 + Math.cos(i * Math.PI/4) * 120}" cy="${200 + Math.sin(i * Math.PI/4) * 120}" r="6" />`).join("")}
          </g>
          <g class="viz-lines">
            ${[...Array(8)].map((_, i) => `<line x1="200" y1="200" x2="${200 + Math.cos(i * Math.PI/4) * 120}" y2="${200 + Math.sin(i * Math.PI/4) * 120}" />`).join("")}
          </g>
        </svg>
        <div class="artifact-label">Neural Cinematic Intelligence // Real-Time</div>
      </div>
    </section>

    <section class="section">
      <div class="section-header"><span class="section-number">02.</span><h2>Production Team</h2></div>
      <div class="people-grid">${team.map(member => personCard(member.name, member.role, member.bio, "", "", member.image)).join("")}</div>
    </section>
  `;
}

function renderCoverage(page) {
  return `
    ${renderPageHero(page, "bg-coverage")}
    ${coverageIntro()}
    ${coverageTiers()}
    ${coverageProcess()}
    ${coverageSample()}
    ${coverageReaders()}
    ${coverageSubmitCTA()}
  `;
}

function coverageIntro() {
  const stats = [
    { l: "SCRIPTS / YEAR", v: "1 200+" },
    { l: "AVG TURNAROUND", v: "10 days" },
    { l: "LANGUAGES", v: "EN · PL" },
    { l: "READERS",       v: "07 staff" }
  ];
  return `
    <section class="section sc-intro" data-reveal>
      <div class="sc-intro-grid">
        <div class="sc-intro-copy">
          <span class="eyebrow">02. The Reader&rsquo;s Verdict</span>
          <h2 class="title-cinematic">Coverage<br/>is the<br/>first cut.</h2>
          <p>Before a screenplay reaches a producer&rsquo;s desk, it passes through a reader. Coverage is the document that summarises the story, evaluates the craft, and assigns one of three verdicts &mdash; <strong>Pass</strong>, <strong>Consider</strong>, or <strong>Recommend</strong>. We do this work for our own development slate and, by referral, for partners around the world.</p>
        </div>
        <aside class="sc-intro-stats">
          ${stats.map((s) => `
            <article class="sc-stat" data-reveal>
              <span class="sc-stat-label">${s.l}</span>
              <strong class="sc-stat-value">${s.v}</strong>
            </article>
          `).join("")}
        </aside>
      </div>
    </section>
  `;
}

function coverageTiers() {
  const tiers = [
    { code: "PASS",      n: "01", note: "The script is not a fit. Sometimes a craft issue, often a market one. Reader notes go to the writer regardless.", count: "78%" },
    { code: "CONSIDER",  n: "02", note: "Strong elements that warrant a second read. Forwarded to a senior producer with the reader&rsquo;s annotations.", count: "18%" },
    { code: "RECOMMEND", n: "03", note: "Rare. The reader is willing to stake their reputation on it. Goes directly to head of development within 24 hours.", count: "4%" }
  ];
  return `
    <section class="section sc-tiers" data-reveal>
      <div class="section-header">
        <span class="section-number">03.</span>
        <h2 class="title-cinematic">Three Verdicts</h2>
      </div>
      <div class="sc-tier-grid">
        ${tiers.map((t) => `
          <article class="sc-tier sc-tier-${t.code.toLowerCase()}" data-reveal>
            <header>
              <span class="sc-tier-num">${t.n}</span>
              <span class="sc-tier-pct">${t.count}<i>of submissions</i></span>
            </header>
            <strong class="sc-tier-code">${t.code}</strong>
            <p>${t.note}</p>
            <div class="sc-tier-stamp" aria-hidden="true">${t.code}</div>
          </article>
        `).join("")}
      </div>
    </section>
  `;
}

function coverageProcess() {
  const steps = [
    { n: "01", t: "Intake", note: "Slug-line scan. Format check. Deduplication.", body: "Every screenplay is assigned a coverage ID, logged with title / writer / pages, and assigned to a reader by genre." },
    { n: "02", t: "Read", note: "Two passes. First fast. Second annotated.", body: "Readers track structure beats on a one-pager — Inciting Incident, Midpoint, Climax. Marginalia is preserved verbatim." },
    { n: "03", t: "Synopsis", note: "1 page. No spoilers withheld.", body: "A precise prose summary, plus a logline tightened beyond the writer&rsquo;s. The story is told, not teased." },
    { n: "04", t: "Verdict", note: "Pass · Consider · Recommend.", body: "Concept, Story, Characters and Dialogue are graded. The reader signs the verdict. The writer receives the notes within 14 days." }
  ];
  return `
    <section class="section sc-process" data-reveal>
      <div class="section-header">
        <span class="section-number">04.</span>
        <h2 class="title-cinematic">From Page to Verdict</h2>
      </div>
      <div class="sc-process-rail">
        ${steps.map((s) => `
          <article class="sc-process-card" data-reveal>
            <span class="sc-process-num">${s.n}</span>
            <span class="sc-process-rule" aria-hidden="true"></span>
            <strong>${s.t}</strong>
            <span class="sc-process-note">${s.note}</span>
            <p>${s.body}</p>
          </article>
        `).join("")}
      </div>
    </section>
  `;
}

function coverageSample() {
  const meta = [
    ["TITLE", "THE KINGS OF LIFE"],
    ["WRITER", "Jacek Wielgopolan"],
    ["FORM", "Screenplay"],
    ["PAGES", "136"],
    ["GENRE", "Drama"],
    ["SUB BY", "Dawn Jacobs"],
    ["SUB TO", "Adam Lebovitz"],
    ["COVERAGE DATE", "July 17, 2023"]
  ];
  const ratings = [
    { label: "CONCEPT",    score: "EXCELLENT", value: 95 },
    { label: "STORY LINE", score: "GOOD",      value: 78 },
    { label: "CHARACTERS", score: "FAIR",      value: 62 },
    { label: "DIALOGUE",   score: "FAIR",      value: 60 },
    { label: "STRUCTURE",  score: "FAIR",      value: 65 },
    { label: "MARKETABILITY", score: "GOOD",   value: 80 }
  ];
  return `
    <section class="section sc-sample" data-reveal>
      <div class="section-header">
        <span class="section-number">05.</span>
        <h2 class="title-cinematic">A Sample Coverage</h2>
      </div>
      <article class="sc-coverage-doc">
        <div class="sc-doc-watermark">CONFIDENTIAL</div>
        <header class="sc-doc-head">
          <div>
            <strong>SUNSET HILLS MOTION PICTURES</strong>
            <span>STUDIO COVERAGE REPORT &middot; FILE 0427-A</span>
          </div>
          <span class="sc-doc-stamp">CONSIDER</span>
        </header>
        <div class="sc-doc-meta">
          ${meta.map(([k, v]) => `<div class="sc-doc-row"><b>${k}</b><span>${v}</span></div>`).join("")}
        </div>
        <div class="sc-doc-block">
          <h4>Logline</h4>
          <p>A down-on-his-luck violinist is forced to start over in a different country and finds an unlikely family &mdash; in the form of an old friend and a little girl &mdash; around a landfill on the edge of Warsaw.</p>
        </div>
        <div class="sc-doc-block">
          <h4>Synopsis</h4>
          <p>Wiktor, once a celebrated first violin in a state symphony, arrives in a foreign city with a passport, a letter, and a single suitcase. The orchestra he had been promised has folded. He sleeps the first night under a bridge, the second on a friend&rsquo;s sofa, the third in a clearing behind a hauling yard.</p>
          <p>It is at the yard that he meets <em>Filip</em> &mdash; an old conservatoire classmate now running the daily sort &mdash; and <em>Ola</em>, a child who lives nearby and treats the landfill the way other children treat a public park. The three of them, by accident at first and then by gravity, become each other&rsquo;s family.</p>
          <p>The third act turns on a sealed letter Wiktor was carrying when he first crossed the border. The letter, when opened, returns to him a piece of his old life he had assumed was permanently lost.</p>
        </div>
        <div class="sc-doc-grid">
          <div class="sc-doc-col">
            <h4>Strengths</h4>
            <ul>
              <li>The setting &mdash; a working landfill &mdash; is fresh, photographable, and metaphorically rich.</li>
              <li>Wiktor&rsquo;s relationship with Ola is unforced and earned.</li>
              <li>The third-act letter pays off a long set-up cleanly.</li>
            </ul>
          </div>
          <div class="sc-doc-col">
            <h4>Weaknesses</h4>
            <ul>
              <li>Filip&rsquo;s arc plateaus around p. 70; he disappears for 14 pages and returns unchanged.</li>
              <li>Two of the dialogue scenes between Wiktor and the social worker repeat information.</li>
              <li>The opening flashback is easy to cut and would tighten Act One by 6 pages.</li>
            </ul>
          </div>
        </div>
        <div class="sc-doc-ratings">
          <h4>Evaluation</h4>
          <div class="sc-rating-grid">
            ${ratings.map((r) => `
              <article class="sc-rating">
                <div class="sc-rating-head">
                  <span class="sc-rating-label">${r.label}</span>
                  <span class="sc-rating-score">${r.score}</span>
                </div>
                <div class="sc-rating-bar">
                  <span class="sc-rating-fill" style="--v:${r.value}%"></span>
                  <span class="sc-rating-mark sc-mark-good"></span>
                  <span class="sc-rating-mark sc-mark-rec"></span>
                </div>
              </article>
            `).join("")}
          </div>
        </div>
        <footer class="sc-doc-foot">
          <div class="sc-rec-block">
            <span class="sc-rec-eyebrow">RECOMMENDATION</span>
            <strong class="sc-rec-verdict">CONSIDER</strong>
            <p>The setting and central trio make this a memorable script. The structure could tighten by ten pages, and Filip&rsquo;s arc deserves a stronger reversal in Act Two. With those revisions, this moves to <em>Recommend</em>.</p>
          </div>
          <div class="sc-rec-sign">
            <span class="sc-sign-label">READER</span>
            <strong>Dawn Jacobs</strong>
            <span class="sc-sign-meta">Sr. Reader · Sunset Hills MP</span>
          </div>
        </footer>
      </article>
    </section>
  `;
}

function coverageReaders() {
  const readers = [
    { i: "DJ", n: "Dawn Jacobs",      r: "Sr. Reader", g: "Drama · International", c: "428 scripts read · 9 yrs" },
    { i: "AL", n: "Adam Lebovitz",    r: "Reader",     g: "Genre · Thriller · Sci-fi", c: "316 scripts read · 6 yrs" },
    { i: "MK", n: "Marta Kowalczyk",  r: "Reader",     g: "Comedy · Adaptation",   c: "204 scripts read · 4 yrs" },
    { i: "JW", n: "Jacek W.",         r: "Final Read", g: "Greenlight committee",  c: "Final-pass on every Consider+" }
  ];
  return `
    <section class="section sc-readers" data-reveal>
      <div class="section-header">
        <span class="section-number">06.</span>
        <h2 class="title-cinematic">The Room</h2>
      </div>
      <p class="sc-readers-lead">Coverage is read by humans. These are ours.</p>
      <div class="sc-readers-grid">
        ${readers.map((r) => `
          <article class="sc-reader" data-reveal>
            <span class="sc-reader-mono">${r.i}</span>
            <strong>${r.n}</strong>
            <span class="sc-reader-role">${r.r}</span>
            <span class="sc-reader-genres">${r.g}</span>
            <span class="sc-reader-count">${r.c}</span>
          </article>
        `).join("")}
      </div>
    </section>
  `;
}

function coverageSubmitCTA() {
  return `
    <section class="section sc-submit" data-reveal>
      <a href="/contact/" class="sc-submit-card" data-link>
        <div class="sc-submit-left">
          <span class="eyebrow">07. Send your pages</span>
          <h2 class="title-cinematic">Submit a<br/>screenplay.</h2>
          <p>PDF or Final Draft. English or Polish. We read everything that arrives at <b>cool@world.pl</b> and reply within fourteen days.</p>
        </div>
        <div class="sc-submit-right">
          <div class="sc-submit-clip" aria-hidden="true">
            <span class="clip-pin"></span>
            <div class="clip-page">
              <span class="clip-line"></span><span class="clip-line"></span><span class="clip-line"></span>
              <span class="clip-line short"></span><span class="clip-line"></span><span class="clip-line short"></span>
              <span class="clip-line"></span><span class="clip-line short"></span>
            </div>
          </div>
          <span class="sc-submit-cta">Open the wire <i>&rarr;</i></span>
        </div>
      </a>
    </section>
  `;
}

function neuralMap() {
  return `
    <div class="neural-map-container">
      <svg class="neural-map" viewBox="0 0 800 600" fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="3" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
        </defs>
        <!-- Abstract Poland Node -->
        <circle cx="500" cy="250" r="12" fill="var(--red)" filter="url(#glow)">
          <animate attributeName="r" values="10;14;10" dur="3s" repeatCount="indefinite" />
        </circle>
        
        <!-- Connection Lines -->
        <path class="connection-line" d="M 500 250 Q 400 200 200 150" stroke="var(--red)" stroke-width="1.5" stroke-dasharray="1000" stroke-dashoffset="1000">
           <animate attributeName="stroke-dashoffset" from="1000" to="0" dur="4s" repeatCount="indefinite" />
        </path>
        <path class="connection-line" d="M 500 250 Q 450 350 220 450" stroke="var(--red)" stroke-width="1.5" stroke-dasharray="1000" stroke-dashoffset="1000">
           <animate attributeName="stroke-dashoffset" from="1000" to="2000" dur="5s" repeatCount="indefinite" />
        </path>
        <path class="connection-line" d="M 500 250 Q 600 200 700 300" stroke="var(--red)" stroke-width="1.5" stroke-dasharray="1000" stroke-dashoffset="1000">
           <animate attributeName="stroke-dashoffset" from="1000" to="0" dur="6s" repeatCount="indefinite" />
        </path>
        
        <!-- City Nodes -->
        <circle class="city-node" cx="200" cy="150" r="4" fill="var(--ink)" />
        <circle class="city-node" cx="220" cy="450" r="4" fill="var(--ink)" />
        <circle class="city-node" cx="700" cy="300" r="4" fill="var(--ink)" />
      </svg>
      <div class="map-overlay"></div>
    </div>
  `;
}

function renderProduction(page) {
  return `
    ${renderPageHero(page, "production-hero")}
    ${productionDossier()}
    ${productionEras()}
    ${productionSeasons()}
    ${productionCapabilitiesGrid(page.paragraphs)}
    ${productionIncentive()}
    ${productionManifest()}
    ${productionWhatWeCover()}
  `;
}

function productionDossier() {
  const stats = [
    { l: "DOSSIER", v: "PL-PROD-2026" },
    { l: "POPULATION", v: "37.6M" },
    { l: "SURFACE",    v: "312 696 km²" },
    { l: "BORDERS",    v: "07 nations" },
    { l: "LANGUAGES",  v: "PL · EN · DE · UA · RU" },
    { l: "TIMEZONE",   v: "UTC+01:00" }
  ];
  return `
    <section class="section pl-dossier" data-reveal>
      <header class="pl-dossier-head">
        <span class="dossier-stamp">CONFIDENTIAL · LOCATION DOSSIER</span>
        <span class="dossier-issued">ISSUED 09.MAR.2026 · SUNSET HILLS MP · WARSAW BUREAU</span>
      </header>
      <div class="pl-dossier-grid">
        ${stats.map((s) => `
          <article class="dossier-cell" data-reveal>
            <span class="dossier-label">${s.l}</span>
            <strong class="dossier-value">${s.v}</strong>
          </article>
        `).join("")}
      </div>
    </section>
  `;
}

function productionEras() {
  const eras = [
    { y: "11–13c", n: "Romanesque",   d: "Stone keeps, round arches, Cracow's first cathedrals." },
    { y: "13–16c", n: "Gothic",        d: "Brick fortresses, Teutonic castles, narrow burgher houses." },
    { y: "16–17c", n: "Renaissance",   d: "Wawel courtyards, Italian arcades, princely facades." },
    { y: "17–18c", n: "Baroque",       d: "Curved cornices, Warsaw palaces, Counter-Reformation drama." },
    { y: "19c",    n: "Belle Époque",  d: "Łódź textile palaces, Vienna-style boulevards, iron balconies." },
    { y: "20c",    n: "Modernist",     d: "Bauhaus blocks, Gdynia waterfront, pre-war optimism." },
    { y: "60–80c", n: "Brutalist",     d: "Concrete plazas, Spodek arena, communist-era monumentalism." },
    { y: "21c",    n: "Glass &amp; Steel", d: "Warsaw skyline, Varso Tower, tech-park interiors." }
  ];
  return `
    <section class="section pl-eras" data-reveal>
      <div class="section-header">
        <span class="section-number">02.</span>
        <h2 class="title-cinematic">A Millennium of Backlots</h2>
      </div>
      <p class="pl-eras-lead">Poland is one of the few countries where you can scout the 12th and 21st centuries inside a single afternoon.</p>
      <div class="pl-eras-rail">
        ${eras.map((e, i) => `
          <article class="era-card" data-reveal style="--i:${i}">
            <span class="era-year">${e.y}</span>
            <strong class="era-name">${e.n}</strong>
            <p class="era-desc">${e.d}</p>
          </article>
        `).join("")}
        <div class="era-rule" aria-hidden="true"></div>
      </div>
    </section>
  `;
}

function productionSeasons() {
  const seasons = [
    { n: "Spring",  m: "MAR · APR · MAY", c1: "#5b8c3a", c2: "#a8c47a", note: "Pale greens, low cloud, soft contrast. Day-for-night windows are reliable.", stand: "Western Europe · Pre-war Russia" },
    { n: "Summer",  m: "JUN · JUL · AUG", c1: "#c47a1f", c2: "#f0b455", note: "Long blue evenings. 17-hour shoot days possible north of Gdańsk.",         stand: "Mediterranean inland · Ukraine" },
    { n: "Autumn",  m: "SEP · OCT · NOV", c1: "#8a3a1a", c2: "#d27a3a", note: "Rust, amber and brick. The country becomes a Wes Anderson swatch wall.",  stand: "New England · Carpathia · Tuscany" },
    { n: "Winter",  m: "DEC · JAN · FEB", c1: "#6c7a86", c2: "#cdd5dc", note: "Steel skies, fresh snow, breath fog. Real cold, no foam needed.",          stand: "Siberia · Alaska · Lapland" }
  ];
  return `
    <section class="section pl-seasons" data-reveal>
      <div class="section-header">
        <span class="section-number">03.</span>
        <h2 class="title-cinematic">Four Working Seasons</h2>
      </div>
      <div class="pl-season-grid">
        ${seasons.map((s, i) => `
          <article class="season-card" data-reveal style="--i:${i};--c1:${s.c1};--c2:${s.c2}">
            <div class="season-swatch"></div>
            <div class="season-meta">
              <span class="season-months">${s.m}</span>
              <strong class="season-name">${s.n}</strong>
              <p class="season-note">${s.note}</p>
              <span class="season-stand-label">Stands in for</span>
              <span class="season-stand">${s.stand}</span>
            </div>
          </article>
        `).join("")}
      </div>
    </section>
  `;
}

function productionCapabilitiesGrid(paragraphs) {
  return `
    <section class="section pl-capabilities" data-reveal>
      <div class="section-header">
        <span class="section-number">04.</span>
        <h2 class="title-cinematic">Production Capability</h2>
      </div>
      <div class="pl-cap-grid">
        ${paragraphs.map((p, i) => `
          <article class="pl-cap-card" data-reveal style="--i:${i}">
            <span class="pl-cap-num">0${i + 1}</span>
            <span class="pl-cap-rule" aria-hidden="true"></span>
            <p>${p}</p>
          </article>
        `).join("")}
      </div>
    </section>
  `;
}

function productionIncentive() {
  return `
    <section class="section pl-incentive" data-reveal>
      <div class="incentive-card">
        <div class="incentive-left">
          <span class="incentive-eyebrow">POLISH FILM INSTITUTE</span>
          <strong class="incentive-num"><i>30</i><b>%</b></strong>
          <span class="incentive-sub">cash rebate on qualified spend</span>
        </div>
        <div class="incentive-right">
          <p>Productions shot in Poland qualify for a <strong>30% cash rebate</strong> on eligible local spend through the PISF programme &mdash; one of Europe&rsquo;s most aggressive incentives. Sunset Hills handles the application, audit and reconciliation in-house.</p>
          <ul class="incentive-list">
            <li><span>—</span> No annual cap per project</li>
            <li><span>—</span> Pay-out within 60 days of audited reconciliation</li>
            <li><span>—</span> Stackable with EU regional funds &amp; co-production treaties</li>
          </ul>
        </div>
      </div>
    </section>
  `;
}

function productionManifest() {
  const groups = [
    { title: "Soundstages", rows: [
      ["ALV", "Alvernia Studios · Cracow · 4 stages · 2 800 m²"],
      ["WFD", "WFDiF · Warsaw · 6 stages · 3 100 m²"],
      ["ATM", "ATM Studio · Warsaw · LED Volume + 5 stages"],
      ["FBL", "Łódź Backlot · 12 ha standing sets"]
    ] },
    { title: "Camera & Optics", rows: [
      ["A35", "ARRI Alexa 35 / Mini LF / Amira"],
      ["RED", "RED Komodo-X / V-Raptor 8K"],
      ["LNS", "Cooke S7/i · Panavision Sphero · Atlas Orion"],
      ["DRN", "DJI Inspire 3 · Freefly Alta X heavy-lift"]
    ] },
    { title: "Lighting & Grip", rows: [
      ["HMI", "Two 18K HMI · ARRI M40 / M90 packages"],
      ["LED", "ARRI SkyPanel S360 · Creamsource Vortex8"],
      ["CRN", "Technocrane 30, 50 · Steadicam · 64 m crane"],
      ["VEH", "Russian Arm · Edge Arm · Process Trailer"]
    ] },
    { title: "Stunts & Effects", rows: [
      ["FLT", "All-discipline fight choreography teams"],
      ["VEH", "Stunt drivers, classic & modern fleet, motorcycles"],
      ["ANI", "Trained horses, dogs, raptors (with handlers)"],
      ["FX",  "Practical fire, weather, atmospherics on call"]
    ] }
  ];
  return `
    <section class="section pl-manifest" data-reveal>
      <div class="section-header">
        <span class="section-number">05.</span>
        <h2 class="title-cinematic">Infrastructure Manifest</h2>
      </div>
      <div class="manifest-grid">
        ${groups.map((g) => `
          <article class="manifest-block" data-reveal>
            <h3>${g.title}</h3>
            <ul>
              ${g.rows.map(([k, v]) => `<li><b>${k}</b><span>${v}</span></li>`).join("")}
            </ul>
          </article>
        `).join("")}
      </div>
    </section>
  `;
}

function productionWhatWeCover() {
  const services = [
    "Line production",
    "Location scouting &amp; permits",
    "Crew &amp; department heads",
    "Casting &amp; agency liaison",
    "Logistics &amp; transport",
    "Customs &amp; carnets",
    "Polish Film Institute filings",
    "Co-production treaty paperwork",
    "Insurance &amp; bonding",
    "Post &amp; delivery handoff"
  ];
  return `
    <section class="section pl-cover" data-reveal>
      <div class="section-header">
        <span class="section-number">06.</span>
        <h2 class="title-cinematic">What We Cover, End-to-End</h2>
      </div>
      <ul class="pl-cover-list">
        ${services.map((s, i) => `<li data-reveal style="--i:${i}"><b>${String(i + 1).padStart(2, "0")}</b><span>${s}</span></li>`).join("")}
      </ul>
      <div class="pl-cover-foot">
        <span class="pl-cover-stamp">SUNSET HILLS MP · WARSAW BUREAU</span>
        ${link("/contact/", "Open a wire")}
      </div>
    </section>
  `;
}

function officeCards() {
  return `
    <div class="office-grid">
      <article class="info-card">
        <span class="card-kicker">Poland · HQ</span>
        <p>Sunset Hills Motion Pictures S.A.<br />ul. Dominikańska 21B<br />02-738 Warsaw</p>
      </article>
      <article class="info-card">
        <span class="card-kicker">United Kingdom</span>
        <p>SUNSET HILLS INVESTMENTS LTD<br />27 Old Gloucester Street<br />London, WC1N 3AX</p>
      </article>
      <article class="info-card">
        <span class="card-kicker">Direct Wire</span>
        <p>cool@world.pl<br />+48 606 400 500</p>
      </article>
    </div>
  `;
}

function contactSection(number = "01.", includeVisual = false) {
  return `
    <section class="section contact-console-section">
      <div class="contact-console">
        <aside class="contact-side">
          <span class="eyebrow">${number} Open a wire</span>
          <h2 class="contact-title">Send a<br/>Transmission</h2>
          <p class="contact-lead">Investors, distributors, festival programmers, screenwriters &mdash; we read every wire that comes in. Most replies go out within 48 hours, Warsaw time.</p>
          ${officeCards()}
          <div class="contact-coord" aria-hidden="true">
            <span><b>LAT</b> 52.2297&deg; N</span>
            <span><b>LON</b> 21.0122&deg; E</span>
            <span><b>TZ</b>  UTC+01:00</span>
          </div>
        </aside>
        ${contactForm()}
      </div>
    </section>
  `;
}

function contactForm() {
  return `
    <form class="contact-form transmission" data-transmission>
      <header class="tx-head">
        <span class="tx-stamp">SUNSET HILLS MP</span>
        <span class="tx-meta"><b>OUTGOING WIRE</b> &middot; <span data-tx-time>--:--:--</span> &middot; PRIORITY 01</span>
      </header>
      <div class="tx-body">
        <div class="tx-row tx-fixed">
          <span class="tx-label">TO</span>
          <span class="tx-static">SUNSET HILLS MOTION PICTURES &middot; WARSAW</span>
        </div>
        <div class="tx-row">
          <label class="tx-label" for="cf-name">FROM</label>
          <input class="tx-input" id="cf-name" name="name" type="text" placeholder="Your full name" autocomplete="name" required />
          <span class="tx-rule"></span>
        </div>
        <div class="tx-row">
          <label class="tx-label" for="cf-email">REPLY TO</label>
          <input class="tx-input" id="cf-email" name="email" type="email" placeholder="your@studio.com" autocomplete="email" required />
          <span class="tx-rule"></span>
        </div>
        <div class="tx-row">
          <label class="tx-label" for="cf-subject">RE</label>
          <select class="tx-input tx-select" id="cf-subject" name="subject">
            <option>Submitting a screenplay</option>
            <option>Co-production / financing</option>
            <option>Distribution &amp; sales</option>
            <option>Press &amp; festivals</option>
            <option>Crew / location services</option>
            <option>Something else</option>
          </select>
          <span class="tx-rule"></span>
        </div>
        <div class="tx-row tx-message">
          <label class="tx-label" for="cf-message">MESSAGE BODY</label>
          <textarea class="tx-input tx-textarea" id="cf-message" name="message" rows="7" placeholder="Begin with a logline. End with a wire. STOP." required></textarea>
          <span class="tx-counter" data-tx-counter>0 / 800</span>
        </div>
      </div>
      <footer class="tx-foot">
        <div class="tx-foot-meta">
          <span><b>STATUS</b> READY TO TRANSMIT</span>
          <span class="tx-dot"></span>
        </div>
        <button class="tx-submit" type="submit">
          <span class="tx-submit-label">Transmit</span>
          <span class="tx-submit-arrow" aria-hidden="true">&#10148;</span>
        </button>
      </footer>
      <div class="tx-perf top" aria-hidden="true"></div>
      <div class="tx-perf bottom" aria-hidden="true"></div>
    </form>
  `;
}

function renderContact(page) {
  return `${renderPageHero(page, "bg-contact")}${contactSection("01.", true)}`;
}

function closingSlate() {
  return `
    <section class="closing-slate">
      <div>
        <span class="eyebrow">05. Let's Talk</span>
        <h2>Contact</h2>
      </div>
      <div class="closing-slate-copy">
        <p>We have two offices in Poland and Great Britain.</p>
        ${link("/contact/", "Get in touch")}
      </div>
    </section>
  `;
}

function nextPageSlate(path) {
  const sequence = [
    "/",
    "/about-us/",
    "/the-adventures-of-tom/",
    "/the-kings-of-life/",
    "/script-coverage/",
    "/production-in-poland/",
    "/contact/"
  ];
  const currentIndex = sequence.indexOf(path);
  if (currentIndex === -1 || path === "/contact/") return "";
  const nextPath = sequence[(currentIndex + 1) % sequence.length];
  const next = routes[nextPath] || routes["/"];
  const image = next.heroImage || next.image || "/public/assets/optimized/kings-wide.webp";
  return `
    <section class="next-slate">
      <a href="${nextPath}" data-link>
        <img src="${image}" alt="" loading="lazy" />
        <span class="eyebrow">Next</span>
        <h2>${next.title}</h2>
      </a>
    </section>
  `;
}

function renderPerson(page) {
  return `
    ${renderPageHero(page)}
    ${cinemaTicker()}
    <section class="section detail-layout profile-layout">
      <aside>
        ${mediaFrame(page.image || "/public/assets/optimized/logo-s.webp", page.title, "portrait-placeholder profile-portrait")}
      </aside>
      <div class="copy-stack profile-copy">
        <span class="chip">${page.role}</span>
        <h2>${page.title}</h2>
        <div class="bio-paragraphs">
          ${paragraphs(page.paragraphs)}
        </div>
      </div>
    </section>
    ${
      page.films.length
        ? `<section class="section filmography-section">
            <div class="section-header">
              <span class="section-number">03.</span>
              <h2>Selected Filmography</h2>
            </div>
            <div class="poster-grid centered-poster-grid">
              ${page.films.map(([film, src]) => mediaFrame(src, film, "poster-placeholder")).join("")}
            </div>
          </section>`
        : ""
    }
  `;
}

const PROJECT_SLATE = {
  "/":                              { scn: "INT.", title: "Sunset Hills — Day" },
  "/about-us/":                     { scn: "INT.", title: "Studio HQ — Day" },
  "/the-adventures-of-tom/":        { scn: "EXT.", title: "Kangaroo Kingdom — Dusk" },
  "/the-kings-of-life/":            { scn: "EXT.", title: "Warsaw Street — Night" },
  "/where-the-butterflies-fly/":    { scn: "INT.", title: "Butterfly Garden — Day" },
  "/script-coverage/":              { scn: "INT.", title: "Writers' Room — Day" },
  "/production-in-poland/":         { scn: "EXT.", title: "Warsaw Backlot — Day" },
  "/contact/":                      { scn: "INT.", title: "Production Office — Night" },
  "/jack-wielgopolan/":             { scn: "INT.", title: "Producer's Suite — Day" },
  "/germano-saracco/":              { scn: "EXT.", title: "Camera Set — Magic Hour" },
  "/dawn-jacobs/":                  { scn: "INT.", title: "Marketing Floor — Day" }
};

// Curtain "clack" sound — synthesised, light: just the click, no sub-bass
let _audioCtx = null;
function playCurtainThunk() {
  try {
    if (!_audioCtx) {
      const Ctx = window.AudioContext || window.webkitAudioContext;
      if (!Ctx) return;
      _audioCtx = new Ctx();
    }
    const ctx = _audioCtx;
    if (ctx.state === "suspended") ctx.resume();
    const t = ctx.currentTime;

    // Bright noise click — wood-on-wood clapper feel
    const noiseLen = Math.floor(ctx.sampleRate * 0.07);
    const buf = ctx.createBuffer(1, noiseLen, ctx.sampleRate);
    const data = buf.getChannelData(0);
    for (let i = 0; i < noiseLen; i++) {
      data[i] = (Math.random() * 2 - 1) * Math.pow(1 - i / noiseLen, 2);
    }
    const noise = ctx.createBufferSource();
    noise.buffer = buf;
    const noiseGain = ctx.createGain();
    noiseGain.gain.setValueAtTime(0.22, t);
    noiseGain.gain.exponentialRampToValueAtTime(0.0008, t + 0.08);
    const hp = ctx.createBiquadFilter();
    hp.type = "highpass";
    hp.frequency.value = 1600;
    noise.connect(hp).connect(noiseGain).connect(ctx.destination);
    noise.start(t);
    noise.stop(t + 0.09);

    // Tiny pitched tick (~900 Hz) gives it character without weight
    const tick = ctx.createOscillator();
    const tickGain = ctx.createGain();
    tick.type = "triangle";
    tick.frequency.setValueAtTime(900, t);
    tick.frequency.exponentialRampToValueAtTime(420, t + 0.04);
    tickGain.gain.setValueAtTime(0.0001, t);
    tickGain.gain.exponentialRampToValueAtTime(0.18, t + 0.005);
    tickGain.gain.exponentialRampToValueAtTime(0.0001, t + 0.06);
    tick.connect(tickGain).connect(ctx.destination);
    tick.start(t);
    tick.stop(t + 0.07);
  } catch (_e) { /* fail silent */ }
}

let _hasRoutedOnce = false;
let _takeCount = 0;

async function route() {
  const curtain = document.querySelector(".page-curtain");
  const path = normalizePath(window.location.pathname);
  const page = routes[path] || routes["/"];

  // Run curtain wipe for every navigation EXCEPT the very first page load
  const useCurtain = _hasRoutedOnce && curtain;

  if (useCurtain) {
    _takeCount += 1;
    const slate = PROJECT_SLATE[path] || { scn: "--", title: page.title };
    const scnEl = curtain.querySelector('[data-curtain="scn"]');
    const titleEl = curtain.querySelector('[data-curtain="title"]');
    const takeEl = curtain.querySelector('[data-curtain="take"]');
    if (scnEl) scnEl.textContent = slate.scn;
    if (titleEl) titleEl.textContent = slate.title;
    if (takeEl) takeEl.textContent = String(_takeCount).padStart(2, "0");
    curtain.classList.remove("opening");
    // Trigger reflow so re-adding "closing" restarts transitions
    void curtain.offsetWidth;
    curtain.classList.add("closing");
    // Play the projector thunk roughly when panels seal at center
    setTimeout(playCurtainThunk, 360);
    await new Promise(r => setTimeout(r, 720));
  }

  document.title = `${page.title} - Sunset Hills Motion Pictures`;
  renderNav();
  app.innerHTML = page.render(page);
  window.scrollTo({ top: 0, behavior: "instant" });
  nav.classList.remove("open");
  menuToggle.setAttribute("aria-expanded", "false");

  if (useCurtain) {
    await new Promise(r => setTimeout(r, 220));
    curtain.classList.remove("closing");
    curtain.classList.add("opening");
    setTimeout(() => curtain.classList.remove("opening"), 900);
  }

  _hasRoutedOnce = true;

  // Scroll reveal & counters
  setupReveal();
  setupCounters();
  setupReel();
  setupSwatchInteractions();
  setupRatioLab();
  setupTransmission();

  // Re-trigger scroll progress
  updateProgress();
}

function setupReel() {
  const wrap = document.querySelector("[data-reel]");
  if (!wrap) return;
  const stills = wrap.querySelectorAll(".reel-still");
  const ticks = wrap.querySelectorAll(".reel-tick");
  const handle = wrap.querySelector("[data-reel-handle]");
  const numEl = wrap.querySelector("[data-reel-num]");
  const tcEl = wrap.querySelector("[data-reel-tc]");
  const total = stills.length;
  if (!total || !handle) return;

  const setIndex = (i) => {
    const idx = Math.max(0, Math.min(total - 1, i));
    stills.forEach((el, n) => el.classList.toggle("active", n === idx));
    ticks.forEach((el, n) => el.classList.toggle("active", n === idx));
    if (numEl) numEl.textContent = String(idx + 1).padStart(2, "0");
    if (tcEl) {
      const totalFrames = idx * 24 + 12;
      const s = Math.floor(totalFrames / 24);
      const f = totalFrames % 24;
      const mm = String(Math.floor(s / 60)).padStart(2, "0");
      const ss = String(s % 60).padStart(2, "0");
      tcEl.textContent = `00:${mm}:${ss}:${String(f).padStart(2, "0")}`;
    }
    const track = wrap.querySelector(".reel-track");
    if (track) {
      const w = track.getBoundingClientRect().width;
      handle.style.left = `${(idx / (total - 1)) * w}px`;
    }
  };

  ticks.forEach((t, n) => t.addEventListener("click", () => setIndex(n)));

  const track = wrap.querySelector(".reel-track");
  let dragging = false;
  const moveTo = (clientX) => {
    if (!track) return;
    const r = track.getBoundingClientRect();
    const p = Math.max(0, Math.min(1, (clientX - r.left) / r.width));
    setIndex(Math.round(p * (total - 1)));
  };
  if (track) {
    track.addEventListener("pointerdown", (e) => {
      dragging = true;
      track.setPointerCapture(e.pointerId);
      moveTo(e.clientX);
    });
    track.addEventListener("pointermove", (e) => { if (dragging) moveTo(e.clientX); });
    track.addEventListener("pointerup", () => { dragging = false; });
    track.addEventListener("pointercancel", () => { dragging = false; });
  }
  setIndex(0);
}

function setupSwatchInteractions() {
  document.querySelectorAll(".swatch").forEach((btn) => {
    btn.addEventListener("click", () => {
      const row = btn.closest(".palette-row");
      if (!row) return;
      row.querySelectorAll(".swatch").forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");
    });
  });
}

function setupRatioLab() {
  const lab = document.querySelector("[data-ratio-lab]");
  if (!lab) return;
  const frame = lab.querySelector("[data-ratio-frame]");
  const idEl = lab.querySelector("[data-ratio-id]");
  const noteEl = lab.querySelector("[data-ratio-note]");
  lab.querySelectorAll(".ratio-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      lab.querySelectorAll(".ratio-btn").forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");
      const w = btn.dataset.w;
      const h = btn.dataset.h;
      if (frame) {
        frame.style.setProperty("--w", w);
        frame.style.setProperty("--h", h);
      }
      if (idEl) idEl.textContent = `${btn.dataset.id} : 1`;
      if (noteEl) noteEl.textContent = btn.dataset.note;
    });
  });
}

function setupTransmission() {
  const form = document.querySelector("[data-transmission]");
  if (!form) return;
  const timeEl = form.querySelector("[data-tx-time]");
  const counterEl = form.querySelector("[data-tx-counter]");
  const message = form.querySelector("#cf-message");
  const dot = form.querySelector(".tx-dot");

  // Live UTC+1 clock
  const tickClock = () => {
    if (!timeEl) return;
    const d = new Date();
    const pad = (n) => String(n).padStart(2, "0");
    timeEl.textContent = `${pad(d.getUTCHours() + 1)}:${pad(d.getUTCMinutes())}:${pad(d.getUTCSeconds())} CET`;
  };
  tickClock();
  if (form._clockId) clearInterval(form._clockId);
  form._clockId = setInterval(tickClock, 1000);

  // Character counter
  if (message && counterEl) {
    const max = 800;
    const updateCounter = () => {
      const n = message.value.length;
      counterEl.textContent = `${n} / ${max}`;
      counterEl.classList.toggle("over", n > max);
    };
    message.addEventListener("input", updateCounter);
    updateCounter();
  }

  // Submit handler — visual confirmation only (no backend)
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    if (!form.reportValidity()) return;
    form.classList.add("transmitting");
    if (dot) dot.classList.add("on");
    setTimeout(() => {
      form.classList.remove("transmitting");
      form.classList.add("transmitted");
    }, 900);
  });
}

function setupReveal() {
  const items = document.querySelectorAll("[data-reveal]");
  if (!items.length) return;
  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          io.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12, rootMargin: "0px 0px -8% 0px" }
  );
  items.forEach((el) => io.observe(el));
}

function setupCounters() {
  const nums = document.querySelectorAll(".stat-num[data-count]");
  if (!nums.length) return;
  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        const el = entry.target;
        const target = parseInt(el.dataset.count, 10);
        const dur = 1400;
        const start = performance.now();
        const tick = (now) => {
          const p = Math.min(1, (now - start) / dur);
          const eased = 1 - Math.pow(1 - p, 3);
          el.textContent = Math.round(target * eased)
            .toString()
            .padStart(String(target).length, "0");
          if (p < 1) requestAnimationFrame(tick);
        };
        requestAnimationFrame(tick);
        io.unobserve(el);
      });
    },
    { threshold: 0.4 }
  );
  nums.forEach((el) => io.observe(el));
}

document.addEventListener("mousemove", (e) => {
  const x = (e.clientX / window.innerWidth) * 100;
  const y = (e.clientY / window.innerHeight) * 100;
  document.documentElement.style.setProperty("--mouse-x", `${x}%`);
  document.documentElement.style.setProperty("--mouse-y", `${y}%`);
});

document.addEventListener("click", (event) => {
  const anchor = event.target.closest("[data-link]");
  if (!anchor) return;
  const url = new URL(anchor.href);
  if (url.origin !== window.location.origin) return;
  event.preventDefault();
  history.pushState(null, "", url.pathname);
  route();
});

menuToggle.addEventListener("click", () => {
  const isOpen = nav.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", String(isOpen));
});

window.addEventListener("popstate", route);
route();

const progressBar = document.querySelector(".page-progress span");
function updateProgress() {
  if (!progressBar) return;
  const max = document.documentElement.scrollHeight - window.innerHeight;
  const value = max > 0 ? window.scrollY / max : 0;
  progressBar.style.transform = `scaleX(${Math.min(1, Math.max(0, value))})`;
}

window.addEventListener("scroll", updateProgress, { passive: true });
window.addEventListener("resize", updateProgress);
updateProgress();

document.addEventListener('click', (e) => {
  const btn = e.target.closest('.selector-item');
  if (!btn) return;
  const index = btn.dataset.target;
  document.querySelectorAll('.selector-item').forEach(el => el.classList.remove('active'));
  document.querySelectorAll('.talent-profile').forEach(el => el.classList.remove('active'));
  btn.classList.add('active');
  document.querySelector('.talent-profile[data-index="' + index + '"]').classList.add('active');
});

