import { Component } from '@angular/core';
import { FormBuilder,Validators} from '@angular/forms';
import { nospace } from './validators/nospace.validators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'part12_adding_custom_validation_Reactive_form';
  form:any;
  constructor(fb:FormBuilder){
    this.form=fb.group({
      username:[' ', [
        Validators.required,
        Validators.minLength(5),
        nospace.nospaceValidations
      ]],
      password:['',[Validators.required]]

    })
}

get fc(){
  return this.form.controls;
}




}
