import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";

const notes = defineCollection({
  loader: glob({ pattern: "**/index.md", base: "./src/content/notes" }),
  schema: z.object({
    title: z.string(),
    tags: z.array(z.string()).default([]),
    date: z.coerce.date(),
    description: z.string().optional(),
    draft: z.boolean().optional(),
  }),
});

export const collections = { notes };
