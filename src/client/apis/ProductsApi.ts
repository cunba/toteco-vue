import type { Configuration } from "../configuration";
import { BaseAPI } from "../runtime";
import type { AxiosResponse } from "axios";
import type { Product, ErrorResponse } from "../index";

export class ProductsApi extends BaseAPI {
  public async getAll(): Promise<AxiosResponse<Product[]>> {
    return this.axios.get<Product[]>(`/api/Products`, { ...this.options });
  }
  public async save(product: Product): Promise<AxiosResponse<Product>> {
    return this.axios.post<Product>(`/api/Products`, product, { ...this.options });
  }
  public async getById(id: string): Promise<AxiosResponse<Product>> {
    return this.axios.get<Product>(`/api/Products/${encodeURIComponent(String(id))}`, { ...this.options });
  }
  public async update(id: string, product: Product): Promise<AxiosResponse<void>> {
    return this.axios.put<void>(`/api/Products/${encodeURIComponent(String(id))}`, product, { ...this.options });
  }
  public async delete(id: string): Promise<AxiosResponse<void>> {
    return this.axios.delete<void>(`/api/Products/${encodeURIComponent(String(id))}`, { ...this.options });
  }
  public async getByPublication(id: string): Promise<AxiosResponse<void>> {
    return this.axios.get<void>(`/api/Products/publication/${encodeURIComponent(String(id))}`, { ...this.options });
  }
}
