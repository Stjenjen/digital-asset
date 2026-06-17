import { test, expect } from '@playwright/test';

test('tokenisation page loads with title and table', async ({ page }) => {
  await page.goto('/tokenisation');
  await expect(page.getByRole('heading', { name: /Tokenised/i })).toBeVisible();
  await expect(page.locator('table')).toBeVisible();
});

test('tokenisation table has expected columns', async ({ page }) => {
  await page.goto('/tokenisation');
  const table = page.locator('table');
  for (const col of ['Project', 'Primary Jurisdiction', 'Status', 'Asset Types', 'DvP', 'Key Participants']) {
    await expect(table.getByRole('columnheader', { name: col })).toBeVisible();
  }
});

test('tokenisation table has multiple rows', async ({ page }) => {
  await page.goto('/tokenisation');
  const rows = page.locator('table tbody tr');
  const count = await rows.count();
  expect(count).toBeGreaterThan(5);
});

test('project count shows total vs filtered', async ({ page }) => {
  await page.goto('/tokenisation');
  const countText = page.locator('text=/\\d+ of \\d+ projects/');
  await expect(countText).toBeVisible();
});

test('search filters tokenisation projects', async ({ page }) => {
  await page.goto('/tokenisation');
  const allRows = await page.locator('table tbody tr').count();

  await page.locator('input[type="text"], input[placeholder*="Search"]').first().fill('Guardian');
  await page.waitForTimeout(400);

  const filteredRows = await page.locator('table tbody tr').count();
  expect(filteredRows).toBeLessThan(allRows);
  expect(filteredRows).toBeGreaterThan(0);
});

test('search shows empty state when no match', async ({ page }) => {
  await page.goto('/tokenisation');

  await page.locator('input[type="text"], input[placeholder*="Search"]').first().fill('zzz_no_match_zzz');
  await page.waitForTimeout(400);

  await expect(page.getByText(/No tokenisation projects match/i)).toBeVisible();
});

test('tokenisation project row links to detail page', async ({ page }) => {
  await page.goto('/tokenisation');
  const firstLink = page.locator('table tbody tr').first().getByRole('link').first();
  const href = await firstLink.getAttribute('href');
  await firstLink.click();
  await expect(page).toHaveURL(href ?? '/tokenisation');
});

test('tokenisation detail page loads with timeline', async ({ page }) => {
  await page.goto('/tokenisation/project-guardian');
  await expect(page.getByRole('heading', { name: /Project Guardian/i })).toBeVisible();
  await expect(page.getByTestId('timeline')).toBeVisible();
});

test('status badges are visible in tokenisation table', async ({ page }) => {
  await page.goto('/tokenisation');
  const badges = page.getByTestId('status-badge');
  await expect(badges.first()).toBeVisible();
  const count = await badges.count();
  expect(count).toBeGreaterThan(3);
});

test('clearing search restores all tokenisation rows', async ({ page }) => {
  await page.goto('/tokenisation');
  const allRows = await page.locator('table tbody tr').count();

  const input = page.locator('input[type="text"], input[placeholder*="Search"]').first();
  await input.fill('Guardian');
  await page.waitForTimeout(400);

  await input.fill('');
  await page.waitForTimeout(400);

  const restoredRows = await page.locator('table tbody tr').count();
  expect(restoredRows).toBe(allRows);
});
