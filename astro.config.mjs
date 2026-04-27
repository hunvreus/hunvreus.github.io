import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

import { remarkCodeLanguage } from "./src/lib/remark-code-language.js";
import { site } from "./src/lib/site.js";

export default defineConfig({
  site: site.url,
  integrations: [sitemap()],
  markdown: {
    shikiConfig: {
      theme: "ayu-mirage",
    },
    remarkPlugins: [remarkCodeLanguage],
  },
  trailingSlash: "ignore",
});
