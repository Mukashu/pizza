import {Component, OnDestroy, OnInit, TemplateRef} from '@angular/core';
import {CartService} from "../../../shared/services/cart.service";
import {map, Subject, Subscription} from "rxjs";
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit, OnDestroy {
  // private observable: Observable<number>;
  private subject: Subject<number>;

  // private promise: Promise<string>;

  private subscription: Subscription | null = null;

  constructor(public cartService: CartService, private modalService: NgbModal) {
    // this.promise = new Promise<string>(resolve => {
    //   setTimeout(() => {
    //     resolve('hello')
    //   }, 4000)
    // });


    this.subject = new Subject<number>();
    let count = 0;
    const interval = setInterval(() => {
      this.subject.next(count++);
    }, 1000);

    const timeoutComplete = setTimeout(() => {
      this.subject.complete();
    }, 4000);


    // this.observable = from([1, 2, 3, 4, 5]);


    // this.observable = new Observable((observer) => {
    //   let count = 0;
    //   const interval = setInterval(() => {
    //     observer.next(count++);
    //   }, 1000);
    //
    //   const timeoutComplete = setTimeout(() => {
    //     observer.complete();
    //   }, 4000);
    //
    //   const timeoutErr =setTimeout(() => {
    //     observer.error('world');
    //   }, 5000);
    //
    //   return {
    //     unsubscribe() {
    //       clearInterval(interval);
    //       clearInterval(timeoutComplete);
    //       clearInterval(timeoutErr);
    //     }
    //   }
    // });
  }

  ngOnInit() {
    // this.observable.subscribe((param: number) => {
    //   console.log('subscriber 1: ', param);
    // });


    this.subscription = this.subject.subscribe({
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

  ngOnDestroy() {
    this.subscription?.unsubscribe();
  }

  test(popup: TemplateRef<any>) {
    this.modalService.open(popup, {});

    this.subject
      .pipe(
        map((number) => {
          return 'Число: ' + number;
        })
      )
      .subscribe((param: string) => {
        console.log('subscriber 2: ', param);
      });
  }
}
