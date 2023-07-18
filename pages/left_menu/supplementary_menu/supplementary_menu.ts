import { Page, Locator, expect } from '@playwright/test';
import { AddDepositPage } from './supplementary-items/deposit/add-deposit-page';
import { BaseSupplementaryItem } from './supplementary-items/base_supplementary_items';

export class SupplementaryMenu {
    private page: Page;
    protected suppButton: Locator;
  
    constructor(page: Page) {
        this.page = page;
    }

      async openSuppMenuItem <T extends BaseSupplementaryItem>(supplementaryItem: T) {
        supplementaryItem.clickSupplementaryItem();
        return supplementaryItem;
      }
  }