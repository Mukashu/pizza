import {Component, OnDestroy, OnInit} from '@angular/core';
import {ProductType} from "../../../types/product.type";
import {ProductService} from "../../../services/product.service";
import {HttpClient} from "@angular/common/http";
import {Router} from "@angular/router";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit, OnDestroy {
  products: ProductType[] = [];

  private subscriptionProducts: Subscription | null = null;

  constructor(private productService: ProductService, private http: HttpClient, private router: Router) {
  }

  ngOnInit(): void {
    // this.products = this.productService.getProducts();

    this.subscriptionProducts = this.productService.getProducts()
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

  ngOnDestroy() {
    this.subscriptionProducts?.unsubscribe();
  }

}
