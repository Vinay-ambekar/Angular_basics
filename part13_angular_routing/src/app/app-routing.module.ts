import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomwComponent } from './homw/homw.component';
import { PostListComponent } from './post-list/post-list.component';
import { SinglePostComponent } from './single-post/single-post.component';
import { FournotfourComponent } from './fournotfour/fournotfour.component';

const routes: Routes = [
  {path:'',component:HomwComponent},
    {path:'posts',component:PostListComponent},
    /* {path:'post/:id',component:SinglePostComponent} */
    {path:'post/:id/:title',component:SinglePostComponent},
    {path:'**',component:FournotfourComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
