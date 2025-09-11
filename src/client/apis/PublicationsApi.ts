import type { Configuration } from "../configuration";
import { BaseAPI } from "../runtime";
import type { AxiosResponse } from "axios";
import type { Publication, Product, ErrorResponse } from "../index";

export class PublicationsApi extends BaseAPI {
  public async getAll(): Promise<AxiosResponse<Publication[]>> {
    return this.axios.get<Publication[]>(`/api/Publications`, { ...this.options });
  }
  public async save(pub: Publication): Promise<AxiosResponse<Publication>> {
    return this.axios.post<Publication>(`/api/Publications`, pub, { ...this.options });
  }
  public async getById(id: string): Promise<AxiosResponse<Publication>> {
    return this.axios.get<Publication>(`/api/Publications/${encodeURIComponent(String(id))}`, { ...this.options });
  }
  public async update(id: string, pub: Publication): Promise<AxiosResponse<void>> {
    return this.axios.put<void>(`/api/Publications/${encodeURIComponent(String(id))}`, pub, { ...this.options });
  }
  public async delete(id: string): Promise<AxiosResponse<void>> {
    return this.axios.delete<void>(`/api/Publications/${encodeURIComponent(String(id))}`, { ...this.options });
  }
  public async getByUser(id: string): Promise<AxiosResponse<Publication[]>> {
    return this.axios.get<Publication[]>(`/api/Publications/user/${encodeURIComponent(String(id))}`, { ...this.options });
  }
  public async getByEstablishment(id: string): Promise<AxiosResponse<Publication[]>> {
    return this.axios.get<Publication[]>(`/api/Publications/establishment/${encodeURIComponent(String(id))}`, { ...this.options });
  }
  public async getByScoreRange(minScore: Number, maxScore: Number): Promise<AxiosResponse<Publication[]>> {
    return this.axios.get<Publication[]>(`/api/Publications/score`, { params: { minScore, maxScore }, ...this.options });
  }
  public async getByPriceRange(minPrice: Number, maxPrice: Number): Promise<AxiosResponse<Publication[]>> {
    return this.axios.get<Publication[]>(`/api/Publications/price`, { params: { minScore: minPrice, maxScore: maxPrice }, ...this.options });
  }
}
