import { test, expect } from '@playwright/test';
import { HEROKUAPP_URL, HEROKUAPP_URL_IFRAME } from '../../config/urls';

test.describe('Widgets difíciles', async () => {
    test('permite escribir en un editor de texto enriquecido', async ({ page }) => {
        await page.route('**/*.{png,jpg,jpeg,gif,svg}', route => route.abort()); // Opcional: si no necesitas imágenes
        await page.route('**/*analytics*', route => route.abort());
        await page.route('**/*google*', route => route.abort());
        await page.goto(HEROKUAPP_URL_IFRAME),{ waitUntil: 'commit', timeout: 30000 };
        const editor = page.frameLocator('#mce_0_ifr').locator('#tinymce');
        await expect(editor).toBeVisible();
        await expect(editor).toHaveText('Your content goes here.');
    })
    test ('permite ver alertas de JavaScript', async ({ page }) => {
        await page.route('**/*.{png,jpg,jpeg,gif,svg}', route => route.abort()); // Opcional: si no necesitas imágenes
        await page.route('**/*analytics*', route => route.abort());
        await page.route('**/*google*', route => route.abort());
        await page.goto(HEROKUAPP_URL + '/javascript_alerts'), { waitUntil: 'commit', timeout: 30000 };
        //page.on('dialog', dialog => dialog.accept());
        await page.getByText('Click for JS Alert').click();
        await expect(page.locator('#result')).toHaveText('You successfully clicked an alert');
    })
    test ('permite interactuar con contenido que se carga dinámicamente', async ({ page }) => {
        await page.route('**/*.{png,jpg,jpeg,gif,svg}', route => route.abort()); // Opcional: si no necesitas imágenes
        await page.route('**/*analytics*', route => route.abort());
        await page.route('**/*google*', route => route.abort());
        await page.goto(HEROKUAPP_URL + '/dynamic_loading/1'),{ waitUntil: 'commit', timeout: 30000 };
        const startButton = page.getByText('Start');
        await startButton.click();
        await expect(page.locator('#finish')).toHaveText('Hello World!');
    })
    test ('permite subir archivos', async ({ page }) => {
        await page.route('**/*.{png,jpg,jpeg,gif,svg}', route => route.abort()); // Opcional: si no necesitas imágenes
        await page.route('**/*analytics*', route => route.abort());
        await page.route('**/*google*', route => route.abort());
        await page.goto(HEROKUAPP_URL + '/upload'),{ waitUntil: 'commit', timeout: 120000 };
        const filePath = 'tests/fixtures/archivo-prueba.txt';
        await page.locator('#file-upload').setInputFiles(filePath);
        await Promise.all([
            page.waitForNavigation({ waitUntil: 'commit', timeout: 120000 }),
            page.locator('#file-submit').click()
        ]);
        await expect(page.locator('#uploaded-files')).toHaveText('archivo-prueba.txt'), { 
  timeout: 120000
    }});
 })  