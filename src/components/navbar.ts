// src/components/navbar.ts
export function createNavbar(): HTMLElement {
  const el = document.createElement("nav");
  el.className = "navbar";
  el.innerHTML = `
    <div class="container navbar__inner">
      <!-- Brand -->
      <a class="brand" href="/" aria-label="Floppy Man home">
        <img class="brand__logo" src="icons/Floppy Man.svg" alt="Floppy Man logo" width="44" height="44" />
        <span class="brand__name">Floppy Man</span>
      </a>

      <!-- Desktop menu -->
      <div class="menu menu--inline" role="navigation" aria-label="Primary">
        <a class="menu__link" href="#about">About</a>
        <a class="menu__link" href="#services">Services</a>
        <a class="menu__link" href="#skills">Skills</a>
        <a class="menu__link" href="#projects">Projects</a>
        <a class="btn-primary" href="#contact">Contact</a>
        <button class="theme-toggle" aria-label="Toggle theme">
          <i class="fa-solid fa-moon" aria-hidden="true"></i>
        </button>
      </div>

      <!-- Right (mobile/tablet): theme + burger -->
      <div class="nav-icons">
        <button class="theme-toggle" aria-label="Toggle theme">
          <i class="fa-solid fa-moon" aria-hidden="true"></i>
        </button>
        <button id="burger" class="burger" aria-label="Toggle menu" aria-expanded="false" aria-controls="mobileMenu">
          <i class="fa-solid fa-bars"></i>
        </button>
      </div>
    </div>

    <!-- Mobile/Tablet dropdown (closed by default) -->
    <div id="mobileMenu" class="mobile-menu">
      <a class="menu__link" href="#about">About</a>
      <a class="menu__link" href="#services">Services</a>
      <a class="menu__link" href="#skills">Skills</a>
      <a class="menu__link" href="#projects">Projects</a>
      <a class="btn-primary mobile-cta" href="#contact">Contact</a>
    </div>
  `;
  return el;
}

export function initNavbarMenu() {
  const burger = document.getElementById("burger") as HTMLButtonElement | null;
  const panel = document.getElementById("mobileMenu") as HTMLElement | null;
  if (!burger || !panel) return;

  const open = () => {
    panel.classList.add("is-open");
    burger.setAttribute("aria-expanded", "true");
    document.body.style.overflow = "hidden";
  };
  const close = () => {
    panel.classList.remove("is-open");
    burger.setAttribute("aria-expanded", "false");
    document.body.style.overflow = "";
  };
  const toggle = () => {
    const isOpen = panel.classList.contains("is-open");
    isOpen ? close() : open();
  };

  // افتح واغلق بالضغط على زر البرغر
  burger.addEventListener("click", (e) => {
    e.stopPropagation(); // حتى ما يتفعّل event الضغط الخارجي
    toggle();
  });

  // أغلق عند الضغط على أي رابط داخل القائمة
  panel.addEventListener("click", (e) => {
    const t = e.target as HTMLElement;
    if (t.tagName === "A") close();
  });

  // أغلق عند الضغط على ESC
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") close();
  });

  // أغلق لما المستخدم يضغط خارج القائمة والبرغر
  document.addEventListener("click", (e) => {
    const target = e.target as Node;
    const clickedInsideMenu = panel.contains(target);
    const clickedBurger = burger.contains(target);

    // إذا القائمة مفتوحة، والضغط خارجها وخارج زر البرغر → أغلقها
    if (
      panel.classList.contains("is-open") &&
      !clickedInsideMenu &&
      !clickedBurger
    ) {
      close();
    }
  });

  // أغلق تلقائيًا لما يرجع العرض للوضع الديسكتوب
  matchMedia("(min-width: 1025px)").addEventListener("change", (e) => {
    if (e.matches) close();
  });
}
