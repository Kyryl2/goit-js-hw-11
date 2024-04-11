import{i as c,S as d}from"./assets/vendor-8c59ed88.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))i(t);new MutationObserver(t=>{for(const r of t)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function o(t){const r={};return t.integrity&&(r.integrity=t.integrity),t.referrerPolicy&&(r.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?r.credentials="include":t.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(t){if(t.ep)return;t.ep=!0;const r=o(t);fetch(t.href,r)}})();function p(s){const e=new URLSearchParams({key:"43212506-95870309335e8ebf3ea9c8656",q:s,image_type:"photo",orientation:"horizontal",safesearch:!0});return fetch(`https://pixabay.com/api/?${e}`,{header:{"Access-Control-Allow-Origin":"https://pixabay.com"}}).then(o=>{if(!o.ok)throw new Error(o.status);return o.json()})}function f(s){return s.map(e=>`<li class="gallery-item">
        <a href="${e.largeImageURL}"><img src="${e.webformatURL}" alt="${e.tags}"></a>
        <div class = "under-photo">
        <h3>Likes</h3>
        
      <p>${e.likes}</p>
      <h3>Views</h3>
      <p>${e.views}</p>
      <h3>Comments</h3>
      <p>${e.comments}</p>
      <h3>Downloads</h3>
      <p>${e.downloads}</p>
</div>


      </li>`).join("")}const u=document.querySelector(".js-form"),h=document.querySelector(".input"),n=document.querySelector(".gallery"),l=document.querySelector(".loader");u.addEventListener("submit",m);function m(s){s.preventDefault();const e=h.value.trim();if(!e)return n.innerHTML="",s.target.reset(),c.error({message:"Поле для введення не має бути порожнім!",position:"topRight",timeout:2e3,color:"yellow"});l.classList.remove("is-hidden"),n.innerHTML="",p(e).then(o=>{if(o.hits.length===0){n.innerHTML="",u.reset(),c.error({message:"За вашим пошуковим словом, зображень не знайдено!",position:"topRight",timeout:2e3});return}n.innerHTML=f(o.hits);const i={captionsData:"alt",captionDelay:250};new d(".gallery a",i).refresh()}).catch(o=>console.log(o)).finally(()=>{l.classList.add("is-hidden")})}
//# sourceMappingURL=commonHelpers.js.map
