import { test, expect } from '../page-fixtures';

test.beforeEach(async ({ inventoryPage }) => {
  await inventoryPage.goto();
});
    test('realiza un checkout completo', async ({ inventoryPage, checkoutPage }) => {
        // 1. Agregar un producto al carrito 
        await inventoryPage.addProductToCart(0);
        // 2. Ir al carrito
        await inventoryPage.navigateToCart();
        // 3. Hacer clic en "Checkout"
        await checkoutPage.navigateToCheckout();
        // 4. Completar el formulario de información del client
        await checkoutPage.fillCheckoutForm('Vanessa', 'Piragine', '12345');
        // 5. Verificar que se muestre la página de resumen del pedido
       await checkoutPage.verifyCheckoutSummary();
        // 6. Hacer clic en "Finish"
        await checkoutPage.confirmPurchase();
        // 7. Verificar que se muestre la página de confirmación
        await checkoutPage.verifyPurchaseConfirmation();
    });