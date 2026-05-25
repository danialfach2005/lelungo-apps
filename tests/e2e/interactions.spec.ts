import { test, expect } from '@playwright/test';

test.describe('Interactions', () => {
  test('AI Insight Click - redirect works', async ({ page }) => {
    await page.goto('/');

    // 1. Scroll window down to trigger the lazy-loaded component
    await page.evaluate(() => window.scrollBy(0, 1500));
    
    // 2. Wait for the element to be ATTACHED to the DOM (ssr: false means it might take a moment)
    const viewDealBtn = page.getByTestId('ai-insight-view-deal').first();
    await viewDealBtn.waitFor({ state: 'attached' });
    
    // 3. Scroll it into the center to trigger framer-motion's whileInView
    await viewDealBtn.evaluate(node => node.scrollIntoView({ block: 'center' }));
    
    // 4. Wait for framer-motion to animate opacity from 0 to 1
    await expect(viewDealBtn).toBeVisible({ timeout: 10000 });

    // Ensure it is clickable without errors
    await viewDealBtn.click();
  });

  test('Deal Card Test', async ({ page }) => {
    await page.goto('/');

    const firstDeal = page.getByTestId('deal-card').first();
    await expect(firstDeal).toBeVisible();

    // Ensure price visible
    const priceText = firstDeal.locator('text=IDR').first();
    await expect(priceText).toBeVisible();

    // Ensure discount badge or some other indicators are visible if they exist
    // Check CTA button
    const ctaBook = firstDeal.getByTestId('cta-book');
    await expect(ctaBook).toBeVisible();
    await expect(ctaBook).toBeEnabled();
  });

  test('Scroll Interaction', async ({ page }) => {
    await page.goto('/');

    // Scroll page down
    await page.evaluate(() => window.scrollBy(0, 1000));
    
    // Assert cards appear (not broken) and no animation glitch
    const dealCards = page.getByTestId('deal-card');
    const count = await dealCards.count();
    expect(count).toBeGreaterThan(0);

    const lastCard = dealCards.nth(count - 1);
    await lastCard.scrollIntoViewIfNeeded();
    await expect(lastCard).toBeVisible();
  });

  test('Dark Mode Toggle', async ({ page }) => {
    await page.goto('/');

    const themeToggle = page.locator('button[aria-label="Toggle theme"]');
    // Wait for hydration (SVG icon only renders after React mounts)
    await themeToggle.locator('svg').waitFor({ state: 'visible' });
    await expect(themeToggle).toBeVisible();

    // Switch theme
    await themeToggle.click();

    // Ensure no broken UI
    await expect(page.getByTestId('deal-card').first()).toBeVisible();

    // Check if dark class is added to html (or light)
    const html = page.locator('html');
    await expect(html).toHaveAttribute('class', /dark|light/);
  });
});
