import { site } from "../lib/site.js";

export function GET() {
  return new Response(`Sitemap: ${site.url}/sitemap-index.xml

User-agent: *
Disallow:
`);
}
