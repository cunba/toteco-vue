export interface User {
  id?: string;
  username?: string;
  name?: string;
  surname?: string;
  birthDate?: string;
  email?: string;
  password?: string;
  creationDate: string;
  active: boolean;
  moneySpent: number;
  publicationsNumber: number;
  role?: string;
}
