import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TemplateReferenceVariableComponent } from './template-reference-variable/template-reference-variable.component';
import { ViewchildrenComponent } from './viewchildren/viewchildren.component';

@NgModule({
  declarations: [
    AppComponent,
    TemplateReferenceVariableComponent,
    ViewchildrenComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
