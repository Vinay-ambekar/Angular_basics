import { Component } from '@angular/core';
import { UserService } from './services/user.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'part09_services_and_dependency_injection';
  posts:Array<any>=[]
  constructor(private userservice:UserService) {
    this.posts=userservice.postList 
  }
  addNewData(){
    let newPost={
      id:8,
      postTilte :'post 8',
    }
    this.userservice.addApp(newPost)
  }
}
