import { test } from '@playwright/test'
import { DynamicContent } from '../com.herokuapp.pages/DynamicContent';


test ('permite interactuar con contenido que se carga dinámicamente', async ({ page }) => {
    const dynamicContent = new DynamicContent(page);

    await dynamicContent.blockAdsAndAnalytics();
    await dynamicContent.navigate();
    await dynamicContent.startLoading();
    await dynamicContent.assertDynamicContent('Hello World!'); 
 });