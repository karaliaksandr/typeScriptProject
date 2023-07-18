import { Locator, Page, expect } from '@playwright/test'

export abstract class BaseLoginPage{

   readonly page: Page;
   readonly menu: Locator;
   readonly logInButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.menu = page.locator("//img[contains(@src, 'ctradercloud')]");
    this.logInButton = page.getByRole('button', { name: 'Log In' });
  }

  async navigate() {
    await this.page.goto('https://app.ctrader.com/');
    await this.page.waitForLoadState('networkidle');
  }

  async clickLogIn(){
    expect(this.logInButton.isEnabled()).toBeTruthy();
    await this.logInButton.click();
    await expect(this.menu).toBeVisible();
  }
}