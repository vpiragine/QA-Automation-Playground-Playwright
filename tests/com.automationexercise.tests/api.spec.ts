import { test, expect } from '@playwright/test';
import { ProductsApi } from './api-clients/ProductsApi';

test.describe('API de Automation Exercise', () => {
  test('GET /productsList - Obtener todos los productos - 200', async ({ request }) => {
    const productsApi = new ProductsApi(request);
    const response = await productsApi.getAllProducts(); 
    expect (response.ok()).toBeTruthy();

    const body = await response.json();
    expect (body.responseCode).toBe(200);
    expect (body.products.length).toBeGreaterThan(0);
    expect (body.products[0]).toHaveProperty('name');
    //console.log('Status HTTP:', response.status(), '| responseCode:', body.responseCode);
    });

    test('POST /searchProduct - Buscar un producto existente - 200', async ({ request }) => {
    const productsApi = new ProductsApi(request);
    const response = await productsApi.searchProduct('tshirt');
    const body = await response.json();
    expect (body.responseCode).toBe(200);
    expect (body.products.length).toBeGreaterThan(0);
    //console.log('Status HTTP:', response.status(), '| responseCode:', body.responseCode);
    });

    test('POST /searchProduct - Buscar un producto inexistente - 400', async ({ request }) => {
    const productsApi = new ProductsApi(request);
    const response =  await productsApi.searchProductWithoutTerm();
    const body = await response.json(); 
    expect (body.responseCode).toBe(400);
    expect (body.message).toBe('Bad request, search_product parameter is missing in POST request.');
    //console.log('Status HTTP:', response.status(), '| responseCode:', body.responseCode);
    });
 
    test('POST /productsList - Intentar hacer un POST a productsList no está permitido - 405', async ({ request }) => {
    const productsApi = new ProductsApi(request);
    const response = await productsApi.postToProductsList();
    const body = await response.json();
    expect (body.responseCode).toBe(405);
    expect (body.message).toBe('This request method is not supported.');
    //console.log('Status HTTP:', response.status(), '| responseCode:', body.responseCode);
    
});
});
//