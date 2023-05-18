import { Component,Input } from '@angular/core';

@Component({
  selector: 'app-navabar',
  templateUrl: './navabar.component.html',
  styleUrls: ['./navabar.component.scss']
})
export class NavabarComponent {

  @Input() TransferingFromparent:string;
  constructor(){
    this.TransferingFromparent='';
  }
}
