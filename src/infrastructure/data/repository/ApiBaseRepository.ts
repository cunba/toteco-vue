import type { Api } from "../ApiClient"
import ApiClient from "../ApiClient"


export class ApiBaseRepository<T> {

    isMocked: boolean
    api: Api

    constructor(api: Api, mocked: boolean) {
        this.isMocked = mocked
        this.api = api
    }

    get apiClient() {
        return ApiClient.clientFor<T>(this.api, this.isMocked)
    }
}