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
}
