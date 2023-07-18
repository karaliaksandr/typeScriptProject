import { Page, Locator, expect } from '@playwright/test';
import { BaseTradeWatchTabPage } from './trade-watch-tabs/base-trade-watch-tab';

export class TradeWatchPage {
  private page: Page;
  private panelCollapseButton: Locator;
  private tradeWatchSection: Locator;
  private tradeWatchTab: Locator;

  constructor(page: Page) {
    this.page = page;
    this.panelCollapseButton = page.locator('[data-test-id="panel-collapse-button"]').nth(1);
    this.tradeWatchSection = page.locator('[data-test-id="trade-watch"]');
  }

  async ensureTradeWatchPanelOpen(): Promise<void> {
    const isOpen = await this.tradeWatchSection.isVisible();
    if (!isOpen) {
      await this.page.keyboard.press('Shift+W');
      await this.page.waitForSelector('[data-test-id="trade-watch"]');
    }
  }

  async switchToTab<T extends BaseTradeWatchTabPage>(tradeTab: T) {
    const isActive = tradeTab.isVisible();
    if (!isActive) {
        tradeTab.clickOnTradeTab();
        }
      return tradeTab;
    }
}