import express, { Request, Response } from 'express';
import { validateLogin } from '../validators/auth.js';
import { findUserByUsername } from '../utils/db.js';

const router = express.Router();

router.post('/login', async (req: Request, res: Response) => {
  try {
    // TODO: Validate request body using validateLogin()
    // Hint: It returns a result with success/error
    // TODO: If validation fails, return 400 status with error message
    // Hint: res.status(400).json({ error: 'Validation failed', details: ... })
    // TODO: Extract username and password from validated data
    // TODO: Find user in database using findUserByUsername()
    // TODO: If user not found, return 401 status with 'Invalid credentials'
    // TODO: Check if password matches
    // Hint: Compare user.password with the password from request
    // If they don't match, return 401 with 'Invalid credentials'
    // TODO: Remove password from user object before sending response
    // Hint: Use destructuring: const { password, ...userWithoutPassword } = user
    // TODO: Return 200 status with success message and user data (without password)
    // Hint: res.status(200).json({ message: 'Login successful', user: ... })
  } catch (error) {
    // TODO: Handle errors - log and return 500 status
    console.error('Login error:', error);
    res.status(500).json({
      error: 'Internal server error',
    });
  }
});

export default router;
