import{a as h,S as b,i as u}from"./assets/vendor-DbKZXEqC.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const s of e)if(s.type==="childList")for(const c of s.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&a(c)}).observe(document,{childList:!0,subtree:!0});function o(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerPolicy&&(s.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?s.credentials="include":e.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function a(e){if(e.ep)return;e.ep=!0;const s=o(e);fetch(e.href,s)}})();h.defaults.baseURL="https://pixabay.com";const m=(t,r)=>{const o={params:{key:"45491471-a9703abbe87dc4841cd0b555c",q:t,image_type:"photo",orientation:"horizontal",safesearch:!0,page:r,per_page:15}};return h.get("/api/",o)},y=t=>`
  <li class="gallery-card">
    <a class="gallery_link" href ="${t.largeImageURL}">
    <img class="gallery-img" src="${t.webformatURL}" alt="${t.tags}" title="${t.tags}"/>
    <ul class ="image-details">
    <p>Likes<span>${t.likes}</span></p>
    <p>Views<span>${t.views}</span></p>
    <p>Commets<span>${t.comments}</span></p>
    <p>Downloads<span>${t.downloads}</span></p>
    </ul>
    </a>
  </li>
  `,S=new b(".js-gallery a",{animationSpeed:250}),d=document.querySelector(".js-search-form"),n=document.querySelector(".js-gallery"),f=document.querySelector(".js-loader"),p=document.querySelector(".js-load-more"),g=()=>d.reset(),v=()=>{f.classList.remove("is-hidden")};let i=1,l="",L=0;const w=async t=>{t.preventDefault(),v(),l=d.elements.user_query.value,i=1;const r=await m(l,i);try{if(r.data.hits.length===0){u.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"}),n.innerHTML="",g();return}n.innerHTML="";const o=r.data.hits.map(e=>y(e)).join("");n.insertAdjacentHTML("beforeend",o),g(),S.refresh(),L=n.querySelector("li").getBoundingClientRect().height,p.classList.remove("is-hidden")}catch(o){console.log(o),u.error({message:"Sorry, something get wrong. Try again later!",position:"topRight"})}f.classList.add("is-hidden")},M=async t=>{try{i+=1;const r=await m(l,i);console.log(l);const o=r.data.hits.map(a=>y(a)).join("");n.insertAdjacentHTML("beforeend",o),scrollBy({top:L*2,behavior:"smooth"}),i===r.data.totalHits&&p.classList.add("is-hidden")}catch(r){console.log(r)}};d.addEventListener("submit",w);p.addEventListener("click",M);
//# sourceMappingURL=index.js.map
