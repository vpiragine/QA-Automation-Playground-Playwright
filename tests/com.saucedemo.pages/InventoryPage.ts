import { Page , Locator, expect } from '@playwright/test';


export class InventoryPage {
    constructor(private readonly page: Page) {}

    private get addToCartButton(): Locator { return this.page.locator('.btn_inventory'); }
    private get cartBadge() { return this.page.locator('.shopping_cart_badge'); }
    private get cartLink() { return this.page.locator('.shopping_cart_link'); }

    //Agregar un producto
    async addProductToCart(index = 0) {
        await this.addToCartButton.nth(index).click(); 
    }
    //Ver el contenido del carrito
    getCartBadge() {
        return this.cartBadge;
    }
    //Ir al carrito
    async navigateToCart() {
        await this.cartLink.click();
        await this.page.waitForURL(/cart.html/);
        await expect(this.page).toHaveURL(/cart.html/);
    }
    //Assertion: numero de productos en el carrito
    async assertCartBadgeCount(expectedCount: number) {
        const badge = this.getCartBadge();
        await expect(badge).toHaveText(expectedCount.toString());
    }
}