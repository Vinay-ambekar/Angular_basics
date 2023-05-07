import { Component } from '@angular/core';

@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.scss']
})
export class DirectivesComponent {

  serverName:string="flase"
  servercreated=false;
  oncreatserver(){
 this.servercreated=true;

  }
  
  theNumber:string="offline "
  constructor(){
    this.theNumber=Math.random()>0.5 ?"online":"offline" 
   
  }
  getcolor(){
    return this.theNumber ==="online" ? 'green' :'red';
  }   
}
