import { test, expect } from '@playwright/test';

test('glossary page loads with title', async ({ page }) => {
  await page.goto('/glossary');
  await expect(page.getByRole('heading', { name: /Glossary/i })).toBeVisible();
});

test('glossary page has multiple category sections', async ({ page }) => {
  await page.goto('/glossary');
  for (const cat of ['CBDC', 'Stablecoins', 'Tokenisation', 'Interoperability', 'General']) {
    await expect(page.getByRole('heading', { name: cat })).toBeVisible();
  }
});

test('glossary terms are visible as definition list', async ({ page }) => {
  await page.goto('/glossary');
  const terms = page.locator('dt');
  const count = await terms.count();
  expect(count).toBeGreaterThan(10);
});

test('glossary definitions are present for each term', async ({ page }) => {
  await page.goto('/glossary');
  const definitions = page.locator('dd');
  const count = await definitions.count();
  expect(count).toBeGreaterThan(10);
});

test('glossary terms have anchor IDs for deep-linking', async ({ page }) => {
  await page.goto('/glossary');
  // Check that at least one term has an id attribute for anchoring
  const anchored = page.locator('[id]').filter({ has: page.locator('dt') });
  // Alternative: check the parent divs have ids
  const termContainers = page.locator('dl > div[id]');
  const count = await termContainers.count();
  expect(count).toBeGreaterThan(5);
});
