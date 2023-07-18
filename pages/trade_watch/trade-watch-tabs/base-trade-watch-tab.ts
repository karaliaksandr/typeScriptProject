import { Locator, Page, expect } from '@playwright/test'

export abstract class BaseTradeWatchTabPage{

    protected page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    abstract isVisible(): Promise<boolean>;

    abstract clickOnTradeTab(): void;
}