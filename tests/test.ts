import { expect, test } from '@playwright/test';

test('canvas renders', async ({ page }) => {
	await page.goto('/');
	await expect(page.locator('canvas')).toBeVisible();
});
