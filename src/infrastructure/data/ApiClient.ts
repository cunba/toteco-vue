import { BaseAPI, Configuration, type ConfigurationParameters } from '../../client'

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
    private static lastToken: string | undefined

    private static clientConfig(token?: string): Configuration {
        const params: ConfigurationParameters = {
            basePath: 'http://localhost:5540'
        }
        if (token) {
            params.accessToken = token
        }
        return new Configuration(params)
    }

    public static clientFor<T>(type: Api, mock: boolean = false): T | undefined {
        const token = localStorage.getItem('token') || undefined
        const apiMap = mock ? this.mockApis : this.apis
        const existingApi = apiMap.get(type)

        // Si ya existe y el token no ha cambiado, reutiliza
        if (existingApi && token === this.lastToken) {
            return existingApi as T
        }

        // Si no existe o el token cambió, crea nueva instancia
        const apiClass = existingApi?.constructor as any
        if (apiClass) {
            const newApi = new apiClass(this.clientConfig(token))
            apiMap.set(type, newApi)
            this.lastToken = token
            return newApi as T
        }

        return existingApi as T
    }

    public static register(key: Api, customApi: BaseAPI, mock: boolean = false) {
        const apiMap = mock ? this.mockApis : this.apis
        apiMap.set(key, customApi)
    }
}