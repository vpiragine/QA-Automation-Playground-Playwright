import { test, expect } from '@playwright/test'; 
import { LoginPage } from '../com.saucedemo.pages/LoginPage';
import { loginUsers } from './Users';

test.describe('Pruebas de Login (parametrizado)', () => {
       for (const { username, password, description, shouldSucceed } of loginUsers) {
        test(`Intenta iniciar sesión: ${description}`, async ({ page }) => {
            const loginPage = new LoginPage(page);
            await loginPage.goto();
            await loginPage.login(username, password);
           
            if (shouldSucceed) {
                await expect(page).toHaveURL(/inventory.html/);
            } else {
                await expect(page.getByText(/Epic sadface:/)).toBeVisible();
            }
        });
    }
});

// test.describe('Pruebas de Login (parametrizado)', () => {
//        for (const { username, password, description, shouldSucceed } of loginUsers) {
//         test(`Intenta iniciar sesión: ${description}`, async ({ page }) => {
//             const loginPage = new LoginPage(page);
//             await loginPage.goto();
//             await loginPage.login(username, password);
           
//             if (shouldSucceed) {
//                 await expect(page).toHaveURL(/inventory.html/);
//             }
//         });
//     }

//     test('Intenta iniciar sesión con usuario bloqueado', async ({ page }) => {
//         for (const { username, password, description, shouldSucceed } of loginUsers) {
//             if (description === 'Usuario bloqueado') {
//                 const loginPage = new LoginPage(page);
//                 await loginPage.goto();
//                 await loginPage.login(username, password);
//                 await expect(page.getByText('Epic sadface: Sorry, this user has been locked out.')).toBeVisible();
//             }
//         }   
//     });

//     test('Muestra error con contraseña incorrecta', async ({ page }) => {
//         for (const { username, password, description, shouldSucceed } of loginUsers) {
//             if (description === 'Contraseña incorrecta') {
//                 const loginPage = new LoginPage(page);
//                 await loginPage.goto();
//                 await loginPage.login(username, password);
//                 await expect(page.getByText('Epic sadface: Username and password do not match any user in this service')).toBeVisible();
//             }
//         }
//     });
// });