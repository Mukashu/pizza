import { Component, OnInit } from '@angular/core';
import {ProductType} from "../../../types/product.type";
import {ProductService} from "../../../services/product.service";
import {CartService} from "../../../services/cart.service";

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  products: ProductType[] = [];

  formValues = {
    productTitle: '',
    address: '',
    phone: ''
  }

  lateData: Promise<string> | null = null;

  constructor(private productService: ProductService,
              public cartService: CartService) {
  }

  ngOnInit() {
    this.lateData = new Promise<string>(function (resolve) {
      setTimeout(() => {
        resolve('Hello');
      }, 3000);
    })

    this.products = this.productService.getProducts();
  }

  scrollTo(target: HTMLElement): void {
    target.scrollIntoView({behavior: 'smooth'});
  }

  addToCart(title: string, target: HTMLElement): void {
    this.scrollTo(target);
    this.formValues.productTitle = title;
    this.cartService.count++;
  }

  createOrder(): void {
    if (!this.formValues.productTitle) {
      alert('Пицца не выбрана');
      return;
    }
    if (!this.formValues.address) {
      alert('Введите адрес');
      return;
    }
    if (!this.formValues.phone) {
      alert('Введите номер телефона');
      return;
    }

    alert('Спасибо за заказ');

    this.formValues = {
      productTitle: '',
      address: '',
      phone: ''
    }
  }

}
