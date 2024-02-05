import {Component, OnInit} from '@angular/core';
import {ProductType} from "../../../types/product.type";
import {ProductService} from "../../../services/product.service";
import {HttpClient} from "@angular/common/http";
import {catchError, map, of, retry, tap} from "rxjs";
import {Router} from "@angular/router";

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  products: ProductType[] = [];

  constructor(private productService: ProductService, private http: HttpClient, private router: Router) {
  }

  ngOnInit(): void {
    // this.products = this.productService.getProducts();

    this.http.get<{ data: ProductType[] }>('http://testologia.size/pizzas?extraField=1')
      .pipe(
        tap(result => console.log(result)),
        map(result => result.data),
        retry(3),
        catchError(err => {
          return of([]);
        }),
      )
      .subscribe({
        next: data => {
          this.products = data;
        },
        error: err => {
          console.log(err);
          this.router.navigate(['/']);
        }
      })
  }

}
