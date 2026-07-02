import moodlesCalm from "../../assets/moodles-calm.png";
import moodlesCare from "../../assets/moodles-care.png";

export default {
  overview: {
    what:
      "Moodles is a mood-tracking app that uses 12 expressive illustrated faces to help users log how they feel in one tap — no journaling required.",
    role: "Product Designer (UX/UI)",
    timeline: "4–6 weeks (concept project)",
    team: "Solo",
  },
  sections: [
    {
      id: "problem",
      title: "The Problem",
      body:
        "People abandon mood-tracking apps because daily journaling takes too much time and effort. What starts as a wellness habit quickly becomes another task on an already full to-do list.",
      subsections: [
        {
          title: "Who has the problem?",
          body:
            "Students, busy professionals, and anyone curious about their emotional patterns — especially people who have tried wellness or journaling apps before but couldn't stick with them.",
        },
        {
          title: "Why is it important?",
          body:
            "Emotional awareness supports better decision-making, stress management, and self-understanding. But that only works if check-ins happen consistently — and most apps make consistency hard.",
        },
        {
          title: "Evidence",
          list: [
            "Competitive analysis showed most mood apps require typing, multi-step flows, or lengthy onboarding.",
            "Five user interviews revealed a shared pattern: users want to track mood, but skip when it takes longer than a minute.",
            "Interviewees described knowing how they feel but struggling to describe it in words — a friction point journaling-heavy apps don't solve.",
          ],
        },
      ],
    },
    {
      id: "goals",
      title: "Goals & Success Metrics",
      body: "If Moodles launched, success would mean users actually build the habit — not just download the app.",
      list: [
        "Increase daily check-ins by making logging take under five seconds",
        "Reduce friction by removing journaling as a required step",
        "Improve retention through low-pressure, repeatable interactions",
        "Make mood tracking accessible to users who find writing difficult",
        "Surface useful insights without overwhelming users with data",
      ],
    },
    {
      id: "research",
      title: "Research",
      subsections: [
        {
          title: "Competitive Analysis",
          body: "I reviewed several mood-tracking apps to identify common patterns across the category.",
          lists: [
            {
              label: "What works",
              items: [
                "Mood history and trends",
                "Helpful reminders",
                "Visual calendars",
              ],
            },
            {
              label: "Pain points",
              items: [
                "Too much typing",
                "Too many mood options",
                "Complex onboarding",
                "Information overload",
                "High effort for a daily habit",
              ],
            },
          ],
        },
        {
          title: "User Interviews",
          body: "I interviewed five people ages 18–35 who had previously used wellness or journaling apps.",
        },
        {
          title: "Key Insights",
          quotes: [
            "I want to track my mood, but I don't want to write every day.",
            "If it takes longer than a minute, I'll probably skip it.",
            "Sometimes I know how I feel—I just don't know how to describe it.",
          ],
        },
        {
          title: "Patterns & Surprises",
          list: [
            "Consistency mattered more than detail — users cared about showing up, not writing paragraphs.",
            "Visual selection felt faster than rating scales or color pickers in early concept tests.",
            "Users wanted insights, but only after the core check-in felt effortless.",
          ],
        },
      ],
    },
    {
      id: "users",
      title: "Define the User",
      personas: [
        {
          name: "Jordan, 22 — Student",
          description:
            "Uses wellness apps during stressful semesters but drops off when journaling feels like homework.",
          needs: ["Quick daily check-ins", "Low-pressure tracking", "Simple mood history"],
          painPoints: ["Too much typing", "Guilt when skipping days", "Overwhelming mood scales"],
          motivations: ["Understand stress patterns", "Build a small daily habit"],
        },
        {
          name: "Alex, 29 — Busy Professional",
          description:
            "Interested in emotional awareness but only has a few seconds between meetings.",
          needs: ["One-tap logging", "Clear weekly summaries", "Optional reminders"],
          painPoints: ["Multi-step flows", "Apps that feel clinical", "Feature bloat"],
          motivations: ["Notice burnout early", "Track mood without extra mental load"],
        },
      ],
    },
    {
      id: "challenge",
      title: "Problem Statement",
      challenge:
        "How might we help busy people build a daily mood-tracking habit without requiring journaling?",
    },
    {
      id: "ideation",
      title: "Ideation",
      body: "I explored several input methods before committing to a direction:",
      list: ["Emoji picker", "Color wheel", "Mood slider", "Emotion cards", "Illustrated faces"],
      rejected: [
        {
          concept: "Emoji picker",
          reason: "Felt informal and ambiguous — users weren't sure which emoji matched their mood.",
        },
        {
          concept: "Color wheel",
          reason: "Pretty but abstract; color alone didn't communicate emotion clearly enough.",
        },
        {
          concept: "Mood slider",
          reason: "Implied a linear good-to-bad scale, which felt judgmental.",
        },
        {
          concept: "Emotion cards",
          reason: "Better than text, but still required reading labels on every check-in.",
        },
      ],
      footer:
        "Illustrated faces tested best — they reduced cognitive effort, felt approachable, and made selection instant.",
    },
    {
      id: "ia",
      title: "Information Architecture",
      subsections: [
        {
          title: "Navigation",
          body:
            "A simple tab structure keeps the app focused: Home (check-in), History, Insights, and Settings. The daily check-in is always one tap away from Home.",
        },
        {
          title: "Feature Prioritization",
          list: [
            "Must-have: one-tap mood logging, mood history",
            "Should-have: weekly insights, streaks, optional notes",
            "Nice-to-have: reminders, monthly trends, tags",
          ],
        },
        {
          title: "User Flow",
          steps: [
            "Home",
            "Tap today's mood",
            "(Optional) Add a short note or tag",
            "Save",
            "Updated mood history",
            "Weekly insights",
          ],
        },
        {
          title: "Site Map",
          list: [
            "Home → Mood grid → Save confirmation",
            "History → Calendar / list view → Day detail",
            "Insights → Weekly summary → Monthly trends",
            "Settings → Reminders, labels, accessibility",
          ],
        },
      ],
    },
    {
      id: "wireframes",
      title: "Wireframes",
      body:
        "I started with low-fidelity sketches to test layout and flow, then moved to mid-fidelity screens in Figma to validate spacing, hierarchy, and the 12-face grid before applying visual polish.",
    },
    {
      id: "visual",
      title: "Visual Design",
      subsections: [
        {
          title: "Brand Personality",
          list: ["Friendly", "Calm", "Playful", "Minimal", "Non-judgmental"],
        },
        {
          title: "Color & Typography",
          body:
            "Soft gradients and warm colors create a welcoming experience without feeling childish or clinical. Large, readable type with generous spacing keeps interactions simple.",
        },
        {
          title: "Components & Illustrations",
          body:
            "Twelve custom illustrated faces are the core design system element — each mood is distinct through expression, not just color. Supporting components (cards, streak badges, insight charts) reuse the same rounded corners, soft shadows, and calm palette for consistency.",
        },
      ],
    },
    {
      id: "screens",
      title: "High-Fidelity Screens",
      body: "Each screen serves a clear job in the habit loop:",
      screens: [
        {
          title: "Home / Check-in",
          body: "The primary screen — 12 mood faces in a scannable grid. One tap to log; optional note afterward.",
        },
        {
          title: "History",
          body: "Calendar and list views show past check-ins at a glance so users can spot patterns over time.",
        },
        {
          title: "Insights",
          body: "Weekly summaries and monthly trends translate raw data into simple, actionable takeaways.",
        },
        {
          title: "Settings",
          body: "Reminders, optional mood labels, and accessibility preferences — kept secondary so check-in stays front and center.",
        },
      ],
      images: [
        {
          src: moodlesCalm,
          alt: "Moodles calm check-in screen on iPhone showing mood summary and tags",
          caption: "Check-in — calm mood with context tags and a daily reflection.",
        },
        {
          src: moodlesCare,
          alt: "Moodles care screen on iPhone with feel-better quick actions sheet",
          caption: "Care — instant relief actions and buddy missions.",
        },
      ],
    },
    {
      id: "prototyping",
      title: "Prototyping & Interactions",
      body: "Microinteractions were designed to reinforce speed and delight without slowing the core task:",
      list: [
        "Face selection — subtle scale and color feedback on tap so users know their mood registered instantly",
        "Save confirmation — a brief, friendly animation instead of a modal interrupting the flow",
        "Streak updates — lightweight celebration when users hit milestones, without guilt when they miss a day",
        "Insight cards — swipeable weekly summaries with progressive disclosure for deeper detail",
      ],
    },
    {
      id: "testing",
      title: "Testing",
      body: "I ran informal usability tests with five participants using a Figma prototype of the core check-in flow.",
      findings: [
        {
          label: "What users struggled with",
          items: [
            "An early 16-face grid felt overwhelming — users took noticeably longer to decide.",
            "Some participants wanted text labels under faces on first use, then hid them once familiar.",
            "History view was initially too dense; a calendar-first layout tested better.",
          ],
        },
        {
          label: "What changed afterward",
          items: [
            "Reduced moods from 16 to 12 to speed up decision time.",
            "Added optional labels beneath every face for clarity and accessibility.",
            "Simplified history to calendar view with expandable day details.",
          ],
        },
      ],
    },
    {
      id: "accessibility",
      title: "Accessibility",
      list: [
        "High color contrast across text and UI elements",
        "Large touch targets on every mood face (minimum 44×44pt)",
        "Screen reader support with descriptive mood labels",
        "Color is never the only indicator of mood — expression and optional text labels provide redundancy",
        "Optional labels beneath every face for users who prefer text",
        "Reduced motion option for save animations and insight transitions",
      ],
    },
    {
      id: "product-thinking",
      title: "Product Thinking",
      items: [
        {
          label: "12 moods vs. more options",
          text: "I chose 12 faces because more options increased decision time during testing. Twelve provides enough emotional variety while keeping check-ins under five seconds.",
        },
        {
          label: "No required journaling",
          text: "Notes and tags are optional — requiring text would undermine the core value proposition of speed and low pressure.",
        },
        {
          label: "Insights as secondary",
          text: "Trends and streaks motivate retention, but only after logging is effortless. The IA keeps insights one tab away, not in the critical path.",
        },
        {
          label: "Edge case: missed days",
          text: "Streaks celebrate consistency but don't punish gaps — the UI avoids shame language to reduce abandonment after a missed check-in.",
        },
      ],
    },
    {
      id: "measuring",
      title: "Measuring Success",
      body: "Post-launch, I'd track both engagement and habit formation:",
      metricGroups: [
        {
          title: "Activation",
          items: ["First check-in completion rate"],
        },
        {
          title: "Daily Engagement",
          items: ["Daily check-in completion rate", "Average session length (target: under 10 seconds)"],
        },
        {
          title: "Retention",
          items: ["7-day retention", "30-day retention"],
        },
        {
          title: "Habit Formation",
          items: ["Average check-in streak length", "Task success rate for one-tap logging"],
        },
        {
          title: "User Satisfaction",
          items: ["Qualitative feedback", "App store ratings", "Optional note usage rate"],
        },
      ],
    },
    {
      id: "reflection",
      title: "Reflection",
      reflection: {
        worked:
          "Reducing the daily task to a single tap made the concept immediately understandable in testing. Illustrated faces communicated emotion faster than text or scales.",
        didnt:
          "My first IA included too many insight views upfront. Users wanted a simpler home screen and deferred analytics until after they'd logged a few days.",
        surprised:
          "Participants cared less about mood precision and more about whether the app felt judgmental. Tone and illustration style mattered as much as speed.",
        improve:
          "I'd run a longer diary study to validate retention assumptions, and test reminder timing with real users over several weeks.",
        learned:
          "Designing a successful product isn't about adding features — it's about removing friction. Consistency beats detail for daily wellness habits.",
      },
    },
    {
      id: "next-steps",
      title: "Next Steps",
      body: "If I continued building Moodles beyond this concept:",
      list: [
        "Apple Health integration for correlating mood with sleep and activity",
        "Home screen widgets for check-in without opening the app",
        "AI-generated insights that surface patterns in plain language",
        "Apple Watch quick-log for even faster check-ins",
        "Optional journaling layer for users who want more depth over time",
        "Mood sharing with trusted contacts or therapists (opt-in)",
      ],
    },
  ],
};
