// src/components/hero.ts
export function createHero(): HTMLElement {
  const el = document.createElement("section");
  el.className = "container hero";
  el.innerHTML = `
    <div class="hero-content">
      <h1 data-aos="fade-up" data-aos-duration="800">
        Hi, I'm<br/><span data-aos="fade-up" data-aos-delay="150" data-aos-duration="800" class="gradient-text typing"></span>
      </h1>
      <p data-aos="fade-up" data-aos-delay="300" data-aos-duration="800">
        A flexible developer turning ideas into dynamic, Floppy experiences.
      </p>

      <div class="hero-buttons" data-aos="fade-up" data-aos-delay="450">
        <a href="#contact" class="btn primary">Let's Work!</a>
        <a href="data/Sohaib_Awwad_Designer_Developer.pdf" download="Sohaib_Awwad_Designer_Developer.pdf" target="_blank" class="btn secondary">
          <i class="fa-solid fa-download"></i> Download my CV
        </a>
      </div>

      <div class="social-icons" data-aos="zoom-in" data-aos-delay="600">
        <a href="https://www.linkedin.com/in/sohaib-awwad-619788353/" target="_blank" aria-label="LinkedIn"><i class="fa-brands fa-linkedin-in"></i></a>
        <a href="https://github.com/sohaib-awwad" aria-label="GitHub" target="_blank"><i class="fa-brands fa-github"></i></a>
        <a href="https://www.instagram.com/sohaib_a003?igsh=MTYyajczaXp2Y253YQ==" target="_blank" aria-label="Instagram"><i class="fa-brands fa-instagram"></i></a>
      </div>
    </div>

    <div class="hero-right">
      <div class="avatar" data-aos="fade-left" data-aos-duration="1000">
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
