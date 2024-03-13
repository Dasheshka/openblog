import { configs } from "@/configs";
import rss from "@astrojs/rss";
import { getCollection } from "astro:content";

export async function get() {
  const posts = await getCollection("posts");
  return rss({
    title: configs.website.title,
    description: configs.website.description,
    site: import.meta.env.SITE,
    items: posts.map((post) => ({
      ...post.data,
      link: `${post.data.category}/${post.slug}/`,
    })),
  });
}
