if(!self.define){let e,i={};const s=(s,n)=>(s=new URL(s+".js",n).href,i[s]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=s,e.onload=i,document.head.appendChild(e)}else e=s,importScripts(s),i()})).then((()=>{let e=i[s];if(!e)throw new Error(`Module ${s} didn’t register its module`);return e})));self.define=(n,r)=>{const t=e||("document"in self?document.currentScript.src:"")||location.href;if(i[t])return;let o={};const c=e=>s(e,t),d={module:{uri:t},exports:o,require:c};i[t]=Promise.all(n.map((e=>d[e]||c(e)))).then((e=>(r(...e),o)))}}define(["./workbox-9bc8a7af"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"assets/index-aa6b40cd.js",revision:null},{url:"assets/index-bede481f.css",revision:null},{url:"index.html",revision:"32d296abcb3f60c41cf1652d0fa0d36d"},{url:"registerSW.js",revision:"c0872a82a7ebb63a601f1b00f54f7a18"},{url:"favicon.ico",revision:"df7700616b500967e2c0f2c2a725d2d8"},{url:"manifest.webmanifest",revision:"a735822ec0a48a63af0db2c7c03023d1"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html")))}));
//# sourceMappingURL=sw.js.map
