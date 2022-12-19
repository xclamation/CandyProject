import { Component, OnInit } from '@angular/core';
import {CartService} from "../service/cart.service";

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  public apiUrl = 'http://localhost:5000/';
  public products: any = [];
  public grandTotal: number = 0;

  constructor(private cartService: CartService) {}

  ngOnInit(): void {
    this.cartService.getProducts().subscribe(res => {
      this.products = res;
      this.grandTotal = this.cartService.getTotalPrice();
    })
  }

  removeItem(item:any) {
    this.cartService.removeCartItem(item);
  }

  clearCart(){
    this.cartService.clearCart();
  }

  quantityUp(item:any) {
    item.quantity = item.quantity + 1;
    item.total = +(item.total + item.price).toFixed(2);
    this.grandTotal = +(this.grandTotal + item.price).toFixed(2);
  }

  quantityDown(item:any) {
    if (item.quantity > 0){
      item.quantity = item.quantity - 1;
      item.total = +(item.total - item.price).toFixed(2);
      this.grandTotal = +(this.grandTotal - item.price).toFixed(2);
    }
    else{
      item.total = 0;
    }
  }
}
