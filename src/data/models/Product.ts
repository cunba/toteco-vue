import type { Product } from "@/client";

export class ProductData implements Product {
    constructor(
        public id: string,
        public name: string,
        public date: string,
        public price: number,
        public score: number,
        public publicationId?: string,
    ) {
        this.id = id
        this.name = name
        this.date = date
        this.price = price
        this.score = score
        this.publicationId = publicationId
    }
}