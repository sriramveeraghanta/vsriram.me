import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const writing = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/writing' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    publishedAt: z.coerce.date(),
    updatedAt: z.coerce.date().optional(),
    draft: z.boolean().default(false),
    tags: z.array(z.string()).default([]),
  }),
});

const work = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/work' }),
  schema: z.object({
    company: z.string(),
    role: z.string(),
    startDate: z.string().regex(/^\d{4}-\d{2}$/, 'Expected YYYY-MM'),
    endDate: z
      .string()
      .regex(/^\d{4}-\d{2}$/, 'Expected YYYY-MM or null')
      .nullable()
      .default(null),
    location: z.string().optional(),
    url: z.string().url().optional(),
    order: z.number().int(),
  }),
});

const playlists = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/playlists' }),
  schema: z.object({
    title: z.string(),
    spotifyId: z.string().min(10),
    description: z.string().optional(),
    addedAt: z.coerce.date(),
  }),
});

export const collections = { writing, work, playlists };
