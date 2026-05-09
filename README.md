# bocho

Bocho App PWA shell.

## Run locally

```bash
python3 -m http.server 48173 --bind 127.0.0.1
```

Then open `http://127.0.0.1:48173`.

## PWA files

- `index.html`: app shell, PWA meta tags, manifest link, service worker registration entry.
- `public/manifest.json`: installability metadata and app icons.
- `service-worker.js`: app shell precache and same-origin runtime cache.
- `public/icons/`: generated bumper sticker source image, favicon, Apple touch icon, and 192px/512px PWA icons.
