import { defineCollection, z } from "astro:content";

const posts = defineCollection({
  schema: ({ image }) =>
    z.object({
      title: z.string().max(80),
      description: z.string(),
      coverImage: image(),
      category: z.string(),
      tags: z.array(z.string()).optional(),
      pubDate: z
        .string()
        .or(z.date())
        .transform((val) => new Date(val)),
      draft: z.boolean().default(false),
    }),
});

export const collections = { posts };
