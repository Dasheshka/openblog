import { defineMarkdocConfig, nodes } from "@astrojs/markdoc/config";
import shiki from "@astrojs/markdoc/shiki";

export default defineMarkdocConfig({
  extends: [
    shiki({
      theme: "material-theme-ocean",
      wrap: true
    })
  ],
  nodes: {
    document: {
      ...nodes.document,
      render: null
    }
  }
});
