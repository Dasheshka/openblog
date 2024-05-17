import { component, defineMarkdocConfig, nodes } from "@astrojs/markdoc/config";
import shiki from "@astrojs/markdoc/shiki";

export default defineMarkdocConfig({
  extends: [
    shiki({
      theme: "material-theme-ocean",
      wrap: true,
    }),
  ],
  nodes: {
    document: {
      ...nodes.document,
      render: null,
    },
  },
  tags: {
    CloudImage: {
      render: component("./src/components/CloudImage.astro"),
      attributes: {
        src: { type: String },
      },
    },
  },
});
