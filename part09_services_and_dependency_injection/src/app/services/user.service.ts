import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  postList:Array<any>=[
    {id:1,postTilte:'post 1'},
    {id:2,postTilte:'post 2'},
    {id:3,postTilte:'post 3'},
    {id:4,postTilte:'post 4'},
    {id:5,postTilte:'post 5'},
    {id:6,postTilte:'post 6'},
    {id:7,postTilte:'post 7'},
  ]

addApp(data:any){
  this.postList.push(data)

}
}
