import { getCategories, getTags } from "@/lib/content";
import { collection, config, fields } from "@keystatic/core";

const categories = await getCategories();
const CATEGORIES = categories.map((category) => ({
  label: category.data.title,
  value: category.id.replace(/\/index$/, ""),
}));

const tags = await getTags();
const TAGS = tags.map((tag) => ({
  label: tag.data.title,
  value: tag.id.replace(/\/index$/, ""),
}));

export default config({
  storage: {
    kind: "local",
  },
  collections: {
    categories: collection({
      label: "Categories",
      path: "src/content/categories/*/",
      slugField: "title",
      schema: {
        title: fields.slug({
          name: {
            label: "Title",
            validation: { length: { min: 3, max: 255 } },
          },
          slug: {
            label: "SEO-friendly slug",
            description: "This will define the file/folder name for this entry",
          },
        }),
      },
    }),
    posts: collection({
      label: "Posts",
      path: "src/content/posts/*/",
      slugField: "title",
      format: { contentField: "body" },
      schema: {
        title: fields.slug({
          name: {
            label: "Title",
            validation: { length: { min: 3, max: 255 } },
          },
          slug: {
            label: "SEO-friendly slug",
            description: "This will define the file/folder name for this entry",
          },
        }),
        description: fields.text({
          label: "Description",
          description: "A short description of the post or an excerpt",
          validation: { length: { min: 3, max: 255 } },
        }),
        coverImage: fields.image({
          label: "Cover Image",
          directory: "src/assets/images",
          publicPath: "/src/assets/images/",
          validation: {
            isRequired: true,
          },
        }),
        category: fields.select({
          label: "Category",
          options: CATEGORIES,
          defaultValue: CATEGORIES[0].value,
        }),
        tags: fields.multiselect({
          label: "Tags",
          options: TAGS,
        }),
        pubDate: fields.date({
          label: "Publication Date",
          defaultValue: {
            kind: "today",
          },
          validation: {
            isRequired: true,
          },
        }),
        draft: fields.checkbox({
          label: "Draft",
          description:
            "The post will not be published and will not be visible on the website, if this is checked",
        }),
        body: fields.document({
          label: "Body",
          dividers: true,
          formatting: {
            alignment: true,
            blockTypes: true,
            headingLevels: [2, 3, 4, 5, 6],
            inlineMarks: true,
            listTypes: true,
            softBreaks: true,
          },
          images: true,
          links: true,
          tables: true,
        }),
      },
    }),
    tags: collection({
      label: "Tags",
      path: "src/content/tags/*/",
      slugField: "title",
      schema: {
        title: fields.slug({
          name: {
            label: "Title",
            validation: { length: { min: 3, max: 255 } },
          },
          slug: {
            label: "SEO-friendly slug",
            description: "This will define the file/folder name for this entry",
          },
        }),
      },
    }),
  },
});
