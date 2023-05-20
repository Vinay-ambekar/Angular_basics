import { Component } from '@angular/core';

@Component({
  selector: 'app-ngswitch',
  templateUrl: './ngswitch.component.html',
  styleUrls: ['./ngswitch.component.scss']
})
export class NgswitchComponent {
  stepform:string='this different message';
 onclick(status:string){
 this.stepform=status
 }
}
