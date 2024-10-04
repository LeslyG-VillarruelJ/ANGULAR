import { Injectable } from '@angular/core';
import { Invoice } from '../model/invoice';
import { invoiceData } from '../data/invoice.data';

@Injectable({
  providedIn: 'root'
})
export class InvoiceService {

  private invoice: Invoice = invoiceData; //definida e inicializada la clase
  constructor() { }

  getInvoice():Invoice{
    return this.invoice;
  }
}
