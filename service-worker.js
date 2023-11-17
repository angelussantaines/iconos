const CACHE_NAME = 'v1_cache_retiro_emaus';
const urlsToCache = [
  './',
  '192x192.png',
  '512x512.png',
  'estilo.css', // Si tienes archivos CSS externos
  'script.js',  // Si tienes archivos JS externos
  // Agrega aquí todos los otros recursos que necesitas almacenar en caché
];

self.addEventListener('install', e => {
  e.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        return cache.addAll(urlsToCache);
      })
  );
});

self.addEventListener('fetch', e => {
  e.respondWith(
    caches.match(e.request)
      .then(response => {
        if (response) {
          return response;
        }
        return fetch(e.request);
      })
  );
});
