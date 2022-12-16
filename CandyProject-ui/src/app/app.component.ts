import { Component } from '@angular/core';
import {GoogleApiService} from "./google-api/google-api.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'CandyProject';

  constructor(private readonly google: GoogleApiService) {}
}
