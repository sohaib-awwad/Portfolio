import { services, type Service } from "../data/services";
import { projects } from "../data/projects";
import { projectUrl, serviceUrl, homeUrl, asset } from "../utils/slug";

const escapeAttr = (s: string): string =>
  s.replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/</g, "&lt;");

const paragraphs = (text: string): string =>
  text
    .split(/\n\s*\n/)
    .map((p) => `<p>${p.trim()}</p>`)
    .join("");

function section(
  title: string,
  body: string,
  options: { aos?: string; id?: string } = {}
): string {
  const { aos = "fade-up", id } = options;
  return `
    <section class="sd-section container"${id ? ` id="${id}"` : ""}
      data-aos="${aos}" data-aos-duration="700">
      <h2 class="sd-section__title">${title}</h2>
      ${body}
    </section>`;
}

function renderHero(s: Service): string {
  return `
    <header class="sd-hero container" data-aos="fade-up" data-aos-duration="700">
      <div class="sd-hero__icon" aria-hidden="true">
        <i class="${s.icon}"></i>
      </div>
      <h1 class="sd-hero__title">${s.title}</h1>
      <p class="sd-hero__tagline">${s.tagline}</p>
      ${s.intro ? `<div class="sd-hero__intro">${paragraphs(s.intro)}</div>` : ""}
    </header>`;
}

function renderWhatYouGet(s: Service): string {
  if (!s.whatYouGet?.length) return "";
  const items = s.whatYouGet
    .map(
      (item) => `
      <li class="sd-deliverable">
        <i class="fa-solid fa-circle-check" aria-hidden="true"></i>
        <span>${item}</span>
      </li>`
    )
    .join("");
  return section("What you get", `<ul class="sd-deliverables">${items}</ul>`);
}

function renderProcess(s: Service): string {
  if (!s.process?.length) return "";
  const items = s.process
    .map(
      (p, i) => `
      <li class="sd-step">
        <span class="sd-step__num">${String(i + 1).padStart(2, "0")}</span>
        <div class="sd-step__body">
          <h3>${p.step}</h3>
          <p>${p.desc}</p>
        </div>
      </li>`
    )
    .join("");
  return section("My process", `<ol class="sd-steps">${items}</ol>`);
}

function renderTechAndTools(s: Service): string {
  if (!s.techAndTools?.length) return "";
  const chips = s.techAndTools
    .map((t) => `<li class="chip">${t}</li>`)
    .join("");
  return section(
    "Tech & tools",
    `<ul class="sd-chip-list" aria-label="Tools and technologies">${chips}</ul>`
  );
}

function renderFeaturedProjects(s: Service): string {
  if (!s.featuredProjectSlugs?.length) return "";
  const cards = s.featuredProjectSlugs
    .map((slug) => projects.find((p) => p.slug === slug))
    .filter((p): p is NonNullable<typeof p> => Boolean(p))
    .map(
      (p) => `
      <li class="sd-project-card">
        <a class="sd-project-card__link" href="${projectUrl(p.slug)}"
           aria-label="Read case study: ${escapeAttr(p.title)}">
          <div class="sd-project-card__image">
            <img src="${asset(p.heroImage)}" alt="${escapeAttr(p.heroAlt)}" loading="lazy" />
          </div>
          <div class="sd-project-card__body">
            <h3>${p.title}</h3>
            <p>${p.tagline}</p>
            <span class="sd-project-card__cta">
              Read case study <i class="fa-solid fa-arrow-right"></i>
            </span>
          </div>
        </a>
      </li>`
    )
    .join("");
  return section("Featured projects", `<ul class="sd-project-grid">${cards}</ul>`);
}

function renderFaq(s: Service): string {
  if (!s.faq?.length) return "";
  const items = s.faq
    .map(
      (qa, i) => `
      <li class="sd-faq__item">
        <details${i === 0 ? " open" : ""}>
          <summary>
            <span>${qa.q}</span>
            <i class="fa-solid fa-plus sd-faq__icon" aria-hidden="true"></i>
          </summary>
          <div class="sd-faq__answer">
            <p>${qa.a}</p>
          </div>
        </details>
      </li>`
    )
    .join("");
  return section("Frequently asked", `<ul class="sd-faq">${items}</ul>`);
}

function renderCta(s: Service): string {
  return `
    <section class="sd-cta container" data-aos="fade-up" data-aos-duration="700">
      <h2 class="sd-cta__title">Ready to work on ${s.title.toLowerCase()}?</h2>
      <p class="sd-cta__desc">
        Tell me what you have in mind — I'll write back with questions and a starting plan.
      </p>
      <a class="btn primary" href="${homeUrl("#contact")}">
        <i class="fa-solid fa-paper-plane"></i> Get in touch
      </a>
    </section>`;
}

function renderNav(s: Service): string {
  const idx = services.findIndex((x) => x.slug === s.slug);
  if (idx === -1) return "";
  const prev = services[(idx - 1 + services.length) % services.length];
  const next = services[(idx + 1) % services.length];

  return `
    <nav class="sd-nav container" data-aos="fade-up" data-aos-duration="500">
      <a class="sd-nav__link sd-nav__link--prev" href="${serviceUrl(prev.slug)}">
        <i class="fa-solid fa-arrow-left"></i>
        <span>
          <small>Previous service</small>
          <strong>${prev.title}</strong>
        </span>
      </a>
      <a class="sd-nav__link sd-nav__link--back" href="${homeUrl("#services")}">
        <i class="fa-solid fa-grip"></i>
        <span>All services</span>
      </a>
      <a class="sd-nav__link sd-nav__link--next" href="${serviceUrl(next.slug)}">
        <span>
          <small>Next service</small>
          <strong>${next.title}</strong>
        </span>
        <i class="fa-solid fa-arrow-right"></i>
      </a>
    </nav>`;
}

export function renderServiceDetail(s: Service): HTMLElement {
  const wrap = document.createElement("article");
  wrap.className = "sd-article";
  wrap.innerHTML = [
    renderHero(s),
    renderWhatYouGet(s),
    renderProcess(s),
    renderTechAndTools(s),
    renderFeaturedProjects(s),
    renderFaq(s),
    renderCta(s),
    renderNav(s),
  ].join("");
  return wrap;
}

export function renderServiceNotFound(slug: string): HTMLElement {
  const wrap = document.createElement("section");
  wrap.className = "container sd-notfound";
  wrap.innerHTML = `
    <h1>Service not found</h1>
    <p>No service matches the slug <code>${escapeAttr(slug)}</code>.</p>
    <p><a class="btn primary" href="${homeUrl("#services")}">Back to all services</a></p>
  `;
  return wrap;
}
