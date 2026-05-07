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
      "Poland is situated in Eastern Europe.It is located close to Paris, London, Berlin, Madrid, Prague and Moscow. Poland has huge capacity to be a place wherein films are made, not only on the basis of the human potential but also because of sophisticated and professional equipment used during production. Poland has lots of talented script writers, brilliant and acknowledged in the whole world directors and cinematographers, directors of photography, interior decorators, make-up artists, editors, composers, production managers and producers.",
      "We also have the technical staff who manage movie sets (staff responsible for lights position, dolly grips, props masters and many, many assistants). We are very familiar with special effects which are conducted by pyrotechnics or stunt men and also with computer design and high-expert equipment. We are in possession of hi-tech camera equipment, the best lenses, light systems and grips. Moreover we have hi-tech pictures studios (halls/greenscreen and bluebox) together Motion Control technology. In Poland we also have amazing equipment for editing films in the highest definition, to color the picture together with computer graphic processing (2D and 3D animations).",
      "We also have at our disposal places where the film music and music effects can be recorded. These studios have amazing acoustic tolerance and are equipped to process sound in addition to recording final parts of a film in any surrounding coding sound technology.",
      "Poland is located in a very interesting area. Firstly, we have clear four seasons with extremely hot summers and frosty and snowy winters. In summer time, while filming on the seaside or by lakes, we can make movies that look like those from the Caribbean or swampy Miami. In Winter, while filming in mountain regions, we freely can pretend we are in Alaska or Siberia. Polish Golden Autumn is an amazing time of billions of colors with a beauty that is hard to describe - we need to film it and then watch it.",
      "Spring however, after the Winter is a great moment when everything is being brought back to life even while the snow is still present - it is visually both picturesque and fabulous.",
      "Poland is a country with 1000 years history, so in very beautiful cities which have interesting architecture we are able to film and to imagine we are in any city in the world. These cities of course are not lacking in unique prerequisites. However, historical manifestation and the geopolitical history of our country wherein various cultures and trade routes meet, make Polish architecture one of its kind and outstanding.",
      "Polish film makers with love and passion for the cinema still create movies, believing that film is still a domain of fine art and the movie screen with its audience are magical places.",
      "We wish to share with you our passion, the magic of the cinema and the enthusiasm of those who make films. We also want to share with you and the whole world all these amazing places which can only be found in our homeland which will appear in your - our movies.",
      "Team of the SUNSET HILLS MOTION PICTURES"
    ],
    render: renderLongForm
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
      <div class="project-facts">
        <div><span>Location of pictures</span><strong>Queensland, Australia.</strong></div>
        <div><span>Estimated budget</span><strong>45 mln dolars.</strong></div>
        <div><span>Rights</span><strong>Rights reserved by Sunset Hills Motion Pictures</strong></div>
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

function renderPageHero(page) {
  const media = page.heroVideo
    ? `<video class="page-hero-media" src="${page.heroVideo}" autoplay muted loop playsinline></video>`
    : page.heroImage || page.image
      ? `<img class="page-hero-media" src="${page.heroImage || page.image}" alt="" />`
      : "";
  return `
    <section class="page-hero">
      ${media}
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
  return `
    <section class="hero">
      <video class="hero-bg" src="/public/assets/home-video.mp4" autoplay muted loop playsinline></video>
      <div class="hero-copy">
        <div class="eyebrow">Sunset hills</div>
        <h1>Motion Pictures</h1>
        <p class="lead">Our company is able to supervise other productions on commission preparing a photo set, selecting objects.</p>
        <div class="hero-actions">
          ${link("/the-kings-of-life/", "View films")}
          ${link("/production-in-poland/", "Production in Poland", "text-link secondary")}
        </div>
        ${statRail()}
      </div>
      <aside class="hero-panel">
        <video class="hero-video" src="/public/assets/home-video.mp4" autoplay muted loop playsinline></video>
        <div class="chrome-frame">
          <span>Production slate</span>
        </div>
        <div class="project-marquee">
          <span>THE ADVENTURES OF TOM</span>
          <span>THE KINGS OF LIFE</span>
        </div>
        <div class="slate-meta">
          <span>Warsaw</span>
          <span>London</span>
          <span>Los Angeles</span>
        </div>
      </aside>
    </section>
    ${cinemaTicker()}

    <section class="section">
      <div class="section-header">
        <span class="section-number">01.</span>
        <div>
          <h2>About Us</h2>
          <p class="lead">We design scenography, we have numerous contacts with companies involved in post-production of films. .</p>
        </div>
      </div>
      <div class="split">
        ${mediaFrame("/public/assets/optimized/kings-wide.webp", "Close", "media-placeholder editorial-media")}
        <div class="copy-stack">
          <p>We have the opportunity to hire Polish film crews at every film production, which are famous for doing their job very well.</p>
          ${link("/about-us/", "Get to know us better")}
        </div>
      </div>
    </section>

    <section class="section">
      <div class="section-header">
        <span class="section-number">02.</span>
        <h2>focusing on the<br />production of two films:</h2>
      </div>
      <div class="feature-grid">
        ${projectTile("THE ADVENTURES OF TOM", "We already have written and are ready for a production script for the aforementioned part which has been written by one of the Hollywood script writers.", "/the-adventures-of-tom/", "/public/assets/optimized/tom-cinematic.webp", "Feature film")}
        ${projectTile("THE KINGS OF LIFE", "\"The Kings of Life\" is a modern story about friendship which is full of touching moments, love and fascination with music, but it is also about how to survive in this notoriously “human world”.", "/the-kings-of-life/", "/public/assets/optimized/kings-wide.webp", "Feature film")}
      </div>
    </section>
    ${productionCapabilities()}
    ${slateOverview()}
    ${cinemaTicker()}
    ${contactSection()}
  `;
}

function renderAbout(page) {
  return `
    ${renderPageHero(page)}
    <section class="section split feature-split">
      ${mediaFrame("/public/assets/optimized/kings-wide.webp", "Sunset Hills Motion Pictures", "media-placeholder feature-media editorial-media")}
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
  return `
    ${renderPageHero(page)}
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
        ? `<section class="section book-section"><div class="section-header"><span class="section-number">02.</span><h2>Rights reserved by Sunset Hills Motion Pictures</h2></div>${mediaFrame("/public/assets/optimized/tom-cinematic.webp", "THE ADVENTURES OF TOM", "media-placeholder image-band cinematic-band editorial-media")}<div class="book-grid">${tomBooks.map(([label, src], index) => `<div class="book-item"><span>${String(index + 1).padStart(2, "0")}</span>${mediaFrame(src, label, "poster-placeholder", "contain book-cover")}</div>`).join("")}</div></section>`
        : ""
    }
  `;
}

