import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {map} from "rxjs/operators";
import {SocialUser} from "@abacritt/angularx-social-login";

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  getProducts() {
    return this.http.get<any>('http://localhost:5000/api/product').pipe(map( (res:any) => {return res;})); //"http://localhost:5000/api/product"
  }

  getProduct(id:number) {
    return this.http.get<any>('http://localhost:5000/api/product/' + id).pipe(map( (res:any) => {return res;})); //"http://localhost:5000/api/product"
  }

}
