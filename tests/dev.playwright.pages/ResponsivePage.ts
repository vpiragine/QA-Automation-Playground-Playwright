import { Page, Locator, expect } from "@playwright/test";
import { PLAYWRIGHT_DOCS_URL } from "../../config/urls";

export class ResponsivePage {
    constructor (private readonly page: Page) {}

    // Getters evaluados en tiempo real - desktop
    private get docsLink(): Locator {
        return this.page.getByRole('link', { name: 'Docs', exact: true });
    }
    private get DesktopMenuButton(): Locator {
        return this.page.getByRole('button', { name: 'Menu' });
    }
    // Getters evaluados en tiempo real - mobile
    private get mobileButton(): Locator {
        return this.page.getByRole('button', { name: 'Toggle navigation bar' });
    }

    async navigateToDocs() {
        await this.page.goto(PLAYWRIGHT_DOCS_URL);
    }
    
    // Método para Desktop
    async assertDesktopView() {
        await expect(this.docsLink).toBeVisible();
        await expect(this.DesktopMenuButton).toBeHidden();
    }   
    // Método para Mobile 
    async assertMobileView() {
        await expect(this.docsLink).toBeHidden();
        await expect(this.mobileButton).toBeVisible();
    }

};