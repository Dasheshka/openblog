import { CATEGORIESENUM } from '@/data/categories'
import { defineCollection, z } from 'astro:content'

const blog = defineCollection({
	// Type-check frontmatter using a schema
	schema: ({ image }) =>
		z.object({
			title: z.string().max(80),
			description: z.string(),
			heroImage: image(),
			category: z.enum(CATEGORIESENUM),
			tags: z.array(z.string()).optional(),
			// Transform string to Date object
			pubDate: z
				.string()
				.or(z.date())
				.transform((val) => new Date(val)),
			draft: z.boolean().default(false)
		})
})

export const collections = { blog }
