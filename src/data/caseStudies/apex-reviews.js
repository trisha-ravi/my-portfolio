export default {
  overview: {
    what:
      "Apex Reviews is a platform that uses AI to synthesize scattered player feedback from forums, Steam, Reddit, and social media into precise, real-time insights for game studios.",
    role: "Co-Founder · Product Designer",
    timeline: "Aug 2024 — Present",
    team: "2 co-founders",
  },
  sections: [
    {
      id: "problem",
      title: "The Problem",
      body:
        "Game studios drown in unstructured player feedback spread across dozens of channels. Existing tools either flatten nuanced signals into blunt sentiment scores or demand analysts re-read everything by hand.",
      subsections: [
        {
          title: "Who has the problem?",
          body:
            "Live-service game studios, community managers, and product teams who need to understand player sentiment quickly but lack scalable tools to process volume.",
        },
        {
          title: "Why is it important?",
          body:
            "Player feedback drives patches, balance changes, and retention. Missing a critical signal — or misreading sentiment — can cost studios players and revenue.",
        },
        {
          title: "Evidence",
          list: [
            "Studios we spoke with described spending hours manually reading Reddit threads and Steam reviews.",
            "Existing sentiment tools scored comments as positive/negative but lost context like specific feature complaints.",
            "CREATE-X accelerator context validated demand for AI-assisted feedback synthesis in gaming.",
          ],
        },
      ],
    },
    {
      id: "goals",
      title: "Goals & Success Metrics",
      list: [
        "Reduce time-to-insight for player feedback from hours to minutes",
        "Surface actionable themes, not just sentiment scores",
        "Improve signal quality by preserving context from original posts",
        "Enable non-analyst team members to understand player priorities",
        "Land pilot partnerships with live-service studios",
      ],
    },
    {
      id: "research",
      title: "Research",
      subsections: [
        {
          title: "Competitive Analysis",
          body: "Reviewed sentiment analysis tools, community management platforms, and manual workflows studios currently use.",
          lists: [
            {
              label: "What works",
              items: [
                "Automated scraping and aggregation",
                "Dashboard visualizations",
                "Alert systems for spikes in volume",
              ],
            },
            {
              label: "Gaps",
              items: [
                "Loss of nuance in AI summaries",
                "No gaming-specific taxonomy",
                "Analysts still needed to validate every insight",
                "Poor handling of sarcasm and community-specific language",
              ],
            },
          ],
        },
        {
          title: "Studio Conversations",
          body:
            "Early conversations with game developers and community managers during CREATE-X shaped the product direction.",
        },
        {
          title: "Key Insights",
          quotes: [
            "I don't need another dashboard — I need to know what to fix this week.",
            "Sentiment scores tell me players are angry, not why.",
            "We can't hire another analyst just to read Reddit.",
          ],
        },
        {
          title: "Patterns & Surprises",
          list: [
            "Studios cared more about theme clustering than raw volume metrics.",
            "Trust in AI summaries was low until users could click through to source posts.",
            "Speed mattered — insights needed to be near real-time for live-service games.",
          ],
        },
      ],
    },
    {
      id: "users",
      title: "Define the User",
      personas: [
        {
          name: "Sam, 31 — Community Manager",
          description:
            "Manages Discord, Reddit, and Steam for a mid-size studio. Spends hours triaging feedback manually.",
          needs: ["Prioritized issue lists", "Source links for context", "Volume spike alerts"],
          painPoints: ["Information overload", "Tools that miss gaming jargon", "No time for deep analysis"],
          motivations: ["Respond to players faster", "Give the dev team clear priorities"],
        },
        {
          name: "Riley, 27 — Product Manager",
          description:
            "Decides what goes into the next patch based on player data and team capacity.",
          needs: ["Theme-level summaries", "Trend over time", "Exportable reports"],
          painPoints: ["Subjective prioritization", "Delayed feedback loops", "Siloed data sources"],
          motivations: ["Ship fixes players actually want", "Reduce churn after bad patches"],
        },
      ],
    },
    {
      id: "challenge",
      title: "Problem Statement",
      challenge:
        "How might we help game studios understand player feedback across channels quickly — without losing the nuance that makes it actionable?",
    },
    {
      id: "ideation",
      title: "Ideation",
      body: "Explored several product directions before landing on the current platform:",
      list: [
        "Pure sentiment dashboard",
        "AI chatbot for querying feedback",
        "Theme-based insight feed with source links",
        "Automated patch note generator",
        "Community health score",
      ],
      rejected: [
        {
          concept: "Pure sentiment dashboard",
          reason: "Studios said scores alone weren't actionable — they needed themes and context.",
        },
        {
          concept: "Automated patch notes",
          reason: "Too risky without human review; better as a future feature.",
        },
        {
          concept: "Community health score",
          reason: "Single number hid the detail studios needed to prioritize work.",
        },
      ],
      footer:
        "Theme-based insight feed with source links won — it balanced AI speed with human trust through transparency.",
    },
    {
      id: "ia",
      title: "Information Architecture",
      subsections: [
        {
          title: "Navigation",
          body:
            "Primary nav: Dashboard (overview), Themes (clustered insights), Sources (raw feed), and Settings (integrations, alerts).",
        },
        {
          title: "Feature Prioritization",
          list: [
            "Must-have: multi-source ingestion, theme clustering, source drill-down",
            "Should-have: volume alerts, time-range filters, export",
            "Nice-to-have: team collaboration, custom taxonomies, patch note drafts",
          ],
        },
        {
          title: "User Flow",
          steps: [
            "Connect data sources",
            "Dashboard overview",
            "Drill into a theme",
            "Review source posts",
            "Share insight with team",
            "Track resolution",
          ],
        },
        {
          title: "Site Map",
          list: [
            "Dashboard → Top themes, volume trends, alerts",
            "Themes → Cluster detail → Related posts",
            "Sources → Filtered feed → Post detail",
            "Settings → Integrations, notifications, team",
          ],
        },
      ],
    },
    {
      id: "wireframes",
      title: "Wireframes",
      body:
        "Started with paper sketches mapping the insight hierarchy (overview → theme → source), then moved to low- and mid-fidelity Figma wireframes to test information density and drill-down patterns before building the React interface.",
    },
    {
      id: "visual",
      title: "Visual Design",
      subsections: [
        {
          title: "Brand Personality",
          list: ["Professional", "Data-forward", "Trustworthy", "Modern", "Gaming-aware"],
        },
        {
          title: "Color & Typography",
          body:
            "Dark, high-contrast UI suited for long analyst sessions. Clear typographic hierarchy separates AI-generated summaries from source material.",
        },
        {
          title: "Design System",
          body:
            "Built a 47-component design system in React — cards, data tables, filter bars, insight chips, and source preview panels — ensuring consistency across dashboard, themes, and source views.",
        },
      ],
    },
    {
      id: "screens",
      title: "High-Fidelity Screens",
      screens: [
        {
          title: "Dashboard",
          body: "At-a-glance view of top themes, feedback volume, and recent spikes — answers 'what needs attention now?'",
        },
        {
          title: "Theme Detail",
          body: "Clustered insights with sentiment context, related posts, and trend over time — bridges summary and source.",
        },
        {
          title: "Source Feed",
          body: "Filterable feed of raw posts from connected channels for analysts who want to verify AI output.",
        },
        {
          title: "Settings & Integrations",
          body: "Connect Steam, Reddit, and other sources; configure alerts and team access.",
        },
      ],
    },
    {
      id: "prototyping",
      title: "Prototyping & Interactions",
      list: [
        "Theme cards expand inline to show top posts without a full page load",
        "Source preview panel slides in from the right for quick context checks",
        "Filter chips update the feed in real time with loading skeletons for perceived speed",
        "Alert badges pulse subtly when new high-volume themes emerge",
      ],
    },
    {
      id: "testing",
      title: "Testing",
      body: "Demo-day pitches and pilot conversations with two studios shaped the product.",
      findings: [
        {
          label: "What users struggled with",
          items: [
            "Early dashboards showed too many themes at equal weight — users couldn't prioritize.",
            "AI summaries without source links eroded trust immediately.",
          ],
        },
        {
          label: "What changed afterward",
          items: [
            "Added ranked theme prioritization based on volume and sentiment shift.",
            "Every insight now links to original posts for verification.",
            "Simplified onboarding to connect one source first, then expand.",
          ],
        },
      ],
    },
    {
      id: "accessibility",
      title: "Accessibility",
      list: [
        "High contrast text on dark backgrounds",
        "Keyboard navigation for dashboard filters and theme cards",
        "Screen reader labels on data visualizations with text alternatives",
        "Scalable typography for long reading sessions",
        "Motion-reduced mode for alert animations",
      ],
    },
    {
      id: "product-thinking",
      title: "Product Thinking",
      items: [
        {
          label: "AI speed vs. human trust",
          text: "Every AI insight links to source material — studios won't act on summaries they can't verify.",
        },
        {
          label: "Breadth vs. depth",
          text: "Launched with theme clustering over a chatbot interface — structured insights beat open-ended queries for busy teams.",
        },
        {
          label: "Edge case: sarcasm & memes",
          text: "Gaming communities use language general sentiment models miss — gaming-specific training data is a ongoing priority.",
        },
        {
          label: "Business goal alignment",
          text: "Pilot partnerships validated willingness to pay before building advanced collaboration features.",
        },
      ],
    },
    {
      id: "measuring",
      title: "Measuring Success",
      metricGroups: [
        {
          title: "Activation",
          items: ["Source connection rate", "Time to first insight"],
        },
        {
          title: "Engagement",
          items: ["Daily active users", "Theme drill-down rate", "Source verification clicks"],
        },
        {
          title: "Retention",
          items: ["Weekly return rate", "Pilot renewal rate"],
        },
        {
          title: "Business",
          items: ["Pilot conversion to paid", "Time saved vs. manual review (self-reported)"],
        },
        {
          title: "Quality",
          items: ["Insight accuracy (validated by analysts)", "False positive theme rate"],
        },
      ],
    },
    {
      id: "reflection",
      title: "Reflection",
      reflection: {
        worked:
          "Linking every AI summary to source posts built immediate trust. Theme-based prioritization matched how studios actually triage feedback.",
        didnt:
          "Early versions tried to show everything at once. Studios wanted a ranked 'fix this first' view, not a wall of equal-weight data.",
        surprised:
          "Demo day landed two paid pilots — validation came faster than expected when we focused on one clear workflow instead of a broad platform pitch.",
        improve:
          "I'd invest earlier in gaming-specific NLP evaluation and run structured usability tests with community managers, not just founder intuition.",
        learned:
          "For B2B AI products, transparency beats magic. Users adopt tools they can verify, not black boxes they have to trust blindly.",
      },
    },
    {
      id: "next-steps",
      title: "Next Steps",
      list: [
        "Gaming-specific sentiment model fine-tuning",
        "Team collaboration — assign themes, track resolution",
        "Automated patch note drafts with human review",
        "Discord and Twitch chat integration",
        "Custom taxonomies per game genre",
        "API for embedding insights in existing studio tools",
      ],
    },
  ],
};
