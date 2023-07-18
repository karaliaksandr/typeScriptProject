import { expect, Locator, Page } from '@playwright/test';
import { BaseOrderPage } from './base-order';

export class MarketOrderPage extends BaseOrderPage{
    private newOrderButton: Locator;

    constructor(page: Page){
        super(page);
        this.newOrderButton = page.locator('//div[contains(@data-test-id, "position-table")]//div[@data-test-id="new-order-button"][@data-test-disabled="false"]');
    }

    override async isVisible(): Promise<boolean> {
        return await this.newOrderButton.isVisible();
    }
    click(): void {
        this.newOrderButton.click();
    }
}