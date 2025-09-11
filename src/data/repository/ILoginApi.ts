import type { AxiosResponse } from "axios";
import type { ErrorResponseData, LoginRequestData, LoginResponseData } from "../models";

export interface ILoginApi {
    login(loginRequest: LoginRequestData): Promise<AxiosResponse<LoginResponseData | ErrorResponseData>>
}