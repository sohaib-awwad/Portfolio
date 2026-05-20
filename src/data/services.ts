export type Service = {
  slug: string;
  title: string;
  icon: string;
  tagline: string;
  cardChips: string[];

  intro?: string;
  whatYouGet?: string[];
  process?: { step: string; desc: string }[];
  techAndTools?: string[];
  featuredProjectSlugs?: string[];
  faq?: { q: string; a: string }[];
};

export const services: Service[] = [
  {
    slug: "full-stack",
    title: "Full-Stack Web Development",
    icon: "fa-solid fa-code",
    tagline:
      "I build complete web apps from front to back — fast, secure, and scalable.",
    cardChips: ["Angular/.Net", "Git/Github", "SSMS"],
    intro: `From data model to the pixel on the screen, I build complete web applications that real people can use day-to-day. The combinations vary — Angular with .NET and SQL Server is my go-to — but the principle is the same: a clear architecture, a clean front-end, and code that the next developer can read without a phone call.`,
    whatYouGet: [
      "A working web application — front-end, back-end, and database",
      "A clear, documented data model and API",
      "Responsive UI that works on phones, tablets, and desktops",
      "Source code in a repository you own, with clear commit history",
      "Help deploying the app — GitHub Pages, Azure, or your preferred host",
    ],
    process: [
      {
        step: "Kickoff",
        desc: "A short conversation to understand what you're building, who it's for, and what success looks like.",
      },
      {
        step: "Architecture",
        desc: "I sketch the data model, pick the right tech for the job, and align with you before any code is written.",
      },
      {
        step: "Build",
        desc: "Front-end and back-end in parallel, with regular check-ins so you see the app take shape instead of waiting for a big reveal.",
      },
      {
        step: "Handoff",
        desc: "Deployment, documentation, and a walkthrough so your team can take over with confidence.",
      },
    ],
    techAndTools: [
      "Angular",
      ".NET / C#",
      "SQL Server",
      "TypeScript",
      "Git / GitHub",
      "SSMS",
    ],
    featuredProjectSlugs: ["evo-team", "jobline"],
    faq: [
      {
        q: "Do you work with frameworks other than Angular and .NET?",
        a: "Yes — I default to Angular + .NET because that's where I'm fastest, but I'm comfortable picking up other stacks when the project needs it. I'll be honest about ramp-up time before we start.",
      },
      {
        q: "Can you take over an existing codebase?",
        a: "Yes. I'll read through the code, ask the questions a new team member would ask, and write a short note about what I think the gotchas are before making changes.",
      },
      {
        q: "How do we work together day-to-day?",
        a: "Async-friendly. Short weekly check-ins, written updates in your tool of choice (Notion, Slack, email), and a live demo whenever something major lands.",
      },
    ],
  },
  {
    slug: "ui-ux",
    title: "UI / UX Design",
    icon: "fa-solid fa-palette",
    tagline:
      "I design interfaces that look perfect, feel right, and flow naturally from wireframe to final UI.",
    cardChips: ["Figma", "Canva"],
    intro: `Good UI/UX is the part of your product that decides whether someone stays. I design interfaces that feel intentional — wireframed before they're styled, prototyped before they're handed off, and grounded in how a real user actually moves through the screen.`,
    whatYouGet: [
      "Wireframes for every key screen",
      "Hi-fidelity mockups in Figma",
      "Interactive prototype you can click through",
      "Reusable components and styles so the build stays consistent",
      "Developer-friendly handoff: spacing, sizing, and tokens documented",
    ],
    process: [
      {
        step: "Discovery",
        desc: "Who's the user, what are they trying to do, and what's standing in the way today.",
      },
      {
        step: "Wireframes",
        desc: "Black-and-white layouts that lock in structure and flow before color enters the picture.",
      },
      {
        step: "Hi-fi mockups",
        desc: "Color, type, and components applied — the screens that ship.",
      },
      {
        step: "Prototype & handoff",
        desc: "A clickable Figma prototype plus a tidy file your developers can build from.",
      },
    ],
    techAndTools: ["Figma", "Canva"],
    featuredProjectSlugs: ["jobline", "vanora", "web-design-template"],
    faq: [
      {
        q: "Do you only design — or can you build it too?",
        a: "Both. Some clients hire me for design only; others ask me to design and then build the front-end. The handoff is cleaner when one person owns both ends, but I'm happy to design for your existing dev team.",
      },
      {
        q: "Will I get the Figma file?",
        a: "Yes. The file is yours, with edit access, organized cleanly so anyone on your team can find what they need.",
      },
      {
        q: "How many revisions are included?",
        a: "Revisions are part of the process, not a counter. We iterate until the screens feel right — within the scope we agreed on at kickoff.",
      },
    ],
  },
  {
    slug: "brand",
    title: "Brand & Visual Identity",
    icon: "fa-solid fa-feather-pointed",
    tagline:
      "Logos, color, type, and the visual language that makes your product feel like itself.",
    cardChips: ["Logo", "Brand System", "Type & Color"],
    intro: `A brand is what your product feels like before anyone reads a word of it. I build visual identities that are consistent, distinctive, and practical to apply — not just a logo handed over in a zip, but a system you can actually live with.`,
    whatYouGet: [
      "Primary logo, secondary marks, and clear-space rules",
      "Color palette with primary, secondary, and supporting tones",
      "Typography pairing with usage guidance",
      "Brand guidelines document — short, useful, no fluff",
      "Source files in Figma + exported assets in every format you need",
    ],
    process: [
      {
        step: "Discovery",
        desc: "Who's the brand for, who is it not for, and what does it need to communicate at a glance.",
      },
      {
        step: "Direction",
        desc: "Two or three distinct visual directions — moodboards, type pairings, palette options.",
      },
      {
        step: "Identity",
        desc: "Selected direction taken to completion: logo, palette, type, supporting elements.",
      },
      {
        step: "Application",
        desc: "Show the identity in real contexts — app screens, social, print — so you can see it work.",
      },
    ],
    techAndTools: ["Figma", "Canva"],
    featuredProjectSlugs: ["vanora"],
    faq: [
      {
        q: "Do you do logo-only projects?",
        a: "Sometimes — but a logo without a system around it tends to get used inconsistently. I'll usually nudge you toward at least a small brand system so the logo doesn't end up doing all the work alone.",
      },
      {
        q: "Will the logo be original?",
        a: "Yes. Every mark I deliver is made from scratch for the brand it's for. No template, no library, no AI fill-in.",
      },
      {
        q: "Can you extend an existing brand instead of starting from zero?",
        a: "Absolutely. If you already have a logo and partial system, I can build the missing pieces and document what's there in a way the rest of your team can use.",
      },
    ],
  },
  {
    slug: "notion",
    title: "Notion Services",
    icon: "notion fa-brands fa-notion",
    tagline:
      "Custom Notion workspaces that are organized, automated, and actually look good.",
    cardChips: ["Workspace", "Templates", "Automation"],
    intro: `Most Notion workspaces start clean and slowly become messy as more people add more pages. I design Notion setups that stay organized as they grow — with clear information architecture, useful automations, and a visual layer that makes the workspace feel like a real product, not a spreadsheet with rounded corners.`,
    whatYouGet: [
      "Custom workspace structure built around how your team actually works",
      "Reusable templates: project trackers, content calendars, CRMs, dashboards",
      "Automations and integrations that remove repetitive manual work",
      "Aesthetic visual design — covers, icons, layout — applied consistently",
      "A short guide so your team can extend the workspace without breaking it",
    ],
    process: [
      {
        step: "Discovery",
        desc: "How does your team work today, what's painful, and what would 'fixed' look like.",
      },
      {
        step: "Information architecture",
        desc: "Map out the databases, pages, and relations before any block is created — the shape comes first.",
      },
      {
        step: "Build",
        desc: "Build the workspace block-by-block, with templates, views, and automations wired up.",
      },
      {
        step: "Polish & handoff",
        desc: "Apply the visual layer (covers, icons, consistent layout), then walk your team through it.",
      },
    ],
    techAndTools: ["Notion", "Notion Automations", "Notion Formulas", "Figma"],
    featuredProjectSlugs: [],
    faq: [
      {
        q: "What kinds of workspaces do you build?",
        a: "Personal dashboards, team OS setups, content calendars, client CRMs, project trackers, knowledge bases — pretty much anything Notion can hold. If you can describe how your team works, I can shape Notion around it.",
      },
      {
        q: "Will the workspace look good, or just work?",
        a: "Both. Aesthetic is a real part of how I build in Notion — covers, icons, layout, and consistent visual rhythm so the workspace feels like a product instead of a wiki.",
      },
      {
        q: "Can you migrate our existing pages instead of starting over?",
        a: "Yes. I'll audit what you have, keep what's working, and restructure the rest. Migration is usually cheaper and faster than a full rebuild.",
      },
      {
        q: "What about automations and integrations?",
        a: "I use Notion's built-in automations and formulas first, and reach for external integrations (Slack, Calendar, etc.) when something genuinely needs to leave Notion.",
      },
    ],
  },
];
