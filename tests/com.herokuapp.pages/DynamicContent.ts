import { Page, Locator, expect } from '@playwright/test'
import { HEROKUAPP_URL } from '../../config/urls';

export class DynamicContent {
    constructor(private readonly page: Page) {}

    // Getter para el boton Start
    private get startButton(): Locator {
        return this.page.getByText('Start');
    }

    private get finishText(): Locator {
    return this.page.locator('#finish');
    
    }

    // Métodos para abortar recursos/analytics si lo necesitas en esta página
    async blockAdsAndAnalytics() {
        await this.page.route('**/*.{png,jpg,jpeg,gif,svg}', route => route.abort());
        await this.page.route('**/*analytics*', route => route.abort());
        await this.page.route('**/*google*', route => route.abort());
    }

    async navigate() {
        await this.page.goto(HEROKUAPP_URL + '/dynamic_loading/1'),{ waitUntil: 'commit', timeout: 30000 };
    } 

    async startLoading() {
    await this.startButton.click();
    }

    async assertDynamicContent(expectedText: string) {
        const dynamicContent = this.page.locator('#finish');
        await expect(dynamicContent).toBeVisible();
        await expect(dynamicContent).toHaveText(expectedText);
    }
};
