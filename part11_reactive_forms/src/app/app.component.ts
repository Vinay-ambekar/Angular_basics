import { Component } from '@angular/core';
import { FormGroup,FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  form:any
  contactdetails:any


  title = 'part11_reactive_forms';
  emailRegex:string='[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$';
  minlength:number=5
  contact:string='[6789][0-9]{9}';
  

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
    address: new FormControl('',Validators.required),
    /* nested form groups */
    billaddress:new FormGroup({
      billnumber:new FormControl('',[
        Validators.required,
      ])
    })
  });



  this.contactdetails=new FormGroup({
    shippingaddress:new FormControl('',Validators.required),
    contactNO:new FormControl('',[
      Validators.required,
      Validators.pattern(this.contact)
    ])
  })
  

 } 
 get BillNumber(){
 return this.form.get('controls.billaddress.billnumber')
 }


/*    get Email(){
      return this.form.get('email')
}

get FullName(){
  return this.form.get('fullName')
}
get Address(){
  return this.form.get('address')
} */

onsubmit(){
  console.log(this.form.value)
}









}
