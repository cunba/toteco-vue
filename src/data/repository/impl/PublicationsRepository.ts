import { ErrorResponseData, type PublicationData } from "@/data/models"
import { Api } from "@/infrastructure/data/ApiClient"
import { ApiBaseRepository } from "@/infrastructure/data/repository/ApiBaseRepository"
import type { IPublicationsApi } from "../IPublicationsApi"
import { LoginRepository } from "./LoginRepository"

export class PublicationsRepository extends ApiBaseRepository<IPublicationsApi> {

    static tries = 0

    constructor() {
        super(Api.PublicationsApi, false)
    }

    async save(body: PublicationData) {
        try {
            const client = await this.apiClient
            const result = await client!.save(body)
            PublicationsRepository.tries = 0
            return result.data
        } catch (e) {
            if (PublicationsRepository.tries < 1) {
                PublicationsRepository.tries++
                const credentials = localStorage.getItem("credentials")
                const loginResponse = await new LoginRepository().login(JSON.parse(credentials!))

                if (loginResponse instanceof ErrorResponseData) {
                    throw loginResponse
                } else {
                    localStorage.setItem('token', loginResponse.token)
                    this.save(body)
                }
            } else {
                PublicationsRepository.tries = 0
                throw e
            }
        }
    }

    async update(id: string, body: PublicationData) {
        try {
            const client = await this.apiClient
            const result = await client!.update(id, body)
            PublicationsRepository.tries = 0
            return result.data
        } catch (e) {
            if (PublicationsRepository.tries < 1) {
                PublicationsRepository.tries++
                const credentials = localStorage.getItem("credentials")
                const loginResponse = await new LoginRepository().login(JSON.parse(credentials!))

                if (loginResponse instanceof ErrorResponseData) {
                    throw loginResponse
                } else {
                    localStorage.setItem('token', loginResponse.token)
                    this.update(id, body)
                }
            } else {
                PublicationsRepository.tries = 0
                throw e
            }
        }
    }

    async delete(id: string) {
        try {
            const client = await this.apiClient
            const result = await client!.delete(id)
            PublicationsRepository.tries = 0
            return result.data
        } catch (e) {
            if (PublicationsRepository.tries < 1) {
                PublicationsRepository.tries++
                const credentials = localStorage.getItem("credentials")
                const loginResponse = await new LoginRepository().login(JSON.parse(credentials!))

                if (loginResponse instanceof ErrorResponseData) {
                    throw loginResponse
                } else {
                    localStorage.setItem('token', loginResponse.token)
                    this.delete(id)
                }
            } else {
                PublicationsRepository.tries = 0
                throw e
            }
        }
    }

    async getAll() {
        try {
            const client = await this.apiClient
            const result = await client!.getAll()
            PublicationsRepository.tries = 0
            return result.data
        } catch (e) {
            if (PublicationsRepository.tries < 1) {
                PublicationsRepository.tries++
                this.getAll()
            } else {
                PublicationsRepository.tries = 0
                throw e
            }
        }
    }

    async getById(id: string) {
        try {
            const client = await this.apiClient
            const result = await client!.getById(id)
            PublicationsRepository.tries = 0
            return result.data
        } catch (e) {
            if (PublicationsRepository.tries < 1) {
                PublicationsRepository.tries++
                this.getById(id)
            } else {
                PublicationsRepository.tries = 0
                throw e
            }
        }
    }

    async getByUser(id: string) {
        try {
            const client = await this.apiClient
            const result = await client!.getByUser(id)
            PublicationsRepository.tries = 0
            return result.data
        } catch (e) {
            if (PublicationsRepository.tries < 1) {
                PublicationsRepository.tries++
                this.getByUser(id)
            } else {
                PublicationsRepository.tries = 0
                throw e
            }
        }
    }

    async getByEstablishment(id: string) {
        try {
            const client = await this.apiClient
            const result = await client!.getByEstablishment(id)
            PublicationsRepository.tries = 0
            return result.data
        } catch (e) {
            if (PublicationsRepository.tries < 1) {
                PublicationsRepository.tries++
                this.getByEstablishment(id)
            } else {
                PublicationsRepository.tries = 0
                throw e
            }
        }
    }

    async getByScoreRange(minScore: Number, maxScore: Number) {
        try {
            const client = await this.apiClient
            const result = await client!.getByScoreRange(minScore, maxScore)
            PublicationsRepository.tries = 0
            return result.data
        } catch (e) {
            if (PublicationsRepository.tries < 1) {
                PublicationsRepository.tries++
                this.getByScoreRange(minScore, maxScore)
            } else {
                PublicationsRepository.tries = 0
                throw e
            }
        }
    }

    async getByPriceRange(minPrice: Number, maxPrice: Number) {
        try {
            const client = await this.apiClient
            const result = await client!.getByPriceRange(minPrice, maxPrice)
            PublicationsRepository.tries = 0
            return result.data
        } catch (e) {
            if (PublicationsRepository.tries < 1) {
                PublicationsRepository.tries++
                this.getByPriceRange(minPrice, maxPrice)
            } else {
                PublicationsRepository.tries = 0
                throw e
            }
        }
    }
}