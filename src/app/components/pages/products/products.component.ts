import { Component, OnInit } from '@angular/core';
import {ProductType} from "../../../types/product.type";
import {ProductService} from "../../../services/product.service";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  products: ProductType[] = [];

  constructor(private productService: ProductService, private http: HttpClient) { }

  ngOnInit(): void {
    // this.products = this.productService.getProducts();

    this.http.get<ProductType[]>('http://testologia.site/pizzas')
      .subscribe(data => {
        this.products = data;
      })
  }

}
