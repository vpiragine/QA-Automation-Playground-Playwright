// "export" hace esta clase disponible para que otros archivos
//  la importen.
import { Page , Locator , expect } from '@playwright/test';
import { SAUCEDEMO_URL } from '../../config/urls';

export class LoginPage {
    constructor(private readonly page: Page) {}

    private get usernameInput() { return this.page.locator('[data-test="username"]'); }
    private get passwordInput() { return this.page.locator('[data-test="password"]'); }
    private get loginButton() { return this.page.locator('[data-test="login-button"]'); }
// Getter para el mensaje de error
    private get errorMessage() { return this.page.getByText(/Epic sadface:/); }

    async navigateToLoginPage() { 
        await this.page.goto(SAUCEDEMO_URL);
    }

    async login(username: string, password: string) {
        await this.usernameInput.fill(username);
        await this.passwordInput.fill(password);
        await this.loginButton.click();
    }
    // Aserción para login fallido
    async assertErrorMessage() {
        await expect(this.errorMessage).toBeVisible();
    }
// Aserción para verificar que estamos en la página de inventario tras login exitoso
    async assertionOnInventoryPage() {
        await expect(this.page).toHaveURL(/inventory.html/);
    }

};