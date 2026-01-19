self.addEventListener("install", () => {
  self.skipWaiting();
});

self.addEventListener("activate", () => {
  self.clients.claim();
});

self.addEventListener("notificationclick", event => {
  event.notification.close();

  if (event.action === "open") {
    event.waitUntil(
      clients.openWindow("/")
    );
  }
});