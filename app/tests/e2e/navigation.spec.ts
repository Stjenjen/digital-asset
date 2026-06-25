import { test, expect } from '@playwright/test';

test('homepage loads with summary stats and section cards', async ({ page }) => {
  await page.goto('/');
  await expect(page.getByRole('heading', { name: /Digital Money/i })).toBeVisible();
  // 4 summary stat cards
  const stats = page.getByTestId('summary-stat');
  await expect(stats).toHaveCount(4);
  // Section cards visible
  await expect(page.getByRole('link', { name: 'CBDCs' }).first()).toBeVisible();
  await expect(page.getByTestId('main-nav').getByRole('link', { name: 'Stablecoins' })).toBeVisible();
  await expect(page.getByTestId('main-nav').getByRole('link', { name: 'Tokenisation' })).toBeVisible();
  await expect(page.getByTestId('main-nav').getByRole('link', { name: 'Interoperability' })).toBeVisible();
});

test('main nav links are present', async ({ page }) => {
  await page.goto('/');
  const nav = page.getByTestId('main-nav');
  await expect(nav.getByRole('link', { name: 'CBDC' })).toBeVisible();
  await expect(nav.getByRole('link', { name: 'Stablecoins' })).toBeVisible();
  await expect(nav.getByRole('link', { name: 'Tokenisation' })).toBeVisible();
  await expect(nav.getByRole('link', { name: 'Interoperability' })).toBeVisible();
  await expect(nav.getByRole('link', { name: 'Compare' })).toBeVisible();
  await expect(nav.getByRole('link', { name: 'Research' })).toBeVisible();
  await expect(nav.getByRole('link', { name: 'Jurisdictions' })).not.toBeVisible();
});

test('navigate to CBDC page', async ({ page }) => {
  await page.goto('/');
  await page.getByTestId('main-nav').getByRole('link', { name: 'CBDC' }).click();
  await expect(page).toHaveURL('/cbdc');
  await expect(page.getByRole('heading', { name: /Central Bank Digital Currencies/i })).toBeVisible();
  await expect(page.getByTestId('comparison-table')).toBeVisible();
});

test('Research nav link navigates to hk-singapore page', async ({ page }) => {
  await page.goto('/');
  await page.getByTestId('main-nav').getByRole('link', { name: 'Research' }).click();
  await expect(page).toHaveURL('/research/hk-singapore');
  await expect(page.getByRole('heading', { name: /Singapore vs Hong Kong/i })).toBeVisible();
});

test('navigate from CBDC table to jurisdiction detail page', async ({ page }) => {
  await page.goto('/cbdc');
  // Click China link in table
  await page.getByRole('link', { name: /China/ }).first().click();
  await expect(page).toHaveURL('/cbdc/china');
  await expect(page.getByRole('heading', { name: /China/i })).toBeVisible();
  await expect(page.getByTestId('status-badge').first()).toBeVisible();
});

test('jurisdiction card on homepage links to jurisdiction page', async ({ page }) => {
  await page.goto('/');
  await page.getByTestId('jurisdiction-card-singapore').click();
  await expect(page).toHaveURL('/jurisdictions/singapore');
  await expect(page.getByRole('heading', { name: /Singapore/i })).toBeVisible();
});
