import type { IGlobalRepository } from "@/infrastructure/data/repository/IGlobalRepository"
import type { UserData } from "../models"

export interface IUsersApi extends IGlobalRepository<UserData> {
    
}