import "./style.css";
import "./styles/navbar.css";
import "./styles/hero.css";
import "./styles/techstack.css";
import "./styles/services.css";
import "./styles/resume.css";
import "./styles/projects.css";
import "./styles/contact.css";
import "./styles/footer.css";
import "./styles/about.css";

import { mountPageShell } from "./utils/page-shell";
import { createHero } from "./components/hero";
import { createStack } from "./components/techstack";
import { createAboutSection } from "./components/about";
import { createServicesSection } from "./components/services";
import { createResumeSection } from "./components/resume";
import { createProjectsSection } from "./components/projects";
import { createContactSection, initContactForm } from "./components/contact";

mountPageShell();

const app = document.querySelector<HTMLElement>("#app");
if (app) {
  app.appendChild(createHero());
  app.appendChild(createStack());
  app.appendChild(createAboutSection());
  app.appendChild(createServicesSection());
  app.appendChild(createResumeSection());
  app.appendChild(createProjectsSection());
  app.appendChild(createContactSection());
  initContactForm();

  // Sections are created by JS, so the browser's initial hash-scroll
  // ran before #about / #skills / etc. existed. Re-scroll once the
  // DOM has settled so deep-links like /Portfolio/#skills land correctly.
  if (location.hash) {
    requestAnimationFrame(() => {
      const target = document.querySelector(location.hash);
      if (target) target.scrollIntoView({ behavior: "auto", block: "start" });
    });
  }
}
