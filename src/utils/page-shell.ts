import AOS from "aos";
import "aos/dist/aos.css";

import { initTheme, bindThemeToggles } from "./theme";
import { createNavbar, initNavbarMenu } from "../components/navbar";
import { createFooter } from "../components/footer";

export type PageShellOptions = {
  initAos?: boolean;
};

export function mountPageShell(options: PageShellOptions = {}): void {
  const { initAos = true } = options;

  if (initAos) {
    AOS.init({
      once: true,
      duration: 700,
      easing: "ease-out-cubic",
    });
  }

  const navbarMount = document.querySelector<HTMLElement>("#navbar");
  if (navbarMount) {
    navbarMount.appendChild(createNavbar());
  }

  const footerMount = document.querySelector<HTMLElement>("#footer");
  if (footerMount) {
    footerMount.appendChild(createFooter());
  }

  initTheme();
  bindThemeToggles();
  initNavbarMenu();
}
