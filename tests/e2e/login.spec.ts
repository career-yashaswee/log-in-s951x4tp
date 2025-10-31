import { test, expect } from '@playwright/test';

test.describe('Login Flow', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/login');
  });

  test('should display login form', async ({ page }) => {
    await expect(page.getByText(/Login to your account/i)).toBeVisible();
    await expect(page.getByLabel(/Username/i)).toBeVisible();
    await expect(page.getByLabel(/Password/i)).toBeVisible();
    await expect(page.getByRole('button', { name: /^Login$/i })).toBeVisible();
  });

  test('should show error toast for invalid password', async ({ page }) => {
    await page.fill('input[type="text"]', 'testuser');
    await page.fill('input[type="password"]', 'wrongpassword');
    await page.click('button:has-text("Login")');

    // Wait for toast to appear
    await expect(
      page.locator('text=/Invalid credentials|Login failed/i')
    ).toBeVisible({ timeout: 5000 });

    // Should still be on login page
    await expect(page).toHaveURL(/.*login/);
  });

  test('should show error toast for non-existent user', async ({ page }) => {
    await page.fill('input[type="text"]', 'nonexistent');
    await page.fill('input[type="password"]', 'password123');
    await page.click('button:has-text("Login")');

    // Wait for toast to appear
    await expect(
      page.locator('text=/Invalid credentials|Login failed/i')
    ).toBeVisible({ timeout: 5000 });

    // Should still be on login page
    await expect(page).toHaveURL(/.*login/);
  });

  test('should redirect to dashboard on successful login', async ({ page }) => {
    await page.fill('input[type="text"]', 'testuser');
    await page.fill('input[type="password"]', 'password123');
    await page.click('button:has-text("Login")');

    // Wait for navigation to dashboard
    await expect(page).toHaveURL(/.*dashboard/, { timeout: 5000 });

    // Check dashboard content
    await expect(page.getByText(/Hi, testuser!/i)).toBeVisible();
  });

  test('should show loading state during login', async ({ page }) => {
    await page.fill('input[type="text"]', 'testuser');
    await page.fill('input[type="password"]', 'password123');

    // Click the login button
    await page.click('button:has-text("Login")');

    // Wait for the button text to change to "Logging in..."
    // This ensures we catch the loading state before navigation
    await expect(
      page.getByRole('button', { name: /Logging in.../i })
    ).toBeVisible({
      timeout: 1000,
    });

    // Then wait for navigation to complete
    await expect(page).toHaveURL(/.*dashboard/, { timeout: 5000 });
  });
});
