import { CATEGORIES, TAGS } from "@/data/sets";
import { getCollection } from "astro:content";

export const getPosts = async (max?: number) =>
  (await getCollection("posts"))
    .filter((post) => !post.data.draft)
    .sort((a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf())
    .slice(0, max);

export const getCategories = async () => {
  const posts = await getCollection("posts");
  const categories: Set<{ label: string; value: string }> = new Set();
  const categoriesValues = posts.map((post) => post.data.category);

  categoriesValues.forEach((value) => {
    CATEGORIES.forEach((category) => {
      if (category.value === value) {
        categories.add(category);
      }
    });
  });

  return Array.from(categories);
};

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

export const filterPostsByCategory = async (category: {
  label: string;
  value: string;
}) => {
  const posts = await getPosts();

  return posts.filter((post) => post.data.category === category.value);
};

export const getPostByTag = async (tag: { label: string; value: string }) => {
  const posts = await getPosts();

  return posts.filter((post) => {
    return (
      post.data.tags && post.data.tags.some((postTag) => postTag === tag.value)
    );
  });
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
