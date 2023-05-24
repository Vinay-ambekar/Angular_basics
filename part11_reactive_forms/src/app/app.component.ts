import { Component } from '@angular/core';
import { FormGroup,FormControl, Validators, FormArray, FormBuilder} from '@angular/forms';

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
  

 // constructor(){

 // reactive form builld
constructor(fb:FormBuilder){
this.form=fb.group({
fullName:['',[
  Validators.required,
  Validators.minLength(this.minlength)
]],
email:['',[
  Validators.required,
  Validators.pattern(this.emailRegex)
]],
address:['',[Validators.required]],

skills:fb.array([]),

billaddress:fb.group({
  billnumber:['',Validators.required]
})

}) 

/* 
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

    skills:new FormArray([]),
    // nested form groups 
    billaddress:new FormGroup({
      billnumber:new FormControl('',[
        Validators.required,
      ]), 
      
    })


  }); */

  

  this.contactdetails=new FormGroup({
    shippingaddress:new FormControl('',Validators.required),
    contactNO:new FormControl('',[
      Validators.required,
      Validators.pattern(this.contact)
    ])
  })
  

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
get Skills(){
  return this.form.get('skills') as FormArray;
}



addskills(skills:HTMLInputElement){
/*  (this.form.get('skills') as FormArray).push(
  new FormControl(skills.value)
 ) */
 this.Skills.push(
  new FormControl(skills.value)
 )
 skills.value='';
 console.log(this.form.value)
}

removeSkills(index:any){
  this.Skills.removeAt(index)
}






}
