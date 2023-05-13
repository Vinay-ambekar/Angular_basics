import { Component ,Input} from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent {
  name:string="This is string interpolation";

  @Input() TransferingFromparent:string;
  constructor(){
    this.TransferingFromparent='';
  }
}
