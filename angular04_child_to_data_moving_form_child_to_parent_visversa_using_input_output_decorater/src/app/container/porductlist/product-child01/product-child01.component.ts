import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-product-child01',
  templateUrl: './product-child01.component.html',
  styleUrls: ['./product-child01.component.css']
})
export class ProductChild01Component {
@Input()/*to grap data from product-list component we are using @input */
infor:{name:string,work:string,gender:string,experince:number};/* infor is new name and is going to use in product-list componet  */
}
