import { test } from '../page-fixtures';

test('permite subir archivos', async ({ uploadDocument }) => {

    await uploadDocument.blockAdsAndAnalytics();
    await uploadDocument.navigate();
    await uploadDocument.uploadDocument();
    await uploadDocument.assertDocUploaded('archivo-prueba.txt');
});


