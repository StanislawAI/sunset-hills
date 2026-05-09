import { translations } from "./i18n.js";

function getLang() {
  return window.location.pathname.startsWith("/pl/") ? "pl" : "en";
}

let lang = getLang();
let t = translations[lang];

let navItems, people, tomBooks, routes;

function updateGlobals() {
  lang = getLang();
  t = translations[lang];

  navItems = [
    { label: t.nav.home, path: lang === "pl" ? "/pl/" : "/" },
    { label: t.nav.about, path: lang === "pl" ? "/pl/about-us/" : "/about-us/" },
    { label: t.nav.butterflies, path: lang === "pl" ? "/pl/where-the-butterflies-fly/" : "/where-the-butterflies-fly/" },
    { label: t.nav.tom, path: lang === "pl" ? "/pl/the-adventures-of-tom/" : "/the-adventures-of-tom/" },
    { label: t.nav.kings, path: lang === "pl" ? "/pl/the-kings-of-life/" : "/the-kings-of-life/" },
    { label: t.nav.coverage, path: lang === "pl" ? "/pl/script-coverage/" : "/script-coverage/" },
    { label: t.nav.production, path: lang === "pl" ? "/pl/production-in-poland/" : "/production-in-poland/" },
    { label: t.nav.contact, path: lang === "pl" ? "/pl/contact/" : "/contact/" }
  ];

  people = {
    jack: {
      title: "Jack Wielgopolan",
      role: lang === "pl" ? "Producent / Scenarzysta / Reżyser" : "Producer / Script writer / Director",
      path: lang === "pl" ? "/pl/jack-wielgopolan/" : "/jack-wielgopolan/",
      image: "/public/assets/optimized/portrait-jack.webp",
      paragraphs: lang === "pl" ? [
        "Jacek Wielgopolan jako producent, dystrybutor i scenarzysta jest związany z markami filmowymi w USA i Polsce od 1991 roku.",
        "Obecnie, poza „Królami życia”, przygotowuje serię 9 filmów fabularnych opartych na powieści Alfreda Szklarskiego „Przygody Tomka”. Pierwsza część nosi tytuł „Przygody Tomka: w krainie kangurów”. Budżet tej produkcji wynosi 45 000 000 USD."
      ] : [
        "Jack Wielgopolan as a producer, distributor and script writer as been associated with movie brands in the USA and Poland since 1991.",
        "Nowadays, apart from \"Kings of Life\" he is preparing a series of 9 fictional films based upon the novel of Alfred Szklarski \"Adventures of Tom\". The first part is called \"Adventures of Tom: in the Kangaroo Kingdom\". The budget for this production amounts of $45,000,000"
      ],
      meta: {
        profileNum: "01",
        since: "1991",
        base: "Warsaw · Los Angeles",
        languages: "PL · EN",
        credits: "9+ pictures",
        slug: lang === "pl" ? "WN. STUDIO · DOMINIKAŃSKA — ŚWIT" : "INT. STUDIO · DOMINIKAŃSKA — DAWN",
        labels: lang === "pl"
          ? ["Założyciel", "Producent", "Scenarzysta", "Reżyser"]
          : ["Founder", "Producer", "Screenwriter", "Director"],
        quote: lang === "pl"
          ? null
          : null
      },
      films: [
        ["Benefit of the Doubt", "1993", "Dir. Jonathan Heap · Donald Sutherland · Amy Irving",       "/public/assets/optimized/poster-benefit.webp"],
        ["Neverending Story III", "1994", "Dir. Peter MacDonald · Jack Black · Jason James Richter",   "/public/assets/optimized/poster-never.webp"],
        ["Dzieje Mistrza Twardowskiego", "1996", lang === "pl" ? "Polski klasyk fantasy" : "Polish fantasy classic", "/public/assets/optimized/poster-twardowski.webp"],
        ["The Doubles", "2006", lang === "pl" ? "Współczesny dramat" : "Contemporary drama",            "/public/assets/optimized/poster-doubles.webp"],
        [t.nav.kings, "2026", lang === "pl" ? "W produkcji · scenariusz/reżyseria" : "In production · screenplay/direction", "/public/assets/optimized/poster-tkol.webp"]
      ]
    },
    germano: {
      title: "GERMANO SARACCO",
      role: lang === "pl" ? "OPERATOR OBRAZU" : "CINEMATOGRAPHER",
      path: lang === "pl" ? "/pl/germano-saracco/" : "/germano-saracco/",
      image: "/public/assets/optimized/portrait-germano.webp",
      paragraphs: lang === "pl" ? [
        "Germano Saracco jest wielokrotnie nagradzanym operatorem obrazu i autorem zdjęć do wielu filmów fabularnych, dokumentalnych, teledysków i reklam.",
        "Absolwent Istituto Scienze Cinematografiche we Florencji oraz University of Miami. Uczestnik Programu Techników Filmowych w międzynarodowej szkole filmowej w Londynie.",
        "Mówi w trzech językach – angielskim, włoskim i hiszpańskim. Mieszka na stałe w Los Angeles w Kalifornii.",
        "„Dzisiaj trudno zliczyć dni, które spędziłem w ciągu ostatnich 35 lat na planach zdjęciowych podczas mojej filmowej przygody i trudno zliczyć liczbę scenariuszy, które udało mi się przeczytać. Mogę z pełną odpowiedzialnością powiedzieć, że spośród dosłownie tysięcy lektur, które przeczytałem, i scenariuszy gotowych do realizacji, scenariusz napisany przez Jacka Wielgopolana „Królowie życia” jest jedynym, który szczerze mnie rozbawił. Zakończenie tej historii zaskoczyło mnie tak bardzo, że w jednej chwili wzruszyłem się do łez i bez chwili wahania zgodziłem się pracować nad tym wyjątkowym i ważnym dla mnie projektem filmowym.”",
        "Nagrody:",
        "International Social Commitment w Accademia Belle Arti A Venezia za funkcję operatora w filmie „Hopeful Notes”.",
        "Nagroda Złotego Kondora.",
        "Nagroda za najlepszy film krótkometrażowy „Eve’s Dropping In” na festiwalu filmowym w Atlantic City."
      ] : [
        "Germano Saracco is an award-winning cinematographer and the author of the photos for many images of feature films, documentary, music video and advertising.",
        "A graduate of the Istituto Scienze Cinematografiche in Florence and the University of Miami. Participant of the Film Technician Program at the London-based international film school.",
        "He speaks three languages - English, Italian and Spanish. He lives permanently in Los Angeles, California.",
        "\"Today, it's difficult to count the days I spent in the last 35 years on the photos sets during my film adventure and it is difficult to count the number of scenarios that I have been able to read. I can say with full responsibility that among the literally thousands of readings I've read and the screenplays ready for filmmaking, the scenario written by Jacek Wielgopolan, \"The Kings of Life\" is the only one that has sincerely amused me. The ending surprised me so much that in just a moment I was moved to tears and without a moment's hesitation I agreed to work on this unique and important film project for me.\"",
        "Rewards:",
        "International Social Commitment w Accademia Belle Arti A Venezia for the operator's function in film “Hopeful Notes”.",
        "Gold Condor Award.",
        "Award for best short film “Eve’s Dropping In” in Atlantic City Film Festival."
      ],
      films: [
        ["Americas Most Wanted — America Fights Back", "TV",   lang === "pl" ? "Operator obrazu" : "Cinematographer", "/public/assets/optimized/germano-mission.webp"],
        ["Smokin' Aces",                                "2006", lang === "pl" ? "Drugi operator" : "Additional photography", "/public/assets/optimized/germano-smokin.webp"],
        ["Hopeful Notes",                               "2018", lang === "pl" ? "Operator · Złoty Kondor" : "DP · Gold Condor", "/public/assets/optimized/germano-hopeful.webp"]
      ],
      meta: {
        profileNum: "02",
        since: "2023",
        base: "Los Angeles · CA",
        languages: "EN · IT · ES",
        credits: "30+ years on set",
        slug: lang === "pl" ? "PLEN. WZGÓRZA HOLLYWOOD — ZMIERZCH" : "EXT. HOLLYWOOD HILLS — DUSK",
        labels: lang === "pl"
          ? ["Operator obrazu", "Złoty Kondor", "ISC · Floryencja", "U. Miami"]
          : ["Cinematographer", "Gold Condor", "ISC · Florence", "U. Miami"]
      }
    },
    dawn: {
      title: "Dawn Jacobs",
      role: lang === "pl" ? "Dyrektor kreatywna (CCO) Sunset Hills Motion Pictures" : "CCO of Sunset Hills Motion Pictures",
      path: lang === "pl" ? "/pl/dawn-jacobs/" : "/dawn-jacobs/",
      image: "/public/assets/optimized/about-dawn.webp",
      paragraphs: lang === "pl" ? [
        "Odnosząca sukcesy Dyrektor Marketingu z bogatym i różnorodnym doświadczeniem oraz strategicznym, kreatywnym i przedsiębiorczym nastawieniem.",
        "Jej entuzjazm do planowania strategicznego i rozwoju kreatywnego pozwolił jej osiągnąć sukcesy w tworzeniu stron internetowych, rebrandingu i wprowadzaniu nowych produktów na rynek.",
        "Doświadczenie zawodowe:",
        "• New Dawn Effects, Sun Valley, CA (Business Manager, Marketing, Office Manager);",
        "• Vegetable Juices, Bedford Park, IL (Dyrektor Marketingu);",
        "• Ach Foods, Oakbrook Terrace, IL (Senior Associate Brand Manager);",
        "• Sara Lee, Downers Grove, IL (Senior Marketing Manager C-Store);",
        "• The Kellogg Company, Elmhurst, IL (Senior Customer Marketing Manager);",
        "• Griffith Laboratories, Alsip, IL (Senior Marketing Solutions Manager)."
      ] : [
        "Successful Marketing Director with extensive and varied background, and a strategic, creative and entrepreneurial mind-set.",
        "Her enthusiasm for strategically led planning and creative development has enabled her to deliver results in successful website development, rebranding, and new product launches.",
        "Professional Experience:",
        "• New Dawn Effects, Sun Valley, CA (Business Manager, Marketing, Office Manager);",
        "• Vegetable Juices, Bedford Park, IL (Business Manager, Marketing, Office Manager);",
        "• Vegetable Juices, Bedford Park, IL (Director of Marketing);",
        "• Ach Foods, Oakbrook Terrace, IL (Senior Associate Brand Manager);",
        "• Sara Lee, Downers Grove, IL (Senior Marketing Manager C-Store);",
        "• The Kellogg Company, Elmhurst, IL (Senior Customer Marketing Manager);",
        "• Griffith Laboratories, Alsip, IL (Senior Marketing Solutions Manager)."
      ],
      meta: {
        profileNum: "03",
        since: "2009",
        base: "Sun Valley · CA",
        languages: "EN",
        credits: "Strategy · brand · launch",
        slug: lang === "pl" ? "WN. STUDIO MARKI · DOLINA SŁOŃCA — POŁUDNIE" : "INT. BRAND ROOM · SUN VALLEY — NOON",
        labels: lang === "pl"
          ? ["Dyrektor Kreatywna (CCO)", "Marketing", "Brand", "Strategia"]
          : ["CCO", "Marketing", "Brand", "Strategy"]
      },
      films: []
    }
  };

  tomBooks = [
    ["Tomek", "/public/assets/optimized/book-tomek.webp"],
    ["Yeti", "/public/assets/optimized/book-yeti.webp"],
    ["Wyprawa", "/public/assets/optimized/book-wyprawa.webp"],
    ["Wojnie", "/public/assets/optimized/book-wojnie.webp"],
    ["Glowy", "/public/assets/optimized/book-glowy.webp"],
    ["Faraon", "/public/assets/optimized/book-faraon.webp"],
    ["Chaco", "/public/assets/optimized/book-chaco.webp"],
    ["Amazonka", "/public/assets/optimized/book-amazonka.webp"]
  ];

  routes = {
    "/": {
      title: translations.en.nav.home,
      render: renderHome
    },
    "/pl/": {
      title: translations.pl.nav.home,
      render: renderHome
    },
    "/about-us/": {
      title: translations.en.nav.about,
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
    "/pl/about-us/": {
      title: translations.pl.nav.about,
      eyebrow: "01. O nas",
      heroImage: "/public/assets/optimized/kings-wide.webp",
      paragraphs: [
        "Nasza firma jest w stanie nadzorować inne produkcje na zlecenie, przygotowując plan zdjęciowy, dobierając obiekty.",
        "Nasze dwa biura: w Polsce i Wielkiej Brytanii koncentrują się obecnie na produkcji dwóch filmów: „Królowie życia” i „Przygody Tomka”.",
        "Nasz zespół produkcyjny, opierający się na ponad 30-letnim doświadczeniu w Hollywood i Polsce, zdecydował się nakręcić film łączący komedię i dramat, który jest najbardziej poszukiwanym i docenianym gatunkiem przez widzów i festiwale filmowe na całym świecie. Chcemy, aby ta produkcja odbiegała od przyjętych norm, czyniąc ten film prawdziwym, komercyjnym projektem, który pozwoli inwestorom podwoić zyski.",
        "Dodatkowo nasza firma jest w stanie nadzorować inne produkcje na zlecenie, przygotowując plan zdjęciowy, dobierając obiekty. Projektujemy scenografię, posiadamy liczne kontakty z firmami zajmującymi się postprodukcją filmów. Mamy możliwość wynajęcia polskich ekip filmowych przy każdej produkcji filmowej, które słyną z bardzo dobrego wykonywania swojej pracy. Posiadamy również liczne kontakty z firmami dysponującymi profesjonalnym oświetleniem planów fotograficznych, podnośnikami/wysięgnikami/dźwigami o wysokości do 64 metrów. Współpracujemy ze wszystkimi grupami kaskaderskimi działającymi w Polsce (efekty kaskaderskie z ludźmi, zwierzętami – końmi, samochodami, motocyklami, samolotami).",
        "Podsumowując, jesteśmy w stanie podjąć się realizacji filmu z niemal każdej epoki, aż po czasy współczesne."
      ],
      render: renderAbout
    },
    "/where-the-butterflies-fly/": {
      title: translations.en.nav.butterflies,
      eyebrow: translations.en.nav.butterflies,
      heroVideo: "/public/assets/butterflies-drive-download.mp4",
      paragraphs: [],
      render: renderButterflies
    },
    "/pl/where-the-butterflies-fly/": {
      title: translations.pl.nav.butterflies,
      eyebrow: translations.pl.nav.butterflies,
      heroVideo: "/public/assets/butterflies-drive-download.mp4",
      paragraphs: [],
      render: renderButterflies
    },
    "/the-adventures-of-tom/": {
      title: translations.en.nav.tom,
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
      render: renderTom
    },
    "/pl/the-adventures-of-tom/": {
      title: translations.pl.nav.tom,
      eyebrow: "01. PRZYGODY TOMKA",
      heroImage: "/public/assets/optimized/tom-cinematic.webp",
      paragraphs: [
        "Niezależnie od produkcji „Królów życia”, nasza firma posiada WYŁĄCZNE PRAWO do produkcji 9 filmów fabularnych opartych na IX-tomowej serii książek Alfreda Szklarskiego o przygodach Tomka Wilmowskiego.",
        "Nawiązaliśmy już dialog z Film Institute Screen Australia, który jest odpowiednikiem Polskiego Instytutu Sztuki Filmowej. Instytut ten zadeklarował chęć pomocy przy produkcji, a także zaoferował znaczną pomoc finansową przy filmie, który zostanie w całości wyprodukowany w Australii.",
        "Szacowany budżet tego projektu to 45 mln dolarów.",
        "Podsumowując, nasz sukces będzie sukcesem wszystkich. Podążamy drogą naszych marzeń, aby dążyć do WIELKIEGO SUKCESU dla nas wszystkich.",
        "Miejsce zdjęć: Queensland, Australia.",
        "Prawa zastrzeżone przez Sunset Hills Motion Pictures"
      ],
      render: renderTom
    },
    "/the-kings-of-life/": {
      title: translations.en.nav.kings,
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
    "/pl/the-kings-of-life/": {
      title: translations.pl.nav.kings,
      eyebrow: "01. Królowie życia",
      heroImage: "/public/assets/optimized/kings-wide.webp",
      paragraphs: [
        "„Królowie życia” to produkcja bez precedensu w historii polskiej kinematografii.",
        "Aby uczynić projekt filmowy prawdziwym arcydziełem, zamierzamy zaangażować do niego gwiazdy Hollywood, które posiadają profesjonalny warsztat aktorski i odnajdą się w gatunku komediodramatu.",
        "Dystrybucją tego filmu na świecie zajmie się jedna z największych firm dystrybucyjnych na świecie z siedzibą w Los Angeles w Kalifornii.",
        "„Królowie życia” to współczesna opowieść o przyjaźni, pełna wzruszających momentów, miłości i fascynacji muzyką, ale także o tym, jak przetrwać w tym notorycznie „ludzkim świecie”. Gdy główni bohaterowie odgrywają swoje role, historia karmiona jest humorem i „światową” mądrością. „Królowie życia” to przewrotny tytuł historii w naszym filmie, ale jakże bliski losom naszych bohaterów, którzy mimo wielu przeciwności losu wciąż mieli siłę, by zacząć od nowa.",
        "Nasz zespół produkcyjny, opierający się na ponad 30-letnim doświadczeniu w Hollywood i Polsce, zdecydował się nakręcić film łączący komedię i dramat, który jest najbardziej poszukiwanym i docenianym gatunkiem przez widzów i festiwale filmowe na całym świecie. Chcemy, aby ta produkcja odbiegała od przyjętych norm, tworząc film, który zostanie doceniony na wielu festiwalach i jako projekt komercyjny przez wielu widzów na całym świecie.",
        "Zdjęcia plenerowe: Londyn - Anglia / Warszawa - Polska / New York - USA",
        "Realizując misję firmy, oprócz produkcji filmów, będziemy aktywnie wspierać potrzebujące dzieci cierpiące na choroby nowotworowe i choroby serca."
      ],
      render: renderKings
    },
    "/script-coverage/": {
      title: translations.en.nav.coverage,
      eyebrow: "01. SCRIPT COVERAGE",
      heroImage: "/public/assets/optimized/coverage-table.webp",
      render: renderCoverage
    },
    "/pl/script-coverage/": {
      title: translations.pl.nav.coverage,
      eyebrow: "01. ANALIZA SCENARIUSZY",
      heroImage: "/public/assets/optimized/coverage-table.webp",
      render: renderCoverage
    },
    "/production-in-poland/": {
      title: translations.en.nav.production,
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
    "/pl/production-in-poland/": {
      title: translations.pl.nav.production,
      eyebrow: "01. INFORMACJE O MOŻLIWOŚCIACH PRODUKCJI W POLSCE",
      heroImage: "/public/assets/optimized/production-map.webp",
      paragraphs: [
        "Polska to potęga potencjału filmowego, strategicznie położona na skrzyżowaniu głównych europejskich szlaków produkcyjnych. Wykorzystujemy to centralne położenie, łącząc światowej klasy możliwości techniczne z niezrównaną różnorodnością lokalizacji i talentów.",
        "Nasza infrastruktura wykracza poza proste lokacje filmowe. Oferujemy kompleksowy zestaw profesjonalnych usług zaprojektowanych z myślą o każdej skali produkcji, od niezależnych projektów po hity kinowe.",
        "Dzięki historii sięgającej ponad tysiąclecia, polska architektura oferuje wszechstronne płótno. Od nieskazitelnych zabytków po nowoczesne krajobrazy miejskie, możemy odtworzyć niemal każde miasto na świecie.",
        "Pory roku oferują tu unikalne narracje wizualne. Niezależnie od tego, czy jest to bujna, tętniąca życiem wiosna, złota jesienna paleta barw, czy dramatyczne zimowe krajobrazy, które mogą zastąpić Syberię lub Alaskę, Polska stanowi naturalne studio dla potrzeb każdego scenariusza.",
        "W Sunset Hills wierzymy, że film to najwyższa forma sztuki. Łączymy tę artystyczną pasję z wiodącą w branży wydajnością, zapewniając wszystko, od lokalnego zarządzania ekipą po najnowocześniejsze obiekty postprodukcyjne."
      ],
      render: renderProduction
    },
    "/contact/": {
      title: translations.en.nav.contact,
      eyebrow: "01. Let's Talk",
      heroImage: "/public/assets/optimized/production-map.webp",
      render: renderContact
    },
    "/pl/contact/": {
      title: translations.pl.nav.contact,
      eyebrow: "01. Porozmawiajmy",
      heroImage: "/public/assets/optimized/production-map.webp",
      render: renderContact
    },
    [people.jack.path]: { ...people.jack, render: renderPerson },
    [people.germano.path]: { ...people.germano, render: renderPerson },
    [people.dawn.path]: { ...people.dawn, render: renderPerson }
  };
}

updateGlobals();


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
  const items = t.ticker;
  const row = items.map((item) => `<span>${item}</span>`).join("");
  return `<div class="cinema-ticker" aria-hidden="true"><div>${row}${row}</div></div>`;
}

function lightLeak() {
  return `<div class="light-leak" aria-hidden="true"><span></span></div>`;
}

function manifestoSection() {
  const lines = t.manifesto.lines;
  return `
    <section class="section manifesto-section" data-reveal>
      <div class="manifesto-paper">
        <div class="manifesto-meta">
          <span>${t.manifesto.memo}</span><span>·</span><span>${t.manifesto.from}</span><span>·</span><span>${t.manifesto.loc}</span>
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
          <strong>${t.manifesto.founder}</strong>
          <span>${t.manifesto.role}</span>
        </div>
      </div>
    </section>
  `;
}

function processTimeline() {
  const steps = t.process.steps;
  return `
    <section class="section process-section" data-reveal>
      <div class="section-header">
        <span class="section-number">06.</span>
        <h2 class="title-cinematic">${t.process.title}</h2>
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
  const tiles = t.atlas.tiles.map((t, i) => ({
    ...t,
    src: [
      "/public/assets/optimized/kings-wide.webp",
      "/public/assets/optimized/production-map.webp",
      "/public/assets/optimized/tom-cinematic.webp",
      "/public/assets/optimized/kings-catalog.webp",
      "/public/assets/optimized/tom-main.webp",
      "/public/assets/optimized/germano-mission.webp"
    ][i]
  }));
  return `
    <section class="section atlas-section" data-reveal>
      <div class="section-header">
        <span class="section-number">07.</span>
        <h2 class="title-cinematic">${t.atlas.title}</h2>
      </div>
      <p class="atlas-lead">${t.atlas.lead}</p>
      <div class="atlas-grid">
        ${tiles.map((tile) => `
          <article class="atlas-tile" data-reveal>
            <div class="atlas-image"><img src="${tile.src}" alt="${tile.title}" loading="lazy"/></div>
            <div class="atlas-meta">
              <h3>${tile.title}</h3>
              <span class="atlas-tag">${t.atlas.tag}</span>
              <ul>${tile.standsIn.map((s) => `<li>${s}</li>`).join("")}</ul>
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
    { name: "Cannes", detail: "Submitted · 2025", award: t.laurels.entry },
    { name: "Atlantic City", detail: "Best Short", award: t.laurels.winner },
    { name: "Venice — Accademia", detail: "Social Commitment", award: t.laurels.award },
    { name: "Sundance", detail: "Submitted · 2026", award: t.laurels.entry },
    { name: "Gold Condor", detail: "Cinematography", award: t.laurels.winner }
  ];
  const press = t.laurels.press;
  const pressRow = press.map((q) => `<span>${q}</span>`).join("");
  return `
    <section class="section laurels-section" data-reveal>
      <div class="section-header">
        <span class="section-number">08.</span>
        <h2 class="title-cinematic">${t.laurels.title}</h2>
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
  const stages = t.status.stages;
  const projects = [
    { title: t.nav.tom, director: "Jack Wielgopolan", stage: 1, days: 142, location: "Queensland, AU" },
    { title: t.nav.kings, director: "Jack Wielgopolan", stage: 2, days: 38, location: "Warsaw / London / NYC" },
    { title: t.nav.butterflies, director: "Sunset Hills MP", stage: 3, days: 64, location: "Polish Highlands" }
  ];
  return `
    <section class="section status-board-section" data-reveal>
      <div class="section-header">
        <span class="section-number">09.</span>
        <h2 class="title-cinematic">${t.status.title}</h2>
      </div>
      <div class="status-board">
        ${projects.map((p) => `
          <article class="status-slate" data-reveal>
            <div class="status-slate-head">
              <span class="rec-dot"></span>
              <span class="status-label">${t.status.active}</span>
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
              <span><b>${p.days}</b> ${t.status.days}</span>
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
    { title: t.nav.kings, swatches: [
      { hex: "#1B2A3D", name: lang === "pl" ? "Warszawski Dym" : "Warsaw Smoke" },
      { hex: "#9A2A2A", name: lang === "pl" ? "Ceglana Czerwień" : "Brick Red" },
      { hex: "#D7A05A", name: lang === "pl" ? "Bursztynowa Whisky" : "Whisky Amber" },
      { hex: "#E8DDC4", name: lang === "pl" ? "Kremowy List" : "Letter Cream" },
      { hex: "#0A0A0A", name: lang === "pl" ? "Teatralna Czerń" : "Theatre Black" }
    ]},
    { title: t.nav.tom, swatches: [
      { hex: "#3D2618", name: lang === "pl" ? "Ziemia Outback" : "Outback Earth" },
      { hex: "#C75A1F", name: lang === "pl" ? "Pustynny Zmierzch" : "Desert Dusk" },
      { hex: "#F2C16B", name: lang === "pl" ? "Piasek Rafy" : "Reef Sand" },
      { hex: "#1A4A4A", name: lang === "pl" ? "Głębia Koralowa" : "Coral Deep" },
      { hex: "#0E1418", name: lang === "pl" ? "Nocne Niebo" : "Night Sky" }
    ]},
    { title: t.nav.butterflies, swatches: [
      { hex: "#2B1F3A", name: lang === "pl" ? "Irysowy Aksamit" : "Iris Velvet" },
      { hex: "#7A3E63", name: lang === "pl" ? "Skrzydlaty Fiolet" : "Wing Mauve" },
      { hex: "#C9A5C6", name: lang === "pl" ? "Pudrowy Róż" : "Powder Pink" },
      { hex: "#E5E2D9", name: lang === "pl" ? "Len" : "Linen" },
      { hex: "#1F1A1F", name: lang === "pl" ? "Miękka Czerń" : "Soft Black" }
    ]}
  ];
  return `
    <section class="section palette-section" data-reveal>
      <div class="section-header">
        <span class="section-number">10.</span>
        <h2 class="title-cinematic">${t.lookbook.title}</h2>
      </div>
      <div class="palette-stack">
        ${projects.map((p) => `
          <article class="palette-row" data-reveal>
            <div class="palette-meta">
              <span class="eyebrow">${t.lookbook.eyebrow}</span>
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
        <h2 class="title-cinematic">${t.frames.title}</h2>
      </div>
      <p class="reel-lead">${t.frames.lead}</p>
      <div class="reel-wrap" data-reel>
        <div class="reel-stage">
          ${stills.map((s, i) => `<div class="reel-still${i === 0 ? " active" : ""}" data-i="${i}"><img src="${s}" alt="" loading="lazy"/></div>`).join("")}
          <div class="reel-overlay-meta">
            <span class="reel-frame-no">${t.frames.frame} <b data-reel-num>01</b> / ${String(stills.length).padStart(2, "0")}</span>
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
  const terms = t.lexicon.terms;
  return `
    <section class="section lexicon-section" data-reveal>
      <div class="section-header">
        <span class="section-number">12.</span>
        <h2 class="title-cinematic">${t.lexicon.title}</h2>
      </div>
      <p class="lexicon-lead">${t.lexicon.lead}</p>
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
    { id: "1.33", w: 1.33, h: 1, label: lang === "pl" ? "Format Klasyczny" : "Academy", note: lang === "pl" ? "Obywatel Kane, 1941" : "Citizen Kane, 1941" },
    { id: "1.85", w: 1.85, h: 1, label: lang === "pl" ? "Kinowy Panoramiczny" : "Theatrical Flat", note: lang === "pl" ? "Większość premier studyjnych" : "Most studio releases" },
    { id: "2.39", w: 2.39, h: 1, label: lang === "pl" ? "Anamorfotyczny Panoramiczny" : "Anamorphic Scope", note: lang === "pl" ? "Poszukiwacze, 1956" : "The Searchers, 1956" },
    { id: "2.76", w: 2.76, h: 1, label: "Ultra Panavision 70", note: "Ben-Hur, 1959" },
    { id: "1.43", w: 1.43, h: 1, label: "IMAX 70mm", note: "Dunkierka, 2017" }
  ];
  return `
    <section class="section ratio-lab-section" data-reveal>
      <div class="section-header">
        <span class="section-number">13.</span>
        <h2 class="title-cinematic">${t.ratio.title}</h2>
      </div>
      <p class="ratio-lead">${t.ratio.lead}</p>
      <div class="ratio-lab" data-ratio-lab>
        <div class="ratio-stage">
          <div class="ratio-frame" data-ratio-frame style="--w:1.85;--h:1">
            <span class="frame-cross"></span>
            <span class="frame-corner tl"></span><span class="frame-corner tr"></span>
            <span class="frame-corner bl"></span><span class="frame-corner br"></span>
            <span class="frame-id" data-ratio-id>1.85 : 1</span>
            <span class="frame-note" data-ratio-note>${lang === "pl" ? "Większość premier studyjnych" : "Most studio releases"}</span>
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
  const items = t.day.items;
  return `
    <section class="section dayonset-section" data-reveal>
      <div class="section-header">
        <span class="section-number">14.</span>
        <h2 class="title-cinematic">${t.day.title}</h2>
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
  const labels = t.anatomy.labels;
  return `
    <section class="section anatomy-section" data-reveal>
      <div class="section-header">
        <span class="section-number">15.</span>
        <h2 class="title-cinematic">${t.anatomy.title}</h2>
      </div>
      <p class="anatomy-lead">${t.anatomy.lead}</p>
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
            <text x="640" y="115">${labels.headroom}</text>
            <line x1="697" y1="290" x2="820" y2="290" stroke="rgba(209,32,37,0.7)"/>
            <text x="828" y="294">${labels.leadroom}</text>
            <line x1="569" y1="290" x2="430" y2="290" stroke="rgba(209,32,37,0.7)"/>
            <text x="426" y="294" text-anchor="end">${labels.subject}</text>
            <line x1="200" y1="476" x2="200" y2="540" stroke="rgba(209,32,37,0.7)"/>
            <text x="200" y="555" text-anchor="middle">${labels.foreground}</text>
            <line x1="870" y1="450" x2="940" y2="540" stroke="rgba(209,32,37,0.7)"/>
            <text x="940" y="555" text-anchor="end">${labels.background}</text>
            <line x1="120" y1="60" x2="60" y2="40" stroke="rgba(209,32,37,0.7)"/>
            <text x="60" y="34" text-anchor="start">${labels.edge}</text>
          </g>
        </svg>
      </div>
    </section>
  `;
}

function budgetAnatomy() {
  const slices = [
    { pct: 22, name: t.budget.slices[0].name, note: t.budget.slices[0].note, c: "rgba(209,32,37,0.85)" },
    { pct: 38, name: t.budget.slices[1].name, note: t.budget.slices[1].note, c: "rgba(255,168,92,0.9)" },
    { pct: 12, name: t.budget.slices[2].name, note: t.budget.slices[2].note, c: "rgba(232,221,196,0.85)" },
    { pct: 18, name: t.budget.slices[3].name, note: t.budget.slices[3].note, c: "rgba(122,62,99,0.9)" },
    { pct: 10, name: t.budget.slices[4].name, note: t.budget.slices[4].note, c: "rgba(255,255,255,0.18)" }
  ];
  return `
    <section class="section budget-section" data-reveal>
      <div class="section-header">
        <span class="section-number">16.</span>
        <h2 class="title-cinematic">${t.budget.title}</h2>
      </div>
      <p class="budget-lead">${t.budget.lead}</p>
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
  const c = t.callsheet;
  return `
    <section class="section callsheet-section" data-reveal>
      <div class="section-header">
        <span class="section-number">17.</span>
        <h2 class="title-cinematic">${c.title}</h2>
      </div>
      <div class="callsheet">
        <div class="cs-watermark">${c.confidential}</div>
        <header class="cs-head">
          <div>
            <strong>SUNSET HILLS MOTION PICTURES</strong>
            <span>"${lang === "pl" ? "KRÓLOWIE ŻYCIA" : "THE KINGS OF LIFE"}" · ${lang === "pl" ? "DZIEŃ 47 Z 64" : "DAY 47 OF 64"}</span>
          </div>
          <div class="cs-meta">
            <span><b>${lang === "pl" ? "DATA" : "DATE"}</b> 09 . MAR . 2026</span>
            <span><b>${lang === "pl" ? "POGODA" : "WEATHER"}</b> ${c.weather}</span>
            <span><b>${c.sunrise}</b> 06:14</span>
            <span><b>${c.sunset}</b> 17:48</span>
          </div>
        </header>
        <div class="cs-grid">
          <section class="cs-block">
            <h4>${c.blocks.call}</h4>
            <ul>
              <li><b>05:42</b><span>${lang === "pl" ? "Śniadanie ekipy" : "Crew breakfast"}</span></li>
              <li><b>06:30</b><span>${lang === "pl" ? "Oświetlenie" : "Lighting in"}</span></li>
              <li><b>07:00</b><span>${lang === "pl" ? "Obsada na planie" : "Cast on set"}</span></li>
              <li><b>08:00</b><span>${lang === "pl" ? "Pierwszy klaps" : "First shot"}</span></li>
              <li><b>12:30</b><span>${lang === "pl" ? "Lunch (60 min)" : "Lunch (60 min)"}</span></li>
              <li><b>18:30</b><span>${lang === "pl" ? "Koniec zdjęć" : "Camera wrap"}</span></li>
            </ul>
          </section>
          <section class="cs-block">
            <h4>${c.blocks.scenes}</h4>
            <ul>
              <li><b>SC&nbsp;42</b><span>INT. JAZZ CLUB — NIGHT · 2 1/8 pages</span></li>
              <li><b>SC&nbsp;43</b><span>EXT. ALLEY — NIGHT · 5/8 page</span></li>
              <li><b>SC&nbsp;44</b><span>INT. APARTMENT — DAWN · 1 3/8 pages</span></li>
            </ul>
          </section>
          <section class="cs-block">
            <h4>${c.blocks.locations}</h4>
            <ul>
              <li><b>UNIT&nbsp;A</b><span>Klub Stodoła · ul. Batorego 10 · Warszawa</span></li>
              <li><b>UNIT&nbsp;B</b><span>Backlot · Studio 3 · Łódź</span></li>
              <li><b>HOSP.</b><span>${lang === "pl" ? "Szpital Praski · 2.4 km od planu" : "Szpital Praski · 2.4 km from set"}</span></li>
            </ul>
          </section>
          <section class="cs-block">
            <h4>${c.blocks.depts}</h4>
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
          <span class="cs-stamp">${c.received} · 04:18</span>
        </footer>
      </div>
    </section>
  `;
}

function telegramsSection() {
  const c = t.telegrams;
  const tels = lang === "pl" ? [
    { from: "LOS ANGELES", at: "03 MAR · 23:42", body: "ZIELONE ŚWIATŁO POTWIERDZONE · STOP · TESTY KAMERY OD PONIEDZIAŁKU · STOP · HARMONOGRAM PRZELEWÓW DO KOŃCA DNIA · STOP", sig: "G. SARACCO" },
    { from: "WARSZAWA",       at: "14 LUT · 09:08", body: "OPCJA NA SERIĘ SZKLARSKIEGO ZABEZPIECZONA · STOP · DZIEWIĘĆ TOMÓW POTWIERDZONYCH · STOP · SZAMPAN NIEPOTRZEBNY · STOP", sig: "J. WIELGOPOLAN" },
    { from: "LONDYN",         at: "22 STY · 14:17", body: "HALA 7 ZAREZERWOWANA Q3 · STOP · BUDOWA PLENERU ZATWIERDZONA · STOP · BUDŻET BEZPIECZNY · STOP · WITAMY W DOMU · STOP", sig: "PINEWOOD OPS" },
    { from: "QUEENSLAND",     at: "09 GRU · 04:31", body: "14 LOKACJI SPRAWDZONYCH · STOP · KANGURY WSPÓŁPRACUJĄ · STOP · WODA CZYSTA · STOP · ZABRAĆ KURTKI · STOP", sig: "JEDNOSTKA LOKALIZACYJNA" }
  ] : [
    { from: "LOS ANGELES", at: "MAR 03 · 11:42PM", body: "GREENLIGHT CONFIRMED · STOP · CAMERA TESTS BEGIN MONDAY · STOP · WIRE SCHEDULE BY EOD · STOP", sig: "G. SARACCO" },
    { from: "WARSAW",       at: "FEB 14 · 09:08AM", body: "OPTION SECURED ON SZKLARSKI ESTATE · STOP · NINE VOLUMES CONFIRMED · STOP · CHAMPAGNE NOT NECESSARY · STOP", sig: "J. WIELGOPOLAN" },
    { from: "LONDON",       at: "JAN 22 · 02:17PM", body: "STAGE 7 BOOKED Q3 · STOP · BACKLOT BUILD APPROVED · STOP · BUDGET SAFE · STOP · WELCOME HOME · STOP", sig: "PINEWOOD OPS" },
    { from: "QUEENSLAND",   at: "DEC 09 · 04:31AM", body: "SCOUTED 14 LOCATIONS · STOP · KANGAROOS COOPERATIVE · STOP · WATER CLEAR · STOP · BRING JACKETS · STOP", sig: "LOCATION UNIT" }
  ];
  return `
    <section class="section telegram-section" data-reveal>
      <div class="section-header">
        <span class="section-number">18.</span>
        <h2 class="title-cinematic">${c.title}</h2>
      </div>
      <p class="telegram-lead">${c.lead}</p>
      <div class="telegram-grid">
        ${tels.map((t, i) => `
          <article class="telegram" data-reveal style="--i:${i}">
            <header>
              <span class="tg-stamp">SUNSET HILLS MP</span>
              <span class="tg-from">${lang === "pl" ? "Z" : "FROM"} ${t.from}</span>
              <span class="tg-at">${t.at}</span>
            </header>
            <p class="tg-body">${t.body}</p>
            <footer>
              <span class="tg-sig">${t.sig}</span>
              <span class="tg-recv">${c.received}</span>
            </footer>
          </article>
        `).join("")}
      </div>
    </section>
  `;
}

function dropZone() {
  const c = t.dropzone;
  return `
    <section class="section dropzone-section" data-reveal>
      <div class="section-header">
        <span class="section-number">19.</span>
        <h2 class="title-cinematic">${c.title}</h2>
      </div>
      <a href="${lang === "pl" ? "/pl/contact/" : "/contact/"}" class="dropzone" data-dropzone data-link>
        <div class="dz-content">
          <svg viewBox="0 0 64 64" class="dz-icon" aria-hidden="true">
            <rect x="12" y="6" width="40" height="52" rx="2" fill="none" stroke="currentColor" stroke-width="1.5"/>
            <line x1="20" y1="18" x2="44" y2="18" stroke="currentColor" stroke-width="1.5"/>
            <line x1="20" y1="26" x2="44" y2="26" stroke="currentColor" stroke-width="1.5"/>
            <line x1="20" y1="34" x2="38" y2="34" stroke="currentColor" stroke-width="1.5"/>
            <line x1="20" y1="42" x2="42" y2="42" stroke="currentColor" stroke-width="1.5"/>
          </svg>
          <strong class="dz-title">${c.drop}</strong>
          <span class="dz-sub">${c.sub}</span>
          <span class="dz-cta">${c.cta}</span>
        </div>
        <div class="dz-stamp" aria-hidden="true">
          <span>${c.received}</span>
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
  if (page.title.includes("TOM") || page.title.includes("TOMEK")) {
    return `
      <div class="project-facts tom-facts">
        <div class="fact-item">
          <span class="fact-label">${t.projects.facts.budget}</span>
          <strong class="fact-value">$45M</strong>
        </div>
        <div class="fact-item">
          <span class="fact-label">${t.projects.facts.location}</span>
          <strong class="fact-value">Queensland, Australia</strong>
        </div>
        <div class="fact-item">
          <span class="fact-label">${t.projects.facts.production}</span>
          <strong class="fact-value">${lang === "pl" ? "Ekskluzywne prawa światowe" : "Exclusive World Rights"}</strong>
        </div>
      </div>
    `;
  }

  if (page.title.includes("Kings") || page.title.includes("Królowie")) {
    return `
      <div class="project-facts">
        <div><span>${t.projects.facts.location}</span><strong>London - England / Warsaw - Poland / New York - USA</strong></div>
        <div><span>${t.projects.facts.genre}</span><strong>${lang === "pl" ? "Komediodramat" : "Comedy-drama"}</strong></div>
        <div><span>${t.projects.facts.mission}</span><strong>${lang === "pl" ? "Wsparcie dzieci cierpiących na raka i choroby serca." : "Support needy children suffering from cancer and heart disease."}</strong></div>
      </div>
    `;
  }

  return "";
}

function renderNav() {
  const current = normalizePath(window.location.pathname);
  let html = navItems
    .map((item) => {
      const active = item.path === current ? " active" : "";
      return `<a class="${active}" href="${item.path}" data-link>${item.label}</a>`;
    })
    .join("");

  // Language switcher
  const isPl = lang === "pl";
  const otherLang = isPl ? "EN" : "PL";
  // Logic to switch language while staying on the same logical page
  let otherPath;
  if (isPl) {
    otherPath = current.replace("/pl/", "/");
    if (otherPath === "") otherPath = "/";
  } else {
    otherPath = "/pl" + (current === "/" ? "/" : current);
  }

  html += `<a href="${otherPath}" class="lang-switch" data-link>${otherLang}</a>`;
  nav.innerHTML = html;
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
          <span>${lang === "pl" ? "Warszawa / Londyn" : "Warsaw / London"}</span>
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
        <span class="rec-label">${lang === "pl" ? "NAGR" : "REC"} · 24.000fps</span>
        <span class="hero-meta-sep">/</span>
        <span>${lang === "pl" ? "SCENA" : "SCN"} 01</span>
        <span class="hero-meta-sep">/</span>
        <span>${lang === "pl" ? "DUBL" : "TAKE"} 04</span>
      </div>
      <div class="hero-meta-right" aria-hidden="true">
        <span>${lang === "pl" ? "WARSZAWA" : "WARSAW"}</span><span>·</span><span>${lang === "pl" ? "LONDYN" : "LONDON"}</span><span>·</span><span>LOS ANGELES</span>
      </div>

      <div class="hero-content">
        <span class="eyebrow hero-eyebrow"><span class="eyebrow-line"></span>${t.hero.eyebrow}<span class="eyebrow-line"></span></span>
        <h1 class="hero-title">
          <span class="title-line"><span class="word" style="--d:0ms">${t.hero.title1}</span></span>
          <span class="title-line"><span class="word" style="--d:160ms">${t.hero.title2}</span></span>
        </h1>
        <p class="hero-tag">${t.hero.tag}</p>
        <div class="hero-actions">
          ${link(lang === "pl" ? "/pl/the-kings-of-life/" : "/the-kings-of-life/", t.hero.ctaSlate)}
          ${link(lang === "pl" ? "/pl/about-us/" : "/about-us/", t.hero.ctaStudio, "text-link secondary")}
        </div>
      </div>

      <div class="hero-scroll-indicator"><span>${t.hero.scroll}</span></div>
      <div class="hero-bottom-bar" aria-hidden="true">
        <span>${t.hero.est}</span>
        <span class="dot"></span>
        <span>${t.hero.types}</span>
        <span class="dot"></span>
        <span>SUNSET HILLS MOTION PICTURES</span>
      </div>
    </section>

    ${cinemaTicker()}
    ${lightLeak()}
    ${manifestoSection()}
    ${lexiconSection()}

    <section class="section stats-section" data-reveal>
      <div class="section-header">
        <span class="section-number">01.</span>
        <h2 class="title-cinematic">${t.stats.title}</h2>
      </div>
      <div class="stats-grid">
        <div class="stat-card" data-reveal>
          <span class="stat-num" data-count="${t.stats.items[0].num}">${t.stats.items[0].num}</span><span class="stat-suffix">${t.stats.items[0].suffix}</span>
          <span class="stat-label">${t.stats.items[0].label}</span>
        </div>
        <div class="stat-card" data-reveal>
          <span class="stat-num" data-count="${t.stats.items[1].num}">${t.stats.items[1].num}</span>
          <span class="stat-label">${t.stats.items[1].label}</span>
        </div>
        <div class="stat-card" data-reveal>
          <span class="stat-num" data-count="${t.stats.items[2].num}">${t.stats.items[2].num}</span>
          <span class="stat-label">${t.stats.items[2].label}</span>
        </div>
        <div class="stat-card stat-budget" data-reveal>
          <span class="stat-prefix">${t.stats.items[3].prefix}</span><span class="stat-num" data-count="${t.stats.items[3].num}">${t.stats.items[3].num}</span><span class="stat-suffix">${t.stats.items[3].suffix}</span>
          <span class="stat-label">${t.stats.items[3].label}</span>
        </div>
      </div>
    </section>

    <section class="section capability-showcase editorial-layout" data-reveal>
      <div class="technical-mark"></div>
      <div class="section-header">
        <span class="section-number">02.</span>
        <h2 class="title-blueprint">${t.capabilities.title}</h2>
      </div>
      <div class="capabilities-mosaic">
        ${t.capabilities.items.map((item, i) => `
          <article class="cap-tile" data-reveal>
            <div class="cap-visual"><div class="cap-art cap-art-${["strip", "lens", "map"][i]}" aria-hidden="true"></div></div>
            <div class="cap-content">
              <span class="cap-num">${item.n}</span>
              <h3>${item.t}</h3>
              <p>${item.d}</p>
            </div>
          </article>
        `).join("")}
      </div>
    </section>

    ${lightLeak()}
    ${processTimeline()}
    ${dayOnSet()}
    ${anatomyOfShot()}
    ${aspectRatioLab()}
    ${laurelsSection()}
    ${telegramsSection()}
    ${statusBoard()}
    ${callSheet()}
    ${paletteLookbook()}
    ${budgetAnatomy()}
    ${dropZone()}
    
    <section class="section closing-action" data-reveal>
      <div class="split closing-layout">
        <div class="closing-copy">
          <span class="eyebrow">${t.collaboration.eyebrow}</span>
          <h2 class="title-cinematic">${t.collaboration.title}</h2>
          <p>${t.collaboration.lead}</p>
          <div class="hero-actions">
            ${link(lang === "pl" ? "/pl/contact/" : "/contact/", t.collaboration.ctaContact)}
            ${link(lang === "pl" ? "/pl/production-in-poland/" : "/production-in-poland/", t.collaboration.ctaProduction, "text-link secondary")}
          </div>
        </div>
        <div class="globe-map" aria-hidden="true">
          <div class="globe-rings"><span></span><span></span><span></span></div>
          <div class="globe-marker" style="--x:30%;--y:34%"><span class="pulse"></span><b>${lang === "pl" ? "Warszawa" : "Warsaw"}</b></div>
          <div class="globe-marker" style="--x:24%;--y:38%"><span class="pulse"></span><b>${lang === "pl" ? "Londyn" : "London"}</b></div>
          <div class="globe-marker" style="--x:12%;--y:46%"><span class="pulse"></span><b>Los Angeles</b></div>
          <div class="globe-marker" style="--x:80%;--y:72%"><span class="pulse"></span><b>Sydney</b></div>
        </div>
      </div>
    </section>

    <!-- IMAGE ASSET SECTIONS (PENDING REPLACEMENT) -->
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
          <span class="eyebrow">${t.philosophy.eyebrow}</span>
          <h2 class="title-cinematic title-stroke">${t.philosophy.title}</h2>
          <p class="lead">${t.philosophy.lead}</p>
          <div class="philosophy-tags">
            ${t.philosophy.tags.map(tag => `<span>${tag}</span>`).join("")}
          </div>
          ${link(lang === "pl" ? "/pl/about-us/" : "/about-us/", t.philosophy.cta)}
        </div>
      </div>
    </section>

    <section class="section pull-quote-section" data-reveal>
      <div class="quote-frame">
        <div class="quote-mark" aria-hidden="true">&ldquo;</div>
        <blockquote class="quote-body">
          ${t.quote.body}
        </blockquote>
        <div class="quote-attrib">
          <img src="/public/assets/optimized/portrait-germano.webp" alt="Germano Saracco" loading="lazy" />
          <div>
            <strong>${t.quote.author}</strong>
            <span>${t.quote.role}</span>
          </div>
        </div>
      </div>
    </section>

  `;
}

function renderAbout(page) {
  return `
    ${aboutHero(page)}
    ${aboutIdCard()}
    ${aboutStats()}
    ${lightLeak()}
    ${aboutOrigin()}
    ${aboutFoundersBlock()}
    ${lightLeak()}
    ${aboutBeliefs()}
    ${aboutOffices()}
    ${lightLeak()}
    ${aboutRoster()}
    ${aboutAwards()}
    ${aboutSummary(page.paragraphs)}
  `;
}

function aboutHero(page) {
  const ts = new Date();
  const dateStr = ts.toUTCString().slice(0, 16);
  return `
    <section class="ab-hero" data-reveal>
      <div class="ab-hero-bg" aria-hidden="true">
        <div class="ab-hero-collage">
          <span class="polaroid p1"><img src="/public/assets/optimized/portrait-jack.webp" alt="" loading="lazy"/></span>
          <span class="polaroid p2"><img src="/public/assets/optimized/about-dawn.webp" alt="" loading="lazy"/></span>
          <span class="polaroid p3"><img src="/public/assets/optimized/portrait-germano.webp" alt="" loading="lazy"/></span>
          <span class="polaroid p4"><img src="/public/assets/optimized/kings-wide.webp" alt="" loading="lazy"/></span>
          <span class="polaroid p5"><img src="/public/assets/optimized/tom-cinematic.webp" alt="" loading="lazy"/></span>
        </div>
        <div class="ab-hero-grid"></div>
        <div class="ab-hero-vignette"></div>
      </div>

      <div class="ab-hero-frame" aria-hidden="true">
        <span class="ab-hero-fc tl"></span><span class="ab-hero-fc tr"></span>
        <span class="ab-hero-fc bl"></span><span class="ab-hero-fc br"></span>
      </div>

      <header class="ab-hero-bar">
        <span class="ab-hero-rec"><i></i>REC · 01</span>
        <span class="ab-hero-slug">${lang === "pl" ? "PLEN. STUDIO — DZIEŃ" : "EXT. STUDIO — DAY"}</span>
        <span class="ab-hero-tc">TC&nbsp;01:00:00:01</span>
      </header>

      <div class="ab-hero-content">
        <span class="ab-hero-eyebrow">${page.eyebrow || (lang === "pl" ? "01. O nas" : "01. About Us")}</span>
        <h1 class="ab-hero-title">
          <span>${lang === "pl" ? "Studio" : "A Studio"}</span>
          <span>${lang === "pl" ? "Filmowe" : "Built To"}</span>
          <span>${lang === "pl" ? "Z Wytrwałości" : "Finish Films."}</span>
        </h1>
        <p class="ab-hero-lede">${lang === "pl"
          ? "<strong>Warszawa · Londyn · Los Angeles.</strong> Trzy biura, jedno credo: skończ historię, którą zacząłeś. Od 1991."
          : "<strong>Warsaw · London · Los Angeles.</strong> Three rooms, one credo — finish the story you started. Since 1991."}</p>

        <div class="ab-hero-chips" role="list">
          <span role="listitem"><b>EST.</b> 1991</span>
          <span role="listitem"><b>${lang === "pl" ? "LATA" : "YRS"}</b> 35</span>
          <span role="listitem"><b>${lang === "pl" ? "BIURA" : "OFFICES"}</b> 02</span>
          <span role="listitem"><b>${lang === "pl" ? "FILMY" : "PICTURES"}</b> 09</span>
          <span role="listitem"><b>${lang === "pl" ? "EKIPA" : "CREW"}</b> 280+</span>
          <span role="listitem"><b>${lang === "pl" ? "JĘZYKI" : "LANG."}</b> EN · PL · IT · ES</span>
        </div>

        <div class="ab-hero-foot">
          <a class="ab-hero-cue" href="#ab-id-anchor">${lang === "pl" ? "Otwórz dossier" : "Open the dossier"} <i>↓</i></a>
          <span class="ab-hero-stamp">${dateStr} · STUDIO REPORT</span>
        </div>
      </div>
    </section>
  `;
}

function aboutStats() {
  const items = lang === "pl" ? [
    { num: 35, suf: "+", lbl: "Lat w produkcji", sub: "Hollywood ↔ Warszawa" },
    { num: 9,  suf: "",  lbl: "Filmów fabularnych", sub: "rozwój / produkcja" },
    { num: 2,  suf: "",  lbl: "Stałych biur", sub: "Warszawa · Londyn" },
    { num: 4,  suf: "",  lbl: "Języków produkcji", sub: "EN · PL · IT · ES" },
    { num: 280, suf: "+", lbl: "Wolnych strzelców", sub: "operatorzy · stunt · post" }
  ] : [
    { num: 35, suf: "+", lbl: "Years on set", sub: "Hollywood ↔ Warsaw" },
    { num: 9,  suf: "",  lbl: "Feature films", sub: "in dev / production" },
    { num: 2,  suf: "",  lbl: "Permanent offices", sub: "Warsaw · London" },
    { num: 4,  suf: "",  lbl: "Production languages", sub: "EN · PL · IT · ES" },
    { num: 280, suf: "+", lbl: "Freelancers on call", sub: "DPs · stunt · post" }
  ];
  return `
    <section class="section ab-stats" data-reveal>
      <header class="ab-stats-head">
        <span class="eyebrow">${lang === "pl" ? "Po cyfrach" : "By the numbers"}</span>
        <span class="ab-stats-rule"></span>
        <span class="ab-stats-tag">${lang === "pl" ? "ostatnia aktualizacja · ${dateStr}".replace("${dateStr}", new Date().getFullYear()) : "last updated · " + new Date().getFullYear()}</span>
      </header>
      <div class="ab-stats-row">
        ${items.map((it, i) => `
          <article class="ab-stat" data-reveal style="--i:${i}">
            <span class="ab-stat-num"><b data-count="${it.num}">0</b><i>${it.suf}</i></span>
            <span class="ab-stat-lbl">${it.lbl}</span>
            <span class="ab-stat-sub">${it.sub}</span>
          </article>
        `).join("")}
      </div>
    </section>
  `;
}

function aboutIdCard() {
  const aid = t.about.id;
  return `
    <section class="section ab-id" data-reveal id="ab-id-anchor">
      <article class="ab-id-card">
        <header class="ab-id-head">
          <div class="ab-id-mark" aria-hidden="true">
            <span class="ab-id-bracket tl"></span>
            <span class="ab-id-bracket tr"></span>
            <span class="ab-id-bracket bl"></span>
            <span class="ab-id-bracket br"></span>
            <strong>SH</strong>
          </div>
          <div class="ab-id-titles">
            <span class="ab-id-eyebrow">${aid.eyebrow}</span>
            <h2>${aid.title}</h2>
            <p>${aid.lead}</p>
          </div>
          <div class="ab-id-stamp">${aid.stamp}</div>
        </header>
        <div class="ab-id-meta">
          <div><b>${aid.meta.founded}</b><span>${aid.meta.foundedVal}</span></div>
          <div><b>${aid.meta.offices}</b><span>${aid.meta.officesVal}</span></div>
          <div><b>${aid.meta.slate}</b><span>${aid.meta.slateVal}</span></div>
          <div><b>${aid.meta.staff}</b><span>${aid.meta.staffVal}</span></div>
          <div><b>${aid.meta.copro}</b><span>${aid.meta.coproVal}</span></div>
          <div><b>${aid.meta.motto}</b><span>${aid.meta.mottoVal}</span></div>
        </div>
      </article>
    </section>
  `;
}

function aboutOrigin() {
  const beats = lang === "pl" ? [
    { y: "1991", t: "Założenie", d: "Jacek Wielgopolan otwiera jednoosobowe biuro produkcyjne na Dominikańskiej w Warszawie. Pierwsze zlecenie: dokument o polskim hutnictwie." },
    { y: "1996", t: "Pierwszy film fabularny", d: "Premiera kinowa niezależnego dramatu; studio otrzymuje pierwszy kredyt laboratoryjny w WFDiF." },
    { y: "2006", t: "„The Doubles”", d: "Drugie miejsce za najlepszą komedię akcji w konkursie Stowarzyszenia Kina Polskiego, nagrody Srebrny Bilet." },
    { y: "2014", t: "Biuro w Londynie", d: "Sunset Hills Investments Ltd otwiera siedzibę przy 27 Old Gloucester Street, wspierając europejskie współfinansowanie." },
    { y: "2019", t: "Zielone światło dla Tomka", d: "Wielotomowa kinowa adaptacja „Przygód Tomka” Alfreda Szklarskiego wchodzi w fazę rozwoju. Budżet: 45 mln USD." },
    { y: "2023", t: "Królowie życia", d: "Recenzja Germano Saracco; zdjęcia przenoszą się do preprodukcji. Studio powiększa listę projektów z 4 do 9." },
    { y: "2026", t: "Dzisiaj", d: "Trzy filmy fabularne na aktywnych etapach, osiem czytelni, dwa zarezerwowane studia dźwiękowe, jeden zespół oddany długiej formie." }
  ] : [
    { y: "1991", t: "Founded", d: "Jacek Wielgopolan opens a one-room production office on Dominikańska, Warsaw. First job: a documentary about Polish ironworks." },
    { y: "1996", t: "First Feature", d: "Theatrical release of an independent drama; the studio earns its first lab account at Polish National Film." },
    { y: "2006", t: "&ldquo;The Doubles&rdquo;", d: "Second-place finish for Best Action Comedy at the Association of Polish Cinema, Silver Ticket Awards." },
    { y: "2014", t: "London Office", d: "Sunset Hills Investments Ltd opens at 27 Old Gloucester Street to support European co-financing." },
    { y: "2019", t: "Tom Greenlit", d: "Multi-volume cinematic adaptation of Alfred Szklarski&rsquo;s &ldquo;Adventures of Tom&rdquo; enters development. Budget: $45M." },
    { y: "2023", t: "Kings of Life", d: "Coverage from Germano Saracco; principal photography moves to pre-production. The studio goes from a slate of 4 to a slate of 9." },
    { y: "2026", t: "Today", d: "Three features in active stages, eight reading rooms, two soundstages booked, one team committed to the long form." }
  ];
  return `
    <section class="section ab-origin" data-reveal>
      <div class="section-header">
        <span class="section-number">02.</span>
        <h2 class="title-cinematic">${t.about.origin.title}</h2>
      </div>
      <ol class="ab-origin-list ab-filmstrip">
        ${beats.map((b, i) => `
          <li class="ab-origin-row" data-reveal style="--i:${i}">
            <span class="ab-origin-perf" aria-hidden="true"><i></i><i></i><i></i><i></i></span>
            <span class="ab-origin-frameid">F.${String(i + 1).padStart(3, "0")}</span>
            <span class="ab-origin-year">${b.y}</span>
            <div class="ab-origin-text">
              <strong>${b.t}</strong>
              <span>${b.d}</span>
            </div>
          </li>
        `).join("")}
      </ol>
    </section>
  `;
}

function aboutFoundersBlock() {
  return `
    <section class="section ab-founders" data-reveal>
      <div class="section-header">
        <span class="section-number">03.</span>
        <h2 class="title-cinematic">${t.about.founders.title}</h2>
      </div>
      <div class="people-grid">
        ${personCard("Dawn Jacobs", t.lang === "pl" ? "Dyrektor kreatywna (CCO)" : "CCO of Sunset Hills Motion Pictures, Inc.", people.dawn.paragraphs.slice(0, 2).join(" "), lang === "pl" ? "/pl/dawn-jacobs/" : "/dawn-jacobs/", t.about.founders.readMore, "/public/assets/optimized/about-dawn.webp")}
        ${personCard("Jack Wielgopolan", lang === "pl" ? "Producent · Scenarzysta · Reżyser" : "Producer · Screenwriter · Director", people.jack.paragraphs.join(" "), lang === "pl" ? "/pl/jack-wielgopolan/" : "/jack-wielgopolan/", t.about.founders.readMore, "/public/assets/optimized/portrait-jack.webp")}
      </div>
    </section>
  `;
}

function aboutBeliefs() {
  const beliefs = lang === "pl" ? [
    { n: "01", t: "Historia zasługuje na swój finał.", d: "Nie rozwiązujemy spraw. My je wypracowujemy." },
    { n: "02", t: "Skończone filmy, konkretne plany.", d: "Dziewięć projektów, o które będziemy walczyć, a nie dziewięćdziesiąt, o których zapomnimy." },
    { n: "03", t: "Zatrudniaj mistrzów nad mistrzami.", d: "Polscy szefowie pionów. Hollywoodzka ekipa. Mówią tym samym dialektem: rzemiosłem." },
    { n: "04", t: "Czytaj wszystko.", d: "Każdy scenariusz, który do nas trafia, jest czytany przez człowieka. Każda odpowiedź jest podpisana." },
    { n: "05", t: "Inwestorzy to partnerzy.", d: "Dzielimy się planem pracy, roboczym montażem i arkuszem kalkulacyjnym. Szczególnie arkuszem." },
    { n: "06", t: "Dystrybucja to produkt.", d: "Film bez dystrybucji to prywatne hobby. Sprzedajemy do centrów dowodzenia w LA, Londynie i Warszawie." }
  ] : [
    { n: "01", t: "A story earns its ending.", d: "We don&rsquo;t resolve. We earn." },
    { n: "02", t: "Finite films, finite slates.",     d: "Nine pictures we&rsquo;ll fight for, not ninety we&rsquo;ll forget." },
    { n: "03", t: "Hire the room above the room.",    d: "Polish department heads. Hollywood crew. They speak the same dialect: craft." },
    { n: "04", t: "Read everything.",          d: "Every screenplay that arrives is read by a human. Every reply is signed." },
    { n: "05", t: "Investors are partners.",   d: "We share the call sheet, the rough cut, and the spreadsheet. Especially the spreadsheet." },
    { n: "06", t: "Distribution is the product.", d: "A film without distribution is a private hobby. We sell to win-rooms in LA, London &amp; Warsaw." }
  ];
  return `
    <section class="section ab-beliefs" data-reveal>
      <div class="section-header">
        <span class="section-number">04.</span>
        <h2 class="title-cinematic">${t.about.beliefs.title}</h2>
      </div>
      <div class="ab-belief-grid">
        ${beliefs.map((b) => `
          <article class="ab-belief" data-reveal>
            <span class="ab-belief-num">${b.n}</span>
            <strong>${b.t}</strong>
            <p>${b.d}</p>
          </article>
        `).join("")}
      </div>
    </section>
  `;
}

function aboutOffices() {
  const lbl = t.about.offices.labels;
  return `
    <section class="section ab-offices" data-reveal>
      <div class="section-header">
        <span class="section-number">05.</span>
        <h2 class="title-cinematic">${t.about.offices.title}</h2>
      </div>
      <div class="ab-office-grid">
        <article class="ab-office" data-reveal>
          <header><span class="ab-office-tag">${t.about.offices.hq}</span><strong>WARSZAWA</strong></header>
          <p class="ab-office-addr">ul. Dominikańska 21B<br/>02-738 Warszawa, Polska</p>
          <ul class="ab-office-list">
            <li><b>${lbl.function}</b><span>${lang === "pl" ? "Produkcja · Rozwój · Analizy" : "Production · Development · Coverage"}</span></li>
            <li><b>${lbl.staff}</b><span>${lang === "pl" ? "03 stałych" : "03 permanent"}</span></li>
            <li><b>${lbl.hours}</b><span>09:00 — 19:00 CET</span></li>
            <li><b>${lbl.nearest}</b><span>WFDiF · Studio 3 · 4.2 km</span></li>
          </ul>
        </article>
        <article class="ab-office" data-reveal>
          <header><span class="ab-office-tag">${t.about.offices.branch}</span><strong>LONDYN</strong></header>
          <p class="ab-office-addr">Sunset Hills Investments Ltd<br/>27 Old Gloucester Street<br/>London, WC1N 3AX</p>
          <ul class="ab-office-list">
            <li><b>${lbl.function}</b><span>${lang === "pl" ? "Współfinansowanie · Sprzedaż zagraniczna" : "Co-financing · International sales"}</span></li>
            <li><b>${lbl.staff}</b><span>${lang === "pl" ? "02 stałych" : "02 permanent"}</span></li>
            <li><b>${lbl.hours}</b><span>10:00 — 18:00 GMT</span></li>
            <li><b>${lbl.nearest}</b><span>Pinewood · Stage 7 · 32 km</span></li>
          </ul>
        </article>
      </div>
    </section>
  `;
}

function aboutRoster() {
  const departments = lang === "pl" ? [
    { n: "PRODUCENCI", rows: [["Jack Wielgopolan", "Założyciel · Producent", "1991"], ["Dawn Jacobs", "CCO", "2009"], ["Adam Lebovitz", "Starszy Producent", "2018"]] },
    { n: "ROZWÓJ", rows: [["Marta Kowalczyk", "Szefowa Rozwoju", "2017"], ["A. Nowak", "Redaktor", "2020"]] },
    { n: "CZYTELNIA", rows: [["Dawn Jacobs", "Starsza Lektorka", "2009"], ["Adam Lebovitz", "Lektor", "2018"], ["Marta Kowalczyk", "Lektorka", "2017"]] },
    { n: "ZDJĘCIA (współpracownicy)", rows: [["Germano Saracco", "Operator · Smokin’ Aces", "Przy projekcie"], ["P. Idziak", "Operator · Tomek 1", "Przy projekcie"]] },
    { n: "POSTPRODUKCJA", rows: [["WFDiF", "Partner laboratoryjny", "1991"], ["ATM Studio", "VFX · Kolor", "2014"]] },
    { n: "DYSTRYBUCJA", rows: [["UIP / Warner / Lokalni", "Partnerzy kinowi", "Bieżąca"], ["Agenci sprzedaży", "Londyn i LA", "Bieżąca"]] }
  ] : [
    { n: "PRODUCERS", rows: [["Jack Wielgopolan", "Founder · Producer", "1991"], ["Dawn Jacobs", "CCO", "2009"], ["Adam Lebovitz", "Sr. Producer", "2018"]] },
    { n: "DEVELOPMENT", rows: [["Marta Kowalczyk", "Head of Development", "2017"], ["A. Nowak", "Story Editor", "2020"]] },
    { n: "READING ROOM", rows: [["Dawn Jacobs", "Sr. Reader", "2009"], ["Adam Lebovitz", "Reader", "2018"], ["Marta Kowalczyk", "Reader", "2017"]] },
    { n: "PHOTOGRAPHY (free agents)", rows: [["Germano Saracco", "DP · Smokin&rsquo; Aces", "On project"], ["P. Idziak", "DP · Tom 1", "On project"]] },
    { n: "POST &amp; DELIVERY", rows: [["WFDiF", "Lab partner", "1991"], ["ATM Studio", "VFX · Color", "2014"]] },
    { n: "DISTRIBUTION", rows: [["UIP / Warner / Local", "Theatrical partners", "Rolling"], ["Sales agents", "London &amp; LA", "Rolling"]] }
  ];
  const today = new Date();
  const yyyy = today.getFullYear();
  const mm = String(today.getMonth() + 1).padStart(2, "0");
  const dd = String(today.getDate()).padStart(2, "0");
  return `
    <section class="section ab-roster" data-reveal>
      <div class="section-header">
        <span class="section-number">06.</span>
        <h2 class="title-cinematic">${t.about.roster.title}</h2>
      </div>
      <p class="ab-roster-lead">${t.about.roster.lead}</p>
      <div class="ab-callsheet">
        <header class="ab-callsheet-bar">
          <span><b>${lang === "pl" ? "ARKUSZ POŁĄCZEŃ" : "CALL SHEET"}</b> · ROSTER · 2026</span>
          <span class="ab-callsheet-meta">${dd}.${mm}.${yyyy} · WAW + LDN</span>
          <span class="ab-callsheet-status"><i></i> ${lang === "pl" ? "AKTYWNE" : "ACTIVE"}</span>
        </header>
        <div class="ab-callsheet-cols">
          <span>${lang === "pl" ? "DZIAŁ" : "DEPT."}</span>
          <span>${lang === "pl" ? "NAZWISKO" : "NAME"}</span>
          <span>${lang === "pl" ? "ROLA / ZASŁUGA" : "ROLE / CREDIT"}</span>
          <span>${lang === "pl" ? "OD" : "SINCE"}</span>
        </div>
        <div class="ab-roster-list">
          ${departments.map((d) => `
            <article class="ab-roster-block" data-reveal>
              <h3>${d.n}</h3>
              <ul>
                ${d.rows.map(([name, role, year], i) => `
                  <li style="--i:${i}">
                    <span class="ab-roster-mark" aria-hidden="true"></span>
                    <strong>${name}</strong>
                    <span>${role}</span>
                    <b>${year}</b>
                  </li>
                `).join("")}
              </ul>
            </article>
          `).join("")}
        </div>
      </div>
    </section>
  `;
}

function aboutAwards() {
  const awards = lang === "pl" ? [
    { y: "2006", a: "Srebrny Bilet — Najlepsza komedia akcji (2. miejsce)", t: "The Doubles", o: "Stowarzyszenie Kina Polskiego" },
    { y: "2014", a: "Nagroda Publiczności", t: "Hopeful Notes (koprod.)", o: "Pol. Independent" },
    { y: "2018", a: "Nominacja za zdjęcia", t: "Smokin’ Aces (udział zagr.)", o: "Gold Condor" },
    { y: "2023", a: "Uznanie lektorów", t: "Królowie życia (scenariusz)", o: "G. Saracco · LA" },
    { y: "2025", a: "Oficjalna Selekcja", t: "Królowie życia (w produkcji)", o: "Atlantic City IFF" }
  ] : [
    { y: "2006", a: "Silver Ticket — Best Action Comedy (2nd place)", t: "The Doubles", o: "Association of Polish Cinema" },
    { y: "2014", a: "Audience Award", t: "Hopeful Notes (co-prod.)", o: "Pol. Independent" },
    { y: "2018", a: "Cinematography Nomination", t: "Smokin&rsquo; Aces (intl. credit)", o: "Gold Condor" },
    { y: "2023", a: "Reader&rsquo;s Acclaim", t: "The Kings of Life (script)", o: "G. Saracco · LA" },
    { y: "2025", a: "Official Entry", t: "The Kings of Life (in production)", o: "Atlantic City IFF" }
  ];
  return `
    <section class="section ab-awards" data-reveal>
      <div class="section-header">
        <span class="section-number">07.</span>
        <h2 class="title-cinematic">${t.about.cabinet.title}</h2>
      </div>
      <div class="ab-laurels" aria-hidden="true">
        <span class="ab-laurel-wrap">${laurelSVG(true)}</span>
        <span class="ab-laurels-text">
          <b>${lang === "pl" ? "GABLOTA" : "OFFICIAL"}</b>
          <i>${lang === "pl" ? "Sunset Hills · 1991—2026" : "Sunset Hills · 1991—2026"}</i>
        </span>
        <span class="ab-laurel-wrap">${laurelSVG(false)}</span>
      </div>
      <table class="ab-award-table">
        <thead>
          <tr>${t.about.cabinet.table.map(h => `<th>${h}</th>`).join("")}</tr>
        </thead>
        <tbody>
          ${awards.map((aw) => `
            <tr data-reveal>
              <td class="ab-award-year">${aw.y}</td>
              <td class="ab-award-name">${aw.a}</td>
              <td class="ab-award-title">${aw.t}</td>
              <td class="ab-award-org">${aw.o}</td>
            </tr>
          `).join("")}
        </tbody>
      </table>
    </section>
  `;
}

function laurelSVGUnused() { return ""; }


function aboutSummary(paragraphs) {
  const today = new Date();
  const stamp = today.toUTCString().slice(5, 16);
  return `
    <section class="section ab-summary" data-reveal>
      <div class="section-header">
        <span class="section-number">08.</span>
        <h2 class="title-cinematic">${t.about.summary.title}</h2>
      </div>
      <article class="ab-memo">
        <header class="ab-memo-head">
          <span class="ab-memo-stamp">SH · MEMO 026/${today.getFullYear()}</span>
          <ul class="ab-memo-meta">
            <li><b>${lang === "pl" ? "OD" : "FROM"}</b><span>Sunset Hills Motion Pictures</span></li>
            <li><b>${lang === "pl" ? "DO" : "TO"}</b><span>${lang === "pl" ? "Inwestorów, partnerów, czytelników" : "Investors, partners, readers"}</span></li>
            <li><b>${lang === "pl" ? "DATA" : "DATE"}</b><span>${stamp}</span></li>
            <li><b>${lang === "pl" ? "TEMAT" : "RE"}</b><span>${lang === "pl" ? "Co robimy i jak myślimy" : "What we do, and how we think"}</span></li>
          </ul>
        </header>
        <div class="ab-memo-body">
          ${paragraphs.map((p, i) => `<p class="ab-memo-line" data-reveal style="--i:${i}">${p}</p>`).join("")}
        </div>
        <footer class="ab-memo-foot">
          <span class="ab-memo-sig" aria-hidden="true">
            <svg viewBox="0 0 240 64" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M6 42 C 22 8, 38 60, 60 22 S 102 60, 128 22 S 168 60, 196 28 C 210 22, 220 36, 232 30"
                    stroke="currentColor" stroke-width="2.2" stroke-linecap="round" fill="none"/>
            </svg>
          </span>
          <strong>Jacek Wielgopolan</strong>
          <span>${lang === "pl" ? "Założyciel · Producent" : "Founder · Producer"}</span>
        </footer>
      </article>
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

function renderTom(page) {
  return `
    ${tomHero(page)}
    ${tomSourceMaterial()}
    ${tomStoryboard()}
    ${tomStats()}
    ${lightLeak()}
    ${tomSlate()}
    ${tomAtlas()}
    ${lightLeak()}
    ${tomVolumeOne()}
    ${tomPartners()}
    ${tomCTA()}
  `;
}

const tomVolumes = [
  { vol: "I",   name: { en: "The Kangaroo Kingdom", pl: "W krainie kangurów" }, place: { en: "Queensland · Australia", pl: "Queensland · Australia" }, year: "1910", status: { en: "GREENLIT", pl: "ZIELONE ŚWIATŁO" }, tone: "warm", file: "/public/assets/optimized/tom-main.webp", lat: -22, lng: 144 },
  { vol: "II",  name: { en: "Black Continent",     pl: "Na Czarnym Lądzie" },  place: { en: "Kenya · Tanzania",      pl: "Kenia · Tanzania" },     year: "1911", status: { en: "OPTIONED", pl: "ZAKONTRAKTOWANO" }, tone: "earth", file: "/public/assets/optimized/book-tomek.webp", lat: -1, lng: 36 },
  { vol: "III", name: { en: "The War Path",        pl: "Na wojennej ścieżce" }, place: { en: "Arizona · USA",         pl: "Arizona · USA" },         year: "1912", status: { en: "OPTIONED", pl: "ZAKONTRAKTOWANO" }, tone: "rust", file: "/public/assets/optimized/book-wojnie.webp", lat: 34, lng: -111 },
  { vol: "IV",  name: { en: "Trail of the Yeti",   pl: "Na tropach Yeti" },    place: { en: "Tibet · Nepal",         pl: "Tybet · Nepal" },         year: "1914", status: { en: "DEVELOPMENT", pl: "ROZWÓJ" }, tone: "ice",  file: "/public/assets/optimized/book-yeti.webp", lat: 28, lng: 86 },
  { vol: "V",   name: { en: "The Mysterious Expedition", pl: "Tajemnicza wyprawa" }, place: { en: "Siberia · Russia",  pl: "Syberia · Rosja" },     year: "1916", status: { en: "DEVELOPMENT", pl: "ROZWÓJ" }, tone: "ice",  file: "/public/assets/optimized/book-wyprawa.webp", lat: 62, lng: 105 },
  { vol: "VI",  name: { en: "Among the Headhunters", pl: "Wśród łowców głów" }, place: { en: "Papua · New Guinea",   pl: "Papua-Nowa Gwinea" },    year: "1917", status: { en: "OPTIONED", pl: "ZAKONTRAKTOWANO" }, tone: "warm", file: "/public/assets/optimized/book-glowy.webp", lat: -6, lng: 143 },
  { vol: "VII", name: { en: "Sources of the Amazon", pl: "U źródeł Amazonki" }, place: { en: "Peru · Brazil",        pl: "Peru · Brazylia" },      year: "1919", status: { en: "DEVELOPMENT", pl: "ROZWÓJ" }, tone: "earth", file: "/public/assets/optimized/book-amazonka.webp", lat: -8, lng: -75 },
  { vol: "VIII", name: { en: "In Gran Chaco",       pl: "W Gran Chaco" },       place: { en: "Bolivia · Paraguay",    pl: "Boliwia · Paragwaj" },   year: "1921", status: { en: "CONCEPT", pl: "KONCEPCJA" }, tone: "earth", file: "/public/assets/optimized/book-chaco.webp", lat: -22, lng: -60 },
  { vol: "IX",  name: { en: "Tombs of the Pharaohs", pl: "W grobowcach faraonów" }, place: { en: "Cairo · Egypt",     pl: "Kair · Egipt" },         year: "1923", status: { en: "CONCEPT", pl: "KONCEPCJA" }, tone: "rust",  file: "/public/assets/optimized/book-faraon.webp", lat: 30, lng: 31 }
];

function tomHero(page) {
  const eyebrow = lang === "pl" ? "01 · WYPRAWA · 9 TOMÓW" : "01 · EXPEDITION · 9 VOLUMES";
  const slug = lang === "pl"
    ? "PLEN. AUSTRALIJSKI BUSZ — ŚWIT"
    : "EXT. AUSTRALIAN OUTBACK — DAWN";
  return `
    <section class="tom-hero" data-reveal>
      <div class="tom-hero-bg" aria-hidden="true">
        <img src="/public/assets/optimized/tom-cinematic.webp" alt=""/>
        <div class="tom-hero-tint"></div>
        <div class="tom-hero-grid"></div>
        ${tomCompassSVG()}
        ${tomMeridiansSVG()}
      </div>
      <div class="tom-hero-frame" aria-hidden="true">
        <span class="ab-hero-fc tl"></span><span class="ab-hero-fc tr"></span>
        <span class="ab-hero-fc bl"></span><span class="ab-hero-fc br"></span>
      </div>

      <header class="ab-hero-bar tom-hero-bar">
        <span class="ab-hero-rec"><i></i>REC · 24fps</span>
        <span class="ab-hero-slug">${slug}</span>
        <span class="ab-hero-tc">N 22°00' · E 144°00'</span>
      </header>

      <div class="tom-hero-content">
        <span class="tom-hero-eyebrow">${eyebrow}</span>
        <h1 class="tom-hero-title">
          <span>${lang === "pl" ? "Przygody" : "The"}</span>
          <span class="tom-of-tom">${lang === "pl" ? "Tomka." : "Adventures"}</span>
          <span class="tom-of-tom-2">${lang === "pl" ? "" : "of Tom."}</span>
        </h1>
        <p class="tom-hero-lede">${lang === "pl"
          ? "Dziewięć kontynentów. Dziewięć filmów. Jedna seria, którą Polska czytała przez sześćdziesiąt lat — teraz prosto z buszu Queensland do kin świata."
          : "Nine continents. Nine pictures. One book series that Poland has been reading for sixty years — now from the Queensland bush to cinemas worldwide."}</p>

        <div class="tom-hero-chips">
          <span><b>${lang === "pl" ? "BUDŻET" : "BUDGET"}</b> $45M · ${lang === "pl" ? "VOL. I" : "VOL. I"}</span>
          <span><b>${lang === "pl" ? "TOMY" : "VOLUMES"}</b> IX</span>
          <span><b>${lang === "pl" ? "ŹRÓDŁO" : "SOURCE"}</b> ${lang === "pl" ? "A. SZKLARSKI" : "A. SZKLARSKI"}</span>
          <span><b>${lang === "pl" ? "PARTNER" : "PARTNER"}</b> SCREEN AUSTRALIA</span>
          <span><b>${lang === "pl" ? "PRAWA" : "RIGHTS"}</b> ${lang === "pl" ? "WYŁĄCZNE / ŚWIATOWE" : "EXCLUSIVE / WORLDWIDE"}</span>
        </div>

        <div class="tom-hero-foot">
          <a class="ab-hero-cue" href="#tom-source">${lang === "pl" ? "Otwórz dokumentację" : "Open the dossier"} <i>↓</i></a>
          <span class="ab-hero-stamp">${lang === "pl" ? "DOKUMENTACJA PRODUKCJI · 09" : "PRODUCTION DOSSIER · 09"}</span>
        </div>
      </div>
    </section>
  `;
}

function tomSourceMaterial() {
  return `
    <section class="section tom-source" data-reveal id="tom-source">
      <article class="tom-source-card">
        <header class="tom-source-head">
          <div class="tom-source-mark" aria-hidden="true">
            <span class="ab-id-bracket tl"></span><span class="ab-id-bracket tr"></span>
            <span class="ab-id-bracket bl"></span><span class="ab-id-bracket br"></span>
            <strong>IX</strong>
          </div>
          <div class="tom-source-titles">
            <span class="tom-source-eye">${lang === "pl" ? "FILE · MATERIAŁ ŹRÓDŁOWY · KARTA 002" : "FILE · SOURCE MATERIAL · CARD 002"}</span>
            <h2>${lang === "pl" ? "Alfred Szklarski<br/>i 30 milionów czytelników." : "Alfred Szklarski<br/>and 30 million readers."}</h2>
            <p>${lang === "pl"
              ? "Tomek Wilmowski to polski Indiana Jones — chłopak z Warszawy, który przemierza Australię, Afrykę, Tybet i Amazonkę między 1907 a 1925 rokiem. Dziewięć powieści Szklarskiego (1957–1994) sprzedało się w ponad 30 milionach egzemplarzy i wciąż jest częścią kanonu lektur polskich szkół."
              : "Tom Wilmowski is the Polish Indiana Jones — a Warsaw boy who crosses Australia, Africa, Tibet and the Amazon between 1907 and 1925. Szklarski's nine novels (1957–1994) have sold over 30 million copies and remain on Polish school reading lists."}</p>
          </div>
          <div class="tom-source-stamp">EXCL.<br/>WORLDWIDE</div>
        </header>
        <div class="tom-source-meta">
          <div><b>${lang === "pl" ? "AUTOR" : "AUTHOR"}</b><span>Alfred Szklarski</span></div>
          <div><b>${lang === "pl" ? "PIERWSZE WYDANIE" : "FIRST PRINT"}</b><span>1957 · Warszawa</span></div>
          <div><b>${lang === "pl" ? "TOMY" : "VOLUMES"}</b><span>IX · 1957–1994</span></div>
          <div><b>${lang === "pl" ? "JĘZYKI" : "LANGUAGES"}</b><span>PL · DE · CS · SK · BG</span></div>
          <div><b>${lang === "pl" ? "DRUKI" : "PRINTS"}</b><span>30M+ ${lang === "pl" ? "egzemplarzy" : "copies"}</span></div>
          <div><b>${lang === "pl" ? "PRAWA" : "RIGHTS"}</b><span>${lang === "pl" ? "Sunset Hills · 2019" : "Sunset Hills · 2019"}</span></div>
        </div>
      </article>
    </section>
  `;
}

function tomStats() {
  const items = lang === "pl" ? [
    { num: 9,   suf: "",  lbl: "Tomy do produkcji",   sub: "wyłączna licencja kinowa" },
    { num: 45,  suf: "M", lbl: "Budżet Volume I",     sub: "USD · głównie Australia" },
    { num: 7,   suf: "",  lbl: "Krajów planu",        sub: "AU · KE · PE · NP · EG · BR · PL" },
    { num: 18,  suf: "",  lbl: "Miesiące zdjęć",     sub: "Vol. I — czyli QLD" },
    { num: 30,  suf: "M+", lbl: "Czytelników serii",  sub: "źródło: wydawca" }
  ] : [
    { num: 9,   suf: "",  lbl: "Pictures in slate",   sub: "exclusive theatrical option" },
    { num: 45,  suf: "M", lbl: "Volume I budget",     sub: "USD · primarily Australia" },
    { num: 7,   suf: "",  lbl: "Shoot countries",     sub: "AU · KE · PE · NP · EG · BR · PL" },
    { num: 18,  suf: "",  lbl: "Months on Vol. I",    sub: "Queensland principal" },
    { num: 30,  suf: "M+", lbl: "Readers · source IP", sub: "publisher figures" }
  ];
  return `
    <section class="section ab-stats tom-stats" data-reveal>
      <header class="ab-stats-head">
        <span class="eyebrow">${lang === "pl" ? "Skala wyprawy" : "Scale of the expedition"}</span>
        <span class="ab-stats-rule"></span>
        <span class="ab-stats-tag">${lang === "pl" ? "stan na · " + new Date().getFullYear() : "as of · " + new Date().getFullYear()}</span>
      </header>
      <div class="ab-stats-row">
        ${items.map((it, i) => `
          <article class="ab-stat" data-reveal style="--i:${i}">
            <span class="ab-stat-num"><b data-count="${it.num}">0</b><i>${it.suf}</i></span>
            <span class="ab-stat-lbl">${it.lbl}</span>
            <span class="ab-stat-sub">${it.sub}</span>
          </article>
        `).join("")}
      </div>
    </section>
  `;
}

function tomSlate() {
  return `
    <section class="section tom-slate" data-reveal>
      <div class="section-header">
        <span class="section-number">03.</span>
        <h2 class="title-cinematic">${lang === "pl" ? "Dziewięć obrazów" : "The Nine-Picture Slate"}</h2>
      </div>
      <p class="tom-slate-lead">${lang === "pl"
        ? "Każdy tom — jedna pełnometrażowa adaptacja. Każda adaptacja — własna scenografia, własny kontynent. Po Volume I, kolejność wynika z możliwości produkcyjnych, a nie kalendarza wydawniczego."
        : "One volume — one feature. Each picture has its own continent and its own department. After Volume I, the order follows what production allows, not the publishing calendar."}</p>
      <div class="tom-slate-grid">
        ${tomVolumes.map((v, i) => `
          <article class="tom-vol tom-tone-${v.tone}" data-reveal style="--i:${i}" id="tom-vol-${v.vol}">
            <header class="tom-vol-head">
              <span class="tom-vol-num">VOL. ${v.vol}</span>
              <span class="tom-vol-status status-${v.status.en.toLowerCase().replace(/\s+/g, '-')}">${v.status[lang]}</span>
            </header>
            <div class="tom-vol-art">
              <img src="${v.file}" alt="" loading="lazy"/>
              <div class="tom-vol-shade"></div>
            </div>
            <div class="tom-vol-body">
              <h3>${v.name[lang]}</h3>
              <ul class="tom-vol-meta">
                <li><b>${lang === "pl" ? "Plener" : "Setting"}</b><span>${v.place[lang]}</span></li>
                <li><b>${lang === "pl" ? "Rok akcji" : "Year"}</b><span>${v.year}</span></li>
              </ul>
            </div>
            <span class="tom-vol-cta">${lang === "pl" ? "treatment" : "request treatment"} <i>→</i></span>
          </article>
        `).join("")}
      </div>
    </section>
  `;
}

function tomAtlas() {
  // Project lat/lng to a simple equirectangular SVG (viewBox 0 0 1000 500)
  const proj = (lat, lng) => ({
    x: ((lng + 180) / 360) * 1000,
    y: ((90 - lat) / 180) * 500
  });
  return `
    <section class="section tom-atlas" data-reveal>
      <div class="section-header">
        <span class="section-number">04.</span>
        <h2 class="title-cinematic">${lang === "pl" ? "Atlas wypraw" : "The Expedition Atlas"}</h2>
      </div>
      <div class="tom-atlas-frame">
        <header class="tom-atlas-bar">
          <span><b>SHEET</b> · 09 / IX</span>
          <span class="tom-atlas-eq">EQUIRECTANGULAR · WGS-84</span>
          <span class="tom-atlas-scale">SCALE · 1 : 80,000,000</span>
        </header>
        <svg class="tom-atlas-svg" viewBox="0 0 1000 500" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
          <defs>
            <pattern id="tom-grid" width="50" height="50" patternUnits="userSpaceOnUse">
              <path d="M 50 0 L 0 0 0 50" fill="none" stroke="rgba(245,235,215,0.08)" stroke-width="0.6"/>
            </pattern>
          </defs>
          <rect width="1000" height="500" fill="url(#tom-grid)"/>
          <!-- Equator + Tropics -->
          <line x1="0" y1="250" x2="1000" y2="250" stroke="rgba(209,32,37,0.32)" stroke-width="0.8" stroke-dasharray="4 6"/>
          <line x1="0" y1="186" x2="1000" y2="186" stroke="rgba(245,235,215,0.18)" stroke-width="0.5" stroke-dasharray="2 6"/>
          <line x1="0" y1="314" x2="1000" y2="314" stroke="rgba(245,235,215,0.18)" stroke-width="0.5" stroke-dasharray="2 6"/>
          <!-- Stylised continent silhouettes -->
          <g fill="rgba(245,235,215,0.1)" stroke="rgba(245,235,215,0.32)" stroke-width="0.8">
            <path d="M 110 90 Q 150 70 230 90 Q 320 100 360 160 Q 380 210 320 240 Q 240 250 200 220 Q 160 200 130 170 Q 95 130 110 90 Z"/>
            <path d="M 460 110 Q 540 90 600 130 Q 640 170 620 220 Q 580 260 520 250 Q 470 230 460 180 Z"/>
            <path d="M 470 240 Q 520 230 560 270 Q 590 320 560 380 Q 520 420 480 410 Q 450 380 460 320 Z"/>
            <path d="M 700 60 Q 800 40 880 80 Q 920 130 880 200 Q 820 240 760 220 Q 700 180 700 60 Z"/>
            <path d="M 240 320 Q 290 300 340 330 Q 360 380 320 420 Q 270 440 230 410 Z"/>
            <path d="M 820 290 Q 880 280 920 320 Q 940 380 880 410 Q 830 410 800 360 Z"/>
            <path d="M 660 310 Q 690 300 720 320 Q 720 360 690 360 Q 660 350 660 310 Z"/>
          </g>
          ${tomVolumes.map((v) => {
            const { x, y } = proj(v.lat, v.lng);
            return `
              <a class="tom-pin" href="#tom-vol-${v.vol}" data-tom-pin="${v.vol}" transform="translate(${x.toFixed(1)} ${y.toFixed(1)})" aria-label="VOL. ${v.vol} — ${v.place[lang]}">
                <circle class="tom-pin-pulse" r="14"/>
                <circle class="tom-pin-hit" r="20" fill="transparent"/>
                <circle class="tom-pin-dot" r="5"/>
                <text x="10" y="-8" class="tom-pin-label">VOL. ${v.vol}</text>
              </a>
            `;
          }).join("")}
        </svg>
        <ul class="tom-atlas-legend">
          ${tomVolumes.map((v) => `
            <li>
              <a href="#tom-vol-${v.vol}" data-tom-pin="${v.vol}">
                <b>VOL. ${v.vol}</b>
                <span>${v.place[lang]}</span>
                <i>${v.status[lang]}</i>
              </a>
            </li>
          `).join("")}
        </ul>
      </div>
    </section>
  `;
}

function tomVolumeOne() {
  return `
    <section class="section tom-volone" data-reveal>
      <div class="section-header">
        <span class="section-number">05.</span>
        <h2 class="title-cinematic">${lang === "pl" ? "Volume I — pierwszy obraz" : "Volume I — First Picture"}</h2>
      </div>
      <article class="tom-volone-card">
        <div class="tom-volone-poster">
          <img src="/public/assets/optimized/tom-main.webp" alt="${lang === "pl" ? "Przygody Tomka" : "The Adventures of Tom"}" loading="lazy"/>
          <div class="tom-volone-poster-bar">
            <span>VOL. I</span>
            <span class="tom-volone-rating">PG · ${lang === "pl" ? "FAMILY · ADVENTURE" : "FAMILY · ADVENTURE"}</span>
          </div>
        </div>
        <div class="tom-volone-body">
          <span class="tom-volone-eye">${lang === "pl" ? "PIERWSZA ADAPTACJA · ZIELONE ŚWIATŁO" : "FIRST ADAPTATION · GREENLIT"}</span>
          <h3>${lang === "pl" ? "Tomek w Krainie Kangurów" : "Tom in the Kangaroo Kingdom"}</h3>
          <p class="tom-volone-logline">${lang === "pl"
            ? "Warszawa, 1907. Czternastoletni Tomek opuszcza zaborowy dom, by w australijskim buszu odnaleźć ojca-wygnańca i odkryć, że wolność pachnie kurzem, akacją i ogniem obozowym."
            : "Warsaw, 1907. A fourteen-year-old leaves a partitioned home to find his exiled father in the Australian bush — and learns that freedom smells of dust, acacia and campfire smoke."}</p>
          <ul class="tom-volone-facts">
            <li><b>${lang === "pl" ? "Plener" : "Setting"}</b><span>Queensland · ${lang === "pl" ? "Australia · 1907" : "Australia · 1907"}</span></li>
            <li><b>${lang === "pl" ? "Budżet" : "Budget"}</b><span>$45,000,000</span></li>
            <li><b>${lang === "pl" ? "Czas trwania" : "Runtime"}</b><span>${lang === "pl" ? "ok. 122 min" : "ca. 122 min"}</span></li>
            <li><b>${lang === "pl" ? "Język" : "Language"}</b><span>${lang === "pl" ? "EN · PL (dub)" : "EN · PL (dub)"}</span></li>
            <li><b>${lang === "pl" ? "Partner" : "Partner"}</b><span>Screen Australia</span></li>
            <li><b>${lang === "pl" ? "Kierunek" : "Path"}</b><span>${lang === "pl" ? "Cannes · TIFF · Sundance" : "Cannes · TIFF · Sundance"}</span></li>
          </ul>
          <div class="tom-volone-threats">
            <span class="tom-volone-threat-head">${lang === "pl" ? "ZAGROŻENIA NA EKRANIE" : "ON-SCREEN HAZARDS"}</span>
            <ul>
              <li>${lang === "pl" ? "kangury skoczne" : "red kangaroos"}</li>
              <li>${lang === "pl" ? "krokodyl morski" : "saltwater crocodile"}</li>
              <li>${lang === "pl" ? "pożary buszu" : "bush fires"}</li>
              <li>${lang === "pl" ? "kara łowców" : "frontier law"}</li>
              <li>${lang === "pl" ? "wąż tygrysi" : "tiger snake"}</li>
            </ul>
          </div>
        </div>
      </article>
    </section>
  `;
}

function tomPartners() {
  const partners = lang === "pl" ? [
    { tag: "WSPÓŁPRODUKCJA · AU", name: "Screen Australia", note: "Film Institute · Sydney" },
    { tag: "WSPÓŁPRODUKCJA · PL", name: "Polski Instytut Sztuki Filmowej", note: "Warszawa" },
    { tag: "DYSTRYBUCJA · WORLD", name: "UIP · Lokalni partnerzy", note: "Los Angeles · Londyn" },
    { tag: "PRAWA AUTORSKIE", name: "Estate · A. Szklarski", note: "Warszawa" },
    { tag: "POSTPRODUKCJA", name: "WFDiF · ATM Studio", note: "Warszawa · 4K HDR" }
  ] : [
    { tag: "CO-PRODUCTION · AU", name: "Screen Australia", note: "Film Institute · Sydney" },
    { tag: "CO-PRODUCTION · PL", name: "Polish Film Institute", note: "Warsaw · PISF" },
    { tag: "DISTRIBUTION · WORLD", name: "UIP · Local partners", note: "Los Angeles · London" },
    { tag: "LITERARY ESTATE", name: "Estate of A. Szklarski", note: "Warsaw" },
    { tag: "POST &amp; FINISHING", name: "WFDiF · ATM Studio", note: "Warsaw · 4K HDR" }
  ];
  return `
    <section class="section tom-partners" data-reveal>
      <div class="section-header">
        <span class="section-number">06.</span>
        <h2 class="title-cinematic">${lang === "pl" ? "Partnerzy zaangażowani" : "Partners Engaged"}</h2>
      </div>
      <div class="tom-partners-grid">
        ${partners.map((p, i) => `
          <article class="tom-partner" data-reveal style="--i:${i}">
            <span class="tom-partner-tag">${p.tag}</span>
            <strong>${p.name}</strong>
            <span class="tom-partner-note">${p.note}</span>
            <span class="tom-partner-stamp" aria-hidden="true">CONFIRMED</span>
          </article>
        `).join("")}
      </div>
    </section>
  `;
}

function tomCTA() {
  return `
    <section class="section tom-cta" data-reveal>
      <div class="tom-cta-card">
        <div class="tom-cta-corner" aria-hidden="true"></div>
        <div class="tom-cta-text">
          <span class="tom-cta-eye">${lang === "pl" ? "DLA INWESTORÓW · DYSTRYBUTORÓW · KORESPONDENCJI" : "FOR INVESTORS · DISTRIBUTORS · PRESS"}</span>
          <h2>${lang === "pl" ? "Poproś o treatment Volume I." : "Request the Volume I treatment."}</h2>
          <p>${lang === "pl"
            ? "Otrzymaj 20-stronicowy treatment, lookbook plenerów Queensland i arkusz harmonogramu produkcji. Wysyłamy bezpośrednio z biura w Warszawie po podpisaniu zwykłego NDA."
            : "Receive a 20-page treatment, the Queensland location lookbook, and the principal-photography schedule sheet. Sent directly from our Warsaw office after a standard NDA."}</p>
        </div>
        <div class="tom-cta-actions">
          <a class="tom-cta-btn primary" href="mailto:cool@world.pl?subject=Tom%20Vol%20I%20%E2%80%94%20Treatment%20Request">${lang === "pl" ? "Wyślij zapytanie" : "Send the request"} <i>→</i></a>
          <a class="tom-cta-btn ghost" href="${lang === "pl" ? "/pl/contact/" : "/contact/"}" data-link>${lang === "pl" ? "Skontaktuj się" : "Open contact"}</a>
        </div>
        <ul class="tom-cta-meta">
          <li><b>${lang === "pl" ? "BIURO" : "OFFICE"}</b><span>Warszawa · ul. Dominikańska 21B</span></li>
          <li><b>${lang === "pl" ? "TELEFON" : "PHONE"}</b><span>+48 606 400 500</span></li>
          <li><b>${lang === "pl" ? "ODPOWIEDŹ" : "REPLY"}</b><span>${lang === "pl" ? "≤ 5 dni roboczych" : "≤ 5 business days"}</span></li>
        </ul>
      </div>
    </section>
  `;
}

function tomCompassSVG() {
  return `
    <svg class="tom-compass" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <g fill="none" stroke="currentColor" stroke-width="0.7">
        <circle cx="100" cy="100" r="95"/>
        <circle cx="100" cy="100" r="78"/>
        <circle cx="100" cy="100" r="60"/>
        <circle cx="100" cy="100" r="6" fill="currentColor"/>
      </g>
      <g stroke="currentColor" stroke-width="0.5" opacity="0.6">
        ${Array.from({ length: 36 }, (_, i) => {
          const a = (i * 10) * Math.PI / 180;
          const x1 = 100 + Math.cos(a) * 78;
          const y1 = 100 + Math.sin(a) * 78;
          const x2 = 100 + Math.cos(a) * (i % 9 === 0 ? 95 : 86);
          const y2 = 100 + Math.sin(a) * (i % 9 === 0 ? 95 : 86);
          return `<line x1="${x1.toFixed(1)}" y1="${y1.toFixed(1)}" x2="${x2.toFixed(1)}" y2="${y2.toFixed(1)}"/>`;
        }).join("")}
      </g>
      <g class="tom-compass-needle">
        <polygon points="100,30 95,100 105,100" fill="currentColor"/>
        <polygon points="100,170 95,100 105,100" fill="rgba(245,235,215,0.5)"/>
      </g>
      <text x="100" y="20" text-anchor="middle" fill="currentColor" font-family="IBM Plex Mono" font-size="10" letter-spacing="2">N</text>
      <text x="100" y="190" text-anchor="middle" fill="currentColor" font-family="IBM Plex Mono" font-size="10" letter-spacing="2">S</text>
      <text x="14"  y="104" fill="currentColor" font-family="IBM Plex Mono" font-size="10" letter-spacing="2">W</text>
      <text x="180" y="104" fill="currentColor" font-family="IBM Plex Mono" font-size="10" letter-spacing="2">E</text>
    </svg>
  `;
}

function tomMeridiansSVG() {
  return `
    <svg class="tom-meridians" viewBox="0 0 800 600" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <g fill="none" stroke="rgba(245,235,215,0.12)" stroke-width="0.8">
        <path d="M 0 300 Q 200 150 400 300 Q 600 450 800 300"/>
        <path d="M 0 200 Q 200 50 400 200 Q 600 350 800 200"/>
        <path d="M 0 400 Q 200 250 400 400 Q 600 550 800 400"/>
        <ellipse cx="400" cy="300" rx="380" ry="100"/>
        <ellipse cx="400" cy="300" rx="320" ry="60"/>
      </g>
    </svg>
  `;
}

function renderProject(page) {
  const bg = page.title.includes("TOM") || page.title.includes("TOMEK") ? "bg-tom" : "bg-kings";
  return `
    ${renderPageHero(page, bg)}
    ${cinemaTicker()}
    <section class="section split project-intro">
      ${mediaFrame((page.title.includes("TOM") || page.title.includes("TOMEK")) ? "/public/assets/optimized/tom-main.webp" : "/public/assets/optimized/kings-catalog.webp", page.title, "poster-placeholder hero-poster")}
      <div class="copy-stack dossier-copy">
        ${projectFacts(page)}
        ${paragraphs(page.paragraphs)}
      </div>
    </section>
    ${
      (page.title.includes("TOM") || page.title.includes("TOMEK"))
        ? `<section class="section book-section"><div class="section-header"><span class="section-number">02.</span><h2>${lang === "pl" ? "Prawa zastrzeżone przez Sunset Hills Motion Pictures" : "Rights reserved by Sunset Hills Motion Pictures"}</h2></div><a href="https://drive.google.com/file/d/1cW3f-zy3aPVO_ybidLUMRk6VBu6EtoSy/view" target="_blank" rel="noopener noreferrer">${mediaFrame("/public/assets/optimized/tom-cinematic.webp", lang === "pl" ? "PRZYGODY TOMKA" : "THE ADVENTURES OF TOM", "media-placeholder image-band cinematic-band editorial-media")}</a><div class="book-grid">${tomBooks.map(([label, src], index) => `<div class="book-item"><span>${String(index + 1).padStart(2, "0")}</span>${mediaFrame(src, label, "poster-placeholder", "contain book-cover")}</div>`).join("")}</div></section>`
        : ""
    }
  `;
}

function renderProjectPlaceholder(page) {
  return `
    ${renderPageHero(page, "bg-butterflies")}
    ${cinemaTicker()}
    <section class="section">
      ${videoFrame("/public/assets/butterflies-drive-download.mp4", lang === "pl" ? "Tam, gdzie latają motyle" : "Where the butterflies fly", "media-placeholder image-band cinema-video", "contain")}
    </section>
  `;
}

function renderButterflies(page) {
  return `
    ${butterfliesHero(page)}
    ${butterfliesTeaser()}
    ${butterfliesClassified()}
    ${butterfliesStats()}
    ${lightLeak()}
    ${butterfliesTreatment()}
    ${butterfliesAuthorsNote()}
    ${butterfliesMood()}
    ${lightLeak()}
    ${butterfliesSetting()}
    ${butterfliesSoundtrack()}
    ${butterfliesComparables()}
    ${butterfliesSymbolism()}
    ${butterfliesCrew()}
    ${butterfliesLyric()}
    ${butterfliesCTA()}
  `;
}

function butterfliesHero() {
  const dateStr = new Date().toUTCString().slice(5, 16);
  return `
    <section class="bf-hero" data-reveal>
      <div class="bf-hero-bg" aria-hidden="true">
        <video autoplay muted loop playsinline preload="metadata" poster="/public/assets/optimized/poster.jpg">
          <source src="/public/assets/butterflies-drive-download.mp4" type="video/mp4">
        </video>
        <div class="bf-hero-tint"></div>
      </div>

      <div class="bf-flutter" aria-hidden="true">
        ${butterflySVG("bf-fly-1")}
        ${butterflySVG("bf-fly-2")}
        ${butterflySVG("bf-fly-3")}
        ${butterflySVG("bf-fly-4")}
      </div>

      <div class="tom-hero-frame" aria-hidden="true">
        <span class="ab-hero-fc tl"></span><span class="ab-hero-fc tr"></span>
        <span class="ab-hero-fc bl"></span><span class="ab-hero-fc br"></span>
      </div>

      <header class="ab-hero-bar bf-hero-bar">
        <span class="ab-hero-rec"><i></i>REC · DEV</span>
        <span class="ab-hero-slug">${lang === "pl" ? "WN. MOTEL POD HOLLYWOOD — DESZCZ" : "INT. SUBURBAN MOTEL — RAIN"}</span>
        <span class="ab-hero-tc">PROJECT · BUTTERFLY · 04</span>
      </header>

      <div class="bf-hero-content">
        <span class="bf-hero-eyebrow">${lang === "pl" ? "04 · MELODRAMAT · POUFNE" : "04 · MELODRAMA · CONFIDENTIAL"}</span>
        <h1 class="bf-hero-title">
          <span>${lang === "pl" ? "Tam," : "Where"}</span>
          <span class="bf-italic">${lang === "pl" ? "gdzie latają" : "the butterflies"}</span>
          <span>${lang === "pl" ? "motyle." : "fly."}</span>
        </h1>
        <p class="bf-hero-lede">${lang === "pl"
          ? "Hollywood. Mały motel na przedmieściach. Młody scenarzysta, gwiazda na okładkach i sześć utworów Queen na ścieżce dźwiękowej. Melodramat o miłości, której się nie przeżyło — opowiedziany przez autora ukrytego między kadrami."
          : "Hollywood. A small suburban motel. A young screenwriter, a face from every magazine cover, and six Queen tracks on the score. A melodrama about a love never lived — narrated by an author hiding between the frames."}</p>

        <div class="bf-hero-chips">
          <span><b>${lang === "pl" ? "GATUNEK" : "GENRE"}</b> ${lang === "pl" ? "Melodramat / Romans" : "Melodrama / Romance"}</span>
          <span><b>${lang === "pl" ? "PLENER" : "SETTING"}</b> Hollywood + Motel</span>
          <span><b>${lang === "pl" ? "MUZYKA" : "SCORE"}</b> ${lang === "pl" ? "Queen — 6 utworów" : "Queen — 6 tracks"}</span>
          <span><b>${lang === "pl" ? "AUTOR" : "STORY BY"}</b> Jacek Wielgopolan</span>
          <span><b>${lang === "pl" ? "STATUS" : "STATUS"}</b> ${lang === "pl" ? "Rozwój / Stadium 03" : "Development / Stage 03"}</span>
        </div>

        <div class="bf-hero-foot">
          <a class="ab-hero-cue" href="#bf-teaser">${lang === "pl" ? "Obejrzyj zwiastun" : "Watch the teaser"} <i>↓</i></a>
          <span class="ab-hero-stamp">${dateStr} · ${lang === "pl" ? "MEMO POUFNE" : "CONFIDENTIAL MEMO"}</span>
        </div>
      </div>
    </section>
  `;
}

function butterflySVG(cls) {
  return `
    <svg class="bf-fly ${cls}" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <g fill="rgba(245,180,180,0.85)" stroke="rgba(180,90,90,0.7)" stroke-width="0.6">
        <path class="bf-wing-l" d="M30 30 C 12 8, 4 18, 8 32 C 12 44, 24 38, 30 30 Z"/>
        <path class="bf-wing-r" d="M30 30 C 48 8, 56 18, 52 32 C 48 44, 36 38, 30 30 Z"/>
        <path class="bf-wing-l-b" d="M30 30 C 18 38, 12 50, 22 52 C 28 52, 30 42, 30 30 Z"/>
        <path class="bf-wing-r-b" d="M30 30 C 42 38, 48 50, 38 52 C 32 52, 30 42, 30 30 Z"/>
      </g>
      <g fill="rgba(40,30,40,0.95)">
        <ellipse cx="30" cy="30" rx="1.6" ry="14"/>
      </g>
    </svg>
  `;
}

function butterfliesClassified() {
  return `
    <section class="section bf-classified" data-reveal id="bf-classified">
      <article class="bf-classified-card">
        <header class="bf-classified-bar">
          <span><b>FILE</b> · WTBF · CARD-001</span>
          <span class="bf-classified-eq">${lang === "pl" ? "POZIOM POUFNOŚCI · CZERWONY" : "CLEARANCE · RED"}</span>
          <span class="bf-classified-stamp">${lang === "pl" ? "TYLKO NA ZAPROSZENIE" : "INVITE ONLY"}</span>
        </header>
        <div class="bf-classified-body">
          <span class="bf-classified-eye">${lang === "pl" ? "TREATMENT · WYCIĄG (CZĘŚĆ I)" : "TREATMENT · EXCERPT (PART I)"}</span>
          <p class="bf-classified-text">${lang === "pl"
            ? "Współczesne <b>Hollywood</b>. <b>Jack</b>, 29-letni scenarzysta, zostaje zauważony przez producentów po debiucie. Dostają mu szansę na film reżyserowany przez legendarnego <b>Stanleya Silverberga</b>, 65, z możliwością wyboru aktorki głównej. Jack obsadza w niej <b>Helen Thorne</b>, 35 — najjaśniejszą gwiazdę pierwszej strony — i stawia warunek, którego od gwiazdy nikt nie żąda: <span class=\"bf-redact\">[USUNIĘTO — KLAUZULA NDA]</span> ma zamieszkać z nim w skromnym motelu na przedmieściach na cały czas pisania scenariusza. <span class=\"bf-redact\">[USUNIĘTO — 2 LINIE]</span> To, co zaczyna się jako antagonizm dwóch obcych ludzi, staje się powolnym ogniem, którego żadne z nich nie planowało. A nad wszystkim — palce nieznanego autora, stukające w klawiaturę gdzieś w głębi opowieści."
            : "Contemporary <b>Hollywood</b>. <b>Jack</b>, a 29-year-old screenwriter, is spotted by producers after his debut. They offer him a picture to be directed by legendary <b>Stanley Silverberg</b>, 65 — and let him choose the lead. Jack casts <b>Helen Thorne</b>, 35 — the front-cover face of the year — and attaches a condition no one ever attaches to a star: <span class=\"bf-redact\">[REDACTED — NDA CLAUSE]</span> she must move into a modest suburban motel and live there with him for as long as it takes to write the script. <span class=\"bf-redact\">[REDACTED — 2 LINES]</span> What begins as the antagonism of two complete strangers becomes a slow burn neither of them planned for — and above it all, the fingers of an unseen author, tapping at a keyboard somewhere deep inside the story."}</p>
        </div>
        <footer class="bf-classified-foot">
          <span>${lang === "pl" ? "Dalszy ciąg, w tym zakończenie-labirynt, dostępny po podpisaniu NDA." : "The continuation — including the labyrinth ending — available after a signed NDA."}</span>
          <span class="bf-classified-fingerprint" aria-hidden="true">FP · 7C-A19-44</span>
        </footer>
      </article>
    </section>
  `;
}

function butterfliesStats() {
  const items = lang === "pl" ? [
    { num: 3,   suf: "",  lbl: "Główne postacie",    sub: "Jack · Helen · Matthew" },
    { num: 6,   suf: "",  lbl: "Utworów Queen",      sub: "Mercury & Caballé" },
    { num: 1,   suf: "",  lbl: "Reżyser w roli",     sub: "Stanley Silverberg, 65" },
    { num: 35,  suf: "",  lbl: "Wiek Helen Thorne",  sub: "gwiazda pierwszej strony" },
    { num: 1,   suf: "",  lbl: "Skromny motel",      sub: "serce filmu" }
  ] : [
    { num: 3,   suf: "",  lbl: "Lead characters",    sub: "Jack · Helen · Matthew" },
    { num: 6,   suf: "",  lbl: "Queen tracks",       sub: "Mercury & Caballé" },
    { num: 1,   suf: "",  lbl: "Director on screen", sub: "Stanley Silverberg, 65" },
    { num: 35,  suf: "",  lbl: "Helen Thorne, age",  sub: "the front-cover face" },
    { num: 1,   suf: "",  lbl: "Modest motel",       sub: "the heart of the picture" }
  ];
  return `
    <section class="section ab-stats bf-stats" data-reveal>
      <header class="ab-stats-head">
        <span class="eyebrow">${lang === "pl" ? "Skala — w zarysie" : "Scale — in outline"}</span>
        <span class="ab-stats-rule"></span>
        <span class="ab-stats-tag">${lang === "pl" ? "stan na · " + new Date().getFullYear() : "as of · " + new Date().getFullYear()}</span>
      </header>
      <div class="ab-stats-row bf-stats-row">
        ${items.map((it, i) => `
          <article class="ab-stat" data-reveal style="--i:${i}">
            <span class="ab-stat-num"><b data-count="${it.num}">0</b><i>${it.suf}</i></span>
            <span class="ab-stat-lbl">${it.lbl}</span>
            <span class="ab-stat-sub">${it.sub}</span>
          </article>
        `).join("")}
      </div>
    </section>
  `;
}

function butterfliesTreatment() {
  return `
    <section class="section bf-treatment" data-reveal>
      <div class="section-header">
        <span class="section-number">03.</span>
        <h2 class="title-cinematic">${lang === "pl" ? "Trzy<br/>Akty" : "Three<br/>Acts"}</h2>
      </div>
      <div class="bf-acts">
        ${[
          {
            n: "I",
            ttl: lang === "pl" ? "Zielone Światło" : "The Greenlight",
            sub: lang === "pl" ? "Hollywood · biuro producenta · poniedziałek" : "Hollywood · producer's office · Monday",
            txt: lang === "pl"
              ? "Jack, 29 lat, dostaje zlecenie życia: napisać scenariusz dla samego Stanleya Silverberga. Producenci zostawiają mu jedną decyzję — wybór aktorki. On wybiera Helen Thorne i stawia warunek, którego nikt nigdy nie postawił gwieździe."
              : "Jack, 29, lands the assignment of a lifetime — write a script for Stanley Silverberg himself. The producers leave him one decision: cast the lead. He picks Helen Thorne, and attaches a condition no one has ever attached to a star."
          },
          {
            n: "II",
            ttl: lang === "pl" ? "Motel" : "The Motel",
            sub: lang === "pl" ? "Przedmieścia · pokój 7 · długie noce" : "Suburbs · Room 7 · long nights",
            txt: lang === "pl"
              ? "Dwoje obcych w jednym małym mieszkaniu. Antagonizm. Cisza. Maszyna do pisania. Powoli — najpierw ostrożność, potem zaufanie, potem coś, czego żadne z nich nie planowało. Helen czasem przypomina Jackowi, że jest dla niej nikim. Jack pisze dalej."
              : "Two strangers, one small apartment. Antagonism. Silence. A typewriter. Slowly — first wariness, then trust, then a thing neither of them planned for. Helen reminds Jack at intervals that he is no one to her. Jack keeps writing."
          },
          {
            n: "III",
            ttl: lang === "pl" ? "Cień Autora" : "The Shadow Author",
            sub: lang === "pl" ? "Świt · ostatni kadr · zakończenie-labirynt" : "Dawn · final frame · the labyrinth",
            txt: lang === "pl"
              ? "<span class=\"bf-redact bf-redact-lg\">[USUNIĘTO — ZAKOŃCZENIE · NDA] Czy Jack to Matthew? Czy nam się to wszystko śniło?</span>"
              : "<span class=\"bf-redact bf-redact-lg\">[REDACTED — ENDING · NDA] Was Jack actually Matthew? Did we just dream all of it?</span>"
          }
        ].map((a, i) => `
          <article class="bf-act" data-reveal style="--i:${i}">
            <header>
              <span class="bf-act-num">${a.n}</span>
              <div>
                <h3>${a.ttl}</h3>
                <span class="bf-act-sub">${a.sub}</span>
              </div>
            </header>
            <p>${a.txt}</p>
          </article>
        `).join("")}
      </div>
    </section>
  `;
}

function butterfliesMood() {
  const frames = [
    { id: "SC.003", note: lang === "pl" ? "biuro producenta" : "producer's office",  time: "10:18:04", hue: "rose"  },
    { id: "SC.012", note: lang === "pl" ? "okładka magazynu" : "magazine cover",      time: "12:42:11", hue: "rust"  },
    { id: "SC.024", note: lang === "pl" ? "motel · pokój 7" : "motel · room 7",       time: "21:09:33", hue: "sand"  },
    { id: "SC.038", note: lang === "pl" ? "deszcz w oknie" : "rain on the window",     time: "23:47:02", hue: "moss"  },
    { id: "SC.051", note: lang === "pl" ? "pierwszy uśmiech" : "the first smile",     time: "14:02:18", hue: "rose"  },
    { id: "SC.072", note: lang === "pl" ? "świt · finał" : "dawn · the finale",        time: "05:11:00", hue: "sage"  }
  ];
  return `
    <section class="section bf-mood" data-reveal>
      <header class="bf-mood-head">
        <span class="eyebrow">${lang === "pl" ? "Mood — sześć kadrów (poufne)" : "Mood — six frames (confidential)"}</span>
        <span class="bf-mood-rule"></span>
        <span class="bf-mood-tag">${lang === "pl" ? "fragment · NDA" : "excerpt · under NDA"}</span>
      </header>
      <div class="bf-mood-grid">
        ${frames.map((f, i) => `
          <article class="bf-frame bf-frame-${f.hue}" data-reveal style="--i:${i}">
            <div class="bf-frame-art" aria-hidden="true">
              <div class="bf-frame-grain"></div>
              <div class="bf-frame-blur"></div>
              <span class="bf-frame-ratio">2.39:1</span>
            </div>
            <footer>
              <span class="bf-frame-id">${f.id}</span>
              <span class="bf-frame-note">${f.note}</span>
              <span class="bf-frame-time">${f.time}</span>
            </footer>
          </article>
        `).join("")}
      </div>
    </section>
  `;
}

function butterfliesSetting() {
  return `
    <section class="section bf-setting" data-reveal>
      <article class="bf-setting-card">
        <div class="bf-setting-art" aria-hidden="true">
          <svg viewBox="0 0 240 200" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient id="bf-glow" x1="0" x2="0" y1="0" y2="1">
                <stop offset="0" stop-color="rgba(245,180,180,0.45)"/>
                <stop offset="1" stop-color="rgba(40,30,40,0.05)"/>
              </linearGradient>
            </defs>
            <rect width="240" height="200" fill="url(#bf-glow)"/>
            <!-- Window frame -->
            <g stroke="rgba(245,235,215,0.85)" stroke-width="1.6" fill="none">
              <rect x="36" y="30" width="168" height="140" rx="2"/>
              <line x1="120" y1="30" x2="120" y2="170"/>
              <line x1="36"  y1="100" x2="204" y2="100"/>
            </g>
            <!-- Rain streaks -->
            <g stroke="rgba(245,180,180,0.6)" stroke-width="1" stroke-linecap="round">
              <line x1="60"  y1="38"  x2="56"  y2="60"/>
              <line x1="80"  y1="44"  x2="76"  y2="68"/>
              <line x1="96"  y1="50"  x2="92"  y2="74"/>
              <line x1="148" y1="40"  x2="144" y2="64"/>
              <line x1="170" y1="46"  x2="166" y2="70"/>
              <line x1="190" y1="52"  x2="186" y2="76"/>
              <line x1="64"  y1="110" x2="60"  y2="134"/>
              <line x1="86"  y1="116" x2="82"  y2="140"/>
              <line x1="156" y1="114" x2="152" y2="138"/>
              <line x1="180" y1="120" x2="176" y2="144"/>
            </g>
            <!-- Lamp glow / motel sign reflection -->
            <circle cx="180" cy="140" r="14" fill="rgba(245,180,180,0.8)" opacity="0.45"/>
            <circle cx="180" cy="140" r="6"  fill="rgba(245,235,215,0.9)"/>
            <!-- Typewriter silhouette -->
            <g fill="rgba(20,18,14,0.85)" stroke="rgba(245,235,215,0.5)" stroke-width="0.8">
              <rect x="80" y="150" width="80" height="22" rx="2"/>
              <rect x="92" y="142" width="56" height="10" rx="1"/>
            </g>
          </svg>
        </div>
        <div class="bf-setting-text">
          <span class="bf-setting-eye">${lang === "pl" ? "PLENER · KARTA 005" : "LOCATION · CARD 005"}</span>
          <h2>${lang === "pl" ? "Hollywood. Mały motel. Maszyna do pisania." : "Hollywood. A small motel. A typewriter."}</h2>
          <p>${lang === "pl"
            ? "Świat amerykańskiego kina i jego antyteza — pokój 7 w motelu na przedmieściach Los Angeles. Tam toczy się prawdziwa akcja: dwoje obcych, jedna ciasna kuchnia, jedno okno z deszczem, jeden scenariusz, który ma ich połączyć. Plener gra rolę razem z aktorami."
            : "The world of American cinema and its antithesis — Room 7 in a motel on the edge of Los Angeles. That's where the real picture happens: two strangers, one cramped kitchenette, one window with rain on it, one screenplay meant to bind them. The location plays opposite the cast."}</p>
          <ul class="bf-setting-meta">
            <li><b>${lang === "pl" ? "MIASTO" : "CITY"}</b><span>Los Angeles · CA</span></li>
            <li><b>${lang === "pl" ? "GŁÓWNY PLAN" : "PRINCIPAL"}</b><span>${lang === "pl" ? "Motel · pokój 7" : "Motel · Room 7"}</span></li>
            <li><b>${lang === "pl" ? "KONTRAST" : "CONTRAST"}</b><span>${lang === "pl" ? "Studio · plan · gala" : "Studio · set · red carpet"}</span></li>
            <li><b>${lang === "pl" ? "OKNO ZDJĘĆ" : "SHOOT WINDOW"}</b><span>${lang === "pl" ? "Q3 2026 — Q1 2027" : "Q3 2026 — Q1 2027"}</span></li>
            <li><b>${lang === "pl" ? "PALETA" : "PALETTE"}</b><span>${lang === "pl" ? "różowy świt · neon · deszcz" : "pink dawn · neon · rain"}</span></li>
            <li><b>${lang === "pl" ? "KAMERA" : "CAMERA"}</b><span>2.39 : 1 · 35 mm</span></li>
          </ul>
        </div>
      </article>
    </section>
  `;
}

function butterfliesSoundtrack() {
  const tracks = [
    { n: "01", title: "A Winter's Tale",        artist: "Queen",                     scene: lang === "pl" ? "świt · pokój 7" : "dawn · Room 7",        time: "3:49" },
    { n: "02", title: "Who Wants to Live Forever", artist: "Queen",                  scene: lang === "pl" ? "kulminacja II aktu" : "act II climax",   time: "5:15" },
    { n: "03", title: "The Great Pretender",   artist: "Freddie Mercury",            scene: lang === "pl" ? "casting · debiut" : "the casting · debut", time: "3:25" },
    { n: "04", title: "Barcelona",             artist: "Mercury & Caballé",         scene: lang === "pl" ? "premiera · sala" : "the premiere · house", time: "5:39" },
    { n: "05", title: "Somebody to Love",       artist: "Queen",                     scene: lang === "pl" ? "spowiedź Helen" : "Helen's confession",   time: "4:56" },
    { n: "06", title: "These Are the Days of Our Lives", artist: "Queen",            scene: lang === "pl" ? "napisy końcowe" : "end credits",          time: "4:14" }
  ];
  return `
    <section class="section bf-soundtrack" data-reveal>
      <div class="section-header">
        <span class="section-number">06.</span>
        <h2 class="title-cinematic">${lang === "pl" ? "Sześć Utworów<br/>Jeden Zespół" : "Six Tracks<br/>One Band"}</h2>
      </div>
      <p class="bf-soundtrack-lead">${lang === "pl"
        ? "Pełna ścieżka dźwiękowa filmu zbudowana wokół katalogu Queen — utwory licencjonowane lub negocjowane, spinające trzy akty jednym głosem. To nie ozdoba — to drugi narrator filmu."
        : "The film's full score is built around the Queen catalog — licensed or in negotiation — binding the three acts with a single voice. Not decoration. The picture's second narrator."}</p>
      <div class="bf-soundtrack-list">
        <header class="bf-soundtrack-head">
          <span>${lang === "pl" ? "TR." : "TR."}</span>
          <span>${lang === "pl" ? "TYTUŁ" : "TITLE"}</span>
          <span>${lang === "pl" ? "WYKONAWCA" : "ARTIST"}</span>
          <span>${lang === "pl" ? "SCENA" : "SCENE"}</span>
          <span>${lang === "pl" ? "CZAS" : "TIME"}</span>
        </header>
        ${tracks.map((t, i) => `
          <article class="bf-track" data-reveal style="--i:${i}">
            <span class="bf-track-num">${t.n}</span>
            <span class="bf-track-title">${t.title}</span>
            <span class="bf-track-artist">${t.artist}</span>
            <span class="bf-track-scene">${t.scene}</span>
            <span class="bf-track-time">${t.time}</span>
          </article>
        `).join("")}
      </div>
      <footer class="bf-soundtrack-foot">
        <span class="bf-soundtrack-foot-eye">${lang === "pl" ? "LICENCJA" : "LICENSING"}</span>
        <span>${lang === "pl" ? "Negocjacje z Queen Productions Ltd. · status: w toku" : "In conversation with Queen Productions Ltd. · status: in progress"}</span>
      </footer>
    </section>
  `;
}

function butterfliesSymbolism() {
  const items = lang === "pl" ? [
    { ttl: "MARZENIE",  txt: "Co warte są marzenia, jeśli się nie spełniają? Film stawia to pytanie i nie udziela jednej odpowiedzi." },
    { ttl: "MIŁOŚĆ",    txt: "Tu przyjmuje formę, której bohater nigdy nie przeżył. Plan miłości rozpisany słowo po słowie, by trafić do serca, do którego się nie dotarło." },
    { ttl: "AUTOR",      txt: "Cień piszący film w filmie. Palce stukające o klawisze gdzieś poza kadrem. Kto kogo opowiada — bohater czytelnika, czy odwrotnie?" },
    { ttl: "ZWROT",      txt: "Zakończenie-labirynt. Kiedy myślimy, że rozumiemy — ktoś przekręca obraz o jeden klik za daleko. Czy Jack to Matthew? Czy to wszystko sen?" }
  ] : [
    { ttl: "DREAM",     txt: "What are dreams worth if they aren't fulfilled? The film asks the question and does not hand out a single answer." },
    { ttl: "LOVE",      txt: "It takes the form the hero never lived. A blueprint of love written word by word — to reach a heart that real life never lets him reach." },
    { ttl: "AUTHOR",    txt: "The shadow writing the film inside the film. Fingers tapping at a keyboard somewhere off-frame. Who is telling whom — the hero, or the reader?" },
    { ttl: "REVEAL",    txt: "The labyrinth ending. The moment we think we understand — someone turns the picture one click too far. Was Jack actually Matthew? Did we just dream this?" }
  ];
  return `
    <section class="section bf-symbol" data-reveal>
      <div class="section-header">
        <span class="section-number">07.</span>
        <h2 class="title-cinematic">${lang === "pl" ? "Cztery<br/>Skrzydła" : "Four<br/>Wings"}</h2>
      </div>
      <div class="bf-symbol-grid">
        ${items.map((it, i) => `
          <article class="bf-wing-card" data-reveal style="--i:${i}">
            <span class="bf-wing-num">0${i + 1}</span>
            <div class="bf-wing-art" aria-hidden="true">${butterflySVG("bf-fly-static")}</div>
            <h3>${it.ttl}</h3>
            <p>${it.txt}</p>
          </article>
        `).join("")}
      </div>
    </section>
  `;
}

function butterfliesCrew() {
  const crew = lang === "pl" ? [
    { dept: "POSTAĆ · GŁÓWNA",       name: "Jack, 29",                note: "młody scenarzysta · narrator", sealed: false },
    { dept: "POSTAĆ · GŁÓWNA ŻEŃSKA", name: "Helen Thorne, 35",       note: "gwiazda pierwszej strony",      sealed: false },
    { dept: "POSTAĆ · DRUGOPLANOWA", name: "Stanley Silverberg, 65",  note: "legendarny reżyser",            sealed: false },
    { dept: "POSTAĆ · TWIST",        name: "Matthew, 30",             note: "[USUNIĘTO — KLAUZULA NDA]",     sealed: true  },
    { dept: "SCENARIUSZ",            name: "Jacek Wielgopolan",       note: "Sunset Hills · 2024",           sealed: false },
    { dept: "REŻYSERIA · OBSADA",    name: "[KANDYDAT 01]",           note: "rozmowy w toku · LA",           sealed: true  },
    { dept: "OBRAZ · DP",            name: "Germano Saracco",         note: "wstępne potwierdzenie",         sealed: false },
    { dept: "MUZYKA · SCORE",        name: "Queen catalogue",         note: "negocjacje · QPL",              sealed: false }
  ] : [
    { dept: "CHARACTER · LEAD",      name: "Jack, 29",               note: "young screenwriter · narrator", sealed: false },
    { dept: "CHARACTER · LEAD F.",   name: "Helen Thorne, 35",       note: "front-cover star",              sealed: false },
    { dept: "CHARACTER · SUPPORTING", name: "Stanley Silverberg, 65", note: "legendary director",            sealed: false },
    { dept: "CHARACTER · TWIST",     name: "Matthew, 30",            note: "[REDACTED — NDA CLAUSE]",       sealed: true  },
    { dept: "SCREENPLAY",            name: "Jacek Wielgopolan",      note: "Sunset Hills · 2024",           sealed: false },
    { dept: "DIRECTION · CASTING",   name: "[CANDIDATE 01]",         note: "in conversation · LA",          sealed: true  },
    { dept: "CINEMATOGRAPHY",        name: "Germano Saracco",        note: "soft attached",                 sealed: false },
    { dept: "MUSIC · SCORE",         name: "Queen catalogue",        note: "in negotiation · QPL",          sealed: false }
  ];
  return `
    <section class="section bf-crew" data-reveal>
      <div class="section-header">
        <span class="section-number">08.</span>
        <h2 class="title-cinematic">${lang === "pl" ? "Postacie<br/>i&nbsp;Ekipa" : "Cast<br/>&amp; Crew"}</h2>
      </div>
      <div class="bf-crew-grid">
        ${crew.map((c, i) => `
          <article class="bf-crew-card ${c.sealed ? "bf-crew-sealed" : ""}" data-reveal style="--i:${i}">
            <span class="bf-crew-dept">${c.dept}</span>
            <strong class="bf-crew-name">${c.name}</strong>
            <span class="bf-crew-note">${c.note}</span>
            ${c.sealed ? `<span class="bf-crew-seal" aria-hidden="true">${lang === "pl" ? "ZAPIECZĘTOWANE" : "SEALED"}</span>` : `<span class="bf-crew-seal bf-crew-seal-open" aria-hidden="true">${lang === "pl" ? "POTWIERDZONE" : "CONFIRMED"}</span>`}
          </article>
        `).join("")}
      </div>
    </section>
  `;
}

function butterfliesTeaser() {
  return `
    <section class="section bf-teaser" data-reveal id="bf-teaser">
      <header class="bf-teaser-head">
        <span class="eyebrow">${lang === "pl" ? "ZWIASTUN · POUFNE" : "TEASER · CONFIDENTIAL"}</span>
        <span class="bf-teaser-rule"></span>
        <span class="bf-teaser-tag">${lang === "pl" ? "udostępniono · do oceny" : "shared · for evaluation"}</span>
      </header>

      <article class="bf-player">
        <div class="bf-player-chrome">
          <span class="bf-player-tl"></span><span class="bf-player-tr"></span>
          <span class="bf-player-bl"></span><span class="bf-player-br"></span>

          <div class="bf-player-bar bf-player-bar-top">
            <span class="bf-player-rec"><i></i>REC</span>
            <span class="bf-player-slug">${lang === "pl" ? "ZWIASTUN PRODUCENTA · v.04" : "PRODUCER'S TEASER · v.04"}</span>
            <span class="bf-player-tc">2.39 : 1 · 24fps</span>
          </div>

          <video
            class="bf-player-video"
            controls
            preload="metadata"
            playsinline
            poster="/public/assets/optimized/poster.jpg"
            data-testid="bf-teaser-video"
          >
            <source src="/public/assets/butterflies-drive-download.mp4" type="video/mp4">
            ${lang === "pl" ? "Twoja przeglądarka nie obsługuje wideo." : "Your browser does not support the video tag."}
          </video>

          <div class="bf-player-bar bf-player-bar-bot">
            <span class="bf-player-meta-l">${lang === "pl" ? "Czas: ok. 8 min · Narracja: producent" : "Run-time: ca. 8 min · Narration: producer"}</span>
            <span class="bf-player-meta-r">© Sunset Hills MP · ${new Date().getFullYear()}</span>
          </div>
        </div>

        <ul class="bf-player-meta">
          <li><b>${lang === "pl" ? "ŹRÓDŁO" : "SOURCE"}</b><span>${lang === "pl" ? "Producent — bezpośrednio" : "Producer — direct"}</span></li>
          <li><b>${lang === "pl" ? "STATUS" : "STATUS"}</b><span>${lang === "pl" ? "Wewnętrzny prototyp" : "Internal prototype"}</span></li>
          <li><b>${lang === "pl" ? "ZAWARTOŚĆ" : "CONTAINS"}</b><span>${lang === "pl" ? "Logline · ścieżka dźwiękowa · zarys" : "Logline · score · outline"}</span></li>
          <li><b>${lang === "pl" ? "POUFNOŚĆ" : "CONFIDENTIALITY"}</b><span>${lang === "pl" ? "Tylko w ramach NDA" : "Under NDA only"}</span></li>
        </ul>
      </article>
    </section>
  `;
}

function butterfliesAuthorsNote() {
  return `
    <section class="section bf-note" data-reveal>
      <article class="bf-note-card">
        <span class="bf-note-mark" aria-hidden="true">&ldquo;</span>
        <span class="bf-note-eye">${lang === "pl" ? "NOTATKA AUTORA · TYLKO W RAMACH POUFNOŚCI" : "AUTHOR'S NOTE · CONFIDENCE ONLY"}</span>
        <blockquote>${lang === "pl"
          ? "Scenariusz tego filmu zainspirowały głównie sny autora — plan miłości, której nigdy nie przeżył, i którą uznał za jedyny sposób, by dotrzeć do serca kobiety, której w prawdziwym życiu nigdy nie spotka, ani nawet nie zbliży się do niej."
          : "The script for this film was mainly inspired by the author's dreams — a plan for a love he has never lived, which he decided was the only way to reach the heart of a woman he could never meet in real life, or even get close to."}</blockquote>
        <footer>
          <strong>Jacek Wielgopolan</strong>
          <span>${lang === "pl" ? "Scenariusz · 2024" : "Screenplay · 2024"}</span>
        </footer>
      </article>
    </section>
  `;
}

function butterfliesComparables() {
  const films = [
    { yr: "2003", title: "Lost in Translation",       dir: "S. Coppola",   pair: lang === "pl" ? "kameralność, hotel, obcość" : "intimacy, hotel, strangeness" },
    { yr: "1999", title: "Notting Hill",              dir: "R. Michell",   pair: lang === "pl" ? "gwiazda i nikt, romans niemożliwy" : "the star and the nobody, the impossible romance" },
    { yr: "2014", title: "Birdman",                   dir: "A. G. Iñárritu", pair: lang === "pl" ? "metakino, autor w obrazie" : "meta-cinema, author inside the picture" },
    { yr: "1992", title: "The Bodyguard",             dir: "M. Jackson",   pair: lang === "pl" ? "ikoniczna ścieżka, gwiazda, ochrona" : "iconic score, star, intimate guardian" },
    { yr: "2007", title: "Once",                      dir: "J. Carney",    pair: lang === "pl" ? "muzyka jako drugi narrator" : "music as the second narrator" },
    { yr: "2020", title: "Malcolm & Marie",           dir: "S. Levinson",  pair: lang === "pl" ? "para w jednym pokoju, przez całą noc" : "two people, one room, all night" }
  ];
  return `
    <section class="section bf-comps" data-reveal>
      <div class="section-header">
        <span class="section-number">10.</span>
        <h2 class="title-cinematic">${lang === "pl" ? "Półka<br/>Referencji" : "The Reference<br/>Shelf"}</h2>
      </div>
      <p class="bf-comps-lead">${lang === "pl"
        ? "Sześć filmów, które wskazują temperaturę, format i pole grawitacyjne — bez kopiowania. To kompas dla dystrybucji, nie spis życzeń."
        : "Six pictures that locate the temperature, format and gravitational field — without copying. A compass for distribution, not a wish list."}</p>
      <div class="bf-comps-grid">
        ${films.map((f, i) => `
          <article class="bf-comp" data-reveal style="--i:${i}">
            <header>
              <span class="bf-comp-yr">${f.yr}</span>
              <span class="bf-comp-mark" aria-hidden="true">&#9678;</span>
            </header>
            <h3>${f.title}</h3>
            <span class="bf-comp-dir">dir. ${f.dir}</span>
            <p>${f.pair}</p>
          </article>
        `).join("")}
      </div>
    </section>
  `;
}

function butterfliesLyric() {
  return `
    <section class="section bf-lyric" data-reveal>
      <article class="bf-lyric-card">
        <span class="bf-lyric-eye">${lang === "pl" ? "FRAGMENT · NAPISY KOŃCOWE" : "FRAGMENT · END CREDITS"}</span>
        <div class="bf-lyric-body">
          <p>${lang === "pl" ? "Przy ognisku, przy Jacku." : "A cozy fireside, Jack."}</p>
          <p>${lang === "pl" ? "Trochę tu, trochę tam." : "A little this, a little that."}</p>
          <p>${lang === "pl" ? "Dźwięk wesołej miłości — niech tylko mija." : "The sound of merry love just skip."}</p>
          <p>${lang === "pl" ? "Łagodny deszcz uderza w twarz." : "Gentle rain beating on my face."}</p>
          <p class="bf-lyric-rest">&hellip;</p>
          <p>${lang === "pl" ? "Wszystko jest tak piękne — jak pejzaż na niebie." : "It's all so beautiful — like a landscape painting in the sky."}</p>
          <p>${lang === "pl" ? "Góry sięgają coraz wyżej." : "Mountains are zooming higher."}</p>
          <p>${lang === "pl" ? "Mały krzyk i łza w dół." : "Little down — scream and cry."}</p>
          <p>${lang === "pl" ? "Mój świat się kręci, kręci, kręci." : "My world is spinning and spinning and spinning."}</p>
          <p class="bf-lyric-tail">${lang === "pl" ? "Niewiarygodne." : "It's unbelievable."}</p>
        </div>
        <footer>
          <span class="bf-lyric-credit">${lang === "pl" ? "fragment · sekwencja zamykająca" : "fragment · closing sequence"}</span>
          <span class="bf-lyric-stamp">SC.072 · 04:12:00</span>
        </footer>
      </article>
    </section>
  `;
}

function butterfliesCTA() {
  return `
    <section class="section bf-cta" data-reveal>
      <div class="bf-cta-card">
        <div class="bf-cta-text">
          <span class="bf-cta-eye">${lang === "pl" ? "DOSTĘP TYLKO PRZEZ NDA" : "NDA-ONLY ACCESS"}</span>
          <h2>${lang === "pl" ? "Treatment v3 i lookbook — na zaproszenie." : "Treatment v3 & lookbook — by invitation."}</h2>
          <p>${lang === "pl"
            ? "Pełna trzecia wersja treatmentu, lookbook „Hollywood vs Motel\", playlista Queen z timecodes i model finansowy są dostępne dla zaproszonych partnerów po podpisaniu krótkiej umowy o poufności."
            : "The full third draft of the treatment, the \"Hollywood vs Motel\" lookbook, the Queen playlist with scene timecodes, and the financial model are available to invited partners after a brief confidentiality agreement."}</p>
        </div>
        <div class="bf-cta-actions">
          <a class="tom-cta-btn primary" href="mailto:cool@world.pl?subject=Where%20The%20Butterflies%20Fly%20%E2%80%94%20NDA%20Request">${lang === "pl" ? "Poproś o NDA" : "Request the NDA"} <i>→</i></a>
          <a class="tom-cta-btn ghost" href="${lang === "pl" ? "/pl/contact/" : "/contact/"}" data-link>${lang === "pl" ? "Skontaktuj się" : "Open contact"}</a>
        </div>
        <ul class="tom-cta-meta">
          <li><b>${lang === "pl" ? "FAZA" : "PHASE"}</b><span>${lang === "pl" ? "Rozwój · Stadium 03" : "Development · Stage 03"}</span></li>
          <li><b>${lang === "pl" ? "OKNO" : "WINDOW"}</b><span>${lang === "pl" ? "1H 2026 · pre-prod" : "1H 2026 · pre-prod"}</span></li>
          <li><b>${lang === "pl" ? "ODPOWIEDŹ" : "REPLY"}</b><span>${lang === "pl" ? "≤ 7 dni roboczych" : "≤ 7 business days"}</span></li>
        </ul>
      </div>
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

function tomStoryboard() {
  return `
    <section class="section bf-teaser" data-reveal id="tom-storyboard">
      <header class="bf-teaser-head">
        <span class="eyebrow">${lang === "pl" ? "PRZYGODY TOMKA · WIZUALIZACJA" : "ADVENTURES OF TOM · VISUALIZATION"}</span>
        <span class="bf-teaser-rule"></span>
        <span class="bf-teaser-tag">${lang === "pl" ? "archiwalne · do wglądu" : "archival · for review"}</span>
      </header>

      <article class="bf-player">
        <div class="bf-player-chrome">
          <span class="bf-player-tl"></span><span class="bf-player-tr"></span>
          <span class="bf-player-bl"></span><span class="bf-player-br"></span>

          <div class="bf-player-bar bf-player-bar-top">
            <span class="bf-player-rec"><i></i>REC</span>
            <span class="bf-player-slug">${lang === "pl" ? "WIZUALIZACJA PRZYGÓD TOMKA · v.01" : "TOM'S ADVENTURES VISUALIZATION · v.01"}</span>
            <span class="bf-player-tc">1.85 : 1 · 24fps</span>
          </div>

          <iframe 
            src="https://player.vimeo.com/video/1190739740?h=0&badge=0&autopause=0&player_id=0&app_id=58479&title=0&byline=0&portrait=0" 
            class="bf-player-video" 
            frameborder="0" 
            allow="autoplay; fullscreen; picture-in-picture; clipboard-write" 
            title="The Adventures of Tom - Storyboard"
            data-testid="tom-storyboard-video"
          ></iframe>

          <div class="bf-player-bar bf-player-bar-bot">
            <span class="bf-player-meta-l">${lang === "pl" ? "Czas: ok. 2 min · Narracja: brak" : "Run-time: ca. 2 min · Narration: none"}</span>
            <span class="bf-player-meta-r">© Sunset Hills MP · ${new Date().getFullYear()}</span>
          </div>
        </div>

        <ul class="bf-player-meta">
          <li><b>${lang === "pl" ? "ŹRÓDŁO" : "SOURCE"}</b><span>${lang === "pl" ? "Archiwum produkcyjne" : "Production archive"}</span></li>
          <li><b>${lang === "pl" ? "STATUS" : "STATUS"}</b><span>${lang === "pl" ? "Wczesna koncepcja" : "Early concept"}</span></li>
          <li><b>${lang === "pl" ? "ZAWARTOŚĆ" : "CONTAINS"}</b><span>${lang === "pl" ? "Szkice · przejścia · nastrój" : "Sketches · transitions · mood"}</span></li>
          <li><b>${lang === "pl" ? "POUFNOŚĆ" : "CONFIDENTIALITY"}</b><span>${lang === "pl" ? "Materiały poglądowe" : "Review materials"}</span></li>
        </ul>
      </article>
    </section>
  `;
}

function kingsStoryboard() {
  return `
    <section class="section bf-teaser" data-reveal id="kings-storyboard">
      <header class="bf-teaser-head">
        <span class="eyebrow">${lang === "pl" ? "SCENOPIS · WIZUALIZACJA" : "STORYBOARD · VISUALIZATION"}</span>
        <span class="bf-teaser-rule"></span>
        <span class="bf-teaser-tag">${lang === "pl" ? "archiwalne · do wglądu" : "archival · for review"}</span>
      </header>

      <article class="bf-player">
        <div class="bf-player-chrome">
          <span class="bf-player-tl"></span><span class="bf-player-tr"></span>
          <span class="bf-player-bl"></span><span class="bf-player-br"></span>

          <div class="bf-player-bar bf-player-bar-top">
            <span class="bf-player-rec"><i></i>REC</span>
            <span class="bf-player-slug">${lang === "pl" ? "WIZUALIZACJA SCENOPISU · v.01" : "STORYBOARD VISUALIZATION · v.01"}</span>
            <span class="bf-player-tc">1.85 : 1 · 24fps</span>
          </div>

          <video
            class="bf-player-video"
            controls
            preload="metadata"
            playsinline
            poster="/public/assets/optimized/kings-catalog.webp"
            data-testid="kings-storyboard-video"
          >
            <source src="https://sunsethillsmotionpictures.com/wp-content/uploads/2024/05/storyboard.mp4" type="video/mp4">
            ${lang === "pl" ? "Twoja przeglądarka nie obsługuje wideo." : "Your browser does not support the video tag."}
          </video>

          <div class="bf-player-bar bf-player-bar-bot">
            <span class="bf-player-meta-l">${lang === "pl" ? "Czas: ok. 2 min · Narracja: brak" : "Run-time: ca. 2 min · Narration: none"}</span>
            <span class="bf-player-meta-r">© Sunset Hills MP · ${new Date().getFullYear()}</span>
          </div>
        </div>

        <ul class="bf-player-meta">
          <li><b>${lang === "pl" ? "ŹRÓDŁO" : "SOURCE"}</b><span>${lang === "pl" ? "Archiwum produkcyjne" : "Production archive"}</span></li>
          <li><b>${lang === "pl" ? "STATUS" : "STATUS"}</b><span>${lang === "pl" ? "Wczesna koncepcja" : "Early concept"}</span></li>
          <li><b>${lang === "pl" ? "ZAWARTOŚĆ" : "CONTAINS"}</b><span>${lang === "pl" ? "Szkice · przejścia · nastrój" : "Sketches · transitions · mood"}</span></li>
          <li><b>${lang === "pl" ? "POUFNOŚĆ" : "CONFIDENTIALITY"}</b><span>${lang === "pl" ? "Materiały poglądowe" : "Review materials"}</span></li>
        </ul>
      </article>
    </section>
  `;
}

function renderKings(page) {
  return `
    ${kingsHero(page)}
    ${kingsLogline(page)}
    ${kingsStats()}
    ${lightLeak()}
    ${kingsCities()}
    ${kingsTestimonial(page)}
    ${lightLeak()}
    ${kingsTeam()}
    ${kingsStoryboard()}
    ${kingsMission(page)}
    ${kingsCTA()}
  `;
}

function kingsHero(page) {
  return `
    <section class="kings-hero-v2" data-reveal>
      <div class="kings-hero-bg" aria-hidden="true">
        <img src="/public/assets/optimized/kings-catalog.webp" alt=""/>
        <div class="kings-hero-tint"></div>
        <div class="kings-hero-staff" aria-hidden="true">
          <svg viewBox="0 0 1200 200" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
            <g stroke="rgba(245,235,215,0.18)" stroke-width="0.6" fill="none">
              <line x1="0" y1="40"  x2="1200" y2="40"/>
              <line x1="0" y1="70"  x2="1200" y2="70"/>
              <line x1="0" y1="100" x2="1200" y2="100"/>
              <line x1="0" y1="130" x2="1200" y2="130"/>
              <line x1="0" y1="160" x2="1200" y2="160"/>
            </g>
            <g fill="rgba(209,32,37,0.55)">
              <ellipse cx="120" cy="100" rx="9" ry="6" transform="rotate(-22 120 100)"/>
              <ellipse cx="280" cy="70" rx="9" ry="6" transform="rotate(-22 280 70)"/>
              <ellipse cx="430" cy="130" rx="9" ry="6" transform="rotate(-22 430 130)"/>
              <ellipse cx="600" cy="100" rx="9" ry="6" transform="rotate(-22 600 100)"/>
              <ellipse cx="760" cy="70" rx="9" ry="6" transform="rotate(-22 760 70)"/>
              <ellipse cx="900" cy="160" rx="9" ry="6" transform="rotate(-22 900 160)"/>
              <ellipse cx="1060" cy="100" rx="9" ry="6" transform="rotate(-22 1060 100)"/>
            </g>
            <g stroke="rgba(245,235,215,0.4)" stroke-width="2" stroke-linecap="round">
              <line x1="129" y1="100" x2="129" y2="50"/>
              <line x1="289" y1="70" x2="289" y2="20"/>
              <line x1="439" y1="130" x2="439" y2="80"/>
              <line x1="609" y1="100" x2="609" y2="50"/>
              <line x1="769" y1="70" x2="769" y2="20"/>
              <line x1="909" y1="160" x2="909" y2="110"/>
              <line x1="1069" y1="100" x2="1069" y2="50"/>
            </g>
          </svg>
        </div>
      </div>
      <div class="tom-hero-frame" aria-hidden="true">
        <span class="ab-hero-fc tl"></span><span class="ab-hero-fc tr"></span>
        <span class="ab-hero-fc bl"></span><span class="ab-hero-fc br"></span>
      </div>

      <header class="ab-hero-bar kings-hero-bar">
        <span class="ab-hero-rec"><i></i>REC · 02</span>
        <span class="ab-hero-slug">${lang === "pl" ? "WN. WYSYPISKO POD WARSZAWĄ — ZMIERZCH" : "INT. WARSAW LANDFILL — DUSK"}</span>
        <span class="ab-hero-tc">A-440 · 24fps</span>
      </header>

      <div class="kings-hero-content">
        <span class="kings-hero-eyebrow">${lang === "pl" ? "02 · DOSSIER PRODUKCJI · KOMEDIODRAMAT" : "02 · PRODUCTION DOSSIER · COMEDY-DRAMA"}</span>
        <h1 class="kings-hero-title">
          <span>${lang === "pl" ? "Królowie" : "The Kings"}</span>
          <span class="kings-of-life">${lang === "pl" ? "życia." : "of Life."}</span>
        </h1>
        <p class="kings-hero-lede">${lang === "pl"
          ? "Współczesna opowieść o przyjaźni, muzyce i przetrwaniu w „ludzkim świecie\". O tym, jak po wszystkim, czego nie da się odzyskać, zaczyna się od nowa."
          : "A modern story about friendship, music and surviving the \"human world.\" About how, after everything that can't be reclaimed, you start again."}</p>

        <div class="kings-hero-chips">
          <span><b>${lang === "pl" ? "GATUNEK" : "GENRE"}</b> ${lang === "pl" ? "Komediodramat" : "Comedy-Drama"}</span>
          <span><b>${lang === "pl" ? "ZDJĘCIA" : "LOCATIONS"}</b> WAR · LDN · NYC</span>
          <span><b>${lang === "pl" ? "OBSADA" : "CAST"}</b> ${lang === "pl" ? "Hollywood + PL" : "Hollywood + Polish"}</span>
          <span><b>${lang === "pl" ? "MUZYKA" : "MUSIC"}</b> M. Zieliński</span>
          <span><b>${lang === "pl" ? "OBRAZ" : "DP"}</b> G. Saracco</span>
          <span><b>${lang === "pl" ? "MISJA" : "MISSION"}</b> ${lang === "pl" ? "Charytatywna" : "Charitable"}</span>
        </div>

        <div class="kings-hero-foot">
          <a class="ab-hero-cue" href="#kings-logline">${lang === "pl" ? "Otwórz logline" : "Open the logline"} <i>↓</i></a>
          <span class="ab-hero-stamp">${lang === "pl" ? "Sunset Hills · Stan: aktywny rozwój" : "Sunset Hills · Status: Active Development"}</span>
        </div>
      </div>
    </section>
  `;
}

function kingsLogline(page) {
  return `
    <section class="section kings-logline" data-reveal id="kings-logline">
      <article class="kings-logline-card">
        <header class="kings-logline-head">
          <span class="kings-logline-eye">${lang === "pl" ? "FILE · LOGLINE · KARTA 003" : "FILE · LOGLINE · CARD 003"}</span>
          <span class="kings-logline-stamp">${lang === "pl" ? "PRZECZYTANE" : "READER'S PICK"}</span>
        </header>
        <p class="kings-logline-body">${lang === "pl"
          ? "Niespełniony skrzypek, zmuszony zacząć życie od nowa w innym kraju, znajduje nieoczekiwaną rodzinę — w postaci starego przyjaciela i małej dziewczynki — wokół warszawskiego wysypiska."
          : "A down-on-his-luck violinist is forced to start over in a different country and finds an unlikely family — in the form of an old friend and a little girl — around a landfill on the edge of Warsaw."}</p>
        <ul class="kings-logline-facts">
          <li><b>${lang === "pl" ? "GATUNEK" : "GENRE"}</b><span>${lang === "pl" ? "Komediodramat · 136 stron" : "Comedy-Drama · 136 pages"}</span></li>
          <li><b>${lang === "pl" ? "PLENERY" : "LOCATIONS"}</b><span>Warsaw · London · New York</span></li>
          <li><b>${lang === "pl" ? "JĘZYK" : "LANGUAGE"}</b><span>EN · PL</span></li>
          <li><b>${lang === "pl" ? "STATUS" : "STATUS"}</b><span>${lang === "pl" ? "Preprodukcja" : "Pre-production"}</span></li>
          <li><b>${lang === "pl" ? "SCENARIUSZ" : "SCREENPLAY"}</b><span>Jacek Wielgopolan</span></li>
          <li><b>${lang === "pl" ? "DYSTRYBUCJA" : "DISTRIBUTION"}</b><span>${lang === "pl" ? "Duża agencja LA · w ustaleniu" : "Major LA agency · in deal"}</span></li>
        </ul>
      </article>
    </section>
  `;
}

function kingsStats() {
  const items = lang === "pl" ? [
    { num: 30, suf: "+", lbl: "Lat doświadczenia", sub: "Hollywood ↔ Warszawa" },
    { num: 3,  suf: "",  lbl: "Miasta zdjęciowe", sub: "WAW · LDN · NYC" },
    { num: 136,suf: "",  lbl: "Stron scenariusza", sub: "draft 7 · 2024" },
    { num: 2,  suf: "",  lbl: "Pula gwiazd Hollywood", sub: "obsada w toku" },
    { num: 100,suf: "%", lbl: "Misja charytatywna", sub: "dzieci · choroby serca i nowotwory" }
  ] : [
    { num: 30, suf: "+", lbl: "Years of crew experience", sub: "Hollywood ↔ Warsaw" },
    { num: 3,  suf: "",  lbl: "Shoot cities", sub: "Warsaw · London · NYC" },
    { num: 136,suf: "",  lbl: "Screenplay pages", sub: "draft 7 · 2024" },
    { num: 2,  suf: "",  lbl: "Hollywood leads", sub: "casting in progress" },
    { num: 100,suf: "%", lbl: "Charity commitment", sub: "kids · heart & cancer" }
  ];
  return `
    <section class="section ab-stats kings-stats" data-reveal>
      <header class="ab-stats-head">
        <span class="eyebrow">${lang === "pl" ? "Skala produkcji" : "Production at a glance"}</span>
        <span class="ab-stats-rule"></span>
        <span class="ab-stats-tag">${lang === "pl" ? "stan na · " + new Date().getFullYear() : "as of · " + new Date().getFullYear()}</span>
      </header>
      <div class="ab-stats-row kings-stats-row">
        ${items.map((it, i) => `
          <article class="ab-stat" data-reveal style="--i:${i}">
            <span class="ab-stat-num"><b data-count="${it.num}">0</b><i>${it.suf}</i></span>
            <span class="ab-stat-lbl">${it.lbl}</span>
            <span class="ab-stat-sub">${it.sub}</span>
          </article>
        `).join("")}
      </div>
    </section>
  `;
}

function kingsCities() {
  const cities = lang === "pl" ? [
    { tag: "MIASTO 01 · MATKA", name: "WARSZAWA", region: "Polska", role: "Punkt zwrotny — wysypisko, podwórka, scena na Pradze.", coord: "52°13'N · 21°00'E", weather: "Październik · −2 °C / 8 °C", hue: "warm" },
    { tag: "MIASTO 02 · ECHO",  name: "LONDYN",   region: "Wielka Brytania",  role: "Sceny retrospekcji — sale prób, mosty Tamizy, szare poranki.", coord: "51°30'N · 0°07'W", weather: "Listopad · 4 °C / 11 °C", hue: "cool" },
    { tag: "MIASTO 03 · CIEŃ",  name: "NOWY JORK", region: "USA",            role: "Otwarcie i finał — sala koncertowa Carnegie, dachy Brooklynu.", coord: "40°43'N · 74°00'W", weather: "Styczeń · −5 °C / 4 °C", hue: "rust" }
  ] : [
    { tag: "CITY 01 · THE MOTHER", name: "WARSAW", region: "Poland",  role: "The turning point — landfill, courtyards, the Praga apartment.", coord: "52°13'N · 21°00'E", weather: "October · 28 °F / 47 °F", hue: "warm" },
    { tag: "CITY 02 · THE ECHO",   name: "LONDON", region: "United Kingdom", role: "Memory scenes — rehearsal halls, Thames bridges, grey mornings.",  coord: "51°30'N · 0°07'W", weather: "November · 39 °F / 52 °F", hue: "cool" },
    { tag: "CITY 03 · THE SHADOW", name: "NEW YORK", region: "USA",   role: "Opening & finale — Carnegie hall, Brooklyn rooftops, January light.",  coord: "40°43'N · 74°00'W", weather: "January · 23 °F / 39 °F", hue: "rust" }
  ];
  return `
    <section class="section kings-cities" data-reveal>
      <div class="section-header">
        <span class="section-number">04.</span>
        <h2 class="title-cinematic">${lang === "pl" ? "Trzy Miasta<br/>Jedna Historia" : "Three Cities<br/>One Story"}</h2>
      </div>
      <div class="kings-cities-grid">
        ${cities.map((c, i) => `
          <article class="kings-city kings-city-${c.hue}" data-reveal style="--i:${i}">
            <header class="kings-city-head">
              <span class="kings-city-tag">${c.tag}</span>
              <span class="kings-city-coord">${c.coord}</span>
            </header>
            <h3>${c.name}</h3>
            <span class="kings-city-region">${c.region}</span>
            <p>${c.role}</p>
            <footer class="kings-city-foot">
              <span class="kings-city-weather">${c.weather}</span>
              <span class="kings-city-pulse" aria-hidden="true"><i></i></span>
            </footer>
          </article>
        `).join("")}
      </div>
    </section>
  `;
}

function kingsTestimonial() {
  return `
    <section class="section kings-testimonial" data-reveal>
      <article class="kings-quote">
        <span class="kings-quote-mark" aria-hidden="true">&ldquo;</span>
        <blockquote>${lang === "pl"
          ? "Trudno zliczyć dni, które spędziłem w ciągu ostatnich 35 lat na planach zdjęciowych. Mogę z pełną odpowiedzialnością powiedzieć — spośród tysięcy scenariuszy, które przeczytałem, „Królowie życia\" jest jedynym, który szczerze mnie rozbawił. Zakończenie zaskoczyło mnie tak bardzo, że wzruszyłem się do łez i bez chwili wahania zgodziłem się pracować nad tym filmem."
          : "It's difficult to count the days I've spent on photo sets in the last 35 years. I can say with full responsibility — among the thousands of screenplays I have read, \"The Kings of Life\" is the only one that has sincerely amused me. The ending surprised me so much that I was moved to tears, and without a moment's hesitation I agreed to work on this film."}</blockquote>
        <footer class="kings-quote-foot">
          <div class="kings-quote-portrait">
            <img src="/public/assets/optimized/portrait-germano.webp" alt="Germano Saracco" loading="lazy"/>
          </div>
          <div class="kings-quote-attr">
            <strong>Germano Saracco</strong>
            <span>${lang === "pl" ? "Operator obrazu · Los Angeles" : "Cinematographer · Los Angeles"}</span>
            <span class="kings-quote-stars" aria-hidden="true">★ ★ ★ ★ ★</span>
          </div>
        </footer>
      </article>
    </section>
  `;
}

function kingsTeam() {
  const team = lang === "pl" ? [
    { name: "JACEK WIELGOPOLAN", role: "Producent · Reżyser · Scenarzysta", bio: "Markowo związany z USA i Polską od 1991. Producent i autor scenariusza „Królów życia\".", image: "/public/assets/optimized/portrait-jack.webp", since: "1991" },
    { name: "FILIP GUZLA",        role: "Producent",                          bio: "Współproducent „Botox\", „Kobiety mafii\", „Smallworld\". Członek Rady Fundacji Marcin Gortat MG13.", image: "/public/assets/optimized/portrait-filip.webp", since: "2019" },
    { name: "GERMANO SARACCO",    role: "Operator obrazu",                    bio: "Wielokrotnie nagradzany. Zdjęcia do „Smokin' Aces\", „Hopeful Notes\" — Złoty Kondor.", image: "/public/assets/optimized/portrait-germano.webp", since: "2023" },
    { name: "MACIEJ ZIELIŃSKI",   role: "Kompozytor",                         bio: "Jeden z najbardziej rozpoznawalnych polskich kompozytorów filmowych. Współpraca z Hollywood i Europą.", image: "/public/assets/optimized/portrait-maciej.webp", since: "2024" }
  ] : [
    { name: "JACEK WIELGOPOLAN", role: "Producer · Director · Screenwriter", bio: "Associated with US & Polish movie brands since 1991. Producer and screenwriter of \"The Kings of Life.\"", image: "/public/assets/optimized/portrait-jack.webp", since: "1991" },
    { name: "FILIP GUZLA",        role: "Producer",                            bio: "Co-producer of \"Botox,\" \"Women of Mafia,\" \"Smallworld.\" Council member of the Marcin Gortat MG13 Foundation.", image: "/public/assets/optimized/portrait-filip.webp", since: "2019" },
    { name: "GERMANO SARACCO",    role: "Cinematographer",                     bio: "Award-winning DP. Shot \"Smokin' Aces,\" \"Hopeful Notes\" — Gold Condor recipient.", image: "/public/assets/optimized/portrait-germano.webp", since: "2023" },
    { name: "MACIEJ ZIELIŃSKI",   role: "Composer",                             bio: "One of the leading Polish film composers, working with producers across Europe and Hollywood.", image: "/public/assets/optimized/portrait-maciej.webp", since: "2024" }
  ];
  return `
    <section class="section kings-team" data-reveal>
      <div class="section-header">
        <span class="section-number">05.</span>
        <h2 class="title-cinematic">${lang === "pl" ? "Zespół<br/>Produkcyjny" : "Production<br/>Team"}</h2>
      </div>
      <div class="kings-team-grid">
        ${team.map((m, i) => `
          <article class="kings-crew" data-reveal style="--i:${i}">
            <div class="kings-crew-portrait">
              <img src="${m.image}" alt="${m.name}" loading="lazy"/>
              <span class="kings-crew-tag">${m.name}</span>
              <span class="kings-crew-since">JOINED ${m.since}</span>
            </div>
            <div class="kings-crew-body">
              <span class="kings-crew-role">${m.role}</span>
              <h3>${m.name}</h3>
              <p>${m.bio}</p>
            </div>
          </article>
        `).join("")}
      </div>
    </section>
  `;
}

function kingsMission() {
  return `
    <section class="section kings-mission" data-reveal>
      <article class="kings-mission-card">
        <div class="kings-mission-art" aria-hidden="true">
          <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <radialGradient id="kings-heart-glow" cx="50%" cy="55%" r="55%">
                <stop offset="0%" stop-color="rgba(245,180,180,0.35)"/>
                <stop offset="100%" stop-color="rgba(245,180,180,0)"/>
              </radialGradient>
            </defs>
            <circle cx="100" cy="100" r="92" fill="url(#kings-heart-glow)"/>
            <path d="M100 160 C 60 130, 30 110, 30 78 C 30 56, 50 42, 70 50 C 84 56, 96 70, 100 80 C 104 70, 116 56, 130 50 C 150 42, 170 56, 170 78 C 170 110, 140 130, 100 160 Z"
                  fill="none" stroke="rgba(245,235,215,0.85)" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M52 96 L72 96 L78 84 L88 110 L96 96 L150 96"
                  fill="none" stroke="var(--red)" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </div>
        <div class="kings-mission-text">
          <span class="kings-mission-eye">${lang === "pl" ? "HISTORIA · PARAMETRY ŻYCIOWE" : "STORY · VITAL SIGNS"}</span>
          <h2>${lang === "pl"
            ? "Każda klatka ma tętno — emocjonalne serce „Królów życia”."
            : "Every frame has a pulse — the emotional core of Kings of Life."}</h2>
          <p>${lang === "pl"
            ? "Poza techniczną precyzją i kinową skalą kryje się opowieść o odporności ludzkiego ducha. „Królowie życia” opierają się na trzech filarach emocji, które napędzają każdą scenę, każdy występ i każde cięcie w montażowni."
            : "Beyond the technical precision and cinematic scale lies a story about the resilience of the human spirit. The Kings of Life is built on three pillars of emotion that drive every scene, every performance, and every cut."}</p>
          <ul class="kings-mission-list">
            <li><b>PAM</b><span>${lang === "pl" ? "Pamięć: ciężar przeszłości, który niesiemy w przyszłość" : "Memory: the weight of the past we carry into the future"}</span></li>
            <li><b>WIĘ</b><span>${lang === "pl" ? "Więź: rodziny, które wybieramy, gdy świat się rozpada" : "Kinship: the families we choose when the world falls apart"}</span></li>
            <li><b>ODR</b><span>${lang === "pl" ? "Odrodzenie: siła, by zacząć od nowa na czystej karcie" : "Resurrection: the strength to start over on a blank page"}</span></li>
          </ul>
        </div>
      </article>
    </section>
  `;
}

function kingsCTA() {
  return `
    <section class="section kings-cta" data-reveal>
      <div class="kings-cta-card">
        <div class="kings-cta-text">
          <span class="kings-cta-eye">${lang === "pl" ? "DLA INWESTORÓW · DYSTRYBUTORÓW · KORESPONDENCJI" : "FOR INVESTORS · DISTRIBUTORS · PRESS"}</span>
          <h2>${lang === "pl" ? "Zostań częścią „Królów życia\"." : "Step into The Kings of Life."}</h2>
          <p>${lang === "pl"
            ? "Pełna analiza scenariusza, lookbook trzech miast i model finansowy są dostępne dla zaproszonych partnerów. Wysyłamy z biura w Warszawie po podpisaniu standardowego NDA."
            : "Full coverage report, three-city lookbook and the financial model are available to invited partners. Sent from our Warsaw office after a standard NDA."}</p>
        </div>
        <div class="kings-cta-actions">
          <a class="tom-cta-btn primary" href="mailto:cool@world.pl?subject=The%20Kings%20of%20Life%20%E2%80%94%20Investor%20Pack">${lang === "pl" ? "Wyślij zapytanie" : "Send the enquiry"} <i>→</i></a>
          <a class="tom-cta-btn ghost" href="${lang === "pl" ? "/pl/script-coverage/" : "/script-coverage/"}" data-link>${lang === "pl" ? "Czytaj analizę scenariusza" : "Read script coverage"}</a>
        </div>
      </div>
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
  const c = t.coverage.intro;
  const stats = [
    { l: c.stats.scripts, v: "1 200+" },
    { l: c.stats.turnaround, v: lang === "pl" ? "10 dni" : "10 days" },
    { l: c.stats.langs, v: "EN · PL" },
    { l: c.stats.readers, v: lang === "pl" ? "07 osób" : "07 staff" }
  ];
  return `
    <section class="section sc-intro" data-reveal>
      <div class="sc-intro-grid">
        <div class="sc-intro-copy">
          <span class="eyebrow">02. ${c.eyebrow}</span>
          <h2 class="title-cinematic">${c.title}</h2>
          <p>${c.lead}</p>
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
  const tiers = t.coverage.tiers.items;
  return `
    <section class="section sc-tiers" data-reveal>
      <div class="section-header">
        <span class="section-number">03.</span>
        <h2 class="title-cinematic">${t.coverage.tiers.title}</h2>
      </div>
      <div class="sc-tier-grid">
        ${tiers.map((t) => `
          <article class="sc-tier sc-tier-${t.code.toLowerCase()}" data-reveal>
            <header>
              <span class="sc-tier-num">${t.n}</span>
              <span class="sc-tier-pct">${t.count}<i>${lang === "pl" ? "zgłoszeń" : "of submissions"}</i></span>
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
  const steps = t.coverage.process.steps;
  return `
    <section class="section sc-process" data-reveal>
      <div class="section-header">
        <span class="section-number">04.</span>
        <h2 class="title-cinematic">${t.coverage.process.title}</h2>
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
    [lang === "pl" ? "TYTUŁ" : "TITLE", lang === "pl" ? "KRÓLOWIE ŻYCIA" : "THE KINGS OF LIFE"],
    [lang === "pl" ? "AUTOR" : "WRITER", "Jacek Wielgopolan"],
    [lang === "pl" ? "FORMA" : "FORM", lang === "pl" ? "Scenariusz" : "Screenplay"],
    [lang === "pl" ? "STRONY" : "PAGES", "136"],
    [lang === "pl" ? "GATUNEK" : "GENRE", lang === "pl" ? "Dramat" : "Drama"],
    [lang === "pl" ? "ZGŁOSZONE PRZEZ" : "SUB BY", "Dawn Jacobs"],
    [lang === "pl" ? "ZGŁOSZONE DO" : "SUB TO", "Adam Lebovitz"],
    [lang === "pl" ? "DATA ANALIZY" : "COVERAGE DATE", lang === "pl" ? "17 lipca 2023" : "July 17, 2023"]
  ];
  const ratings = lang === "pl" ? [
    { label: "KONCEPT",    score: "DOSKONAŁY", value: 95 },
    { label: "LINIA FABULARNA", score: "DOBRA",      value: 78 },
    { label: "BOHATEROWIE", score: "ZADOWALAJĄCA",      value: 62 },
    { label: "DIALOGI",   score: "ZADOWALAJĄCE",      value: 60 },
    { label: "STRUKTURA",  score: "ZADOWALAJĄCA",      value: 65 },
    { label: "POTENCJAŁ RYNKOWY", score: "DOBRY",   value: 80 }
  ] : [
    { label: "CONCEPT",    score: "EXCELLENT", value: 95 },
    { label: "STORY LINE", score: "GOOD",      value: 78 },
    { label: "CHARACTERS", score: "FAIR",      value: 62 },
    { label: "DIALOGUE",   score: "FAIR",      value: 60 },
    { label: "STRUCTURE",  score: "FAIR",      value: 65 },
    { label: "MARKETABILITY", score: "GOOD",   value: 80 }
  ];
  const labels = t.coverage.sample;
  return `
    <section class="section sc-sample" data-reveal>
      <div class="section-header">
        <span class="section-number">05.</span>
        <h2 class="title-cinematic">${labels.title}</h2>
      </div>
      <article class="sc-coverage-doc">
        <div class="sc-doc-watermark">${labels.confidential}</div>
        <header class="sc-doc-head">
          <div>
            <strong>SUNSET HILLS MOTION PICTURES</strong>
            <span>${labels.report}</span>
          </div>
          <span class="sc-doc-stamp">CONSIDER</span>
        </header>
        <div class="sc-doc-meta">
          ${meta.map(([k, v]) => `<div class="sc-doc-row"><b>${k}</b><span>${v}</span></div>`).join("")}
        </div>
        <div class="sc-doc-block">
          <h4>${labels.logline}</h4>
          <p>${labels.loglineBody}</p>
        </div>
        <div class="sc-doc-block">
          <h4>${labels.synopsis}</h4>
          ${labels.synopsisBody.map(p => `<p>${p}</p>`).join("")}
        </div>
        <div class="sc-doc-grid">
          <div class="sc-doc-col">
            <h4>${labels.strengths}</h4>
            <ul>
              ${labels.strengthsBody.map(s => `<li>${s}</li>`).join("")}
            </ul>
          </div>
          <div class="sc-doc-col">
            <h4>${labels.weaknesses}</h4>
            <ul>
              ${labels.weaknessesBody.map(w => `<li>${w}</li>`).join("")}
            </ul>
          </div>
        </div>
        <div class="sc-doc-ratings">
          <h4>${labels.evaluation}</h4>
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
            <span class="sc-rec-eyebrow">${labels.recommendation}</span>
            <strong class="sc-rec-verdict">CONSIDER</strong>
            <p>${labels.recBody}</p>
          </div>
          <div class="sc-rec-sign">
            <span class="sc-sign-label">${labels.reader}</span>
            <strong>Dawn Jacobs</strong>
            <span class="sc-sign-meta">${lang === "pl" ? "Starsza Lektorka · Sunset Hills MP" : "Sr. Reader · Sunset Hills MP"}</span>
          </div>
        </footer>
      </article>
    </section>
  `;
}

function coverageReaders() {
  const readers = [
    { i: "DJ", n: "Dawn Jacobs",      r: lang === "pl" ? "Starsza Lektorka" : "Sr. Reader", g: lang === "pl" ? "Dramat · Międzynarodowe" : "Drama · International", c: lang === "pl" ? "428 przeczytanych · 9 lat" : "428 scripts read · 9 yrs" },
    { i: "AL", n: "Adam Lebovitz",    r: lang === "pl" ? "Lektor" : "Reader",     g: "Genre · Thriller · Sci-fi", c: lang === "pl" ? "316 przeczytanych · 6 lat" : "316 scripts read · 6 yrs" },
    { i: "MK", n: "Marta Kowalczyk",  r: lang === "pl" ? "Lektorka" : "Reader",     g: lang === "pl" ? "Komedia · Adaptacja" : "Comedy · Adaptation",   c: lang === "pl" ? "204 przeczytane · 4 lata" : "204 scripts read · 4 yrs" },
    { i: "JW", n: "Jacek W.",         r: lang === "pl" ? "Ostatnie czytanie" : "Final Read", g: lang === "pl" ? "Komitet zielonego światła" : "Greenlight committee",  c: lang === "pl" ? "Końcowa akceptacja każdego Consider+" : "Final-pass on every Consider+" }
  ];
  return `
    <section class="section sc-readers" data-reveal>
      <div class="section-header">
        <span class="section-number">06.</span>
        <h2 class="title-cinematic">${t.coverage.readers.title}</h2>
      </div>
      <p class="sc-readers-lead">${t.coverage.readers.lead}</p>
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
  const labels = t.coverage.submit;
  return `
    <section class="section sc-submit" data-reveal>
      <a href="${lang === "pl" ? "/pl/contact/" : "/contact/"}" class="sc-submit-card" data-link>
        <div class="sc-submit-left">
          <span class="eyebrow">07. ${labels.eyebrow}</span>
          <h2 class="title-cinematic">${labels.title}</h2>
          <p>${labels.lead}</p>
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
          <span class="sc-submit-cta">${labels.cta} <i>&rarr;</i></span>
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
  const d = t.production.dossier;
  const stats = [
    { l: d.stats.dossier, v: "PL-PROD-2026" },
    { l: d.stats.pop, v: "37.6M" },
    { l: d.stats.surf,    v: "312 696 km²" },
    { l: d.stats.borders,    v: lang === "pl" ? "07 narodów" : "07 nations" },
    { l: d.stats.langs,  v: "PL · EN · DE · UA · RU" },
    { l: d.stats.tz,   v: "UTC+01:00" }
  ];
  return `
    <section class="section pl-dossier" data-reveal>
      <header class="pl-dossier-head">
        <span class="dossier-stamp">${d.confidential}</span>
        <span class="dossier-issued">${d.issued}</span>
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
  const eras = lang === "pl" ? [
    { y: "XI–XIII w.", n: "Romanizm", d: "Kamienne wieże, półkoliste łuki, pierwsze katedry krakowskie." },
    { y: "XIII–XVI w.", n: "Gotyk", d: "Ceglane fortece, zamki krzyżackie, wąskie kamienice mieszczańskie." },
    { y: "XVI–XVII w.", n: "Renesans", d: "Dziedzińce wawelskie, włoskie arkady, książęce fasady." },
    { y: "XVII–XVIII w.", n: "Barok", d: "Zakrzywione gzymsy, warszawskie pałace, dramat kontrreformacji." },
    { y: "XIX w.", n: "Belle Époque", d: "Pałace łódzkich fabrykantów, bulwary w stylu wiedeńskim, żelazne balkony." },
    { y: "XX w.", n: "Modernizm", d: "Bloki bauhausowskie, gdyńskie nabrzeże, przedwojenny optymizm." },
    { y: "Lata 60–80", n: "Brutalizm", d: "Betonowe place, arena Spodek, monumentalizm ery komunistycznej." },
    { y: "XXI w.", n: "Szkło i Stal", d: "Panorama Warszawy, Varso Tower, wnętrza parków technologicznych." }
  ] : [
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
        <h2 class="title-cinematic">${t.production.eras.title}</h2>
      </div>
      <p class="pl-eras-lead">${t.production.eras.lead}</p>
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
  const seasons = lang === "pl" ? [
    { n: "Wiosna",  m: "MAR · KWI · MAJ", c1: "#5b8c3a", c2: "#a8c47a", note: "Jasne zielenie, niskie chmury, miękki kontrast. Okna dla techniki day-for-night są stabilne.", stand: "Europa Zachodnia · Przedwojenna Rosja" },
    { n: "Lato",    m: "CZE · LIP · SIE", c1: "#c47a1f", c2: "#f0b455", note: "Długie niebieskie wieczory. 17-godzinne dni zdjęciowe możliwe na północ od Gdańska.", stand: "Śródziemnomorski ląd · Ukraina" },
    { n: "Jesień",  m: "WRZ · PAŹ · LIS", c1: "#8a3a1a", c2: "#d27a3a", note: "Rdza, bursztyn i cegła. Kraj staje się tablicą próbek Wesa Andersona.", stand: "Nowa Anglia · Karpaty · Toskania" },
    { n: "Zima",    m: "GRU · STY · LUT", c1: "#6c7a86", c2: "#cdd5dc", note: "Stalowe niebo, świeży śnieg, mgła z oddechu. Prawdziwe zimno, pianka niepotrzebna.", stand: "Syberia · Alaska · Laponia" }
  ] : [
    { n: "Spring",  m: "MAR · APR · MAY", c1: "#5b8c3a", c2: "#a8c47a", note: "Pale greens, low cloud, soft contrast. Day-for-night windows are reliable.", stand: "Western Europe · Pre-war Russia" },
    { n: "Summer",  m: "JUN · JUL · AUG", c1: "#c47a1f", c2: "#f0b455", note: "Long blue evenings. 17-hour shoot days possible north of Gdańsk.",         stand: "Mediterranean inland · Ukraine" },
    { n: "Autumn",  m: "SEP · OCT · NOV", c1: "#8a3a1a", c2: "#d27a3a", note: "Rust, amber and brick. The country becomes a Wes Anderson swatch wall.",  stand: "New England · Carpathia · Tuscany" },
    { n: "Winter",  m: "DEC · JAN · FEB", c1: "#6c7a86", c2: "#cdd5dc", note: "Steel skies, fresh snow, breath fog. Real cold, no foam needed.",          stand: "Siberia · Alaska · Lapland" }
  ];
  return `
    <section class="section pl-seasons" data-reveal>
      <div class="section-header">
        <span class="section-number">03.</span>
        <h2 class="title-cinematic">${t.production.seasons.title}</h2>
      </div>
      <div class="pl-season-grid">
        ${seasons.map((s, i) => `
          <article class="season-card" data-reveal style="--i:${i};--c1:${s.c1};--c2:${s.c2}">
            <div class="season-swatch"></div>
            <div class="season-meta">
              <span class="season-months">${s.m}</span>
              <strong class="season-name">${s.n}</strong>
              <p class="season-note">${s.note}</p>
              <span class="season-stand-label">${lang === "pl" ? "Może zastąpić" : "Stands in for"}</span>
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
        <h2 class="title-cinematic">${lang === "pl" ? "Możliwości produkcyjne" : "Production Capability"}</h2>
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
          <span class="incentive-eyebrow">POLSKI INSTYTUT SZTUKI FILMOWEJ</span>
          <strong class="incentive-num"><i>30</i><b>%</b></strong>
          <span class="incentive-sub">${lang === "pl" ? "zwrot gotówki za wydatki kwalifikowane" : "cash rebate on qualified spend"}</span>
        </div>
        <div class="incentive-right">
          <p>${lang === "pl" ? "Produkcje realizowane w Polsce kwalifikują się do <strong>30% zwrotu gotówki</strong> za wydatki lokalne w ramach programu PISF &mdash; jednej z najbardziej konkurencyjnych zachęt w Europie. Sunset Hills zajmuje się wnioskowaniem, audytem i rozliczeniem we własnym zakresie." : "Productions shot in Poland qualify for a <strong>30% cash rebate</strong> on eligible local spend through the PISF programme &mdash; one of Europe&rsquo;s most aggressive incentives. Sunset Hills handles the application, audit and reconciliation in-house."}</p>
          <ul class="incentive-list">
            <li><span>—</span> ${lang === "pl" ? "Brak rocznego limitu na projekt" : "No annual cap per project"}</li>
            <li><span>—</span> ${lang === "pl" ? "Wypłata w ciągu 60 dni od audytu" : "Pay-out within 60 days of audited reconciliation"}</li>
            <li><span>—</span> ${lang === "pl" ? "Możliwość łączenia z funduszami regionalnymi UE" : "Stackable with EU regional funds &amp; co-production treaties"}</li>
          </ul>
        </div>
      </div>
    </section>
  `;
}

function productionManifest() {
  const groups = lang === "pl" ? [
    { title: "Hale zdjęciowe", rows: [
      ["ALV", "Alvernia Studios · Kraków · 4 hale · 2 800 m²"],
      ["WFD", "WFDiF · Warszawa · 6 hal · 3 100 m²"],
      ["ATM", "ATM Studio · Warszawa · LED Volume + 5 hal"],
      ["FBL", "Łódź Backlot · 12 ha scenografii plenerowej"]
    ] },
    { title: "Kamera i Optyka", rows: [
      ["A35", "ARRI Alexa 35 / Mini LF / Amira"],
      ["RED", "RED Komodo-X / V-Raptor 8K"],
      ["LNS", "Cooke S7/i · Panavision Sphero · Atlas Orion"],
      ["DRN", "DJI Inspire 3 · Freefly Alta X heavy-lift"]
    ] },
    { title: "Oświetlenie i Grip", rows: [
      ["HMI", "Dwa pakiety 18K HMI · ARRI M40 / M90"],
      ["LED", "ARRI SkyPanel S360 · Creamsource Vortex8"],
      ["CRN", "Technocrane 30, 50 · Steadicam · żuraw 64 m"],
      ["VEH", "Russian Arm · Edge Arm · Przyczepa procesowa"]
    ] },
    { title: "Kaskaderzy i Efekty", rows: [
      ["FLT", "Zespoły choreografii walk wszystkich dyscyplin"],
      ["VEH", "Kierowcy kaskaderzy, flota klasyczna i nowoczesna"],
      ["ANI", "Trenowane konie, psy, ptaki drapieżne"],
      ["FX",  "Efekty pirotechniczne, pogodowe na żądanie"]
    ] }
  ] : [
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
        <h2 class="title-cinematic">${t.production.manifest.title}</h2>
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
  const services = lang === "pl" ? [
    "Produkcja wykonawcza",
    "Skauting lokacji i pozwolenia",
    "Ekipa i szefowie pionów",
    "Casting i współpraca z agencjami",
    "Logistyka i transport",
    "Odprawy celne i karnety",
    "Wnioski do PISF",
    "Formalności umów o współprodukcji",
    "Ubezpieczenia i gwarancje (bonding)",
    "Przekazanie do postprodukcji"
  ] : [
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
        <h2 class="title-cinematic">${lang === "pl" ? "Pełny Zakres Obsługi" : "What We Cover, End-to-End"}</h2>
      </div>
      <ul class="pl-cover-list">
        ${services.map((s, i) => `<li data-reveal style="--i:${i}"><b>${String(i + 1).padStart(2, "0")}</b><span>${s}</span></li>`).join("")}
      </ul>
      <div class="pl-cover-foot">
        <span class="pl-cover-stamp">SUNSET HILLS MP · WARSAW BUREAU</span>
        ${link(lang === "pl" ? "/pl/contact/" : "/contact/", lang === "pl" ? "Nawiąż kontakt" : "Open a wire")}
      </div>
    </section>
  `;
}

function officeCards() {
  return `
    <div class="office-grid">
      <article class="info-card">
        <span class="card-kicker">${lang === "pl" ? "Polska · Siedziba" : "Poland · HQ"}</span>
        <p>Sunset Hills Motion Pictures S.A.<br />ul. Dominikańska 21B<br />02-738 Warszawa</p>
      </article>
      <article class="info-card">
        <span class="card-kicker">${lang === "pl" ? "Wielka Brytania" : "United Kingdom"}</span>
        <p>SUNSET HILLS INVESTMENTS LTD<br />27 Old Gloucester Street<br />London, WC1N 3AX</p>
      </article>
      <article class="info-card">
        <span class="card-kicker">${lang === "pl" ? "Bezpośrednie połączenie" : "Direct Wire"}</span>
        <p>cool@world.pl<br />+48 606 400 500</p>
      </article>
    </div>
  `;
}

function contactSection(number = "01.", includeVisual = false) {
  const c = t.contact;
  return `
    <section class="section contact-console-section">
      <div class="contact-console">
        <aside class="contact-side">
          <span class="eyebrow">${number} ${c.eyebrow}</span>
          <h2 class="contact-title">${c.title}</h2>
          <p class="contact-lead">${c.lead}</p>
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
  const f = t.contact.form;
  return `
    <form class="contact-form transmission" data-transmission>
      <header class="tx-head">
        <span class="tx-stamp">SUNSET HILLS MP</span>
        <span class="tx-meta"><b>${f.outgoing}</b> &middot; <span data-tx-time>--:--:--</span> &middot; PRIORITY 01</span>
      </header>
      <div class="tx-body">
        <div class="tx-row tx-fixed">
          <span class="tx-label">${f.to}</span>
          <span class="tx-static">SUNSET HILLS MOTION PICTURES &middot; WARSAW</span>
        </div>
        <div class="tx-row">
          <label class="tx-label" for="cf-name">${f.from}</label>
          <input class="tx-input" id="cf-name" name="name" type="text" placeholder="${f.placeholderName}" autocomplete="name" required />
          <span class="tx-rule"></span>
        </div>
        <div class="tx-row">
          <label class="tx-label" for="cf-email">${f.reply}</label>
          <input class="tx-input" id="cf-email" name="email" type="email" placeholder="your@studio.com" autocomplete="email" required />
          <span class="tx-rule"></span>
        </div>
        <div class="tx-row">
          <label class="tx-label" for="cf-subject">${f.re}</label>
          <select class="tx-input tx-select" id="cf-subject" name="subject">
            ${f.options.map(opt => `<option>${opt}</option>`).join("")}
          </select>
          <span class="tx-rule"></span>
        </div>
        <div class="tx-row tx-message">
          <label class="tx-label" for="cf-message">${f.body}</label>
          <textarea class="tx-input tx-textarea" id="cf-message" name="message" rows="7" placeholder="${f.placeholderMsg}" required></textarea>
          <span class="tx-counter" data-tx-counter>0 / 800</span>
        </div>
      </div>
      <footer class="tx-foot">
        <div class="tx-foot-meta">
          <span><b>${f.status}</b> ${f.ready}</span>
          <span class="tx-dot"></span>
        </div>
        <button class="tx-submit" type="submit">
          <span class="tx-submit-label">${f.transmit}</span>
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
        <span class="eyebrow">05. ${lang === "pl" ? "Porozmawiajmy" : "Let's Talk"}</span>
        <h2>${lang === "pl" ? "Kontakt" : "Contact"}</h2>
      </div>
      <div class="closing-slate-copy">
        <p>${lang === "pl" ? "Posiadamy biura w Polsce i Wielkiej Brytanii." : "We have two offices in Poland and Great Britain."}</p>
        ${link(lang === "pl" ? "/pl/contact/" : "/contact/", lang === "pl" ? "Nawiąż kontakt" : "Get in touch")}
      </div>
    </section>
  `;
}

function nextPageSlate(path) {
  const sequenceEn = [
    "/",
    "/about-us/",
    "/the-adventures-of-tom/",
    "/the-kings-of-life/",
    "/script-coverage/",
    "/production-in-poland/",
    "/contact/"
  ];
  const sequencePl = [
    "/pl/",
    "/pl/o-nas/",
    "/pl/przygody-tomka/",
    "/pl/krolowie-zycia/",
    "/pl/analiza-scenariuszy/",
    "/pl/produkcja-w-polsce/",
    "/pl/kontakt/"
  ];
  
  const seq = lang === "pl" ? sequencePl : sequenceEn;
  const currentIndex = seq.indexOf(path);
  if (currentIndex === -1 || path === "/contact/" || path === "/pl/kontakt/") return "";
  
  const nextPath = seq[(currentIndex + 1) % seq.length];
  const next = routes[nextPath] || routes[lang === "pl" ? "/pl/" : "/"];
  const image = next.heroImage || next.image || "/public/assets/optimized/kings-wide.webp";
  return `
    <section class="next-slate">
      <a href="${nextPath}" data-link>
        <img src="${image}" alt="" loading="lazy" />
        <span class="eyebrow">${lang === "pl" ? "Następna" : "Next"}</span>
        <h2>${next.title}</h2>
      </a>
    </section>
  `;
}

function renderPerson(page) {
  const m = page.meta || {};
  return `
    ${personHero(page, m)}
    ${personIdCard(page, m)}
    ${personBio(page)}
    ${page.films && page.films.length ? personFilmography(page) : ""}
    ${lightLeak()}
    ${personCTA(page)}
  `;
}

function personHero(page, m) {
  const yrs = m.since ? Math.max(0, new Date().getFullYear() - parseInt(m.since, 10)) : null;
  const labelChips = (m.labels || []).map(l => `<span>${l}</span>`).join("");
  return `
    <section class="prof-hero" data-reveal>
      <div class="prof-hero-bg" aria-hidden="true">
        <img src="${page.image || "/public/assets/optimized/logo-s.webp"}" alt=""/>
        <div class="prof-hero-tint"></div>
        <div class="prof-hero-grid"></div>
      </div>

      <div class="tom-hero-frame" aria-hidden="true">
        <span class="ab-hero-fc tl"></span><span class="ab-hero-fc tr"></span>
        <span class="ab-hero-fc bl"></span><span class="ab-hero-fc br"></span>
      </div>

      <header class="ab-hero-bar prof-hero-bar">
        <span class="ab-hero-rec"><i></i>REC · ${m.profileNum || "00"}</span>
        <span class="ab-hero-slug">${m.slug || (lang === "pl" ? "WN. BIURO — DZIEŃ" : "INT. OFFICE — DAY")}</span>
        <span class="ab-hero-tc">${lang === "pl" ? "PROFIL" : "PROFILE"} · ${m.profileNum || "00"} / 03</span>
      </header>

      <div class="prof-hero-grid-row">
        <div class="prof-hero-portrait">
          <img src="${page.image || "/public/assets/optimized/logo-s.webp"}" alt="${page.title}" loading="lazy"/>
          <div class="prof-hero-portrait-bar">
            <span>${page.title.toUpperCase()}</span>
            <span class="prof-hero-portrait-since">${lang === "pl" ? "DOŁĄCZ." : "JOINED"} ${m.since || "—"}</span>
          </div>
          <span class="ab-id-bracket tl"></span><span class="ab-id-bracket tr"></span>
          <span class="ab-id-bracket bl"></span><span class="ab-id-bracket br"></span>
        </div>

        <div class="prof-hero-content">
          <span class="prof-hero-eyebrow">${m.profileNum || "00"} · ${lang === "pl" ? "PROFIL · DOSSIER" : "PROFILE · DOSSIER"}</span>
          <h1 class="prof-hero-title">${page.title}</h1>
          <p class="prof-hero-role">${page.role}</p>

          <div class="prof-hero-chips">
            ${labelChips}
          </div>

          <ul class="prof-hero-stats">
            <li><b>${lang === "pl" ? "OD" : "SINCE"}</b><span>${m.since || "—"}${yrs ? ` · ${yrs} ${lang === "pl" ? "lat" : "yrs"}` : ""}</span></li>
            <li><b>${lang === "pl" ? "BIURO" : "BASE"}</b><span>${m.base || "—"}</span></li>
            <li><b>${lang === "pl" ? "JĘZYKI" : "LANGUAGES"}</b><span>${m.languages || "—"}</span></li>
            <li><b>${lang === "pl" ? "WYSŁUGA" : "CREDITS"}</b><span>${m.credits || "—"}</span></li>
          </ul>

          <div class="prof-hero-foot">
            <a class="ab-hero-cue" href="#prof-bio">${lang === "pl" ? "Czytaj biografię" : "Read the bio"} <i>↓</i></a>
            <span class="ab-hero-stamp">${lang === "pl" ? "AKTA · TYLKO DO WGLĄDU" : "FILE · FOR REVIEW"}</span>
          </div>
        </div>
      </div>
    </section>
  `;
}

function personIdCard(page, m) {
  return `
    <section class="section prof-idcard" data-reveal>
      <article class="prof-idcard-card">
        <div class="prof-idcard-row">
          <div class="prof-idcard-cell">
            <span>${lang === "pl" ? "PEŁNE NAZWISKO" : "FULL NAME"}</span>
            <strong>${page.title}</strong>
          </div>
          <div class="prof-idcard-cell">
            <span>${lang === "pl" ? "ROLA" : "ROLE"}</span>
            <strong>${page.role}</strong>
          </div>
          <div class="prof-idcard-cell">
            <span>${lang === "pl" ? "BIURO" : "BASE"}</span>
            <strong>${m.base || "—"}</strong>
          </div>
          <div class="prof-idcard-cell prof-idcard-cell-stamp">
            <span>${lang === "pl" ? "STATUS" : "STATUS"}</span>
            <strong class="prof-idcard-status">${lang === "pl" ? "AKTYWNY" : "ACTIVE"}</strong>
          </div>
        </div>
      </article>
    </section>
  `;
}

function personBio(page) {
  const ps = (page.paragraphs || []).map((p, i) => `<p data-reveal style="--i:${i}">${p}</p>`).join("");
  return `
    <section class="section prof-bio" data-reveal id="prof-bio">
      <div class="section-header">
        <span class="section-number">02.</span>
        <h2 class="title-cinematic">${lang === "pl" ? "Biografia" : "Biography"}</h2>
      </div>
      <article class="prof-bio-card">
        ${ps}
      </article>
    </section>
  `;
}

function personFilmography(page) {
  return `
    <section class="section prof-films" data-reveal>
      <div class="section-header">
        <span class="section-number">03.</span>
        <h2 class="title-cinematic">${lang === "pl" ? "Wybrana<br/>Filmografia" : "Selected<br/>Filmography"}</h2>
      </div>
      <div class="prof-films-grid">
        ${page.films.map((f, i) => {
          // Backwards-compatible: support both [title, src] and [title, year, role, src]
          const title = f[0];
          const year = f.length === 4 ? f[1] : "";
          const role = f.length === 4 ? f[2] : "";
          const src  = f[f.length - 1];
          return `
            <article class="prof-film" data-reveal style="--i:${i}">
              <div class="prof-film-art">
                <img src="${src}" alt="${title}" loading="lazy"/>
                <div class="prof-film-shade"></div>
                ${year ? `<span class="prof-film-year">${year}</span>` : ""}
              </div>
              <div class="prof-film-body">
                <h3>${title}</h3>
                ${role ? `<span>${role}</span>` : ""}
              </div>
            </article>
          `;
        }).join("")}
      </div>
    </section>
  `;
}

function personCTA(page) {
  return `
    <section class="section prof-cta" data-reveal>
      <div class="prof-cta-card">
        <div class="prof-cta-text">
          <span class="prof-cta-eye">${lang === "pl" ? "KONTAKT · PRZEZ STUDIO" : "CONTACT · VIA THE STUDIO"}</span>
          <h2>${lang === "pl" ? `Skontaktuj się z ${page.title.split(" ")[0]}.` : `Reach out to ${page.title.split(" ")[0]}.`}</h2>
          <p>${lang === "pl"
            ? "Korespondencja zawodowa, prasa, zaproszenia na festiwale i rozmowy projektowe — wszystko przez biuro Sunset Hills w Warszawie."
            : "Professional correspondence, press, festival invitations and project conversations — all routed through the Sunset Hills office in Warsaw."}</p>
        </div>
        <div class="prof-cta-actions">
          <a class="tom-cta-btn primary" href="mailto:cool@world.pl?subject=${encodeURIComponent(page.title)}">${lang === "pl" ? "Wyślij wiadomość" : "Send a message"} <i>→</i></a>
          <a class="tom-cta-btn ghost" href="${lang === "pl" ? "/pl/about-us/" : "/about-us/"}" data-link>${lang === "pl" ? "Wróć do studia" : "Back to the studio"}</a>
        </div>
      </div>
    </section>
  `;
}

function localizeStaticUI() {
  const c = t.curtain;
  const f = t.footer;
  
  // Curtain
  const cutTo = document.querySelector('.curtain-panel.curtain-top .curtain-meta span:last-child');
  if (cutTo) cutTo.textContent = c.cutTo;
  
  const loading = document.querySelector('[data-curtain="title"]');
  if (loading && !_hasRoutedOnce) loading.textContent = c.loading;
  
  const studio = document.querySelector('.curtain-slate .slate-row:last-child i');
  if (studio) studio.textContent = c.studio;

  // Footer
  const footerRights = document.querySelector('.site-footer .footer-brand span:last-child');
  if (footerRights) footerRights.textContent = f.rights;
  
  const footerContact = document.querySelector('.site-footer a[href="/contact/"]');
  if (footerContact) {
    footerContact.textContent = f.contact;
    footerContact.setAttribute('href', lang === "pl" ? "/pl/contact/" : "/contact/");
  }
}

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
  updateGlobals();
  const curtain = document.querySelector(".page-curtain");
  const path = normalizePath(window.location.pathname);
  const page = routes[path] || routes["/"];

  // Run curtain wipe for every navigation EXCEPT the very first page load
  const useCurtain = _hasRoutedOnce && curtain;

  localizeStaticUI();

  if (useCurtain) {
    _takeCount += 1;
    const slateBase = t.curtain.slates;
    const lookupPath = path.endsWith("/") ? path : path + "/";
    const slate = slateBase[lookupPath] || { scn: "--", title: page.title };
    
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
  const metaDesc = document.querySelector('meta[name="description"]');
  if (metaDesc) {
    metaDesc.setAttribute('content', lang === "pl" 
      ? "Sunset Hills Motion Pictures - produkcja filmowa, międzynarodowe wsparcie produkcji i projekty filmów fabularnych."
      : "Sunset Hills Motion Pictures - film production, international production support, and feature film projects.");
  }
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
  setupTomPins();
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
  const nums = document.querySelectorAll("[data-count]");
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

function setupTomPins() {
  const pins = document.querySelectorAll("[data-tom-pin]");
  if (!pins.length) return;
  pins.forEach((el) => {
    el.addEventListener("click", (e) => {
      const vol = el.getAttribute("data-tom-pin");
      const target = document.getElementById(`tom-vol-${vol}`);
      if (!target) return;
      e.preventDefault();
      target.scrollIntoView({ behavior: "smooth", block: "center" });
      // Flash highlight on the target card
      target.classList.remove("tom-vol-flash");
      // Force reflow so the animation restarts on subsequent clicks
      void target.offsetWidth;
      target.classList.add("tom-vol-flash");
    });
  });
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

