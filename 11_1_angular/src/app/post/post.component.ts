import { Component ,Input,Output,EventEmitter} from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent {
  name:string="This is string interpolation";

  @Input() TransferingFromparent:string='';
  postParentMessage:string='message coming from the post parent'
  childMessagee:string='from child component, means i am coming from post component to app component. This is @viewchild decoreator';
 
  
  /*using output methoud and event  */
  outputchildmessage:string='message from child coponent via output' 
  @Output() messegeEvent=new  EventEmitter<string>();
  sendmessage(){
    this.messegeEvent.emit(this.outputchildmessage)
  }
}