function renderProjectPlaceholder(page) {
  return `
    ${renderPageHero(page)}
    ${cinemaTicker()}
    <section class="section">
      ${videoFrame("/public/assets/butterflies-drive-download.mp4", "Where the butterflies fly", "media-placeholder image-band cinema-video", "contain")}
    </section>
  `;
}

function renderKings(page) {
  return `
    ${renderProject(page)}
    <section class="section">
      <div class="section-header">
        <span class="section-number">02.</span>
        <h2>PEOPLE ENGADED IN THE PRODUCTION OF THE FILM</h2>
      </div>
      ${mediaFrame("/public/assets/optimized/kings-wide.webp", "The Kings of Life", "media-placeholder image-band cinematic-band editorial-media")}
      <div class="people-grid">
        ${personCard("JACK WIELGOPOLAN", "Producer / Script writer / Director", "Jack Wielgopolan as a producer, distributor and script writer has been associated with movie brands in the USA and Poland since 1991. Nowadays, apart from “Kings of Life” he is preparing a series of 9 fictional films based upon the novel of Alfred Szklarski “Adventures of Tom “. The first part is called “Adventures of Tom: in the Kangaroo Kingdom “. The budget for this production amounts to $45,000,000.", "/jack-wielgopolan/", "Read more about Jack Wielgopolan", "/public/assets/optimized/portrait-jack.webp")}
        ${personCard("FILIP GUZLA", "Producer", "Filip Guzla – businessman, partner in a law firm, film producer. He co-produced four feature films “Botox”, “Women of mafia” and “Smallworld” directed by Patryk Vega with the stars Enrique Arce known from the series “La Casa de Papel” and “Knightfall”, Piotr Adamczyk from “Karol. A man who became Pope and Aleksey Serebraykov from the Golden Globe and Oscar-nominated Leviathan. Faking Real is at the stage of post-production. He is a member of the Council of the Marcin Gortat Foundation MG13, which promotes sport and a healthy lifestyle among children and teenagers.", "#", "", "/public/assets/optimized/portrait-filip.webp")}
        ${personCard("GERMANO SARACCO", "Cinematographer", people.germano.paragraphs.slice(0, 3).join(" "), "/germano-saracco/", "Read more about Germano Saracco", "/public/assets/optimized/portrait-germano.webp")}
        ${personCard("MACIEJ ZIELIŃSKI", "Composer", "Germano Saracco is an award-winning cinematographer and the author of the photos for many images of feature films, documentary, music video and advertising. A graduate of the Istituto Scienze Cinematografiche in Florence and the University of Miami. Participant of the Film Technician Program at the London-based international film school. He speaks three languages – English, Italian and Spanish. He lives permanently in Los Angeles, California. Maciek Zielinski is one of the best-known and talented contemporary film music composers in Poland. For many years, a leading film music composer. He works with many film producers in Europe and Hollywood. More information about the composer’s form can be found on IMBD.", "https://www.imdb.com/name/nm0956201/", "More information about the composer's on IMBD.", "/public/assets/optimized/portrait-maciej.webp")}
      </div>
    </section>
  `;
}

