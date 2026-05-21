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
