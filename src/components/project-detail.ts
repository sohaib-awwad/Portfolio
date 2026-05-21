import { projects, type Project } from "../data/projects";
import { projectUrl, homeUrl, asset } from "../utils/slug";

const chipClass = (chip: string): string => {
  if (chip === "Notion") return "chip-notion";
  const code = ["Full-Stack", "Front-End", "Back-End"];
  return code.includes(chip) ? "chip-web-project" : "chip-design-project";
};

const escapeAttr = (s: string): string =>
  s.replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/</g, "&lt;");

const paragraphs = (text: string): string =>
  text
    .split(/\n\s*\n/)
    .map((p) => `<p>${p.trim()}</p>`)
    .join("");

function renderHero(p: Project): string {
  const chips = p.chips
    .map((c) => `<span class="${chipClass(c)}">${c}</span>`)
    .join("");

  const ctas: string[] = [];
  if (p.links.live) {
    ctas.push(
      `<a class="btn primary" href="${p.links.live}" target="_blank" rel="noopener">
         <i class="fa-solid fa-link"></i> Live
       </a>`
    );
  }
  if (p.links.code) {
    ctas.push(
      `<a class="btn secondary" href="${p.links.code}" target="_blank" rel="noopener">
         <i class="fa-brands fa-github"></i> Code
       </a>`
    );
  }
  if (p.links.design) {
    ctas.push(
      `<a class="btn secondary" href="${p.links.design}" target="_blank" rel="noopener">
         <i class="fa-brands fa-figma"></i> Design
       </a>`
    );
  }
  if (p.links.notion) {
    ctas.push(
      `<a class="btn secondary" href="${p.links.notion}" target="_blank" rel="noopener">
         <i class="fa-brands fa-notion"></i> Notion
       </a>`
    );
  }

  return `
    <header class="pd-hero container" data-aos="fade-up" data-aos-duration="700">
      <div class="pd-hero__text">
        <div class="chips">${chips}</div>
        <h1 class="pd-hero__title">${p.title}</h1>
        <p class="pd-hero__tagline">${p.tagline}</p>
        ${ctas.length ? `<div class="pd-hero__ctas">${ctas.join("")}</div>` : ""}
      </div>
      <div class="pd-hero__image">
        <img src="${asset(p.heroImage)}" alt="${escapeAttr(p.heroAlt)}" loading="eager" />
      </div>
    </header>`;
}

function section(
  title: string,
  body: string,
  options: { aos?: string; id?: string } = {}
): string {
  const { aos = "fade-up", id } = options;
  return `
    <section class="pd-section container"${id ? ` id="${id}"` : ""}
      data-aos="${aos}" data-aos-duration="700">
      <h2 class="pd-section__title">${title}</h2>
      ${body}
    </section>`;
}

function renderOverview(p: Project): string {
  if (!p.overview) return "";
  return section("Overview", `<div class="pd-prose">${paragraphs(p.overview)}</div>`);
}

function renderMyRole(p: Project): string {
  if (!p.myRole?.length) return "";
  const items = p.myRole.map((b) => `<li>${b}</li>`).join("");
  return section("My Role", `<ul class="pd-bullets">${items}</ul>`);
}

function renderTechStack(p: Project): string {
  if (!p.techStack?.length) return "";
  const items = p.techStack
    .map(
      (t) => `
      <li class="pd-tech-item">
        <span class="pd-tech-name">${t.name}</span>
        <span class="pd-tech-why">${t.why}</span>
      </li>`
    )
    .join("");
  return section("Tech Stack", `<ul class="pd-tech-list">${items}</ul>`);
}

function renderDesignProcess(p: Project): string {
  if (!p.designProcess) return "";
  const embed = p.designProcess.figmaEmbed
    ? `<div class="pd-figma-embed">
         <iframe src="https://www.figma.com/embed?embed_host=floppyman&url=${encodeURIComponent(
           p.designProcess.figmaEmbed
         )}"
           allowfullscreen loading="lazy" title="Figma design preview"></iframe>
       </div>`
    : "";
  return section(
    "Design Process",
    `<div class="pd-prose">${paragraphs(p.designProcess.text)}</div>${embed}`
  );
}

function renderBrandSystem(p: Project): string {
  if (!p.brandSystem) return "";
  const parts: string[] = [];

  if (p.brandSystem.palette?.length) {
    const swatches = p.brandSystem.palette
      .map(
        (c) => `
        <li class="pd-swatch">
          <span class="pd-swatch__color" style="background:${c.hex}"></span>
          <span class="pd-swatch__name">${c.name}</span>
          <span class="pd-swatch__hex">${c.hex}</span>
        </li>`
      )
      .join("");
    parts.push(`
      <h3 class="pd-subhead">Palette</h3>
      <ul class="pd-swatches">${swatches}</ul>`);
  }

  if (p.brandSystem.typography?.length) {
    const types = p.brandSystem.typography
      .map(
        (t) => `
        <li class="pd-type">
          <span class="pd-type__name">${t.name}</span>
          <span class="pd-type__sample" style="font-family:${t.name}, system-ui, sans-serif">
            ${t.sample}
          </span>
        </li>`
      )
      .join("");
    parts.push(`
      <h3 class="pd-subhead">Typography</h3>
      <ul class="pd-types">${types}</ul>`);
  }

  if (p.brandSystem.logoVariants?.length) {
    const logos = p.brandSystem.logoVariants
      .map(
        (l) => `<li><img src="${asset(l.src)}" alt="${escapeAttr(l.alt)}" loading="lazy" /></li>`
      )
      .join("");
    parts.push(`
      <h3 class="pd-subhead">Logo Variants</h3>
      <ul class="pd-logos">${logos}</ul>`);
  }

  return section("Brand System", parts.join(""));
}

