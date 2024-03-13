import { t } from "@/utils";
import { fields, singleton } from "@keystatic/core";

export const postsGrid = singleton({
  label: t("admin.settings.posts-grid.label"),
  path: "src/configs/postsGrid.config",
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
    coverImageAspect: fields.select({
      label: t("admin.settings.posts-grid.cover-image-aspect"),
      options: [
        { label: "16:9", value: "aspect-video" },
        { label: "4:3", value: "aspect-[4/3]" },
        { label: "2:1", value: "aspect-[2/1]" },
        { label: "1:1", value: "aspect-square" },
        { label: "auto", value: "aspect-auto" },
      ],
      defaultValue: "aspect-video",
    }),
    coverImageWidth: fields.integer({
      label: t("admin.settings.posts-grid.cover-image-width"),
      defaultValue: 700,
      validation: {
        min: 150,
        max: 7680,
      },
    }),
    coverImageHeight: fields.integer({
      label: t("admin.settings.posts-grid.cover-image-height"),
      defaultValue: 394,
      validation: {
        min: 150,
        max: 7680,
      },
    }),
    coverImageQuality: fields.integer({
      label: t("admin.settings.posts-grid.cover-image-quality"),
      defaultValue: 100,
      validation: {
        min: 10,
        max: 100,
      },
    }),
  },
});
