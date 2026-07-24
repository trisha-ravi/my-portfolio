import moodlesCalm from "../../assets/moodles-calm.png";
import moodlesCare from "../../assets/moodles-care.png";

export default {
  overview: {
    title: "Overview",
    what:
      "Moodles is a mood tracking app built around one idea: logging how you feel shouldn't take longer than feeling it. Instead of journaling, users tap one of twelve illustrated faces. No typing, no required text, no multi step flow. The whole interaction is designed to fit inside five seconds.",
    role: "Product Designer (UX/UI)",
    timeline: "4 to 6 weeks (concept project)",
    team: "Solo",
  },
  sections: [
    {
      id: "problem",
      title: "The problem",
      body:
        "Most mood tracking apps get abandoned within weeks. I wanted to understand why, not guess at it, so I started with competitive analysis and five user interviews before designing anything.",
      subsections: [
        {
          title: "Who has this problem",
          body:
            "Students, busy professionals, and anyone who's tried a wellness or journaling app before and quietly stopped using it.",
        },
        {
          title: "Why it matters",
          body:
            "Emotional awareness supports better decision making and stress management, but only if the check in habit actually holds. Most apps make that habit hard to keep.",
        },
        {
          title: "What the research showed",
          bodies: [
            "Competitive analysis of existing mood apps surfaced a consistent set of pain points: too much typing, too many mood options, complicated onboarding, and information overload for what's supposed to be a thirty second daily habit.",
            "The interviews sharpened that further. Three quotes shaped almost everything that came after:",
          ],
          quotes: [
            "I want to track my mood, but I don't want to write every day.",
            "If it takes longer than a minute, I'll probably skip it.",
            "Sometimes I know how I feel, I just don't know how to describe it.",
          ],
          after:
            "That third one changed my whole approach. It's not a speed problem, it's a translation problem. Asking someone to turn a feeling into words is hard on its own, independent of how fast they can type. Any solution that still required verbalizing the feeling, even briefly, was solving the wrong layer of the problem.",
        },
        {
          title: "Goals",
          body:
            "If Moodles worked, it would mean people were actually building the habit, not just downloading the app:",
          list: [
            "Get daily check ins under five seconds",
            "Remove journaling as a required step entirely",
            "Improve retention through low pressure, repeatable interactions",
            "Make tracking accessible to people who find writing difficult",
            "Surface insights without overwhelming the core experience",
          ],
        },
      ],
    },
    {
      id: "users",
      title: "Defining the user",
      body:
        "I built two lightweight personas out of the interview patterns, since the two clearest use cases had different pressure points on the same core problem.",
      personas: [
        {
          name: "Jordan, 22 — Student",
          description:
            "Uses wellness apps during stressful semesters, drops off once journaling starts to feel like homework. Needs quick check ins and no guilt when she skips a day. Motivated by wanting to understand her own stress patterns without it becoming another obligation.",
        },
        {
          name: "Alex, 29 — Busy Professional",
          description:
            "Curious about emotional awareness but has a few seconds between meetings, not a few minutes. Needs one tap logging and clear summaries, not a clinical feeling tool or feature bloat. Motivated by wanting to catch burnout early without adding mental load.",
        },
      ],
      challenge:
        "How might we help busy people build a daily mood tracking habit without requiring journaling?",
    },
    {
      id: "ideation",
      title: "Ideation: why faces won",
      body:
        "I tested five directions before committing to one, and each of the four I rejected failed for a specific, different reason.",
      rejected: [
        {
          concept: "Emoji picker",
          reason:
            "Rejected for ambiguity. Emoji already carry meaning from texting, so users weren't sure which one actually matched their mood. Same translation problem as writing, just wearing a different costume.",
        },
        {
          concept: "Color wheel",
          reason:
            "Visually appealing, but color alone doesn't communicate emotion clearly enough on its own. Pretty, but underspecified.",
        },
        {
          concept: "Mood slider",
          reason:
            "This was the one I expected to win, since sliders are the standard fast input pattern. It didn't. A single good to bad axis implied judgment, and that undercut the low pressure tone the whole app was trying to set.",
        },
        {
          concept: "Emotion cards",
          reason:
            "Better than plain text, but still required reading a label every time, which brings back the exact friction the project was trying to remove.",
        },
      ],
      footer:
        "Illustrated faces tested best. They reduced cognitive effort, felt approachable, and made selection near instant. The mechanism is recognition instead of construction: instead of building a description of how you feel, you scan a set of expressions and recognize the one that matches. Recognition is a faster, lower effort cognitive task than construction, and that difference is the thread that runs through almost every decision after this one.",
    },
    {
      id: "ia",
      title: "Information architecture",
      subsections: [
        {
          title: "Navigation",
          body:
            "A flat, four tab structure — Home, History, Insights, Settings — with the daily check in always one tap away from Home.",
        },
        {
          title: "Feature prioritization",
          list: [
            "Must have: one tap mood logging, mood history",
            "Should have: weekly insights, streaks, optional notes",
            "Nice to have: reminders, monthly trends, tags",
          ],
        },
        {
          title: "User flow",
          steps: [
            "Home",
            "Tap today's mood",
            "(Optional) Add a note or tag",
            "Save",
            "Updated history",
            "Weekly insights",
          ],
        },
        {
          title: "Site map",
          list: [
            "Home → mood grid → save confirmation",
            "History → calendar or list view → day detail",
            "Insights → weekly summary → monthly trends",
            "Settings → reminders, labels, accessibility",
          ],
        },
      ],
      footer:
        "The flat structure matters here. Every layer of navigation between opening the app and completing the check in is a chance for the user's intention to decay before they act on it. Keeping check in on Home and everything else one tap away was a direct response to that.",
    },
    {
      id: "visual",
      title: "Visual design",
      subsections: [
        {
          title: "Brand personality",
          list: ["Friendly", "Calm", "Playful", "Minimal", "Non judgmental"],
        },
        {
          title: "Color and typography",
          body:
            "Soft gradients and warm colors, aiming for welcoming without tipping into childish or clinical. Large, readable type with generous spacing to keep every interaction simple to parse.",
        },
        {
          title: "Components",
          body:
            "The twelve illustrated faces are the core design system element, each mood distinct through expression rather than color alone. Supporting components — cards, streak badges, insight charts — reuse the same rounded corners, soft shadows, and calm palette so the whole app feels like one continuous system rather than a collection of screens.",
        },
        {
          title: "Microinteractions",
          list: [
            "Subtle scale and color feedback on face selection so the tap registers instantly",
            "A brief animation on save instead of an interrupting modal",
            "Lightweight streak celebrations with no guilt messaging when a day is missed",
            "Swipeable insight cards with progressive disclosure so deeper detail is available without cluttering the first view",
          ],
        },
      ],
      screens: [
        {
          title: "Home / Check in",
          body: "The primary screen — twelve mood faces in a scannable grid, one tap to log, optional note afterward.",
        },
        {
          title: "History",
          body: "Calendar and list views for spotting patterns over time.",
        },
        {
          title: "Insights",
          body: "Weekly summaries and monthly trends, translating raw data into simple takeaways.",
        },
        {
          title: "Settings",
          body: "Reminders, optional labels, accessibility preferences — deliberately secondary so check in stays front and center.",
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
      id: "testing",
      title: "Testing and what changed because of it",
      body:
        "I ran informal usability tests on a Figma prototype of the core check in flow with five participants.",
      findings: [
        {
          label: "What people struggled with",
          items: [
            "An early sixteen face grid felt overwhelming — people took noticeably longer to decide",
            "Some wanted text labels under faces the first time they used the app, then wanted them gone once they were familiar",
            "The history view was too dense at first — a calendar first layout tested much better",
          ],
        },
        {
          label: "What I changed in response",
          items: [
            "Cut moods from sixteen to twelve, which measurably sped up decision time",
            "Added optional labels beneath every face, serving new users and doubling as an accessibility feature",
            "Simplified history to a calendar first view with expandable day detail",
          ],
        },
      ],
      footer:
        "None of these were stylistic calls. Each one came directly out of watching where people hesitated.",
    },
    {
      id: "accessibility",
      title: "Accessibility",
      list: [
        "High color contrast across text and UI",
        "Large touch targets on every mood face, minimum 44 by 44pt",
        "Screen reader support with descriptive mood labels",
        "Color is never the only indicator of mood — expression and optional text labels provide redundancy",
        "Optional labels beneath every face for anyone who prefers text",
        "Reduced motion option for save animations and insight transitions",
      ],
      footer:
        "A five second check in only holds as a claim if it's actually five seconds for everyone. Accessibility here wasn't a pass at the end, it was a check on whether the core promise of the app was actually true across different users.",
    },
    {
      id: "product-thinking",
      title: "Product thinking",
      items: [
        {
          label: "Twelve moods, not more",
          text: "More options increased decision time in testing. Twelve gave enough emotional range without pushing the check in past five seconds.",
        },
        {
          label: "No required journaling",
          text: "Notes and tags are optional. Requiring text would have quietly rebuilt the exact problem the app exists to solve.",
        },
        {
          label: "Insights as secondary",
          text: "Trends and streaks help retention, but only after logging feels effortless. The IA keeps insights one tab away, out of the critical path, because people don't want to analyze a habit they haven't built yet.",
        },
        {
          label: "Missed days aren't failures",
          text: "Streaks celebrate consistency but don't punish gaps. Shame language was deliberately left out, because the moment opening the app feels bad, people stop opening it.",
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
          text: "first check in completion rate",
        },
        {
          label: "Daily engagement",
          text: "daily check in completion rate, average session length under 10 seconds",
        },
        {
          label: "Retention",
          text: "7 day and 30 day retention",
        },
        {
          label: "Habit formation",
          text: "average streak length, task success rate for one tap logging",
        },
        {
          label: "Satisfaction",
          text: "qualitative feedback, app store ratings, optional note usage rate",
        },
      ],
    },
    {
      id: "reflection",
      title: "Reflection",
      reflection: {
        worked:
          "Reducing the daily task to a single tap made the concept click immediately in testing. Illustrated faces communicated emotion faster than any text based or scale based option.",
        didnt:
          "My first IA put too many insight views up front. Testing showed people wanted a simpler home screen and preferred to defer analytics until they'd logged a few days.",
        surprised:
          "Participants cared less about precision and more about whether the app felt judgmental. Tone and illustration style mattered as much as raw speed.",
        improve:
          "I'd run a longer diary study to actually validate the retention assumptions, and test reminder timing with real users over several weeks instead of a single testing session.",
        learned:
          "Designing a good product isn't about adding features, it's about finding every point of friction and removing it. Consistency beats detail for a daily habit.",
      },
    },
    {
      id: "next-steps",
      title: "Next steps",
      list: [
        "Apple Health integration to correlate mood with sleep and activity",
        "Home screen widget so logging doesn't require opening the app",
        "AI generated insights that surface patterns in plain language",
        "Apple Watch quick log for an even faster check in",
        "Optional journaling layer for users who want more depth over time",
        "Opt in mood sharing with a trusted contact or therapist",
      ],
    },
  ],
};
