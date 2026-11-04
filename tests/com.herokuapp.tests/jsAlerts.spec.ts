import { test } from '@playwright/test'
import { JsAlerts } from '../com.herokuapp.pages/JSAlertsPage'

test ('permite interactuar con alertas JavaScript', async ({ page }) => {
    const jsAlerts = new JsAlerts(page);

    await jsAlerts.blockAdsAndAnalytics();
    await jsAlerts.navigate();
    await jsAlerts.acceptDialog();
    await jsAlerts.clickForJsAlert();
    await jsAlerts.assertJSAlertClicked('You successfully clicked an alert');

});