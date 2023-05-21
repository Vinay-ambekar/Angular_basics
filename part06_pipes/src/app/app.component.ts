import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'part06_pipes';
  count:number=285645;
  dcvalue:number=3.2554554;
  price:number=99.99
  today:Date=new Date();
  postobj:object={
    id:1,
    postTitel:'post'
  }
  postArray:Array<string>=[
      'post 1',
      'post 2',
      'post 3',
      'post 4',
      'post 5',
      'post 6',
      'post 7',
      'post 8',
    ]
userdetails={
  name:'user 1',
  city:'newyork',
  countryCode:'us'

}
      

}
