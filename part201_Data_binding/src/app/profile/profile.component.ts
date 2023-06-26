import { Component } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent {
  name:string='ramesh';
  age:number=30;
  status:string='coder';
  salary:number=100;
 getmetho(){
   return 'i ma batman'
 }
 
 number:number=Math.floor(Math.random()*3)
 btncolor:string;
 isdisable:boolean=true
 convert(){
   alert(this.salary*74)
 }
 inputValue:string='ramesh';
 
 getinuput(e:any){
 this.inputValue=e.target.value
 } 
 secondinput:string='hellow'
 thirdinput:string='thirdngmodel two way data binding'
 constructor(){
 setTimeout(()=>{
   this.isdisable=false
 },3000)
 const colors=['red','pink','yellow','blue']
 this.btncolor=colors[Math.floor(Math.random()*3)]
 
 }
}
