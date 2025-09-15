// src/content/config.ts
import { defineCollection, z } from "astro:content";

const guides = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    description: z.string().max(300),
    updated: z.string().optional(), // ISO date string
    tags: z.array(z.string()).default([]),
  }),
});

export const collections = { guides };
