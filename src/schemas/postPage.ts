import { t } from "@/utils";
import { fields, singleton } from "@keystatic/core";

export const postPage = singleton({
  label: t("admin.settings.post-page.label"),
  path: "src/configs/postPage.config",
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
    coverImageAspect: fields.select({
      label: t("admin.settings.post-page.cover-image-aspect"),
      options: [
        { label: "16:9", value: "aspect-video" },
        { label: "4:3", value: "aspect-[4/3]" },
        { label: "2:1", value: "aspect-[2/1]" },
        { label: "1:1", value: "aspect-square" },
        { label: "auto", value: "aspect-auto" },
      ],
      defaultValue: "aspect-[2/1]",
    }),
    coverImageWidth: fields.integer({
      label: t("admin.settings.post-page.cover-image-width"),
      defaultValue: 1000,
      validation: {
        min: 150,
        max: 7680,
      },
    }),
    coverImageHeight: fields.integer({
      label: t("admin.settings.post-page.cover-image-height"),
      defaultValue: 500,
      validation: {
        min: 150,
        max: 7680,
      },
    }),
    coverImageQuality: fields.integer({
      label: t("admin.settings.post-page.cover-image-quality"),
      defaultValue: 100,
      validation: {
        min: 10,
        max: 100,
      },
    }),
  },
});
