import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PropsListComponent } from './props-list/props-list.component';
import { CatalogComponent } from './catalog/catalog.component';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ProductPageComponent } from './product-page/product-page.component'
import {HttpClientModule} from "@angular/common/http";
import {OAuthModule} from "angular-oauth2-oidc";
import { HomeComponent } from './home/home.component';
import {CATALOG_ROUTE, HOME_ROUTE, PRODUCT_ROUTE} from "./routes";
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

const routes: Routes = [
  {path: HOME_ROUTE, component: HomeComponent},
  {path: CATALOG_ROUTE, component: CatalogComponent},
  {path: '', redirectTo: HOME_ROUTE, pathMatch: 'full'},
  {path: PRODUCT_ROUTE + '/:id', component: ProductPageComponent, pathMatch:'full'}
]
@NgModule({
  declarations: [
    AppComponent,
    PropsListComponent,
    CatalogComponent,
    HeaderComponent,
    FooterComponent,
    ProductPageComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    HttpClientModule,
    OAuthModule.forRoot(),
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