function renderCoverage(page) {
  const rows = [
    ["TITLE", "THE KINGS OF LIFE"],
    ["WRITER", "Jacek Wielgopolan"],
    ["FORM", "Screenplay"],
    ["PAGES", "136"],
    ["GENRE", "Drama"],
    ["SUB BY", "Dawn Jacobs"],
    ["SUB TO", "Adam Lebovitz"],
    ["COVERAGE DATE", "July 17, 2023"],
    ["LOGLINE", "A down on his luck violinist is forced to start over his life in a different country and finds an unlikely family, in the form of a friend and a little girl, around a landfill."],
    ["RECOMMENDATION", "Consider."],
    ["BRIEF", "The setting makes this a memorable script, but the structure needs to be tighter and Jacob’s character needs to be further developed."]
  ];

  return `
    ${renderPageHero(page)}
    ${cinemaTicker()}
    <section class="section coverage-section">
      <div class="coverage-layout">
        ${mediaFrame("/public/assets/optimized/coverage-table.webp", "SCRIPT COVERAGE", "media-placeholder document-frame", "contain")}
        <div class="coverage">
          ${rows.map(([key, value]) => `<div><strong>${key}</strong><span>${value}</span></div>`).join("")}
        </div>
      </div>
    </section>
  `;
}

function renderLongForm(page) {
  return `
    ${renderPageHero(page)}
    ${cinemaTicker()}
    <section class="section">
      <div class="split longform-layout">
        <div class="film-strip">
          <span>Paris</span>
          <span>London</span>
          <span>Berlin</span>
          <span>Madrid</span>
          <span>Prague</span>
          <span>Moscow</span>
        </div>
        <div class="copy-stack longform-copy">
          ${mediaFrame("/public/assets/optimized/production-map.webp", "PRODUCTION IN POLAND", "media-placeholder feature-media editorial-media")}
          ${longformParagraphs(page.paragraphs)}
        </div>
      </div>
    </section>
  `;
}

function officeCards() {
  return `
    <div class="office-grid">
      <article class="info-card">
        <span class="card-kicker">Poland office</span>
        <p>Sunset Hills Motion Pictures S.A.<br />02-738 Warsaw, Poland<br />ul. Dominikańska 21B</p>
      </article>
      <article class="info-card">
        <span class="card-kicker">United Kingdom office</span>
        <p>SUNSET HILLS INVESTMENTS LTD<br />27 Old Gloucester Street, London,<br />United Kingdom,<br />WC1N 3AX</p>
      </article>
      <article class="info-card">
        <span class="card-kicker">Contact</span>
        <p>cool@world.pl<br />Phone: +48 606 400 500</p>
      </article>
    </div>
  `;
}

function contactSection(number = "05.", includeVisual = false) {
  return `
    <section class="section" id="contact">
      <div class="section-header">
        <span class="section-number">${number}</span>
        <h2>Let's Talk<br />Contact</h2>
      </div>
      <div class="split contact-layout">
        ${includeVisual ? `<div class="copy-stack">${mediaFrame("/public/assets/optimized/production-map.webp", "Contact", "media-placeholder feature-media editorial-media")}${officeCards()}</div>` : officeCards()}
        ${contactForm()}
      </div>
    </section>
  `;
}

function contactForm() {
  return `
    <form class="contact-form">
      <div class="field"><label for="name">Name</label><input id="name" name="name" autocomplete="name" /></div>
      <div class="field"><label for="email">Email</label><input id="email" name="email" type="email" autocomplete="email" /></div>
      <div class="field"><label for="subject">Subject</label><input id="subject" name="subject" /></div>
      <div class="field"><label for="message">Message</label><textarea id="message" name="message"></textarea></div>
      <button class="submit-button" type="submit">Submit</button>
    </form>
  `;
}

function renderContact(page) {
  return `${renderPageHero(page)}${contactSection("01.", true)}`;
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
      <div class="copy-stack">
        <span class="chip">${page.role}</span>
        <h2>${page.title}</h2>
        ${paragraphs(page.paragraphs)}
      </div>
    </section>
    ${
      page.films.length
        ? `<section class="section"><div class="section-header"><span class="section-number">03.</span><h2>${page.title === "GERMANO SARACCO" ? "BEST MOVIES" : "Jack Wielgopolan best movies as producer and co-producer"}</h2></div><div class="poster-grid">${page.films.map(([film, src]) => mediaFrame(src, film, "poster-placeholder")).join("")}</div></section>`
        : ""
    }
  `;
}

function route() {
  const path = normalizePath(window.location.pathname);
  const page = routes[path] || routes["/"];
  document.title = `${page.title} - Sunset Hills Motion Pictures`;
  renderNav();
  app.innerHTML = page.render(page) + nextPageSlate(path) + (path === "/contact/" ? "" : closingSlate());
  window.scrollTo({ top: 0, behavior: "instant" });
  nav.classList.remove("open");
  menuToggle.setAttribute("aria-expanded", "false");
}

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
