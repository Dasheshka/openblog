import { t } from "@/utils";
import { collection, fields } from "@keystatic/core";

export const tags = collection({
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
});
