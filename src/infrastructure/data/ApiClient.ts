import { BaseAPI, Configuration, type ConfigurationParameters } from '../../client';

export enum Api {
    EstablishmentsApi,
    ProductsApi,
    PublicationsApi,
    UsersApi,
    LoginApi
}

export default class ApiClient {
    private static apis = new Map<Api, BaseAPI>()

    private static mockApis = new Map<Api, BaseAPI>()

    public static clientFor<T>(type: Api, mock: boolean = false): T | undefined {
        const api = mock ? ApiClient.mockApis.get(type) : ApiClient.apis.get(type)
        return api as T
    }

    public static register(key: Api, customApi: BaseAPI, mock: boolean = false) {
        mock ? ApiClient.mockApis.set(key, customApi) : ApiClient.apis.set(key, customApi)
    }
}