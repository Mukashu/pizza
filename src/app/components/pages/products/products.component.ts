import {Component, OnInit} from '@angular/core';
import {ProductType} from "../../../types/product.type";
import {ProductService} from "../../../services/product.service";
import {HttpClient} from "@angular/common/http";
import {map, tap} from "rxjs";

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  products: ProductType[] = [];

  constructor(private productService: ProductService, private http: HttpClient) {
  }

  ngOnInit(): void {
    // this.products = this.productService.getProducts();

    this.http.get<{ data: ProductType[] }>('http://testologia.site/pizzas?extraField=1')
      .pipe(
        tap(result => console.log(result)),
        map(result => result.data)
      )
      .subscribe(data => {
        this.products = data;
      })
  }

}
