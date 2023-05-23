import { Component } from '@angular/core';
import { FormGroup,FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  form:any
  

  title = 'part11_reactive_forms';
  emailRegex:string='[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$';
  minlength:number=5
  contact:string='[0-9]{3}-[0-9]{2}-[0-9]{3}';
constructor(){
  this.form=new FormGroup({
    fullName:new FormControl('',[
      Validators.required,
      Validators.minLength(this.minlength)
    ]),
    email:new FormControl('',[
      Validators.required,
      Validators.pattern(this.emailRegex)
    ]),
   





    });
    
 

 } 




    get Email(){
      return this.form.get('email')
}

get FullName(){
  return this.form.get('fullName')
}
get Address(){
  return this.form.get('address')
}

onsubmit(){
  console.log(this.form.value)
}









}
