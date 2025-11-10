// src/main.ts
import "./style.css";
import "./styles/navbar.css";
import "./styles/hero.css";
import "./styles/techstack.css";
import "./styles/services.css";

import { initTheme, bindThemeToggles } from "./utils/theme";
import { createNavbar, initNavbarMenu } from "./components/navbar";
import { createHero } from "./components/hero";
import { createStack } from "./components/techstack";
import { createServicesSection } from "./components/services";

const navbarMount = document.querySelector<HTMLElement>("#navbar");
if (navbarMount) {
  navbarMount.appendChild(createNavbar());
}

const app = document.querySelector<HTMLElement>("#app");
if (app) {
  app.appendChild(createHero());
  app.appendChild(createStack());
  app.appendChild(createServicesSection());
}

initTheme(); // set initial theme
bindThemeToggles(); // bind all .theme-toggle buttons
initNavbarMenu(); // mobile menu behavior
