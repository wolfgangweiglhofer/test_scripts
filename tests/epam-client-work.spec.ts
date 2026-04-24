import { test, expect } from '@playwright/test';

test('EPAM: Navigate to Client Work from Services', async ({ page }) => {
  // Navigate to EPAM homepage
  await page.goto('https://www.epam.com/');

  // Accept cookie banner if present
  const acceptCookies = page.getByRole('button', { name: /Accept All|Accept/i });
  if (await acceptCookies.isVisible().catch(() => false)) {
    await acceptCookies.click();
  }

  // Click "Services" in the header menu
  await page.getByRole('link', { name: /Services/i }).first().click();

  // Click "Explore Our Client Work" link
  await page.getByRole('link', { name: /Explore Our Client Work/i }).click();

  // Verify "Client Work" text is visible on the page
  await expect(page.getByText(/Client Work/i)).toBeVisible();
});
