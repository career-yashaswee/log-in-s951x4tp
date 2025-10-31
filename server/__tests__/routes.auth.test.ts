import request from 'supertest';
import express from 'express';
import cors from 'cors';
import authRoutes from '../routes/auth.js';
import fs from 'fs/promises';
import path from 'path';

// Use path.resolve with process.cwd() for Jest compatibility
const DB_PATH = path.resolve(process.cwd(), 'data/users.json');
const TEST_DB_PATH = path.resolve(process.cwd(), 'data/users.test.json');

// Create test app instance
function createTestApp() {
  const app = express();
  app.use(cors());
  app.use(express.json());
  app.use('/api/auth', authRoutes);
  return app;
}

describe('Auth Routes - Integration Tests', () => {
  beforeEach(async () => {
    // Backup original DB and create test data
    try {
      await fs.copyFile(DB_PATH, TEST_DB_PATH);
    } catch {
      // Original might not exist, continue
    }

    // Create test users
    const testUsers = [
      {
        username: 'testuser',
        password: 'password123',
        id: '1',
      },
      {
        username: 'demo',
        password: 'demo123',
        id: '2',
      },
    ];

    await fs.writeFile(DB_PATH, JSON.stringify(testUsers, null, 2));
  });

  afterEach(async () => {
    // Restore original DB
    try {
      await fs.copyFile(TEST_DB_PATH, DB_PATH);
      await fs.unlink(TEST_DB_PATH);
    } catch {
      // Restore default
      const defaultUsers = [
        {
          username: 'testuser',
          password: 'password123',
          id: '1',
        },
        {
          username: 'demo',
          password: 'demo123',
          id: '2',
        },
      ];
      await fs.writeFile(DB_PATH, JSON.stringify(defaultUsers, null, 2));
    }
  });

  test('POST /api/auth/login should return 200 for valid credentials', async () => {
    const app = createTestApp();
    const response = await request(app).post('/api/auth/login').send({
      username: 'testuser',
      password: 'password123',
    });

    expect(response.status).toBe(200);
    expect(response.body.message).toBe('Login successful');
    expect(response.body.user).toHaveProperty('username', 'testuser');
    expect(response.body.user).not.toHaveProperty('password');
  });

  test('POST /api/auth/login should return 401 for invalid password', async () => {
    const app = createTestApp();
    const response = await request(app).post('/api/auth/login').send({
      username: 'testuser',
      password: 'wrongpassword',
    });

    expect(response.status).toBe(401);
    expect(response.body.error).toBe('Invalid credentials');
  });

  test('POST /api/auth/login should return 401 for non-existent user', async () => {
    const app = createTestApp();
    const response = await request(app).post('/api/auth/login').send({
      username: 'nonexistent',
      password: 'password123',
    });

    expect(response.status).toBe(401);
    expect(response.body.error).toBe('Invalid credentials');
  });

  test('POST /api/auth/login should return 400 for missing username', async () => {
    const app = createTestApp();
    const response = await request(app).post('/api/auth/login').send({
      password: 'password123',
    });

    expect(response.status).toBe(400);
    expect(response.body.error).toBe('Validation failed');
  });

  test('POST /api/auth/login should return 400 for missing password', async () => {
    const app = createTestApp();
    const response = await request(app).post('/api/auth/login').send({
      username: 'testuser',
    });

    expect(response.status).toBe(400);
    expect(response.body.error).toBe('Validation failed');
  });

  test('POST /api/auth/login should handle CORS preflight', async () => {
    const app = createTestApp();
    const response = await request(app)
      .options('/api/auth/login')
      .set('Origin', 'http://localhost:5173');

    // CORS should allow the request
    expect(response.status).toBeLessThan(400);
  });
});
