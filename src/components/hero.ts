// src/components/hero.ts
export function createHero(): HTMLElement {
  const el = document.createElement("section");
  el.className = "container hero";
  el.innerHTML = `
    <div class="hero-content">
      <h1>
        Hi, I'm<br/><span class="gradient-text typing"></span>
      </h1>
      <p>
        A flexible developer turning ideas into dynamic, Floppy experiences.
      </p>

      <div class="hero-buttons">
        <a href="#" class="btn primary">Let's Work!</a>
        <a href="#" class="btn secondary">
          <i class="fa-solid fa-download"></i> Download my CV
        </a>
      </div>

      <div class="social-icons">
        <a href="www.linkedin.com/in/sohaib-awwad-619788353" aria-label="LinkedIn"><i class="fa-brands fa-linkedin-in"></i></a>
        <a href="https://github.com/sohaib-awwad" aria-label="GitHub"><i class="fa-brands fa-github"></i></a>
        <a href="#" aria-label="Instagram"><i class="fa-brands fa-instagram"></i></a>
      </div>
    </div>

    <div class="hero-right">
      <div class="avatar">
        <img src="images/Sohaib-suit.webp" alt="Sohaib Awwad" />
      </div>
    </div>
  `;

  // ---------- Typing animation ----------
  const textEl = el.querySelector(".typing") as HTMLElement | null;
  if (textEl) {
    const words = ["Sohaib Awwad", "Floppy Man"];
    let wordIndex = 0;
    let charIndex = 0;
    let deleting = false;

    const type = () => {
      const current = words[wordIndex];
      const displayed = current.substring(0, charIndex);
      textEl.textContent = displayed;

      if (!deleting && charIndex < current.length) {
        charIndex++;
        setTimeout(type, 120); // typing speed
      } else if (deleting && charIndex > 0) {
        charIndex--;
        setTimeout(type, 80); // deleting speed
      } else {
        // pause at full word or empty
        if (!deleting) {
          deleting = true;
          setTimeout(type, 1500); // pause before deleting
        } else {
          deleting = false;
          wordIndex = (wordIndex + 1) % words.length;
          setTimeout(type, 400); // pause before typing next
        }
      }
    };
    type();
  }

  return el;
}
