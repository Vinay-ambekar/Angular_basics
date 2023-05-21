import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'part05_dierctive_task';
  name:string='';
  email:string='';
  adress:string='';
  userArray:Array<any>=[]
  onclick(){
    this.userArray.push({
      'name':this.name,
      'email':this.email,
      'address':this.adress
    })
    console.log(this.userArray)
  }
  ondelet(i:any){
    this.userArray.splice(i,1)

  }
}
