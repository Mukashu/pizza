import { Injectable } from '@angular/core';
import {ProductType} from "../types/product.type";
import {HttpClient} from "@angular/common/http";
import {map, Observable} from "rxjs";

@Injectable()
export class ProductService {

  private products: ProductType[] = [];

  constructor(private http: HttpClient) { }

  getProducts(): Observable<ProductType[]> {
    return this.http.get<{ data: ProductType[] }>('http://testologia.site/pizzas?extraField=1')
      .pipe(
        map(result => result.data)
      );
  }

  getProduct(id: number): ProductType | undefined {
    // ajax
    return this.products.find(item => (item.id === id));
  }
}
