import { Component } from '@angular/core';
import { PostService } from './srrvices/post.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],

})
export class AppComponent {
  title = 'part08_services';
  posts:Array<any>=[]
/* angular service */
 /*  constructor(){
    let postService= new PostService()
    this.posts=postService.postList 
  }*/

  /* angular dependecy injection */
constructor(private postService:PostService) {
  this.posts=postService.postList 
}

}
