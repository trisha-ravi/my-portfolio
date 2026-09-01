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
    role: "Outreach Chair",
    org: "Creative Media Ambassadors — Georgia Tech",
    time: "Aug 2026 — Present",
    where: "Atlanta, GA",
    bullets: [
      "Built and maintained relationships with student organizations, faculty, alumni, and industry professionals — identifying and pursuing strategic partnership opportunities alongside the President.",
      "Coordinated with the Events Coordinator to bring external partners, speakers, and organizations into joint workshops, panels, and networking events.",
      "Represented CMA @ GT in external communications; maintained contact records and outreach efforts to establish CMA within Georgia Tech's creative technology community.",
    ],
  },
  {
    no: "02",
    role: "AI Tester — Search Priority User Program",
    org: "Google",
    time: "Apr 2026 — Present",
    where: "Remote",
    bullets: [
      "Selected for Google's exclusive Priority User Program testing emerging AI-powered search experiences and next-generation discovery tools.",
      "Evaluated early-stage features for usability, relevance, interface clarity, and overall user experience; identified friction points and recommended improvements to search workflows and AI-assisted interactions.",
      "Collaborated with product and research teams through surveys, testing cycles, and insight submissions to support iterative product development.",
    ],
  },
  {
    no: "03",
    role: "Senior iOS Designer",
    org: "iOS Development Club — Georgia Tech",
    time: "Aug 2025 — May 2026",
    where: "Atlanta, GA",
    bullets: [
      "Directed teams of 3–4 junior designers per project — managing design operations, assigning tasks, and mentoring team members across multiple app initiatives.",
      "Structured and led the full design process for semester-long mobile apps: scoping, ideation, wireframing, prototyping, and delivering final UI systems.",
      "Bi-weekly syncs with developer leads to align engineering and design timelines; spearheaded UX architecture for Skill Swap, Jot Down, Rey, and Yes Chef.",
      "Selected for senior leadership after demonstrating strong design vision, communication, and organizational leadership.",
    ],
  },
  {
    no: "04",
    role: "Software Engineering Intern",
    org: "Narb",
    time: "May 2025 — Aug 2025",
    where: "Atlanta, GA",
    bullets: [
      "Architected and shipped 5+ production features using TypeScript, Next.js, and Node.js — directly impacting 10,000+ active users.",
      "Optimized API performance and implemented Redis caching, reducing backend response times by 20%.",
      "Elevated code quality with comprehensive unit and integration tests (Jest/React Testing Library), achieving a 30% increase in coverage; mentored junior developers in agile sprints.",
    ],
  },
  {
    no: "05",
    role: "Undergraduate Researcher",
    org: "PARCE-Lab — Georgia Tech",
    time: "Jan 2025 — May 2025",
    where: "Atlanta, GA",
    bullets: [
      "Conducted background research from academic articles to inform study design on user trust and perception of AI.",
      "Designed and distributed user surveys to collect quantitative and qualitative feedback, informing prototype iterations.",
      "Researched user interactions with AI agents, increasing engagement by 25% through improved UX design; studied how fidelity impacts trust, resulting in a 15% increase in perceived reliability.",
    ],
  },
  {
    no: "06",
    role: "Co-Founder",
    org: "Apex Reviews — Georgia Tech CREATE-X",
    time: "Aug 2024 — Present",
    where: "Atlanta, GA",
    bullets: [
      "Co-founded startup through competitive CREATE-X accelerator program, building an AI-powered gaming feedback platform.",
      "Engineered high-performance React 18 application with micro-frontend architecture — 45% bundle size reduction and sub-2s load times.",
      "Built enterprise-grade component library with 47+ reusable elements using advanced React patterns, accelerating development velocity by 60%.",
      "Led product design from concept to MVP; created pixel-perfect Figma prototypes and conducted 20+ user interviews to validate product-market fit.",
    ],
  },
  {
    no: "07",
    role: "Associate Director & Graphic Designer",
    org: "Artificial Intelligence @ GT",
    time: "Mar 2024 — May 2025",
    where: "Atlanta, GA",
    bullets: [
      "Spearheaded comprehensive brand transformation, developing a cohesive design system that increased social media engagement by 150% and membership by 40%.",
      "Built and managed a high-performing creative team of 8 designers; agile design processes improved project delivery speed by 3x.",
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
