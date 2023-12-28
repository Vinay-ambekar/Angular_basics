import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContainerComponent } from './container/container.component';
import { PorductlistComponent } from './container/porductlist/porductlist.component';
import { ProductChild01Component } from './container/porductlist/product-child01/product-child01.component';
import { ProductChild02Component } from './container/porductlist/product-child02/product-child02.component';
import { FormsModule } from '@angular/forms';
import { SearchComponent } from './container/search/search.component';
@NgModule({
  declarations: [
    AppComponent,
    ContainerComponent,
    PorductlistComponent,
    ProductChild01Component,
    ProductChild02Component,
    SearchComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
