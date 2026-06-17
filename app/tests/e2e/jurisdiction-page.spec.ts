import { test, expect } from '@playwright/test';

test('Singapore jurisdiction page shows all 4 sections', async ({ page }) => {
  await page.goto('/jurisdictions/singapore');
  await expect(page.getByRole('heading', { name: /Singapore/i })).toBeVisible();
  // Should have CBDC section
  await expect(page.getByRole('heading', { name: /CBDCs/i })).toBeVisible();
  // Should have tokenisation section
  await expect(page.getByRole('heading', { name: /Tokenisation/i })).toBeVisible();
  // Should have interoperability section
  await expect(page.getByRole('heading', { name: /International/i })).toBeVisible();
});

test('China CBDC detail page shows timeline', async ({ page }) => {
  await page.goto('/cbdc/china');
  await expect(page.getByRole('heading', { name: /China/i })).toBeVisible();
  await expect(page.getByTestId('timeline')).toBeVisible();
  // Should show e-CNY
  await expect(page.getByRole('heading', { name: /e-CNY/i })).toBeVisible();
});

test('ECB CBDC page shows Digital Euro', async ({ page }) => {
  await page.goto('/cbdc/ecb');
  await expect(page.getByRole('heading', { name: /ECB|European/i })).toBeVisible();
  await expect(page.getByRole('heading', { name: /Digital Euro/i })).toBeVisible();
});

test('sources list expands on click', async ({ page }) => {
  await page.goto('/cbdc/china');
  const toggle = page.getByTestId('sources-toggle').first();
  await expect(toggle).toBeVisible();

  // Sources list should be hidden initially
  await expect(page.getByTestId('sources-list')).not.toBeVisible();

  // Click to expand
  await toggle.click();
  await expect(page.getByTestId('sources-list')).toBeVisible();
});

test('jurisdictions page region filter works', async ({ page }) => {
  await page.goto('/jurisdictions');
  const filter = page.getByTestId('jurisdiction-region-filter');
  const allCards = await page.getByTestId(/jurisdiction-card-/).count();

  await filter.getByRole('button', { name: 'Asia' }).click();
  const asiaCards = await page.getByTestId(/jurisdiction-card-/).count();
  expect(asiaCards).toBeLessThan(allCards);
  expect(asiaCards).toBeGreaterThan(0);
});

test('Project Guardian tokenisation page loads', async ({ page }) => {
  await page.goto('/tokenisation/project-guardian');
  await expect(page.getByRole('heading', { name: /Project Guardian/i })).toBeVisible();
  await expect(page.getByTestId('timeline')).toBeVisible();
});

test('compare page shows jurisdiction selectors', async ({ page }) => {
  await page.goto('/compare');
  await expect(page.getByRole('heading', { name: /Compare/i })).toBeVisible();
  const selects = page.getByTestId('jurisdiction-select');
  await expect(selects).toHaveCount(2);
});

test('compare page renders side-by-side after selecting two jurisdictions', async ({ page }) => {
  await page.goto('/compare');
  const selects = page.getByTestId('jurisdiction-select');

  await selects.nth(0).selectOption('china');
  await selects.nth(1).selectOption('us');

  // Both names should appear in the comparison header
  await expect(page.getByRole('paragraph').filter({ hasText: 'China' }).first()).toBeVisible();
  await expect(page.locator('p.font-semibold').filter({ hasText: 'United States' })).toBeVisible();
  // CBDC comparison section
  await expect(page.locator('h3').filter({ hasText: 'CBDC' }).first()).toBeVisible();
});
