import { Page, Locator, ElementHandle, expect } from '@playwright/test';
import { SupplementaryMenu } from './supplementary_menu/supplementary_menu';

export class LeftMenuPage {
  private page: Page;
  private supplementaryMenu: SupplementaryMenu;
  private menuToggle: Locator;
  private emailAlerts: Locator;

  constructor(page: Page) {
    this.page = page;
    this.supplementaryMenu = new SupplementaryMenu(page);
    this.menuToggle = page.locator("locator('[data-test-id='main-menu-toggle']')");
    this.emailAlerts = page.locator('[data-test-id="email-alerts-control"]');
  }

  async expandMenu(): Promise<void> {
    const isMenuExpanded = await this.isMenuExpanded();
    if (!isMenuExpanded) {
      await this.menuToggle.click();
      expect(this.emailAlerts.isVisible)
    }
  }

  async collapseMenu(): Promise<void> {
    const isMenuExpanded = await this.isMenuExpanded();
    if (isMenuExpanded) {
      await this.menuToggle.click();
    }
  }

  async isMenuExpanded(): Promise<boolean> {
    return this.emailAlerts.isVisible();
  }


  getSupplementaryMenu(): SupplementaryMenu {
    return this.supplementaryMenu;
  }
}