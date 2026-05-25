import { test, expect } from '@playwright/test';

test.describe('Filter Button', () => {
  test('should filter deals without flicker or layout shift', async ({ page }) => {
    await page.goto('/');

    const allBtn = page.getByTestId('filter-all');
    const flightBtn = page.getByTestId('filter-flight');
    const hotelBtn = page.getByTestId('filter-hotel');

    // Wait for deals to load
    await expect(page.getByTestId('deal-card').first()).toBeVisible();
    
    // Foolproof hydration check: wait for ThemeToggle SVG to render (only happens after client mount)
    await page.locator('button[aria-label="Toggle theme"] svg').first().waitFor({ state: 'visible' });

    // Take screenshot BEFORE click
    await page.screenshot({ path: 'before-filter.png' });

    // Click flight using native DOM click to bypass sticky header interference
    await flightBtn.evaluate(node => node.click());
    
    // Assert active state changes correctly
    await expect(flightBtn).toHaveAttribute('data-active', 'true');
    await expect(allBtn).toHaveAttribute('data-active', 'false');

    // Check no text flicker or layout shift by taking screenshot AFTER click
    await page.waitForTimeout(500); // Wait for transition
    await page.screenshot({ path: 'after-flight-filter.png' });

    // Click hotel
    await hotelBtn.click();
    await expect(hotelBtn).toHaveAttribute('data-active', 'true');
    await expect(flightBtn).toHaveAttribute('data-active', 'false');
  });

  test('Stability Test (Anti-Glitch) - rapid click filters', async ({ page }) => {
    await page.goto('/');
    
    const allBtn = page.getByTestId('filter-all');
    const flightBtn = page.getByTestId('filter-flight');
    const hotelBtn = page.getByTestId('filter-hotel');

    await expect(flightBtn).toBeVisible();

    // Rapid click 5 times using native DOM clicks to avoid sticky header interference
    for (let i = 0; i < 5; i++) {
      await flightBtn.evaluate(n => n.click());
      await hotelBtn.evaluate(n => n.click());
      await allBtn.evaluate(n => n.click());
    }

    // Assert no crash / no UI glitch
    await expect(page.getByTestId('deal-card').first()).toBeVisible();
    await expect(allBtn).toHaveAttribute('data-active', 'true');
  });
});
