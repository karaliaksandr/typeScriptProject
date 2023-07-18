import { Locator, Page, expect } from '@playwright/test'

export abstract class BaseSupplementaryItem{

    protected page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    abstract clickSupplementaryItem(): void;
}