import { Injectable } from '@angular/core';
import {BehaviorSubject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class CartService {
  public cartItemList:any = [];
  public productList = new BehaviorSubject<any>([]);

  constructor() { }

  getProducts(){
    return this.productList.asObservable();
  }

  setProduct(product:any) {
    this.cartItemList.push(...product);
    this.productList.next(product); // means subscribe
  }

  addToCart(product:any){
    let isInCart = 0;
    if (this.cartItemList.length) {
      isInCart = this.cartItemList.find((element:any)=>{
        return element.id === product.id;
      });
    }

    if (isInCart || (product.quantity > 1))
    {
      product.quantity += 1;
      product.total = +(product.total + product.price).toFixed(2)
    } else{
      this.cartItemList.push(product);
      this.productList.next(this.cartItemList);
    }

    this.getTotalPrice();
  }

  getTotalPrice(){
    let grandTotal = 0;
    this.cartItemList.map((a:any) => {
      grandTotal += a.total;
    })
    return grandTotal;
  }

  removeCartItem(product:any) {
    this.cartItemList.map((a:any,index:any) => {
      if(product.id === a.id){
        this.cartItemList.splice(index,1);
      }
    })
    this.productList.next(this.cartItemList);
  }

  clearCart(){
    this.cartItemList = [];
    this.productList.next(this.cartItemList);
  }
}
