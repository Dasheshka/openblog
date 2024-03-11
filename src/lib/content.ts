import { TAGS } from "@/data/sets";
import { getCollection } from "astro:content";

export const getPosts = async (max?: number) =>
  (await getCollection("posts"))
    .filter((post) => !post.data.draft)
    .sort((a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf())
    .slice(0, max);

export const getCategories = async () =>
  (await getCollection("categories"))
    .sort((a, b) => a.data.title.localeCompare(b.data.title))
    .slice(0);

export const getTags = async () => {
  const posts = await getCollection("posts");
  const tags: Set<{ label: string; value: string }> = new Set();

  posts.forEach((post) => {
    if (post.data.tags) {
      post.data.tags.forEach((value) => {
        TAGS.forEach((tag) => {
          if (tag.value === value) {
            tags.add(tag);
          }
        });
      });
    }
  });

  return Array.from(tags);
};

export const getRelatedPosts = async (
  slug: string,
  tags: string[],
  number: number = 3,
) => {
  const posts = await getPosts();

  const relatedPosts = posts.filter(
    (post) =>
      post.slug !== slug &&
      post.data.tags &&
      post.data.tags.some((t) => tags.includes(t)),
  );

  return relatedPosts.slice(0, number);
};
