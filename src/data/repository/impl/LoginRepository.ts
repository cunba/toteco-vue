import type { LoginRequestData } from "@/data/models"
import { Api } from "@/infrastructure/data/ApiClient"
import { ApiBaseRepository } from "@/infrastructure/data/repository/ApiBaseRepository"
import type { ILoginApi } from "../ILoginApi"

export class LoginRepository extends ApiBaseRepository<ILoginApi> {

    constructor() {
        super(Api.LoginApi, false)
    }

    async login(loginRequest: LoginRequestData) {
        try {
            const client = this.apiClient
            const result = await client!.login(loginRequest)
            return result.data
        } catch (e: any) {
            throw e
        }
    }
}