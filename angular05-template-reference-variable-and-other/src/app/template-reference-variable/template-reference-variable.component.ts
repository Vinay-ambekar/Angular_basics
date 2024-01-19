import { Component ,ViewChild, ElementRef, ViewChildren, QueryList } from '@angular/core';

@Component({
  selector: 'app-template-reference-variable',
  templateUrl: './template-reference-variable.component.html',
  styleUrls: ['./template-reference-variable.component.css']
})
export class TemplateReferenceVariableComponent {
    @ViewChild('myInput') myInputRef?: ElementRef;/* in input tag wahat is enterd tex will go to the p tag after click the button */
    /* @viewchild  decoretor to query and get a reference of the DOM
    element in the coponent it returns the first matching element */
  inputValue: string = '';

  logInputValue() {/* this method is binded to click event  */
    this.inputValue = this.myInputRef?.nativeElement.value;
  }
  @ViewChild('myElement') element: ElementRef; // Reference to the DOM element

  ngAfterViewInit() {
    this.element.nativeElement.style.color = 'red'; // Change the element's style
  }
  /* viewchildren */

}
