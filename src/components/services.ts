import { services, type Service } from "../data/services";
import { serviceUrl } from "../utils/slug";

const renderServiceCard = (s: Service, index: number): string => {
  const isLeft = index % 2 === 0;
  const aosDir = isLeft ? "fade-right" : "fade-left";
  const delay = 100 + index * 80;
  const detail = serviceUrl(s.slug);

  const chips = (s.cardChips ?? [])
    .map((c) => `<li class="chip">${c}</li>`)
    .join("");

  return `
    <li class="service-card"
        data-aos="${aosDir}"
        data-aos-duration="700"
        data-aos-delay="${delay}">
      <a class="service-card__icon" aria-hidden="true" href="${detail}" tabindex="-1">
        <i class="${s.icon}"></i>
      </a>

      <div class="service-card__body">
        <h3 class="service-card__title">
          <a href="${detail}">${s.title}</a>
        </h3>
        <p class="service-card__desc">${s.tagline}</p>
      </div>

      ${chips ? `<ul class="chip-list" aria-label="Tools">${chips}</ul>` : ""}

      <a class="service-card__cta" href="${detail}" aria-label="Learn more about ${s.title}">
        Learn more <i class="fa-solid fa-arrow-right"></i>
      </a>
    </li>`;
};

export function createServicesSection(): HTMLElement {
  const el = document.createElement("section");
  el.className = "container services";
  el.id = "services";
  el.setAttribute("aria-labelledby", "services-title");

  el.innerHTML = `
    <header class="services__header"
      data-aos="fade-up"
      data-aos-duration="700">
      <h2 id="services-title">Services</h2>
      <p class="services__subtitle">
        Flexible Services that blend design and development.
      </p>
    </header>

    <ul class="services__grid">
      ${services.map(renderServiceCard).join("")}
    </ul>
  `;

  return el;
}
