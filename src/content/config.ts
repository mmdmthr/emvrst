import { defineCollection, z } from 'astro:content';

const recipesCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    image: z.string(),
    tags: z.array(z.string()),
    difficulty: z.enum(['easy', 'medium', 'hard']),
    prepTime: z.string(),
    cookTime: z.string(),
    servings: z.number(),
    ingredients: z.array(z.string()),
    lang: z.enum(['en', 'id']).default('en'),
    nutrition: z.object({
      carbs: z.number(),
      protein: z.number(),
      fat: z.number(),
      calories: z.number(),
    }),
  })
});

export const collections = {
  recipes: recipesCollection,
};