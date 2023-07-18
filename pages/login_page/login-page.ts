import { expect, Locator, Page } from '@playwright/test';
import { BaseLoginPage } from './base_login_page';

export class LoginPage extends BaseLoginPage{
   readonly page: Page;
   readonly loggedInMessage: Locator;
   readonly emailInput: Locator;
   readonly passwordInput: Locator;
   readonly submitButton: Locator;
   readonly signInButton: Locator;

  constructor(page: Page) {
    super(page);
    this.loggedInMessage = page.locator('[data-test-id="notification-body"]');
    this.emailInput = page.getByPlaceholder('Enter your email or cTrader ID');
    this.passwordInput = page.getByPlaceholder('Enter your password');
    this.submitButton = page.locator('[data-test-id="submit"]');
    this.signInButton = page.locator('[data-test-id="signin-tab"]');
  }

  async loginForUser(userEmail: string, password: string): Promise<void> {
    await this.signInButton.click();
    await this.emailInput.isVisible();
    await this.emailInput.fill(userEmail);
    await this.passwordInput.isVisible();
    await this.passwordInput.fill(password);
    await this.submitButton.click();
    await expect(this.menu).toBeVisible();
    await this.loggedInMessage.isVisible();
  }
}