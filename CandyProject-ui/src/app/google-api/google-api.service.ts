/*import { Injectable } from '@angular/core';
import {AuthConfig, OAuthService} from "angular-oauth2-oidc";
import {Subject} from "rxjs";*/

/*const oAuthConfig: AuthConfig = {
  issuer: 'https://accounts.google.com', //authorization provider
  strictDiscoveryDocumentValidation: false,
  redirectUri: window.location.origin,
  clientId: '484845140349-tlem6011dunl6tjvesjl8hqeqda0ts18.apps.googleusercontent.com',
  scope: 'openid profile email'
}*/

/*export interface UserInfo {
  info: {
    sub: string,
    email:string,
    name: string,
    picture: string
  }
}*/

/*
@Injectable({
  providedIn: 'root'
})
export class GoogleApiService {

  userProfileSubject = new Subject<UserInfo>();

  constructor(private readonly oAuthService: OAuthService) {
    /!*oAuthService.configure(oAuthConfig);

    oAuthService.logoutUrl = 'https://www.google.com/accounts/Logout';
    oAuthService.loadDiscoveryDocument().then(() => {
      oAuthService.tryLoginImplicitFlow().then(() => {
        if (!oAuthService.hasValidAccessToken()) {
          oAuthService.initLoginFlow(); // redirecting to google
        } else {
          oAuthService.loadUserProfile().then((userProfile) => {
            this.userProfileSubject.next(userProfile as UserInfo)
          })
        };
      });
    });*!/
  };

  /!*isLoggedIn(): boolean {
    return this.oAuthService.hasValidAccessToken();
  }

  loginIn() {
    this.oAuthService.initLoginFlow();
  }

  signOut() {
    this.oAuthService.logOut();
  }*!/

}
*/
