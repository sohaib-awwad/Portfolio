import{s as _,p as w,a as k,b as S,m as $}from"./projects-D0m4Kw3Y.js";import{s as C}from"./services-BBKFA7Xi.js";/* empty css                 */function A(){const e=document.createElement("section");e.className="container hero",e.innerHTML=`
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
  `;const a=e.querySelector(".typing");if(a){const n=["Sohaib Awwad","Floppy Man"];let r=0,s=0,i=!1;const t=()=>{const l=n[r],u=l.substring(0,s);a.textContent=u,!i&&s<l.length?(s++,setTimeout(t,120)):i&&s>0?(s--,setTimeout(t,80)):i?(i=!1,r=(r+1)%n.length,setTimeout(t,400)):(i=!0,setTimeout(t,1500))};t()}return e}function U(){const e=document.createElement("section");return e.className="container stack",e.innerHTML=`
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
        <i class="notion fa-brands fa-notion" aria-label="Notion"></i>
        <img src="icons/html.svg" alt="HTML" />
        <img src="icons/css.svg" alt="CSS" />
        <img src="icons/javascript.svg" alt="JavaScript" />
        <img src="icons/typescript.svg" alt="TypeScript" />
        <img src="icons/sass_icon.svg" alt="Sass" />
        <img src="icons/tailwind.svg" alt="Tailwind" />
        <img src="icons/bootstrap.svg" alt="Bootstrap" />
        <img src="icons/vite_logo.svg" alt="Vite" />
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
        <i class="notion fa-brands fa-notion" aria-label="Notion"></i>
        <img src="icons/html.svg" alt="HTML" />
        <img src="icons/css.svg" alt="CSS" />
        <img src="icons/javascript.svg" alt="JavaScript" />
        <img src="icons/typescript.svg" alt="TypeScript" />
        <img src="icons/sass_icon.svg" alt="Sass" />
        <img src="icons/tailwind.svg" alt="Tailwind" />
        <img src="icons/bootstrap.svg" alt="Bootstrap" />
        <img src="icons/vite_logo.svg" alt="Vite" />
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
  `,e}function T(){const e=document.createElement("section");return e.className="container about",e.id="about",e.setAttribute("aria-labelledby","about-title"),e.innerHTML=`
    <header class="about__header"
      data-aos="fade-up"
      data-aos-duration="700">
      <h2 id="about-title">About</h2>
      <p class="about__subtitle">
        A quick snapshot of who I am and what <span class="highlight">Floppy Man</span> stands for.
      </p>
    </header>

    <div class="about__panel">
      <ul class="about__list">
        <li class="about__item"
          data-aos="fade-up"
          data-aos-duration="700"
          data-aos-delay="0">
          <div class="about__icon" aria-hidden="true">
            <i class="fa-solid fa-user"></i>
          </div>
          <div class="about__text">
            <h3>Who I am</h3>
            <p>
              I’m <strong>Sohaib Awwad</strong>, a developer &amp; UI/UX designer who enjoys turning rough ideas
              into clean, flexible web experiences.
            </p>
          </div>
        </li>

        <li class="about__item"
          data-aos="fade-up"
          data-aos-duration="700"
          data-aos-delay="120">
          <div class="about__icon" aria-hidden="true">
            <i class="fa-solid fa-copyright"></i>
          </div>
          <div class="about__text">
            <h3>Floppy Man</h3>
            <p>
              <strong>Floppy Man</strong> is my personal brand – the name I use for work where design and code stay
              light, flexible, and a bit playful.
            </p>
          </div>
        </li>

        <li class="about__item"
          data-aos="fade-up"
          data-aos-duration="700"
          data-aos-delay="240">
          <div class="about__icon" aria-hidden="true">
            <i class="fa-solid fa-arrows-up-down-left-right"></i>
          </div>
          <div class="about__text">
            <h3>Best fit</h3>
            <p>
              I enjoy working across the full stack, crafting clean UI/UX flows, and building visual systems that make products feel consistent and expressive.
            </p>
            <div class="about__tags">
              <span class="tag">Full Stack Dev</span>
              <span class="tag">UI / UX</span>
              <span class="tag">Brand & Visual Systems</span>
            </div>
          </div>
        </li>
      </ul>
    </div>
  `,e}const j=(e,a)=>{const r=a%2===0?"fade-right":"fade-left",s=100+a*80,i=_(e.slug),t=(e.cardChips??[]).map(l=>`<li class="chip">${l}</li>`).join("");return`
    <li class="service-card"
        data-aos="${r}"
        data-aos-duration="700"
        data-aos-delay="${s}">
      <a class="service-card__icon" aria-hidden="true" href="${i}" tabindex="-1">
        <i class="${e.icon}"></i>
      </a>

      <div class="service-card__body">
        <h3 class="service-card__title">
          <a href="${i}">${e.title}</a>
        </h3>
        <p class="service-card__desc">${e.tagline}</p>
      </div>

      ${t?`<ul class="chip-list" aria-label="Tools">${t}</ul>`:""}

      <a class="service-card__cta" href="${i}" aria-label="Learn more about ${e.title}">
        Learn more <i class="fa-solid fa-arrow-right"></i>
      </a>
    </li>`};function I(){const e=document.createElement("section");return e.className="container services",e.id="services",e.setAttribute("aria-labelledby","services-title"),e.innerHTML=`
    <header class="services__header"
      data-aos="fade-up"
      data-aos-duration="700">
      <h2 id="services-title">Services</h2>
      <p class="services__subtitle">
        Flexible Services that blend design and development.
      </p>
    </header>

    <ul class="services__grid">
      ${C.map(j).join("")}
    </ul>
  `,e}const c=e=>`All%20Certificates/${encodeURIComponent(e)}`,x=[{degree:"Bachelor of Computer Science and its Applications",institution:"The Hashemite University",period:"Graduated: Feb 2026",location:"Zarqa, Jordan",desc:"Relevant coursework: Software Engineering, Web Development, Data Structures, Database Systems, Algorithms."}],L=[{group:"Frontend",items:["Angular","TypeScript","JavaScript","HTML5","CSS3","SCSS","Tailwind CSS","Responsive Design"]},{group:"Backend",items:["ASP.NET","RESTful APIs","C#","MVC Architecture"]},{group:"Design",items:["Figma","UI/UX","Graphic Design","Illustration","Logo Design","Design Systems","Wireframing","Prototyping"]},{group:"AI Tools",items:["Claude","Figma Make","Google Stitch","Relume","ChatGPT","Gemini"]},{group:"Dev Tools",items:["Git","GitHub","VS Code","Vite","npm","bun"]}],E=[{role:"Frontend Developer & UI/UX Designer",company:"Access 2 Arabia (A2A)",period:"May 2026 — Present",location:"Amman, Jordan",bullets:["Develop production React frontends for client-facing applications, owning the full design-to-code pipeline from Figma mockups to deployed UI.","Design and refine user interfaces and experience flows in Figma, ensuring pixel-perfect parity between design files and shipped React components.","Apply responsive design principles, accessibility best practices, and modern frontend tooling across multiple concurrent client projects."]},{role:"Graphic Designer & Social Media (University Field Training)",company:"Zara Paints Industrial",period:"Mar 2026 — May 2026",location:"Zarqa, Jordan",bullets:["Completed mandatory university field training over 2 months, producing graphic design assets and social media content for an industrial brand.","Designed marketing materials, social posts, and visual communications aligned with the company's brand guidelines.","Gained hands-on experience translating business goals into visual content for diverse audience touchpoints."]},{role:"UI/UX Designer & Brand Identity (Contract)",company:"Fekra AI",period:"Feb 2026 — Mar 2026",location:"Amman, Jordan",bullets:["Delivered two complete logo design systems and a full design tokens library for the company's product within a focused 1-month engagement.","Established the visual foundation including typography, color systems, spacing scales, and component-level design tokens for scalable product design.","Collaborated directly with founders to align brand identity with product positioning and technical implementation constraints."]},{role:"Design Committee Lead & Leadership Member",company:"EVO-TEAM Student Organization",period:"Oct 2024 — Feb 2026",location:"The Hashemite University",bullets:["Led the entire design committee — owning every visual deliverable across UI/UX, branding, illustration, social graphics, and event materials.","Served as a leadership team member, contributing to strategic decision-making beyond design topics.","Designed the complete EVO-TEAM brand identity (logo, typography, color system) and the official website UI/UX in Figma.","Personally shipped the website as a production Angular/Tailwind product, eliminating design-to-code drift entirely.","Drove a 15%+ increase in student engagement and team visibility through cohesive design and technical execution."]},{role:"Full-Stack Development Intern (Paid)",company:"Princess Sumaya University for Technology",period:"Jun 2025 — Sep 2025",location:"100-Hour Intensive Program",bullets:["Completed a paid full-stack internship focused on Angular and ASP.NET, building production-quality applications under industry mentorship.","Implemented RESTful APIs in C# and integrated them with Angular frontends using proper service-layer architecture.","Practiced agile workflows, code reviews, and Git-based collaboration across team projects."]}],P=[{icon:"fa-solid fa-comments",title:"Communication",desc:"I explain technical ideas in simple, clear language for both devs and non-devs."},{icon:"fa-solid fa-puzzle-piece",title:"Problem Solving",desc:"I break complex problems into small steps and test fast to reach solid solutions."},{icon:"fa-solid fa-people-group",title:"Teamwork",desc:"I enjoy pairing, code reviews, and building things together instead of alone."},{icon:"fa-solid fa-shuffle",title:"Adaptability",desc:"I'm comfortable switching tools, stacks, or priorities without losing focus."},{icon:"fa-solid fa-clock",title:"Time Management",desc:"I plan tasks, set realistic milestones, and keep projects moving smoothly."},{icon:"fa-solid fa-eye",title:"Attention to Detail",desc:"I care about tiny UI details, clean code, and UX polish that users actually feel."}],F=[{name:"Claude Code — The Practical Guide",issuer:"Academind / Udemy",period:"2026",credentialUrl:c("Claude Code - The Parctical Guide.pdf")},{name:"Full-Stack Web Development (Angular & ASP.NET)",issuer:"Princess Sumaya University for Technology — 100-hour Intensive",period:"Sep 2025",credentialUrl:c("Angular and ASP.Net.pdf")},{name:"Figma UI/UX Design Advanced",issuer:"Daniel Walter Scott — Udemy",period:"2026",credentialUrl:c("Figma UI UX Design Advanced by Daniel Walter Scott.pdf")},{name:"Figma Workshop — Part 1",issuer:"Zain ZINC",period:"2024",credentialUrl:c("figma-course-with-zinc.pdf")},{name:"Figma Workshop — Part 2",issuer:"Zain ZINC",period:"2024",credentialUrl:c("figma-course-with-zinc-2.pdf")},{name:"Understanding TypeScript",issuer:"Udemy",period:"2024",credentialUrl:c("certificate-of-completion-for-understanding-typescript.pdf")},{name:"JavaScript Basics",issuer:"Udemy",period:"2024",credentialUrl:c("certificate-of-completion-for-javascript-basics.pdf")},{name:"The Ultimate HTML Course — Fundamentals",issuer:"Code with Mosh",period:"2024",credentialUrl:c("the-ultimate-html-course-fundamentals.pdf")},{name:"The Ultimate HTML Course — Advanced Concepts",issuer:"Code with Mosh",period:"2024",credentialUrl:c("the-ultimate-html-course-advanced-concepts.pdf")},{name:"The Ultimate HTML Course — PSD to HTML",issuer:"Code with Mosh",period:"2024",credentialUrl:c("the-ultimate-html-course-psd-to-html.pdf")},{name:"Programming Foundations — Level 1",issuer:"Udemy",period:"2024",credentialUrl:c("certificate-of-completion-for-programming-foundations-level-1 (1).pdf")},{name:"Algorithms & Problem Solving — Level 1",issuer:"Udemy",period:"2024",credentialUrl:c("certificate-of-completion-for-algorithms-problem-solving-level-1 (1).pdf")},{name:"Algorithms & Problem Solving — Level 1 (Solutions)",issuer:"Udemy",period:"2024",credentialUrl:c("certificate-of-completion-for-algorithms-problem-solving-level-1-solutions (1).pdf")},{name:"Introduction to Programming Using C — Level 1",issuer:"Udemy",period:"2024",credentialUrl:c("certificate-of-completion-for-introduction-to-programming-using-c-level-1 (1).pdf")}],M=[{name:"Arabic",level:"Native"},{name:"English",level:"Fluent"}],D=[{title:"IQ Score: 133",issuer:"Brain Testing Institute",period:"Dec 2024",desc:"Verified IQ assessment — score of 133, in the top 2% range."},{title:"English Typing Speed — 51 WPM",issuer:"Self-measured",period:"2026",desc:"Sustained typing speed of 51 words per minute in English."},{title:"Arabic Typing Speed — 215 CPM",issuer:"Self-measured",period:"2026",desc:"Sustained typing speed of 215 characters per minute in Arabic."}],h=[{key:"education",label:"Education",icon:"fa-solid fa-graduation-cap"},{key:"pro-skills",label:"Professional Skills",icon:"fa-solid fa-laptop-code"},{key:"experience",label:"Experience",icon:"fa-solid fa-briefcase"},{key:"certifications",label:"Certifications",icon:"fa-solid fa-certificate"},{key:"soft-skills",label:"Soft Skills",icon:"fa-solid fa-handshake-angle"},{key:"languages",label:"Languages",icon:"fa-solid fa-language"},{key:"awards",label:"Awards",icon:"fa-solid fa-trophy"}],f="#resume-",p=e=>`<div class="resume-empty">
     <i class="fa-regular fa-clock" aria-hidden="true"></i>
     <p>${e}</p>
   </div>`,H=e=>e.length?`<ul class="resume-cards">
    ${e.map(a=>`
      <li class="resume-card">
        ${a.logo?`<div class="resume-card__logo"><img src="${a.logo}" alt="" /></div>`:""}
        <div class="resume-card__body">
          <h3 class="resume-card__title">${a.degree}</h3>
          <p class="resume-card__meta">
            ${a.institution}
            ${a.location?` — ${a.location}`:""}
            ${a.period?` — <time>${a.period}</time>`:""}
          </p>
          ${a.desc?`<p class="resume-card__desc">${a.desc}</p>`:""}
        </div>
      </li>`).join("")}
  </ul>`:p("Education details will land here once the new CV is in."),q=e=>e.length?`<div class="resume-skills">
    ${e.map(a=>`
      <div class="resume-skills__group">
        <h3 class="resume-skills__group-title">${a.group}</h3>
        <ul class="resume-skills__chips">
          ${a.items.map(n=>`<li class="chip">${n}</li>`).join("")}
        </ul>
      </div>`).join("")}
  </div>`:p("Professional skills coming soon."),V=e=>e.length?`<ul class="resume-cards">
    ${e.map(a=>`
      <li class="resume-card">
        ${a.logo?`<div class="resume-card__logo"><img src="${a.logo}" alt="" /></div>`:""}
        <div class="resume-card__body">
          <h3 class="resume-card__title">${a.role}</h3>
          <p class="resume-card__meta">
            ${a.company}
            ${a.location?` — ${a.location}`:""}
            ${a.period?` — <time>${a.period}</time>`:""}
          </p>
          ${a.bullets?.length?`<ul class="resume-card__bullets">${a.bullets.map(n=>`<li>${n}</li>`).join("")}</ul>`:""}
        </div>
      </li>`).join("")}
  </ul>`:p("Work experience details will land here once the new CV is in."),N=e=>e.length?`<ul class="resume-cards">
    ${e.map(a=>`
      <li class="resume-card">
        <div class="resume-card__body">
          <h3 class="resume-card__title">${a.name}</h3>
          <p class="resume-card__meta">
            ${a.issuer} — <time>${a.period}</time>
          </p>
          ${a.credentialUrl?`<a class="resume-card__link" href="${a.credentialUrl}" target="_blank" rel="noopener">
                   View credential <i class="fa-solid fa-arrow-up-right-from-square"></i>
                 </a>`:""}
        </div>
      </li>`).join("")}
  </ul>`:p("Certifications will appear here once the new CV is in."),G=e=>e.length?`<ul class="resume-soft-grid">
    ${e.map(a=>`
      <li class="resume-soft-card">
        <div class="resume-soft-card__icon" aria-hidden="true">
          <i class="${a.icon}"></i>
        </div>
        <h3>${a.title}</h3>
        <p>${a.desc}</p>
      </li>`).join("")}
  </ul>`:p("Soft skills coming soon."),R=e=>e.length?`<ul class="resume-languages">
    ${e.map(a=>`
      <li class="resume-language">
        <span class="resume-language__name">${a.name}</span>
        <span class="resume-language__level resume-language__level--${a.level.toLowerCase()}">${a.level}</span>
      </li>`).join("")}
  </ul>`:p("Languages will land here once the new CV is in."),B=e=>e.length?`<ul class="resume-cards">
    ${e.map(a=>`
      <li class="resume-card">
        <div class="resume-card__body">
          <h3 class="resume-card__title">${a.title}</h3>
          <p class="resume-card__meta">
            ${a.issuer} — <time>${a.period}</time>
          </p>
          ${a.desc?`<p class="resume-card__desc">${a.desc}</p>`:""}
          ${a.credentialUrl?`<a class="resume-card__link" href="${a.credentialUrl}" target="_blank" rel="noopener">
                   View certificate <i class="fa-solid fa-arrow-up-right-from-square"></i>
                 </a>`:""}
        </div>
      </li>`).join("")}
  </ul>`:p("Awards and recognition will land here once the new CV is in."),W=e=>{switch(e){case"education":return H(x);case"pro-skills":return q(L);case"experience":return V(E);case"certifications":return N(F);case"soft-skills":return G(P);case"languages":return R(M);case"awards":return B(D)}},X=()=>{const e=location.hash;if(!e.startsWith(f))return"education";const a=e.slice(f.length);return h.some(n=>n.key===a)?a:"education"};function J(){const e=document.createElement("section");e.className="container resume",e.id="skills",e.setAttribute("aria-labelledby","resume-title");const a=X(),n=h.map(s=>`
    <button
      role="tab"
      class="resume-tab${s.key===a?" is-active":""}"
      id="resume-tab-${s.key}"
      aria-controls="resume-panel-${s.key}"
      aria-selected="${s.key===a?"true":"false"}"
      tabindex="${s.key===a?"0":"-1"}"
      data-tab="${s.key}">
      <i class="${s.icon}" aria-hidden="true"></i>
      <span>${s.label}</span>
    </button>`).join(""),r=h.map(s=>`
    <div
      role="tabpanel"
      class="resume-panel${s.key===a?" is-active":""}"
      id="resume-panel-${s.key}"
      aria-labelledby="resume-tab-${s.key}"
      ${s.key===a?"":"hidden"}>
      ${W(s.key)}
    </div>`).join("");return e.innerHTML=`
    <header class="resume__header" data-aos="fade-up" data-aos-duration="700">
      <h2 id="resume-title">My Resume</h2>
      <p class="resume__subtitle">
        Education, skills, and the story behind the work.
      </p>
    </header>

    <div class="resume__tablist-wrap"
      data-aos="fade-up" data-aos-duration="700" data-aos-delay="80">
      <div role="tablist" aria-label="Resume sections" class="resume__tablist">
        ${n}
      </div>
    </div>

    <div class="resume__panels"
      data-aos="fade-up" data-aos-duration="700" data-aos-delay="160">
      ${r}
    </div>
  `,z(e),e}function z(e){const a=Array.from(e.querySelectorAll(".resume-tab")),n=Array.from(e.querySelectorAll(".resume-panel"));if(!a.length)return;const r=(s,i={})=>{const{focus:t=!1,updateHash:l=!0}=i;if(a.forEach(o=>{const d=o.dataset.tab===s;o.classList.toggle("is-active",d),o.setAttribute("aria-selected",String(d)),o.setAttribute("tabindex",d?"0":"-1"),t&&d&&o.focus()}),n.forEach(o=>{const d=o.id===`resume-panel-${s}`;o.classList.toggle("is-active",d),d?o.removeAttribute("hidden"):o.setAttribute("hidden","")}),l){const o=`${f}${s}`;location.hash!==o&&history.replaceState(null,"",o)}a.find(o=>o.dataset.tab===s)?.scrollIntoView({behavior:"smooth",inline:"center",block:"nearest"})};a.forEach(s=>{s.addEventListener("click",()=>{const i=s.dataset.tab;r(i)}),s.addEventListener("keydown",i=>{const t=a.indexOf(s);if(t===-1)return;let l=null;switch(i.key){case"ArrowRight":l=(t+1)%a.length;break;case"ArrowLeft":l=(t-1+a.length)%a.length;break;case"Home":l=0;break;case"End":l=a.length-1;break}if(l!==null){i.preventDefault();const u=a[l].dataset.tab;r(u,{focus:!0})}})}),window.addEventListener("hashchange",()=>{if(!location.hash.startsWith(f))return;const s=location.hash.slice(f.length);h.some(i=>i.key===s)&&r(s,{updateHash:!1})})}const Y=e=>["Full-Stack","Front-End","Back-End","Notion"].includes(e)?"chip-web-project":"chip-design-project",g=(e,a,n,r,s=!0)=>`
  <a href="${e}"${s?' target="_blank" rel="noopener"':""}
     class="project-link" aria-label="${r}">
    <i class="${a}"></i> ${n}
  </a>`,Z=(e,a)=>{const n=a*100,r=e.chips.map(t=>`<span class="${Y(t)}">${t}</span>`).join(""),s=k(e.slug),i=[g(s,"fa-solid fa-book-open","Case study","Read full case study",!1)];return e.links.live&&i.push(g(e.links.live,"fa-solid fa-link","Live","Live Preview")),e.links.design&&i.push(g(e.links.design,"fa-brands fa-figma","Design","View Figma Design")),e.links.code&&i.push(g(e.links.code,"fa-brands fa-github","Code","View GitHub Code")),e.links.notion&&i.push(g(e.links.notion,"fa-brands fa-notion","Notion","View Notion Workspace")),`
    <li class="project-card"
        data-aos="fade-up"
        data-aos-duration="700"
        data-aos-delay="${n}">
      <a class="project-card__image" href="${s}" aria-label="Read case study: ${e.title}">
        <img src="${S(e.heroImage)}" alt="${e.heroAlt}" />
      </a>
      <div class="project-card__body">
        <div class="chips">${r}</div>
        <h3 class="project-card__title">
          <a href="${s}">${e.title}</a>
        </h3>
        <p class="project-card__desc">${e.tagline}</p>
        <div class="project-card__links">${i.join("")}</div>
      </div>
    </li>`};function O(){const e=document.createElement("section");return e.className="container projects",e.id="projects",e.setAttribute("aria-labelledby","projects-title"),e.innerHTML=`
    <div class="projects__header"
      data-aos="fade-up"
      data-aos-duration="700">
      <h2 id="projects-title">Projects</h2>
      <p>Flexible creations where design and code dance together.</p>
    </div>

    <ul class="projects__grid">
      ${w.map(Z).join("")}
    </ul>
  `,e}function Q(){const e=document.createElement("section");return e.className="container contact",e.id="contact",e.setAttribute("aria-labelledby","contact-title"),e.innerHTML=`
    <header class="contact__header"
      data-aos="fade-up"
      data-aos-duration="700">
      <h2 id="contact-title">Contact</h2>
      <p class="contact__subtitle">Let’s build something flexible and fun together.</p>
    </header>

    <div class="contact__grid">
      <!-- Left: info -->
      <div class="contact__info"
        data-aos="fade-right"
        data-aos-duration="700"
        data-aos-delay="100">
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
            <a href="https://www.linkedin.com/in/sohaib-awwad-619788353/"
               target="_blank"
               aria-label="LinkedIn"><i class="fa-brands fa-linkedin-in"></i></a>
            <a href="https://github.com/sohaib-awwad"
               aria-label="GitHub"
               target="_blank"><i class="fa-brands fa-github"></i></a>
            <a href="https://www.instagram.com/sohaib_a003?igsh=MTYyajczaXp2Y253YQ=="
               target="_blank"
               aria-label="Instagram"><i class="fa-brands fa-instagram"></i></a>
          </li>
        </ul>

        <p class="contact__note">
          Prefer email? Feel free to reach out anytime.
        </p>
      </div>

      <!-- Right: form -->
      <form class="contact__form"
        id="contactForm"
        novalidate
        data-aos="fade-left"
        data-aos-duration="700"
        data-aos-delay="200">
        <!-- honeypot (anti-bot) -->
        <input type="text" name="website" class="hp-field" tabindex="-1" autocomplete="off" />

        <div class="field">
          <label for="name">Your name</label>
          <input id="name" name="name" type="text" minlength="3" maxlength="100"
                 placeholder="Your Name" required />
          <span class="error" data-for="name"></span>
        </div>

        <div class="field">
          <label for="email">Email</label>
          <input id="email" name="email" type="email" inputmode="email"
                 minlength="5" maxlength="200" placeholder="your@email.com" required />
          <span class="error" data-for="email"></span>
        </div>

        <div class="field">
          <label for="subject">Subject</label>
          <input id="subject" name="subject" type="text" minlength="5" maxlength="100"
                 placeholder="Project idea / Collaboration" required />
          <span class="error" data-for="subject"></span>
        </div>

        <div class="field">
          <label for="message">Message</label>
          <textarea id="message" name="message" rows="5" minlength="5" maxlength="500"
                    placeholder="Tell me a bit about your project…" required></textarea>
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
  `,e}function K(){const e=document.getElementById("contactForm");if(!e)return;const a=e.querySelector(".form-result"),n=(s,i)=>{const t=e.querySelector(`.error[data-for="${s}"]`);t&&(t.textContent=i)},r=()=>e.querySelectorAll(".error").forEach(s=>s.textContent="");e.addEventListener("submit",s=>{if(s.preventDefault(),r(),a&&(a.textContent=""),e.querySelector(".hp-field").value.trim())return;const t=e.querySelector("#name").value.trim(),l=e.querySelector("#email").value.trim(),u=e.querySelector("#subject").value.trim(),o=e.querySelector("#message").value.trim();let d=!0;if(t||(n("name","Please enter your name."),d=!1),(!l||!/^\S+@\S+\.\S+$/.test(l))&&(n("email","Please enter a valid email."),d=!1),u||(n("subject","Please add a subject."),d=!1),(!o||o.length<10)&&(n("message","Message should be at least 10 characters."),d=!1),!d)return;const b="sohaibawwad8@gmail.com",v=`From: ${t} <${l}>
Subject: ${u}

${o}`,y=`mailto:${encodeURIComponent(b)}?subject=${encodeURIComponent(u)}&body=${encodeURIComponent(v)}`;window.location.href=y,a&&(a.textContent="Opening your email app…",a.classList.add("ok")),e.reset()})}$();const m=document.querySelector("#app");m&&(m.appendChild(A()),m.appendChild(U()),m.appendChild(T()),m.appendChild(I()),m.appendChild(J()),m.appendChild(O()),m.appendChild(Q()),K(),location.hash&&requestAnimationFrame(()=>{const e=document.querySelector(location.hash);e&&e.scrollIntoView({behavior:"auto",block:"start"})}));
