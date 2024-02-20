/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");
const plugin = require("tailwindcss/plugin");

module.exports = {
  darkMode: "class",
  content: ["./src/**/*.{astro,html,js,jsx,ts,tsx,md,mdoc,mdx}"],
  theme: {
    extend: {
      fontFamily: {
        body: ["Manrope", ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [
    plugin(({ addBase }) => {
      addBase({
        "@font-face": {
          fontFamily: "Manrope",
          fontStyle: "normal",
          fontWeight: 200,
          display: "swap",
          src: 'url("/fonts/Manrope-ExtraLight.woff2") format("woff2")',
        },
        "@font-face": {
          fontFamily: "Manrope",
          fontStyle: "normal",
          fontWeight: 300,
          display: "swap",
          src: 'url("/fonts/Manrope-Light.woff2") format("woff2")',
        },
        "@font-face": {
          fontFamily: "Manrope",
          fontStyle: "normal",
          fontWeight: 400,
          display: "swap",
          src: 'url("/fonts/Manrope-Regular.woff2") format("woff2")',
        },
        "@font-face": {
          fontFamily: "Manrope",
          fontStyle: "normal",
          fontWeight: 500,
          display: "swap",
          src: 'url("/fonts/Manrope-Medium.woff2") format("woff2")',
        },
        "@font-face": {
          fontFamily: "Manrope",
          fontStyle: "normal",
          fontWeight: 600,
          display: "swap",
          src: 'url("/fonts/Manrope-SemiBold.woff2") format("woff2")',
        },
        "@font-face": {
          fontFamily: "Manrope",
          fontStyle: "normal",
          fontWeight: 700,
          display: "swap",
          src: 'url("/fonts/Manrope-Bold.woff2") format("woff2")',
        },
        "@font-face": {
          fontFamily: "Manrope",
          fontStyle: "normal",
          fontWeight: 800,
          display: "swap",
          src: 'url("/fonts/Manrope-ExtraBold.woff2") format("woff2")',
        },
      });
    }),
    require("@tailwindcss/typography"),
  ],
};
