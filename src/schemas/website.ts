import { t } from "@/utils";
import { fields, singleton } from "@keystatic/core";

export const website = singleton({
  label: t("admin.settings.website.label"),
  path: "src/configs/website.config",
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
});
