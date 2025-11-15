// src/components/footer.ts
export function createFooter(): HTMLElement {
  const el = document.createElement("footer");
  el.className = "footer";
  el.innerHTML = `
    <div class="container footer__top">
      <a class="brand" href="https://sohaib-awwad.github.io/Portfolio/" aria-label="Floppy Man home">
          <div class="footer__brand">
            <img src="icons/Floppy Man.svg" alt="Floppy Man logo" class="footer__logo" />
            <span class="footer__name">Floppy Man</span>
          </div>
      </a>

      <p class="footer__copy">
        © 2025 Floppy Man. All Rights Reserved.
      </p>

      <div class="footer__social">
        <a href="https://www.linkedin.com/in/sohaib-awwad-619788353/" target="_blank" aria-label="LinkedIn"><i class="fa-brands fa-linkedin-in"></i></a>
        <a href="https://github.com/sohaib-awwad" aria-label="GitHub" target="_blank"><i class="fa-brands fa-github"></i></a>
        <a href="https://www.instagram.com/sohaib_a003?igsh=MTYyajczaXp2Y253YQ==" target="_blank" aria-label="Instagram"><i class="fa-brands fa-instagram"></i></a>
      </div>
    </div>

    <hr class="footer__divider" />

    <p class="footer__bottom">
      Designed and Developed with flexibility and simplicity by 
      <span class="highlight">Floppy Man</span>.
    </p>
  `;
  return el;
}
