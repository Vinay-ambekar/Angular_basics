import { Component,Output } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = '1_angular';
  parentmessage:string='message coming from parent component or app component and message has been changed'

}
