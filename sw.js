if(!self.define){let e,s={};const i=(i,r)=>(i=new URL(i+".js",r).href,s[i]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=i,e.onload=s,document.head.appendChild(e)}else e=i,importScripts(i),s()})).then((()=>{let e=s[i];if(!e)throw new Error(`Module ${i} didn’t register its module`);return e})));self.define=(r,n)=>{const t=e||("document"in self?document.currentScript.src:"")||location.href;if(s[t])return;let o={};const l=e=>i(e,t),u={module:{uri:t},exports:o,require:l};s[t]=Promise.all(r.map((e=>u[e]||l(e)))).then((e=>(n(...e),o)))}}define(["./workbox-e1498109"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"assets/browser-7b1Lx6tj.js",revision:null},{url:"assets/index-BKUrikQC.js",revision:null},{url:"assets/index-rfTfK-oD.css",revision:null},{url:"index.html",revision:"89f632b51dc8768207289740548ed7f3"},{url:"registerSW.js",revision:"402b66900e731ca748771b6fc5e7a068"},{url:"./pwa-192.png",revision:"426aef18316780846e95e8bf7b9fae70"},{url:"manifest.webmanifest",revision:"3e4952751ab5d7d6721cf243924886d8"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html")))}));
