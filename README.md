## 📌 Table Of Contents

1. [Running locally](#-running-Locally)
2. [Stack](#%EF%B8%8F-stack)
3. [Configure](#-configure)

## 👨🏻‍💻 Running locally

**Recommended extensions for VSCode:**

- [Tailwind CSS IntelliSense](https://marketplace.visualstudio.com/items?itemName=bradlc.vscode-tailwindcss)
- [Astro](https://marketplace.visualstudio.com/items?itemName=astro-build.astro-vscode)

0. Install [pnpm](https://pnpm.io/)

1. Clone the repository:

```bash
git clone git@github.com:blueambr/openblog.git
```

2. Install dependencies:

```bash
pnpm install
```

3. Run the development server:

```bash
pnpm dev
```

## ⚙️ Stack

- [**ASTRO** + **Typescript**](https://astro.build/) - Astro is the all-in-one web framework designed for speed
- [**Tailwind CSS** + **Tailwind-Merge** + **clsx**](https://tailwindcss.com/) - Tailwind CSS is a utility-first CSS framework
- [**Tabler Icons**](https://tabler-icons.io/i/) - A open source SVG icons
- [**Eslint**](https://eslint.org/) - ESLint is an open source project that helps you find and fix problems
- [**Prettier**](https://prettier.io/) - Code formatter
- [**Search Library**](https://pagefind.app/) - Static search library integration
- [**Motion**](https://motion.dev/) - Motion One is the smallest fully-featured animation library for the web

## 📐 Configure

- Edit the configuration file **src/data/site.config.ts** for the basic blog metadata
- Update the **astro.config.mjs** file at the root of the project with your own domain
- Modify the files in the **/public** folder:
  - favicon
  - robots.txt -> update the Sitemap url to your own domain
  - open-graph -> the open-graph is the image that will be displayed when sharing the blog link. For posts, the preview image is the post cover
- Edit the social networks in the Header component - **src/components/Header.astro**, change the URL to your social network

## Colors

- slate-50
- slate-950
- pink-500
- violet-500
- violet-900

## TODO

- Bugs in prod: details in Safari, Pagefind not working
- PhotoSwipe for RTE + check RTE for cloud images
- Do something about articles preview
- Deploy to Vercel, test RSS, test everything
