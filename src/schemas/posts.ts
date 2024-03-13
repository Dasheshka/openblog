import { getCategories, getTags } from "@/lib/content";
import { t } from "@/utils";
import { collection, fields } from "@keystatic/core";

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

export const posts = collection({
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
});
