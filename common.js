
(() => {
  const root=document.documentElement;
  const saved=localStorage.getItem("siznora-theme");
  if(saved==="dark") root.dataset.theme="dark";
  window.Siznora={
    fmtSize(n){if(!Number.isFinite(n)||n<=0)return"0 B";const u=["B","KB","MB","GB"];let i=Math.floor(Math.log(n)/Math.log(1024));i=Math.min(i,u.length-1);return`${(n/1024**i).toFixed(i?2:0)} ${u[i]}`},
    download(blob,name){const a=document.createElement("a");a.href=URL.createObjectURL(blob);a.download=name;document.body.appendChild(a);a.click();setTimeout(()=>{URL.revokeObjectURL(a.href);a.remove()},1000)}
  };
})();

if("serviceWorker" in navigator)window.addEventListener("load",()=>navigator.serviceWorker.register("sw.js").catch(()=>{}));
