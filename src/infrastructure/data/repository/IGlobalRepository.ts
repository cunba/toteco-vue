import type { ErrorResponseData } from "@/data/models"
import type { AxiosResponse } from "axios"


export interface IGlobalRepository<T> {

    save: (body: T) => Promise<AxiosResponse<T | ErrorResponseData>>

    update: (id: string, body: T) => Promise<AxiosResponse<void | ErrorResponseData>>

    delete: (id: string) => Promise<AxiosResponse<void | ErrorResponseData>>

    getById: (id: string) => Promise<AxiosResponse<T | ErrorResponseData>>

    getAll: () => Promise<AxiosResponse<T[] | ErrorResponseData>>

}