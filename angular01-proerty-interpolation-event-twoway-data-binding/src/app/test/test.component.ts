import { Component } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent {
headding:string="hello world";

product={
  name:'iphone',
  price:780,
  color:'black',
  discount:7,
  instock:6,
  image:'https://imageio.forbes.com/specials-images/imageserve/64e74ad803781abed13b0612/Apple--iPhone--iPhone-15--iPhone-15-Pro--iPhone-15-Pro-Max--iPhone-15-release--new/0x0.jpg?format=jpg&crop=1275,956,x113,y0,safe&width=960'
}
discount(){/* is methond name with discount*/
return this.product.price-(this.product.price*this.product.discount/100)
}


}
