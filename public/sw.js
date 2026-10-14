// Service Worker básico para DMC Checklist
self.addEventListener('install', (event) => {
  console.log('Service Worker instalado');
});

self.addEventListener('activate', (event) => {
  console.log('Service Worker activado');
});

self.addEventListener('fetch', (event) => {
  // Cache primero, luego red
  event.respondWith(
    caches.match(event.request)
      .then(response => response || fetch(event.request))
  );
});