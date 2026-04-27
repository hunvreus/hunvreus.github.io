# Ronan Berder's blog

This is the code for my personal blog: https://ronanberder.com

It started on Drupal (hosted on MediaTemple), then moved on to Jekyll (hosted on GitHub Pages), and is now built with Astro and deployed on Cloudflare Workers Static Assets.

Important bits:

- Posts live in `src/posts/`.
- The site URL is configured in `src/lib/site.js`.
- Files (images, attachments, etc) are in `public/files`. We configure headers for them in `public/_headers`.

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

This site is static. Astro builds it into `dist/`, then Wrangler deploys that directory to Cloudflare Workers Static Assets. There is no custom Worker code.

Preview the Worker locally:

```sh
npm run workers:preview
```

Deploy:

```sh
npm run deploy
```
