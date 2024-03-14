import { t } from "@/utils";
import { fields, singleton } from "@keystatic/core";

export const uiAdmin = singleton({
  label: t("admin.translations.ui-admin.label"),
  path: "src/i18n/ui-admin",
  format: { data: "json" },
  schema: {
    "navigation.collections": fields.text({
      label: "Navigation: Collections",
      validation: { length: { min: 1, max: 255 } },
    }),
  },
});
