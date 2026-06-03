import{h as u,b as i,p as l,a as p,m as h,g as m}from"./projects-dQJEH6kx.js";/* empty css                 */const g=e=>e==="Notion"?"chip-notion":["Full-Stack","Front-End","Back-End"].includes(e)?"chip-web-project":"chip-design-project",r=e=>e.replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/</g,"&lt;"),c=e=>e.split(/\n\s*\n/).map(s=>`<p>${s.trim()}</p>`).join("");function f(e){const s=e.chips.map(n=>`<span class="${g(n)}">${n}</span>`).join(""),a=[];return e.links.live&&a.push(`<a class="btn primary" href="${e.links.live}" target="_blank" rel="noopener">
         <i class="fa-solid fa-link"></i> Live
       </a>`),e.links.code&&a.push(`<a class="btn secondary" href="${e.links.code}" target="_blank" rel="noopener">
         <i class="fa-brands fa-github"></i> Code
       </a>`),e.links.design&&a.push(`<a class="btn secondary" href="${e.links.design}" target="_blank" rel="noopener">
         <i class="fa-brands fa-figma"></i> Design
       </a>`),e.links.notion&&a.push(`<a class="btn secondary" href="${e.links.notion}" target="_blank" rel="noopener">
         <i class="fa-brands fa-notion"></i> Notion
       </a>`),`
    <header class="pd-hero container" data-aos="fade-up" data-aos-duration="700">
      <div class="pd-hero__text">
        <div class="chips">${s}</div>
        <h1 class="pd-hero__title">${e.title}</h1>
        <p class="pd-hero__tagline">${e.tagline}</p>
        ${a.length?`<div class="pd-hero__ctas">${a.join("")}</div>`:""}
      </div>
      <div class="pd-hero__image">
        <img src="${i(e.heroImage)}" alt="${r(e.heroAlt)}" loading="eager" />
      </div>
    </header>`}function t(e,s,a={}){const{aos:n="fade-up",id:o}=a;return`
    <section class="pd-section container"${o?` id="${o}"`:""}
      data-aos="${n}" data-aos-duration="700">
      <h2 class="pd-section__title">${e}</h2>
      ${s}
    </section>`}function $(e){return e.overview?t("Overview",`<div class="pd-prose">${c(e.overview)}</div>`):""}function _(e){if(!e.myRole?.length)return"";const s=e.myRole.map((a,n)=>`
      <li class="pd-role">
        <span class="pd-role__num">${String(n+1).padStart(2,"0")}</span>
        <p class="pd-role__text">${a}</p>
      </li>`).join("");return t("My Role",`<ul class="pd-roles">${s}</ul>`)}function v(e){if(!e.techStack?.length)return"";const s=e.techStack.map(a=>`
      <li class="pd-tech-item">
        <span class="pd-tech-name">${a.name}</span>
        <span class="pd-tech-why">${a.why}</span>
      </li>`).join("");return t("Tech Stack",`<ul class="pd-tech-list">${s}</ul>`)}function y(e){if(!e.designProcess)return"";const s=e.designProcess.figmaEmbed?`<div class="pd-figma-embed">
         <iframe src="https://www.figma.com/embed?embed_host=floppyman&url=${encodeURIComponent(e.designProcess.figmaEmbed)}"
           allowfullscreen loading="lazy" title="Figma design preview"></iframe>
       </div>`:"";return t("Design Process",`<div class="pd-prose">${c(e.designProcess.text)}</div>${s}`)}function b(e){if(!e.brandSystem)return"";const s=[];if(e.brandSystem.palette?.length){const a=e.brandSystem.palette.map(n=>`
        <li class="pd-swatch">
          <span class="pd-swatch__color" style="background:${n.hex}"></span>
          <span class="pd-swatch__name">${n.name}</span>
          <span class="pd-swatch__hex">${n.hex}</span>
        </li>`).join("");s.push(`
      <h3 class="pd-subhead">Palette</h3>
      <ul class="pd-swatches">${a}</ul>`)}if(e.brandSystem.typography?.length){const a=e.brandSystem.typography.map(n=>`
        <li class="pd-type">
          <span class="pd-type__name">${n.name}</span>
          <span class="pd-type__sample" style="font-family:${n.name}, system-ui, sans-serif">
            ${n.sample}
          </span>
        </li>`).join("");s.push(`
      <h3 class="pd-subhead">Typography</h3>
      <ul class="pd-types">${a}</ul>`)}if(e.brandSystem.logoVariants?.length){const a=e.brandSystem.logoVariants.map(n=>`<li><img src="${i(n.src)}" alt="${r(n.alt)}" loading="lazy" /></li>`).join("");s.push(`
      <h3 class="pd-subhead">Logo Variants</h3>
      <ul class="pd-logos">${a}</ul>`)}return t("Brand System",s.join(""))}function k(e){if(!e.notionWorkspace)return"";const s=e.notionWorkspace.databases?.length?`<ul class="pd-chip-list">${e.notionWorkspace.databases.map(n=>`<li class="chip">${n}</li>`).join("")}</ul>`:"",a=e.notionWorkspace.relations?`<p class="pd-relations"><strong>How they connect:</strong> ${e.notionWorkspace.relations}</p>`:"";return t("Workspace Structure",`<div class="pd-prose">${c(e.notionWorkspace.description)}</div>
     ${s?`<h3 class="pd-subhead">Databases</h3>${s}`:""}
     ${a}`)}function j(e){if(!e.notionAutomations?.length)return"";const s=e.notionAutomations.map(a=>`
      <li class="pd-automation">
        <h3>${a.title}</h3>
        <p>${a.desc}</p>
      </li>`).join("");return t("Automations & Templates",`<ul class="pd-automations">${s}</ul>`)}function w(e){if(!e.features?.length)return"";const s=e.features.map(a=>`
      <li class="pd-feature">
        ${a.image?`<div class="pd-feature__img"><img src="${i(a.image)}" alt="" loading="lazy" /></div>`:""}
        <div class="pd-feature__text">
          <h3>${a.title}</h3>
          <p>${a.desc}</p>
        </div>
      </li>`).join("");return t("Key Features",`<ul class="pd-features">${s}</ul>`)}function S(e){if(!e.gallery?.length)return"";const s=e.gallery.map(a=>`<li class="pd-gallery__item">
           <img src="${i(a.src)}" alt="${r(a.alt)}" loading="lazy" />
         </li>`).join("");return t("Screenshots",`<ul class="pd-gallery">${s}</ul>`)}function x(e){if(!e.challenges?.length)return"";const s=e.challenges.map(a=>`
      <li class="pd-challenge">
        <div class="pd-challenge__problem">
          <h3><i class="fa-solid fa-triangle-exclamation"></i> Challenge</h3>
          <p>${a.challenge}</p>
        </div>
        <div class="pd-challenge__solution">
          <h3><i class="fa-solid fa-lightbulb"></i> Solution</h3>
          <p>${a.solution}</p>
        </div>
      </li>`).join("");return t("Challenges & Solutions",`<ul class="pd-challenges">${s}</ul>`)}function P(e){return e.outcomes?t("Outcomes & Lessons Learned",`<div class="pd-outcomes-card">${c(e.outcomes)}</div>`):""}function N(e){const s=l.findIndex(o=>o.slug===e.slug);if(s===-1)return"";const a=l[(s-1+l.length)%l.length],n=l[(s+1)%l.length];return`
    <nav class="pd-nav container" data-aos="fade-up" data-aos-duration="500">
      <a class="pd-nav__link pd-nav__link--prev" href="${p(a.slug)}">
        <i class="fa-solid fa-arrow-left"></i>
        <span>
          <small>Previous project</small>
          <strong>${a.title}</strong>
        </span>
      </a>
      <a class="pd-nav__link pd-nav__link--back" href="${u("#projects")}">
        <i class="fa-solid fa-grip"></i>
        <span>All projects</span>
      </a>
      <a class="pd-nav__link pd-nav__link--next" href="${p(n.slug)}">
        <span>
          <small>Next project</small>
          <strong>${n.title}</strong>
        </span>
        <i class="fa-solid fa-arrow-right"></i>
      </a>
    </nav>`}function F(e){const s=document.createElement("article");return s.className="pd-article",s.innerHTML=[f(e),$(e),_(e),v(e),y(e),b(e),k(e),j(e),w(e),S(e),x(e),P(e),N(e)].join(""),s}function A(e){const s=document.createElement("section");return s.className="container pd-notfound",s.innerHTML=`
    <h1>Project not found</h1>
    <p>No project matches the slug <code>${r(e)}</code>.</p>
    <p><a class="btn primary" href="${u("#projects")}">Back to all projects</a></p>
  `,s}h();const d=document.querySelector("#app");if(d){const e=m(),s=l.find(a=>a.slug===e);s?(document.title=`${s.title} — Sohaib Awwad (Floppy Man)`,d.appendChild(F(s))):(document.title="Project not found — Floppy Man",d.appendChild(A(e)))}
