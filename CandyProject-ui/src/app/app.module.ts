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

const routes: Routes = [
  {path: 'catalog', component: CatalogComponent},
  {path: '', redirectTo: '/catalog', pathMatch: 'full'},
  {path: 'product/1', component: ProductPageComponent, pathMatch:'full'}
]
@NgModule({
  declarations: [
    AppComponent,
    PropsListComponent,
    CatalogComponent,
    HeaderComponent,
    FooterComponent,
    ProductPageComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    HttpClientModule,
    OAuthModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
