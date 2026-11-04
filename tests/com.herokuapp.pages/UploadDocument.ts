import { Page, Locator, expect } from "@playwright/test";
import { HEROKUAPP_URL } from "../../config/urls";

export class uploadDoc {
    constructor(private readonly page: Page){}

    // Métodos para abortar recursos/analytics si lo necesitas en esta página
    async blockAdsAndAnalytics() {
        await this.page.route('**/*.{png,jpg,jpeg,gif,svg}', route => route.abort());
        await this.page.route('**/*analytics*', route => route.abort());
        await this.page.route('**/*google*', route => route.abort());
    }

    async navigate(){
        await this.page.goto((HEROKUAPP_URL + '/upload'),{ waitUntil: 'commit', timeout: 120000 }); 

    } 

    async uploadDocument() {
        const filePath = 'tests/fixtures/archivo-prueba.txt'; 
        await this.page.locator('#file-upload').setInputFiles(filePath);
        await Promise.all([
            this.page.waitForNavigation({ waitUntil: 'commit', timeout: 120000 }),
            this.page.locator('#file-submit').click()
        ]);
    } 

    async assertDocUploaded(expectedText: string) {
        await expect(this.page.locator('#uploaded-files')).toHaveText(expectedText, { timeout: 120000 });        
    }
};