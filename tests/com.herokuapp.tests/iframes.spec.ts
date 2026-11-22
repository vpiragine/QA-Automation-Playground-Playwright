import { test } from '../page-fixtures';

test.describe('Widgets difíciles', async () => {
    test('permite escribir en un editor de texto enriquecido', async ({ iframePage }) => {

        await iframePage.blockAdsAndAnalytics();
        await iframePage.navigate();
        await iframePage.assertEditorContent('Your content goes here.'); 
    });
});