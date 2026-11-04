import { test } from '@playwright/test';
import { WebTablesPage } from '../com.demoqa.pages/WebTablesPage.ts';

test('Permite introducir datos en tablas dinamicas', async ({ page }) => {
    const webTablesPage = new WebTablesPage(page);

    await webTablesPage.navigate();

    await webTablesPage.addNewUser({
        firstName: 'Juan',
        lastName: 'Perez',
        email: 'asd@asd.com',
        age: '30',
        salary: '50000',
        department: 'Ventas',
    });

    await webTablesPage.assertRowContainsText('Juan');
    await webTablesPage.assertRowContainsText('Perez');
});
