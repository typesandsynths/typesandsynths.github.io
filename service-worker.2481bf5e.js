let a=[],t="";addEventListener("install",(e=>e.waitUntil(async function(){const e=await caches.open(t);await e.addAll(a)}()))),addEventListener("activate",(a=>a.waitUntil(async function(){const a=await caches.keys();await Promise.all(a.map((a=>a!==t&&caches.delete(a))))}())));
//# sourceMappingURL=service-worker.2481bf5e.js.map
