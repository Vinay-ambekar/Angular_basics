import { Component } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.scss']
})
export class DataBindingComponent {

  serverId: number=10;
  serverStratus:string='offline'

  getServerStatus(){
    return this.serverStratus;
  }
  allow=true
constructor(){
  setTimeout(() => {
    this.allow=false
    
  }, 2000);
}
servercreationstatus:string="no servere was created"
oncreatserver(){
  this.servercreationstatus="server was created"
}

servername=''
onupdateservername(event:Event){/*event:Event */
 this.servername=(<HTMLInputElement>event.target).value/* <HTMLInputElement> ?*/
}
texttochange:string=" "


}
