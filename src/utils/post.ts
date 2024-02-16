import { CATEGORIES } from "@/data/categories";
import { getCollection } from "astro:content";

export const getCategories = async () => {
  const posts = await getCollection("blog");
  const categoriesValues = new Set(posts.map((post) => post.data.category));
  const categoriesValuesArray = Array.from(categoriesValues);
  let categoriesLabelsArray: { label: string; value: string }[] = [];

  categoriesValuesArray.forEach((val) => {
    CATEGORIES.forEach((category) => {
      if (category.value === val) {
        categoriesLabelsArray.push(category);
      }
    });
  });

  return categoriesLabelsArray;
};

export const getPosts = async (max?: number) => {
  return (await getCollection("blog"))
    .filter((post) => !post.data.draft)
    .sort((a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf())
    .slice(0, max);
};

export const getTags = async () => {
  const posts = await getCollection("blog");
  const tags = new Set();
  posts.forEach((post) => {
    if (post.data.tags) {
      post.data.tags.forEach((tag) => {
        tags.add(tag.toLowerCase());
      });
    }
  });

  return Array.from(tags);
};

export const getPostByTag = async (tag: string) => {
  const posts = await getPosts();
  const lowercaseTag = tag.toLowerCase();
  return posts.filter((post) => {
    return post.data.tags && post.data.tags.some((postTag) => postTag.toLowerCase() === lowercaseTag);
  });
};

export const filterPostsByCategory = async (category: { label: string; value: string }) => {
  const posts = await getPosts();
  return posts.filter((post) => post.data.category === category.value);
};
