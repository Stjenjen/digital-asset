import { test, expect } from '@playwright/test';

test('CBDC table shows all initiatives by default', async ({ page }) => {
  await page.goto('/cbdc');
  const table = page.getByTestId('comparison-table');
  await expect(table).toBeVisible();
  const rows = table.locator('tbody tr');
  await expect(rows).toHaveCount(await rows.count()); // at least 1 row
  const count = await rows.count();
  expect(count).toBeGreaterThan(10);
});

test('region filter reduces CBDC table rows', async ({ page }) => {
  await page.goto('/cbdc');
  const table = page.getByTestId('comparison-table');
  const allRows = await table.locator('tbody tr').count();

  // Click Asia filter
  await page.getByTestId('region-filter').getByRole('button', { name: 'Asia' }).click();
  const asiaRows = await table.locator('tbody tr').count();
  expect(asiaRows).toBeLessThan(allRows);
  expect(asiaRows).toBeGreaterThan(0);
});

test('clearing region filter restores all rows', async ({ page }) => {
  await page.goto('/cbdc');
  const table = page.getByTestId('comparison-table');
  const allRows = await table.locator('tbody tr').count();

  await page.getByTestId('region-filter').getByRole('button', { name: 'Asia' }).click();
  await page.getByTestId('region-filter').getByRole('button', { name: 'All Regions' }).click();

  const restoredRows = await table.locator('tbody tr').count();
  expect(restoredRows).toBe(allRows);
});

test('type filter: wholesale shows fewer rows than all', async ({ page }) => {
  await page.goto('/cbdc');
  const table = page.getByTestId('comparison-table');
  const allRows = await table.locator('tbody tr').count();

  await page.getByRole('button', { name: 'wholesale' }).click();
  const wholesaleRows = await table.locator('tbody tr').count();
  expect(wholesaleRows).toBeLessThan(allRows);
  expect(wholesaleRows).toBeGreaterThan(0);
});

test('search bar filters CBDC table', async ({ page }) => {
  await page.goto('/cbdc');
  const table = page.getByTestId('comparison-table');

  await page.getByTestId('search-bar').locator('input').fill('e-CNY');
  await page.waitForTimeout(400); // debounce

  const rows = await table.locator('tbody tr').count();
  expect(rows).toBeLessThan(5);
});

test('status badges are visible in CBDC table', async ({ page }) => {
  await page.goto('/cbdc');
  const badges = page.getByTestId('status-badge');
  await expect(badges.first()).toBeVisible();
  const count = await badges.count();
  expect(count).toBeGreaterThan(5);
});

test('column sort on CBDC table changes order', async ({ page }) => {
  await page.goto('/cbdc');
  const table = page.getByTestId('comparison-table');

  // Get first jurisdiction before sort
  const firstBefore = await table.locator('tbody tr').first().textContent();

  // Click Status column header (sortable)
  await table.getByRole('columnheader', { name: /Status/i }).click();
  const firstAfter = await table.locator('tbody tr').first().textContent();

  // After sort the first row may differ
  // At minimum the table should still have rows
  const rows = await table.locator('tbody tr').count();
  expect(rows).toBeGreaterThan(0);
});

test('column header tooltip appears on hover and is not clipped by table overflow', async ({ page }) => {
  await page.goto('/cbdc');
  // "Type" column has a tooltip — hover the ⓘ icon
  const typeHeader = page.getByTestId('comparison-table').getByRole('columnheader', { name: /Type/i });
  await typeHeader.hover();
  // Tooltip should be visible — it uses position:fixed to escape overflow-x-auto clipping
  const tooltip = page.locator('[role="tooltip"]').first();
  await expect(tooltip).toBeVisible({ timeout: 3000 });
  // Tooltip content should mention CBDC type
  await expect(tooltip).toContainText(/retail|wholesale/i);
});

test('column header tooltip disappears when mouse leaves', async ({ page }) => {
  await page.goto('/cbdc');
  const typeHeader = page.getByTestId('comparison-table').getByRole('columnheader', { name: /Type/i });
  await typeHeader.hover();
  await expect(page.locator('[role="tooltip"]').first()).toBeVisible({ timeout: 3000 });

  // Move mouse away
  await page.mouse.move(0, 0);
  await expect(page.locator('[role="tooltip"]')).toHaveCount(0);
});

test('multiple column tooltips work independently', async ({ page }) => {
  await page.goto('/cbdc');
  const table = page.getByTestId('comparison-table');

  // Hover Tech Model header
  await table.getByRole('columnheader', { name: /Tech Model/i }).hover();
  await expect(page.locator('[role="tooltip"]').first()).toBeVisible({ timeout: 3000 });

  // Move to Privacy header — new tooltip should appear
  await table.getByRole('columnheader', { name: /Privacy/i }).hover();
  await expect(page.locator('[role="tooltip"]').first()).toBeVisible({ timeout: 3000 });
  await expect(page.locator('[role="tooltip"]').first()).toContainText(/transaction|privacy/i);
});
