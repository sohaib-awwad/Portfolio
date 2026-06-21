import "../style.css";
import "../styles/navbar.css";
import "../styles/footer.css";
import "../styles/projects.css";

import { mountPageShell } from "../utils/page-shell";
import { createProjectsSection } from "../components/projects";

mountPageShell();

const app = document.querySelector<HTMLElement>("#app");
if (app) {
  document.title = "Projects — Sohaib Awwad (Floppy Man)";
  app.appendChild(createProjectsSection({ variant: "all" }));
}
