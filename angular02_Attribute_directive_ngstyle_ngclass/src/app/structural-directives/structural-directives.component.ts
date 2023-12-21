import { Component } from '@angular/core';

@Component({
  selector: 'app-structural-directives',
  templateUrl: './structural-directives.component.html',
  styleUrls: ['./structural-directives.component.css']
})
export class StructuralDirectivesComponent {
  searchText:string="";
Data=[
  {
    id:1,
    name:'jacki',
    gender:'male',
    avilabel:true
  },
  
  {
    id:1,
    name:'jacki',
    gender:'male',
    avilabel:false
  },
  
  {
    id:1,
    name:'jacki',
    gender:'male',
    avilabel:true
  },
  
  {
    id:1,
    name:'jacki',
    gender:'male',
    avilabel:true
  },
  
  {
    id:1,
    name:'jacki',
    gender:'male',
    avilabel:false
  },
  
  {
    id:1,
    name:'jacki',
    gender:'male',
    avilabel:false
  }
]
}
