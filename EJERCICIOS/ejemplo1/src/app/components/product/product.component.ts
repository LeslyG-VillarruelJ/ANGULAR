import { Component } from '@angular/core';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [],
  templateUrl: './product.component.html'
})
export class ProductComponent {
  id:number = 100;
  name:string = 'papitas fritas';
  price:number = 0.40;
}
