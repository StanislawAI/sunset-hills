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
  const metrics = [
    ["CONCEPT", "GOOD"],
    ["STORY LINE", "GOOD"],
    ["CHARACTERS", "FAIR"],
    ["DIALOGUE", "FAIR"]
  ];

  const infoRows = [
    ["TITLE", "THE KINGS OF LIFE"],
    ["WRITER", "Jacek Wielgopolan"],
    ["FORM", "Screenplay"],
    ["PAGES", "136"],
    ["GENRE", "Drama"],
    ["SUB BY", "Dawn Jacobs"],
    ["SUB TO", "Adam Lebovitz"],
    ["COVERAGE DATE", "July 17, 2023"],
    ["LOGLINE", "A down on his luck violinist is forced to start over his life in a different country and finds an unlikely family, in the form of a friend and a little girl, around a landfill."]
  ];

  return `
    ${renderPageHero(page, "bg-coverage")}
    ${cinemaTicker()}
    <section class="section coverage-section dossier-overlay">
      <div class="coverage-layout">
        <div class="coverage-info">
          ${infoRows.map(([key, value]) => `
            <div class="info-row">
              <strong>${key}</strong>
              <span>${value}</span>
            </div>
          `).join("")}
        </div>
        <div class="evaluation-wrapper">
          <div class="evaluation-grid">
            ${metrics.map(([label, rating]) => `
              <div class="evaluation-item">
                <span class="evaluation-metric">${label}</span>
                <div class="evaluation-rating">
                  <span class="rating-label">${rating}</span>
                </div>
                <div class="progress-bar-container">
                  <div class="progress-bar-fill"></div>
                </div>
              </div>
            `).join("")}
          </div>
          <div class="recommendation-card">
            <strong>RECOMMENDATION: Consider.</strong>
            <p>The setting makes this a memorable script, but the structure needs to be tighter and Jacob’s character needs to be further developed.</p>
          </div>
        </div>
      </div>
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
    <section class="section">
      <div class="production-capabilities-grid">
        ${page.paragraphs.map((para, i) => `
          <article class="capability-card">
            <span class="card-number">0${i + 1}</span>
            <p>${para}</p>
          </article>
        `).join("")}
      </div>
    </section>
  `;
}

function officeCards() {
  return `
    <div class="office-grid">
      <article class="info-card">
        <span class="card-kicker">Poland</span>
        <p>Sunset Hills Motion Pictures S.A.<br />ul. Dominikańska 21B<br />02-738 Warsaw</p>
      </article>
      <article class="info-card">
        <span class="card-kicker">United Kingdom</span>
        <p>SUNSET HILLS INVESTMENTS LTD<br />27 Old Gloucester Street<br />London, WC1N 3AX</p>
      </article>
      <article class="info-card">
        <span class="card-kicker">Direct</span>
        <p>cool@world.pl<br />+48 606 400 500</p>
      </article>
    </div>
  `;
}

function contactSection(number = "01.", includeVisual = false) {
  return `
    <section class="section contact-section">
      <div class="split contact-layout">
        <div class="copy-stack">
          <h2>Let's Talk.</h2>
          ${officeCards()}
        </div>
        ${contactForm()}
      </div>
    </section>
  `;
}

function contactForm() {
  return `
    <form class="contact-form">
      <div class="field"><label for="name">Name</label><input id="name" name="name" placeholder="Name" /></div>
      <div class="field"><label for="email">Email</label><input id="email" name="email" type="email" placeholder="Email" /></div>
      <div class="field"><label for="message">Message</label><textarea id="message" name="message" placeholder="Start typing..."></textarea></div>
      <button class="submit-button" type="submit">Send Message</button>
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

async function route() {
  const curtain = document.querySelector(".page-curtain");
  const path = normalizePath(window.location.pathname);
  const page = routes[path] || routes["/"];

  // Run curtain wipe for every navigation EXCEPT the very first page load
  const useCurtain = _hasRoutedOnce && curtain;

  if (useCurtain) {
    const slate = PROJECT_SLATE[path] || { scn: "--", title: page.title };
    const scnEl = curtain.querySelector('[data-curtain="scn"]');
    const titleEl = curtain.querySelector('[data-curtain="title"]');
    if (scnEl) scnEl.textContent = slate.scn;
    if (titleEl) titleEl.textContent = slate.title;
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

  // Re-trigger scroll progress
  updateProgress();
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

