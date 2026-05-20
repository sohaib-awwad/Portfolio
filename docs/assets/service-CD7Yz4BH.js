import{h as c,p,a as u,b as h,s as d,m as f,g as m}from"./projects-D0m4Kw3Y.js";import{s as n}from"./services-BBKFA7Xi.js";const o=a=>a.replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/</g,"&lt;"),g=a=>a.split(/\n\s*\n/).map(e=>`<p>${e.trim()}</p>`).join("");function r(a,e,s={}){const{aos:t="fade-up",id:i}=s;return`
    <section class="sd-section container"${i?` id="${i}"`:""}
      data-aos="${t}" data-aos-duration="700">
      <h2 class="sd-section__title">${a}</h2>
      ${e}
    </section>`}function _(a){return`
    <header class="sd-hero container" data-aos="fade-up" data-aos-duration="700">
      <div class="sd-hero__icon" aria-hidden="true">
        <i class="${a.icon}"></i>
      </div>
      <h1 class="sd-hero__title">${a.title}</h1>
      <p class="sd-hero__tagline">${a.tagline}</p>
      ${a.intro?`<div class="sd-hero__intro">${g(a.intro)}</div>`:""}
    </header>`}function v(a){if(!a.whatYouGet?.length)return"";const e=a.whatYouGet.map(s=>`
      <li class="sd-deliverable">
        <i class="fa-solid fa-circle-check" aria-hidden="true"></i>
        <span>${s}</span>
      </li>`).join("");return r("What you get",`<ul class="sd-deliverables">${e}</ul>`)}function $(a){if(!a.process?.length)return"";const e=a.process.map((s,t)=>`
      <li class="sd-step">
        <span class="sd-step__num">${String(t+1).padStart(2,"0")}</span>
        <div class="sd-step__body">
          <h3>${s.step}</h3>
          <p>${s.desc}</p>
        </div>
      </li>`).join("");return r("My process",`<ol class="sd-steps">${e}</ol>`)}function j(a){if(!a.techAndTools?.length)return"";const e=a.techAndTools.map(s=>`<li class="chip">${s}</li>`).join("");return r("Tech & tools",`<ul class="sd-chip-list" aria-label="Tools and technologies">${e}</ul>`)}function y(a){if(!a.featuredProjectSlugs?.length)return"";const e=a.featuredProjectSlugs.map(s=>p.find(t=>t.slug===s)).filter(s=>!!s).map(s=>`
      <li class="sd-project-card">
        <a class="sd-project-card__link" href="${u(s.slug)}"
           aria-label="Read case study: ${o(s.title)}">
          <div class="sd-project-card__image">
            <img src="${h(s.heroImage)}" alt="${o(s.heroAlt)}" loading="lazy" />
          </div>
          <div class="sd-project-card__body">
            <h3>${s.title}</h3>
            <p>${s.tagline}</p>
            <span class="sd-project-card__cta">
              Read case study <i class="fa-solid fa-arrow-right"></i>
            </span>
          </div>
        </a>
      </li>`).join("");return r("Featured projects",`<ul class="sd-project-grid">${e}</ul>`)}function w(a){if(!a.faq?.length)return"";const e=a.faq.map((s,t)=>`
      <li class="sd-faq__item">
        <details${t===0?" open":""}>
          <summary>
            <span>${s.q}</span>
            <i class="fa-solid fa-plus sd-faq__icon" aria-hidden="true"></i>
          </summary>
          <div class="sd-faq__answer">
            <p>${s.a}</p>
          </div>
        </details>
      </li>`).join("");return r("Frequently asked",`<ul class="sd-faq">${e}</ul>`)}function k(a){return`
    <section class="sd-cta container" data-aos="fade-up" data-aos-duration="700">
      <h2 class="sd-cta__title">Ready to work on ${a.title.toLowerCase()}?</h2>
      <p class="sd-cta__desc">
        Tell me what you have in mind — I'll write back with questions and a starting plan.
      </p>
      <a class="btn primary" href="${c("#contact")}">
        <i class="fa-solid fa-paper-plane"></i> Get in touch
      </a>
    </section>`}function b(a){const e=n.findIndex(i=>i.slug===a.slug);if(e===-1)return"";const s=n[(e-1+n.length)%n.length],t=n[(e+1)%n.length];return`
    <nav class="sd-nav container" data-aos="fade-up" data-aos-duration="500">
      <a class="sd-nav__link sd-nav__link--prev" href="${d(s.slug)}">
        <i class="fa-solid fa-arrow-left"></i>
        <span>
          <small>Previous service</small>
          <strong>${s.title}</strong>
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
    </nav>`}function S(a){const e=document.createElement("article");return e.className="sd-article",e.innerHTML=[_(a),v(a),$(a),j(a),y(a),w(a),k(a),b(a)].join(""),e}function q(a){const e=document.createElement("section");return e.className="container sd-notfound",e.innerHTML=`
    <h1>Service not found</h1>
    <p>No service matches the slug <code>${o(a)}</code>.</p>
    <p><a class="btn primary" href="${c("#services")}">Back to all services</a></p>
  `,e}f();const l=document.querySelector("#app");if(l){const a=m(),e=n.find(s=>s.slug===a);e?(document.title=`${e.title} — Sohaib Awwad (Floppy Man)`,l.appendChild(S(e))):(document.title="Service not found — Floppy Man",l.appendChild(q(a)))}
