import{S as d,i as a}from"./assets/vendor-8c59ed88.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))t(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&t(o)}).observe(document,{childList:!0,subtree:!0});function i(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function t(e){if(e.ep)return;e.ep=!0;const r=i(e);fetch(e.href,r)}})();function f(n){return n.map(({webformatURL:s,largeImageURL:i,tags:t,likes:e,views:r,comments:o,downloads:p})=>`
    <li class="gallery-item">
      <div class="gallery">
       <a class="gallery-link" href="${i}">
       <img class="gallery-image"
         src="${s}"
         alt="${t}"
        />
       </a>
       
      <ul class="card-description">
        <li class="description">Likes <span class="accent">${e} </span></li>
        <li class="description">Views <span class="accent">${r} </span></li>
        <li class="description">Comments <span class="accent">${o} </span></li>
        <li class="description">Downloads <span class="accent">${p} </span></li>
      </ul>
      </div>
    </li>
    `).join("")}function m(n=""){const s="43173775-fc7269b10cca3a5d436001063",i=new URLSearchParams({key:s,q:n,image_typ:"photo",orientation:"horizontal",safesearch:!0,per_page:20});fetch(`https://pixabay.com/api/?${i}`).then(t=>{if(!t.ok)throw new Error(t.statusText);return t.json()}).then(t=>list.insertAdjacentHTML("beforeend",createMarkup(t.hits))).catch(t=>alert(t))}const c=document.querySelector(".form-inline"),l=document.querySelector(".js-list"),h=document.querySelector(".loader");c.addEventListener("submit",y);function u(){h.classList.toggle("visible")}const g=new d(".images a",{captionsData:"alt",captionDelay:250});function y(n){n.preventDefault(),l.innerHTML="";const{query:s}=n.currentTarget.elements;let i=s.value.trim();if(i===""){a.error({title:"Error",message:"The field cannot be empty!!!",position:"topRight"}),c.reset();return}u(),m(i).then(t=>{t.hits.length===0?a.warning({title:"",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"}):(l.insertAdjacentHTML("beforeend",f(t.hits)),g.refresh())}).catch(t=>{a.error({title:"Error",message:"An error occurred while fetching data. Please try again later.",position:"topRight"})}).finally(()=>u()),c.reset()}
//# sourceMappingURL=commonHelpers.js.map
