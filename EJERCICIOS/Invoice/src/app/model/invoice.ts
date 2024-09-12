import { Company } from "./company";
import { Customer } from "./customer";

export class Invoice{
    id!:string; //admite nulos
    company!: Company;
    customer!: Customer;
};