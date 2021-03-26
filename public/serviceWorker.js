const staticAssets = [
  './',
  '../src/index.js',
];

async function cacheFirst(req) {
  const cachedResponse = caches.match(req);
  return cachedResponse || fetch(req);
}

async function newtorkFirst(req) {
  const cache = await caches.open('dynamic-cache');
  try {
    const res = await fetch(req);
    cache.put(req, res.clone());
    return res;
  } catch (error) {
    return cache.match(req);
  }
}

this.addEventListener('install', async (event) => {
  const cache = await caches.open('static-cache');
  cache.addAll(staticAssets);
});

this.addEventListener('fetch', (event) => {
  const req = event.request;
  const url = new URL(req.url);

  if (url.origin === this.location.url) {
    event.respondWith(cacheFirst(req));
  } else {
    event.respondWith(newtorkFirst(req));
  }
});
