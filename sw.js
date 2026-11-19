const CACHE_NAME = 'loveu-app-v20';

self.addEventListener('install', (e) => {
  self.skipWaiting();
});

self.addEventListener('activate', (e) => {
  e.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (cacheName !== CACHE_NAME) {
            return caches.delete(cacheName);
          }
        })
      );
    }).then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', (e) => {
  // "Network First": Immer zuerst das Internet fragen, dann den Cache
  e.respondWith(
    fetch(e.request)
      .then((response) => {
        // Wenn wir eine Antwort aus dem Internet bekommen, speichern wir sie im Cache
        return caches.open(CACHE_NAME).then((cache) => {
          cache.put(e.request, response.clone());
          return response;
        });
      })
      .catch(() => {
        // Wenn kein Internet da ist, nimm den Cache
        return caches.match(e.request);
      })
  );
});