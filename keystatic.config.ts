import { configs } from "@/configs";
import { schemas } from "@/schemas";
import { t } from "@/utils";
import { config } from "@keystatic/core";

const { categories, postPage, posts, postsGrid, tags, website } = schemas;

export default config({
  // @ts-ignore
  locale: configs.website.lang,
  storage: {
    kind: "local",
  },
  ui: {
    brand: { name: configs.website.title },
    navigation: {
      [t("admin.navigation.collections")]: ["posts", "categories", "tags"],
      [t("admin.navigation.configuration")]: [
        "website",
        "postsGrid",
        "postPage",
      ],
    },
  },
  collections: {
    posts,
    categories,
    tags,
  },
  singletons: {
    website,
    postsGrid,
    postPage,
  },
});
