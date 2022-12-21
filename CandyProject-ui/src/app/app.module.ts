import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { CatalogComponent } from './catalog/catalog.component';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ProductPageComponent } from './product-page/product-page.component'
import {HttpClientModule} from "@angular/common/http";
import {OAuthModule} from "angular-oauth2-oidc";
import { HomeComponent } from './home/home.component';
import {AUTH_ROUTE, CART_ROUTE, CATALOG_ROUTE, HOME_ROUTE, PRODUCT_ROUTE} from "./routes";
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AuthComponent } from './auth/auth.component';
import { CartComponent } from './cart/cart.component';
import { FilterPipe } from './shared/filter.pipe';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { NotFoundComponent } from './not-found/not-found.component';
import {SocialAuthServiceConfig} from "@abacritt/angularx-social-login";
import {SocialLoginModule, GoogleLoginProvider} from "@abacritt/angularx-social-login";

const routes: Routes = [
  {path: HOME_ROUTE, component: HomeComponent},
  {path: '', redirectTo: HOME_ROUTE, pathMatch: 'full'},
  {path: CATALOG_ROUTE, component: CatalogComponent},
  {path: CART_ROUTE, component: CartComponent},
  {path: AUTH_ROUTE, component: AuthComponent},
  {path: PRODUCT_ROUTE + '/:id', component: ProductPageComponent, pathMatch:'full'},
  {path: '**', component: NotFoundComponent, pathMatch:"full"},
]

@NgModule({
  declarations: [
    AppComponent,
    CatalogComponent,
    HeaderComponent,
    FooterComponent,
    ProductPageComponent,
    HomeComponent,
    AuthComponent,
    CartComponent,
    FilterPipe,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    HttpClientModule,
    //OAuthModule.forRoot(),
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    SocialLoginModule
  ],
  providers: [
    {
      provide: 'SocialAuthServiceConfig',
      useValue: {
        autoLogin: false,
        providers: [
          {
            id: GoogleLoginProvider.PROVIDER_ID,
            provider: new GoogleLoginProvider(
              '484845140349-tlem6011dunl6tjvesjl8hqeqda0ts18.apps.googleusercontent.com',{scopes:"profile email"}
            )
          }
        ],
        onError: (err) => {
          console.error(err);
        }
      } as SocialAuthServiceConfig,
    }
  ],
  bootstrap: [AppComponent]
})

export class AppModule {

}
