import type { IGlobalRepository } from "@/infrastructure/data/repository/IGlobalRepository"
import type { AxiosResponse } from "axios"
import type { ErrorResponseData, ProductData } from "../models"

export interface IProductsApi extends IGlobalRepository<ProductData> {
    getByPublication(id: string): Promise<AxiosResponse<ProductData[] | ErrorResponseData>>
}