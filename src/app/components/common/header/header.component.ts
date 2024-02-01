import { Component, OnInit } from '@angular/core';
import {CartService} from "../../../services/cart.service";

@Component({
  selector: 'header-component',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(public cartService: CartService) { }

  ngOnInit(): void {
  }

}
