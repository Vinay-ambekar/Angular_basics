import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PostListComponent } from './post-list/post-list.component';

import { HomwComponent } from './homw/homw.component';
import { SinglePostComponent } from './single-post/single-post.component';
import { FournotfourComponent } from './fournotfour/fournotfour.component';

@NgModule({
  declarations: [
    AppComponent,
    PostListComponent,
    HomwComponent,
    SinglePostComponent,
    FournotfourComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
