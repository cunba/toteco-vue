import { ErrorResponseData, type EstablishmentData } from "@/data/models"
import { Api } from "@/infrastructure/data/ApiClient"
import { ApiBaseRepository } from "@/infrastructure/data/repository/ApiBaseRepository"
import type { IEstablishmentsApi } from "../IEstablishmentsApi"
import { LoginRepository } from "./LoginRepository"

export class EstablishmentsRepository extends ApiBaseRepository<IEstablishmentsApi> {

    static tries = 0

    constructor() {
        super(Api.EstablishmentsApi, false)
    }

    async save(body: EstablishmentData) {
        try {
            const client = await this.apiClient
            const result = await client!.save(body)
            EstablishmentsRepository.tries = 0
            return result.data
        } catch (e) {
            if (EstablishmentsRepository.tries < 1) {
                EstablishmentsRepository.tries++
                const credentials = localStorage.getItem("credentials")
                const loginResponse = await new LoginRepository().login(JSON.parse(credentials!))

                if (loginResponse instanceof ErrorResponseData) {
                    throw loginResponse
                } else {
                    localStorage.setItem('token', loginResponse.token)
                    this.save(body)
                }
            } else {
                EstablishmentsRepository.tries = 0
                throw e
            }
        }
    }

    async update(id: string, body: EstablishmentData) {
        try {
            const client = await this.apiClient
            const result = await client!.update(id, body)
            EstablishmentsRepository.tries = 0
            return result.data
        } catch (e) {
            if (EstablishmentsRepository.tries < 1) {
                EstablishmentsRepository.tries++
                const credentials = localStorage.getItem("credentials")
                const loginResponse = await new LoginRepository().login(JSON.parse(credentials!))

                if (loginResponse instanceof ErrorResponseData) {
                    throw loginResponse
                } else {
                    localStorage.setItem('token', loginResponse.token)
                    this.update(id, body)
                }
            } else {
                EstablishmentsRepository.tries = 0
                throw e
            }
        }
    }

    async delete(id: string) {
        try {
            const client = await this.apiClient
            const result = await client!.delete(id)
            EstablishmentsRepository.tries = 0
            return result.data
        } catch (e) {
            if (EstablishmentsRepository.tries < 1) {
                EstablishmentsRepository.tries++
                const credentials = localStorage.getItem("credentials")
                const loginResponse = await new LoginRepository().login(JSON.parse(credentials!))

                if (loginResponse instanceof ErrorResponseData) {
                    throw loginResponse
                } else {
                    localStorage.setItem('token', loginResponse.token)
                    this.delete(id)
                }
            } else {
                EstablishmentsRepository.tries = 0
                throw e
            }
        }
    }

    async getAll() {
        try {
            const client = await this.apiClient
            const result = await client!.getAll()
            EstablishmentsRepository.tries = 0
            return result.data
        } catch (e) {
            if (EstablishmentsRepository.tries < 1) {
                EstablishmentsRepository.tries++
                this.getAll()
            } else {
                EstablishmentsRepository.tries = 0
                throw e
            }
        }
    }

    async getById(id: string) {
        try {
            const client = await this.apiClient
            const result = await client!.getById(id)
            EstablishmentsRepository.tries = 0
            return result.data
        } catch (e) {
            if (EstablishmentsRepository.tries < 1) {
                EstablishmentsRepository.tries++
                this.getById(id)
            } else {
                EstablishmentsRepository.tries = 0
                throw e
            }
        }
    }

    async getByName(name: string) {
        try {
            const client = await this.apiClient
            const result = await client!.getByName(name)
            EstablishmentsRepository.tries = 0
            return result.data
        } catch (e) {
            if (EstablishmentsRepository.tries < 1) {
                EstablishmentsRepository.tries++
                this.getByName(name)
            } else {
                EstablishmentsRepository.tries = 0
                throw e
            }
        }
    }

    async getByOpen(open: boolean) {
        try {
            const client = await this.apiClient
            const result = await client!.getByOpen(open)
            EstablishmentsRepository.tries = 0
            return result.data
        } catch (e) {
            if (EstablishmentsRepository.tries < 1) {
                EstablishmentsRepository.tries++
                this.getByOpen(open)
            } else {
                EstablishmentsRepository.tries = 0
                throw e
            }
        }
    }

    async getByScore(score: Number) {
        try {
            const client = await this.apiClient
            const result = await client!.getByScore(score)
            EstablishmentsRepository.tries = 0
            return result.data
        } catch (e) {
            if (EstablishmentsRepository.tries < 1) {
                EstablishmentsRepository.tries++
                this.getByScore(score)
            } else {
                EstablishmentsRepository.tries = 0
                throw e
            }
        }
    }

    async getByScoreRange(minScore: Number, maxScore: Number) {
        try {
            const client = await this.apiClient
            const result = await client!.getByScoreRange(minScore, maxScore)
            EstablishmentsRepository.tries = 0
            return result.data
        } catch (e) {
            if (EstablishmentsRepository.tries < 1) {
                EstablishmentsRepository.tries++
                this.getByScoreRange(minScore, maxScore)
            } else {
                EstablishmentsRepository.tries = 0
                throw e
            }
        }
    }
}