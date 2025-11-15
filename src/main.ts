// src/main.ts
import "./style.css";
import "./styles/navbar.css";
import "./styles/hero.css";
import "./styles/techstack.css";
import "./styles/services.css";
import "./styles/softskills.css";
import "./styles/projects.css";
import "./styles/contact.css";
import "./styles/footer.css";
import "./styles/about.css";

import { initTheme, bindThemeToggles } from "./utils/theme";
import { createNavbar, initNavbarMenu } from "./components/navbar";
import { createHero } from "./components/hero";
import { createStack } from "./components/techstack";
import { createAboutSection } from "./components/about";
import { createServicesSection } from "./components/services";
import { createSoftSkillsSection } from "./components/softskills";
import { createProjectsSection } from "./components/projects";
import { createContactSection, initContactForm } from "./components/contact";
import { createFooter } from "./components/footer";

const navbarMount = document.querySelector<HTMLElement>("#navbar");
if (navbarMount) {
  navbarMount.appendChild(createNavbar());
}

const app = document.querySelector<HTMLElement>("#app");
if (app) {
  app.appendChild(createHero());
  app.appendChild(createStack());
  app.appendChild(createAboutSection());
  app.appendChild(createServicesSection());
  app.appendChild(createSoftSkillsSection());
  app.appendChild(createProjectsSection());
  app.appendChild(createContactSection());
  initContactForm();
}

const footerMount = document.querySelector<HTMLElement>("#footer");
if (footerMount) {
  footerMount.appendChild(createFooter());
}

initTheme(); // set initial theme
bindThemeToggles(); // bind all .theme-toggle buttons
initNavbarMenu(); // mobile menu behavior
