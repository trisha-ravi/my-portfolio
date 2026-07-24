export default {
  overview: {
    title: "Overview",
    what:
      "Apex Reviews is a feedback platform built around one idea: game studios shouldn't have to choose between drowning in player comments and flattening them into a useless score. We use AI to pull reviews and community chatter into themed, prioritized insights — with every claim linked back to the original post — so teams can act on signal instead of noise.",
    role: "Co-Founder · Product Designer",
    timeline: "Aug 2024 — Present",
    team: "2 co-founders",
  },
  sections: [
    {
      id: "problem",
      title: "The problem",
      body:
        "Live-service studios drown in unstructured player feedback across Steam, Reddit, forums, and social. Existing tools either flatten nuanced complaints into blunt positive/negative scores, or demand analysts re-read everything by hand. Neither scales when a game is live and the next patch window is days away.",
      subsections: [
        {
          title: "Who has this problem",
          body:
            "Community managers, product managers, and live-ops teams at studios that need to understand player sentiment quickly — without hiring another full-time analyst just to read Reddit.",
        },
        {
          title: "Why it matters",
          body:
            "Player feedback drives patches, balance changes, and retention. Missing a critical signal — or misreading why players are upset — can cost studios players and revenue. Speed without context is just as dangerous as context without speed.",
        },
        {
          title: "What the research showed",
          bodies: [
            "Competitive analysis of sentiment tools and community platforms surfaced a consistent gap: automated scraping and dashboards existed, but nuance died in the summary. Gaming jargon, sarcasm, and meme-heavy language broke general models. Analysts still had to validate every insight by hand.",
            "Early conversations with developers and community managers during CREATE-X sharpened that further. Three quotes shaped almost everything that came after:",
          ],
          quotes: [
            "I don't need another dashboard — I need to know what to fix this week.",
            "Sentiment scores tell me players are angry, not why.",
            "We can't hire another analyst just to read Reddit.",
          ],
          after:
            "That second quote changed the product. The problem wasn't aggregation — studios already had too much raw text. It was prioritization with proof. A score without a theme is noise. A theme without a source link is a claim nobody will ship a fix on.",
        },
        {
          title: "Goals",
          body:
            "If Apex Reviews worked, it would mean studios could move from reading to deciding without losing the detail that makes feedback actionable:",
          list: [
            "Cut time-to-insight from hours of manual reading to minutes",
            "Surface actionable themes, not just sentiment scores",
            "Preserve context by linking every insight to original posts",
            "Let non-analysts understand player priorities without a specialist bottleneck",
            "Land pilot partnerships with live-service studios",
          ],
        },
      ],
    },
    {
      id: "users",
      title: "Defining the user",
      body:
        "I built two lightweight personas out of the studio conversations, since the two clearest buyers sat on different sides of the same workflow.",
      personas: [
        {
          name: "Sam, 31 — Community Manager",
          description:
            "Owns Discord, Reddit, and Steam for a mid-size studio. Spends hours triaging feedback manually before anyone on the product team sees it. Needs prioritized issue lists, source links for context, and alerts when volume spikes — not another wall of equal-weight charts.",
        },
        {
          name: "Riley, 27 — Product Manager",
          description:
            "Decides what goes into the next patch based on player data and team capacity. Needs theme-level summaries, trends over time, and something exportable for standup — because subjective prioritization and siloed sources keep delaying the feedback loop.",
        },
      ],
      challenge:
        "How might we help game studios understand player feedback across channels quickly — without losing the nuance that makes it actionable?",
    },
    {
      id: "ideation",
      title: "Ideation: why themes with sources won",
      body:
        "I explored several product directions before committing to one, and each of the ones we rejected failed for a specific reason.",
      rejected: [
        {
          concept: "Pure sentiment dashboard",
          reason:
            "Studios were clear: scores alone aren't actionable. Knowing players are angry doesn't tell you what to fix this week. Same information problem as raw volume, just wearing a chart.",
        },
        {
          concept: "AI chatbot for querying feedback",
          reason:
            "Interesting for exploration, but busy teams needed a ranked feed they could open and act on — not an open-ended conversation they had to drive every morning.",
        },
        {
          concept: "Automated patch note generator",
          reason:
            "Too risky without human review. Better as a future assistive feature than a core promise studios would bet a release on.",
        },
        {
          concept: "Community health score",
          reason:
            "A single number hid the detail studios needed to prioritize work. It looked decisive and explained nothing.",
        },
      ],
      footer:
        "A theme-based insight feed with source links won. It balanced AI speed with human trust through transparency: the model clusters and ranks, the human verifies before acting. That trust loop is the thread that runs through almost every decision after this one.",
    },
    {
      id: "ia",
      title: "Information architecture",
      subsections: [
        {
          title: "Navigation",
          body:
            "A flat structure — Dashboard, Themes, Sources, Settings — so the path from overview to proof is short. Dashboard answers what needs attention now. Themes hold clustered insights. Sources keep the raw feed for verification.",
        },
        {
          title: "Feature prioritization",
          list: [
            "Must have: multi-source ingestion, theme clustering, source drill-down",
            "Should have: volume alerts, time-range filters, export",
            "Nice to have: team collaboration, custom taxonomies, patch note drafts",
          ],
        },
        {
          title: "User flow",
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
          title: "Site map",
          list: [
            "Dashboard → top themes, volume trends, alerts",
            "Themes → cluster detail → related posts",
            "Sources → filtered feed → post detail",
            "Settings → integrations, notifications, team",
          ],
        },
      ],
      footer:
        "The hierarchy mirrors how studios already triage: scan priorities, dig into one theme, verify against sources, then hand off. We didn't invent a new workflow — we removed the manual copy-paste between tabs that used to sit in the middle of it.",
    },
    {
      id: "visual",
      title: "Visual design",
      subsections: [
        {
          title: "Brand personality",
          list: ["Professional", "Data-forward", "Trustworthy", "Modern", "Gaming-aware"],
        },
        {
          title: "Color and typography",
          body:
            "A dark, high-contrast UI suited for long reading sessions. Clear typographic hierarchy separates AI-generated summaries from source material so users always know what is synthesis and what is evidence.",
        },
        {
          title: "Design system",
          body:
            "Built a 47-component React design system — cards, data tables, filter bars, insight chips, source preview panels — so dashboard, themes, and source views feel like one continuous product instead of three separate tools.",
        },
        {
          title: "Microinteractions",
          list: [
            "Theme cards expand inline to show top posts without a full page load",
            "Source preview panel slides in from the right for quick context checks",
            "Filter chips update the feed in real time with loading skeletons for perceived speed",
            "Alert badges pulse subtly when new high-volume themes emerge",
          ],
        },
      ],
      screens: [
        {
          title: "Dashboard",
          body: "At-a-glance view of top themes, feedback volume, and recent spikes — answers what needs attention now.",
        },
        {
          title: "Theme detail",
          body: "Clustered insights with sentiment context, related posts, and trend over time — bridges summary and source.",
        },
        {
          title: "Source feed",
          body: "Filterable feed of raw posts from connected channels for anyone who wants to verify AI output.",
        },
        {
          title: "Settings and integrations",
          body: "Connect Steam, Reddit, and other sources; configure alerts and team access.",
        },
      ],
    },
    {
      id: "testing",
      title: "Testing and what changed because of it",
      body:
        "Demo-day pitches and pilot conversations with two studios shaped the product more than any internal review.",
      findings: [
        {
          label: "What people struggled with",
          items: [
            "Early dashboards showed too many themes at equal weight — users couldn't prioritize",
            "AI summaries without source links eroded trust immediately",
          ],
        },
        {
          label: "What I changed in response",
          items: [
            "Added ranked theme prioritization based on volume and sentiment shift",
            "Every insight now links to original posts for verification",
            "Simplified onboarding to connect one source first, then expand",
          ],
        },
      ],
      footer:
        "None of these were polish passes. Each one came from watching studios refuse to act on a claim they couldn't open and check.",
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
      footer:
        "A tool for triage only works if the people who need the insight can actually use it under deadline pressure — including keyboard-first and assistive workflows.",
    },
    {
      id: "product-thinking",
      title: "Product thinking",
      items: [
        {
          label: "AI speed vs. human trust",
          text: "Every AI insight links to source material. Studios won't ship a fix on a summary they can't verify.",
        },
        {
          label: "Breadth vs. depth",
          text: "We launched with theme clustering over a chatbot. Structured, ranked insights beat open-ended queries for teams that need a decision before standup.",
        },
        {
          label: "Sarcasm and memes",
          text: "Gaming communities use language general sentiment models miss. Gaming-specific training data remains an ongoing priority, not a solved checkbox.",
        },
        {
          label: "Business goal alignment",
          text: "Pilot partnerships validated willingness to pay before we invested in advanced collaboration features. Build the workflow people will renew, then deepen it.",
        },
      ],
    },
    {
      id: "measuring",
      title: "Measuring success",
      body: "Post launch, I'd track this across five layers:",
      items: [
        {
          label: "Activation",
          text: "source connection rate, time to first insight",
        },
        {
          label: "Engagement",
          text: "daily active users, theme drill-down rate, source verification clicks",
        },
        {
          label: "Retention",
          text: "weekly return rate, pilot renewal rate",
        },
        {
          label: "Business",
          text: "pilot conversion to paid, self-reported time saved vs. manual review",
        },
        {
          label: "Quality",
          text: "insight accuracy validated by analysts, false positive theme rate",
        },
      ],
    },
    {
      id: "reflection",
      title: "Reflection",
      reflection: {
        worked:
          "Linking every AI summary to source posts built immediate trust. Theme-based prioritization matched how studios already triage feedback.",
        didnt:
          "Early versions tried to show everything at once. Studios wanted a ranked fix this first view, not a wall of equal-weight data.",
        surprised:
          "Demo day landed two paid pilots — validation came faster than expected once we focused on one clear workflow instead of a broad platform pitch.",
        improve:
          "I'd invest earlier in gaming-specific NLP evaluation and run structured usability tests with community managers, not just founder intuition.",
        learned:
          "For B2B AI products, transparency beats magic. Users adopt tools they can verify, not black boxes they have to trust blindly.",
      },
    },
    {
      id: "next-steps",
      title: "Next steps",
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
