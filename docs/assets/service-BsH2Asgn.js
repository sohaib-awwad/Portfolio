import{h as d,p as u,s as p,c as h,m as f,g as m}from"./projects-BZuKw93H.js";import{s as n}from"./services-n9dh-1Iu.js";import{r as v}from"./projects-sRVvbuZy.js";const _=e=>e.replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/</g,"&lt;"),g=e=>e.split(/\n\s*\n/).map(s=>`<p>${s.trim()}</p>`).join("");function o(e,s,a={}){const{aos:t="fade-up",id:r}=a;return`
    <section class="sd-section container"${r?` id="${r}"`:""}
      data-aos="${t}" data-aos-duration="700">
      <h2 class="sd-section__title">${e}</h2>
      ${s}
    </section>`}function $(e){const s=e.techAndTools?.length?`
      <div class="sd-hero__tools" aria-label="Tools and technologies">
        <span class="sd-hero__tools-label">Built with</span>
        <ul class="sd-hero__tools-list">
          ${e.techAndTools.map(a=>`<li class="chip">${a}</li>`).join("")}
        </ul>
      </div>`:"";return`
    <header class="sd-hero container" data-aos="fade-up" data-aos-duration="700">
      <div class="sd-hero__icon" aria-hidden="true">
        <i class="${e.icon}"></i>
      </div>
      <h1 class="sd-hero__title">${e.title}</h1>
      <p class="sd-hero__tagline">${e.tagline}</p>
      ${e.intro?`<div class="sd-hero__intro">${g(e.intro)}</div>`:""}
      ${s}
    </header>`}function w(e){if(!e.whatYouGet?.length)return"";const s=e.whatYouGet.map(a=>`
      <li class="sd-deliverable">
        <i class="fa-solid fa-circle-check" aria-hidden="true"></i>
        <span>${a}</span>
      </li>`).join("");return o("What you get",`<ul class="sd-deliverables">${s}</ul>`)}function j(e){if(!e.process?.length)return"";const s=e.process.map((a,t)=>`
      <li class="sd-step">
        <span class="sd-step__num">${String(t+1).padStart(2,"0")}</span>
        <div class="sd-step__body">
          <h3>${a.step}</h3>
          <p>${a.desc}</p>
        </div>
      </li>`).join("");return o("My process",`<ol class="sd-steps">${s}</ol>`)}function y(e){if(!e.relatedChips?.length)return"";const s=u.filter(i=>i.chips.some(l=>e.relatedChips.includes(l)));if(!s.length)return"";const t=[...s].sort((i,l)=>+!!l.featured-+!!i.featured).slice(0,3).map((i,l)=>v(i,l,!0)).join(""),r=`
    <div class="sd-view-all-wrap">
      <a class="sd-view-all" href="${h()}">
        <span>View All Projects</span>
        <i class="fa-solid fa-arrow-right" aria-hidden="true"></i>
      </a>
    </div>`;return o("Featured projects",`<ul class="projects__grid">${t}</ul>${r}`)}function b(e){if(!e.faq?.length)return"";const s=e.faq.map((a,t)=>`
      <li class="sd-faq__item">
        <details${t===0?" open":""}>
          <summary>
            <span>${a.q}</span>
            <i class="fa-solid fa-plus sd-faq__icon" aria-hidden="true"></i>
          </summary>
          <div class="sd-faq__answer">
            <p>${a.a}</p>
          </div>
        </details>
      </li>`).join("");return o("Frequently asked",`<ul class="sd-faq">${s}</ul>`)}function k(e){return`
    <section class="sd-cta container" data-aos="fade-up" data-aos-duration="700">
      <h2 class="sd-cta__title">Ready to work on ${e.title.toLowerCase()}?</h2>
      <p class="sd-cta__desc">
        Tell me what you have in mind — I'll write back with questions and a starting plan.
      </p>
      <a class="btn primary" href="${d("#contact")}">
        <i class="fa-solid fa-paper-plane"></i> Get in touch
      </a>
    </section>`}function q(e){const s=n.findIndex(r=>r.slug===e.slug);if(s===-1)return"";const a=n[(s-1+n.length)%n.length],t=n[(s+1)%n.length];return`
    <nav class="sd-nav container" data-aos="fade-up" data-aos-duration="500">
      <a class="sd-nav__link sd-nav__link--prev" href="${p(a.slug)}">
        <i class="fa-solid fa-arrow-left"></i>
        <span>
          <small>Previous service</small>
          <strong>${a.title}</strong>
        </span>
      </a>
      <a class="sd-nav__link sd-nav__link--back" href="${d("#services")}">
        <i class="fa-solid fa-grip"></i>
        <span>All services</span>
      </a>
      <a class="sd-nav__link sd-nav__link--next" href="${p(t.slug)}">
        <span>
          <small>Next service</small>
          <strong>${t.title}</strong>
        </span>
        <i class="fa-solid fa-arrow-right"></i>
      </a>
    </nav>`}function S(e){const s=document.createElement("article");return s.className="sd-article",s.innerHTML=[$(e),w(e),j(e),y(e),b(e),k(e),q(e)].join(""),s}function F(e){const s=document.createElement("section");return s.className="container sd-notfound",s.innerHTML=`
    <h1>Service not found</h1>
    <p>No service matches the slug <code>${_(e)}</code>.</p>
    <p><a class="btn primary" href="${d("#services")}">Back to all services</a></p>
  `,s}f();const c=document.querySelector("#app");if(c){const e=m(),s=n.find(a=>a.slug===e);s?(document.title=`${s.title} — Sohaib Awwad (Floppy Man)`,c.appendChild(S(s))):(document.title="Service not found — Floppy Man",c.appendChild(F(e)))}
