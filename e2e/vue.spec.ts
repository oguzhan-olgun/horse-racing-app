import { test, expect } from '@playwright/test';

test('visits the app root url', async ({ page }) => {
  await page.goto('/');
  const welcome = page.locator("[id='welcome']");
  await expect(welcome).toBeVisible();
})
