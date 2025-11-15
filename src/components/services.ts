// src/components/services.ts
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

    <ul class="services__flex">
      <!-- Card 1 -->
      <li class="service-card"
        data-aos="fade-right"
        data-aos-duration="700"
        data-aos-delay="100">
        <div class="service-card__icon" aria-hidden="true">
          <i class="fa-solid fa-code"></i>
        </div>

        <div class="service-card__body">
          <h3 class="service-card__title">Full-Stack Web Development</h3>
          <p class="service-card__desc">
            I build complete web apps from front to back — fast, secure, and scalable.
          </p>
        </div>

        <ul class="chip-list" aria-label="Tech stack">
          <li class="chip">Angular/.Net</li>
          <li class="chip">Git/Github</li>
          <li class="chip">SSMS</li>
        </ul>
      </li>

      <!-- Card 2 -->
      <li class="service-card"
        data-aos="fade-left"
        data-aos-duration="700"
        data-aos-delay="200">
        <div class="service-card__icon" aria-hidden="true">
          <i class="fa-solid fa-palette"></i>
        </div>

        <div class="service-card__body">
          <h3 class="service-card__title">UI / UX Design</h3>
          <p class="service-card__desc">
            I design interfaces that look perfect, feel right, and flow naturally from wireframe to final UI.
          </p>
        </div>

        <ul class="chip-list" aria-label="Tools">
          <li class="chip">Figma</li>
          <li class="chip">Canva</li>
        </ul>
      </li>
    </ul>
  `;

  return el;
}
