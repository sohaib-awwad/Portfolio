// src/utils/theme.ts
const KEY = "theme";
export type Theme = "light" | "dark";

const systemPref = (): Theme =>
  matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";

export function apply(t: Theme) {
  document.documentElement.setAttribute("data-theme", t);
}

export function initTheme() {
  const saved = (localStorage.getItem(KEY) as Theme) || systemPref();
  apply(saved);
}

/** Bind all .theme-toggle buttons (desktop + mobile) */
export function bindThemeToggles() {
  const buttons = Array.from(
    document.querySelectorAll<HTMLButtonElement>(".theme-toggle")
  );
  if (!buttons.length) return;

  const setIcons = () => {
    const isDark =
      (document.documentElement.getAttribute("data-theme") || "light") ===
      "dark";
    buttons.forEach((btn) => {
      btn.innerHTML = isDark
        ? '<i class="fa-solid fa-sun" aria-hidden="true"></i>'
        : '<i class="fa-solid fa-moon" aria-hidden="true"></i>';
    });
  };

  setIcons();

  const toggle = () => {
    const current =
      (document.documentElement.getAttribute("data-theme") as Theme) || "light";
    const next: Theme = current === "dark" ? "light" : "dark";
    apply(next);
    localStorage.setItem(KEY, next);
    setIcons();
  };

  buttons.forEach((btn) => btn.addEventListener("click", toggle));
}
