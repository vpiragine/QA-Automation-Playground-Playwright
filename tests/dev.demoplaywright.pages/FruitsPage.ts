import { Page } from '@playwright/test';
import { PLAYWRIGHT_DEMO_URL } from '../../config/urls';

export class FruitsPage {
    page: Page;

    constructor(page: Page) {
        this.page = page;
    }
    async goto() {
    await this.page.goto(`${PLAYWRIGHT_DEMO_URL}/api-mocking`);
}
    fruit(name: string) {
        return this.page.getByText(name, { exact: true });
    }       
}

