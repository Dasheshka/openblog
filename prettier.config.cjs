/** @type {import("prettier").Config} */
module.exports = {
  ...require("prettier-config-standard"),
  jsxSingleQuote: false,
  printWidth: 120,
  semi: true,
  singleQuote: false,
  tabWidth: 2,
  useTabs: false,
  plugins: [require.resolve("prettier-plugin-astro")],
  overrides: [
    {
      files: "*.astro",
      options: {
        parser: "astro"
      }
    },
    {
      files: "*.mdoc",
      options: {
        parser: "mdx"
      }
    }
  ]
};
