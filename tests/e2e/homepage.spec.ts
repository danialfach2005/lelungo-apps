import { test, expect } from '@playwright/test';

test.describe('Homepage Load', () => {
  test('should load without console errors and hero section is visible', async ({ page }) => {
    const errors: string[] = [];
    page.on('pageerror', (err) => errors.push(err.message));
    page.on('console', (msg) => {
      if (msg.type() === 'error' && !msg.text().includes('404') && !msg.text().includes('Failed to load resource')) {
        errors.push(msg.text());
      }
    });

    await page.goto('/');

    // Ensure no console errors
    expect(errors).toHaveLength(0);

    // Ensure hero section visible
    const heading = page.locator('h1');
    await expect(heading).toBeVisible();
    
    const searchDeals = page.getByText('Search Deals').first();
    await expect(searchDeals).toBeVisible();
  });
});
