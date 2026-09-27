import { test, expect } from '@playwright/test';

test('permite introducir datos en tablas dinámicas', async ({ page }) => {
        await page.goto('https://demoqa.com/webtables');
        await page.getByRole('button', { name: 'Add' }).click();
        await page.getByPlaceholder('First Name').fill('Juan');
        await page.getByPlaceholder('Last Name').fill('Perez');
        await page.getByPlaceholder('name@example.com').fill('asd@asd.com');
        await page.getByPlaceholder('Age').fill('30');
        await page.getByPlaceholder('Salary').fill('50000');
        await page.getByPlaceholder('Department').fill('Ventas');
        await page.getByRole('button', { name: 'Submit' }).click();
        await expect(page.locator('tr').filter({ hasText: 'Juan'})).toBeVisible();
        await expect(page.locator('tr').filter({ hasText: 'Perez'})).toBeVisible();
    })
    test('permite interactuar con menus desplegables personalizados', async ({ page }) => {
        await page.goto('https://demoqa.com/select-menu');
        // 1. Haz clic para abrir el menú flotante
        await page.locator('#react-select-2-input').click(); // línea 44[cite: 3]
        // 2. Haz clic directamente en la opción del menú desplegable por su texto
        await page.getByText('Group 1, option 1', { exact: true }).click();
        await expect(page.locator('#withOptGroup')).toContainText('Group 1, option 1');
})