import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
 
  products: any[] = [
    {
      id: '1',
      title: 'Camiseta',
      price: 5500
    },
    {
      id: '2',
      title: 'Hoodie',
      price: 8200,
    },
    {
      id: '3',
      title: 'Mug',
      price: 4000,
    },
    {
      id: '4',
      title: 'Pin',
      price: 1200,
    },
  ];

  constructor() { }

  ngOnInit() {
    console.log(this.products);
  }

}
