// src/components/projects.ts
export function createProjectsSection(): HTMLElement {
  const el = document.createElement("section");
  el.className = "container projects";
  el.id = "projects";
  el.setAttribute("aria-labelledby", "projects-title");

  el.innerHTML = `
    <div class="projects__header"
      data-aos="fade-up"
      data-aos-duration="700">
      <h2 id="projects-title">Projects</h2>
      <p>Flexible creations where design and code dance together.</p>
    </div>

    <ul class="projects__grid">
      <!-- Card 1 -->
      <li class="project-card"
        data-aos="fade-up"
        data-aos-duration="700"
        data-aos-delay="0">
        <div class="project-card__image">
          <img src="images/EVO-TEAM.webp" alt="EVO-TEAM Website preview" />
        </div>
        <div class="project-card__body">
          <div class="chips">
            <span class="chip-web-project">Full-Stack</span>
            <span class="chip-design-project">UI / UX</span>
          </div>
          <h3 class="project-card__title">EVO-TEAM Website</h3>
          <p class="project-card__desc">
            A platform designed to showcase EVO-TEAM, a student team from the Hashemite University. 
            It features and a portal for students to join the team.
          </p>
          <div class="project-card__links">
            <a href="#" class="project-link" aria-label="Live Preview">
              <i class="fa-solid fa-link"></i> Live
            </a>
            <a href="https://www.figma.com/design/c93u2qG5f9UVq0U57SAEKs/Evo-Team?node-id=0-1&t=gQcHQNbCr9XFqtDu-1"
               target="_blank"
               class="project-link"
               aria-label="View Figma Design">
              <i class="fa-brands fa-figma"></i> Design
            </a>
          </div>
        </div>
      </li>

      <!-- Card 2 -->
      <li class="project-card"
        data-aos="fade-up"
        data-aos-duration="700"
        data-aos-delay="100">
        <div class="project-card__image">
          <img src="images/JobLine.webp" alt="JobLine Website preview" />
        </div>
        <div class="project-card__body">
          <div class="chips">
            <span class="chip-web-project">Front-End</span>
            <span class="chip-design-project">UI / UX</span>
          </div>
          <h3 class="project-card__title">JobLine Website</h3>
          <p class="project-card__desc">
            JobLine is a platform that connects fresh graduates with employers. 
            I designed three user interfaces: employee, employer, and admin.
          </p>
          <div class="project-card__links">
            <a href="https://www.figma.com/design/mAa4QAVAXIM1vpxGuIlW98/Sohaib-prototype--Copy-?node-id=0-1&t=Wy6a7BWNuZRyIFEW-1"
               target="_blank"
               class="project-link"
               aria-label="View Figma Design">
              <i class="fa-brands fa-figma"></i> Design
            </a>
            <a href="https://github.com/sohaib-awwad/JobLine.git"
               target="_blank"
               class="project-link"
               aria-label="View GitHub Code">
              <i class="fa-brands fa-github"></i> Code
            </a>
          </div>
        </div>
      </li>

      <!-- Card 3 -->
      <li class="project-card"
        data-aos="fade-up"
        data-aos-duration="700"
        data-aos-delay="200">
        <div class="project-card__image">
          <img src="images/FloppyManWebsite.webp" alt="Floppy Man Portfolio preview" />
        </div>
        <div class="project-card__body">
          <div class="chips">
            <span class="chip-web-project">Front-End</span>
            <span class="chip-design-project">UI / UX</span>
          </div>
          <h3 class="project-card__title">Floppy Man Portfolio</h3>
          <p class="project-card__desc">
            A responsive portfolio website built with modern web technologies (Vanilla Vite). 
            Designed to showcase my projects and skills, with a clean, flexible layout.
          </p>
          <div class="project-card__links">
            <a href="https://www.figma.com/design/MFk1B8KcZ7frpbhsaQDYlT/Floppy-Man-Website?node-id=0-1&t=b3g49nZt235Pey1a-1"
               target="_blank"
               class="project-link"
               aria-label="View Figma Design">
              <i class="fa-brands fa-figma"></i> Design
            </a>
            <a href="https://github.com/sohaib-awwad/Portfolio.git"
               target="_blank"
               class="project-link"
               aria-label="View GitHub Code">
              <i class="fa-brands fa-github"></i> Code
            </a>
          </div>
        </div>
      </li>

      <!-- Card 4 -->
      <li class="project-card"
        data-aos="fade-up"
        data-aos-duration="700"
        data-aos-delay="300">
        <div class="project-card__image">
          <img src="images/WebDesignTemp.webp" alt="Web Design Template preview" />
        </div>
        <div class="project-card__body">
          <div class="chips">
            <span class="chip-design-project">UI / UX</span>
          </div>
          <h3 class="project-card__title">Web Design Template</h3>
          <p class="project-card__desc">
            A modern web design project built from scratch to showcase my UI/UX skills — 
            focusing on layout, color balance, and user flow.
          </p>
          <div class="project-card__links">
            <a href="https://www.figma.com/design/EX7TuP1Yrf2onDDk3YrsWB/Web-Design-Temp?node-id=0-1&t=bs610ApokopeBDS1-1"
               target="_blank"
               class="project-link"
               aria-label="View Figma Design">
              <i class="fa-brands fa-figma"></i> Design
            </a>
          </div>
        </div>
      </li>

      <!-- Card 5 -->
      <li class="project-card"
        data-aos="fade-up"
        data-aos-duration="700"
        data-aos-delay="400">
        <div class="project-card__image">
          <img src="images/VanoraMobileDesign.webp" alt="Vanora Mobile App preview" />
        </div>
        <div class="project-card__body">
          <div class="chips">
            <span class="chip-design-project">UI / UX</span>
          </div>
          <h3 class="project-card__title">Vanora Mobile App Design</h3>
          <p class="project-card__desc">
            Vanora is a perfume app built around a single vanilla scent. 
            I designed the brand and an elegant interface to reflect its warm feel.
          </p>
          <div class="project-card__links">
            <a href="https://www.figma.com/design/DFlFGux6SgNDeZIImCajRZ/Vanilla-App--Copy-?node-id=0-1&t=TUYfoT2O1jVKyfFw-1"
               target="_blank"
               class="project-link"
               aria-label="View Figma Design">
              <i class="fa-brands fa-figma"></i> Design
            </a>
          </div>
        </div>
      </li>

      <!-- Card 6 -->
      <li class="project-card"
        data-aos="fade-up"
        data-aos-duration="700"
        data-aos-delay="500">
        <div class="project-card__image">
          <img src="images/LMS-Website.webp" alt="Vanora Mobile App preview" />
        </div>
        <div class="project-card__body">
          <div class="chips">
            <span class="chip-web-project">Front-End</span>
          </div>
          <h3 class="project-card__title">LMS Admin Dashboard</h3>
          <p class="project-card__desc">
            Admin dashboard for managing books, users, and borrowing reservations with real-time status tracking. built with Vite, TypeScript, and Tailwind CSS.
          </p>
          <div class="project-card__links">
            <a href="https://sohaib-awwad.github.io/Library-Management-System/"
               class="project-link"
               aria-label="Live Preview">
              <i class="fa-solid fa-link"></i> Live
            </a>
            <a href="https://github.com/sohaib-awwad/Library-Management-System"
               target="_blank"
               class="project-link"
               aria-label="View GitHub Code">
              <i class="fa-brands fa-github"></i> Code
            </a>
          </div>
        </div>
      </li>
    </ul>
  `;

  return el;
}
