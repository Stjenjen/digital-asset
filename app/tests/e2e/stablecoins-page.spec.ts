import { test, expect } from '@playwright/test';

test('stablecoins page loads with title and table', async ({ page }) => {
  await page.goto('/stablecoins');
  await expect(page.getByRole('heading', { name: /Stablecoins/i })).toBeVisible();
  await expect(page.locator('table')).toBeVisible();
});

test('stablecoins table has expected columns', async ({ page }) => {
  await page.goto('/stablecoins');
  const table = page.locator('table');
  for (const col of ['Jurisdiction', 'Regulatory Status', 'Key Legislation', 'Major Issuers']) {
    await expect(table.getByRole('columnheader', { name: col })).toBeVisible();
  }
  // 'Regulator' is a substring of 'Regulatory Status' — use exact match
  await expect(table.getByRole('columnheader', { name: 'Regulator', exact: true })).toBeVisible();
});

test('stablecoins table has multiple rows', async ({ page }) => {
  await page.goto('/stablecoins');
  const rows = page.locator('table tbody tr');
  const count = await rows.count();
  expect(count).toBeGreaterThan(5);
});

test('jurisdiction count shows total vs filtered', async ({ page }) => {
  await page.goto('/stablecoins');
  const countText = page.locator('text=/\\d+ of \\d+ jurisdictions/');
  await expect(countText).toBeVisible();
});

test('region filter reduces stablecoins table rows', async ({ page }) => {
  await page.goto('/stablecoins');
  const allRows = await page.locator('table tbody tr').count();

  await page.getByRole('button', { name: 'Asia' }).click();
  const asiaRows = await page.locator('table tbody tr').count();
  expect(asiaRows).toBeLessThan(allRows);
  expect(asiaRows).toBeGreaterThan(0);
});

test('search filters stablecoins by jurisdiction name', async ({ page }) => {
  await page.goto('/stablecoins');
  const allRows = await page.locator('table tbody tr').count();

  await page.locator('input[type="text"], input[placeholder*="Search"]').first().fill('Singapore');
  await page.waitForTimeout(400);

  const filteredRows = await page.locator('table tbody tr').count();
  expect(filteredRows).toBeLessThan(allRows);
  expect(filteredRows).toBeGreaterThan(0);
});

test('stablecoin jurisdiction row links to detail page', async ({ page }) => {
  await page.goto('/stablecoins');
  // Click first jurisdiction link in table
  const firstLink = page.locator('table tbody tr').first().getByRole('link').first();
  const href = await firstLink.getAttribute('href');
  await firstLink.click();
  await expect(page).toHaveURL(href ?? '/stablecoins');
});

test('stablecoin detail page loads for a known jurisdiction', async ({ page }) => {
  await page.goto('/stablecoins/singapore');
  await expect(page.getByRole('heading', { name: /Singapore/i })).toBeVisible();
});

test('regulatory status badges are shown in stablecoins table', async ({ page }) => {
  await page.goto('/stablecoins');
  // Regulatory status badges use spans with specific classes
  const badges = page.locator('table tbody').locator('span').filter({
    hasText: /No Framework|Consultation|Legislation|Licensing|Restricted|Banned/i,
  });
  const count = await badges.count();
  expect(count).toBeGreaterThan(0);
});
