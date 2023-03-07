import { Address } from "./address.interface";
import { Company } from "./company.interface";

export interface User{
    id: number;
    name: string;
    username: string;
    email: string;
    address: Address;
    phone: number;
    website: string;
    company: Company;
}