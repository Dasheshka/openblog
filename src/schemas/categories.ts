import { t } from "@/utils";
import { collection, fields } from "@keystatic/core";

export const categories = collection({
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
});
