import { Page, Locator, expect } from '@playwright/test';
import { HEROKUAPP_URL_IFRAME } from '../../config/urls';

export class IframePage {
    constructor(private readonly page: Page) {}

    // Getter para el editor dentro del iframe
    private get editor(): Locator {
        return this.page.frameLocator('#mce_0_ifr').locator('#tinymce');
    }

    // Métodos para abortar recursos/analytics si lo necesitas en esta página
    async blockAdsAndAnalytics() {
        await this.page.route('**/*.{png,jpg,jpeg,gif,svg}', route => route.abort());
        await this.page.route('**/*analytics*', route => route.abort());
        await this.page.route('**/*google*', route => route.abort());
    } 

    async navigate() {
        await this.page.goto(HEROKUAPP_URL_IFRAME, { waitUntil: 'commit', timeout: 30000 });
    }

    async assertEditorContent(expectedText: string) {
        await expect(this.editor).toBeVisible();
        await expect(this.editor).toHaveText(expectedText);
    }
}; 