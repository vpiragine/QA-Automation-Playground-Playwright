import { Page, expect } from '@playwright/test';
export class CheckoutPage {
    page: Page;
    constructor(page: Page) {
        this.page = page;

    }
    //Ir al checkout desde el carrito
    async navigateToCheckout() {
        await this.page.getByText('Checkout').click();
    }
    //Completar el formulario de checkout - info del cliente
    async fillCheckoutForm(firstName: string, lastName: string, postalCode: string) {
        await this.page.getByPlaceholder('First Name').fill(firstName);
        await this.page.getByPlaceholder('Last Name').fill(lastName);
        await this.page.getByPlaceholder('Zip/Postal Code').fill(postalCode);
        await this.page.getByRole('button', { name: 'Continue' }).click();
    }
    //Verificar que se muestre la página de resumen del pedido
    async verifyCheckoutSummary() {
        await this.page.getByText('Payment Information').isVisible();
        await this.page.getByText('Shipping Information').isVisible();
        await this.page.getByText('Price Total').isVisible();
    }   
    //Hacer clic en "Finish" para completar la compra
    async confirmPurchase() {
        await this.page.getByRole('button', { name: 'Finish' }).click();
    }
    //Verificar que se muestre la página de confirmación
    async verifyPurchaseConfirmation() {
        await expect(this.page.getByText('THANK YOU FOR YOUR ORDER')).toBeVisible();
    }

};