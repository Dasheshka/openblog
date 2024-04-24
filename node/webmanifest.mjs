import { readFileSync, writeFile } from "fs";
import { resolve } from "path";
const websiteConfig = JSON.parse(
  readFileSync(resolve("./src/configs/website.config.json")),
);

const path = resolve("./public/manifest.webmanifest");

const webmanifest = {
  name: websiteConfig.title,
  short_name: websiteConfig.title,
  display: "standalone",
  theme_color: websiteConfig.webmanifest.themeColor,
  background_color: websiteConfig.webmanifest.bgColor,
  icons: [
    {
      src: "/android-chrome-192x192.png",
      sizes: "192x192",
      type: "image/png",
    },
    {
      src: "/android-chrome-512x512.png",
      sizes: "512x512",
      type: "image/png",
    },
  ],
};

writeFile(path, JSON.stringify(webmanifest, null, 2), (error) => {
  if (error) {
    console.error("❌ Webmanifest creation failed:", error);

    return;
  }

  console.info("✅ Webmanifest created successfully:", path);
});
