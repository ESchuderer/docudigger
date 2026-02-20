import { Invoice } from "./invoice.interface";

export interface Scrape {
    date: string;
    datePlain: string;
    number: string;
    status?: string;
    invoices: Array<Invoice>;

}