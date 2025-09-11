import type { IGlobalRepository } from "@/infrastructure/data/repository/IGlobalRepository";
import type { AxiosResponse } from "axios";
import type { ErrorResponseData, EstablishmentData } from "../models";

export interface IEstablishmentsApi extends IGlobalRepository<EstablishmentData> {
    getByName(name: string): Promise<AxiosResponse<EstablishmentData[] | ErrorResponseData>>
    getByOpen(open: boolean): Promise<AxiosResponse<EstablishmentData[] | ErrorResponseData>>
    getByScore(score: Number): Promise<AxiosResponse<EstablishmentData[] | ErrorResponseData>>
    getByScoreRange(minScore: Number, maxScore: Number): Promise<AxiosResponse<EstablishmentData[] | ErrorResponseData>>
}