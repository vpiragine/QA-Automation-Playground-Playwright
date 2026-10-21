import { test, expect } from '@playwright/test';
import { FruitsPage } from '../dev.demoplaywright.pages/FruitsPage';

// Patrón que coincide con cualquier URL que termine en /api/v1/fruits
const FRUITS_API_PATTERN = '*/**/api/v1/fruits';

test.describe('Mocking de red', () => {
    test('reemplaza la respuesta de la API con datos simulados o propios', async ({ page }) => {
        const fruitsPage = new FruitsPage(page);
        // Intercepta la solicitud a la API de frutas y proporciona una respuesta simulada
        // El route se registra ANTES de navegar, para no perder la llamada.
        await  page.route (FRUITS_API_PATTERN, async (route) => {
            await route.fulfill({ json: [{ name: 'Strawberry', id: '21' }] });
        });
        await fruitsPage.goto();
        await expect(fruitsPage.fruit('Strawberry')).toBeVisible();
    }); 
//     test('Simula una respuesta vacia, muestra un mensaje cuando no hay frutas disponibles',  async  ({ page }) => {
//         const fruitsPage = new FruitsPage(page);
//     // Interceptamos y devolvemos un arreglo vacío
//         await page.route(FRUITS_API_PATTERN, async (route)=> {
//             await route.fulfill({
//                 status: 200,
//                 contentType: 'application/json',
//                 json: [], // Array vacío
//     });
//   });
//         await fruitsPage.goto();
//         // Validamos que el Front-end muestre el estado vacío al usuario
//         await expect(page.getByText('No hay frutas disponibles')).toBeVisible();
//     });
    test('modifica la respuesta real agregando un elemento', async ({ page }) => {
        const fruitsPage = new FruitsPage(page);
        await page.route(FRUITS_API_PATTERN, async (route) => {
            const response = await route.fetch(); //Pide la respuesta real
            const json = await response.json();
            json.push({ name: 'Loquat', id: 100 });
            await route.fulfill({response, json});
    });
        await fruitsPage.goto();
        await expect(fruitsPage.fruit('Loquat')).toBeVisible();
});
    test('simula la caida del servidor', async  ({ page }) => {
        const fruitsPage = new FruitsPage(page);
        await page.route(FRUITS_API_PATTERN, async (route) => {
            await route.fulfill({status: 500, body: 'Internal Server Error'});
    });
        //await fruitsPage.goto();
        //await expect(page.getByText('Internal Server Error')).toBeVisible();
});
});

