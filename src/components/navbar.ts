import { homeUrl, asset } from "../utils/slug";

type SectionId = "about" | "services" | "skills" | "projects" | "contact";

const SECTIONS: SectionId[] = ["about", "services", "skills", "projects", "contact"];

const isHomePage = (): boolean => {
  const path = location.pathname.replace(/\/$/, "");
  const base = import.meta.env.BASE_URL.replace(/\/$/, "");
  return path === base || path === `${base}/index.html`;
};

const link = (hash: string): string => (isHomePage() ? hash : `${homeUrl(hash)}`);

export function createNavbar(): HTMLElement {
  const el = document.createElement("nav");
  el.className = "navbar";
  el.innerHTML = `
    <div class="container navbar__inner">
      <a class="brand" href="${homeUrl()}" data-brand aria-label="Floppy Man home">
        <img class="brand__logo" src="${asset("icons/Floppy Man.svg")}" alt="Floppy Man logo" width="44" height="44" />
        <span class="brand__name">Floppy Man</span>
      </a>

      <div class="menu menu--inline" role="navigation" aria-label="Primary">
        <a class="menu__link" data-section="about" href="${link("#about")}">About</a>
        <a class="menu__link" data-section="services" href="${link("#services")}">Services</a>
        <a class="menu__link" data-section="skills" href="${link("#skills")}">Resume</a>
        <a class="menu__link" data-section="projects" href="${link("#projects")}">Projects</a>
        <a class="btn-primary" data-section="contact" href="${link("#contact")}">Contact</a>
        <button class="theme-toggle" aria-label="Toggle theme">
          <i class="fa-solid fa-moon" aria-hidden="true"></i>
        </button>
      </div>

      <div class="nav-icons">
        <button class="theme-toggle" aria-label="Toggle theme">
          <i class="fa-solid fa-moon" aria-hidden="true"></i>
        </button>
        <button id="burger" class="burger" aria-label="Toggle menu" aria-expanded="false" aria-controls="mobileMenu">
          <i class="fa-solid fa-bars"></i>
        </button>
      </div>
    </div>

    <div id="mobileMenu" class="mobile-menu">
      <a class="menu__link" data-section="about" href="${link("#about")}">About</a>
      <a class="menu__link" data-section="services" href="${link("#services")}">Services</a>
      <a class="menu__link" data-section="skills" href="${link("#skills")}">Resume</a>
      <a class="menu__link" data-section="projects" href="${link("#projects")}">Projects</a>
      <a class="btn-primary mobile-cta" data-section="contact" href="${link("#contact")}">Contact</a>
    </div>
  `;
  return el;
}

export function initNavbarMenu() {
  initBrandClick();
  initMobileMenu();
  initActiveNav();
}

function initBrandClick() {
  const brand = document.querySelector<HTMLAnchorElement>("[data-brand]");
  if (!brand) return;

  brand.addEventListener("click", (e) => {
    if (!isHomePage()) return;
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
    if (location.hash) {
      history.replaceState(null, "", location.pathname + location.search);
    }
  });
}

function initMobileMenu() {
  const burger = document.getElementById("burger") as HTMLButtonElement | null;
  const panel = document.getElementById("mobileMenu") as HTMLElement | null;
  if (!burger || !panel) return;

  const open = () => {
    panel.classList.add("is-open");
    burger.setAttribute("aria-expanded", "true");
    document.body.style.overflow = "hidden";
  };
  const close = () => {
    panel.classList.remove("is-open");
    burger.setAttribute("aria-expanded", "false");
    document.body.style.overflow = "";
  };
  const toggle = () => {
    if (panel.classList.contains("is-open")) close();
    else open();
  };

  burger.addEventListener("click", (e) => {
    e.stopPropagation();
    toggle();
  });

  panel.addEventListener("click", (e) => {
    const t = e.target as HTMLElement;
    if (t.tagName === "A") close();
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") close();
  });

  document.addEventListener("click", (e) => {
    const target = e.target as Node;
    if (
      panel.classList.contains("is-open") &&
      !panel.contains(target) &&
      !burger.contains(target)
    ) {
      close();
    }
  });

  matchMedia("(min-width: 1025px)").addEventListener("change", (e) => {
    if (e.matches) close();
  });
}

function initActiveNav() {
  const allLinks = Array.from(
    document.querySelectorAll<HTMLAnchorElement>(".menu__link, .btn-primary[data-section]")
  );
  if (!allLinks.length) return;

  const setActive = (section: SectionId | null) => {
    allLinks.forEach((l) => {
      const match = l.dataset.section === section;
      l.classList.toggle("is-active", match);
    });
  };

  // Sub-page → highlight parent section
  const path = location.pathname;
  const base = import.meta.env.BASE_URL;
  if (path === `${base}projects.html` || path.startsWith(`${base}projects/`)) {
    setActive("projects");
    return;
  }
  if (path.startsWith(`${base}services/`)) {
    setActive("services");
    return;
  }

  if (!isHomePage()) return;

  // Home page → scroll-spy with IntersectionObserver
  const observed = SECTIONS.map((id) => document.getElementById(id)).filter(
    (el): el is HTMLElement => Boolean(el)
  );
  if (!observed.length) return;

  const visibilityMap = new Map<string, number>();

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        visibilityMap.set(entry.target.id, entry.intersectionRatio);
      });

      let topSection: SectionId | null = null;
      let topRatio = 0;
      SECTIONS.forEach((id) => {
        const r = visibilityMap.get(id) ?? 0;
        if (r > topRatio) {
          topRatio = r;
          topSection = id;
        }
      });

      setActive(topRatio > 0.05 ? topSection : null);
    },
    {
      // The section becomes active when its center crosses the upper third
      // of the viewport — feels right for scroll-spy.
      rootMargin: "-30% 0px -50% 0px",
      threshold: [0, 0.25, 0.5, 0.75, 1],
    }
  );

  observed.forEach((el) => observer.observe(el));

  // Top of page → no section active
  window.addEventListener("scroll", () => {
    if (window.scrollY < 100) setActive(null);
  });
}
