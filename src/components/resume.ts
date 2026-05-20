import {
  education,
  proSkills,
  experience,
  softSkills,
  certifications,
  languages,
  awards,
  type EducationEntry,
  type ExperienceEntry,
  type SkillGroup,
  type SoftSkill,
  type Certification,
  type Language,
  type Award,
} from "../data/resume";

type TabKey =
  | "education"
  | "pro-skills"
  | "experience"
  | "certifications"
  | "soft-skills"
  | "languages"
  | "awards";

type Tab = {
  key: TabKey;
  label: string;
  icon: string;
};

const TABS: Tab[] = [
  { key: "education", label: "Education", icon: "fa-solid fa-graduation-cap" },
  { key: "pro-skills", label: "Professional Skills", icon: "fa-solid fa-laptop-code" },
  { key: "experience", label: "Experience", icon: "fa-solid fa-briefcase" },
  { key: "certifications", label: "Certifications", icon: "fa-solid fa-certificate" },
  { key: "soft-skills", label: "Soft Skills", icon: "fa-solid fa-handshake-angle" },
  { key: "languages", label: "Languages", icon: "fa-solid fa-language" },
  { key: "awards", label: "Awards", icon: "fa-solid fa-trophy" },
];

const HASH_PREFIX = "#resume-";

const empty = (msg: string): string =>
  `<div class="resume-empty">
     <i class="fa-regular fa-clock" aria-hidden="true"></i>
     <p>${msg}</p>
   </div>`;

const renderEducation = (items: EducationEntry[]): string => {
  if (!items.length) return empty("Education details will land here once the new CV is in.");
  return `<ul class="resume-cards">
    ${items
      .map(
        (e) => `
      <li class="resume-card">
        ${e.logo ? `<div class="resume-card__logo"><img src="${e.logo}" alt="" /></div>` : ""}
        <div class="resume-card__body">
          <h3 class="resume-card__title">${e.degree}</h3>
          <p class="resume-card__meta">
            ${e.institution}
            ${e.location ? ` — ${e.location}` : ""}
            ${e.period ? ` — <time>${e.period}</time>` : ""}
          </p>
          ${e.desc ? `<p class="resume-card__desc">${e.desc}</p>` : ""}
        </div>
      </li>`
      )
      .join("")}
  </ul>`;
};

const renderProSkills = (groups: SkillGroup[]): string => {
  if (!groups.length) return empty("Professional skills coming soon.");
  return `<div class="resume-skills">
    ${groups
      .map(
        (g) => `
      <div class="resume-skills__group">
        <h3 class="resume-skills__group-title">${g.group}</h3>
        <ul class="resume-skills__chips">
          ${g.items.map((s) => `<li class="chip">${s}</li>`).join("")}
        </ul>
      </div>`
      )
      .join("")}
  </div>`;
};

const renderExperience = (items: ExperienceEntry[]): string => {
  if (!items.length)
    return empty("Work experience details will land here once the new CV is in.");
  return `<ul class="resume-cards">
    ${items
      .map(
        (e) => `
      <li class="resume-card">
        ${e.logo ? `<div class="resume-card__logo"><img src="${e.logo}" alt="" /></div>` : ""}
        <div class="resume-card__body">
          <h3 class="resume-card__title">${e.role}</h3>
          <p class="resume-card__meta">
            ${e.company}
            ${e.location ? ` — ${e.location}` : ""}
            ${e.period ? ` — <time>${e.period}</time>` : ""}
          </p>
          ${
            e.bullets?.length
              ? `<ul class="resume-card__bullets">${e.bullets
                  .map((b) => `<li>${b}</li>`)
                  .join("")}</ul>`
              : ""
          }
        </div>
      </li>`
      )
      .join("")}
  </ul>`;
};

const renderCertifications = (items: Certification[]): string => {
  if (!items.length)
    return empty("Certifications will appear here once the new CV is in.");
  return `<ul class="resume-cards">
    ${items
      .map(
        (c) => `
      <li class="resume-card">
        <div class="resume-card__body">
          <h3 class="resume-card__title">${c.name}</h3>
          <p class="resume-card__meta">
            ${c.issuer} — <time>${c.period}</time>
          </p>
          ${
            c.credentialUrl
              ? `<a class="resume-card__link" href="${c.credentialUrl}" target="_blank" rel="noopener">
                   View credential <i class="fa-solid fa-arrow-up-right-from-square"></i>
                 </a>`
              : ""
          }
        </div>
      </li>`
      )
      .join("")}
  </ul>`;
};

const renderSoftSkills = (items: SoftSkill[]): string => {
  if (!items.length) return empty("Soft skills coming soon.");
  return `<ul class="resume-soft-grid">
    ${items
      .map(
        (s) => `
      <li class="resume-soft-card">
        <div class="resume-soft-card__icon" aria-hidden="true">
          <i class="${s.icon}"></i>
        </div>
        <h3>${s.title}</h3>
        <p>${s.desc}</p>
      </li>`
      )
      .join("")}
  </ul>`;
};

const renderLanguages = (items: Language[]): string => {
  if (!items.length) return empty("Languages will land here once the new CV is in.");
  return `<ul class="resume-languages">
    ${items
      .map(
        (l) => `
      <li class="resume-language">
        <span class="resume-language__name">${l.name}</span>
        <span class="resume-language__level resume-language__level--${l.level.toLowerCase()}">${l.level}</span>
      </li>`
      )
      .join("")}
  </ul>`;
};

