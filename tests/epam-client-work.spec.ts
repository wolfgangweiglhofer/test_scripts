import { test, expect } from '@playwright/test';

test('EPAM - Client Work navigation', async ({ page }) => {
  // Navigate to EPAM homepage
  await page.goto('https://www.epam.com/');

  // Click Services in header
  const services = page.locator('a[href="/services"]').first();
  await services.click();

  // Click Explore Our Client Work link
  const explore = page.locator('a:has-text("Explore Our Client Work")').first();
  await explore.click();

  // Assert "Client Work" text is visible
  const clientWork = page.locator('text=Client Work');
  await expect(clientWork.first()).toBeVisible();
});