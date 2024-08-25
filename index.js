import{a as h,S as L,i as p}from"./assets/vendor-DbKZXEqC.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const l of r.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&o(l)}).observe(document,{childList:!0,subtree:!0});function a(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function o(e){if(e.ep)return;e.ep=!0;const r=a(e);fetch(e.href,r)}})();h.defaults.baseURL="https://pixabay.com";const g=(t,s)=>{const a={params:{key:"45491471-a9703abbe87dc4841cd0b555c",q:t,image_type:"photo",orientation:"horizontal",safesearch:!0,page:s,per_page:15}};return h.get("/api/",a)},m=t=>`
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
  `,b=new L(".js-gallery a",{animationSpeed:250}),c=document.querySelector(".js-search-form"),n=document.querySelector(".js-gallery"),y=document.querySelector(".js-loader"),d=document.querySelector(".js-load-more"),u=()=>c.reset(),S=()=>{y.classList.remove("is-hidden")};let i=1,v="",f=0;const w=async t=>{t.preventDefault(),S();const s=c.elements.user_query.value;i=1;const a=await g(s);try{if(a.data.hits.length===0){p.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"}),n.innerHTML="",u();return}n.innerHTML="";const o=a.data.hits.map(r=>m(r)).join("");n.insertAdjacentHTML("beforeend",o),u(),b.refresh(),f=galleryEl.querySelector("li").getBoundingClientRect().height,d.classList.remove("is-hidden")}catch{p.error({message:"Sorry, something get wrong. Try again later!",position:"topRight"})}y.classList.add("is-hidden")},M=async t=>{try{i+=1;const s=await g(v,i),a=responce.data.hits.map(o=>m(o)).join("");n.insertAdjacentHTML("beforeend",a),scrollBy({top:f*2,behavior:"smooth"}),i===s.data.totalHits&&d.classList.add("is-hidden")}catch(s){console.log(s)}};c.addEventListener("submit",w);d.addEventListener("click",M);
//# sourceMappingURL=index.js.map
