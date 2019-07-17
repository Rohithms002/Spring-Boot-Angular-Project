import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterPipe'
})
export class FilterPipePipe implements PipeTransform {

  transform(value: string, ...args: any[]): any {
    if(value===null){
      return value;
    }else{
      return("value="+ value.length)
    }
  }

}
