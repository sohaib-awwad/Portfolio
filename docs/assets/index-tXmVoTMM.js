(function(){const y=document.createElement("link").relList;if(y&&y.supports&&y.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))s(t);new MutationObserver(t=>{for(const e of t)if(e.type==="childList")for(const o of e.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&s(o)}).observe(document,{childList:!0,subtree:!0});function m(t){const e={};return t.integrity&&(e.integrity=t.integrity),t.referrerPolicy&&(e.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?e.credentials="include":t.crossOrigin==="anonymous"?e.credentials="omit":e.credentials="same-origin",e}function s(t){if(t.ep)return;t.ep=!0;const e=m(t);fetch(t.href,e)}})();function ra(a){return a&&a.__esModule&&Object.prototype.hasOwnProperty.call(a,"default")?a.default:a}var Z={exports:{}},la=Z.exports,ta;function ca(){return ta||(ta=1,(function(a,y){(function(m,s){a.exports=s()})(la,function(){return(function(m){function s(e){if(t[e])return t[e].exports;var o=t[e]={exports:{},id:e,loaded:!1};return m[e].call(o.exports,o,o.exports,s),o.loaded=!0,o.exports}var t={};return s.m=m,s.c=t,s.p="dist/",s(0)})([function(m,s,t){function e(l){return l&&l.__esModule?l:{default:l}}var o=Object.assign||function(l){for(var S=1;S<arguments.length;S++){var I=arguments[S];for(var P in I)Object.prototype.hasOwnProperty.call(I,P)&&(l[P]=I[P])}return l},f=t(1),h=(e(f),t(6)),r=e(h),p=t(7),c=e(p),u=t(8),d=e(u),v=t(9),x=e(v),E=t(10),$=e(E),G=t(11),R=e(G),Q=t(14),X=e(Q),A=[],B=!1,_={offset:120,delay:0,easing:"ease",duration:400,disable:!1,once:!1,startEvent:"DOMContentLoaded",throttleDelay:99,debounceDelay:50,disableMutationObserver:!1},L=function(){var l=arguments.length>0&&arguments[0]!==void 0&&arguments[0];if(l&&(B=!0),B)return A=(0,R.default)(A,_),(0,$.default)(A,_.once),A},N=function(){A=(0,X.default)(),L()},n=function(){A.forEach(function(l,S){l.node.removeAttribute("data-aos"),l.node.removeAttribute("data-aos-easing"),l.node.removeAttribute("data-aos-duration"),l.node.removeAttribute("data-aos-delay")})},i=function(l){return l===!0||l==="mobile"&&x.default.mobile()||l==="phone"&&x.default.phone()||l==="tablet"&&x.default.tablet()||typeof l=="function"&&l()===!0},b=function(l){_=o(_,l),A=(0,X.default)();var S=document.all&&!window.atob;return i(_.disable)||S?n():(_.disableMutationObserver||d.default.isSupported()||(console.info(`
      aos: MutationObserver is not supported on this browser,
      code mutations observing has been disabled.
      You may have to call "refreshHard()" by yourself.
    `),_.disableMutationObserver=!0),document.querySelector("body").setAttribute("data-aos-easing",_.easing),document.querySelector("body").setAttribute("data-aos-duration",_.duration),document.querySelector("body").setAttribute("data-aos-delay",_.delay),_.startEvent==="DOMContentLoaded"&&["complete","interactive"].indexOf(document.readyState)>-1?L(!0):_.startEvent==="load"?window.addEventListener(_.startEvent,function(){L(!0)}):document.addEventListener(_.startEvent,function(){L(!0)}),window.addEventListener("resize",(0,c.default)(L,_.debounceDelay,!0)),window.addEventListener("orientationchange",(0,c.default)(L,_.debounceDelay,!0)),window.addEventListener("scroll",(0,r.default)(function(){(0,$.default)(A,_.once)},_.throttleDelay)),_.disableMutationObserver||d.default.ready("[data-aos]",N),A)};m.exports={init:b,refresh:L,refreshHard:N}},function(m,s){},,,,,function(m,s){(function(t){function e(i,b,l){function S(g){var M=O,z=D;return O=D=void 0,H=g,j=i.apply(z,M)}function I(g){return H=g,k=setTimeout(Y,b),U?S(g):j}function P(g){var M=g-T,z=g-H,ea=b-M;return q?N(ea,F-z):ea}function W(g){var M=g-T,z=g-H;return T===void 0||M>=b||M<0||q&&z>=F}function Y(){var g=n();return W(g)?K(g):void(k=setTimeout(Y,P(g)))}function K(g){return k=void 0,w&&O?S(g):(O=D=void 0,j)}function aa(){k!==void 0&&clearTimeout(k),H=0,O=T=D=k=void 0}function J(){return k===void 0?j:K(n())}function C(){var g=n(),M=W(g);if(O=arguments,D=this,T=g,M){if(k===void 0)return I(T);if(q)return k=setTimeout(Y,b),S(T)}return k===void 0&&(k=setTimeout(Y,b)),j}var O,D,F,j,k,T,H=0,U=!1,q=!1,w=!0;if(typeof i!="function")throw new TypeError(u);return b=p(b)||0,f(l)&&(U=!!l.leading,q="maxWait"in l,F=q?L(p(l.maxWait)||0,b):F,w="trailing"in l?!!l.trailing:w),C.cancel=aa,C.flush=J,C}function o(i,b,l){var S=!0,I=!0;if(typeof i!="function")throw new TypeError(u);return f(l)&&(S="leading"in l?!!l.leading:S,I="trailing"in l?!!l.trailing:I),e(i,b,{leading:S,maxWait:b,trailing:I})}function f(i){var b=typeof i>"u"?"undefined":c(i);return!!i&&(b=="object"||b=="function")}function h(i){return!!i&&(typeof i>"u"?"undefined":c(i))=="object"}function r(i){return(typeof i>"u"?"undefined":c(i))=="symbol"||h(i)&&_.call(i)==v}function p(i){if(typeof i=="number")return i;if(r(i))return d;if(f(i)){var b=typeof i.valueOf=="function"?i.valueOf():i;i=f(b)?b+"":b}if(typeof i!="string")return i===0?i:+i;i=i.replace(x,"");var l=$.test(i);return l||G.test(i)?R(i.slice(2),l?2:8):E.test(i)?d:+i}var c=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(i){return typeof i}:function(i){return i&&typeof Symbol=="function"&&i.constructor===Symbol&&i!==Symbol.prototype?"symbol":typeof i},u="Expected a function",d=NaN,v="[object Symbol]",x=/^\s+|\s+$/g,E=/^[-+]0x[0-9a-f]+$/i,$=/^0b[01]+$/i,G=/^0o[0-7]+$/i,R=parseInt,Q=(typeof t>"u"?"undefined":c(t))=="object"&&t&&t.Object===Object&&t,X=(typeof self>"u"?"undefined":c(self))=="object"&&self&&self.Object===Object&&self,A=Q||X||Function("return this")(),B=Object.prototype,_=B.toString,L=Math.max,N=Math.min,n=function(){return A.Date.now()};m.exports=o}).call(s,(function(){return this})())},function(m,s){(function(t){function e(n,i,b){function l(w){var g=C,M=O;return C=O=void 0,T=w,F=n.apply(M,g)}function S(w){return T=w,j=setTimeout(W,i),H?l(w):F}function I(w){var g=w-k,M=w-T,z=i-g;return U?L(z,D-M):z}function P(w){var g=w-k,M=w-T;return k===void 0||g>=i||g<0||U&&M>=D}function W(){var w=N();return P(w)?Y(w):void(j=setTimeout(W,I(w)))}function Y(w){return j=void 0,q&&C?l(w):(C=O=void 0,F)}function K(){j!==void 0&&clearTimeout(j),T=0,C=k=O=j=void 0}function aa(){return j===void 0?F:Y(N())}function J(){var w=N(),g=P(w);if(C=arguments,O=this,k=w,g){if(j===void 0)return S(k);if(U)return j=setTimeout(W,i),l(k)}return j===void 0&&(j=setTimeout(W,i)),F}var C,O,D,F,j,k,T=0,H=!1,U=!1,q=!0;if(typeof n!="function")throw new TypeError(c);return i=r(i)||0,o(b)&&(H=!!b.leading,U="maxWait"in b,D=U?_(r(b.maxWait)||0,i):D,q="trailing"in b?!!b.trailing:q),J.cancel=K,J.flush=aa,J}function o(n){var i=typeof n>"u"?"undefined":p(n);return!!n&&(i=="object"||i=="function")}function f(n){return!!n&&(typeof n>"u"?"undefined":p(n))=="object"}function h(n){return(typeof n>"u"?"undefined":p(n))=="symbol"||f(n)&&B.call(n)==d}function r(n){if(typeof n=="number")return n;if(h(n))return u;if(o(n)){var i=typeof n.valueOf=="function"?n.valueOf():n;n=o(i)?i+"":i}if(typeof n!="string")return n===0?n:+n;n=n.replace(v,"");var b=E.test(n);return b||$.test(n)?G(n.slice(2),b?2:8):x.test(n)?u:+n}var p=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(n){return typeof n}:function(n){return n&&typeof Symbol=="function"&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},c="Expected a function",u=NaN,d="[object Symbol]",v=/^\s+|\s+$/g,x=/^[-+]0x[0-9a-f]+$/i,E=/^0b[01]+$/i,$=/^0o[0-7]+$/i,G=parseInt,R=(typeof t>"u"?"undefined":p(t))=="object"&&t&&t.Object===Object&&t,Q=(typeof self>"u"?"undefined":p(self))=="object"&&self&&self.Object===Object&&self,X=R||Q||Function("return this")(),A=Object.prototype,B=A.toString,_=Math.max,L=Math.min,N=function(){return X.Date.now()};m.exports=e}).call(s,(function(){return this})())},function(m,s){function t(p){var c=void 0,u=void 0;for(c=0;c<p.length;c+=1)if(u=p[c],u.dataset&&u.dataset.aos||u.children&&t(u.children))return!0;return!1}function e(){return window.MutationObserver||window.WebKitMutationObserver||window.MozMutationObserver}function o(){return!!e()}function f(p,c){var u=window.document,d=e(),v=new d(h);r=c,v.observe(u.documentElement,{childList:!0,subtree:!0,removedNodes:!0})}function h(p){p&&p.forEach(function(c){var u=Array.prototype.slice.call(c.addedNodes),d=Array.prototype.slice.call(c.removedNodes),v=u.concat(d);if(t(v))return r()})}Object.defineProperty(s,"__esModule",{value:!0});var r=function(){};s.default={isSupported:o,ready:f}},function(m,s){function t(u,d){if(!(u instanceof d))throw new TypeError("Cannot call a class as a function")}function e(){return navigator.userAgent||navigator.vendor||window.opera||""}Object.defineProperty(s,"__esModule",{value:!0});var o=(function(){function u(d,v){for(var x=0;x<v.length;x++){var E=v[x];E.enumerable=E.enumerable||!1,E.configurable=!0,"value"in E&&(E.writable=!0),Object.defineProperty(d,E.key,E)}}return function(d,v,x){return v&&u(d.prototype,v),x&&u(d,x),d}})(),f=/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i,h=/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i,r=/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i,p=/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i,c=(function(){function u(){t(this,u)}return o(u,[{key:"phone",value:function(){var d=e();return!(!f.test(d)&&!h.test(d.substr(0,4)))}},{key:"mobile",value:function(){var d=e();return!(!r.test(d)&&!p.test(d.substr(0,4)))}},{key:"tablet",value:function(){return this.mobile()&&!this.phone()}}]),u})();s.default=new c},function(m,s){Object.defineProperty(s,"__esModule",{value:!0});var t=function(o,f,h){var r=o.node.getAttribute("data-aos-once");f>o.position?o.node.classList.add("aos-animate"):typeof r<"u"&&(r==="false"||!h&&r!=="true")&&o.node.classList.remove("aos-animate")},e=function(o,f){var h=window.pageYOffset,r=window.innerHeight;o.forEach(function(p,c){t(p,r+h,f)})};s.default=e},function(m,s,t){function e(r){return r&&r.__esModule?r:{default:r}}Object.defineProperty(s,"__esModule",{value:!0});var o=t(12),f=e(o),h=function(r,p){return r.forEach(function(c,u){c.node.classList.add("aos-init"),c.position=(0,f.default)(c.node,p.offset)}),r};s.default=h},function(m,s,t){function e(r){return r&&r.__esModule?r:{default:r}}Object.defineProperty(s,"__esModule",{value:!0});var o=t(13),f=e(o),h=function(r,p){var c=0,u=0,d=window.innerHeight,v={offset:r.getAttribute("data-aos-offset"),anchor:r.getAttribute("data-aos-anchor"),anchorPlacement:r.getAttribute("data-aos-anchor-placement")};switch(v.offset&&!isNaN(v.offset)&&(u=parseInt(v.offset)),v.anchor&&document.querySelectorAll(v.anchor)&&(r=document.querySelectorAll(v.anchor)[0]),c=(0,f.default)(r).top,v.anchorPlacement){case"top-bottom":break;case"center-bottom":c+=r.offsetHeight/2;break;case"bottom-bottom":c+=r.offsetHeight;break;case"top-center":c+=d/2;break;case"bottom-center":c+=d/2+r.offsetHeight;break;case"center-center":c+=d/2+r.offsetHeight/2;break;case"top-top":c+=d;break;case"bottom-top":c+=r.offsetHeight+d;break;case"center-top":c+=r.offsetHeight/2+d}return v.anchorPlacement||v.offset||isNaN(p)||(u=p),c+u};s.default=h},function(m,s){Object.defineProperty(s,"__esModule",{value:!0});var t=function(e){for(var o=0,f=0;e&&!isNaN(e.offsetLeft)&&!isNaN(e.offsetTop);)o+=e.offsetLeft-(e.tagName!="BODY"?e.scrollLeft:0),f+=e.offsetTop-(e.tagName!="BODY"?e.scrollTop:0),e=e.offsetParent;return{top:f,left:o}};s.default=t},function(m,s){Object.defineProperty(s,"__esModule",{value:!0});var t=function(e){return e=e||document.querySelectorAll("[data-aos]"),Array.prototype.map.call(e,function(o){return{node:o}})};s.default=t}])})})(Z)),Z.exports}var da=ca();const ua=ra(da),oa="theme",fa=()=>matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light";function na(a){document.documentElement.setAttribute("data-theme",a)}function pa(){const a=localStorage.getItem(oa)||fa();na(a)}function ma(){const a=Array.from(document.querySelectorAll(".theme-toggle"));if(!a.length)return;const y=()=>{const s=(document.documentElement.getAttribute("data-theme")||"light")==="dark";a.forEach(t=>{t.innerHTML=s?'<i class="fa-solid fa-sun" aria-hidden="true"></i>':'<i class="fa-solid fa-moon" aria-hidden="true"></i>'})};y();const m=()=>{const t=(document.documentElement.getAttribute("data-theme")||"light")==="dark"?"light":"dark";na(t),localStorage.setItem(oa,t),y()};a.forEach(s=>s.addEventListener("click",m))}function ba(){const a=document.createElement("nav");return a.className="navbar",a.innerHTML=`
    <div class="container navbar__inner">
      <!-- Brand -->
      <a class="brand" href="#top" aria-label="Floppy Man home">
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
  `,a}function ga(){const a=document.getElementById("burger"),y=document.getElementById("mobileMenu");if(!a||!y)return;const m=()=>{y.classList.add("is-open"),a.setAttribute("aria-expanded","true"),document.body.style.overflow="hidden"},s=()=>{y.classList.remove("is-open"),a.setAttribute("aria-expanded","false"),document.body.style.overflow=""},t=()=>{y.classList.contains("is-open")?s():m()};a.addEventListener("click",e=>{e.stopPropagation(),t()}),y.addEventListener("click",e=>{e.target.tagName==="A"&&s()}),document.addEventListener("keydown",e=>{e.key==="Escape"&&s()}),document.addEventListener("click",e=>{const o=e.target,f=y.contains(o),h=a.contains(o);y.classList.contains("is-open")&&!f&&!h&&s()}),matchMedia("(min-width: 1025px)").addEventListener("change",e=>{e.matches&&s()})}function ha(){const a=document.createElement("section");a.className="container hero",a.innerHTML=`
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
  `;const y=a.querySelector(".typing");if(y){const m=["Sohaib Awwad","Floppy Man"];let s=0,t=0,e=!1;const o=()=>{const f=m[s],h=f.substring(0,t);y.textContent=h,!e&&t<f.length?(t++,setTimeout(o,120)):e&&t>0?(t--,setTimeout(o,80)):e?(e=!1,s=(s+1)%m.length,setTimeout(o,400)):(e=!0,setTimeout(o,1500))};o()}return a}function va(){const a=document.createElement("section");return a.className="container stack",a.innerHTML=`
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
  `,a}function ya(){const a=document.createElement("section");return a.className="container about",a.id="about",a.setAttribute("aria-labelledby","about-title"),a.innerHTML=`
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
  `,a}function _a(){const a=document.createElement("section");return a.className="container services",a.id="services",a.setAttribute("aria-labelledby","services-title"),a.innerHTML=`
    <header class="services__header"
      data-aos="fade-up"
      data-aos-duration="700">
      <h2 id="services-title">Services</h2>
      <p class="services__subtitle">
        Flexible Services that blend design and development.
      </p>
    </header>

    <ul class="services__flex">
      <!-- Card 1 -->
      <li class="service-card"
        data-aos="fade-right"
        data-aos-duration="700"
        data-aos-delay="100">
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
      <li class="service-card"
        data-aos="fade-left"
        data-aos-duration="700"
        data-aos-delay="200">
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
  `,a}function wa(){const a=document.createElement("section");return a.className="container soft-skills",a.id="skills",a.setAttribute("aria-labelledby","soft-skills-title"),a.innerHTML=`
    <header class="soft-skills__header"
      data-aos="fade-up"
      data-aos-duration="700">
      <h2 id="soft-skills-title">Soft Skills</h2>
      <p class="soft-skills__subtitle">
        Human skills that keep my code collaborative, clear, and calm.
      </p>
    </header>

    <ul class="soft-skills__grid">
      <li class="soft-skill-card"
        data-aos="fade-up"
        data-aos-duration="650"
        data-aos-delay="0">
        <div class="soft-skill-card__icon" aria-hidden="true">
          <i class="fa-solid fa-comments"></i>
        </div>
        <h3 class="soft-skill-card__title">Communication</h3>
        <p class="soft-skill-card__desc">
          I explain technical ideas in simple, clear language for both devs and non-devs.
        </p>
      </li>

      <li class="soft-skill-card"
        data-aos="fade-up"
        data-aos-duration="650"
        data-aos-delay="80">
        <div class="soft-skill-card__icon" aria-hidden="true">
          <i class="fa-solid fa-puzzle-piece"></i>
        </div>
        <h3 class="soft-skill-card__title">Problem Solving</h3>
        <p class="soft-skill-card__desc">
          I break complex problems into small steps and test fast to reach solid solutions.
        </p>
      </li>

      <li class="soft-skill-card"
        data-aos="fade-up"
        data-aos-duration="650"
        data-aos-delay="160">
        <div class="soft-skill-card__icon" aria-hidden="true">
          <i class="fa-solid fa-people-group"></i>
        </div>
        <h3 class="soft-skill-card__title">Teamwork</h3>
        <p class="soft-skill-card__desc">
          I enjoy pairing, code reviews, and building things together instead of alone.
        </p>
      </li>

      <li class="soft-skill-card"
        data-aos="fade-up"
        data-aos-duration="650"
        data-aos-delay="240">
        <div class="soft-skill-card__icon" aria-hidden="true">
          <i class="fa-solid fa-shuffle"></i>
        </div>
        <h3 class="soft-skill-card__title">Adaptability</h3>
        <p class="soft-skill-card__desc">
          I’m comfortable switching tools, stacks, or priorities without losing focus.
        </p>
      </li>

      <li class="soft-skill-card"
        data-aos="fade-up"
        data-aos-duration="650"
        data-aos-delay="320">
        <div class="soft-skill-card__icon" aria-hidden="true">
          <i class="fa-solid fa-clock"></i>
        </div>
        <h3 class="soft-skill-card__title">Time Management</h3>
        <p class="soft-skill-card__desc">
          I plan tasks, set realistic milestones, and keep projects moving smoothly.
        </p>
      </li>

      <li class="soft-skill-card"
        data-aos="fade-up"
        data-aos-duration="650"
        data-aos-delay="400">
        <div class="soft-skill-card__icon" aria-hidden="true">
          <i class="fa-solid fa-eye"></i>
        </div>
        <h3 class="soft-skill-card__title">Attention to Detail</h3>
        <p class="soft-skill-card__desc">
          I care about tiny UI details, clean code, and UX polish that users actually feel.
        </p>
      </li>
    </ul>
  `,a}function ka(){const a=document.createElement("section");return a.className="container projects",a.id="projects",a.setAttribute("aria-labelledby","projects-title"),a.innerHTML=`
    <div class="projects__header"
      data-aos="fade-up"
      data-aos-duration="700">
      <h2 id="projects-title">Projects</h2>
      <p>Flexible creations where design and code dance together.</p>
    </div>

    <ul class="projects__grid">
      <!-- Card 1 -->
      <li class="project-card"
        data-aos="fade-up"
        data-aos-duration="700"
        data-aos-delay="0">
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
            <a href="https://www.figma.com/design/c93u2qG5f9UVq0U57SAEKs/Evo-Team?node-id=0-1&t=gQcHQNbCr9XFqtDu-1"
               target="_blank"
               class="project-link"
               aria-label="View Figma Design">
              <i class="fa-brands fa-figma"></i> Design
            </a>
          </div>
        </div>
      </li>

      <!-- Card 2 -->
      <li class="project-card"
        data-aos="fade-up"
        data-aos-duration="700"
        data-aos-delay="100">
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
            <a href="https://www.figma.com/design/mAa4QAVAXIM1vpxGuIlW98/Sohaib-prototype--Copy-?node-id=0-1&t=Wy6a7BWNuZRyIFEW-1"
               target="_blank"
               class="project-link"
               aria-label="View Figma Design">
              <i class="fa-brands fa-figma"></i> Design
            </a>
            <a href="https://github.com/sohaib-awwad/JobLine.git"
               target="_blank"
               class="project-link"
               aria-label="View GitHub Code">
              <i class="fa-brands fa-github"></i> Code
            </a>
          </div>
        </div>
      </li>

      <!-- Card 3 -->
      <li class="project-card"
        data-aos="fade-up"
        data-aos-duration="700"
        data-aos-delay="200">
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
            <a href="https://www.figma.com/design/MFk1B8KcZ7frpbhsaQDYlT/Floppy-Man-Website?node-id=0-1&t=b3g49nZt235Pey1a-1"
               target="_blank"
               class="project-link"
               aria-label="View Figma Design">
              <i class="fa-brands fa-figma"></i> Design
            </a>
            <a href="https://github.com/sohaib-awwad/Portfolio.git"
               target="_blank"
               class="project-link"
               aria-label="View GitHub Code">
              <i class="fa-brands fa-github"></i> Code
            </a>
          </div>
        </div>
      </li>

      <!-- Card 4 -->
      <li class="project-card"
        data-aos="fade-up"
        data-aos-duration="700"
        data-aos-delay="300">
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
            <a href="https://www.figma.com/design/EX7TuP1Yrf2onDDk3YrsWB/Web-Design-Temp?node-id=0-1&t=bs610ApokopeBDS1-1"
               target="_blank"
               class="project-link"
               aria-label="View Figma Design">
              <i class="fa-brands fa-figma"></i> Design
            </a>
          </div>
        </div>
      </li>

      <!-- Card 5 -->
      <li class="project-card"
        data-aos="fade-up"
        data-aos-duration="700"
        data-aos-delay="400">
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
            <a href="https://www.figma.com/design/DFlFGux6SgNDeZIImCajRZ/Vanilla-App--Copy-?node-id=0-1&t=TUYfoT2O1jVKyfFw-1"
               target="_blank"
               class="project-link"
               aria-label="View Figma Design">
              <i class="fa-brands fa-figma"></i> Design
            </a>
          </div>
        </div>
      </li>
    </ul>
  `,a}function ja(){const a=document.createElement("section");return a.className="container contact",a.id="contact",a.setAttribute("aria-labelledby","contact-title"),a.innerHTML=`
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
  `,a}function Sa(){const a=document.getElementById("contactForm");if(!a)return;const y=a.querySelector(".form-result"),m=(t,e)=>{const o=a.querySelector(`.error[data-for="${t}"]`);o&&(o.textContent=e)},s=()=>a.querySelectorAll(".error").forEach(t=>t.textContent="");a.addEventListener("submit",t=>{if(t.preventDefault(),s(),y&&(y.textContent=""),a.querySelector(".hp-field").value.trim())return;const o=a.querySelector("#name").value.trim(),f=a.querySelector("#email").value.trim(),h=a.querySelector("#subject").value.trim(),r=a.querySelector("#message").value.trim();let p=!0;if(o||(m("name","Please enter your name."),p=!1),(!f||!/^\S+@\S+\.\S+$/.test(f))&&(m("email","Please enter a valid email."),p=!1),h||(m("subject","Please add a subject."),p=!1),(!r||r.length<10)&&(m("message","Message should be at least 10 characters."),p=!1),!p)return;const c="sohaibawwad8@gmail.com",u=`From: ${o} <${f}>
Subject: ${h}

${r}`,d=`mailto:${encodeURIComponent(c)}?subject=${encodeURIComponent(h)}&body=${encodeURIComponent(u)}`;window.location.href=d,y&&(y.textContent="Opening your email app…",y.classList.add("ok")),a.reset()})}function xa(){const a=document.createElement("footer");return a.className="footer",a.innerHTML=`
    <div class="container footer__top">
      <a class="brand" href="https://sohaib-awwad.github.io/Portfolio/" aria-label="Floppy Man home">
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
  `,a}ua.init({once:!0,duration:700,easing:"ease-out-cubic"});const ia=document.querySelector("#navbar");ia&&ia.appendChild(ba());const V=document.querySelector("#app");V&&(V.appendChild(ha()),V.appendChild(va()),V.appendChild(ya()),V.appendChild(_a()),V.appendChild(wa()),V.appendChild(ka()),V.appendChild(ja()),Sa());const sa=document.querySelector("#footer");sa&&sa.appendChild(xa());pa();ma();ga();
