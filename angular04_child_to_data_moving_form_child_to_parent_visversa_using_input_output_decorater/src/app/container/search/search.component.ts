import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {
  search:string="";

  @Output()/* child to parent */
  searchtextchange:EventEmitter<string>=new EventEmitter<string>();/* custom event */

  onsearchtextchange(){
    this.searchtextchange.emit(this.search);
  }
}
