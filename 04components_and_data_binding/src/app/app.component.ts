import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = '04components_and_data_binding';

  serverElements : any=[];
  newServerName = '';
  newServerContent = '';

  firstnale:string="hellow world"
  lastname:string="2 hellow world"
  display:boolean=false

  onclick(){/* method */
  this.display=true
  }
  onAddServer() {
    this.serverElements.push({
      type: 'server',
      name: this.newServerName,
      content: this.newServerContent
    });
  }

  onAddBlueprint() {
    this.serverElements.push({
      type: 'blueprint',
      name: this.newServerName,
      content: this.newServerContent
    });
  }

}
