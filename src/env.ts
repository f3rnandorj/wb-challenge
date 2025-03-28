import { z } from "zod";

const envSchema = z.object({
  NEXT_PUBLIC_MODE: z.enum(["production", "development", "test"]),
});

export const env = envSchema.parse({
  NEXT_PUBLIC_MODE: process.env.NEXT_PUBLIC_MODE,
});
