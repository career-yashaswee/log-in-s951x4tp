import { z } from 'zod';

// TODO: Create a Zod schema for login validation
// The schema should validate:
// - username: string, minimum 1 character (required)
// - password: string, minimum 1 character (required)
// Hint: Use z.object() with z.string().min()

export const loginSchema = z.object({
  // TODO: Add username validation
  // TODO: Add password validation
});

export const validateLogin = (data: unknown) => {
  // TODO: Use the schema to validate the data
  // Hint: Use safeParse() method
  // Return the result
  return loginSchema.safeParse(data);
};
