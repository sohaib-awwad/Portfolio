export type Project = {
  slug: string;
  title: string;
  tagline: string;
  chips: string[];
  heroImage: string;
  heroAlt: string;
  links: {
    live?: string;
    code?: string;
    design?: string;
    notion?: string;
  };

  overview?: string;
  myRole?: string[];
  outcomes?: string;
  gallery?: { src: string; alt: string }[];

  techStack?: { name: string; why: string }[];
  features?: { title: string; desc: string; image?: string }[];
  challenges?: { challenge: string; solution: string }[];

  designProcess?: {
    text: string;
    figmaEmbed?: string;
  };
  brandSystem?: {
    palette?: { name: string; hex: string }[];
    typography?: { name: string; sample: string }[];
    logoVariants?: { src: string; alt: string }[];
  };

  notionWorkspace?: {
    description: string;
    databases?: string[];
    relations?: string;
  };
  notionAutomations?: { title: string; desc: string }[];
};

export const projects: Project[] = [
  {
    slug: "evo-team",
    title: "EVO-TEAM Website",
    tagline:
      "A platform designed to showcase EVO-TEAM, a student team from the Hashemite University. It features and a portal for students to join the team.",
    chips: ["Full-Stack", "UI / UX"],
    heroImage: "images/EVO-TEAM.webp",
    heroAlt: "EVO-TEAM Website preview",
    links: {
      live: "https://evoteam.netlify.app/home",
      design:
        "https://www.figma.com/design/c93u2qG5f9UVq0U57SAEKs/Evo-Team?node-id=0-1&t=gQcHQNbCr9XFqtDu-1",
      code: "https://github.com/EVO-TEAM-Website",
    },
    overview: `EVO-TEAM is a student team at Hashemite University. The website is a single home for the team — a public showcase of who they are and what they do, plus a join portal that lets new students apply to become members.

Before this site existed, the team relied on scattered social-media presence, which made it slow for new students to learn about the team and inconsistent for the team to onboard them. The site brings both audiences together in one polished place.`,
    myRole: [
      "Led the entire design committee — owned every visual deliverable across UI/UX, branding, illustration, social graphics, and event materials",
      "Designed the complete EVO-TEAM brand identity (logo, typography, color system) and the official website UI/UX in Figma",
      "Personally shipped the website as a production Angular/Tailwind product, eliminating design-to-code drift entirely",
      "Built a fully responsive Angular frontend with reusable components and a clean architecture supporting future feature growth",
    ],
    outcomes: `Drove a 15%+ increase in student engagement and team visibility through cohesive design and technical execution. The site replaced informal channels with a single, professional home for the team — and owning both the design and the build meant zero translation loss between Figma and the shipped product.`,
  },
  {
    slug: "jobline",
    title: "JobLine Website",
    tagline:
      "JobLine is a platform that connects fresh graduates with employers. I designed three user interfaces: employee, employer, and admin.",
    chips: ["Front-End", "UI / UX"],
    heroImage: "images/JobLine.webp",
    heroAlt: "JobLine Website preview",
    links: {
      design:
        "https://www.figma.com/design/mAa4QAVAXIM1vpxGuIlW98/Sohaib-prototype--Copy-?node-id=0-1&t=Wy6a7BWNuZRyIFEW-1",
      code: "https://github.com/sohaib-awwad/JobLine.git",
    },
    overview: `JobLine connects fresh graduates with employers. Three distinct audiences use the platform — applicants looking for their first role, employers posting and reviewing opportunities, and admins moderating the whole flow — and each one needed an interface that felt purpose-built for what they were trying to do.

The challenge was keeping the visual language consistent across all three while adapting layout, density, and primary actions to the very different jobs each user shows up to perform.`,
    myRole: [
      "Designed three distinct interfaces in Figma: employee, employer, and admin",
      "Built the front-end implementation",
      "Defined the shared component vocabulary that ties all three UIs together",
    ],
    outcomes: `Three audiences, one coherent system. Designing all three views in parallel rather than sequentially surfaced shared components early — which kept the build leaner and the experience consistent.`,
  },
  {
    slug: "floppy-portfolio",
    title: "Floppy Man Portfolio",
    tagline:
      "A responsive portfolio website built with modern web technologies (Vanilla Vite). Designed to showcase my projects and skills, with a clean, flexible layout.",
    chips: ["Front-End", "UI / UX"],
    heroImage: "images/FloppyManWebsite.webp",
    heroAlt: "Floppy Man Portfolio preview",
    links: {
      design:
        "https://www.figma.com/design/MFk1B8KcZ7frpbhsaQDYlT/Floppy-Man-Website?node-id=0-1&t=b3g49nZt235Pey1a-1",
      code: "https://github.com/sohaib-awwad/Portfolio.git",
    },
    overview: `This site — the one you're reading. Built deliberately without a framework, in vanilla Vite + TypeScript, so every piece of structure and interaction is explicit and tailored.

I wanted a portfolio that reflected the Floppy Man brand: flexible, playful, and a little understated. The orange-and-blue palette, the typing hero animation, the dark/light theme, and the AOS-powered scroll reveals are all there to make the page feel alive without feeling busy.`,
    myRole: [
      "Designed the full brand and visual system in Figma",
      "Built the site from scratch in vanilla TypeScript + Vite — no UI framework",
      "Implemented dark/light theme, accessible mobile menu, and the contact form",
    ],
    outcomes: `Choosing vanilla over a framework meant every piece had to be built deliberately — which kept the bundle small and the code easy to read. The architecture has since evolved into a component-based, data-driven setup that scales to project and service detail pages.`,
  },
  {
    slug: "stambat-saas",
    title: "Stambat Loyalty SaaS Platform",
    tagline:
      "End-to-end UX design for a multi-tenant loyalty SaaS platform — card-based loyalty mechanics, wallet pass delivery, and a cashier-first operations model.",
    chips: ["UI / UX"],
    heroImage: "images/Stambat Dashboard.webp",
    heroAlt: "Stambat Loyalty SaaS Platform preview",
    links: {
      design:
        "https://www.figma.com/design/TE9uFoFl6haucMp3tFORI4/New-Stambat?node-id=179-401&t=qir82wm5DcTXGTjw-1",
    },
    overview: `Stambat is a multi-tenant SaaS platform that lets any retail or F&B business run a branded loyalty program — no app required. Businesses create points or stamps cards, cashiers scan wallet passes at the counter, and customers earn and redeem rewards entirely through Apple Wallet and Google Wallet.

The project covers four product surfaces across a 10-phase design workflow: a marketing site, a business admin dashboard, a mobile-first cashier scanner, and a one-page customer registration experience. Design work spans discovery and strategy, brand guidelines with a full Material Design token system, user flow architecture across 18 flows and 4 user roles, a complete sitemap (31 pages across 5 surfaces), and a design system built for handoff.`,
    myRole: [
      "Led the full product strategy — loyalty model architecture, user role definitions, and v1 scope decisions across two rounds of client review",
      "Designed the complete brand system — Material Design 10-step color ramps, Onest type scale, spacing tokens, motion direction, and border radius system",
      "Mapped 18 user flows across 4 roles (Owner, Admin, Cashier, End Customer) with tiered granularity and full edge case coverage",
      "Built the information architecture across 5 product surfaces and 31 pages, resolving every screen, state, modal, and route before wireframes began",
    ],
    outcomes: `Stambat pushed me to think about product design at the system level — where decisions upstream in strategy and brand architecture either pay dividends or create debt in every phase that follows. The biggest shift was treating the user flow document not as a deliverable but as a decision-locking tool: every ambiguity resolved there saved design time in every downstream phase. The cashier-mediated model — where one interface becomes the safety net for all customer-side operations — also taught me how simplifying one surface (removing the customer app) can force precision and depth in another.`,
  },
  {
    slug: "cor-coffee-house",
    title: "Cor Coffee House",
    tagline:
      "Brand identity and full website design for a specialty coffee house in Madinat Al-Sharq — bilingual, dark/light mode, and built for real operations.",
    chips: ["UI / UX"],
    heroImage: "images/Cor_Coffee_House_Hero-Image.webp",
    heroAlt: "Cor Coffee House Website preview",
    links: {
      design:
        "https://www.figma.com/design/mmkKFZF7gUrEmBJ0GXq66P/Cor-Coffee-House-Website-V1?node-id=302-3070&t=m6oceQtNgtIf6lXW-1",
    },
    overview: `Cor is a specialty coffee house in Madinat Al-Sharq with 10k+ Instagram followers and no digital home. The project covers the full design system and website — from token architecture to production-ready components — across six pages with bilingual English/Arabic support and dark/light mode.

The design work spans a complete Figma variable system (Brand, Alias, and Mapped collections), a component library built to production spec, and copy written in both languages. The site is designed to turn existing social followers into regulars.`,
    myRole: [
      "Defined the full design system — token architecture, variable collections, typography, color, and elevation",
      "Built production-ready components in Figma using a Mapped variable system and two-layer 3D technique",
      "Wrote all website copy in English and Arabic across six pages",
      "Structured the information architecture: sitemap, page hierarchy, section flow, and SEO strategy",
    ],
    outcomes: `This project sharpened how I think about design systems as infrastructure rather than documentation. Building tokens first — and wiring every component to them — meant design decisions compounded cleanly instead of drifting. The bilingual constraint also forced copy and layout to be genuinely flexible, not just mirrored.`,
  },
  {
    slug: "vanora",
    title: "Vanora Mobile App Design",
    tagline:
      "Vanora is a perfume app built around a single vanilla scent. I designed the brand and an elegant interface to reflect its warm feel.",
    chips: ["UI / UX"],
    heroImage: "images/VanoraMobileDesign.webp",
    heroAlt: "Vanora Mobile App preview",
    links: {
      design:
        "https://www.figma.com/design/DFlFGux6SgNDeZIImCajRZ/Vanilla-App--Copy-?node-id=0-1&t=TUYfoT2O1jVKyfFw-1",
    },
    overview: `Vanora is a concept perfume app organized around a single scent: vanilla. That singular focus shaped every design choice — the brand identity, the warm palette, the soft type, and the unhurried flow of the screens.

Instead of a generic e-commerce template, the app feels closer to a brand storytelling experience that happens to let you buy something at the end.`,
    myRole: [
      "Created the Vanora brand — logo, palette, typography",
      "Designed the full mobile UI in Figma",
      "Built the screen flow around storytelling rather than transactional pressure",
    ],
    outcomes: `Designing for a single product instead of a catalog changed everything about pacing. The lesson translated: tightening scope makes a design more confident, not less interesting.`,
  },
  {
    slug: "web-design-template",
    title: "Web Design Template",
    tagline:
      "A modern web design project built from scratch to showcase my UI/UX skills — focusing on layout, color balance, and user flow.",
    chips: ["UI / UX"],
    heroImage: "images/WebDesignTemp.webp",
    heroAlt: "Web Design Template preview",
    links: {
      design:
        "https://www.figma.com/design/EX7TuP1Yrf2onDDk3YrsWB/Web-Design-Temp?node-id=0-1&t=bs610ApokopeBDS1-1",
    },
    overview: `A self-initiated UI/UX exercise. The goal was to design a complete, modern web template from a blank canvas — no brief, no constraints — so I could push my own decisions around layout rhythm, color balance, and user flow.

The result is a reference piece I use to demonstrate how I approach composition and visual hierarchy when there's no prior style guide to lean on.`,
    myRole: [
      "Defined the visual direction, palette, and typography from scratch",
      "Designed the full screen flow in Figma",
      "Iterated on layout balance and spacing to keep the page feeling calm and intentional",
    ],
    outcomes: `Working without a brief forced me to make every design decision explicitly. The piece doubles as a portfolio of taste — it shows the kind of design I make when no one is telling me what to make.`,
  },
  {
    slug: "tafweej",
    title: "Tafweej — Logo & Brand Mark",
    tagline:
      "A logo for an AI-powered Hajj & Umrah platform — weaving an Islamic symbol, Saudi colors, and the meaning of the name itself into a single mark.",
    chips: ["Graphic Design"],
    heroImage: "images/tafweej.webp",
    heroAlt: "Tafweej logo and brand mark",
    links: {
      design:
        "https://www.figma.com/design/EcYKCu9Ag5SSfKtn5VdrpA/Tafweej?node-id=0-1&t=4S76xI7snvCbso9c-1",
    },
    overview: `Tafweej was a logo and brand mark I designed for Fekra AI, during my time working on an AI system that streamlined Hajj and Umrah travel requests into Saudi Arabia. Before the system existed, data-entry staff handled everything manually across WhatsApp and scattered websites — and every mistake cost the operation over \$200. The platform collects and processes requests intelligently, so staff simply review what the AI has prepared and approve or reject it, dropping the error rate to near zero.

The name "Tafweej" describes groups of people gathering and moving together in one direction — the very principle behind the movement of pilgrims during Hajj and Umrah. The brief carried three non-negotiable elements: an Islamic symbol to anchor it in the pilgrimage, a palette built on Saudi national colors and tones that evoke Islamic and Arab culture, and the name itself woven into the mark.`,
    myRole: [
      "Designed the full logo and brand mark for the Tafweej platform",
      "Integrated an Islamic visual symbol to root the mark in the Hajj & Umrah context",
      "Built the palette around Saudi national colors and culturally resonant tones",
      "Wove the name into the mark, echoing its meaning of pilgrims moving together in one direction",
    ],
    challenges: [
      {
        challenge:
          "Three mandatory elements — an Islamic symbol, Saudi and Arab cultural colors, and the name itself — all had to coexist in one mark without it feeling crowded or overly literal.",
        solution:
          "I let the meaning of the name drive the form, using the idea of a gathered group moving in one direction as the organizing concept — so the symbolism, the typography, and the color all reinforced a single story.",
      },
    ],
    outcomes: `The mark delivered on a tight, constraint-heavy brief without leaning on cliché — the symbolism reads immediately, but the construction stays subtle. It taught me how much a name's literal meaning can become the backbone of a logo, turning a list of requirements into one clear concept.`,
  },
  {
    slug: "msar",
    title: "Msar — Logo & Brand Mark",
    tagline:
      "A second identity for the same pilgrimage platform after a forced rename — built around a single, instantly readable figure of a pilgrim walking a straight path.",
    chips: ["Graphic Design"],
    heroImage: "images/msar.webp",
    heroAlt: "Msar logo and brand mark",
    links: {
      design:
        "https://www.figma.com/design/1CZuqd8CpGVRt5pI5Ush9D/Msar?node-id=63-133&t=ohHHaaZ1ocJpwEKL-1",
    },
    overview: `When the original "Tafweej" name turned out to clash with a competitor's product, the manager renamed the platform "Msar" — meaning "path" or "route." A new name meant a completely new identity, and this time I pushed the concept a level further.

The mark centers on a figure of a pilgrim in ihram garments walking along a straight path. In a single image, it satisfied every requirement at once — the Islamic context, the cultural tone, and the new meaning of the name — and you can read all of it at a glance.`,
    myRole: [
      "Designed a fresh logo and identity for the renamed Msar platform",
      "Built the mark around a single figure: a pilgrim in ihram walking a straight path",
      "Carried the project's Islamic and cultural cues into a cleaner, more conceptual symbol",
    ],
    challenges: [
      {
        challenge:
          "A late, forced rename meant rebuilding the identity from scratch — and the new mark had to clear the same cultural and symbolic bar as the first, only better.",
        solution:
          "I distilled everything into one figure — a pilgrim on a straight path — so the name's meaning, the religious context, and the cultural tone all resolved into a single, instantly legible image.",
      },
    ],
    outcomes: `The strength of this mark was immediacy: at first glance, the symbolism simply lands. That clarity was the real achievement, and it reminded me that the best logo work often means saying more with one well-chosen image rather than layering symbols on top of each other.`,
  },
  {
    slug: "elm-arkan",
    title: "Elm Arkan — Logo & Identity",
    tagline:
      "Two logo directions for a subsidiary of Elm — an iconic mark and an Arabic-script wordmark — staying within the parent brand while standing on their own.",
    chips: ["Graphic Design"],
    heroImage: "images/elm-arkan.webp",
    heroAlt: "Elm Arkan logo and identity",
    links: {
      design:
        "https://www.figma.com/design/rcO71RRA2pim4zI0FeMHsK/Elm-Arkan---Hand-Off?node-id=0-1&t=t2edicaUNlnhiExU-1",
    },
    overview: `Elm Arkan is a subsidiary of Elm, a well-known company in the Middle East. The subsidiary — a technical-consulting venture — needed its own logo, but one that stayed within the parent brand's design style, visual identity, and colors.

The real challenge wasn't the design; it was the brief. The client was torn between an Arabic-script logo and an iconic mark and couldn't decide. Rather than force a single bet, I proposed both.

The iconic mark is deliberately simple and does everything at once: the brand colors, the word "Arkan" (meaning "pillars"), and a three-sided triangle standing for the company's three core pillars of technical consulting. The second direction is an Arabic wordmark engineered into a clever, structured form — and that's where the response was strongest.`,
    myRole: [
      "Designed two distinct logo directions — an iconic mark and an Arabic-script wordmark — under one brief",
      "Kept both within Elm's parent visual identity, style, and color system",
      'Encoded meaning into the icon: brand colors, the word "Arkan" (pillars), and a triangle for the company\'s three pillars',
      "Resolved an ambiguous, indecisive brief by presenting options rather than forcing a single choice",
    ],
    challenges: [
      {
        challenge:
          "The client couldn't decide between an Arabic-script logo and an iconic one, and the subsidiary mark had to feel like part of Elm's existing brand without simply copying it.",
        solution:
          "I designed both directions to the same standard and presented them together, letting the work make the case — and engineered the Arabic wordmark with enough structural cleverness that it won on quality and turnaround alike.",
      },
    ],
    outcomes: `Delivering two strong directions turned an indecisive brief into an easy decision, and the client was impressed by the cleverness, quality, and speed. It was a reminder that managing ambiguity is part of the job — sometimes the most useful thing you can hand a hesitant client is a clear, well-made choice.`,
  },

  {
    slug: "floppy-gym-tracker",
    title: "Floppy GYM Tracker",
    tagline:
      "A mobile-first weight training system built entirely in Notion — with relational databases, auto-calculated 1RM, PR detection, and progressive overload suggestions.",
    chips: ["Notion"],
    heroImage: "images/floppy-gym-tracker.webp",
    heroAlt: "Floppy GYM Tracker Notion workspace preview",
    links: {
      notion: "",
    },
    overview: `A full-featured gym tracking system designed and built inside Notion — no gym app, no code, just relational data and formulas doing heavy lifting.

The system spans 6 linked databases: Programs, Workout Templates, Exercises, Sessions, Sets, and Body Metrics. It auto-calculates estimated 1RM via the Epley formula, detects PRs, suggests progressive overload based on last set RPE, and tracks weekly body composition trends.

Designed for 95% mobile use — every interaction is optimized for the gym floor. Starting a workout is one tap. Logging a set is under 10 seconds. The complexity lives entirely in the background.`,
    myRole: [
      "Architected the full 6-database relational schema from scratch",
      "Built all Notion formula logic: Est. 1RM, Is PR, Volume, Overload Suggestion, Duration display",
      "Designed the mobile-first UI — session templates, dashboard layout, exercise deep-dives",
      "Authored MCP-assisted automation workflows for session start/finish and weekly check-ins",
    ],
    outcomes: `Building a complex system inside a tool not designed for it forces you to think differently. Every formula is a constraint puzzle, every relation is an architecture decision. This project sharpened my thinking around data modeling, progressive UI complexity, and designing for speed — lessons that translate directly into product and frontend work.`,
  },
  {
    slug: "lms-dashboard",
    title: "LMS Admin Dashboard",
    tagline:
      "Admin dashboard for managing books, users, and borrowing reservations with real-time status tracking. built with Vite, TypeScript, and Tailwind CSS.",
    chips: ["Front-End"],
    heroImage: "images/LMS-Website.webp",
    heroAlt: "LMS Admin Dashboard preview",
    links: {
      live: "https://sohaib-awwad.github.io/Library-Management-System/",
      code: "https://github.com/sohaib-awwad/Library-Management-System",
    },
    overview: `An admin dashboard for a library management system. Librarians use it to manage the book catalog, track users, and oversee borrowing reservations — with status that needs to stay current as actions happen elsewhere in the system.

The interface is built for staff who use it daily, so it leans on dense tables, clear state indicators, and quick keyboard-friendly actions over flashy visuals.`,
    myRole: [
      "Built the entire front-end in Vite + TypeScript + Tailwind CSS",
      "Designed the table-heavy admin UI for clarity at scale",
      "Implemented real-time status tracking for borrowing reservations",
    ],
    outcomes: `An admin tool is judged by how fast a daily user can move through it. Working on this dashboard sharpened how I think about information density, status communication, and keyboard ergonomics — concerns that rarely surface in marketing-style sites.`,
  },
];
