self.addEventListener('install', function (evt) {
    console.log('install event')
});

self.addEventListener('activate', function (evt) {
    console.log('activate event')
});

self.addEventListener('message', function (evt) {
    console.log('message event')
});

self.addEventListener('fetch', function (evt) {
    console.log('fetch event')
});

self.addEventListener('sync', function (evt) {
    console.log('sync event')
});

self.addEventListener('push', function (evt) {
    console.log('push event')
});
