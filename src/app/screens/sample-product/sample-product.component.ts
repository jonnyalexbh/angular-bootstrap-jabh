import { Component, OnInit } from '@angular/core';
import { Product } from '../../models/product';

@Component({
  selector: 'app-sample-product',
  templateUrl: './sample-product.component.html',
  styleUrls: ['./sample-product.component.scss']
})
export class SampleProductComponent implements OnInit {

  products: Product[] = [
    {
      id: 1,
      title: 'Camiseta',
      price: 5500
    },
    {
      id: 2,
      title: 'Hoodie',
      price: 8200,
    },
    {
      id: 3,
      title: 'Mug',
      price: 4000,
    },
    {
      id: 4,
      title: 'Pin',
      price: 1200,
    },
  ];

  constructor() { }

  ngOnInit() {
    console.log(this.products);
  }

}
