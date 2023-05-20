import { Component } from '@angular/core';

@Component({
  selector: 'app-directives01',
  templateUrl: './directives01.component.html',
  styleUrls: ['./directives01.component.scss']
})
export class Directives01Component {
newarray:Array<any>=[
  {
    id:1,
    name:'jacki',
    state:'car',
    marks:254,
  },
  {
    id:2,
    name:'haki',
    state:'kar',
    marks:100,
  },
  {
    id:3,
    name:'chaki',
    state:'lar',
    marks:200,
  }
]
addnew(){
  this.newarray.push({name:'shaki'})
}
delet(index:any){
  
  this.newarray.splice(index,1)
}
}
