import { Product } from './../product.model';
import { Component, OnInit } from '@angular/core';

import { ProductService } from './../product.service';

@Component({
  selector: 'app-product-read',
  templateUrl: './product-read.component.html',
  styleUrls: ['./product-read.component.css']
})
export class ProductReadComponent implements OnInit {

  products: Product[];
  displayedColumns = ['id', 'name', 'price'];

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.readProducts();
  }

  readProducts(){
    this.productService.read().subscribe(products => {
      this.products = products;
    })
  }

}
