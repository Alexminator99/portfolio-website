import { defineCollection } from 'astro:content';
import { z } from 'astro/zod';
import { file } from 'astro/loaders';

/**
 * Projects and experience are the source of truth for the portfolio.
 * Add or edit an entry in src/data/*.json — schema-validated at build time.
 */
const projects = defineCollection({
  loader: file('src/data/projects.json'),
  schema: z.object({
    name: z.string(),
    company: z.string(),
    description: z.string(),
    links: z
      .object({
        appStore: z.url().optional(),
        playStore: z.url().optional(),
        web: z.url().optional(),
      })
      .default({}),
    order: z.number().default(99),
  }),
});

const experience = defineCollection({
  loader: file('src/data/experience.json'),
  schema: z.object({
    company: z.string(),
    role: z.string(),
    dateRange: z.string(),
    location: z.string(),
    description: z.string(),
    tags: z.array(z.string()).default([]),
    current: z.boolean().default(false),
    order: z.number(),
  }),
});

export const collections = { projects, experience };
