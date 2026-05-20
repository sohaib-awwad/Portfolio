export type EducationEntry = {
  degree: string;
  institution: string;
  period: string;
  location?: string;
  desc?: string;
  logo?: string;
};

export type ExperienceEntry = {
  role: string;
  company: string;
  period: string;
  location?: string;
  bullets: string[];
  logo?: string;
};

export type SkillGroup = {
  group: string;
  items: string[];
};

export type SoftSkill = {
  icon: string;
  title: string;
  desc: string;
};

export type Certification = {
  name: string;
  issuer: string;
  period: string;
  credentialUrl?: string;
};

export type Language = {
  name: string;
  level: "Native" | "Fluent" | "Conversational" | "Basic";
};

export type Award = {
  title: string;
  issuer: string;
  period: string;
  desc?: string;
  credentialUrl?: string;
};

const cert = (file: string): string =>
  `All%20Certificates/${encodeURIComponent(file)}`;

export const education: EducationEntry[] = [
  {
    degree: "Bachelor of Computer Science and its Applications",
    institution: "The Hashemite University",
    period: "Graduated: Feb 2026",
    location: "Zarqa, Jordan",
    desc: "Relevant coursework: Software Engineering, Web Development, Data Structures, Database Systems, Algorithms.",
  },
];

export const proSkills: SkillGroup[] = [
  {
    group: "Frontend",
    items: [
      "Angular",
      "TypeScript",
      "JavaScript",
      "HTML5",
      "CSS3",
      "SCSS",
      "Tailwind CSS",
      "Responsive Design",
    ],
  },
  {
    group: "Backend",
    items: ["ASP.NET", "RESTful APIs", "C#", "MVC Architecture"],
  },
  {
    group: "Design",
    items: [
      "Figma",
      "UI/UX",
      "Graphic Design",
      "Illustration",
      "Logo Design",
      "Design Systems",
      "Wireframing",
      "Prototyping",
    ],
  },
  {
    group: "AI Tools",
    items: ["Claude", "Figma Make", "Google Stitch", "Relume", "ChatGPT", "Gemini"],
  },
  {
    group: "Dev Tools",
    items: ["Git", "GitHub", "VS Code", "Vite", "npm", "bun"],
  },
];

export const experience: ExperienceEntry[] = [
  {
    role: "Frontend Developer & UI/UX Designer",
    company: "Access 2 Arabia (A2A)",
    period: "May 2026 — Present",
    location: "Amman, Jordan",
    bullets: [
      "Develop production React frontends for client-facing applications, owning the full design-to-code pipeline from Figma mockups to deployed UI.",
      "Design and refine user interfaces and experience flows in Figma, ensuring pixel-perfect parity between design files and shipped React components.",
      "Apply responsive design principles, accessibility best practices, and modern frontend tooling across multiple concurrent client projects.",
    ],
  },
  {
    role: "Graphic Designer & Social Media (University Field Training)",
    company: "Zara Paints Industrial",
    period: "Mar 2026 — May 2026",
    location: "Zarqa, Jordan",
    bullets: [
      "Completed mandatory university field training over 2 months, producing graphic design assets and social media content for an industrial brand.",
      "Designed marketing materials, social posts, and visual communications aligned with the company's brand guidelines.",
      "Gained hands-on experience translating business goals into visual content for diverse audience touchpoints.",
    ],
  },
  {
    role: "UI/UX Designer & Brand Identity (Contract)",
    company: "Fekra AI",
    period: "Feb 2026 — Mar 2026",
    location: "Amman, Jordan",
    bullets: [
      "Delivered two complete logo design systems and a full design tokens library for the company's product within a focused 1-month engagement.",
      "Established the visual foundation including typography, color systems, spacing scales, and component-level design tokens for scalable product design.",
      "Collaborated directly with founders to align brand identity with product positioning and technical implementation constraints.",
    ],
  },
  {
    role: "Design Committee Lead & Leadership Member",
    company: "EVO-TEAM Student Organization",
    period: "Oct 2024 — Feb 2026",
    location: "The Hashemite University",
    bullets: [
      "Led the entire design committee — owning every visual deliverable across UI/UX, branding, illustration, social graphics, and event materials.",
      "Served as a leadership team member, contributing to strategic decision-making beyond design topics.",
      "Designed the complete EVO-TEAM brand identity (logo, typography, color system) and the official website UI/UX in Figma.",
      "Personally shipped the website as a production Angular/Tailwind product, eliminating design-to-code drift entirely.",
      "Drove a 15%+ increase in student engagement and team visibility through cohesive design and technical execution.",
    ],
  },
  {
    role: "Full-Stack Development Intern (Paid)",
    company: "Princess Sumaya University for Technology",
    period: "Jun 2025 — Sep 2025",
    location: "100-Hour Intensive Program",
    bullets: [
      "Completed a paid full-stack internship focused on Angular and ASP.NET, building production-quality applications under industry mentorship.",
      "Implemented RESTful APIs in C# and integrated them with Angular frontends using proper service-layer architecture.",
      "Practiced agile workflows, code reviews, and Git-based collaboration across team projects.",
    ],
  },
];

