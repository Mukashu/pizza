import {Component, OnInit} from '@angular/core';
import {ProductType} from "../../../types/product.type";
import {ProductService} from "../../../services/product.service";
import {HttpClient} from "@angular/common/http";
import {catchError, map, tap} from "rxjs";
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
        catchError(err => {
          throw new Error('omg');
        })
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
