import { Component,OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss']
})
export class PostListComponent implements OnInit{

posts=[

  {
    id:1,
    title:"tietle 1",
    content:'lorem ipsum is simply dummy text of the printing and typeseting industry.'
  },
  {
    id:2,
    title:"tietle 2",
    content:'lorem ipsum is simply dummy text of the printing and typeseting industry.'
  },
  {
    id:3,
    title:"tietle 3",
    content:'lorem ipsum is simply dummy text of the printing and typeseting industry.'
  },
  {
    id:4,
    title:"tietle 4",
    content:'lorem ipsum is simply dummy text of the printing and typeseting industry.'
  },
  {
    id:5,
    title:"tietle 5",
    content:'lorem ipsum is simply dummy text of the printing and typeseting industry.'
  }
]


constructor(private route:ActivatedRoute){

}


ngOnInit(): void {
  this.route.queryParamMap.subscribe(value=>{
    
    const page=value.get('page')
    const order=value.get('orderBy')
    console.log(page)
    console.log(order)
  })
}



}
