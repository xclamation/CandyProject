import { Injectable } from '@angular/core';
import {AuthConfig, OAuthService} from "angular-oauth2-oidc";

const oAuthConfig: AuthConfig = {
  issuer: 'https://accounts.google.com', //authorization provider
  strictDiscoveryDocumentValidation: false,
  redirectUri: window.location.origin,
  clientId: '484845140349-tlem6011dunl6tjvesjl8hqeqda0ts18.apps.googleusercontent.com',
  scope: 'openid profile email'
}

@Injectable({
  providedIn: 'root'
})
export class GoogleApiService {

  constructor(private readonly oAuthService: OAuthService) {
    oAuthService.configure(oAuthConfig);
    oAuthService.loadDiscoveryDocument().then(() => {
      oAuthService.tryLoginImplicitFlow().then(() => {
        if (!oAuthService.hasValidAccessToken()) {
          oAuthService.initLoginFlow(); // redirecting to google
        } else {
          oAuthService.loadUserProfile().then((userProfile) => {
            console.log(JSON.stringify(userProfile))
          })
        }
      })
    })
  }
}
