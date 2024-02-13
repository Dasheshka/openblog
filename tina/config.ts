import { defineConfig } from 'tinacms'
import { CATEGORIES } from '../src/data/categories.ts'

// Your hosting provider likely exposes this as an environment variable
const branch = process.env.HEAD || process.env.VERCEL_GIT_COMMIT_REF || 'main'

export default defineConfig({
	branch,
	clientId: null, // Get this from tina.io
	token: null, // Get this from tina.io
	build: {
		outputFolder: 'admin',
		publicFolder: 'public'
	},
	media: {
		tina: {
			mediaRoot: '/src/assets/images',
			publicFolder: ''
		}
	},
	schema: {
		collections: [
			{
				path: 'src/content/blog',
				format: 'mdx',
				name: 'post',
				label: 'Blog Posts',
				defaultItem: () => {
					return {
						pubDate: new Date()
					}
				},
				fields: [
					{
						type: 'string',
						required: true,
						isTitle: true,
						name: 'title',
						label: 'Title'
					},
					{
						type: 'string',
						required: true,
						name: 'description',
						label: 'Description',
						description: 'A short description of the post or an excerpt'
					},
					{
						type: 'image',
						required: true,
						name: 'heroImage',
						label: 'Cover Image'
					},
					{
						type: 'string',
						required: true,
						name: 'category',
						label: 'Category',
						options: [...CATEGORIES]
					},
					{
						type: 'string',
						list: true,
						name: 'tags',
						label: 'Tags',
						ui: {
							component: 'tags'
						}
					},
					{
						type: 'datetime',
						required: true,
						name: 'pubDate',
						label: 'Publication Date'
					},
					{
						type: 'boolean',
						name: 'draft',
						label: 'Draft',
						description:
							'The post will not be published and will not be visible on the website, if this is checked'
					},
					{
						type: 'rich-text',
						isBody: true,
						name: 'body',
						label: 'Body'
					}
				]
			}
		]
	}
})
