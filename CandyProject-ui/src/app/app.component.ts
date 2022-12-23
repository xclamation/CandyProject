import { Component } from '@angular/core';
//import {GoogleApiService} from "./google-api/google-api.service";
import {HomeComponent} from "./home/home.component";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'CandyShop';
  public isLoggedIn = this.home.isLoggedIn();

  constructor(private home: HomeComponent) {

  }
  ngOnInit(): void {
    //this.isLoggedIn = this.home.loggedIn;
    //console.log(this.isLoggedIn);
  }

}
