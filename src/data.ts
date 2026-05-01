export type ProjectType = "ux/ui" | "coding" | "illustration";

export interface GalleryItem {
  label: string;
  ratio: string;
  swatch: string;
}

export interface Project {
  id: string;
  slug: string;
  no: string;
  title: string;
  kicker: string;
  year: string;
  type: ProjectType;
  summary: string;
  role: string;
  tags: string[];
  swatch: string;
  problem: string;
  approach: string;
  outcome: string;
  context: string;
  team?: string;
  duration?: string;
  platform?: string;
  links?: { label: string; href: string }[];
  image?: string; // cover image path
  gallery: GalleryItem[];
}

export const PROJECTS: Project[] = [
  {
    id: "p03",
    slug: "apex-reviews",
    no: "01",
    title: "Apex Reviews",
    kicker: "Web · CREATE-X",
    year: "2024",
    type: "coding",
    summary:
      "Frontier technology company reimagining how game developers understand player feedback — AI that turns scattered opinions into actionable insights at scale.",
    role: "Co-Founder · Product",
    tags: ["React", "AI", "CREATE-X"],
    swatch: "#1f1c1a",
    context:
      "Co-founded through Georgia Tech's CREATE-X accelerator. Apex Reviews is a frontier technology company on a mission to empower studios with intelligent, accessible tools that bring clarity to chaos — turning player opinions into precise, real-time insights.",
    problem:
      "Game studios drown in unstructured player feedback spread across forums, Steam, Reddit, and social media. Existing tools flatten nuanced signals into blunt sentiment scores, or demand analysts re-read everything by hand — neither scales with a live-service game.",
    approach:
      "Built a platform that uses cutting-edge AI to synthesize player reviews, social media commentary, and community conversations across the web. Automated the tedious process of scraping forums, tagging sentiment, and prioritizing feedback — so studios can move faster, iterate smarter, and connect deeper with their players. Engineered on a React 18 micro-frontend with a 47-component design system; sub-2s loads via Redis caching and 45% bundle reduction.",
    outcome:
      "Demo day landed two paid pilots. Looking ahead: building the foundation for a future where developers, publishers, and players collaborate through data — from early prototypes to live-service updates. Every team member is a co-creator; every user, a partner in shaping what comes next.",
    team: "2 co-founders",
    duration: "Aug 2024 — Present",
    platform: "Web · React 18 · Node · AI",
    links: [{ label: "create-x.gatech.edu", href: "#" }],
    image: "/src/assets/apex-reviews.png",
    gallery: [
      { label: "Studio dashboard", ratio: "16 / 10", swatch: "#1f1c1a" },
      { label: "Ingest console", ratio: "4 / 3", swatch: "#231f1c" },
      { label: "Component library", ratio: "1 / 1", swatch: "#2a2622" },
      { label: "Public review page", ratio: "3 / 4", swatch: "#26211d" },
    ],
  },
  {
    id: "p05",
    slug: "spotify-wrapped",
    no: "02",
    title: "Spotify Wrapped",
    kicker: "Android · Native",
    year: "2024",
    type: "coding",
    summary:
      "A mobile-first Spotify analytics app redesigned for year-round discovery. Touch-optimized visualizations, AI-powered pattern insights, and real-time Spotify API sync — built natively on Android with Jetpack Compose and Material Design 3.",
    role: "Solo Designer & Developer",
    tags: ["Android", "Kotlin", "UX Research", "Figma"],
    swatch: "#231f1c",
    context:
      "Spotify Wrapped is a cultural phenomenon — but music insights locked to one day a year create a frustrating gap. 85% of users interviewed wanted year-round access. 92% of streaming happens on mobile, yet analytics were built for quick social sharing, not deep personal discovery. I set out to fix both.",
    problem:
      "Three compounding pain points: music data only surfaces once a year in December; the mobile experience is optimized for shareability over exploration; and surface-level metrics (top songs, top artists) never explain why tastes evolve. Competitive analysis confirmed no existing solution — Last.fm, Apple Music Replay, Stats.fm — solved for mobile-first, continuous, meaningful analytics.",
    approach:
      "Started with user interviews and competitive analysis to validate the problem, then moved through paper wireframes → Figma prototypes → native Android build. Core decisions: mobile-first architecture with thumb-friendly navigation and progressive disclosure across three levels (overview cards → expandable details → full-screen deep dives); real-time Spotify API sync with offline caching; touch-responsive charts with pinch, zoom, and swipe; and AI-powered mood and pattern analysis that explains listening shifts in plain language. Built with Jetpack Compose, Material Design 3, and a 40+ component Figma design system that translated to Android at 95% visual fidelity.",
    outcome:
      "Tested with 12 users: 100% preferred year-round access over the annual format; 10 of 12 found mobile visualizations significantly easier to explore than Spotify's web interface. Achieved consistent 60fps with 10,000+ listening records; offline caching cut API calls by 70%; average load time under 1.2 seconds. Design system reduced iteration time by 50%. Key learning: performance is a feature — users abandon interactions that feel sluggish, regardless of utility.",
    team: "Solo",
    duration: "Oct 2024 — Dec 2024",
    platform: "Android · Kotlin · Jetpack Compose · Spotify API",
    links: [{ label: "View project", href: "https://mewkat36.wixstudio.com/spotifywrapped" }],
    image: "/src/assets/spotifywrapped.png",
    gallery: [
      { label: "Onboarding card", ratio: "3 / 4", swatch: "#231f1c" },
      { label: "Wrap reel", ratio: "9 / 16", swatch: "#1f1c1a" },
      { label: "Top-tracks panel", ratio: "4 / 5", swatch: "#2a2622" },
      { label: "Share sheet", ratio: "1 / 1", swatch: "#332d27" },
    ],
  },
];