function renderNotionWorkspace(p: Project): string {
  if (!p.notionWorkspace) return "";
  const dbs = p.notionWorkspace.databases?.length
    ? `<ul class="pd-chip-list">${p.notionWorkspace.databases
        .map((d) => `<li class="chip">${d}</li>`)
        .join("")}</ul>`
    : "";
  const relations = p.notionWorkspace.relations
    ? `<p class="pd-relations"><strong>How they connect:</strong> ${p.notionWorkspace.relations}</p>`
    : "";
  return section(
    "Workspace Structure",
    `<div class="pd-prose">${paragraphs(p.notionWorkspace.description)}</div>
     ${dbs ? `<h3 class="pd-subhead">Databases</h3>${dbs}` : ""}
     ${relations}`
  );
}

function renderNotionAutomations(p: Project): string {
  if (!p.notionAutomations?.length) return "";
  const items = p.notionAutomations
    .map(
      (a) => `
      <li class="pd-automation">
        <h3>${a.title}</h3>
        <p>${a.desc}</p>
      </li>`
    )
    .join("");
  return section(
    "Automations & Templates",
    `<ul class="pd-automations">${items}</ul>`
  );
}

function renderFeatures(p: Project): string {
  if (!p.features?.length) return "";
  const items = p.features
    .map(
      (f) => `
      <li class="pd-feature">
        ${f.image ? `<div class="pd-feature__img"><img src="${asset(f.image)}" alt="" loading="lazy" /></div>` : ""}
        <div class="pd-feature__text">
          <h3>${f.title}</h3>
          <p>${f.desc}</p>
        </div>
      </li>`
    )
    .join("");
  return section("Key Features", `<ul class="pd-features">${items}</ul>`);
}

function renderGallery(p: Project): string {
  if (!p.gallery?.length) return "";
  const items = p.gallery
    .map(
      (g) =>
        `<li class="pd-gallery__item">
           <img src="${asset(g.src)}" alt="${escapeAttr(g.alt)}" loading="lazy" />
         </li>`
    )
    .join("");
  return section("Screenshots", `<ul class="pd-gallery">${items}</ul>`);
}

function renderChallenges(p: Project): string {
  if (!p.challenges?.length) return "";
  const items = p.challenges
    .map(
      (c) => `
      <li class="pd-challenge">
        <div class="pd-challenge__problem">
          <h3><i class="fa-solid fa-triangle-exclamation"></i> Challenge</h3>
          <p>${c.challenge}</p>
        </div>
        <div class="pd-challenge__solution">
          <h3><i class="fa-solid fa-lightbulb"></i> Solution</h3>
          <p>${c.solution}</p>
        </div>
      </li>`
    )
    .join("");
  return section("Challenges & Solutions", `<ul class="pd-challenges">${items}</ul>`);
}

function renderOutcomes(p: Project): string {
  if (!p.outcomes) return "";
  return section(
    "Outcomes & Lessons Learned",
    `<div class="pd-prose">${paragraphs(p.outcomes)}</div>`
  );
}

function renderNav(p: Project): string {
  const idx = projects.findIndex((x) => x.slug === p.slug);
  if (idx === -1) return "";
  const prev = projects[(idx - 1 + projects.length) % projects.length];
  const next = projects[(idx + 1) % projects.length];

  return `
    <nav class="pd-nav container" data-aos="fade-up" data-aos-duration="500">
      <a class="pd-nav__link pd-nav__link--prev" href="${projectUrl(prev.slug)}">
        <i class="fa-solid fa-arrow-left"></i>
        <span>
          <small>Previous project</small>
          <strong>${prev.title}</strong>
        </span>
      </a>
      <a class="pd-nav__link pd-nav__link--back" href="${homeUrl("#projects")}">
        <i class="fa-solid fa-grip"></i>
        <span>All projects</span>
      </a>
      <a class="pd-nav__link pd-nav__link--next" href="${projectUrl(next.slug)}">
        <span>
          <small>Next project</small>
          <strong>${next.title}</strong>
        </span>
        <i class="fa-solid fa-arrow-right"></i>
      </a>
    </nav>`;
}

export function renderProjectDetail(p: Project): HTMLElement {
  const wrap = document.createElement("article");
  wrap.className = "pd-article";
  wrap.innerHTML = [
    renderHero(p),
    renderOverview(p),
    renderMyRole(p),
    renderTechStack(p),
    renderDesignProcess(p),
    renderBrandSystem(p),
    renderNotionWorkspace(p),
    renderNotionAutomations(p),
    renderFeatures(p),
    renderGallery(p),
    renderChallenges(p),
    renderOutcomes(p),
    renderNav(p),
  ].join("");
  return wrap;
}

export function renderProjectNotFound(slug: string): HTMLElement {
  const wrap = document.createElement("section");
  wrap.className = "container pd-notfound";
  wrap.innerHTML = `
    <h1>Project not found</h1>
    <p>No project matches the slug <code>${escapeAttr(slug)}</code>.</p>
    <p><a class="btn primary" href="${homeUrl("#projects")}">Back to all projects</a></p>
  `;
  return wrap;
}
