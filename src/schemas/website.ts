import { t } from "@/utils";
import { fields, singleton } from "@keystatic/core";

export const website = singleton({
  label: t("ui-admin", "navigation.website.label"),
  path: "src/configs/website.config",
  format: { data: "json" },
  schema: {
    lang: fields.text({
      label: t("ui-admin", "website.lang.label"),
      description: t("ui-admin", "website.lang.description"),
      validation: { length: { min: 1, max: 255 } },
    }),
    title: fields.text({
      label: t("ui-admin", "website.title.label"),
      validation: { length: { min: 1, max: 255 } },
    }),
    description: fields.text({
      label: t("ui-admin", "website.description.label"),
      validation: { length: { min: 1, max: 255 } },
    }),
    author: fields.text({
      label: t("ui-admin", "website.author.label"),
      validation: { length: { min: 1, max: 255 } },
    }),
    favicon: fields.image({
      label: t("ui-admin", "website.favicon.label"),
      description: t("ui-admin", "website.favicon.description"),
      directory: "public",
      publicPath: "/",
      validation: { isRequired: true },
    }),
    ogImage: fields.image({
      label: t("ui-admin", "website.og-image.label"),
      description: t("ui-admin", "website.og-image.description"),
      directory: "public",
      publicPath: "/",
      validation: { isRequired: true },
    }),
  },
});
