import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'part03_data_binding_tasks';
  postTitle:string='';
  postDetails:string='';
  imageURL:string='Enter the image url';
  postURL:string='Enter the url';
  addBackground:boolean=false;
  
}
