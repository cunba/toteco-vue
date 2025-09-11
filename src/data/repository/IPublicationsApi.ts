import type { IGlobalRepository } from "@/infrastructure/data/repository/IGlobalRepository"
import type { AxiosResponse } from "axios"
import type { ErrorResponseData, PublicationData } from "../models"

export interface IPublicationsApi extends IGlobalRepository<PublicationData> {
    getByUser(id: string): Promise<AxiosResponse<PublicationData[] | ErrorResponseData>>
    getByEstablishment(id: string): Promise<AxiosResponse<PublicationData[] | ErrorResponseData>>
    getByScoreRange(minScore: Number, maxScore: Number): Promise<AxiosResponse<PublicationData[] | ErrorResponseData>>
    getByPriceRange(minPrice: Number, maxPrice: Number): Promise<AxiosResponse<PublicationData[] | ErrorResponseData>>
}