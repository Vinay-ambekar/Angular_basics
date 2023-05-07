import { Component } from '@angular/core';

@Component({
  selector: 'app-ngstyle',
  templateUrl: './ngstyle.component.html',
  styleUrls: ['./ngstyle.component.scss']
})
export class NgstyleComponent {
 
  theNumber:string="offline "
  constructor(){
    this.theNumber=Math.random()>0.5 ?"online":"offline" 
   
  }
  getcolor(){
    return this.theNumber ==="online" ? 'green' :'red';
  }   

}
