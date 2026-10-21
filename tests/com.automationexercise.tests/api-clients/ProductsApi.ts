import { APIRequestContext } from '@playwright/test';
import { AUTOMATION_EXERCISE_URL } from '../../../config/urls';
// API client: agrupa las llamadas a un recurso específico de la API, en este caso, productos.
export class ProductsApi {
  private request: APIRequestContext;
  baseUrl: string;

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