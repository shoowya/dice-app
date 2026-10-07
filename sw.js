const C="dice-v1";
const ASSETS=["./","index.html","manifest.webmanifest","icon-192.png","icon-512.png","https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.min.js"];
self.addEventListener("install",e=>{e.waitUntil(caches.open(C).then(c=>Promise.all(ASSETS.map(u=>{
  const rq=u.startsWith("http")?new Request(u,{mode:"no-cors"}):new Request(u);
  return fetch(rq).then(r=>c.put(rq,r)).catch(()=>{});
}))).then(()=>self.skipWaiting()))});
self.addEventListener("activate",e=>{e.waitUntil(caches.keys().then(k=>Promise.all(k.filter(x=>x!==C).map(x=>caches.delete(x)))).then(()=>clients.claim()))});
self.addEventListener("fetch",e=>{if(e.request.method!=="GET")return;
  e.respondWith(caches.match(e.request,{ignoreSearch:true}).then(r=>r||fetch(e.request).then(res=>{const cp=res.clone();caches.open(C).then(c=>c.put(e.request,cp));return res}).catch(()=>caches.match("index.html"))))});
