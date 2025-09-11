import type { Establishment } from "@/client";

export class EstablishmentData implements Establishment {
    constructor(
        public id: string,
        public creationDate: string,
        public isOpen: boolean,
        public score: number,
        public name?: string,
        public location?: string,
    ) {
        this.id = id
        this.name = name
        this.creationDate = creationDate
        this.location = location
        this.isOpen = isOpen
        this.score = score
    }
}