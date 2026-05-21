import AOS from "aos";
import { projects, type Project } from "../data/projects";
import { projectUrl, asset } from "../utils/slug";

const PAGE_SIZE = 6;

const FILTER_ORDER = [
  "Full-Stack",
  "Front-End",
  "Back-End",
  "UI / UX",
  "Graphic Design",
  "Notion",
];

type ChipKind = "web" | "design" | "notion";

const chipKind = (chip: string): ChipKind => {
  if (chip === "Notion") return "notion";
  if (["Full-Stack", "Front-End", "Back-End"].includes(chip)) return "web";
  return "design";
};

const chipClass = (chip: string): string => {
  const kind = chipKind(chip);
  if (kind === "web") return "chip-web-project";
  if (kind === "design") return "chip-design-project";
  return "chip-notion";
};

const filterChipClass = (chip: string): string =>
  `filter-chip filter-chip--${chipKind(chip)}`;

const iconLink = (url: string, icon: string, ariaLabel: string): string => `
  <a href="${url}" target="_blank" rel="noopener"
     class="project-icon-link" aria-label="${ariaLabel}">
    <i class="${icon}" aria-hidden="true"></i>
  </a>`;

const renderHeroImage = (p: Project): string => {
  if (p.heroImage) {
    return `<img src="${asset(p.heroImage)}" alt="${p.heroAlt}" />`;
  }
  const slug = p.slug.replace(/-/g, " ");
  return `<span class="project-card__image-fallback" aria-hidden="true">${slug} shot</span>`;
};

const renderProjectCard = (p: Project, index: number): string => {
  const delay = (index % PAGE_SIZE) * 100;
  const chips = p.chips
    .map((c) => `<span class="${chipClass(c)}">${c}</span>`)
    .join("");
  const detail = projectUrl(p.slug);

  const iconLinks: string[] = [];
  if (p.links.live) {
    iconLinks.push(iconLink(p.links.live, "fa-solid fa-link", "Live preview"));
  }
  if (p.links.design) {
    iconLinks.push(iconLink(p.links.design, "fa-brands fa-figma", "View Figma design"));
  }
  if (p.links.code) {
    iconLinks.push(iconLink(p.links.code, "fa-brands fa-github", "View GitHub code"));
  }
  if (p.links.notion) {
    iconLinks.push(
      iconLink(p.links.notion, "fa-brands fa-notion", "View Notion workspace")
    );
  }

  const imageClass =
    "project-card__image" +
    (p.heroImage ? "" : " project-card__image--placeholder");

  return `
    <li class="project-card"
        data-chips="${p.chips.join("|")}"
        data-aos="fade-up"
        data-aos-duration="700"
        data-aos-delay="${delay}">
      <a class="${imageClass}" href="${detail}" aria-label="Read case study: ${p.title}">
        ${renderHeroImage(p)}
      </a>
      <div class="project-card__body">
        <div class="chips">${chips}</div>
        <h3 class="project-card__title">
          <a href="${detail}">${p.title}</a>
        </h3>
        <p class="project-card__desc">${p.tagline}</p>
        <div class="project-card__links">
          <a class="project-card__cta" href="${detail}" aria-label="Read full case study: ${p.title}">
            <i class="fa-solid fa-book-open" aria-hidden="true"></i>
            <span>Case study</span>
          </a>
          <div class="project-card__icons">${iconLinks.join("")}</div>
        </div>
      </div>
    </li>`;
};

export function createProjectsSection(): HTMLElement {
  const el = document.createElement("section");
  el.className = "container projects";
  el.id = "projects";
  el.setAttribute("aria-labelledby", "projects-title");

  const usedChips = new Set<string>();
  projects.forEach((p) => p.chips.forEach((c) => usedChips.add(c)));
  const availableFilters = FILTER_ORDER.filter((c) => usedChips.has(c));

  const filterButtons = [
    `<button type="button" class="filter-chip filter-chip--all is-active" data-filter="all" role="radio" aria-checked="true">All</button>`,
    ...availableFilters.map(
      (c) =>
        `<button type="button" class="${filterChipClass(c)}" data-filter="${c}" role="radio" aria-checked="false">${c}</button>`
    ),
  ].join("");

  el.innerHTML = `
    <div class="projects__header"
      data-aos="fade-up"
      data-aos-duration="700">
      <h2 id="projects-title">Projects</h2>
      <p>Flexible creations where design and code dance together.</p>
    </div>

    <div class="projects__filters"
         role="radiogroup"
         aria-label="Filter projects by type"
         data-aos="fade-up"
         data-aos-duration="700">
      ${filterButtons}
    </div>

    <ul class="projects__grid">
      ${projects.map(renderProjectCard).join("")}
    </ul>

    <nav class="projects__pagination" aria-label="Projects pagination" hidden>
      <button type="button" class="pagination-btn" data-pagination="prev" aria-label="Previous page">
        <i class="fa-solid fa-chevron-left"></i>
      </button>
      <ul class="pagination-pages"></ul>
      <button type="button" class="pagination-btn" data-pagination="next" aria-label="Next page">
        <i class="fa-solid fa-chevron-right"></i>
      </button>
    </nav>
  `;

  initProjectsControls(el);
  return el;
}

