const CACHE_NAME = 'loveu-app-v2'; // Wir ändern die Version auf v2, damit alte Caches gelöscht werden

self.addEventListener('install', (e) => {
  self.skipWaiting();
});

self.addEventListener('activate', (e) => {
  // Hier löschen wir alle alten Caches, wenn eine neue Version installiert wird
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
  // "Network First": Versuche immer, die Datei aus dem Internet zu laden. 
  // Wenn das nicht klappt (z.B. kein Internet), nimm die gespeicherte Version.
  e.respondWith(
    fetch(e.request).catch(() => {
      return caches.match(e.request);
    })
  );
});