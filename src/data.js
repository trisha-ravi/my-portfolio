export const PROJECTS = [
  {
    id: "p06",
    slug: "moodles",
    no: "01",
    title: "Moodles",
    kicker: "iOS · UX/UI",
    year: "2025",
    type: "ux/ui",
    summary:
      "A mood-tracking app that makes emotional check-ins effortless.",
    role: "Product Designer (UX/UI)",
    tags: ["iOS", "UX/UI", "Figma", "Mobile", "Supabase"],
    swatch: "#3db8b0",
    context:
      "Moodles is a mood-tracking app designed around one simple idea: checking in with your emotions should take seconds, not minutes. Instead of asking users to write journal entries or answer long questionnaires, Moodles uses 12 expressive illustrated faces — each representing a different mood — making it easy to identify how you're feeling with a single tap.",
    problem:
      "Most mood-tracking apps expect too much from users. They ask people to write about their day, rate multiple emotions, answer prompts, and remember to journal consistently. Over time, these steps become time-consuming, causing many people to stop using the app.",
    approach:
      "Moodles removes that friction with a 5-second daily check-in: open the app, tap the face that best matches how you feel, and save. Twelve carefully designed faces represent common emotional states — happy, calm, excited, motivated, loved, okay, thoughtful, tired, confused, anxious, sad, and frustrated. Daily check-ins build a personal mood history with simple insights: happiest days, weekly summaries, monthly trends, streaks, and most common moods. The design is playful, calming, welcoming, and non-judgmental — built for students, busy professionals, and anyone who finds journaling difficult.",
    outcome:
      "Moodles encourages emotional awareness through the simplest daily habit possible. By making mood tracking effortless, the app helps users recognize patterns in their emotions without adding stress or extra work to their day. Tagline: A face for every mood.",
    team: "Solo",
    duration: "4–6 weeks (concept project)",
    platform: "iOS · Figma",
  },
  {
    id: "p03",
    slug: "apex-reviews",
    no: "02",
    title: "Apex Reviews",
    kicker: "Web · CREATE-X",
    year: "2024",
    type: "coding",
    summary:
      "Frontier technology company reimagining how game developers understand player feedback. Apex Reviews uses AI to synthesize scattered player opinions from forums, Steam, Reddit, and social media into precise, real-time insights — so studios can move faster and iterate smarter.",
    role: "Co-Founder · Product",
    tags: ["React JS", "MongoDB", "AI", "CREATE-X"],
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
  },
  {
    id: "p05",
    slug: "spotify-wrapped",
    no: "03",
    title: "Spotify Wrapped",
    kicker: "Android · Native",
    year: "2024",
    type: "coding",
    summary:
      "A mobile-first Spotify analytics app redesigned for year-round discovery. Built natively on Android with Jetpack Compose, it offers touch-optimized visualizations, AI-powered pattern insights, and real-time Spotify API sync — because music data shouldn't only surface once a year.",
    role: "Solo Designer & Developer",
    tags: ["Android Studio", "Kotlin", "UX Research", "Figma"],
    swatch: "#231f1c",
    context:
      "Spotify Wrapped is a cultural phenomenon — but music insights locked to one day a year create a frustrating gap. 85% of users interviewed wanted year-round access. 92% of streaming happens on mobile, yet analytics were built for quick social sharing, not deep personal discovery. I set out to fix both.",
    problem:
      "Three compounding pain points: music data only surfaces once a year in December; the mobile experience is optimized for shareability over exploration; and surface-level metrics (top songs, top artists) never explain why tastes evolve. Competitive analysis confirmed no existing solution — Last.fm, Apple Music Replay, Stats.fm — solved for mobile-first, continuous, meaningful analytics.",
    approach:
      "Started with user interviews and competitive analysis to validate the problem, then moved through paper wireframes → Figma prototypes → native Android build in Android Studio. Core decisions: mobile-first architecture with thumb-friendly navigation and progressive disclosure across three levels (overview cards → expandable details → full-screen deep dives); real-time Spotify API sync with offline caching; touch-responsive charts with pinch, zoom, and swipe; and AI-powered mood and pattern analysis that explains listening shifts in plain language. Built with Jetpack Compose, Material Design 3, and a 40+ component Figma design system that translated to Android at 95% visual fidelity.",
    outcome:
      "Tested with 12 users: 100% preferred year-round access over the annual format; 10 of 12 found mobile visualizations significantly easier to explore than Spotify's web interface. Achieved consistent 60fps with 10,000+ listening records; offline caching cut API calls by 70%; average load time under 1.2 seconds. Design system reduced iteration time by 50%. Key learning: performance is a feature — users abandon interactions that feel sluggish, regardless of utility.",
    team: "Solo",
    duration: "Feb 2024 — Mar 2024",
    platform: "Android Studio · Kotlin · Firebase · Material Design 3",
    links: [{ label: "View project", href: "https://mewkat36.wixstudio.com/spotifywrapped" }],
  },
];

