import { configs } from "@/configs";
import { getCategories, getTags } from "@/lib/content";
import { t } from "@/utils";
import { collection, config, fields, singleton } from "@keystatic/core";

const categories = await getCategories();
const CATEGORIES = categories.length
  ? categories.map((category) => ({
      label: category.data.title,
      value: category.id,
    }))
  : [];

const tags = await getTags();
const TAGS = tags.length
  ? tags.map((tag) => ({
      label: tag.data.title,
      value: tag.id,
    }))
  : null;

export default config({
  // @ts-ignore
  locale: configs.website.lang,
  storage: {
    kind: "local",
  },
  ui: {
    brand: { name: configs.website.title },
    navigation: {
      [t("admin.navigation.collections")]: ["posts", "categories", "tags"],
      [t("admin.navigation.configuration")]: [
        "settingsWebsite",
        "settingsPostsGrid",
        "settingsPostPage",
      ],
    },
  },
  collections: {
    posts: collection({
      label: t("admin.posts.label"),
      path: "src/content/posts/*",
      slugField: "title",
      columns: ["title", "pubDate"],
      format: { contentField: "body" },
      entryLayout: "content",
      schema: {
        title: fields.slug({
          name: {
            label: t("admin.posts.title"),
            validation: { length: { min: 1, max: 255 } },
          },
          slug: {
            label: t("admin.slug.label"),
            description: t("admin.slug.description"),
          },
        }),
        draft: fields.checkbox({
          label: t("admin.posts.draft.label"),
          description: t("admin.posts.draft.description"),
        }),
        description: fields.text({
          label: t("admin.posts.description.label"),
          description: t("admin.posts.description.description"),
          validation: { length: { min: 1, max: 255 } },
        }),
        coverImage: fields.url({
          label: t("admin.posts.cover-image.label"),
          description: t("admin.posts.cover-image.description"),
          validation: {
            isRequired: true,
          },
        }),
        pubDate: fields.date({
          label: t("admin.posts.pub-date"),
          defaultValue: {
            kind: "today",
          },
          validation: {
            isRequired: true,
          },
        }),
        category: fields.select({
          label: t("admin.posts.category"),
          options: [{ label: t("no-category"), value: "p" }, ...CATEGORIES],
          defaultValue: "p",
        }),
        tags: TAGS
          ? fields.multiselect({
              label: t("admin.posts.tags"),
              options: TAGS,
            })
          : fields.empty(),
        body: fields.markdoc({
          label: t("admin.posts.body"),
          options: {
            heading: [2, 3, 4, 5, 6],
          },
        }),
      },
    }),
    categories: collection({
      label: t("admin.categories.label"),
      path: "src/content/categories/*",
      slugField: "title",
      columns: ["title"],
      schema: {
        title: fields.slug({
          name: {
            label: t("admin.categories.title"),
            validation: { length: { min: 1, max: 255 } },
          },
          slug: {
            label: t("admin.slug.label"),
            description: t("admin.slug.description"),
          },
        }),
      },
    }),
    tags: collection({
      label: t("admin.tags.label"),
      path: "src/content/tags/*",
      slugField: "title",
      columns: ["title"],
      schema: {
        title: fields.slug({
          name: {
            label: t("admin.tags.title"),
            validation: { length: { min: 1, max: 255 } },
          },
          slug: {
            label: t("admin.slug.label"),
            description: t("admin.slug.description"),
          },
        }),
      },
    }),
  },
  singletons: {
    settingsWebsite: singleton({
      label: t("admin.settings.website.label"),
      path: "src/configuration/website.config",
      format: { data: "json" },
      schema: {
        lang: fields.text({
          label: t("admin.settings.lang.label"),
          description: t("admin.settings.lang.description"),
          validation: { length: { min: 1, max: 255 } },
        }),
        title: fields.text({
          label: t("admin.settings.title"),
          validation: { length: { min: 1, max: 255 } },
        }),
        description: fields.text({
          label: t("admin.settings.description"),
          validation: { length: { min: 1, max: 255 } },
        }),
        author: fields.text({
          label: t("admin.settings.author"),
          validation: { length: { min: 1, max: 255 } },
        }),
        favicon: fields.image({
          label: t("admin.settings.favicon.label"),
          description: t("admin.settings.favicon.description"),
          directory: "public",
          publicPath: "/",
          validation: { isRequired: true },
        }),
        ogImage: fields.image({
          label: t("admin.settings.og-image.label"),
          description: t("admin.settings.og-image.description"),
          directory: "public",
          publicPath: "/",
          validation: { isRequired: true },
        }),
      },
    }),
    settingsPostsGrid: singleton({
      label: t("admin.settings.posts-grid.label"),
      path: "src/configuration/postsGrid.config",
      format: { data: "json" },
      schema: {
        postsPerPage: fields.integer({
          label: t("admin.settings.posts-grid.posts-per-page"),
          defaultValue: 6,
          validation: {
            min: 6,
            max: 60,
          },
        }),
        postsGridCoverImageAspectRatio: fields.select({
          label: t("admin.settings.posts-grid.aspect-ratio"),
          options: [
            { label: "16:9", value: "aspect-video" },
            { label: "4:3", value: "aspect-[4/3]" },
            { label: "2:1", value: "aspect-[2/1]" },
            { label: "1:1", value: "aspect-square" },
            { label: "auto", value: "aspect-auto" },
          ],
          defaultValue: "aspect-video",
        }),
        postsGridCoverImageWidth: fields.integer({
          label: t("admin.settings.posts-grid.width"),
          defaultValue: 700,
          validation: {
            min: 150,
            max: 7680,
          },
        }),
        postsGridCoverImageHeight: fields.integer({
          label: t("admin.settings.posts-grid.height"),
          defaultValue: 394,
          validation: {
            min: 150,
            max: 7680,
          },
        }),
        postsGridCoverImageQuality: fields.integer({
          label: t("admin.settings.posts-grid.quality"),
          defaultValue: 100,
          validation: {
            min: 10,
            max: 100,
          },
        }),
      },
    }),
    settingsPostPage: singleton({
      label: t("admin.settings.post-page.label"),
      path: "src/configuration/postPage.config",
      format: { data: "json" },
      schema: {
        relatedPosts: fields.integer({
          label: t("admin.settings.post-page.related-posts"),
          defaultValue: 3,
          validation: {
            min: 3,
            max: 9,
          },
        }),
        postPageCoverImageAspectRatio: fields.select({
          label: t("admin.settings.post-page.aspect-ratio"),
          options: [
            { label: "16:9", value: "aspect-video" },
            { label: "4:3", value: "aspect-[4/3]" },
            { label: "2:1", value: "aspect-[2/1]" },
            { label: "1:1", value: "aspect-square" },
            { label: "auto", value: "aspect-auto" },
          ],
          defaultValue: "aspect-[2/1]",
        }),
        postPageCoverImageWidth: fields.integer({
          label: t("admin.settings.post-page.width"),
          defaultValue: 1000,
          validation: {
            min: 150,
            max: 7680,
          },
        }),
        postPageCoverImageHeight: fields.integer({
          label: t("admin.settings.post-page.height"),
          defaultValue: 500,
          validation: {
            min: 150,
            max: 7680,
          },
        }),
        postPageCoverImageQuality: fields.integer({
          label: t("admin.settings.post-page.quality"),
          defaultValue: 100,
          validation: {
            min: 10,
            max: 100,
          },
        }),
      },
    }),
  },
});
