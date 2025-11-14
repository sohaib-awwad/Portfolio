// src/components/contact.ts
export function createContactSection(): HTMLElement {
  const el = document.createElement("section");
  el.className = "container contact";
  el.id = "contact";
  el.setAttribute("aria-labelledby", "contact-title");

  el.innerHTML = `
    <header class="contact__header">
      <h2 id="contact-title">Contact</h2>
      <p class="contact__subtitle">Let’s build something flexible and fun together.</p>
    </header>

    <div class="contact__grid">
      <!-- Left: info -->
      <div class="contact__info">
        <ul class="contact__list">
          <li>
            <i class="fa-solid fa-envelope"></i>
            <a href="mailto:sohaibawwad8@gmail.com">sohaibawwad8@gmail.com</a>
          </li>
          <li>
            <i class="fa-solid fa-location-dot"></i>
            <span>Amman, Jordan</span>
          </li>
          <li class="contact__social">
            <a href="https://www.linkedin.com/in/sohaib-awwad-619788353/" target="_blank" aria-label="LinkedIn"><i class="fa-brands fa-linkedin-in"></i></a>
        <a href="https://github.com/sohaib-awwad" aria-label="GitHub" target="_blank"><i class="fa-brands fa-github"></i></a>
        <a href="https://www.instagram.com/sohaib_a003?igsh=MTYyajczaXp2Y253YQ==" target="_blank" aria-label="Instagram"><i class="fa-brands fa-instagram"></i></a>
          </li>
        </ul>

        <p class="contact__note">
          Prefer email? Feel free to reach out anytime.
        </p>
      </div>

      <!-- Right: form -->
      <form class="contact__form" id="contactForm" novalidate>
        <!-- honeypot (anti-bot) -->
        <input type="text" name="website" class="hp-field" tabindex="-1" autocomplete="off" />

        <div class="field">
          <label for="name">Your name</label>
          <input id="name" name="name" type="text" minlength="3" maxlength="100" placeholder="Your Name" required />
          <span class="error" data-for="name"></span>
        </div>

        <div class="field">
          <label for="email">Email</label>
          <input id="email" name="email" type="email" inputmode="email" minlength="5" maxlength="200" placeholder="your@email.com" required />
          <span class="error" data-for="email"></span>
        </div>

        <div class="field">
          <label for="subject">Subject</label>
          <input id="subject" name="subject" type="text" minlength="5" maxlength="100" placeholder="Project idea / Collaboration" required />
          <span class="error" data-for="subject"></span>
        </div>

        <div class="field">
          <label for="message">Message</label>
          <textarea id="message" name="message" rows="5" minlength="5" maxlength="500" placeholder="Tell me a bit about your project…" required></textarea>
          <span class="error" data-for="message"></span>
        </div>

        <div class="actions">
          <button class="btn-contact" type="submit">
            <i class="fa-solid fa-paper-plane"></i> Send Message
          </button>
          <span class="form-result" role="status" aria-live="polite"></span>
        </div>
      </form>
    </div>
  `;
  return el;
}

/**
 * Bind client-side validation + mailto submit (no backend needed).
 * If you later use Formspree or a custom API, swap the submit handler.
 */
export function initContactForm() {
  const form = document.getElementById("contactForm") as HTMLFormElement | null;
  if (!form) return;

  const result = form.querySelector(".form-result") as HTMLSpanElement | null;

  const setError = (id: string, msg: string) => {
    const span = form.querySelector(
      `.error[data-for="${id}"]`
    ) as HTMLSpanElement | null;
    if (span) span.textContent = msg;
  };

  const clearErrors = () =>
    form.querySelectorAll(".error").forEach((el) => (el.textContent = ""));

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    clearErrors();
    if (result) result.textContent = "";

    // honeypot check
    const hp = (
      form.querySelector(".hp-field") as HTMLInputElement
    ).value.trim();
    if (hp) return; // bot

    const name = (form.querySelector("#name") as HTMLInputElement).value.trim();
    const email = (
      form.querySelector("#email") as HTMLInputElement
    ).value.trim();
    const subject = (
      form.querySelector("#subject") as HTMLInputElement
    ).value.trim();
    const message = (
      form.querySelector("#message") as HTMLTextAreaElement
    ).value.trim();

    // basic validation
    let ok = true;
    if (!name) {
      setError("name", "Please enter your name.");
      ok = false;
    }
    if (!email || !/^\S+@\S+\.\S+$/.test(email)) {
      setError("email", "Please enter a valid email.");
      ok = false;
    }
    if (!subject) {
      setError("subject", "Please add a subject.");
      ok = false;
    }
    if (!message || message.length < 10) {
      setError("message", "Message should be at least 10 characters.");
      ok = false;
    }
    if (!ok) return;

    // MAILTO submission (works without backend)
    const to = "sohaibawwad8@gmail.com";
    const body =
      `From: ${name} <${email}>\n` + `Subject: ${subject}\n\n` + `${message}`;
    const href = `mailto:${encodeURIComponent(to)}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;

    // open mail client
    window.location.href = href;

    if (result) {
      result.textContent = "Opening your email app…";
      result.classList.add("ok");
    }

    // optional: reset form
    form.reset();
  });
}
