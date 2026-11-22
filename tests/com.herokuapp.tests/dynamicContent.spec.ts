import { test } from '../page-fixtures';

test ('permite interactuar con contenido que se carga dinámicamente', async ({ dynamicContent }) => {

    await dynamicContent.blockAdsAndAnalytics();
    await dynamicContent.navigate();
    await dynamicContent.startLoading();
    await dynamicContent.assertDynamicContent('Hello World!'); 
 });