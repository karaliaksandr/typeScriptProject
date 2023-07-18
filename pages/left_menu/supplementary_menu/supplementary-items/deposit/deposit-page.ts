import { Locator, Page, expect } from '@playwright/test'
import { BaseSupplementaryItem } from '../base_supplementary_items';

export abstract class DepositPage extends BaseSupplementaryItem{
    
    protected depositFrame: Locator;
    protected depositAmountInput: Locator;
    protected submitButton: Locator;
    protected depositMessage: Locator;
    protected closeDepositButton: Locator;

    constructor(page: Page) {
      super(page);
      this.depositFrame = page.locator('[data-test-id="rebalancing-form"]');
      this.depositAmountInput = page.locator('[data-test-id="amount"]').getByRole('textbox');
      this.submitButton = page.locator('//button[@type = "submit"]');
      this.depositMessage = page.locator('[data-test-id="info-message"] [data-test-id="cell"]');
      this.closeDepositButton = page.locator('[data-test-id="dialog-header-close"] #ic_cross');
    }

    async editDepositAmount(amount: string){
      expect(this.depositFrame.isVisible());
      console.log('Editing Deposit amount');
      await this.depositAmountInput.fill(amount);
    }
  
    async clickOnSubmitButton(){
      expect(this.submitButton).toBeVisible();
      console.log('Clicking on Sign in button to edit Deposit');
      await this.submitButton.click();
      expect(this.depositMessage).toBeVisible();
    }

    async closeDeposit(){
      expect(this.depositFrame.isVisible());
      expect(this.closeDepositButton.isEnabled);
      await this.closeDepositButton.click();
      expect(this.depositFrame.isVisible).toBeFalsy();
    }

}