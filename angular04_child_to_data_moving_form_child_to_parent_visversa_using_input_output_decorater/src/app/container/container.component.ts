import { Component } from '@angular/core';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.css']
})
export class ContainerComponent {
  searchtext:string=""

  setserchtext(value:string){
 this.searchtext=value
  }

}
