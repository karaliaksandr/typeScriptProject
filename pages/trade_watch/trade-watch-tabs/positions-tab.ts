import { expect, Locator, Page } from '@playwright/test';
import { BaseTradeWatchTabPage } from './base-trade-watch-tab';
import { BaseOrderPage } from '../order/base-order';

export class PositionsPage extends BaseTradeWatchTabPage {
    private positionTabActive: Locator;
    private positionTab: Locator;
    
    constructor(page: Page) {
        super(page);
        this.positionTabActive = page.locator('//div[contains(@class, "cz")][@data-test-id="positions-tab"]');
        this.positionTab = page.locator('div[@data-test-id="positions-tab"]');
      }
    
    async clickOrderButton(orderButton: BaseOrderPage): Promise<BaseOrderPage> {
        const newOrderButtonExists = orderButton.isVisible();
        if (!newOrderButtonExists) {
          throw new Error('New Order button is not present on the page.');
        }
        orderButton.click();
        return orderButton;
      }

      override async isVisible(): Promise<boolean> {
        return await this.positionTabActive.isVisible();
      }

      override async clickOnTradeTab(){
        await this.positionTab.click();
      }
}
