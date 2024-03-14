import { t } from "@/utils";
import { fields, singleton } from "@keystatic/core";

export const uiWebsite = singleton({
  label: t("admin.translations.ui-website.label"),
  path: "src/i18n/ui-website",
  format: { data: "json" },
  schema: {
    "title.home": fields.text({
      label: "Title: Home",
      validation: { length: { min: 1, max: 255 } },
    }),
  },
});
