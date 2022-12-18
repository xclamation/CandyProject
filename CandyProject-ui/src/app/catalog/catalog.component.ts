import { Component, OnInit } from '@angular/core';
import {ApiService} from "../service/api.service";

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.css']
})
export class CatalogComponent implements OnInit {
  public apiUrl = 'http://localhost:5000/';
  public productList: any;

  constructor(private api: ApiService) {}

  ngOnInit(): void {
    this.api.getProduct().subscribe(res =>{
      this.productList = res.rows;
      console.log(this.productList);
      }
    )
  }

}
