import type { User } from "@/client";

export class UserData implements User {
    constructor(
        public id: string,
        public username: string,
        public name: string,
        public surname: string,
        public birthDate: string,
        public email: string,
        public password: string,
        public creationDate: string,
        public active: boolean,
        public moneySpent: number,
        public publicationsNumber: number,
        public role: string,
    ) {
        this.id = id
        this.username = username
        this.name = name
        this.surname = surname
        this.birthDate = birthDate
        this.email = email
        this.password = password
        this.creationDate = creationDate
        this.active = active
        this.moneySpent = moneySpent
        this.publicationsNumber = publicationsNumber
        this.role = role
    }
}