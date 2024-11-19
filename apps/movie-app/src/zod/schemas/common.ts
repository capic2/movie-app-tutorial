import { z } from 'zod';

export const createResponseSchema = <T extends z.ZodTypeAny>(schema: T) => {
  return z.object({
    page: z.number(),
    total_pages: z.number(),
    total_results: z.number(),
    results: schema.array(),
  });
};
