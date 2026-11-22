import { test } from '../page-fixtures';
import { loginUsers } from '../com.saucedemo.pages/Users';
// Los tests de login deben empezar SIN sesión: anula la sesión guardada.
test.use({ storageState: { cookies: [], origins: [] } });


test.describe('Pruebas de login', () => {
    for (const user of loginUsers) {
        test(`Intenta iniciar sesión: ${user.description}`, async ({ loginPage }) => {
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

