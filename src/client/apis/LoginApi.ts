import type { Configuration } from "../configuration";
import { BaseAPI } from "../runtime";
import type { AxiosResponse } from "axios";
import type { LoginRequest, LoginResponse, ErrorResponse } from "../index";

export class LoginApi extends BaseAPI {
  public async login(req: LoginRequest): Promise<AxiosResponse<LoginResponse>> {
    return this.axios.post<LoginResponse>(`/api/Login`, req, { ...this.options });
  }
}