export const softSkills: SoftSkill[] = [
  {
    icon: "fa-solid fa-comments",
    title: "Communication",
    desc: "I explain technical ideas in simple, clear language for both devs and non-devs.",
  },
  {
    icon: "fa-solid fa-puzzle-piece",
    title: "Problem Solving",
    desc: "I break complex problems into small steps and test fast to reach solid solutions.",
  },
  {
    icon: "fa-solid fa-people-group",
    title: "Teamwork",
    desc: "I enjoy pairing, code reviews, and building things together instead of alone.",
  },
  {
    icon: "fa-solid fa-shuffle",
    title: "Adaptability",
    desc: "I'm comfortable switching tools, stacks, or priorities without losing focus.",
  },
  {
    icon: "fa-solid fa-clock",
    title: "Time Management",
    desc: "I plan tasks, set realistic milestones, and keep projects moving smoothly.",
  },
  {
    icon: "fa-solid fa-eye",
    title: "Attention to Detail",
    desc: "I care about tiny UI details, clean code, and UX polish that users actually feel.",
  },
];

export const certifications: Certification[] = [
  {
    name: "Claude Code — The Practical Guide",
    issuer: "Academind / Udemy",
    period: "2026",
    credentialUrl: cert("Claude Code - The Parctical Guide.pdf"),
  },
  {
    name: "Full-Stack Web Development (Angular & ASP.NET)",
    issuer: "Princess Sumaya University for Technology — 100-hour Intensive",
    period: "Sep 2025",
    credentialUrl: cert("Angular and ASP.Net.pdf"),
  },
  {
    name: "Figma UI/UX Design Advanced",
    issuer: "Daniel Walter Scott — Udemy",
    period: "2026",
    credentialUrl: cert("Figma UI UX Design Advanced by Daniel Walter Scott.pdf"),
  },
  {
    name: "Figma Workshop — Part 1",
    issuer: "Zain ZINC",
    period: "2024",
    credentialUrl: cert("figma-course-with-zinc.pdf"),
  },
  {
    name: "Figma Workshop — Part 2",
    issuer: "Zain ZINC",
    period: "2024",
    credentialUrl: cert("figma-course-with-zinc-2.pdf"),
  },
  {
    name: "Understanding TypeScript",
    issuer: "Udemy",
    period: "2024",
    credentialUrl: cert("certificate-of-completion-for-understanding-typescript.pdf"),
  },
  {
    name: "JavaScript Basics",
    issuer: "Udemy",
    period: "2024",
    credentialUrl: cert("certificate-of-completion-for-javascript-basics.pdf"),
  },
  {
    name: "The Ultimate HTML Course — Fundamentals",
    issuer: "Code with Mosh",
    period: "2024",
    credentialUrl: cert("the-ultimate-html-course-fundamentals.pdf"),
  },
  {
    name: "The Ultimate HTML Course — Advanced Concepts",
    issuer: "Code with Mosh",
    period: "2024",
    credentialUrl: cert("the-ultimate-html-course-advanced-concepts.pdf"),
  },
  {
    name: "The Ultimate HTML Course — PSD to HTML",
    issuer: "Code with Mosh",
    period: "2024",
    credentialUrl: cert("the-ultimate-html-course-psd-to-html.pdf"),
  },
  {
    name: "Programming Foundations — Level 1",
    issuer: "Udemy",
    period: "2024",
    credentialUrl: cert("certificate-of-completion-for-programming-foundations-level-1 (1).pdf"),
  },
  {
    name: "Algorithms & Problem Solving — Level 1",
    issuer: "Udemy",
    period: "2024",
    credentialUrl: cert("certificate-of-completion-for-algorithms-problem-solving-level-1 (1).pdf"),
  },
  {
    name: "Algorithms & Problem Solving — Level 1 (Solutions)",
    issuer: "Udemy",
    period: "2024",
    credentialUrl: cert("certificate-of-completion-for-algorithms-problem-solving-level-1-solutions (1).pdf"),
  },
  {
    name: "Introduction to Programming Using C — Level 1",
    issuer: "Udemy",
    period: "2024",
    credentialUrl: cert("certificate-of-completion-for-introduction-to-programming-using-c-level-1 (1).pdf"),
  },
];

export const languages: Language[] = [
  { name: "Arabic", level: "Native" },
  { name: "English", level: "Fluent" },
];

export const awards: Award[] = [
  {
    title: "IQ Score: 133",
    issuer: "Brain Testing Institute",
    period: "Dec 2024",
    desc: "Verified IQ assessment — score of 133, in the top 2% range.",
  },
  {
    title: "English Typing Speed — 51 WPM",
    issuer: "Self-measured",
    period: "2026",
    desc: "Sustained typing speed of 51 words per minute in English.",
  },
  {
    title: "Arabic Typing Speed — 215 CPM",
    issuer: "Self-measured",
    period: "2026",
    desc: "Sustained typing speed of 215 characters per minute in Arabic.",
  },
];
