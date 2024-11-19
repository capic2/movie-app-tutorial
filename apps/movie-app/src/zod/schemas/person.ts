import { z } from 'zod';
import { createResponseSchema } from './common';

const popularPersonSchema = z.object({
  adult: z.boolean(),
  gender: z.number(),
  id: z.number(),
  known_for_department: z.string(),
  name: z.string(),
  original_name: z.string(),
  popularity: z.number(),
  profile_path: z.string().nullable(),
  known_for: z.object({
      backdrop_path: z.string().nullable(),
      id: z.number(),
      title: z.string().optional(),
      original_title: z.string().optional(),
      overview: z.string(),
      poster_path: z.string(),
      media_type: z.string(),
      adult: z.boolean(),
      original_language: z.string(),
      genre_ids: z.number().array(),
      popularity: z.number(),
      release_date: z.string().optional(),
      video: z.boolean().optional(),
      vote_average: z.number(),
      vote_count: z.number(),
    })
    .array(),
});

export const popularPersonResponseSchema =
  createResponseSchema(popularPersonSchema);
export type PopularPersonResponse = z.infer<typeof popularPersonResponseSchema>;
