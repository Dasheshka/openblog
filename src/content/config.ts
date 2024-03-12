import { defineCollection, z } from "astro:content";

const categories = defineCollection({
  type: "data",
  schema: z.object({
    title: z.string(),
  }),
});

const posts = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    description: z.string(),
    coverImage: z.string(),
    category: z.string(),
    tags: z.array(z.string()).optional(),
    pubDate: z
      .string()
      .or(z.date())
      .transform((val) => new Date(val)),
    draft: z.boolean().default(false),
  }),
});

const tags = defineCollection({
  type: "data",
  schema: z.object({
    title: z.string(),
  }),
});

export const collections = { categories, posts, tags };
