if(!self.define){let e,s={};const r=(r,i)=>(r=new URL(r+".js",i).href,s[r]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=r,e.onload=s,document.head.appendChild(e)}else e=r,importScripts(r),s()})).then((()=>{let e=s[r];if(!e)throw new Error(`Module ${r} didn’t register its module`);return e})));self.define=(i,n)=>{const t=e||("document"in self?document.currentScript.src:"")||location.href;if(s[t])return;let o={};const l=e=>r(e,t),f={module:{uri:t},exports:o,require:l};s[t]=Promise.all(i.map((e=>f[e]||l(e)))).then((e=>(n(...e),o)))}}define(["./workbox-e1498109"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"assets/browser-BrTDRnTL.js",revision:null},{url:"assets/index-DrFmOwGF.js",revision:null},{url:"assets/index-rfTfK-oD.css",revision:null},{url:"index.html",revision:"b57d2e3a9f1f6b438f13c44ce0ec0a4f"},{url:"registerSW.js",revision:"402b66900e731ca748771b6fc5e7a068"},{url:"./pwa-192.png",revision:"426aef18316780846e95e8bf7b9fae70"},{url:"manifest.webmanifest",revision:"3e4952751ab5d7d6721cf243924886d8"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html")))}));
