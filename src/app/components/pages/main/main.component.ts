import {Component, OnInit} from '@angular/core';
import {CartService} from "../../../services/cart.service";
import {Observable} from "rxjs";

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  private observable: Observable<number>;
  // private promise: Promise<string>;

  constructor(public cartService: CartService) {
    // this.promise = new Promise<string>(resolve => {
    //   setTimeout(() => {
    //     resolve('hello')
    //   }, 4000)
    // });

    this.observable = new Observable((observer) => {
      let count = 0;
      setInterval(() => {
        observer.next(count++);
      }, 1000);

      setTimeout(() => {
        observer.complete();
      }, 4000);

      setTimeout(() => {
        observer.error('world');
      }, 5000);
    });
  }

  ngOnInit() {
    // this.observable.subscribe((param: number) => {
    //   console.log('subscriber 1: ', param);
    // });


    this.observable.subscribe({
      next: (param: number) => {
        console.log('subscriber 1: ', param);
      },
      complete: () => {
        console.log('Отсчет окончен');
      },
      error: (err: string) => {
        console.log('Спасите Помогите ' + err);
      }
    })


    // this.promise.then((param: string) => {
    //   console.log(param);
    // });
  }

  test() {
    this.observable.subscribe((param: number) => {
      console.log('subscriber 2: ', param);
    });
  }
}
