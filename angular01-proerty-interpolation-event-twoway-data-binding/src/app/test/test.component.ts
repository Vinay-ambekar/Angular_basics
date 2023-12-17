import { Component } from '@angular/core';
import { first } from 'rxjs';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent {
headding:string="hello world";
number_of_porducts:number=0;
serch_text:string="text is here"

product={
  name:'iphone',
  price:780,
  color:'black',
  discount:7,
  instock:6,
  image:'https://imageio.forbes.com/specials-images/imageserve/64e74ad803781abed13b0612/Apple--iPhone--iPhone-15--iPhone-15-Pro--iPhone-15-Pro-Max--iPhone-15-release--new/0x0.jpg?format=jpg&crop=1275,956,x113,y0,safe&width=960',
  firstname:"firstname: ",
  output:"out put"
}

discount(){/* is methond name with discount*/
return this.product.price-(this.product.price*this.product.discount/100)
}
inputchange(e:any){/* this is method name with inputchange */
return this.product.output=e.target.value
}
decriment(){
if(this.number_of_porducts>0){
  this.number_of_porducts--
}
}
increment(){
if( this.number_of_porducts<this.product.instock){
this.number_of_porducts++
}
}

}
