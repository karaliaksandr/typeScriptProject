import { Locator, Page, expect } from '@playwright/test'

export abstract class BaseOrderPage{
    protected page: Page;
 
   constructor(page: Page) {
     this.page = page;
   }

   abstract isVisible(): Promise<boolean>;

   abstract click(): void;
}