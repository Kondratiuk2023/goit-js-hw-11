import{S as p,i as a}from"./assets/vendor-8c59ed88.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const n of t.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&r(n)}).observe(document,{childList:!0,subtree:!0});function i(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function r(e){if(e.ep)return;e.ep=!0;const t=i(e);fetch(e.href,t)}})();function d(s,o){const i="https://pixabay.com/api/",r=new URLSearchParams({key:"43346019-e2cdab7ada109c45f6a1c5d2a",q:s,image_type:"photo",orientation:"horizontal",safesearch:!0});return fetch(`${i}?${r}`).then(e=>{if(!e.ok)throw new Error("Failed to fetch images");return e.json()}).catch(e=>{throw new Error("Failed to fetch images")})}function m(s){return s.hits.map(({webformatURL:i,largeImageURL:r,tags:e,likes:t,views:n,comments:c,downloads:u})=>`
        <li class="card">
            <div>
                <a href="${r}">
                    <img src="${i}" alt="${e}" class="picture"/>
                </a>
            </div>
            <ul class='descriptions'>
                <li class='descriptions_item'>
                    <span>Likes</span>
                    <span>${t}</span>
                </li>
                <li class='descriptions_item'>
                    <span>Views</span>
                    <span>${n}</span>
                </li>
                <li class='descriptions_item'>
                    <span>Comments</span>
                    <span>${c}</span>
                </li>
                <li class='descriptions_item'>
                    <span>Downloads</span>
                    <span>${u}</span>
                </li>
            </ul>
        </li>`).join("")}const f=new p(".list_gallery a"),h=document.querySelector(".main_form"),l=document.querySelector(".list_gallery");h.addEventListener("submit",y);function y(s){s.preventDefault(),l.innerHTML="";const o=document.querySelector(".loader");o.classList.add("loading");let i=s.currentTarget.elements.inputElement.value;s.currentTarget.elements.inputElement.value="",d(i).then(r=>{if(r.total==0)return a.show({title:"Ops.",titleColor:"white",message:"Sorry, there are no images matching your search query. Please try again!",messageColor:"white",color:"red",position:"topCenter",timeout:"5000"}),0;l.insertAdjacentHTML("beforeend",m(r)),f.refresh(),s.target.reset()}).catch(r=>{a.show({title:"Ops.",titleColor:"white",message:r,messageColor:"white",color:"red",position:"topCenter",timeout:"5000"})}).finally(()=>{o.classList.remove("loading")})}
//# sourceMappingURL=commonHelpers.js.map
