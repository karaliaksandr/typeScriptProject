import type { Locator, Page } from '@playwright/test';

export async function isVisible(locator: Locator): Promise<boolean> {
    await locator.waitFor();
    return await locator.isVisible();
}