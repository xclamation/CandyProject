import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {map} from "rxjs/operators";
import {SocialUser} from "@abacritt/angularx-social-login";
import axios from "axios";

@Injectable({
  providedIn: 'root'
})

export class ApiService {
/*  public $host = axios.create({
    baseURL:process.env["ANGULAR_APP_API_URL "]
  })
  public $authHost = axios.create({
    baseURL: process.env["ANGULAR_APP_API_URL "]
  })*/
  constructor(private http: HttpClient) {
/*    const authInterceptor = (config:any) => {
      config.headers.authorization = localStorage.getItem('token');
      return config;
    }*/

    //this.$authHost.interceptors.request.use(authInterceptor);
  }

  getProducts() {
    return this.http.get<any>('http://localhost:5000/api/product').pipe(map( (res:any) => {return res;})); //"http://localhost:5000/api/product"
  }

  getProduct(id:number) {
    return this.http.get<any>('http://localhost:5000/api/product/' + id).pipe(map( (res:any) => {return res;})); //"http://localhost:5000/api/product"
  }

}
