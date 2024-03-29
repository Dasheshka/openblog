import markdoc from "@astrojs/markdoc";
import react from "@astrojs/react";
import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";
import vercel from "@astrojs/vercel/serverless";
import keystatic from "@keystatic/astro";
import { defineConfig } from "astro/config";

export default defineConfig({
  site: "https://blueopenblog.vercel.app/",
  output: "hybrid",
  adapter: vercel(),
  image: {
    remotePatterns: [
      {
        protocol: "https",
      },
    ],
  },
  integrations: [keystatic(), markdoc(), react(), sitemap(), tailwind()],
});
