import { FormControl, NgForm } from '@angular/forms';
import { Component } from '@angular/core';
import { __values } from 'tslib';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'part10_Template_Driven_Forms';
  onsubmit(f:NgForm){
    console.log(f.value)

  }
/*   getvalue(fullName:FormControl){
    console.log(fullName);
  } */
}
