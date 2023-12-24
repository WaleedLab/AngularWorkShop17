import { Component } from '@angular/core';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.scss'
})
export class ProductListComponent {

  product = {
    name: "iphone",
    price: 500,
    color: "black",
    discount: 10
  };


  getDiscount(){
    return this.product.price - (this.product.price * this.product.discount / 100 )
  }

}
