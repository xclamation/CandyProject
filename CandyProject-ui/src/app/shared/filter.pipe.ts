import { Pipe, PipeTransform } from '@angular/core';
import {filter} from "rxjs";
import {toRelativeImport} from "@angular/compiler-cli";

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value:any[], filterString:string, propertyName: string): any[] {
    const result: any = [];
    if (!value || filterString === '' || propertyName === '') { //all products required
      return value;
    }
    value.forEach((a:any)=>{
      if (a[propertyName].trim().toLowerCase().includes(filterString.toLowerCase())){
        result.push(a);
      }
    })
    return result;
  }

}
