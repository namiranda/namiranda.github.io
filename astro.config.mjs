import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

export default defineConfig({
  site: "https://noeliamiranda.dev",
  integrations: [sitemap()],
  // "Today I Learned" became "Notes": keep the old links working
  redirects: {
    "/til": "/notes",
    "/til/[...slug]": "/notes/[...slug]",
  },
  markdown: {
    shikiConfig: {
      themes: { light: "min-light", dark: "min-dark" },
      defaultColor: false,
    },
  },
});
