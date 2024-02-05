import { Injectable } from '@angular/core';
import {ProductType} from "../types/product.type";
import {HttpClient, HttpHeaders, HttpParams} from "@angular/common/http";
import {map, Observable, tap} from "rxjs";

@Injectable()
export class ProductService {

  private products: ProductType[] = [];

  constructor(private http: HttpClient) { }

  getProducts(): Observable<ProductType[]> {
    let params = new HttpParams();
    params = params.set('extraField', 1);

    return this.http.get<{ data: ProductType[] }>('https://testologia.site/pizzas', {
      observe: 'response',
      headers: new HttpHeaders({
        Authorization: 'auth-token'
      }),
      params: params
    })
      .pipe(
        tap(result => console.log(result)),
        map(result => result.body ? result.body.data : [])
      );
  }

  getProduct(id: number): ProductType | undefined {
    // ajax
    return this.products.find(item => (item.id === id));
  }
}
