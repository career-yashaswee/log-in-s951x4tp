import { z } from 'zod';

// TODO: Create a Zod schema for login validation
// The schema should validate:
// - username: string, minimum 1 character (required)
// - password: string, minimum 1 character (required)
// Hint: Use z.object() with z.string().min()

export const loginSchema = z.object({
  username: z.string().min(1, 'Username is required'),
  password: z.string().min(1, 'Password is required'),
});

export const validateLogin = (data: unknown) => {
  // TODO: Use the schema to validate the data
  // Hint: Use safeParse() method
  // Return the result
  return loginSchema.safeParse(data);
};
