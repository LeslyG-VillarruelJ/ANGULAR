import { Company } from "./company";
import { Customer } from "./customer";
import { invoiceItem } from "./invoiceItem";

export class Invoice{
    id!:string; //admite nulos
    company!: Company;
    customer!: Customer;
    item!: invoiceItem[];
};