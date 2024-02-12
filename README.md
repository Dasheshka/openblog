## 📌 Table Of Contents

1. [CMS](#-Tina-CMS)
2. [Stack](#-Stack)
3. [Running locally](#-Running-Locally)
4. [Configure](#-Configure)
5. [Categories](#-Adding-a-category)
6. [Posts](#-Adding-a-post-from-the-code)
7. [Draft](#-Activating-draft-mode-from-the-code)
8. [Frontmatter](#-Frontmatter)
9. [CLI](#-Commands)

## 🦙 Tina CMS

This project uses [Tina CMS](https://tina.io/).

## ⚙️ Stack

- [**ASTRO** + **Typescript**](https://astro.build/) - Astro is the all-in-one web framework designed for speed
- [**Tailwind CSS** + **Tailwind-Merge** + **clsx**](https://tailwindcss.com/) - Tailwind CSS is a utility-first CSS framework
- [**Tabler Icons**](https://tabler-icons.io/i/) - A open source SVG icons
- [**Eslint**](https://eslint.org/) - ESLint is an open source project that helps you find and fix problems
- [**Prettier**](https://prettier.io/) - Code formatter
- [**Search Library**](https://pagefind.app/) - Static search library integration
- [**Motion**](https://motion.dev/) - Motion One is the smallest fully-featured animation library for the web
- [**Tina CMS**](https://tina.io/) - CMS

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

## 📐 Configure

- Edit the configuration file **src/data/site.config.ts** for the basic blog metadata.
- Update the **astro.config.mjs** file at the root of the project with your own domain.
- Modify the files in the **/public** folder:
  - favicon
  - robots.txt -> update the Sitemap url to your own domain
  - open-graph -> the open-graph is the image that will be displayed when sharing the blog link. For posts, the preview image is the post cover.
- Edit the social networks in the Header component - **src/components/Header.astro**, change the URL to your social network.

## 🗂️ Adding a category

To add a new category to your blog, simply go to the src/data/categories.ts file and add it to the array.

Example:

```ts
export  const  CATEGORIES  =  [
'Category 1',
'Category 2',
'<New category>'  <---
]  as  const
```

> 🚨 Zod checks whether the category is not correctly written or does not exist in the properties of the markdown document. **It will throw an error when building the application.** 🚨

## 📄 Adding a post from the code

Adding a post is as simple as adding a .md or .mdx file to the blog folder at the path **src/content/blog**. The filename will be used to create the slug/URL of the page.

For example, if you have a file named **my-new-post.md**, it will be transformed into: **http://yourdomain.com/post/my-new-post/**

## 📝 Activating draft mode from the code

To activate draft mode, add the property **draft: true** to the file, and it will no longer be displayed on the blog.

Example :

```ts
title: MacBook Pro 2022
description: 'The new MacBook Pro 2022 is here. With the Apple M2 chip, a new design, and more, the new MacBook Pro is the best laptop Apple has ever made.'
pubDate: 'Jul 02 2022'
heroImage: '/src/assets/bg.jpg'
category: 'Hardware'
tags: ['Apple']
draft: true <---
```

## [⚡️ Frontmatter](https://docs.astro.build/en/basics/astro-components/#the-component-script)

### Required properties:

- Title
- Description
- pubDate
- heroImage (post cover)
- category (Choose a category from src/data/categories.ts)

### Optional properties:

- draft (no need to include it, by default it's false)
- tags

> The schema for posts is located at src/content/config.ts. You can modify any parameter, for example, by adding a maximum of 80 characters for titles: title: z.string().max(80).
> For more information, refer to the Zod documentation.

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command             | Action                                                                                                                          |
| :------------------ | :------------------------------------------------------------------------------------------------------------------------------ |
| `pnpm install`      | Installs dependencies                                                                                                           |
| `pnpm dev`          | Starts local dev server at `localhost:4321`                                                                                     |
| `pnpm build`        | Build your production site to `./dist/`                                                                                         |
| `pnpm preview`      | Preview your build locally, before deploying                                                                                    |
| `pnpm format:check` | Check code format with Prettier                                                                                                 |
| `pnpm format`       | Format codes with Prettier                                                                                                      |
| `pnpm sync`         | Generates TypeScript types for all Astro modules. [Learn more](https://docs.astro.build/en/reference/cli-reference/#astro-sync) |
| `pnpm lint`         | Lint with ESLint                                                                                                                |
