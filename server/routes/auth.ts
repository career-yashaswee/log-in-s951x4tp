import express, { Request, Response } from 'express';
import { validateLogin } from '../validators/auth.js';
import { findUserByUsername } from '../utils/db.js';

const router = express.Router();

router.post('/login', async (req: Request, res: Response) => {
  try {
    // Validate request body with Zod
    const validation = validateLogin(req.body);

    if (!validation.success) {
      return res.status(400).json({
        error: 'Validation failed',
        details: validation.error.errors,
      });
    }

    const { username, password } = validation.data;

    // Find user in database
    const user = await findUserByUsername(username);

    if (!user) {
      return res.status(401).json({
        error: 'Invalid credentials',
      });
    }

    // Check password (simple comparison for now - no hashing for simplicity)
    if (user.password !== password) {
      return res.status(401).json({
        error: 'Invalid credentials',
      });
    }

    // Success - return user data (without password)
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { password: _, ...userWithoutPassword } = user;
    res.status(200).json({
      message: 'Login successful',
      user: userWithoutPassword,
    });
  } catch (error) {
    // TODO: Handle errors - log and return 500 status
    console.error('Login error:', error);
    res.status(500).json({
      error: 'Internal server error',
    });
  }
});

export default router;
