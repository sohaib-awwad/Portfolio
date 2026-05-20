import "../style.css";
import "../styles/navbar.css";
import "../styles/footer.css";
import "../styles/projects.css";
import "../styles/project-detail.css";

import { mountPageShell } from "../utils/page-shell";
import { getSlugFromUrl } from "../utils/slug";
import { projects } from "../data/projects";
import {
  renderProjectDetail,
  renderProjectNotFound,
} from "../components/project-detail";

mountPageShell();

const app = document.querySelector<HTMLElement>("#app");
if (app) {
  const slug = getSlugFromUrl();
  const project = projects.find((p) => p.slug === slug);

  if (project) {
    document.title = `${project.title} — Sohaib Awwad (Floppy Man)`;
    app.appendChild(renderProjectDetail(project));
  } else {
    document.title = "Project not found — Floppy Man";
    app.appendChild(renderProjectNotFound(slug));
  }
}
