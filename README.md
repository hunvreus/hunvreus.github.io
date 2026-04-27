# ronanberder.com

Personal blog built with [Astro](https://astro.build/).

## Development

```sh
npm install
npm run dev
```

## Build

```sh
npm run build
```

The static site is generated in `dist/`.

## Cloudflare Workers

Preview the Worker locally:

```sh
npm run workers:preview
```

Deploy:

```sh
npm run deploy
```

This uses Workers Static Assets. Static headers are configured in `public/_headers`, which Astro copies into `dist/_headers`.

The canonical site URL is configured in `src/lib/site.js`.

## Content

- Posts live in `src/posts/`.
- Public post files stay in `public/files/` and are served from `/files/...`.
- Layout assets live in `public/assets/` and are served from `/assets/...`.
