import{p as $,c as S,b as F,a as N,A as w}from"./projects-BZuKw93H.js";const f=6,P=["Full-Stack","Front-End","Back-End","UI / UX","Graphic Design","Notion"],A=e=>e==="Notion"?"notion":["Full-Stack","Front-End","Back-End"].includes(e)?"web":"design",x=e=>{const s=A(e);return s==="web"?"chip-web-project":s==="design"?"chip-design-project":"chip-notion"},C=e=>`filter-chip filter-chip--${A(e)}`,j=(e,s,t)=>`
  <a href="${e}" target="_blank" rel="noopener"
     class="project-icon-link" aria-label="${t}">
    <i class="${s}" aria-hidden="true"></i>
  </a>`,I=e=>e.heroImage?`<img src="${N(e.heroImage)}" alt="${e.heroAlt}" />`:`<span class="project-card__image-fallback" aria-hidden="true">${e.slug.replace(/-/g," ")} shot</span>`,B=()=>`<span class="project-flag">
     <i class="fa-solid fa-fire" aria-hidden="true"></i> Floppy
   </span>`,E=(e,s,t)=>{const l=s%f*100,d=e.chips.map(p=>`<span class="${x(p)}">${p}</span>`).join(""),u=F(e.slug),o=[];e.links.live&&o.push(j(e.links.live,"fa-solid fa-link","Live preview")),e.links.design&&o.push(j(e.links.design,"fa-brands fa-figma","View Figma design")),e.links.code&&o.push(j(e.links.code,"fa-brands fa-github","View GitHub code")),e.links.notion&&o.push(j(e.links.notion,"fa-brands fa-notion","View Notion workspace"));const a="project-card__image"+(e.heroImage?"":" project-card__image--placeholder"),r=t&&e.featured?B():"";return`
    <li class="project-card"
        data-chips="${e.chips.join("|")}"
        data-aos="fade-up"
        data-aos-duration="700"
        data-aos-delay="${l}">
      <a class="${a}" href="${u}" aria-label="Read case study: ${e.title}">
        ${r}
        ${I(e)}
      </a>
      <div class="project-card__body">
        <div class="chips">${d}</div>
        <h3 class="project-card__title">
          <a href="${u}">${e.title}</a>
        </h3>
        <p class="project-card__desc">${e.tagline}</p>
        <div class="project-card__links">
          <a class="project-card__cta" href="${u}" aria-label="Read full case study: ${e.title}">
            <i class="fa-solid fa-book-open" aria-hidden="true"></i>
            <span>Case study</span>
          </a>
          <div class="project-card__icons">${o.join("")}</div>
        </div>
      </div>
    </li>`},M=()=>`
  <div class="projects__view-all-wrap">
    <a class="projects__view-all" href="${S()}">
      <span>View All Projects</span>
      <i class="fa-solid fa-arrow-right" aria-hidden="true"></i>
    </a>
  </div>`;function T(e={}){const{variant:s="featured"}=e,t=document.createElement("section");if(t.className=`container projects projects--${s}`,t.id="projects",t.setAttribute("aria-labelledby","projects-title"),s==="featured"){const a=$.filter(r=>r.featured).slice(0,f);return t.innerHTML=`
      <div class="projects__header"
        data-aos="fade-up"
        data-aos-duration="700">
        <h2 id="projects-title">Projects</h2>
        <p>A handpicked few I'm proudest of — flexible creations where design and code dance together.</p>
      </div>

      <ul class="projects__grid">
        ${a.map((r,p)=>E(r,p,!1)).join("")}
      </ul>

      ${M()}
    `,t}const l=[...$].sort((a,r)=>+!!r.featured-+!!a.featured),d=new Set;$.forEach(a=>a.chips.forEach(r=>d.add(r)));const o=['<button type="button" class="filter-chip filter-chip--all is-active" data-filter="all" role="radio" aria-checked="true">All</button>',...P.filter(a=>d.has(a)).map(a=>`<button type="button" class="${C(a)}" data-filter="${a}" role="radio" aria-checked="false">${a}</button>`)].join("");return t.innerHTML=`
    <div class="projects__header projects__header--page"
      data-aos="fade-up"
      data-aos-duration="700">
      <h1 id="projects-title">Welcome to my work</h1>
      <p>Everything I've designed and built in one place — full-stack apps, interfaces, brand identities, and Notion systems. Filter by what you're after, or just scroll and explore.</p>
    </div>

    <div class="projects__filters"
         role="radiogroup"
         aria-label="Filter projects by type"
         data-aos="fade-up"
         data-aos-duration="700">
      ${o}
    </div>

    <ul class="projects__grid">
      ${l.map((a,r)=>E(a,r,!0)).join("")}
    </ul>

    <nav class="projects__pagination" aria-label="Projects pagination" hidden>
      <button type="button" class="pagination-btn" data-pagination="prev" aria-label="Previous page">
        <i class="fa-solid fa-chevron-left"></i>
      </button>
      <ul class="pagination-pages"></ul>
      <button type="button" class="pagination-btn" data-pagination="next" aria-label="Next page">
        <i class="fa-solid fa-chevron-right"></i>
      </button>
    </nav>
  `,q(t),t}function q(e){let s="all",t=1;const l=Array.from(e.querySelectorAll(".project-card")),d=Array.from(e.querySelectorAll(".filter-chip")),u=e.querySelector(".projects__grid"),o=e.querySelector(".projects__pagination"),a=e.querySelector(".pagination-pages"),r=e.querySelector('[data-pagination="prev"]'),p=e.querySelector('[data-pagination="next"]'),h=document.createElement("li");h.className="projects__empty",h.textContent="No projects in this category yet.",h.hidden=!0,u.appendChild(h);const y=i=>s==="all"?!0:(i.dataset.chips??"").split("|").includes(s),v=()=>{const i=l.filter(y),n=Math.max(1,Math.ceil(i.length/f));t>n&&(t=n);const c=(t-1)*f,g=new Set(i.slice(c,c+f));l.forEach(m=>{m.classList.toggle("is-hidden",!g.has(m))}),h.hidden=i.length>0,n>1?(o.hidden=!1,r.disabled=t===1,p.disabled=t===n,a.innerHTML=Array.from({length:n},(m,L)=>{const b=L+1,k=b===t;return`<li><button type="button" class="pagination-page${k?" is-active":""}" data-page="${b}" aria-label="Go to page ${b}"${k?' aria-current="page"':""}>${b}</button></li>`}).join("")):(o.hidden=!0,a.innerHTML=""),typeof w.refresh=="function"&&w.refresh()};d.forEach(i=>{i.addEventListener("click",()=>{const n=i.dataset.filter;n!==s&&(s=n,t=1,d.forEach(c=>{const g=c===i;c.classList.toggle("is-active",g),c.setAttribute("aria-checked",String(g))}),v())})});const _=i=>{i!==t&&(t=i,v(),e.scrollIntoView({behavior:"smooth",block:"start"}))};r.addEventListener("click",()=>{t>1&&_(t-1)}),p.addEventListener("click",()=>{const i=Math.max(1,Math.ceil(l.filter(y).length/f));t<i&&_(t+1)}),a.addEventListener("click",i=>{const n=i.target.closest("[data-page]");if(!n)return;const c=Number(n.dataset.page);Number.isFinite(c)&&_(c)}),v()}export{T as c,E as r};
