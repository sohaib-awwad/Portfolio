// src/utils/theme.ts
const KEY = "theme";
export type Theme = "light" | "dark";

// يقرأ تفضيل النظام الحالي
const systemPref = (): Theme =>
  matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";

// يطبّق السمة على عنصر <html data-theme="...">
export function apply(t: Theme) {
  document.documentElement.setAttribute("data-theme", t);
}

// تهيئة السمة عند بدء التطبيق
export function initTheme() {
  // 1) اختَر السمة: إمّا محفوظة من قبل، أو من تفضيل النظام
  const saved = (localStorage.getItem(KEY) as Theme) || systemPref();
  apply(saved);

  // 2) لو المستخدم ما اختر سمة يدويًا، خليها تتزامن مع تغيّر النظام
  matchMedia("(prefers-color-scheme: dark)").addEventListener("change", (e) => {
    if (!localStorage.getItem(KEY)) apply(e.matches ? "dark" : "light");
  });

  // 3) زر التبديل في النافبار (id="themeToggle")
  const btn = document.getElementById(
    "themeToggle"
  ) as HTMLButtonElement | null;

  // يحدّث نص الزر (أيقونة) بحسب الحالة الحالية
  const setIcon = () => {
    if (!btn) return;
    const theme = document.documentElement.getAttribute("data-theme");
    btn.innerHTML =
      theme === "dark"
        ? '<i class="fa-solid fa-sun"></i>'
        : '<i class="fa-solid fa-moon"></i>';
  };

  setIcon();

  // عند النقر: بدّل السمة و احفظها
  btn?.addEventListener("click", () => {
    const current = document.documentElement.getAttribute(
      "data-theme"
    ) as Theme;
    const next: Theme = current === "dark" ? "light" : "dark";
    apply(next);
    localStorage.setItem(KEY, next); // هذا يوقف مزامنة النظام، لأن المستخدم اختار يدويًا
    setIcon();
  });
}