function initProjectsControls(root: HTMLElement): void {
  let activeFilter = "all";
  let currentPage = 1;

  const cards = Array.from(root.querySelectorAll<HTMLElement>(".project-card"));
  const filterBtns = Array.from(
    root.querySelectorAll<HTMLButtonElement>(".filter-chip")
  );
  const grid = root.querySelector<HTMLElement>(".projects__grid")!;
  const pagination = root.querySelector<HTMLElement>(".projects__pagination")!;
  const pagesList = root.querySelector<HTMLElement>(".pagination-pages")!;
  const prevBtn = root.querySelector<HTMLButtonElement>('[data-pagination="prev"]')!;
  const nextBtn = root.querySelector<HTMLButtonElement>('[data-pagination="next"]')!;

  const emptyEl = document.createElement("li");
  emptyEl.className = "projects__empty";
  emptyEl.textContent = "No projects in this category yet.";
  emptyEl.hidden = true;
  grid.appendChild(emptyEl);

  const matchesActive = (card: HTMLElement): boolean => {
    if (activeFilter === "all") return true;
    const chips = (card.dataset.chips ?? "").split("|");
    return chips.includes(activeFilter);
  };

  const render = (): void => {
    const matched = cards.filter(matchesActive);
    const totalPages = Math.max(1, Math.ceil(matched.length / PAGE_SIZE));
    if (currentPage > totalPages) currentPage = totalPages;

    const start = (currentPage - 1) * PAGE_SIZE;
    const visible = new Set(matched.slice(start, start + PAGE_SIZE));

    cards.forEach((card) => {
      card.classList.toggle("is-hidden", !visible.has(card));
    });

    emptyEl.hidden = matched.length > 0;

    if (totalPages > 1) {
      pagination.hidden = false;
      prevBtn.disabled = currentPage === 1;
      nextBtn.disabled = currentPage === totalPages;
      pagesList.innerHTML = Array.from({ length: totalPages }, (_, i) => {
        const page = i + 1;
        const isActive = page === currentPage;
        return `<li><button type="button" class="pagination-page${
          isActive ? " is-active" : ""
        }" data-page="${page}" aria-label="Go to page ${page}"${
          isActive ? ' aria-current="page"' : ""
        }>${page}</button></li>`;
      }).join("");
    } else {
      pagination.hidden = true;
      pagesList.innerHTML = "";
    }

    if (typeof AOS.refresh === "function") AOS.refresh();
  };

  filterBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      const filter = btn.dataset.filter!;
      if (filter === activeFilter) return;
      activeFilter = filter;
      currentPage = 1;
      filterBtns.forEach((b) => {
        const isActive = b === btn;
        b.classList.toggle("is-active", isActive);
        b.setAttribute("aria-checked", String(isActive));
      });
      render();
    });
  });

  const goToPage = (page: number): void => {
    if (page === currentPage) return;
    currentPage = page;
    render();
    root.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  prevBtn.addEventListener("click", () => {
    if (currentPage > 1) goToPage(currentPage - 1);
  });
  nextBtn.addEventListener("click", () => {
    const total = Math.max(1, Math.ceil(cards.filter(matchesActive).length / PAGE_SIZE));
    if (currentPage < total) goToPage(currentPage + 1);
  });
  pagesList.addEventListener("click", (e) => {
    const target = (e.target as HTMLElement).closest<HTMLElement>("[data-page]");
    if (!target) return;
    const page = Number(target.dataset.page);
    if (Number.isFinite(page)) goToPage(page);
  });

  render();
}
