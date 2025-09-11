import type { Publication } from "@/client";
import type { EstablishmentData } from "./Establishment";
import type { ProductData } from "./Product";

export class PublicationData implements Publication {
    constructor(
        public id: string,
        public date: string,
        public totalPrice: number,
        public totalScore: number,
        public photo?: string,
        public userId?: string,
        public establishmentId?: string,
        public establishment?: EstablishmentData,
        public products?: ProductData[],
    ) {
        this.id = id
        this.date = date
        this.totalPrice = totalPrice
        this.totalScore = totalScore
        this.photo = photo
        this.userId = userId
        this.establishmentId = establishmentId
        this.establishment = establishment
        this.products = products
    }
}