const renderAwards = (items: Award[]): string => {
  if (!items.length)
    return empty("Awards and recognition will land here once the new CV is in.");
  return `<ul class="resume-cards">
    ${items
      .map(
        (a) => `
      <li class="resume-card">
        <div class="resume-card__body">
          <h3 class="resume-card__title">${a.title}</h3>
          <p class="resume-card__meta">
            ${a.issuer} — <time>${a.period}</time>
          </p>
          ${a.desc ? `<p class="resume-card__desc">${a.desc}</p>` : ""}
          ${
            a.credentialUrl
              ? `<a class="resume-card__link" href="${a.credentialUrl}" target="_blank" rel="noopener">
                   View certificate <i class="fa-solid fa-arrow-up-right-from-square"></i>
                 </a>`
              : ""
          }
        </div>
      </li>`
      )
      .join("")}
  </ul>`;
};

const renderPanel = (key: TabKey): string => {
  switch (key) {
    case "education":
      return renderEducation(education);
    case "pro-skills":
      return renderProSkills(proSkills);
    case "experience":
      return renderExperience(experience);
    case "certifications":
      return renderCertifications(certifications);
    case "soft-skills":
      return renderSoftSkills(softSkills);
    case "languages":
      return renderLanguages(languages);
    case "awards":
      return renderAwards(awards);
  }
};

const initialTabFromHash = (): TabKey => {
  const hash = location.hash;
  if (!hash.startsWith(HASH_PREFIX)) return "education";
  const key = hash.slice(HASH_PREFIX.length) as TabKey;
  return TABS.some((t) => t.key === key) ? key : "education";
};

export function createResumeSection(): HTMLElement {
  const el = document.createElement("section");
  el.className = "container resume";
  el.id = "skills";
  el.setAttribute("aria-labelledby", "resume-title");

  const active = initialTabFromHash();

  const tabButtons = TABS.map(
    (t) => `
    <button
      role="tab"
      class="resume-tab${t.key === active ? " is-active" : ""}"
      id="resume-tab-${t.key}"
      aria-controls="resume-panel-${t.key}"
      aria-selected="${t.key === active ? "true" : "false"}"
      tabindex="${t.key === active ? "0" : "-1"}"
      data-tab="${t.key}">
      <i class="${t.icon}" aria-hidden="true"></i>
      <span>${t.label}</span>
    </button>`
  ).join("");

  const panels = TABS.map(
    (t) => `
    <div
      role="tabpanel"
      class="resume-panel${t.key === active ? " is-active" : ""}"
      id="resume-panel-${t.key}"
      aria-labelledby="resume-tab-${t.key}"
      ${t.key === active ? "" : "hidden"}>
      ${renderPanel(t.key)}
    </div>`
  ).join("");

  el.innerHTML = `
    <header class="resume__header" data-aos="fade-up" data-aos-duration="700">
      <h2 id="resume-title">My Resume</h2>
      <p class="resume__subtitle">
        Education, skills, and the story behind the work.
      </p>
    </header>

    <div class="resume__tablist-wrap"
      data-aos="fade-up" data-aos-duration="700" data-aos-delay="80">
      <div role="tablist" aria-label="Resume sections" class="resume__tablist">
        ${tabButtons}
      </div>
    </div>

    <div class="resume__panels"
      data-aos="fade-up" data-aos-duration="700" data-aos-delay="160">
      ${panels}
    </div>
  `;

  initResumeTabs(el);
  return el;
}

function initResumeTabs(root: HTMLElement): void {
  const tabs = Array.from(root.querySelectorAll<HTMLButtonElement>(".resume-tab"));
  const panels = Array.from(root.querySelectorAll<HTMLElement>(".resume-panel"));

  if (!tabs.length) return;

  const activate = (key: TabKey, options: { focus?: boolean; updateHash?: boolean } = {}) => {
    const { focus = false, updateHash = true } = options;
    tabs.forEach((t) => {
      const isActive = t.dataset.tab === key;
      t.classList.toggle("is-active", isActive);
      t.setAttribute("aria-selected", String(isActive));
      t.setAttribute("tabindex", isActive ? "0" : "-1");
      if (focus && isActive) t.focus();
    });
    panels.forEach((p) => {
      const isActive = p.id === `resume-panel-${key}`;
      p.classList.toggle("is-active", isActive);
      if (isActive) {
        p.removeAttribute("hidden");
      } else {
        p.setAttribute("hidden", "");
      }
    });
    if (updateHash) {
      const newHash = `${HASH_PREFIX}${key}`;
      if (location.hash !== newHash) {
        history.replaceState(null, "", newHash);
      }
    }
    const activeTab = tabs.find((t) => t.dataset.tab === key);
    activeTab?.scrollIntoView({ behavior: "smooth", inline: "center", block: "nearest" });
  };

  tabs.forEach((tab) => {
    tab.addEventListener("click", () => {
      const key = tab.dataset.tab as TabKey;
      activate(key);
    });

    tab.addEventListener("keydown", (e) => {
      const idx = tabs.indexOf(tab);
      if (idx === -1) return;
      let nextIdx: number | null = null;
      switch (e.key) {
        case "ArrowRight":
          nextIdx = (idx + 1) % tabs.length;
          break;
        case "ArrowLeft":
          nextIdx = (idx - 1 + tabs.length) % tabs.length;
          break;
        case "Home":
          nextIdx = 0;
          break;
        case "End":
          nextIdx = tabs.length - 1;
          break;
      }
      if (nextIdx !== null) {
        e.preventDefault();
        const nextKey = tabs[nextIdx].dataset.tab as TabKey;
        activate(nextKey, { focus: true });
      }
    });
  });

  window.addEventListener("hashchange", () => {
    if (!location.hash.startsWith(HASH_PREFIX)) return;
    const key = location.hash.slice(HASH_PREFIX.length) as TabKey;
    if (TABS.some((t) => t.key === key)) {
      activate(key, { updateHash: false });
    }
  });
}
