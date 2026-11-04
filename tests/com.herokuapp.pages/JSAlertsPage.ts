import { Page, Locator, expect } from "@playwright/test";
import { HEROKUAPP_URL } from "../../config/urls";

export class JsAlerts {
    constructor(private readonly page: Page) {} 

     // Métodos para abortar recursos/analytics si lo necesitas en esta página
    async blockAdsAndAnalytics() {
        await this.page.route('**/*.{png,jpg,jpeg,gif,svg}', route => route.abort());
        await this.page.route('**/*analytics*', route => route.abort());
        await this.page.route('**/*google*', route => route.abort());
    }

    async navigate() {
        await this.page.goto(HEROKUAPP_URL + '/javascript_alerts'),{ waitUntil: 'commit', timeout: 30000 };
    } 
        
    async acceptDialog(){ 
        this.page.once('dialog', dialog => dialog.accept());

    } 
    
    async clickForJsAlert() { 
        await this.page.getByText('Click for JS Alert').click();
    }

    async assertJSAlertClicked(expectedText: string) {
        await expect(this.page.locator('#result')).toHaveText(expectedText);
    }
};
