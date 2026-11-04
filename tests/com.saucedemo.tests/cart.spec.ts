import { test } from '@playwright/test';
import { InventoryPage } from '../com.saucedemo.pages/InventoryPage';
import { CartPage } from '../com.saucedemo.pages/CartPage';
import { LoginPage } from '../com.saucedemo.pages/LoginPage';

test.beforeEach(async ({ page }) => {
  const loginPage = new LoginPage(page);
  await loginPage.navigateToLoginPage();
  await loginPage.login('standard_user', 'secret_sauce');
});


test.describe('Pruebas de carrito', () => {
    test('agrega 2 productos al carrito y elimina uno', async ({ page }) => {
        const inventoryPage = new InventoryPage(page);
        const cartPage = new CartPage(page);
        
        // 1. Agregar el primer producto
        await inventoryPage.addProductToCart(0);    
        // 2. Agregar el segundo producto (el botón del primero cambió a "Remove")
        await inventoryPage.addProductToCart(1);
        // 3. Verificar que la insignia del carrito marque '2'
        await inventoryPage.assertCartBadgeCount(2);
        // 4. Ir al carrito
        await inventoryPage.navigateToCart(); 
        // 5. Eliminar un producto desde la vista del carrito
        await cartPage.removeProduct(0);
        // 6. Verificar que la insignia del carrito marque '1'
        await inventoryPage.assertCartBadgeCount(1);
})});