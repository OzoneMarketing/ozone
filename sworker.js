self.addEventListener("install",e=>{
   e.waitUntil(
       caches.open("static").then(caches=>{
           return caches.addAll(["./","./bootstrap-5.0.2-dist/css/bootstrap.min.css","./bootstrap-5.0.2-dist/js/bootstrap.min.js","./style.css","./gallery/LOGO.png","./gallery/bath.jpg","./gallery/long-body.png","./gallery/short-body.png"]);
       })
   )
})
self.addEventListener("fetch",e=>{
    e.respondWidth(
        caches.match(e.request).then(response=>{
            return response || fetch(e.request);
        })
    )
})
