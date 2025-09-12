import type { LoginRequest, LoginResponse } from "@/client";
import type { UserData } from "./User";

export class LoginRequestData implements LoginRequest {

    constructor(
        public username: string,
        public password: string
    ) {
        this.username = username
        this.password = password
    }
}

export class LoginResponseData implements LoginResponse {
    constructor(
        public token: string,
        public user?: UserData
    ) {
        this.token = token
        this.user = user
    }
}