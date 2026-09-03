
document.addEventListener("DOMContentLoaded",()=>{
 const t=document.getElementById("themeToggle");
 const apply=()=>{const dark=document.documentElement.dataset.theme==="dark";if(t)t.textContent=dark?"☀ Light":"☾ Dark"};
 if(t)t.onclick=()=>{const dark=document.documentElement.dataset.theme==="dark";document.documentElement.dataset.theme=dark?"":"dark";localStorage.setItem("siznora-theme",dark?"light":"dark");apply()};apply();
 const m=document.getElementById("mobileMenuToggle"), menu=document.getElementById("mobileMenu");
 if(m&&menu)m.onclick=()=>{menu.classList.toggle("open");m.setAttribute("aria-expanded",menu.classList.contains("open"))};
 const search=document.getElementById("toolSearch");
 if(search)search.addEventListener("input",()=>{const q=search.value.trim().toLowerCase();document.querySelectorAll(".tool-card").forEach(c=>c.hidden=q&&!c.dataset.search.includes(q))});
 document.querySelectorAll(".dropzone").forEach(z=>{
   const input=document.getElementById(z.dataset.input), choose=z.querySelector(".choose-btn");
   choose?.addEventListener("click",()=>input.click());
   ["dragenter","dragover"].forEach(e=>z.addEventListener(e,x=>{x.preventDefault();z.classList.add("dragover")}));
   ["dragleave","drop"].forEach(e=>z.addEventListener(e,x=>{x.preventDefault();z.classList.remove("dragover")}));
   z.addEventListener("drop",e=>{input.files=e.dataTransfer.files;input.dispatchEvent(new Event("change",{bubbles:true}))});
 });
 document.querySelectorAll('input[type="range"]').forEach(x=>{const o=document.getElementById(x.id+"Out");if(o){const u=()=>o.textContent=Math.round(+x.value*100)+"%";x.addEventListener("input",u);u()}});
});
