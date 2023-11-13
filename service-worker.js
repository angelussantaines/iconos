self.addEventListener('install', function(e) {
    e.waitUntil(
        caches.open('mi-cache').then(function(cache) {
            return cache.addAll([
                '/',
                '/index.html',
                // Aquí puedes agregar otros recursos que deseas cachear
            ]);
        })
    );
});

self.addEventListener('fetch', function(event) {
    event.respondWith(
        caches.match(event.request).then(function(response) {
            return response || fetch(event.request);
        })
    );
});
