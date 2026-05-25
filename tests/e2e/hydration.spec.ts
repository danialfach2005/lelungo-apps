import { test, expect } from '@playwright/test';

test.describe('Hydration Mismatch Defense', () => {
  test('should not have any hydration errors on the homepage with non-US locale', async ({ page, context }) => {
    const errors: string[] = [];

    // Capture console errors
    page.on('console', (msg) => {
      if (msg.type() === 'error' || msg.type() === 'warning') {
        const text = msg.text();
        if (
          text.includes('hydration') ||
          text.includes('did not match') ||
          text.includes('Minified React error #418') ||
          text.includes('Minified React error #423')
        ) {
          errors.push(text);
        }
      }
    });

    // Capture page errors (uncaught exceptions)
    page.on('pageerror', (exception) => {
      const text = exception.message;
      if (
        text.includes('hydration') ||
        text.includes('did not match') ||
        text.includes('Minified React error #418') ||
        text.includes('Minified React error #423')
      ) {
        errors.push(text);
      }
    });

    // Simulate non-US locale where `toLocaleString` might output differently
    await context.setExtraHTTPHeaders({
      'Accept-Language': 'de-DE,de;q=0.9',
    });

    // We can also force timezone if needed, but locale is sufficient for toLocaleString issues.
    
    await page.goto('/');

    // Wait a bit for React to hydrate
    await page.waitForTimeout(1000);

    // Fail the test if any hydration errors were caught
    expect(errors, `Expected 0 hydration errors, but found: ${errors.join(' | ')}`).toHaveLength(0);
  });
});
