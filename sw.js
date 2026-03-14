const CACHE_NAME = 'baybayin-v1';
const ASSETS = [
  '/baybayin/',
  '/baybayin/index.html',
  '/baybayin/css/index.css',
  '/baybayin/js/index.js',
  '/baybayin/assets/fonts/Baybayin/NotoSansTagalog.otf',
  '/baybayin/assets/fonts/Ubuntu/Ubuntu-Regular.ttf',
  '/baybayin/assets/fonts/Ubuntu/Ubuntu-Medium.ttf',
  '/baybayin/assets/fonts/Ubuntu/Ubuntu-Bold.ttf',
  '/baybayin/favicon.svg',
  '/baybayin/favicon.ico',
  '/baybayin/apple-touch-icon.png',
  '/baybayin/site.webmanifest',
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(ASSETS))
  );
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(keys.filter((k) => k !== CACHE_NAME).map((k) => caches.delete(k)))
    )
  );
  self.clients.claim();
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((cached) => cached || fetch(event.request))
  );
});
