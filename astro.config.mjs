import markdoc from "@astrojs/markdoc";
import react from "@astrojs/react";
import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";
import keystatic from "@keystatic/astro";
import { defineConfig } from "astro/config";

export default defineConfig({
  site: "https://your.domain/",
  output: "hybrid",
  image: {
    remotePatterns: [{ protocol: "https" }],
  },
  integrations: [keystatic(), markdoc(), react(), sitemap(), tailwind()],
});
