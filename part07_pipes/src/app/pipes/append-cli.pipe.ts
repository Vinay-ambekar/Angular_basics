import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'appendCLI'
})
export class AppendCLIPipe implements PipeTransform {

  transform(value: string, length:number) {
    if(!length){
      length=20;
    }

    return value.substring(0,length);
  }

}
