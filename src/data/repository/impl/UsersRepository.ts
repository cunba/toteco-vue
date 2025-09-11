import { ErrorResponseData, type UserData } from "@/data/models"
import { Api } from "@/infrastructure/data/ApiClient"
import { ApiBaseRepository } from "@/infrastructure/data/repository/ApiBaseRepository"
import type { IUsersApi } from "../IUsersApi"
import { LoginRepository } from "./LoginRepository"

export class UsersRepository extends ApiBaseRepository<IUsersApi> {

    static tries = 0

    constructor() {
        super(Api.UsersApi, false)
    }

    async save(body: UserData) {
        try {
            const client = await this.apiClient
            const result = await client!.save(body)
            UsersRepository.tries = 0
            return result.data
        } catch (e) {
            if (UsersRepository.tries < 1) {
                UsersRepository.tries++
                const credentials = localStorage.getItem("credentials")
                const loginResponse = await new LoginRepository().login(JSON.parse(credentials!))

                if (loginResponse instanceof ErrorResponseData) {
                    throw loginResponse
                } else {
                    localStorage.setItem('token', loginResponse.token)
                    this.save(body)
                }
            } else {
                UsersRepository.tries = 0
                throw e
            }
        }
    }

    async update(id: string, body: UserData) {
        try {
            const client = await this.apiClient
            const result = await client!.update(id, body)
            UsersRepository.tries = 0
            return result.data
        } catch (e) {
            if (UsersRepository.tries < 1) {
                UsersRepository.tries++
                const credentials = localStorage.getItem("credentials")
                const loginResponse = await new LoginRepository().login(JSON.parse(credentials!))

                if (loginResponse instanceof ErrorResponseData) {
                    throw loginResponse
                } else {
                    localStorage.setItem('token', loginResponse.token)
                    this.update(id, body)
                }
            } else {
                UsersRepository.tries = 0
                throw e
            }
        }
    }

    async delete(id: string) {
        try {
            const client = await this.apiClient
            const result = await client!.delete(id)
            UsersRepository.tries = 0
            return result.data
        } catch (e) {
            if (UsersRepository.tries < 1) {
                UsersRepository.tries++
                const credentials = localStorage.getItem("credentials")
                const loginResponse = await new LoginRepository().login(JSON.parse(credentials!))

                if (loginResponse instanceof ErrorResponseData) {
                    throw loginResponse
                } else {
                    localStorage.setItem('token', loginResponse.token)
                    this.delete(id)
                }
            } else {
                UsersRepository.tries = 0
                throw e
            }
        }
    }

    async getAll() {
        try {
            const client = await this.apiClient
            const result = await client!.getAll()
            UsersRepository.tries = 0
            return result.data
        } catch (e) {
            if (UsersRepository.tries < 1) {
                UsersRepository.tries++
                this.getAll()
            } else {
                UsersRepository.tries = 0
                throw e
            }
        }
    }

    async getById(id: string) {
        try {
            const client = await this.apiClient
            const result = await client!.getById(id)
            UsersRepository.tries = 0
            return result.data
        } catch (e) {
            if (UsersRepository.tries < 1) {
                UsersRepository.tries++
                this.getById(id)
            } else {
                UsersRepository.tries = 0
                throw e
            }
        }
    }
}