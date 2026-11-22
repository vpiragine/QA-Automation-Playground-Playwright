import { test } from '../page-fixtures';

test ('permite interactuar con alertas JavaScript', async ({ jsAlerts }) => {

    await jsAlerts.blockAdsAndAnalytics();
    await jsAlerts.navigate();
    await jsAlerts.acceptDialog();
    await jsAlerts.clickForJsAlert();
    await jsAlerts.assertJSAlertClicked('You successfully clicked an alert');

});