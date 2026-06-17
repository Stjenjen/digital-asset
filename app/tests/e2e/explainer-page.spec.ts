import { test, expect } from '@playwright/test';

test('explainer page loads with title and sidebar TOC', async ({ page }) => {
  await page.goto('/explainer');
  await expect(page.getByRole('heading', { name: /Digital Money Explainer/i })).toBeVisible();
  // Sidebar TOC visible on larger viewport
  await page.setViewportSize({ width: 1280, height: 800 });
  await page.reload();
  await expect(page.locator('aside').filter({ hasText: 'Contents' })).toBeVisible();
});

test('explainer page has multiple asset sections', async ({ page }) => {
  await page.goto('/explainer');
  // Should have headings for the main asset types
  await expect(page.getByRole('heading', { name: /wholesale cbdc/i, level: 2 }).or(
    page.getByRole('heading', { name: /wcbdc/i, level: 2 })
  ).or(
    page.locator('h2').filter({ hasText: /wholesale/i })
  ).first()).toBeVisible();
});

test('explainer comparison table is visible with expected columns', async ({ page }) => {
  await page.goto('/explainer');
  // Scroll to the comparison section
  await page.getByRole('heading', { name: /how they compare/i }).scrollIntoViewIfNeeded();
  await expect(page.getByRole('heading', { name: /how they compare/i })).toBeVisible();

  const table = page.locator('table');
  await expect(table).toBeVisible();

  // Check column headers
  for (const col of ['Asset', 'Issuer', 'Backed by', 'Finality', 'Regulated?']) {
    await expect(table.getByRole('columnheader', { name: col })).toBeVisible();
  }
});

test('explainer comparison table has at least 5 rows', async ({ page }) => {
  await page.goto('/explainer');
  const rows = page.locator('table tbody tr');
  const count = await rows.count();
  expect(count).toBeGreaterThanOrEqual(5);
});

test('explainer sidebar TOC links navigate to sections', async ({ page }) => {
  await page.setViewportSize({ width: 1280, height: 800 });
  await page.goto('/explainer');
  const tocLinks = page.locator('aside a');
  const count = await tocLinks.count();
  expect(count).toBeGreaterThan(3);

  // Click the first TOC link and check URL hash changes
  const firstLink = tocLinks.first();
  const href = await firstLink.getAttribute('href');
  await firstLink.click();
  expect(page.url()).toContain(href ?? '#');
});

test('tracker links in explainer sections point to relevant pages', async ({ page }) => {
  await page.goto('/explainer');
  // Should have at least one "tracker" link with an arrow
  const trackerLinks = page.locator('a').filter({ hasText: /tracker|view|explore/i });
  const count = await trackerLinks.count();
  expect(count).toBeGreaterThan(0);
});
