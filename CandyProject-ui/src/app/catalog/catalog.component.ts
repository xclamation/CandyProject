import { Component, OnInit } from '@angular/core';
import {ApiService} from "../service/api.service";
import {CartService} from "../service/cart.service";

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.css']
})
export class CatalogComponent implements OnInit {
  public apiUrl = 'http://localhost:5000/';
  public productList: any;
  public searchTerm = '';

  constructor(private api: ApiService, private cartService: CartService) {}

  ngOnInit(): void {
    this.api.getProducts().subscribe(res =>{
      this.productList = res;//res.rows;

      this.productList.forEach((a:any)=>{
        Object.assign(a, {quantity:1, total:a.price});
      })
      //console.log(this.productList);
      }
    )

  }

  addToCart(item:any){
    this.cartService.addToCart(item);
  }

  search(event:any){
    this.searchTerm = (event.target as HTMLInputElement).value;
  }
}
