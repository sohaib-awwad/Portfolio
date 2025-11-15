// src/components/stack.ts
export function createStack(): HTMLElement {
  const el = document.createElement("section");
  el.className = "container stack";
  el.innerHTML = `
    <h2
      data-aos="fade-up"
      data-aos-duration="600"
    >
      Tech Stack
    </h2>

    <p
      data-aos="fade-up"
      data-aos-delay="120"
      data-aos-duration="600"
    >
      Technologies that keep my code flexible and my ideas flowing.
    </p>

    <div class="scroller">
      <div class="scroller__track">
        <!-- Group A -->
        <img src="icons/html.svg" alt="HTML" />
        <img src="icons/css.svg" alt="CSS" />
        <img src="icons/javascript.svg" alt="JavaScript" />
        <img src="icons/typescript.svg" alt="TypeScript" />
        <img src="icons/tailwind.svg" alt="Tailwind" />
        <img src="icons/bootstrap.svg" alt="Bootstrap" />
        <img src="icons/git.svg" alt="Git" />
        <i class="github fa-brands fa-github" aria-label="GitHub"></i>
        <img src="icons/angular.svg" alt="Angular" />
        <img src="icons/net.svg" alt=".NET" />
        <img src="icons/sql.svg" alt="Microsoft SQL" />
        <img src="icons/csharp.svg" alt="C#" />
        <img src="icons/vs-code.svg" alt="VS Code" />
        <img src="icons/vs.svg" alt="VS" />
        <img src="icons/figma.svg" alt="Figma" />
        <img src="icons/canva.svg" alt="Canva" />

        <!-- Group B (loop duplicate) -->
        <img src="icons/html.svg" alt="HTML" />
        <img src="icons/css.svg" alt="CSS" />
        <img src="icons/javascript.svg" alt="JavaScript" />
        <img src="icons/typescript.svg" alt="TypeScript" />
        <img src="icons/tailwind.svg" alt="Tailwind" />
        <img src="icons/bootstrap.svg" alt="Bootstrap" />
        <img src="icons/git.svg" alt="Git" />
        <i class="github fa-brands fa-github" aria-label="GitHub"></i>
        <img src="icons/angular.svg" alt="Angular" />
        <img src="icons/net.svg" alt=".NET" />
        <img src="icons/sql.svg" alt="Microsoft SQL" />
        <img src="icons/csharp.svg" alt="C#" />
        <img src="icons/vs-code.svg" alt="VS Code" />
        <img src="icons/vs.svg" alt="VS" />
        <img src="icons/figma.svg" alt="Figma" />
        <img src="icons/canva.svg" alt="Canva" />
      </div>
    </div>
  `;
  return el;
}
