// Service worker mínimo: solo existe para que el navegador permita
// "Añadir a pantalla de inicio". No cachea nada de forma agresiva,
// así que la web siempre carga los datos más recientes de Firebase.
self.addEventListener('install', (e) => { self.skipWaiting(); });
self.addEventListener('activate', (e) => { self.clients.claim(); });
self.addEventListener('fetch', (e) => {
  // Deja pasar todas las peticiones tal cual (sin caché offline).
  e.respondWith(fetch(e.request));
});
