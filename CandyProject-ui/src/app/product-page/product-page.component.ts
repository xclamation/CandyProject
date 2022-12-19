import { Component, OnInit } from '@angular/core';
import {ApiService} from "../service/api.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.css']
})
export class ProductPageComponent implements OnInit {
  public apiUrl = 'http://localhost:5000/';
  public product:any;

  constructor(private api: ApiService, private activatedRoute: ActivatedRoute) {
    // activatedRoute.params.subscribe((params:any)=>{
    //   if (params.id){
    //     api.getProduct(params.id).subscribe((res:any) => {
    //       this.product = res;
    //       console.log('constructor');
    //     });
    //
    //   }
    // })

  }

  ngOnInit(): void {
   // this.api.getProduct().subscribe(res =>{
   //    this.product = res;//res.rows;
   //    //console.log(this.productList);
   //  })
    this.activatedRoute.params.subscribe((params:any)=>{
      if (params.id){
        this.api.getProduct(params.id).subscribe((res:any) => {
          this.product = res;
          console.log('constructor');
        });

      }
    })
    console.log("ngOnInit")
  }
}
