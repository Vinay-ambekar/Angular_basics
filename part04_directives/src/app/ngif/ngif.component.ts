import { Component } from '@angular/core';

@Component({
  selector: 'app-ngif',
  templateUrl: './ngif.component.html',
  styleUrls: ['./ngif.component.scss']
})
export class NgifComponent {
  myarray:Array<any>=[ ];
addnew(){
 this.myarray.push({name:'gandu'})
}
ondelet(index:any){
  this.myarray.splice(index,1)

}
}
