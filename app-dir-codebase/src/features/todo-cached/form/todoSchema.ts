import { z } from "zod";

export const TodoFormSchema = z.object({
  name: z.string().min(4),
  description: z.string(),
});
