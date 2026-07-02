export default {
  overview: {
    what:
      "A mobile-first Spotify analytics app redesigned for year-round discovery — touch-optimized visualizations, AI-powered pattern insights, and real-time Spotify API sync on native Android.",
    role: "Solo Designer & Developer",
    timeline: "Feb 2024 — Mar 2024",
    team: "Solo",
  },
  sections: [
    {
      id: "problem",
      title: "The Problem",
      body:
        "Spotify Wrapped is a cultural phenomenon — but music insights locked to one day a year create a frustrating gap for users who want to understand their listening habits continuously.",
      subsections: [
        {
          title: "Who has the problem?",
          body:
            "Mobile-first Spotify listeners who want to explore their taste evolution year-round — not just share a December recap.",
        },
        {
          title: "Why is it important?",
          body:
            "Music data can reveal mood patterns, discovery habits, and taste shifts — but only if it's accessible when users actually want to explore it.",
        },
        {
          title: "Evidence",
          list: [
            "85% of users interviewed wanted year-round access to listening analytics.",
            "92% of streaming happens on mobile, yet analytics experiences were built for quick social sharing, not deep exploration.",
            "Competitive analysis of Last.fm, Apple Music Replay, and Stats.fm confirmed no solution optimized for mobile-first, continuous, meaningful analytics.",
          ],
        },
      ],
    },
    {
      id: "goals",
      title: "Goals & Success Metrics",
      list: [
        "Enable year-round music discovery and self-reflection",
        "Design a mobile-first experience optimized for thumb reach and touch",
        "Explain taste evolution with AI-powered insights, not just top-10 lists",
        "Achieve sub-2-second load times with 10,000+ listening records",
        "Validate that users prefer continuous access over annual-only formats",
      ],
    },
    {
      id: "research",
      title: "Research",
      subsections: [
        {
          title: "Competitive Analysis",
          body: "Compared Last.fm, Apple Music Replay, Stats.fm, and Spotify's own Wrapped experience.",
          lists: [
            {
              label: "What works",
              items: [
                "Shareable recap cards",
                "Top artists and songs summaries",
                "Genre breakdowns",
              ],
            },
            {
              label: "Gaps",
              items: [
                "Annual-only access (Spotify Wrapped)",
                "Desktop-first analytics (Last.fm)",
                "Surface-level metrics without context",
                "No mobile-optimized deep exploration",
              ],
            },
          ],
        },
        {
          title: "User Interviews",
          body: "Interviewed 12 Spotify users about how they interact with Wrapped and what they wish they could see year-round.",
        },
        {
          title: "Key Insights",
          quotes: [
            "I love Wrapped but forget about it until December.",
            "I want to know why my taste changed, not just what changed.",
            "I tried Last.fm but the mobile experience felt like a website, not an app.",
          ],
        },
        {
          title: "Patterns & Surprises",
          list: [
            "Users wanted progressive disclosure — overview first, details on demand.",
            "Touch gestures (pinch, swipe) felt natural for exploring charts on mobile.",
            "Performance mattered as much as features — sluggish charts killed engagement in testing.",
          ],
        },
      ],
    },
    {
      id: "users",
      title: "Define the User",
      personas: [
        {
          name: "Morgan, 24 — Music Enthusiast",
          description:
            "Listens 3+ hours daily, shares Wrapped every year, curious about taste evolution.",
          needs: ["Year-round stats", "Shareable insights", "Genre and mood breakdowns"],
          painPoints: ["Annual-only data", "Shallow metrics", "Desktop-only tools"],
          motivations: ["Understand changing taste", "Discover patterns in listening"],
        },
        {
          name: "Casey, 30 — Casual Listener",
          description:
            "Uses Spotify daily but only engages with Wrapped when friends post about it.",
          needs: ["Simple overview", "Quick load times", "Easy navigation"],
          painPoints: ["Overwhelming data dashboards", "Slow apps", "Too many steps"],
          motivations: ["Occasional curiosity about listening habits", "Low-effort exploration"],
        },
      ],
    },
    {
      id: "challenge",
      title: "Problem Statement",
      challenge:
        "How might we give Spotify users meaningful, year-round listening insights on mobile — without the friction of desktop analytics tools?",
    },
    {
      id: "ideation",
      title: "Ideation",
      body: "Explored multiple approaches to mobile music analytics:",
      list: [
        "Wrapped-style annual cards only",
        "Dashboard with all metrics visible",
        "Progressive disclosure (overview → detail → deep dive)",
        "Chat-based AI insights",
        "Social comparison features",
      ],
      rejected: [
        {
          concept: "All-metrics dashboard",
          reason: "Overwhelming on mobile — users couldn't find what they cared about.",
        },
        {
          concept: "Chat-based AI",
          reason: "Interesting but slower than visual exploration for music data.",
        },
        {
          concept: "Social comparison",
          reason: "Out of scope for v1; privacy concerns in interviews.",
        },
      ],
      footer:
        "Progressive disclosure won — three levels (overview cards → expandable details → full-screen deep dives) matched how users wanted to explore.",
    },
    {
      id: "ia",
      title: "Information Architecture",
      subsections: [
        {
          title: "Navigation",
          body:
            "Bottom tab bar with thumb-friendly reach: Overview, Artists, Tracks, Insights, and Profile. Primary content lives within one thumb zone.",
        },
        {
          title: "Feature Prioritization",
          list: [
            "Must-have: Spotify API sync, overview cards, top artists/tracks",
            "Should-have: touch-responsive charts, offline caching, AI insights",
            "Nice-to-have: mood analysis, shareable cards, listening timeline",
          ],
        },
        {
          title: "User Flow",
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
          title: "Site Map",
          list: [
            "Overview → Summary cards → Expanded detail → Full-screen chart",
            "Artists → Ranked list → Artist detail → Related tracks",
            "Tracks → Ranked list → Track detail → Play count timeline",
            "Insights → AI-generated patterns → Explanation cards",
            "Profile → Account, sync status, settings",
          ],
        },
      ],
    },
    {
      id: "wireframes",
      title: "Wireframes",
      body:
        "Paper wireframes tested thumb reach and navigation patterns, followed by Figma mid-fidelity layouts for the three-level progressive disclosure model before building in Jetpack Compose.",
    },
    {
      id: "visual",
      title: "Visual Design",
      subsections: [
        {
          title: "Brand Personality",
          list: ["Bold", "Data-rich", "Mobile-native", "Spotify-adjacent", "Exploratory"],
        },
        {
          title: "Color & Typography",
          body:
            "Material Design 3 dark theme with Spotify-inspired accent colors. Typography scales for readability on small screens with clear hierarchy between metrics and labels.",
        },
        {
          title: "Design System",
          body:
            "40+ component Figma design system translated to Android at 95% visual fidelity — cards, charts, tab bar, insight chips, and loading skeletons.",
        },
      ],
    },
    {
      id: "screens",
      title: "High-Fidelity Screens",
      screens: [
        {
          title: "Overview",
          body: "Summary cards for top artists, tracks, genres, and listening time — the entry point for exploration.",
        },
        {
          title: "Artist / Track Detail",
          body: "Expandable cards with play counts, trend lines, and related content for deeper discovery.",
        },
        {
          title: "Insights",
          body: "AI-powered mood and pattern analysis explaining listening shifts in plain language.",
        },
        {
          title: "Charts & Deep Dives",
          body: "Full-screen touch-responsive visualizations with pinch, zoom, and swipe gestures.",
        },
      ],
    },
    {
      id: "prototyping",
      title: "Prototyping & Interactions",
      list: [
        "Card expand/collapse with shared element transitions between overview and detail",
        "Pinch-to-zoom on charts for exploring dense listening data",
        "Swipe between time periods on trend visualizations",
        "Pull-to-refresh for Spotify API sync with optimistic UI updates",
        "Skeleton loading states during data fetch for perceived performance",
      ],
    },
    {
      id: "testing",
      title: "Testing",
      body: "Tested with 12 users using the Figma prototype and native Android build.",
      findings: [
        {
          label: "What users struggled with",
          items: [
            "Initial chart density was too high on small screens — labels overlapped.",
            "Some users didn't discover the expand gesture on overview cards.",
          ],
        },
        {
          label: "What changed afterward",
          items: [
            "Simplified chart labels and increased tap targets.",
            "Added visual affordance (chevron + 'tap to expand') on overview cards.",
            "Implemented offline caching after users reported frustration with slow reloads.",
          ],
        },
      ],
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
    },
    {
      id: "product-thinking",
      title: "Product Thinking",
      items: [
        {
          label: "Year-round vs. annual",
          text: "100% of tested users preferred year-round access — the core differentiator over Spotify Wrapped.",
        },
        {
          label: "Progressive disclosure",
          text: "Three levels of detail prevent overwhelm while still serving power users who want deep dives.",
        },
        {
          label: "Performance as a feature",
          text: "Users abandon sluggish interactions regardless of utility — 60fps and sub-1.2s load times were non-negotiable.",
        },
        {
          label: "Edge case: sparse listeners",
          text: "Users with fewer than 100 plays see encouragement messaging instead of empty charts.",
        },
      ],
    },
    {
      id: "measuring",
      title: "Measuring Success",
      metricGroups: [
        {
          title: "Engagement",
          items: ["Daily active users", "Card expansion rate", "Deep dive session length"],
        },
        {
          title: "Performance",
          items: ["Average load time (target: under 1.2s)", "Frame rate consistency (60fps)", "API call reduction via caching (achieved 70%)"],
        },
        {
          title: "Retention",
          items: ["7-day return rate", "Sync frequency"],
        },
        {
          title: "Satisfaction",
          items: ["Preference for year-round vs. annual (100% in testing)", "Mobile visualization ease (10 of 12 rated significantly easier)"],
        },
      ],
    },
    {
      id: "reflection",
      title: "Reflection",
      reflection: {
        worked:
          "Progressive disclosure matched natural mobile exploration patterns. Native Android performance (60fps, offline caching) made the experience feel premium compared to web-wrapped competitors.",
        didnt:
          "First chart designs were too dense — I underestimated how much simplification mobile screens require.",
        surprised:
          "Performance feedback was as strong as feature feedback. Users noticed speed before they noticed AI insights.",
        improve:
          "I'd run a longer longitudinal study to see if year-round access actually changes listening behavior, not just satisfaction.",
        learned:
          "Performance is a feature. Users abandon interactions that feel sluggish, regardless of how useful the data is.",
      },
    },
    {
      id: "next-steps",
      title: "Next Steps",
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
