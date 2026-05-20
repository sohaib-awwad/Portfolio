import { projects, type Project } from "../data/projects";
import { projectUrl, asset } from "../utils/slug";

const chipClass = (chip: string): string => {
  const code = ["Full-Stack", "Front-End", "Back-End", "Notion"];
  return code.includes(chip) ? "chip-web-project" : "chip-design-project";
};

const linkButton = (
  url: string,
  icon: string,
  label: string,
  ariaLabel: string,
  external = true
): string => `
  <a href="${url}"${external ? ' target="_blank" rel="noopener"' : ""}
     class="project-link" aria-label="${ariaLabel}">
    <i class="${icon}"></i> ${label}
  </a>`;

const renderProjectCard = (p: Project, index: number): string => {
  const delay = index * 100;
  const chips = p.chips.map((c) => `<span class="${chipClass(c)}">${c}</span>`).join("");
  const detail = projectUrl(p.slug);

  const links: string[] = [
    linkButton(detail, "fa-solid fa-book-open", "Case study", "Read full case study", false),
  ];
  if (p.links.live) {
    links.push(linkButton(p.links.live, "fa-solid fa-link", "Live", "Live Preview"));
  }
  if (p.links.design) {
    links.push(
      linkButton(p.links.design, "fa-brands fa-figma", "Design", "View Figma Design")
    );
  }
  if (p.links.code) {
    links.push(linkButton(p.links.code, "fa-brands fa-github", "Code", "View GitHub Code"));
  }
  if (p.links.notion) {
    links.push(
      linkButton(p.links.notion, "fa-brands fa-notion", "Notion", "View Notion Workspace")
    );
  }

  return `
    <li class="project-card"
        data-aos="fade-up"
        data-aos-duration="700"
        data-aos-delay="${delay}">
      <a class="project-card__image" href="${detail}" aria-label="Read case study: ${p.title}">
        <img src="${asset(p.heroImage)}" alt="${p.heroAlt}" />
      </a>
      <div class="project-card__body">
        <div class="chips">${chips}</div>
        <h3 class="project-card__title">
          <a href="${detail}">${p.title}</a>
        </h3>
        <p class="project-card__desc">${p.tagline}</p>
        <div class="project-card__links">${links.join("")}</div>
      </div>
    </li>`;
};

export function createProjectsSection(): HTMLElement {
  const el = document.createElement("section");
  el.className = "container projects";
  el.id = "projects";
  el.setAttribute("aria-labelledby", "projects-title");

  el.innerHTML = `
    <div class="projects__header"
      data-aos="fade-up"
      data-aos-duration="700">
      <h2 id="projects-title">Projects</h2>
      <p>Flexible creations where design and code dance together.</p>
    </div>

    <ul class="projects__grid">
      ${projects.map(renderProjectCard).join("")}
    </ul>
  `;

  return el;
}
