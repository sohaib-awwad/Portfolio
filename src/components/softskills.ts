// src/components/soft-skills.ts
export function createSoftSkillsSection(): HTMLElement {
  const el = document.createElement("section");
  el.className = "container soft-skills";
  el.id = "skills";
  el.setAttribute("aria-labelledby", "soft-skills-title");

  el.innerHTML = `
    <header class="soft-skills__header">
      <h2 id="soft-skills-title">Soft Skills</h2>
      <p class="soft-skills__subtitle">
        Human skills that keep my code collaborative, clear, and calm.
      </p>
    </header>

    <ul class="soft-skills__grid">
      <li class="soft-skill-card">
        <div class="soft-skill-card__icon" aria-hidden="true">
          <i class="fa-solid fa-comments"></i>
        </div>
        <h3 class="soft-skill-card__title">Communication</h3>
        <p class="soft-skill-card__desc">
          I explain technical ideas in simple, clear language for both devs and non-devs.
        </p>
      </li>

      <li class="soft-skill-card">
        <div class="soft-skill-card__icon" aria-hidden="true">
          <i class="fa-solid fa-puzzle-piece"></i>
        </div>
        <h3 class="soft-skill-card__title">Problem Solving</h3>
        <p class="soft-skill-card__desc">
          I break complex problems into small steps and test fast to reach solid solutions.
        </p>
      </li>

      <li class="soft-skill-card">
        <div class="soft-skill-card__icon" aria-hidden="true">
          <i class="fa-solid fa-people-group"></i>
        </div>
        <h3 class="soft-skill-card__title">Teamwork</h3>
        <p class="soft-skill-card__desc">
          I enjoy pairing, code reviews, and building things together instead of alone.
        </p>
      </li>

      <li class="soft-skill-card">
        <div class="soft-skill-card__icon" aria-hidden="true">
          <i class="fa-solid fa-shuffle"></i>
        </div>
        <h3 class="soft-skill-card__title">Adaptability</h3>
        <p class="soft-skill-card__desc">
          I’m comfortable switching tools, stacks, or priorities without losing focus.
        </p>
      </li>

      <li class="soft-skill-card">
        <div class="soft-skill-card__icon" aria-hidden="true">
          <i class="fa-solid fa-clock"></i>
        </div>
        <h3 class="soft-skill-card__title">Time Management</h3>
        <p class="soft-skill-card__desc">
          I plan tasks, set realistic milestones, and keep projects moving smoothly.
        </p>
      </li>

      <li class="soft-skill-card">
        <div class="soft-skill-card__icon" aria-hidden="true">
          <i class="fa-solid fa-eye"></i>
        </div>
        <h3 class="soft-skill-card__title">Attention to Detail</h3>
        <p class="soft-skill-card__desc">
          I care about tiny UI details, clean code, and UX polish that users actually feel.
        </p>
      </li>
    </ul>
  `;

  return el;
}
