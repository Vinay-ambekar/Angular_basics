import { Component } from '@angular/core';
import { NgFor } from '@angular/common';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent {
salary:number=30
fruits:string[]=[
  'banana','mango','grapes','apple'
]
bckcolor:string='green'
}