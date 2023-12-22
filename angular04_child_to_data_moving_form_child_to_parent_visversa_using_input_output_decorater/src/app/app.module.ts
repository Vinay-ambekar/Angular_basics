import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContainerComponent } from './container/container.component';
import { PorductlistComponent } from './container/porductlist/porductlist.component';
import { ProductChild01Component } from './container/porductlist/product-child01/product-child01.component';
import { ProductChild02Component } from './container/porductlist/product-child02/product-child02.component';

@NgModule({
  declarations: [
    AppComponent,
    ContainerComponent,
    PorductlistComponent,
    ProductChild01Component,
    ProductChild02Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
