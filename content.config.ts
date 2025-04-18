import { defineContentConfig, defineCollection, z } from '@nuxt/content';

export default defineContentConfig({
  collections: {
    docs: defineCollection({
      type: 'page',
      source: {
        include: 'docs/**',
        exclude: ['index.md'],
      },
      schema: z.object({
        links: z
          .array(
            z.object({
              label: z.string(),
              icon: z.string(),
              to: z.string(),
              target: z.string().optional(),
            })
          )
          .optional(),
      }),
    }),
    blog: defineCollection({
      type: 'page',
      source: 'blog/*.md',
      schema: z.object({
        category: z.string(),
        published: z.string(),
        readableDate: z.string(),
        timeToRead: z.number(),
        image: z.string(),
        title: z.string(),
        description: z.string(),
        author: z.string(),
        authorImage: z.string(),
      }),
    }),
  },
});
