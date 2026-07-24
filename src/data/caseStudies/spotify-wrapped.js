export default {
  overview: {
    title: "Overview",
    what:
      "Spotify Wrapped is beloved — but locking music insights to one day a year leaves a year-long gap. This native Android app makes discovery continuous: touch-first visualizations, real-time Spotify sync, and AI insights that explain how tastes shift, not just what topped December.",
    role: "Solo Designer & Developer",
    timeline: "Feb 2024 — Mar 2024",
    team: "Solo",
  },
  sections: [
    {
      id: "problem",
      title: "The problem",
      body:
        "Spotify Wrapped is a cultural phenomenon, but music insights locked to one day a year create a frustrating gap for people who want to understand their listening habits continuously — on the phone where they actually stream.",
      subsections: [
        {
          title: "Who has this problem",
          body:
            "Mobile-first Spotify listeners who want to explore how their taste evolves year-round — not just share a December recap when everyone else posts theirs.",
        },
        {
          title: "Why it matters",
          body:
            "Music data can reveal mood patterns, discovery habits, and taste shifts — but only if it's available when curiosity hits, not eleven months later as a nostalgia card.",
        },
        {
          title: "What the research showed",
          bodies: [
            "Competitive analysis of Last.fm, Apple Music Replay, Stats.fm, and Spotify's own Wrapped experience surfaced a consistent gap: annual-only access, desktop-first analytics, and surface-level metrics that never explained why taste changed. Nothing optimized for continuous, mobile-first, meaningful exploration.",
            "I interviewed twelve Spotify users about how they used Wrapped and what they wished they could see the rest of the year. Three quotes shaped almost everything that came after:",
          ],
          quotes: [
            "I love Wrapped but forget about it until December.",
            "I want to know why my taste changed, not just what changed.",
            "I tried Last.fm but the mobile experience felt like a website, not an app.",
          ],
          after:
            "That second quote changed the product. Top-ten lists answer what. They don't answer why. Any year-round tool that only repeated Wrapped's format — more often — would still leave the interesting question unsolved. The third quote locked the platform: if it didn't feel native on a phone, it wouldn't get used between Decembers.",
        },
        {
          title: "Goals",
          body:
            "If the app worked, it would mean people could explore their listening habits whenever curiosity hit — without fighting a desktop tool on a phone:",
          list: [
            "Enable year-round music discovery and self-reflection",
            "Design a mobile-first experience optimized for thumb reach and touch",
            "Explain taste evolution with AI-powered insights, not just top-ten lists",
            "Achieve sub-2-second load times with 10,000+ listening records",
            "Validate that users prefer continuous access over annual-only formats",
          ],
        },
      ],
    },
    {
      id: "users",
      title: "Defining the user",
      body:
        "I built two lightweight personas out of the interviews, since the two clearest use cases had different appetites for depth on the same core need.",
      personas: [
        {
          name: "Morgan, 24 — Music Enthusiast",
          description:
            "Listens three or more hours daily, shares Wrapped every year, curious about taste evolution. Needs year-round stats, shareable insights, and genre or mood breakdowns — without being stuck waiting for December or bouncing to a desktop tool.",
        },
        {
          name: "Casey, 30 — Casual Listener",
          description:
            "Uses Spotify daily but only engages with Wrapped when friends post about it. Needs a simple overview, quick load times, and easy navigation — curiosity without a dashboard that feels like homework.",
        },
      ],
      challenge:
        "How might we give Spotify users meaningful, year-round listening insights on mobile — without the friction of desktop analytics tools?",
    },
    {
      id: "ideation",
      title: "Ideation: why progressive disclosure won",
      body:
        "I explored several approaches to mobile music analytics before committing to one, and each of the ones I rejected failed for a specific reason.",
      rejected: [
        {
          concept: "Wrapped-style annual cards only",
          reason:
            "Kept the cultural format people loved, but preserved the exact access problem the project existed to solve. More polish on once-a-year wasn't year-round.",
        },
        {
          concept: "All-metrics dashboard",
          reason:
            "Overwhelming on a phone. Users couldn't find what they cared about when everything competed at the same level.",
        },
        {
          concept: "Chat-based AI insights",
          reason:
            "Interesting for open questions, but slower than visual exploration for music data people wanted to scan and poke at with their thumbs.",
        },
        {
          concept: "Social comparison features",
          reason:
            "Out of scope for v1, and privacy concerns showed up early in interviews. Better as a later layer than a launch dependency.",
        },
      ],
      footer:
        "Progressive disclosure won — three levels: overview cards, expandable details, full-screen deep dives. It matched how people wanted to explore: light by default, deeper on demand. That pattern is the thread that runs through almost every decision after this one.",
    },
    {
      id: "ia",
      title: "Information architecture",
      subsections: [
        {
          title: "Navigation",
          body:
            "A bottom tab bar with thumb-friendly reach: Overview, Artists, Tracks, Insights, and Profile. Primary content lives inside one thumb zone so exploration never requires a stretch across the screen.",
        },
        {
          title: "Feature prioritization",
          list: [
            "Must have: Spotify API sync, overview cards, top artists and tracks",
            "Should have: touch-responsive charts, offline caching, AI insights",
            "Nice to have: mood analysis, shareable cards, listening timeline",
          ],
        },
        {
          title: "User flow",
          steps: [
            "Connect Spotify account",
            "Overview dashboard",
            "Tap card to expand",
            "Full-screen deep dive",
            "AI insight explanation",
            "Return to overview",
          ],
        },
        {
          title: "Site map",
          list: [
            "Overview → summary cards → expanded detail → full-screen chart",
            "Artists → ranked list → artist detail → related tracks",
            "Tracks → ranked list → track detail → play count timeline",
            "Insights → AI-generated patterns → explanation cards",
            "Profile → account, sync status, settings",
          ],
        },
      ],
      footer:
        "The three-level model keeps Overview calm for casual curiosity while still giving enthusiasts a path into charts and AI explanations — without forcing either user through the other's preferred depth.",
    },
    {
      id: "visual",
      title: "Visual design",
      subsections: [
        {
          title: "Brand personality",
          list: ["Bold", "Data-rich", "Mobile-native", "Spotify-adjacent", "Exploratory"],
        },
        {
          title: "Color and typography",
          body:
            "Material Design 3 dark theme with Spotify-inspired accent colors. Typography scales for readability on small screens, with clear hierarchy between metrics and labels so dense data still scans.",
        },
        {
          title: "Design system",
          body:
            "A 40+ component Figma system translated to Android at about 95% visual fidelity — cards, charts, tab bar, insight chips, and loading skeletons — so the Compose build stayed consistent as features landed.",
        },
        {
          title: "Microinteractions",
          list: [
            "Card expand and collapse with shared element transitions between overview and detail",
            "Pinch-to-zoom on charts for exploring dense listening data",
            "Swipe between time periods on trend visualizations",
            "Pull-to-refresh for Spotify API sync with optimistic UI updates",
            "Skeleton loading states during data fetch for perceived performance",
          ],
        },
      ],
      screens: [
        {
          title: "Overview",
          body: "Summary cards for top artists, tracks, genres, and listening time — the entry point for exploration.",
        },
        {
          title: "Artist / Track detail",
          body: "Expandable cards with play counts, trend lines, and related content for deeper discovery.",
        },
        {
          title: "Insights",
          body: "AI-powered mood and pattern analysis explaining listening shifts in plain language.",
        },
        {
          title: "Charts and deep dives",
          body: "Full-screen touch-responsive visualizations with pinch, zoom, and swipe gestures.",
        },
      ],
    },
    {
      id: "testing",
      title: "Testing and what changed because of it",
      body:
        "I tested with twelve users across a Figma prototype and the native Android build.",
      findings: [
        {
          label: "What people struggled with",
          items: [
            "Initial chart density was too high on small screens — labels overlapped",
            "Some users didn't discover the expand gesture on overview cards",
          ],
        },
        {
          label: "What I changed in response",
          items: [
            "Simplified chart labels and increased tap targets",
            "Added a visual affordance — chevron plus tap to expand — on overview cards",
            "Implemented offline caching after users reported frustration with slow reloads",
          ],
        },
      ],
      footer:
        "None of these were aesthetic preferences. Each one came from watching where people hesitated or abandoned a screen.",
    },
    {
      id: "accessibility",
      title: "Accessibility",
      list: [
        "Material Design 3 contrast ratios for dark theme text and charts",
        "Scalable typography supporting system font size preferences",
        "Touch targets minimum 48dp on all interactive elements",
        "Content descriptions on charts for screen reader users",
        "Reduced motion option for card transitions and chart animations",
      ],
      footer:
        "Year-round access only matters if the charts are actually usable — including for people who rely on larger type, screen readers, or reduced motion.",
    },
    {
      id: "product-thinking",
      title: "Product thinking",
      items: [
        {
          label: "Year-round vs. annual",
          text: "100% of tested users preferred year-round access. That preference is the core differentiator over Spotify Wrapped, not a secondary nice-to-have.",
        },
        {
          label: "Progressive disclosure",
          text: "Three levels of detail prevent overwhelm while still serving power users who want deep dives. Default light, optional deep.",
        },
        {
          label: "Performance as a feature",
          text: "Users abandon sluggish interactions regardless of utility. Consistent 60fps and sub-1.2s loads were non-negotiable, not polish.",
        },
        {
          label: "Sparse listeners",
          text: "Users with fewer than 100 plays see encouragement messaging instead of empty charts — so early curiosity doesn't look like a broken product.",
        },
      ],
    },
    {
      id: "measuring",
      title: "Measuring success",
      body: "I'd track this across four layers:",
      items: [
        {
          label: "Engagement",
          text: "daily active users, card expansion rate, deep dive session length",
        },
        {
          label: "Performance",
          text: "average load time under 1.2s, frame rate consistency at 60fps, API call reduction via caching — achieved 70%",
        },
        {
          label: "Retention",
          text: "7-day return rate, sync frequency",
        },
        {
          label: "Satisfaction",
          text: "preference for year-round vs. annual — 100% in testing; mobile visualization ease — 10 of 12 rated significantly easier",
        },
      ],
    },
    {
      id: "reflection",
      title: "Reflection",
      reflection: {
        worked:
          "Progressive disclosure matched natural mobile exploration patterns. Native Android performance — 60fps, offline caching — made the experience feel premium compared to web-wrapped competitors.",
        didnt:
          "First chart designs were too dense. I underestimated how much simplification small screens require.",
        surprised:
          "Performance feedback was as strong as feature feedback. Users noticed speed before they noticed AI insights.",
        improve:
          "I'd run a longer longitudinal study to see if year-round access actually changes listening behavior, not just satisfaction scores.",
        learned:
          "Performance is a feature. Users abandon interactions that feel sluggish, regardless of how useful the data is.",
      },
    },
    {
      id: "next-steps",
      title: "Next steps",
      list: [
        "iOS version with SwiftUI",
        "Social sharing cards for individual insights",
        "Collaborative playlists based on taste overlap",
        "Apple Watch glance for daily listening summary",
        "Deeper AI explanations for taste evolution",
        "Spotify podcast analytics integration",
      ],
    },
  ],
};
