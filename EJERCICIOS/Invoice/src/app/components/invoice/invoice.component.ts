import { Component, OnInit } from '@angular/core';
import { InvoiceService } from '../../services/invoice.service';
import { Invoice } from '../../model/invoice';

@Component({
  selector: 'app-invoice',
  standalone: true,
  imports: [],
  templateUrl: './invoice.component.html',
  styleUrl: './invoice.component.css'
})
export class InvoiceComponent implements OnInit {

  invoice!: Invoice;
  
  // private service: InvoiceService = new InvoiceService();  //instanciar el servicio, sin embargo no es an correcto

  // inyectar la clase del service en el constructor
  constructor(private service: InvoiceService) { } // instancia solito el componente y lo puedo utilizar
  
  // metodo se lanza cuando se inicia el componente
  ngOnInit(): void {
    this.invoice = this.service.getInvoice();
  }

}
