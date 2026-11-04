import { test } from '@playwright/test'; 
import { LoginPage } from '../com.saucedemo.pages/LoginPage';
import { loginUsers } from '../com.saucedemo.pages/Users';

test.describe('Pruebas de login', () => {
    for (const user of loginUsers) {
        test(`Intenta iniciar sesión: ${user.description}`, async ({ page }) => {
            const loginPage = new LoginPage(page);
            
            await loginPage.navigateToLoginPage();
            await loginPage.login(user.username, user.password);

            if (user.shouldSucceed) {
                await loginPage.assertionOnInventoryPage();
            } else {
                await loginPage.assertErrorMessage();
            }
        });
    }
});

