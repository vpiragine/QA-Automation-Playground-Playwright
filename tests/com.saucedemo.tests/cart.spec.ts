/// <reference types="node" />

import { test } from '../page-fixtures'; 

test.beforeEach(async ({ inventoryPage }) => {
  await inventoryPage.goto();
});

test ('Agrega 2 productos al carrito y elimina uno', async ({ inventoryPage, cartPage }) => { 
        //1. Agregar el primer producto
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
 });  