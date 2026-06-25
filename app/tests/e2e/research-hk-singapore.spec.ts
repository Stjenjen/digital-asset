import { test, expect } from '@playwright/test';

const PAGE = '/research/hk-singapore';

test('page loads with title', async ({ page }) => {
  await page.goto(PAGE);
  await expect(page.getByRole('heading', { name: /Singapore vs Hong Kong/i, level: 1 })).toBeVisible();
});

test('draft banner is visible', async ({ page }) => {
  await page.goto(PAGE);
  await expect(page.getByText(/research draft and is generated with the help of AI agent/i)).toBeVisible();
});

test('all section headings are present', async ({ page }) => {
  await page.goto(PAGE);
  for (const heading of [
    /Introduction/i,
    /CBDC Landscape/i,
    /Stablecoins/i,
    /Tokenised Bank Liabilities/i,
    /Cross-Border Interoperability/i,
    /International Standards/i,
    /FinTech Ecosystems/i,
    /Regulatory Philosophy/i,
    /Competitive Edge Summary/i,
    /Analysis/i,
  ]) {
    await expect(page.getByRole('heading', { name: heading, level: 2 }).first()).toBeVisible();
  }
});

test('comparison tables render with expected headers', async ({ page }) => {
  await page.goto(PAGE);
  const tables = page.locator('table');
  const count = await tables.count();
  expect(count).toBeGreaterThanOrEqual(5);
  // CBDC table has "Wholesale CBDC" row
  await expect(page.getByRole('cell', { name: /Wholesale CBDC/i }).first()).toBeVisible();
  // Stablecoins table has "Minimum capital" row
  await expect(page.getByRole('cell', { name: /Minimum capital/i }).first()).toBeVisible();
});

test('competitive edge callout boxes are present', async ({ page }) => {
  await page.goto(PAGE);
  await expect(page.getByTestId('cbdc-edge')).toBeVisible();
  await expect(page.getByTestId('stablecoins-edge')).toBeVisible();
  await expect(page.getByTestId('tokenised-deposits-edge')).toBeVisible();
  await expect(page.getByTestId('crossborder-edge')).toBeVisible();
  await expect(page.getByTestId('standards-edge')).toBeVisible();
  await expect(page.getByTestId('summary-edge')).toBeVisible();
});

test('references section has at least 10 citations', async ({ page }) => {
  await page.goto(PAGE);
  const refList = page.getByTestId('references-list');
  await expect(refList).toBeVisible();
  const items = refList.locator('li');
  const count = await items.count();
  expect(count).toBeGreaterThanOrEqual(10);
});

test('references contain external links', async ({ page }) => {
  await page.goto(PAGE);
  const refLinks = page.getByTestId('references-list').getByRole('link');
  const count = await refLinks.count();
  expect(count).toBeGreaterThanOrEqual(10);
  // spot-check a known source
  await expect(refLinks.filter({ hasText: /Project Orchid/i }).first()).toBeVisible();
});

test('analysis section renders with scenario table and analyst take', async ({ page }) => {
  await page.goto(PAGE);
  await expect(page.getByRole('heading', { name: /Analysis: Scenarios for the Decade Ahead/i, level: 2 })).toBeVisible();
  // Scenario table renders all four scenarios
  for (const scenario of [/Multilateral Integration/i, /Dollar Tokenisation/i, /Bifurcation/i, /Fragmented Standoff/i]) {
    await expect(page.getByText(scenario).first()).toBeVisible();
  }
  // Analyst's Take callout is present
  await expect(page.getByTestId('analysis-take')).toBeVisible();
});

test('table of contents has correct anchor hrefs for each section', async ({ page }) => {
  await page.goto(PAGE);
  const expectedAnchors = ['#introduction', '#cbdc', '#stablecoins', '#tokenised-deposits', '#cross-border', '#standards', '#fintech-ecosystem', '#regulatory-philosophy', '#competitive-edge', '#analysis', '#references'];
  for (const anchor of expectedAnchors) {
    await expect(page.locator(`nav a[href="${anchor}"]`).first()).toBeVisible();
  }
});
