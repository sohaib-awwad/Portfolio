(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))t(a);new MutationObserver(a=>{for(const s of a)if(s.type==="childList")for(const l of s.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&t(l)}).observe(document,{childList:!0,subtree:!0});function c(a){const s={};return a.integrity&&(s.integrity=a.integrity),a.referrerPolicy&&(s.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?s.credentials="include":a.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function t(a){if(a.ep)return;a.ep=!0;const s=c(a);fetch(a.href,s)}})();const u="theme",_=()=>matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light";function g(e){document.documentElement.setAttribute("data-theme",e)}function w(){const e=localStorage.getItem(u)||_();g(e)}function y(){const e=Array.from(document.querySelectorAll(".theme-toggle"));if(!e.length)return;const i=()=>{const t=(document.documentElement.getAttribute("data-theme")||"light")==="dark";e.forEach(a=>{a.innerHTML=t?'<i class="fa-solid fa-sun" aria-hidden="true"></i>':'<i class="fa-solid fa-moon" aria-hidden="true"></i>'})};i();const c=()=>{const a=(document.documentElement.getAttribute("data-theme")||"light")==="dark"?"light":"dark";g(a),localStorage.setItem(u,a),i()};e.forEach(t=>t.addEventListener("click",c))}function k(){const e=document.createElement("nav");return e.className="navbar",e.innerHTML=`
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
  `,e}function j(){const e=document.getElementById("burger"),i=document.getElementById("mobileMenu");if(!e||!i)return;const c=()=>{i.classList.add("is-open"),e.setAttribute("aria-expanded","true"),document.body.style.overflow="hidden"},t=()=>{i.classList.remove("is-open"),e.setAttribute("aria-expanded","false"),document.body.style.overflow=""},a=()=>{i.classList.contains("is-open")?t():c()};e.addEventListener("click",s=>{s.stopPropagation(),a()}),i.addEventListener("click",s=>{s.target.tagName==="A"&&t()}),document.addEventListener("keydown",s=>{s.key==="Escape"&&t()}),document.addEventListener("click",s=>{const l=s.target,o=i.contains(l),r=e.contains(l);i.classList.contains("is-open")&&!o&&!r&&t()}),matchMedia("(min-width: 1025px)").addEventListener("change",s=>{s.matches&&t()})}function S(){const e=document.createElement("section");e.className="container hero",e.innerHTML=`
    <div class="hero-content">
      <h1>
        Hi, I'm<br/><span class="gradient-text typing"></span>
      </h1>
      <p>
        A flexible developer turning ideas into dynamic, Floppy experiences.
      </p>

      <div class="hero-buttons">
        <a href="#" class="btn primary">Let's Work!</a>
        <a href="data/cv.pdf" download="Sohaib_Awwad_CV.pdf" target="_blank" class="btn secondary">
          <i class="fa-solid fa-download"></i> Download my CV
        </a>
      </div>

      <div class="social-icons">
        <a href="https://www.linkedin.com/in/sohaib-awwad-619788353/" target="_blank" aria-label="LinkedIn"><i class="fa-brands fa-linkedin-in"></i></a>
        <a href="https://github.com/sohaib-awwad" aria-label="GitHub" target="_blank"><i class="fa-brands fa-github"></i></a>
        <a href="https://www.instagram.com/sohaib_a003?igsh=MTYyajczaXp2Y253YQ==" target="_blank" aria-label="Instagram"><i class="fa-brands fa-instagram"></i></a>
      </div>
    </div>

    <div class="hero-right">
      <div class="avatar">
        <img src="images/Sohaib-suit.webp" alt="Sohaib Awwad" />
      </div>
    </div>
  `;const i=e.querySelector(".typing");if(i){const c=["Sohaib Awwad","Floppy Man"];let t=0,a=0,s=!1;const l=()=>{const o=c[t],r=o.substring(0,a);i.textContent=r,!s&&a<o.length?(a++,setTimeout(l,120)):s&&a>0?(a--,setTimeout(l,80)):s?(s=!1,t=(t+1)%c.length,setTimeout(l,400)):(s=!0,setTimeout(l,1500))};l()}return e}function M(){const e=document.createElement("section");return e.className="container stack",e.innerHTML=`
    <h2>Tech Stack</h2>
    <p>Technologies that keep my code flexible and my ideas flowing.</p>

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
  `,e}function I(){const e=document.createElement("section");return e.className="container about",e.id="about",e.setAttribute("aria-labelledby","about-title"),e.innerHTML=`
    <header class="about__header">
      <h2 id="about-title">About</h2>
      <p class="about__subtitle">
        A quick snapshot of who I am and what <span class="highlight">Floppy Man</span> stands for.
      </p>
    </header>

    <div class="about__panel">
      <ul class="about__list">
        <li class="about__item">
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

        <li class="about__item">
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

        <li class="about__item">
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
  `,e}function T(){const e=document.createElement("section");return e.className="container services",e.id="services",e.setAttribute("aria-labelledby","services-title"),e.innerHTML=`
    <header class="services__header">
      <h2 id="services-title">Services</h2>
      <p class="services__subtitle">
        Flexible Services that blend design and development.
      </p>
    </header>

    <ul class="services__flex">
      <!-- Card 1 -->
      <li class="service-card">
        <div class="service-card__icon" aria-hidden="true">
          <i class="fa-solid fa-code"></i>
        </div>

        <div class="service-card__body">
          <h3 class="service-card__title">Full-Stack Web Development</h3>
          <p class="service-card__desc">
            I build complete web apps from front to back — fast, secure, and scalable.
          </p>
        </div>

        <ul class="chip-list" aria-label="Tech stack">
          <li class="chip">Angular/.Net</li>
          <li class="chip">Git/Github</li>
          <li class="chip">SSMS</li>
        </ul>
      </li>

      <!-- Card 2 -->
      <li class="service-card">
        <div class="service-card__icon" aria-hidden="true">
          <i class="fa-solid fa-palette"></i>
        </div>

        <div class="service-card__body">
          <h3 class="service-card__title">UI / UX Design</h3>
          <p class="service-card__desc">
            I design interfaces that look perfect, feel right, and flow naturally from wireframe to final UI.
          </p>
        </div>

        <ul class="chip-list" aria-label="Tools">
          <li class="chip">Figma</li>
          <li class="chip">Canva</li>
        </ul>
      </li>
    </ul>
  `,e}function C(){const e=document.createElement("section");return e.className="container soft-skills",e.id="skills",e.setAttribute("aria-labelledby","soft-skills-title"),e.innerHTML=`
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
  `,e}function A(){const e=document.createElement("section");return e.className="container projects",e.id="projects",e.setAttribute("aria-labelledby","projects-title"),e.innerHTML=`
    <div class="projects__header">
      <h2 id="projects-title">Projects</h2>
      <p>Flexible creations where design and code dance together.</p>
    </div>

    <ul class="projects__grid">
      <!-- Card 1 -->
      <li class="project-card">
        <div class="project-card__image">
          <img src="images/EVO-TEAM.webp" alt="EVO-TEAM Website preview" />
        </div>
        <div class="project-card__body">
          <div class="chips">
            <span class="chip-web-project">Full-Stack</span>
            <span class="chip-design-project">UI / UX</span>
          </div>
          <h3 class="project-card__title">EVO-TEAM Website</h3>
          <p class="project-card__desc">
            A platform designed to showcase EVO-TEAM, a student team from the Hashemite University. 
            It features and a portal for students to join the team.
          </p>
          <div class="project-card__links">
            <a href="#" class="project-link" aria-label="Live Preview">
              <i class="fa-solid fa-link"></i> Live
            </a>
            <a href="https://www.figma.com/design/c93u2qG5f9UVq0U57SAEKs/Evo-Team?node-id=0-1&t=gQcHQNbCr9XFqtDu-1" target="_blank" class="project-link" aria-label="View Figma Design">
              <i class="fa-brands fa-figma"></i> Design
            </a>
          </div>
        </div>
      </li>

      <!-- Card 2 -->
      <li class="project-card">
        <div class="project-card__image">
          <img src="images/JobLine.webp" alt="JobLine Website preview" />
        </div>
        <div class="project-card__body">
          <div class="chips">
            <span class="chip-web-project">Front-End</span>
            <span class="chip-design-project">UI / UX</span>
          </div>
          <h3 class="project-card__title">JobLine Website</h3>
          <p class="project-card__desc">
            JobLine is a platform that connects fresh graduates with employers. 
            I designed three user interfaces: employee, employer, and admin.
          </p>
          <div class="project-card__links">
            <a href="https://www.figma.com/design/mAa4QAVAXIM1vpxGuIlW98/Sohaib-prototype--Copy-?node-id=0-1&t=Wy6a7BWNuZRyIFEW-1" target="_blank" class="project-link" aria-label="View Figma Design">
              <i class="fa-brands fa-figma"></i> Design
            </a>
            <a href="https://github.com/sohaib-awwad/JobLine.git" target="_blank" class="project-link" aria-label="View GitHub Code">
              <i class="fa-brands fa-github"></i> Code
            </a>
          </div>
        </div>
      </li>

      <!-- Card 3 -->
      <li class="project-card">
        <div class="project-card__image">
          <img src="images/FloppyManWebsite.webp" alt="Floppy Man Portfolio preview" />
        </div>
        <div class="project-card__body">
          <div class="chips">
            <span class="chip-web-project">Front-End</span>
            <span class="chip-design-project">UI / UX</span>
          </div>
          <h3 class="project-card__title">Floppy Man Portfolio</h3>
          <p class="project-card__desc">
            A responsive portfolio website built with modern web technologies (Vanilla Vite). 
            Designed to showcase my projects and skills, with a clean, flexible layout.
          </p>
          <div class="project-card__links">
            <a href="https://www.figma.com/design/MFk1B8KcZ7frpbhsaQDYlT/Floppy-Man-Website?node-id=0-1&t=b3g49nZt235Pey1a-1" target="_blank" class="project-link" aria-label="View Figma Design">
              <i class="fa-brands fa-figma"></i> Design
            </a>
            <a href="https://github.com/sohaib-awwad/Portfolio.git" target="_blank" class="project-link" aria-label="View GitHub Code">
              <i class="fa-brands fa-github"></i> Code
            </a>
          </div>
        </div>
      </li>

      <!-- Card 4 -->
      <li class="project-card">
        <div class="project-card__image">
          <img src="images/WebDesignTemp.webp" alt="Web Design Template preview" />
        </div>
        <div class="project-card__body">
          <div class="chips">
            <span class="chip-design-project">UI / UX</span>
          </div>
          <h3 class="project-card__title">Web Design Template</h3>
          <p class="project-card__desc">
            A modern web design project built from scratch to showcase my UI/UX skills — 
            focusing on layout, color balance, and user flow.
          </p>
          <div class="project-card__links">
            <a href="https://www.figma.com/design/EX7TuP1Yrf2onDDk3YrsWB/Web-Design-Temp?node-id=0-1&t=bs610ApokopeBDS1-1" target="_blank" class="project-link" aria-label="View Figma Design">
              <i class="fa-brands fa-figma"></i> Design
            </a>
          </div>
        </div>
      </li>

      <!-- Card 5 -->
      <li class="project-card">
        <div class="project-card__image">
          <img src="images/VanoraMobileDesign.webp" alt="Vanora Mobile App preview" />
        </div>
        <div class="project-card__body">
          <div class="chips">
            <span class="chip-design-project">UI / UX</span>
          </div>
          <h3 class="project-card__title">Vanora Mobile App Design</h3>
          <p class="project-card__desc">
            Vanora is a perfume app built around a single vanilla scent. 
            I designed the brand and an elegant interface to reflect its warm feel.
          </p>
          <div class="project-card__links">
            <a href="https://www.figma.com/design/DFlFGux6SgNDeZIImCajRZ/Vanilla-App--Copy-?node-id=0-1&t=TUYfoT2O1jVKyfFw-1" target="_blank" class="project-link" aria-label="View Figma Design">
              <i class="fa-brands fa-figma"></i> Design
            </a>
          </div>
        </div>
      </li>
    </ul>
  `,e}function E(){const e=document.createElement("section");return e.className="container contact",e.id="contact",e.setAttribute("aria-labelledby","contact-title"),e.innerHTML=`
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
  `,e}function F(){const e=document.getElementById("contactForm");if(!e)return;const i=e.querySelector(".form-result"),c=(a,s)=>{const l=e.querySelector(`.error[data-for="${a}"]`);l&&(l.textContent=s)},t=()=>e.querySelectorAll(".error").forEach(a=>a.textContent="");e.addEventListener("submit",a=>{if(a.preventDefault(),t(),i&&(i.textContent=""),e.querySelector(".hp-field").value.trim())return;const l=e.querySelector("#name").value.trim(),o=e.querySelector("#email").value.trim(),r=e.querySelector("#subject").value.trim(),p=e.querySelector("#message").value.trim();let d=!0;if(l||(c("name","Please enter your name."),d=!1),(!o||!/^\S+@\S+\.\S+$/.test(o))&&(c("email","Please enter a valid email."),d=!1),r||(c("subject","Please add a subject."),d=!1),(!p||p.length<10)&&(c("message","Message should be at least 10 characters."),d=!1),!d)return;const h="sohaibawwad8@gmail.com",b=`From: ${l} <${o}>
Subject: ${r}

${p}`,v=`mailto:${encodeURIComponent(h)}?subject=${encodeURIComponent(r)}&body=${encodeURIComponent(b)}`;window.location.href=v,i&&(i.textContent="Opening your email app…",i.classList.add("ok")),e.reset()})}function x(){const e=document.createElement("footer");return e.className="footer",e.innerHTML=`
    <div class="container footer__top">
      <a class="brand" href="/" aria-label="Floppy Man home">
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
  `,e}const m=document.querySelector("#navbar");m&&m.appendChild(k());const n=document.querySelector("#app");n&&(n.appendChild(S()),n.appendChild(M()),n.appendChild(I()),n.appendChild(T()),n.appendChild(C()),n.appendChild(A()),n.appendChild(E()),F());const f=document.querySelector("#footer");f&&f.appendChild(x());w();y();j();
