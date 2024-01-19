import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular06_ng_container';

  toggle:Boolean=true;
  ontoggle(){
this.toggle=!this.toggle
  }
}
