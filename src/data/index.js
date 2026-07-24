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
      "A mood tracking app that makes emotional check-ins effortless.",
    role: "Product Designer (UX/UI)",
    tags: ["iOS", "UX/UI", "Figma", "Mobile", "Supabase"],
    swatch: "#3db8b0",
    context:
      "Moodles is a mood tracking app built around one idea: logging how you feel shouldn't take longer than feeling it. Instead of journaling, users tap one of twelve illustrated faces. No typing, no required text, no multi step flow. The whole interaction is designed to fit inside five seconds.",
    problem:
      "Most mood tracking apps get abandoned within weeks. The real issue isn't just speed — it's translation. People often know how they feel but struggle to put it into words, so any flow that still requires journaling solves the wrong layer of the problem.",
    approach:
      "I designed for recognition instead of construction: twelve illustrated faces you scan and match, not a feeling you have to describe. One tap logs the check-in in under five seconds, with optional notes only if you want them — so the habit can hold without becoming another chore.",
    outcome:
      "Moodles encourages emotional awareness through the simplest daily habit possible. By making mood tracking effortless, the app helps users recognize patterns in their emotions without adding stress or extra work to their day.",
    team: "Solo",
    duration: "4 to 6 weeks (concept project)",
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
      "An AI platform that turns scattered player feedback into prioritized, actionable insights.",
    role: "Co-Founder · Product",
    tags: ["React JS", "MongoDB", "AI", "CREATE-X"],
    swatch: "#1f1c1a",
    context:
      "Apex Reviews is a feedback platform built around one idea: game studios shouldn't have to choose between drowning in player comments and flattening them into a useless score. AI clusters feedback into themed insights — with every claim linked to the original post.",
    problem:
      "Live-service studios drown in unstructured player feedback across Steam, Reddit, forums, and social. Sentiment scores say players are angry without saying why, and manual reading doesn't scale when the next patch window is days away.",
    approach:
      "We built for prioritization with proof: AI clusters feedback into ranked themes, and every insight links back to source posts so teams can verify before they act. Speed without a black box — because studios won't ship a fix on a claim they can't check.",
    outcome:
      "Demo day landed two paid pilots. Looking ahead: deeper gaming-specific models, team collaboration around themes, and integrations that put insights where studios already work.",
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
      "A mobile-first Spotify analytics app for year-round discovery — not just December.",
    role: "Solo Designer & Developer",
    tags: ["Android Studio", "Kotlin", "UX Research", "Figma"],
    swatch: "#231f1c",
    context:
      "Spotify Wrapped is beloved — but locking music insights to one day a year leaves a year-long gap. This native Android app makes discovery continuous with touch-first visualizations, real-time Spotify sync, and AI insights that explain how tastes shift.",
    problem:
      "Music insights only surface once a year, mobile analytics are built for sharing over exploration, and top-ten lists never explain why taste changed. Interviews made the gap clear: people wanted year-round access on the phone where they actually listen.",
    approach:
      "I designed for progressive disclosure — overview cards, expandable detail, full-screen deep dives — so curiosity stays light by default and deeper when you want it. Native Android with Jetpack Compose kept charts touch-first and fast enough that performance felt like part of the product.",
    outcome:
      "Tested with 12 users: 100% preferred year-round access; 10 of 12 found mobile visualizations significantly easier than desktop analytics. Hit consistent 60fps with 10,000+ records, cut API calls 70% with offline caching, and kept average load under 1.2 seconds.",
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
    series: "Sketch",
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
    no: "05",
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
