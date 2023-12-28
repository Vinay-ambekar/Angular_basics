import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-porductlist',
  templateUrl: './porductlist.component.html',
  styleUrls: ['./porductlist.component.css']
})
export class PorductlistComponent {

  info=[
{name:"Liam",gender:"female",work:"from office" ,experince:5,attend:false},
{name:"Emma",gender:"male",work:"hybrid" ,experince:4,attend:false},
{name:"Noah",gender:"male",work:"hybrid" ,experince:5,attend:false},
{name:"Oliva",gender:"female",work:"hybrid" ,experince:6,attend:false},
{name:"Mason",gender:"female",work:"hybrid" ,experince:2,attend:false},
{name:"Ava",gender:"female",work:"from home" ,experince:2,attend:false},
{name:"Ethan",gender:"male",work:"from home" ,experince:3,attend:false},
{name:"Sophia",gender:"male",work:"from home" ,experince:3,attend:true},
{name:"Alex",gender:"female",work:"from home" ,experince:5,attend:true},
{name:"Chris",gender:"male",work:"from home" ,experince:5,attend:true},
{name:"Diana",gender:"male",work:"remote" ,experince:5,attend:true},
{name:"eric",gender:"male",work:"remote" ,experince:8,attend:true},
{name:"George",gender:"female",work:"remote" ,experince:8,attend:true},
{name:"Helen",gender:"female",work:"remote" ,experince:8,attend:true},
{name:"Ian",gender:"female",work:"remote" ,experince:8,attend:false},
{name:"Ivy",gender:"male",work:"remote" ,experince:5,attend:false},
{name:"jack",gender:"male",work:"from office" ,experince:5,attend:true},
{name:"leo",gender:"male",work:"from office" ,experince:5,attend:false},
{name:"mia",gender:"male",work:"from office" ,experince:5,attend:false},
{name:"noah",gender:"male",work:"from office" ,experince:9,attend:false},
{name:"peter",gender:"female",work:"from home" ,experince:9,attend:true},
{name:"bob",gender:"female",work:"from home" ,experince:9,attend:true},
{name:"charlis",gender:"male",work:"from office" ,experince:5,attend:false},
{name:"edward",gender:"male",work:"from office" ,experince:5,attend:true},

                  


  ]
  totalMember=this.info.length;
  totalnumberavailbel=this.info.filter(p => p.attend === true).length; 
  notavilbel=this.info.filter(p => p.attend === false).length;
 
  selectedfilteradiobutton:string='All';
  onfilterChange(value:string){
    /* console.log(value) */
   this.selectedfilteradiobutton=value
  }

@Input()
  serchtext:string="";

}
