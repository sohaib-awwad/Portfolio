// src/components/about.ts
export function createAboutSection(): HTMLElement {
  const el = document.createElement("section");
  el.className = "container about";
  el.id = "about";
  el.setAttribute("aria-labelledby", "about-title");

  el.innerHTML = `
    <header class="about__header"
      data-aos="fade-up"
      data-aos-duration="700">
      <h2 id="about-title">About</h2>
      <p class="about__subtitle">
        A quick snapshot of who I am and what <span class="highlight">Floppy Man</span> stands for.
      </p>
    </header>

    <div class="about__panel">
      <ul class="about__list">
        <li class="about__item"
          data-aos="fade-up"
          data-aos-duration="700"
          data-aos-delay="0">
          <div class="about__icon" aria-hidden="true">
            <i class="fa-solid fa-user"></i>
          </div>
          <div class="about__text">
            <h3>Who I am</h3>
            <p>
              I’m <strong>Sohaib Awwad</strong>, a developer &amp; UI/UX designer who enjoys turning rough ideas
              into clean, flexible web experiences.
            </p>
          </div>
        </li>

        <li class="about__item"
          data-aos="fade-up"
          data-aos-duration="700"
          data-aos-delay="120">
          <div class="about__icon" aria-hidden="true">
            <i class="fa-solid fa-copyright"></i>
          </div>
          <div class="about__text">
            <h3>Floppy Man</h3>
            <p>
              <strong>Floppy Man</strong> is my personal brand – the name I use for work where design and code stay
              light, flexible, and a bit playful.
            </p>
          </div>
        </li>

        <li class="about__item"
          data-aos="fade-up"
          data-aos-duration="700"
          data-aos-delay="240">
          <div class="about__icon" aria-hidden="true">
            <i class="fa-solid fa-arrows-up-down-left-right"></i>
          </div>
          <div class="about__text">
            <h3>Best fit</h3>
            <p>
              I enjoy working across the full stack, crafting clean UI/UX flows, and building visual systems that make products feel consistent and expressive.
            </p>
            <div class="about__tags">
              <span class="tag">Full Stack Dev</span>
              <span class="tag">UI / UX</span>
              <span class="tag">Brand & Visual Systems</span>
            </div>
          </div>
        </li>
      </ul>
    </div>
  `;

  return el;
}
