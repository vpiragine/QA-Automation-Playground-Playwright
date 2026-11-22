import { test as base } from '@playwright/test';
import { LoginPage } from './com.saucedemo.pages/LoginPage';
import { InventoryPage } from './com.saucedemo.pages/InventoryPage';
import { CartPage } from './com.saucedemo.pages/CartPage';
import { CheckoutPage } from './com.saucedemo.pages/CheckoutPage';
import { FruitsPage } from './dev.demoplaywright.pages/FruitsPage';
import { ProductsApi } from './com.automationexercise.apiclient/ProductsApi';
import { DynamicContent } from './com.herokuapp.pages/DynamicContent';
import { IframePage } from './com.herokuapp.pages/IframePage';
import { JsAlerts } from './com.herokuapp.pages/JSAlertsPage';
import { UploadDocument } from './com.herokuapp.pages/UploadDocument';
import { WebTablesPage } from './com.demoqa.pages/WebTablesPage';
import { ResponsivePage } from './dev.playwright.pages/ResponsivePage';

// 1. La lista de tus fixtures: su nombre y qué tipo de objeto entrega cada uno.

type MyFixtures = {
    loginPage: LoginPage;   
    inventoryPage: InventoryPage;
    cartPage: CartPage;
    checkoutPage: CheckoutPage;
    fruitsPage: FruitsPage;
    productsApi: ProductsApi;
    dynamicContent: DynamicContent;
    iframePage: IframePage;
    jsAlerts: JsAlerts;
    uploadDocument: UploadDocument;
    webTablesPage: WebTablesPage;
    responsivePage: ResponsivePage;
};

// 2. Un "test" nuevo: el de Playwright más tus fixtures.
export const test = base.extend<MyFixtures>({
    loginPage: async ({ page }, use) => {
        await use (new LoginPage(page));
    },
    inventoryPage: async ({ page }, use) => {
        await use (new InventoryPage(page));
    },
    cartPage: async ({ page }, use) => {
        await use (new CartPage(page));
    },
    checkoutPage: async ({ page }, use) => {
        await use (new CheckoutPage(page));
    },
    fruitsPage: async ({ page }, use) => {
        await use (new FruitsPage(page));
    },
    productsApi: async ({ request }, use) => {
        await use (new ProductsApi(request));
    },
    dynamicContent: async ({ page }, use) => {
        await use (new DynamicContent(page));
    },
    iframePage: async ({ page }, use) => {
        await use (new IframePage(page));
    },
    jsAlerts: async ({ page }, use) => {
        await use (new JsAlerts(page));
    },
    uploadDocument: async ({ page }, use) => {
        await use (new UploadDocument(page));
    },
    webTablesPage: async ({ page }, use) => {
        await use (new WebTablesPage(page));
    },
    responsivePage: async ({ page }, use) => {
        await use (new ResponsivePage(page));
    }
});

// 3. Reexporta expect, para importar todo desde un solo lugar.
export { expect } from '@playwright/test';