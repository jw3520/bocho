const CACHE_VERSION = "bocho-pwa-26.05.18.16";
const APP_SHELL_ASSETS = [
  "/",
  "/index.html",
  "/styles.css",
  "/app.js",
  "/public/ref/sedan.jpg",
  "/public/ref/small.webp",
  "/public/ref/suv.png",
  "/public/ref/vehicle-sedan.png",
  "/public/ref/vehicle-compact.png",
  "/public/ref/vehicle-suv.png",
  "/public/ref/vehicle-sedan-neutral.png",
  "/public/ref/vehicle-compact-neutral.png",
  "/public/ref/vehicle-suv-neutral.png",
  "/public/ref/vehicle-sedan-body-mask.png",
  "/public/ref/vehicle-compact-body-mask.png",
  "/public/ref/vehicle-suv-body-mask.png",
  "/public/manifest.json",
  "/public/intro-car-outpaint.png",
  "/public/icons/icon-192.png",
  "/public/icons/icon-512.png",
  "/public/icons/apple-touch-icon.png",
  "/public/icons/favicon-32.png",
  "/public/icons/favicon.ico",
];

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_VERSION).then((cache) => cache.addAll(APP_SHELL_ASSETS)),
  );
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches
      .keys()
      .then((cacheNames) =>
        Promise.all(
          cacheNames
            .filter((cacheName) => cacheName !== CACHE_VERSION)
            .map((cacheName) => caches.delete(cacheName)),
        ),
      ),
  );
  self.clients.claim();
});

self.addEventListener("fetch", (event) => {
  const request = event.request;

  if (request.method !== "GET") {
    return;
  }

  event.respondWith(
    fetch(request)
      .then((response) => {
        if (response && response.ok && request.url.startsWith(self.location.origin)) {
          const responseClone = response.clone();
          caches.open(CACHE_VERSION).then((cache) => cache.put(request, responseClone));
        }

        return response;
      })
      .catch(() =>
        caches.match(request).then((cachedResponse) => cachedResponse || caches.match("/index.html")),
      ),
  );
});

self.addEventListener("message", (event) => {
  if (event.data?.type === "SKIP_WAITING") {
    self.skipWaiting();
  }
});
