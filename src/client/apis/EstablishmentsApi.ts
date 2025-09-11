import type { AxiosResponse } from "axios";
import type { Establishment } from "../index";
import { BaseAPI } from "../runtime";

export class EstablishmentsApi extends BaseAPI {
  public async getAll(): Promise<AxiosResponse<Establishment[]>> {
    return this.axios.get<Establishment[]>(`/api/Establishments`, { ...this.options });
  }
  public async save(est: Establishment): Promise<AxiosResponse<Establishment>> {
    return this.axios.post<Establishment>(`/api/Establishments`, est, { ...this.options });
  }
  public async getById(id: string): Promise<AxiosResponse<Establishment>> {
    return this.axios.get<Establishment>(`/api/Establishments/${encodeURIComponent(String(id))}`, { ...this.options });
  }
  public async update(id: string, est: Establishment): Promise<AxiosResponse<void>> {
    return this.axios.put<void>(`/api/Establishments/${encodeURIComponent(String(id))}`, est, { ...this.options });
  }
  public async delete(id: string): Promise<AxiosResponse<void>> {
    return this.axios.delete<void>(`/api/Establishments/${encodeURIComponent(String(id))}`, { ...this.options });
  }
  public async getByName(name: string): Promise<AxiosResponse<void>> {
    return this.axios.get<void>(`/api/Establishments/name/${encodeURIComponent(String(name))}`, { ...this.options });
  }
  public async getByOpen(open: boolean): Promise<AxiosResponse<void>> {
    return this.axios.get<void>(`/api/Establishments/open/${encodeURIComponent(open)}`, { ...this.options });
  }
  public async getByScore(score: Number): Promise<AxiosResponse<void>> {
    return this.axios.get<void>(`/api/Establishments/open/${encodeURIComponent(Number(score))}`, { ...this.options });
  }
  public async getByScoreRange(minScore: Number, maxScore: Number): Promise<AxiosResponse<void>> {
    return this.axios.get<void>(`/api/Establishments/score`, { params: { minScore, maxScore }, ...this.options });
  }
}
