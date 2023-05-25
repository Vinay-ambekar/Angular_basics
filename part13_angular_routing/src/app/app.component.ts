import { Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'part13_angular_routing';
  constructor(){}
    ngOnInit(){
 const obsTest$= new Observable(observe =>{
  //console.log('printed from observer')
  observe.next('returned from observable')
  observe.next('returned from observable return again')
  setTimeout(()=>{
observe.next('this is from timeout func')
  },2000)
  observe.next('returned from observablereturn again and again')
  observe.next('returned from observablereturn again agian and angain')
 }).subscribe(value=>{
  console.log(value)
 });
 
 const obsTest=function(){
  //console.log('printed form function')
  return 'return from function'
 }
 const returnData=obsTest();
 console.log(returnData)

    }



 }
