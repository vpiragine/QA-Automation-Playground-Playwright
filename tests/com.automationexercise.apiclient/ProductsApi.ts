import { APIRequestContext } from '@playwright/test';
import { AUTOMATION_EXERCISE_URL } from '../../config/urls';
// API client: groups calls in an specific endpoint of the API, in this case, products.
export class ProductsApi {
  baseUrl: string;
  private request: APIRequestContext;
  
  constructor(request: APIRequestContext) {
    this.request = request;
    this.baseUrl = `${AUTOMATION_EXERCISE_URL}/api`;
  }
async getAllProducts() {
    return this.request.get(`${this.baseUrl}/productsList`);
    }

async searchProduct(term: string) {
    return this.request.post(`${this.baseUrl}/searchProduct`, {
      form: { search_product: term },
    });
  }
  async searchProductWithoutTerm() {
    return this.request.post(`${this.baseUrl}/searchProduct`);
  }

// Método no soportado por la API: existe para probar el caso negativo.
async postToProductsList() {
    return this.request.post(`${this.baseUrl}/productsList`);
  }
}   