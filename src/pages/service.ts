import "../style.css";
import "../styles/navbar.css";
import "../styles/footer.css";
import "../styles/services.css";
import "../styles/projects.css";
import "../styles/service-detail.css";

import { mountPageShell } from "../utils/page-shell";
import { getSlugFromUrl } from "../utils/slug";
import { services } from "../data/services";
import {
  renderServiceDetail,
  renderServiceNotFound,
} from "../components/service-detail";

mountPageShell();

const app = document.querySelector<HTMLElement>("#app");
if (app) {
  const slug = getSlugFromUrl();
  const service = services.find((s) => s.slug === slug);

  if (service) {
    document.title = `${service.title} — Sohaib Awwad (Floppy Man)`;
    app.appendChild(renderServiceDetail(service));
  } else {
    document.title = "Service not found — Floppy Man";
    app.appendChild(renderServiceNotFound(slug));
  }
}