export const SHOW_MOODLES_PROJECT = true;

export function getVisibleProjects() {
  if (SHOW_MOODLES_PROJECT) return PROJECTS;
  return PROJECTS.filter((p) => p.slug !== "moodles");
}

export const ILLUSTRATIONS = [
  {
    id: "i00a",
    no: "01",
    label: "AI @ GT · The Hive Mind",
    series: "Identity",
    year: "2024",
    ratio: "3 / 4",
    swatch: "#0a0a0a",
    note: "Poster for AI @ GT — GT Tower illustration over hand-lettered type. Brand campaign, Spring 2024.",
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
  },
  {
    id: "i00c",
    no: "03",
    label: "Unity in Contrast",
    series: "3D",
    year: "2026",
    ratio: "3 / 4",
    swatch: "#d4d4d4",
    note: "Spent some time on this one. Six shapes, one center. Somewhere between black and bronze I started thinking about how things don't need to match to belong together. They just need to hold the same shape, the same direction.\n\nNot everything has to match to belong.",
  },
];

export const ILLUSTRATION_SERIES = [
  ...new Set(ILLUSTRATIONS.map((it) => it.series)),
];

export const ROLES = [
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
    time: "Mar 2024 — Present",
    where: "Atlanta, GA",
    bullets: [
      "Spearheaded a brand transformation — cohesive design system → +150% social engagement, +40% membership.",
      "Built and managed a creative team of 8 designers; agile processes tripled project delivery speed.",
    ],
  },
];

export const JOURNAL = [
  {
    id: "j01",
    slug: "on-building-in-public",
    date: "Mar 2026",
    title: "On building in public",
    excerpt:
      "Shipping small, sharing early, and learning that the messy middle is usually where the interesting work lives.",
    body:
      "There is a version of this work that only exists once it leaves the notebook. The sketches, the half-formed ideas, the prototypes that never ship — they matter, but they are not the whole story.\n\nBuilding in public is less about performance and more about pressure-testing your thinking before it hardens into something you can no longer revise.",
  },
  {
    id: "j02",
    slug: "design-notes-from-a-crowded-calendar",
    date: "Feb 2026",
    title: "Design notes from a crowded calendar",
    excerpt:
      "What I am noticing about attention, pace, and making room for the kind of thinking that does not fit in a sprint.",
    body:
      "Some weeks feel like a relay race — handoffs, standups, reviews, and the quiet hope that clarity will appear somewhere between meetings.\n\nI am trying to protect small pockets of uninterrupted time, not because slowness is virtuous, but because certain decisions only show up when the noise drops.",
  },
  {
    id: "j03",
    slug: "faces-feelings-and-five-seconds",
    date: "Jan 2026",
    title: "Faces, feelings, and five seconds",
    excerpt:
      "Early reflections while building Moodles — why lowering the cost of check-ins changes how people actually show up.",
    body:
      "Most mood tools ask for a paragraph when a glance would do. Moodles started from a simpler question: what if checking in felt as easy as noticing the weather?\n\nTwelve faces, one tap, no guilt. The design is playful on purpose — emotional awareness should not feel like homework.",
  },
];

export function getJournalBySlug(slug) {
  return JOURNAL.find((entry) => entry.slug === slug);
}

export function getJournalIndexBySlug(slug) {
  return JOURNAL.findIndex((entry) => entry.slug === slug);
}
