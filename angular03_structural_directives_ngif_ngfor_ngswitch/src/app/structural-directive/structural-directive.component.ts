import { Component } from '@angular/core';

@Component({
  selector: 'app-structural-directive',
  templateUrl: './structural-directive.component.html',
  styleUrls: ['./structural-directive.component.css']
})
export class StructuralDirectiveComponent {
  searchText:string=''
 stringarry:string[]=['home','about','contact','terms and condition','login']
 products=[
  {
      id:1,
      name:"hello world",
      discrpiton:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis, aperiam!",
      brand:"nike",
      gender:"male",
      catogery:"foot wears",
      size:[6,7,8,9,10],
      color:["withe","red","blue"],
      price:130,
      is_in_inventory:true,
      items_left:5,
      image:"helow image",
      slug:"nike-brind",
      discount:123

    },
    {
      id:2,
      name:"hello world",
      discrpiton:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis, aperiam!",
      brand:"nike",
      gender:"male",
      catogery:"foot wears",
      size:[6,7,8,9,10],
      color:["withe","red","blue"],
      price:130,
      is_in_inventory:true,
      items_left:5,
      image:"helow image",
      slug:"nike-brind"

    },
    {
      id:3,
      name:"hello world",
      discrpiton:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis, aperiam!",
      brand:"nike",
      gender:"male",
      catogery:"foot wears",
      size:[6,7,8,9,10],
      color:["withe","red","blue"],
      price:130,
      is_in_inventory:true,
      items_left:5,
      image:"helow image",
      slug:"nike-brind",
      discount:123

    },
    {
      id:4,
      name:"hello world",
      discrpiton:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis, aperiam!",
      brand:"nike",
      gender:"male",
      catogery:"foot wears",
      size:[6,7,8,9,10],
      color:["withe","red","blue"],
      price:130,
      is_in_inventory:true,
      items_left:5,
      image:"helow image",
      slug:"nike-brind",
      discount:123

    },
    {
      id:5,
      name:"hello world",
      discrpiton:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis, aperiam!",
      brand:"nike",
      gender:"male",
      catogery:"foot wears",
      size:[6,7,8,9,10],
      color:["withe","red","blue"],
      price:130,
      is_in_inventory:true,
      items_left:5,
      image:"helow image",
      slug:"nike-brind"

    },
    {
      id:6,
      name:"hello world",
      discrpiton:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis, aperiam!",
      brand:"nike",
      gender:"male",
      catogery:"foot wears",
      size:[6,7,8,9,10],
      color:["withe","red","blue"],
      price:130,
      is_in_inventory:true,
      items_left:5,
      image:"helow image",
      slug:"nike-brind",
      discount:123

    }
    ]
  }

      


