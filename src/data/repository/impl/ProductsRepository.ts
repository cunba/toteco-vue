import { ErrorResponseData, type ProductData } from "@/data/models"
import { Api } from "@/infrastructure/data/ApiClient"
import { ApiBaseRepository } from "@/infrastructure/data/repository/ApiBaseRepository"
import type { IProductsApi } from "../IProductsApi"
import { LoginRepository } from "./LoginRepository"

export class ProductsRepository extends ApiBaseRepository<IProductsApi> {

    static tries = 0

    constructor() {
        super(Api.ProductsApi, false)
    }

    async save(body: ProductData) {
        try {
            const client = await this.apiClient
            const result = await client!.save(body)
            ProductsRepository.tries = 0
            return result.data
        } catch (e) {
            if (ProductsRepository.tries < 1) {
                ProductsRepository.tries++
                const credentials = localStorage.getItem("credentials")
                const loginResponse = await new LoginRepository().login(JSON.parse(credentials!))

                if (loginResponse instanceof ErrorResponseData) {
                    throw loginResponse
                } else {
                    localStorage.setItem('token', loginResponse.token)
                    this.save(body)
                }
            } else {
                ProductsRepository.tries = 0
                throw e
            }
        }
    }

    async update(id: string, body: ProductData) {
        try {
            const client = await this.apiClient
            const result = await client!.update(id, body)
            ProductsRepository.tries = 0
            return result.data
        } catch (e) {
            if (ProductsRepository.tries < 1) {
                ProductsRepository.tries++
                const credentials = localStorage.getItem("credentials")
                const loginResponse = await new LoginRepository().login(JSON.parse(credentials!))

                if (loginResponse instanceof ErrorResponseData) {
                    throw loginResponse
                } else {
                    localStorage.setItem('token', loginResponse.token)
                    this.update(id, body)
                }
            } else {
                ProductsRepository.tries = 0
                throw e
            }
        }
    }

    async delete(id: string) {
        try {
            const client = await this.apiClient
            const result = await client!.delete(id)
            ProductsRepository.tries = 0
            return result.data
        } catch (e) {
            if (ProductsRepository.tries < 1) {
                ProductsRepository.tries++
                const credentials = localStorage.getItem("credentials")
                const loginResponse = await new LoginRepository().login(JSON.parse(credentials!))

                if (loginResponse instanceof ErrorResponseData) {
                    throw loginResponse
                } else {
                    localStorage.setItem('token', loginResponse.token)
                    this.delete(id)
                }
            } else {
                ProductsRepository.tries = 0
                throw e
            }
        }
    }

    async getAll() {
        try {
            const client = await this.apiClient
            const result = await client!.getAll()
            ProductsRepository.tries = 0
            return result.data
        } catch (e) {
            if (ProductsRepository.tries < 1) {
                ProductsRepository.tries++
                this.getAll()
            } else {
                ProductsRepository.tries = 0
                throw e
            }
        }
    }

    async getById(id: string) {
        try {
            const client = await this.apiClient
            const result = await client!.getById(id)
            ProductsRepository.tries = 0
            return result.data
        } catch (e) {
            if (ProductsRepository.tries < 1) {
                ProductsRepository.tries++
                this.getById(id)
            } else {
                ProductsRepository.tries = 0
                throw e
            }
        }
    }

    async getByPublication(id: string) {
        try {
            const client = await this.apiClient
            const result = await client!.getByPublication(id)
            ProductsRepository.tries = 0
            return result.data
        } catch (e) {
            if (ProductsRepository.tries < 1) {
                ProductsRepository.tries++
                this.getByPublication(id)
            } else {
                ProductsRepository.tries = 0
                throw e
            }
        }
    }
}