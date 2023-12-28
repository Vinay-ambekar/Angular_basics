import { Component,EventEmitter,Input, Output } from '@angular/core';

@Component({
  selector: 'app-product-child02',
  templateUrl: './product-child02.component.html',
  styleUrls: ['./product-child02.component.css']
})
export class ProductChild02Component {
  @Input()/* this decoret flow data from parent to chiled */
  all:number=0;
  @Input()
  avialbel:number=0
  @Input()
  unavialbel:number=0
 
@Output()/* thie decorater going to bind the parent component move data from child to parent */
 /* this is a custom event created*/ selectedFilterRadioButtonChange:EventEmitter<string>=new EventEmitter<string>();/* we create a property give instance of event emitter class with type sting */

  selectorFilterRadioButton:string='All';/* value is select defualt will value be All */
 
  onselectorFilterRadioButton(){/*  whene ever the radio button change this method is call*/
     /* console.log(this.selectorFilterRadioButton)  */
   this.selectedFilterRadioButtonChange.emit(this.selectorFilterRadioButton) 
  }
}
