import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'summary'
})
export class SummaryPipe implements PipeTransform {

  transform(value: any, maxLength?: number): any {
    if (!value) {
      return null;
    } else {
      const x = (maxLength) ? maxLength : 20;
      // .substr() is One of JavaScript String Method
      return value.substr(0, x) + ' <more...>' ;
    }
  }

}
