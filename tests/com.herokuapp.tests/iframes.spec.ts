import { test } from '@playwright/test';
import { IframePage } from '../com.herokuapp.pages/IframePage';


test.describe('Widgets difíciles', async () => {
    test('permite escribir en un editor de texto enriquecido', async ({ page }) => {
        const iframePage = new IframePage(page);

        await iframePage.blockAdsAndAnalytics();
        await iframePage.navigate();
        await iframePage.assertEditorContent('Your content goes here.'); 
    });
});