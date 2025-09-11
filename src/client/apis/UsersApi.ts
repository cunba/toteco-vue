import type { Configuration } from "../configuration";
import { BaseAPI } from "../runtime";
import type { AxiosResponse } from "axios";
import type { User, ErrorResponse } from "../index";

export class UsersApi extends BaseAPI {
  public async getAll(): Promise<AxiosResponse<User[]>> {
    return this.axios.get<User[]>(`/api/Users`, { ...this.options });
  }
  public async save(user: User): Promise<AxiosResponse<User>> {
    return this.axios.post<User>(`/api/Users`, user, { ...this.options });
  }
  public async getById(id: string): Promise<AxiosResponse<User>> {
    return this.axios.get<User>(`/api/Users/${encodeURIComponent(String(id))}`, { ...this.options });
  }
  public async update(id: string, user: User): Promise<AxiosResponse<void>> {
    return this.axios.put<void>(`/api/Users/${encodeURIComponent(String(id))}`, user, { ...this.options });
  }
  public async delete(id: string): Promise<AxiosResponse<void>> {
    return this.axios.delete<void>(`/api/Users/${encodeURIComponent(String(id))}`, { ...this.options });
  }
}
