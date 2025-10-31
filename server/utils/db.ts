import fs from 'fs/promises';
import path from 'path';

// Path to the JSON database file
// This uses process.cwd() for compatibility with both ESM and Jest
const DB_PATH = path.resolve(process.cwd(), 'data/users.json');

export interface User {
  username: string;
  password: string;
  id: string;
}

// Initialize DB file if it doesn't exist
async function ensureDB(): Promise<void> {
  try {
    await fs.access(DB_PATH);
  } catch {
    // File doesn't exist, create it with empty array
    await fs.writeFile(DB_PATH, JSON.stringify([], null, 2), 'utf-8');
  }
}

// Read all users from the database
export async function getAllUsers(): Promise<User[]> {
  // TODO: Ensure DB exists (call ensureDB)

  // TODO: Read the file using fs.readFile
  // Hint: Use 'utf-8' encoding

  // TODO: Parse the JSON and return as User[]
  // Hint: JSON.parse()

  return [];
}

// Find user by username
export async function findUserByUsername(
  username: string
): Promise<User | undefined> {
  // TODO: Get all users
  // TODO: Use .find() to locate user with matching username
  // Return the user or undefined if not found

  return undefined;
}

// Create a new user (bonus - not required for basic login)
export async function createUser(userData: User): Promise<User> {
  // TODO: Get all users
  // TODO: Add new user to the array
  // TODO: Write updated array back to file
  // TODO: Return the created user

  return userData;
}
