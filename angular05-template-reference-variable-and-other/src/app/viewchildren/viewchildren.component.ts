import { Component, ElementRef, ViewChildren,QueryList } from '@angular/core';

@Component({
  selector: 'app-viewchildren',
  templateUrl: './viewchildren.component.html',
  styleUrls: ['./viewchildren.component.css']
})
export class ViewchildrenComponent {
/*   fullname: string = '';

  @ViewChildren('ipoutvalue input') inputvaluelements: QueryList<ElementRef>;

  ngAfterViewInit() {
    // Ensure QueryList is populated after view initialization
  }
  show() {
    let name = '';
    this.inputvaluelements.forEach((el) => {
      name += el.nativeElement.value + ' ';
    });

   this.fullname = name.trim();
    console.log(this.fullname)
    console.log("hellow")
  } */

  fullname: string = '';

  @ViewChildren('in_put_value') inputvaluelements: QueryList<ElementRef>;

  ngAfterViewInit() {
    // Ensure QueryList is populated after view initialization
    this.show
  }

  show() {
    let name = '';
    this.inputvaluelements.forEach((el) => {
      // Accessing the value property of the native element
      name += el.nativeElement.value + ' ';
    });

    // Trim the trailing space and update the fullname property
    this.fullname = name.trim();

    // Log the fullname to the console
    console.log(this.fullname);
  }

/* 
  fullname: string = '';

  // Use @ViewChildren with a template reference variable on the input elements
  @ViewChildren('in_put_value input') inputElements: QueryList<ElementRef>;

  ngAfterViewInit() {
    // Ensure QueryList is populated after view initialization
  }

  show() {
    if (this.inputElements && this.inputElements.length > 0) {
      let name = '';
      this.inputElements.forEach((el) => {
        name += el.nativeElement.value + ' ';
      });
      this.fullname = name.trim();
      console.log(this.fullname);
    } else {
      console.log('No input elements found in QueryList.');
    }
  }
 */
}
