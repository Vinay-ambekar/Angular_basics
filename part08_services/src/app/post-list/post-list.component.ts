import { Component } from '@angular/core';
import { PostService } from '../srrvices/post.service';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss'],
  
})
export class PostListComponent {
  postLiist:Array<any>=[]
constructor(private postServices:PostService){
 this.postLiist=postServices.postList
}
}
