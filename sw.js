const CACHE="seerat-v1";

self.addEventListener("install",e=>{
 e.waitUntil(
  caches.open(CACHE).then(c=>c.addAll([
   "./",
   "./index.html",
   "./manifest.json",
   "./first-love.mp3",
   "./happy-love.mp3",
   "./sad-love.mp3"
  ]))
 )
});

self.addEventListener("fetch",e=>{
 e.respondWith(caches.match(e.request).then(r=>r||fetch(e.request)))
});
