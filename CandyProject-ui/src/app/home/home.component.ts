import { Component } from '@angular/core';
import {SocialAuthService} from "@abacritt/angularx-social-login";
import {SocialUser, GoogleLoginProvider} from "@abacritt/angularx-social-login";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  user!: SocialUser;
  loggedIn: boolean = false;

  constructor(private authService: SocialAuthService) {

  }

  ngOnInit(): void {
    this.authService.authState.subscribe((user) => {
      this.user = user;
      this.loggedIn = (user != null);
      console.log(user);
    });
    console.log('ngOnInit');

  }

  signInWithGoogle(): void {
    void this.authService.signIn(GoogleLoginProvider.PROVIDER_ID);
    console.log('signIn');
  }

  signOut(): void {
    void this.authService.signOut();
  }


}
