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
  await ensureDB();
  const data = await fs.readFile(DB_PATH, 'utf-8');
  return JSON.parse(data) as User[];
}

// Find user by username
export async function findUserByUsername(
  username: string
): Promise<User | undefined> {
  const users = await getAllUsers();
  return users.find((user) => user.username === username);
}

// Create a new user (bonus - not required for basic login)
export async function createUser(userData: User): Promise<User> {
  // TODO: Get all users
  // TODO: Add new user to the array
  // TODO: Write updated array back to file
  // TODO: Return the created user

  return userData;
}
