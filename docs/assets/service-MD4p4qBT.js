import{h as c,p,a as u,b as h,s as d,m as f,g as _}from"./projects-dQJEH6kx.js";import{s as n}from"./services-BBKFA7Xi.js";const o=s=>s.replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/</g,"&lt;"),m=s=>s.split(/\n\s*\n/).map(a=>`<p>${a.trim()}</p>`).join("");function i(s,a,e={}){const{aos:t="fade-up",id:r}=e;return`
    <section class="sd-section container"${r?` id="${r}"`:""}
      data-aos="${t}" data-aos-duration="700">
      <h2 class="sd-section__title">${s}</h2>
      ${a}
    </section>`}function g(s){const a=s.techAndTools?.length?`
      <div class="sd-hero__tools" aria-label="Tools and technologies">
        <span class="sd-hero__tools-label">Built with</span>
        <ul class="sd-hero__tools-list">
          ${s.techAndTools.map(e=>`<li class="chip">${e}</li>`).join("")}
        </ul>
      </div>`:"";return`
    <header class="sd-hero container" data-aos="fade-up" data-aos-duration="700">
      <div class="sd-hero__icon" aria-hidden="true">
        <i class="${s.icon}"></i>
      </div>
      <h1 class="sd-hero__title">${s.title}</h1>
      <p class="sd-hero__tagline">${s.tagline}</p>
      ${s.intro?`<div class="sd-hero__intro">${m(s.intro)}</div>`:""}
      ${a}
    </header>`}function v(s){if(!s.whatYouGet?.length)return"";const a=s.whatYouGet.map(e=>`
      <li class="sd-deliverable">
        <i class="fa-solid fa-circle-check" aria-hidden="true"></i>
        <span>${e}</span>
      </li>`).join("");return i("What you get",`<ul class="sd-deliverables">${a}</ul>`)}function $(s){if(!s.process?.length)return"";const a=s.process.map((e,t)=>`
      <li class="sd-step">
        <span class="sd-step__num">${String(t+1).padStart(2,"0")}</span>
        <div class="sd-step__body">
          <h3>${e.step}</h3>
          <p>${e.desc}</p>
        </div>
      </li>`).join("");return i("My process",`<ol class="sd-steps">${a}</ol>`)}function j(s){if(!s.featuredProjectSlugs?.length)return"";const a=s.featuredProjectSlugs.map(e=>p.find(t=>t.slug===e)).filter(e=>!!e).map(e=>`
      <li class="sd-project-card">
        <a class="sd-project-card__link" href="${u(e.slug)}"
           aria-label="Read case study: ${o(e.title)}">
          <div class="sd-project-card__image">
            <img src="${h(e.heroImage)}" alt="${o(e.heroAlt)}" loading="lazy" />
          </div>
          <div class="sd-project-card__body">
            <h3>${e.title}</h3>
            <p>${e.tagline}</p>
            <span class="sd-project-card__cta">
              Read case study <i class="fa-solid fa-arrow-right"></i>
            </span>
          </div>
        </a>
      </li>`).join("");return i("Featured projects",`<ul class="sd-project-grid">${a}</ul>`)}function y(s){if(!s.faq?.length)return"";const a=s.faq.map((e,t)=>`
      <li class="sd-faq__item">
        <details${t===0?" open":""}>
          <summary>
            <span>${e.q}</span>
            <i class="fa-solid fa-plus sd-faq__icon" aria-hidden="true"></i>
          </summary>
          <div class="sd-faq__answer">
            <p>${e.a}</p>
          </div>
        </details>
      </li>`).join("");return i("Frequently asked",`<ul class="sd-faq">${a}</ul>`)}function w(s){return`
    <section class="sd-cta container" data-aos="fade-up" data-aos-duration="700">
      <h2 class="sd-cta__title">Ready to work on ${s.title.toLowerCase()}?</h2>
      <p class="sd-cta__desc">
        Tell me what you have in mind — I'll write back with questions and a starting plan.
      </p>
      <a class="btn primary" href="${c("#contact")}">
        <i class="fa-solid fa-paper-plane"></i> Get in touch
      </a>
    </section>`}function b(s){const a=n.findIndex(r=>r.slug===s.slug);if(a===-1)return"";const e=n[(a-1+n.length)%n.length],t=n[(a+1)%n.length];return`
    <nav class="sd-nav container" data-aos="fade-up" data-aos-duration="500">
      <a class="sd-nav__link sd-nav__link--prev" href="${d(e.slug)}">
        <i class="fa-solid fa-arrow-left"></i>
        <span>
          <small>Previous service</small>
          <strong>${e.title}</strong>
        </span>
      </a>
      <a class="sd-nav__link sd-nav__link--back" href="${c("#services")}">
        <i class="fa-solid fa-grip"></i>
        <span>All services</span>
      </a>
      <a class="sd-nav__link sd-nav__link--next" href="${d(t.slug)}">
        <span>
          <small>Next service</small>
          <strong>${t.title}</strong>
        </span>
        <i class="fa-solid fa-arrow-right"></i>
      </a>
    </nav>`}function k(s){const a=document.createElement("article");return a.className="sd-article",a.innerHTML=[g(s),v(s),$(s),j(s),y(s),w(s),b(s)].join(""),a}function S(s){const a=document.createElement("section");return a.className="container sd-notfound",a.innerHTML=`
    <h1>Service not found</h1>
    <p>No service matches the slug <code>${o(s)}</code>.</p>
    <p><a class="btn primary" href="${c("#services")}">Back to all services</a></p>
  `,a}f();const l=document.querySelector("#app");if(l){const s=_(),a=n.find(e=>e.slug===s);a?(document.title=`${a.title} — Sohaib Awwad (Floppy Man)`,l.appendChild(k(a))):(document.title="Service not found — Floppy Man",l.appendChild(S(s)))}
