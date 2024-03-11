import { defineCollection, z } from "astro:content";

const categories = defineCollection({
  type: "data",
  schema: () =>
    z.object({
      title: z.string(),
    }),
});

const posts = defineCollection({
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      description: z.string(),
      coverImage: image(),
      category: z.string(),
      tags: z.array(z.string()),
      pubDate: z
        .string()
        .or(z.date())
        .transform((val) => new Date(val)),
      draft: z.boolean().default(false),
    }),
});

const tags = defineCollection({
  type: "data",
  schema: () =>
    z.object({
      title: z.string(),
    }),
});

export const collections = { categories, posts, tags };
