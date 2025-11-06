// src/main.ts
import "./style.css";
import "./styles/navbar.css";

import { initTheme, bindThemeToggles } from "./utils/theme";
import { createNavbar, initNavbarMenu } from "./components/navbar";

const navbarMount = document.querySelector<HTMLElement>("#navbar");
if (navbarMount) {
  navbarMount.appendChild(createNavbar());
}

initTheme(); // set initial theme
bindThemeToggles(); // bind all .theme-toggle buttons
initNavbarMenu(); // mobile menu behavior
