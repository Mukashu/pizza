import {
  Component,
  ElementRef,
  EventEmitter,
  Input,
  Output,
  ViewChild
} from '@angular/core';
import {ProductType} from "../../../types/product.type";
import {TitleComponent} from "../title/title.component";
import {CartProductService} from "../../../services/cart-product.service";

@Component({
  selector: 'product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
  providers: [CartProductService]
})

export class ProductComponent {

  @Input() product: ProductType;
  @Output() addToCartEvent: EventEmitter<string> = new EventEmitter<string>();

  @ViewChild(TitleComponent)
  private titleComponent!: TitleComponent;

  @ViewChild('elem')
  private elem!: ElementRef;

  constructor(public cartProductService: CartProductService) {
    this.product = {
      image: '',
      title: '',
      description: '',
      datetime: ''
    }
  }

  addProductToCart(): void {
    this.cartProductService.count++;
    this.addToCartEvent.emit(this.titleComponent.title);
  }
}
