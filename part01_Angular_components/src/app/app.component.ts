import { Component,ViewChild,AfterViewInit ,OnInit} from '@angular/core';
import { PostComponent } from './post/post.component';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit, OnInit {
  title = '1_angular';
  parentmessage:string='message coming from parent component or app component and message has been changed';
  message:string='';
  fromchildoutput:string='';

  @ViewChild(PostComponent) childcomp:any;

  constructor(){
    console.log(this.childcomp)
  }
  ngOnInit(): void {
    
  }

 ngAfterViewInit(): void {
setTimeout(()=>{
  console.log(this.childcomp)
  this.message=this.childcomp.childMessagee
});
  
 }

 recivemessag($event:any){
console.log($event)
this.fromchildoutput=$event
 }
}