export interface IllustrationItem {
  id: string;
  no: string;
  label: string;
  series: string;
  year: string;
  ratio: string;
  swatch: string;
  note: string;
  image?: string; // optional real image path
}

export const ILLUSTRATIONS: IllustrationItem[] = [
  {
    id: "i00a",
    no: "01",
    label: "AI @ GT · The Hive Mind",
    series: "Identity",
    year: "2024",
    ratio: "3 / 4",
    swatch: "#0a0a0a",
    note: "Poster for AI @ GT — GT Tower illustration over hand-lettered type. Brand campaign, Spring 2024.",
    image: "/src/assets/aigt.png",
  },
  {
    id: "i00b",
    no: "02",
    label: "Café Doodle",
    series: "Editorial",
    year: "2025",
    ratio: "1 / 1",
    swatch: "#d4c9b0",
    note: "On-location sketch — doodles layered over a café shot. Part of an ongoing series of annotated places.",
    image: "/src/assets/cafe_doodle.png",
  },
];

export interface Role {
  no: string;
  role: string;
  org: string;
  time: string;
  where: string;
  bullets: string[];
}

export const ROLES: Role[] = [
  {
    no: "01",
    role: "AI Tester — Search Priority User Program",
    org: "Google",
    time: "Apr 2026 — Present",
    where: "Remote",
    bullets: [
      "Selected for Google's exclusive Priority User Program testing emerging AI-powered search and discovery tools.",
      "Evaluate early-stage features for usability, relevance, and interface clarity; submit structured feedback through testing cycles.",
      "Collaborate with product & research teams to identify friction and recommend improvements to AI-assisted workflows.",
    ],
  },
  {
    no: "02",
    role: "Senior iOS Designer",
    org: "iOS Dev Club — Georgia Tech",
    time: "Aug 2025 — Present",
    where: "Atlanta, GA",
    bullets: [
      "Direct teams of 3–4 junior designers across semester-long app projects (Skill Swap, Jot Down, Rey, Yes Chef).",
      "Lead the full process — scoping, ideation, wireframing, prototyping — and ship final UI systems for each app.",
      "Bi-weekly syncs with developer leads to align engineering and design timelines, scope features, and balance manpower.",
    ],
  },
  {
    no: "03",
    role: "Software Engineering Intern",
    org: "Narb",
    time: "May 2025 — Aug 2025",
    where: "Atlanta, GA",
    bullets: [
      "Architected & shipped 5+ production features in TypeScript, Next.js, Node.js — directly impacting 10k+ active users.",
      "Optimized API performance with Redis caching, cutting backend response times by 20%.",
      "Drove +30% test coverage with Jest + RTL; mentored junior devs in agile sprints.",
    ],
  },
  {
    no: "04",
    role: "Co-Founder",
    org: "Apex Reviews — GT CREATE-X",
    time: "Aug 2024 — Present",
    where: "Atlanta, GA",
    bullets: [
      "Co-founded an AI-powered gaming feedback platform through Georgia Tech's CREATE-X accelerator.",
      "Engineered a React 18 micro-frontend; achieved 45% bundle reduction and sub-2s load times.",
      "Built a 47-component design system; ran 20+ user interviews to validate product-market fit.",
    ],
  },
  {
    no: "05",
    role: "Undergraduate Researcher",
    org: "PARCE-Lab — Georgia Tech",
    time: "Jan 2025 — May 2025",
    where: "Atlanta, GA",
    bullets: [
      "Studied user trust and perception of AI agents; designed surveys and prototype iterations.",
      "Improved engagement +25% through UX changes; +15% perceived reliability via fidelity studies.",
    ],
  },
  {
    no: "06",
    role: "Associate Director & Graphic Designer",
    org: "Artificial Intelligence @ GT",
    time: "Mar 2024 — January 2025",
    where: "Atlanta, GA",
    bullets: [
      "Spearheaded a brand transformation — cohesive design system → +150% social engagement, +40% membership.",
      "Built and managed a creative team of 8 designers; agile processes tripled project delivery speed.",
    ],
  },
];
