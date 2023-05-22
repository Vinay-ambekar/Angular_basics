import { Injectable } from "@angular/core"


export class PostService{
/* 
@Injectable({
    providedIn:'root',
}) */

    postList:Array<any>=[
        {id:1,postTilte:'post 1'},
        {id:2,postTilte:'post 2'},
        {id:3,postTilte:'post 3'},
        {id:4,postTilte:'post 4'},
        {id:5,postTilte:'post 5'},
        {id:6,postTilte:'post 6'},
    ]
}