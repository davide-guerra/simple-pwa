/** An empty service worker! */
self.addEventListener('fetch', function (event) {
});

self.addEventListener('install', function (event) {
    event.waitUntil(
        caches.open(cacheName).then(function (cache) {
            return cache.addAll(
                [
                    '/images/logo92.png',
                    '/images/logo144.png',
                    '/images/logo152.png',
                    '/offline.html'
                ]
            );
        })
    );
});