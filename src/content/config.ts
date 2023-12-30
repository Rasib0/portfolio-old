// Import utilities from `astro:content`
import { z, defineCollection } from "astro:content";

const postsCollection = defineCollection({
  type: "content",
  schema: z
    .object({
      title: z.string(),
      pubDate: z.date(),
      description: z.string(),
      author: z.string(),
      image: z.object({
        url: z.string(),
        alt: z.string(),
      }),
      tags: z.array(z.string()),
    })
    .strict(),
});

const projectCollection = defineCollection({
  type: "content",
  schema: z
    .object({
      title: z.string(),
      pubDate: z.date(),
      link: z.string().url(),
      repo: z.string().url(),
      description: z.string(),
      image: z.object({
        url: z.string(),
        alt: z.string(),
      }),
      tags: z.array(z.string()),
    })
    .strict(),
});

// Export a single `collections` object to register your collection(s)
export const collections = {
  posts: postsCollection,
  projects: projectCollection,
};
