import { getCollection } from "astro:content";

export const getCategories = async () =>
  (await getCollection("categories"))
    .sort((a, b) => a.data.title.localeCompare(b.data.title))
    .slice(0);

export const getPosts = async (max?: number) =>
  (await getCollection("posts"))
    .filter((post) => !post.data.draft)
    .sort((a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf())
    .slice(0, max);

export const getTags = async () =>
  (await getCollection("tags"))
    .sort((a, b) => a.data.title.localeCompare(b.data.title))
    .slice(0);

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
