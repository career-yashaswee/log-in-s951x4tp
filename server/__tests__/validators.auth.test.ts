import { validateLogin } from '../validators/auth.js';

describe('Login Validation', () => {
  test('should validate correct login data', () => {
    const validData = {
      username: 'testuser',
      password: 'password123',
    };

    const result = validateLogin(validData);
    expect(result.success).toBe(true);
    if (result.success) {
      expect(result.data.username).toBe('testuser');
      expect(result.data.password).toBe('password123');
    }
  });

  test('should reject empty username', () => {
    const invalidData = {
      username: '',
      password: 'password123',
    };

    const result = validateLogin(invalidData);
    expect(result.success).toBe(false);
  });

  test('should reject empty password', () => {
    const invalidData = {
      username: 'testuser',
      password: '',
    };

    const result = validateLogin(invalidData);
    expect(result.success).toBe(false);
  });

  test('should reject missing username', () => {
    const invalidData = {
      password: 'password123',
    };

    const result = validateLogin(invalidData);
    expect(result.success).toBe(false);
  });

  test('should reject missing password', () => {
    const invalidData = {
      username: 'testuser',
    };

    const result = validateLogin(invalidData);
    expect(result.success).toBe(false);
  });
});
