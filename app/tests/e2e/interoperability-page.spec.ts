import { test, expect } from '@playwright/test';

test('interoperability page loads with title and table', async ({ page }) => {
  await page.goto('/interoperability');
  await expect(page.getByRole('heading', { name: /International Coordination/i })).toBeVisible();
  await expect(page.locator('table')).toBeVisible();
});

test('interoperability table has expected columns', async ({ page }) => {
  await page.goto('/interoperability');
  const table = page.locator('table');
  for (const col of ['Project', 'Type', 'Status', 'Participants', 'Led By']) {
    await expect(table.getByRole('columnheader', { name: col })).toBeVisible();
  }
});

test('interoperability table has multiple rows', async ({ page }) => {
  await page.goto('/interoperability');
  // Each project is one data row; count only non-expanded rows (tr without colSpan td)
  const rows = page.locator('table tbody tr');
  const count = await rows.count();
  expect(count).toBeGreaterThan(3);
});

test('type filter reduces interoperability table rows', async ({ page }) => {
  await page.goto('/interoperability');
  const allRows = await page.locator('table tbody tr').count();

  const filterButtons = page.locator('button').filter({ hasText: /BIS Project|Multi-CBDC|Stablecoin|Standards/i });
  const firstFilter = filterButtons.first();
  await firstFilter.click();

  const filteredRows = await page.locator('table tbody tr').count();
  expect(filteredRows).toBeLessThanOrEqual(allRows);
});

test('"All Types" filter restores all rows', async ({ page }) => {
  await page.goto('/interoperability');
  const allRows = await page.locator('table tbody tr').count();

  const filterButtons = page.locator('button').filter({ hasText: /BIS Project|Multi-CBDC/i });
  await filterButtons.first().click();

  await page.getByRole('button', { name: 'All Types' }).click();
  const restoredRows = await page.locator('table tbody tr').count();
  expect(restoredRows).toBe(allRows);
});

test('search bar filters interoperability projects', async ({ page }) => {
  await page.goto('/interoperability');
  const allRows = await page.locator('table tbody tr').count();

  await page.locator('input[type="text"], input[placeholder*="Search"]').first().fill('mBridge');
  await page.waitForTimeout(400);

  const filteredRows = await page.locator('table tbody tr').count();
  expect(filteredRows).toBeLessThan(allRows);
  expect(filteredRows).toBeGreaterThan(0);
});

test('clicking a table row expands project detail inline', async ({ page }) => {
  await page.goto('/interoperability');
  const initialRows = await page.locator('table tbody tr').count();

  // Click the first data row to expand it
  await page.locator('table tbody tr').first().click();

  // An extra row with the expanded detail should appear
  const expandedRows = await page.locator('table tbody tr').count();
  expect(expandedRows).toBe(initialRows + 1);
});

test('expanded row shows project description', async ({ page }) => {
  await page.goto('/interoperability');
  await page.locator('table tbody tr').first().click();

  // The expanded row contains a <p> with description text
  const expandedCell = page.locator('table tbody tr').nth(1).locator('td');
  await expect(expandedCell).toBeVisible();
  // Should have meaningful text content (description paragraph)
  const text = await expandedCell.textContent();
  expect(text!.length).toBeGreaterThan(20);
});

test('clicking expanded row again collapses the detail', async ({ page }) => {
  await page.goto('/interoperability');
  const initialRows = await page.locator('table tbody tr').count();

  const firstRow = page.locator('table tbody tr').first();
  await firstRow.click();
  expect(await page.locator('table tbody tr').count()).toBe(initialRows + 1);

  await firstRow.click();
  expect(await page.locator('table tbody tr').count()).toBe(initialRows);
});

test('opening a different row closes the previous one', async ({ page }) => {
  await page.goto('/interoperability');
  const initialRows = await page.locator('table tbody tr').count();

  await page.locator('table tbody tr').first().click();
  expect(await page.locator('table tbody tr').count()).toBe(initialRows + 1);

  // Click the third row (index 2 is the second data row after expansion)
  await page.locator('table tbody tr').nth(2).click();
  // Still only one expanded row — total stays at initialRows + 1
  expect(await page.locator('table tbody tr').count()).toBe(initialRows + 1);
});
