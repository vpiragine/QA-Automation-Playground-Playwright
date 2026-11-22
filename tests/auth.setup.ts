declare const process: { env: Record<string, string | undefined> };
import { expect, test as setup } from './page-fixtures';

const authFile = 'playwright/.auth/user.json';

setup('Iniciar sesion en Saucedemo', async ({ loginPage, page }) => {
    await loginPage.navigateToLoginPage();
    await loginPage.login(
        process.env.SAUCEDEMO_USERNAME as string,
        process.env.SAUCEDEMO_PASSWORD as string
    );
    await expect(page).toHaveURL(/inventory.html/);

    // Guarda la sesión (cookies y almacenamiento local) en un archivo.
    await page.context().storageState({ path: authFile });
});