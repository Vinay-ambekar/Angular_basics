import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'part02_Dtat_binding';
  message:string="i am string interpolation "
  imgurl:string='https://wallpapercave.com/dwp1x/wp2637598.jpg'
  bool:boolean=true
  buttonclick(){
    console.log('button is clicked')
  }
/*   onKeyup($event:any){
  /*   console.log($event.keyCode) */
  /* traditional method to enter the key */
   /*  if($event.keyCode == 13){
      console.log('enter key pressed')
    } 
  } */

/* onKeyup(){
  console.log('enter key is pressed')
} */
/* onKeyup($event:any){

console.log($event.target.value);

}  */
onKeyup(username:any){

  console.log(username);
  
  }
  userName01:string='';

  twowaykeyup(){
    console.log(this.userName01)
  }

}
