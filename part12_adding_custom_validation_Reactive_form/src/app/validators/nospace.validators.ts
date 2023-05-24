import { AbstractControl,ValidationErrors } from "@angular/forms";



export class nospace{

    static nospaceValidations(control:AbstractControl):ValidationErrors| null{

let controlValue=control.value   as string;
if (controlValue.indexOf('')>=0){
    return {nospaceValidator:true}
}else{
    return null;
}

}
}