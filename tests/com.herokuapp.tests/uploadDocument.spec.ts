import { test } from '@playwright/test'
import { uploadDoc } from '../com.herokuapp.pages/UploadDocument'

test ('permite subir archivos', async ({ page }) => {
    const uplDoc = new uploadDoc(page);
    
    await uplDoc.blockAdsAndAnalytics();
    await uplDoc.navigate();
    await uplDoc.uploadDocument();
    await uplDoc.assertDocUploaded('archivo-prueba.txt');
        
});


