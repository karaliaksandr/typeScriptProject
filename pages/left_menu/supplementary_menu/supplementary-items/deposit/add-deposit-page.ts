import { expect, Locator, Page } from '@playwright/test';
import { DepositPage } from "./deposit-page";
import { isVisible } from '../../../../../utils/common-utils';

export class AddDepositPage extends DepositPage {
  
    readonly page: Page;
    readonly addDepositSelected: Locator;
    readonly depositButton: Locator;
 
   constructor(page: Page) {
     super(page);
     this.addDepositSelected = page.locator('[data-test-id="dialog-pages"] div').first();
     this.depositButton = page.locator('[data-test-id="deposit"] div');
   }

   async addDepositTabSelected(): Promise<boolean> {
    return isVisible(this.addDepositSelected);
  }
  
  override async clickSupplementaryItem(): Promise<void>{
      expect(await this.depositButton.isEnabled()).toBeTruthy();
      await this.depositButton.click();
  }
}
