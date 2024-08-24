import{S as p,i as l}from"./assets/vendor-B07T6_gy.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const n of t.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&a(n)}).observe(document,{childList:!0,subtree:!0});function s(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function a(e){if(e.ep)return;e.ep=!0;const t=s(e);fetch(e.href,t)}})();const h="https://pixabay.com/api/",m=r=>{const o=new URLSearchParams({key:"45491471-a9703abbe87dc4841cd0b555c",q:r,image_type:"photo",orientation:"horizontal",safesearch:!0});return fetch(`${h}/?${o}`).then(s=>{if(!s.ok)throw new Error(s.status);return s.json()})},f=r=>`
  <li class="gallery-card">
    <a class="gallery_link" href ="${r.largeImageURL}">
    <img class="gallery-img" src="${r.webformatURL}" alt="${r.tags}" title="${r.tags}"/>
    <ul class ="image-details">
    <p>Likes<span>${r.likes}</span></p>
    <p>Views<span>${r.views}</span></p>
    <p>Commets<span>${r.comments}</span></p>
    <p>Downloads<span>${r.downloads}</span></p>
    </ul>
    </a>
  </li>
  `,g=new p(".js-gallery a",{animationSpeed:250}),c=document.querySelector(".js-search-form"),i=document.querySelector(".js-gallery"),u=()=>c.reset(),d=document.querySelector(".js-loader"),y=()=>{d.classList.remove("is-hidden")},L=r=>{r.preventDefault(),y();const o=c.elements.user_query.value;m(o).then(s=>{if(s.hits.length===0){l.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"}),i.innerHTML="",u();return}i.innerHTML="";const a=s.hits.map(e=>f(e)).join("");i.insertAdjacentHTML("beforeend",a),u(),g.refresh()}).catch(s=>{console.log(s),l.error({message:"Sorry, something get wrong. Try again later!",position:"topRight"})}).finally(()=>{d.classList.add("is-hidden")})};c.addEventListener("submit",L);
//# sourceMappingURL=index.js.map
