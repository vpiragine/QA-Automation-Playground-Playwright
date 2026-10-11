// Vamos a escribir un test de ejemplo para verificar la funcionalidad de un componente responsive en una 
// aplicación web. A continuación, se muestra un ejemplo de cómo podría estructurarse el archivo `responsive.spec.ts` 
// utilizando TypeScript y un framework de pruebas como Jest.

import { test, expect } from '@playwright/test'; 
import { PLAYWRIGHT_DOCS_URL } from '../config/urls'; // Asegúrate de tener un archivo de configuración con la URL de prueba

test.describe('Responsive Navigation', () => {
    test('desktop: el menu muestra los enlaces', async ({ page, isMobile }) => {
    test.skip(isMobile, 'Este test solo se ejecuta en Desktop');
    await page.goto(PLAYWRIGHT_DOCS_URL);

    const docsLink = page.getByRole('link', { name: 'Docs', exact: true });
    const menuButton = page.getByRole('button', { name: 'Menu' });
    
    await expect(docsLink).toBeVisible();
    await expect(menuButton).toBeHidden();
    });

test('mobile: los botones estan tras el menu hamburguesa', async ({ page, isMobile }) => {
    test.skip(!isMobile, 'Comportamiento exclusivo de Mobile');
    await page.goto(PLAYWRIGHT_DOCS_URL);

    const docsLink = page.getByRole('link', { name: 'Docs', exact: true });
    const menuButton = page.getByRole('button', { name: 'Toggle navigation bar' });

    await expect(docsLink).toBeHidden();
    await expect(menuButton).toBeVisible();
    });
});