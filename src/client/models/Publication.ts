import type { Establishment } from "./Establishment";
import type { Product } from "./Product";

export interface Publication {
  id?: string;
  date: string;
  totalPrice: number;
  totalScore: number;
  photo?: string;
  userId?: string;
  establishmentId?: string;
  establishment?: Establishment;
  products?: Product[];
}
