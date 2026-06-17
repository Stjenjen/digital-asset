import { test, expect } from '@playwright/test';

test('world map renders on CBDC page', async ({ page }) => {
  await page.goto('/cbdc');
  await expect(page.getByTestId('cbdc-world-map')).toBeVisible();
});

test('world map contains an SVG element', async ({ page }) => {
  await page.goto('/cbdc');
  const svg = page.getByTestId('cbdc-world-map').locator('svg');
  await expect(svg).toBeVisible();
});

test('world map legend is visible with at least one status entry', async ({ page }) => {
  await page.goto('/cbdc');
  const map = page.getByTestId('cbdc-world-map');
  // Legend contains "Status" label
  await expect(map.getByText('Status')).toBeVisible();
  // At least one status colour entry (e.g. Live)
  await expect(map.getByText('Live')).toBeVisible();
});

test('world map legend shows "No data" entry', async ({ page }) => {
  await page.goto('/cbdc');
  await expect(page.getByTestId('cbdc-world-map').getByText('No data')).toBeVisible();
});

test('world map appears above the filters and table', async ({ page }) => {
  await page.goto('/cbdc');
  const mapBox   = await page.getByTestId('cbdc-world-map').boundingBox();
  const tableBox = await page.getByTestId('comparison-table').boundingBox();
  expect(mapBox).not.toBeNull();
  expect(tableBox).not.toBeNull();
  // Map top should be above the table top
  expect(mapBox!.y).toBeLessThan(tableBox!.y);
});

test('hovering a CBDC country shows a tooltip with jurisdiction name', async ({ page }) => {
  await page.goto('/cbdc');
  const svg = page.getByTestId('cbdc-world-map').locator('svg');

  // Find a coloured path (China — largest CBDC deployment, easy to hit)
  // China's ISO numeric code is 156; its path has a distinct green fill
  // We'll hover roughly in the centre-right of the map where China sits
  const svgBox = await svg.boundingBox();
  expect(svgBox).not.toBeNull();

  // China is roughly at 73% width, 42% height of the map SVG
  const x = svgBox!.x + svgBox!.width * 0.73;
  const y = svgBox!.y + svgBox!.height * 0.42;

  await page.mouse.move(x, y);

  // Wait for tooltip
  const tooltip = page.getByTestId('map-tooltip');
  await expect(tooltip).toBeVisible({ timeout: 3000 });
  await expect(tooltip).not.toBeEmpty();
});

test('clicking a CBDC country navigates to its detail page', async ({ page }) => {
  await page.goto('/cbdc');
  const svg = page.getByTestId('cbdc-world-map').locator('svg');
  const svgBox = await svg.boundingBox();
  expect(svgBox).not.toBeNull();

  // Hover China first to confirm it's interactive, then click
  const x = svgBox!.x + svgBox!.width * 0.73;
  const y = svgBox!.y + svgBox!.height * 0.42;

  await page.mouse.move(x, y);
  // Wait for tooltip to confirm we're over a CBDC country
  await page.getByTestId('map-tooltip').waitFor({ timeout: 3000 });
  await page.mouse.click(x, y);

  // Should navigate to a CBDC detail page
  await expect(page).toHaveURL(/\/cbdc\/[a-z-]+/, { timeout: 5000 });
});

test('applying Asia region filter dims non-Asia countries on map', async ({ page }) => {
  await page.goto('/cbdc');
  const svg = page.getByTestId('cbdc-world-map').locator('svg');

  // Count paths with opacity=1 before filter
  const beforeActive = await svg.locator('path[opacity="1"]').count();

  // Apply Asia filter
  await page.getByRole('button', { name: 'Asia' }).click();

  // After filter, fewer (or equal) paths should be at full opacity
  const afterActive = await svg.locator('path[opacity="1"]').count();
  // Non-Asia CBDC countries should now be dimmed (opacity=0.2)
  const dimmed = await svg.locator('path[opacity="0.2"]').count();
  expect(dimmed).toBeGreaterThan(0);
  expect(afterActive).toBeLessThanOrEqual(beforeActive);
});

test('clearing region filter restores full map opacity', async ({ page }) => {
  await page.goto('/cbdc');
  const svg = page.getByTestId('cbdc-world-map').locator('svg');

  await page.getByRole('button', { name: 'Asia' }).click();
  const dimmedCount = await svg.locator('path[opacity="0.2"]').count();
  expect(dimmedCount).toBeGreaterThan(0);

  await page.getByRole('button', { name: 'All Regions' }).click();
  const afterClear = await svg.locator('path[opacity="0.2"]').count();
  expect(afterClear).toBe(0);
});

test('type filter dims non-matching CBDC countries on map', async ({ page }) => {
  await page.goto('/cbdc');
  const svg = page.getByTestId('cbdc-world-map').locator('svg');

  // Apply wholesale filter — most countries only have retail
  await page.getByRole('button', { name: 'wholesale' }).click();
  const dimmed = await svg.locator('path[opacity="0.2"]').count();
  expect(dimmed).toBeGreaterThan(0);
});

test('zoom controls are visible on the map', async ({ page }) => {
  await page.goto('/cbdc');
  await expect(page.getByTestId('map-zoom-controls')).toBeVisible();
  await expect(page.getByRole('button', { name: 'Zoom in' })).toBeVisible();
  await expect(page.getByRole('button', { name: 'Zoom out' })).toBeVisible();
});

test('zoom out button is disabled at default zoom level', async ({ page }) => {
  await page.goto('/cbdc');
  await expect(page.getByRole('button', { name: 'Zoom out' })).toBeDisabled();
});

test('clicking zoom in enables zoom out and shows reset button', async ({ page }) => {
  await page.goto('/cbdc');
  await page.getByRole('button', { name: 'Zoom in' }).click();
  await expect(page.getByRole('button', { name: 'Zoom out' })).toBeEnabled();
  await expect(page.getByRole('button', { name: 'Reset zoom' })).toBeVisible();
});

test('reset zoom button returns map to default', async ({ page }) => {
  await page.goto('/cbdc');
  await page.getByRole('button', { name: 'Zoom in' }).click();
  await expect(page.getByRole('button', { name: 'Reset zoom' })).toBeVisible();
  await page.getByRole('button', { name: 'Reset zoom' }).click();
  await expect(page.getByRole('button', { name: 'Reset zoom' })).toBeHidden();
  await expect(page.getByRole('button', { name: 'Zoom out' })).toBeDisabled();
});

test('scroll to zoom hint is visible at default zoom', async ({ page }) => {
  await page.goto('/cbdc');
  await expect(page.getByText('Scroll to zoom · Drag to pan')).toBeVisible();
});

test('zoom level indicator appears after zooming in', async ({ page }) => {
  await page.goto('/cbdc');
  await page.getByRole('button', { name: 'Zoom in' }).click();
  // Zoom level badge like "1.5×" should appear
  await expect(page.getByText(/\d+\.\d+×/)).toBeVisible();
});
