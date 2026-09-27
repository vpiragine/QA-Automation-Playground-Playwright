import { test, expect } from '@playwright/test';


test.describe('Widgets difíciles', async () => {
    test('permite escribir en un editor de texto enriquecido', async ({ page }) => {
        await page.goto('https://the-internet.herokuapp.com/iframe');
        const editor = page.frameLocator('#mce_0_ifr').locator('#tinymce');
        await expect(editor).toBeVisible();
        await expect(editor).toHaveText('Your content goes here.');
    })
    test ('permite ver alertas de JavaScript', async ({ page }) => {
        await page.goto('https://the-internet.herokuapp.com/javascript_alerts');
        //page.on('dialog', dialog => dialog.accept());
        await page.getByText('Click for JS Alert').click();
        await expect(page.locator('#result')).toHaveText('You successfully clicked an alert');
    })
    test ('permite interactuar con contenido que se carga dinámicamente', async ({ page }) => {
        await page.goto('https://the-internet.herokuapp.com/dynamic_loading/1');
        const startButton = page.getByText('Start');
        await startButton.click();
        await expect(page.locator('#finish')).toHaveText('Hello World!');
    })
    test ('permite subir archivos', async ({ page }) => {
        await page.goto('https://the-internet.herokuapp.com/upload');
        const filePath = 'tests/fixtures/archivo-prueba.txt';
        await page.locator('#file-upload').setInputFiles(filePath);
        await page.locator('#file-submit').click();
        await expect(page.locator('#uploaded-files')).toHaveText('archivo-prueba.txt');
    })
})