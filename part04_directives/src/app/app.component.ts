import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'part04_directives';
  postArray:Array<string>=['Post1','Post2','Post3','Post4','Post5'];
  objdArray:Array<any>=[
    {
      id:1,
      postTitle:'post1'
    },
    {
      id:2,
      postTitle:'post2'
    },
    {
      id:3,
      postTitle:'post3'
    },
    {
      id:4,
      postTitle:'post4'
    },
    {
      id:5,
      postTitle:'post5'
    },
  ]
  constructor(){
    for(let i=0;i<this.postArray.length;i++)
    console.log(this.postArray[i])
  }
}
