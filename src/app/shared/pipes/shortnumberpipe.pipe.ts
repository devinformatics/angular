import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'shortNumber'
})
export class ShortNumberPipe implements PipeTransform {

  transform(input: any, args?: any): any {
    var exp, rounded,
      suffixes = ['K', 'M', 'G', 'T', 'P', 'E'];

    if (Number.isNaN(input)) {
      return null;
    }

    if (input < 1000) {
      return input;
    }

   // exp = Math.floor(Math.log(input) / Math.log(1000));

    return '$' +this.numberWithCommas((input / Math.pow(1000, 1)).toFixed(args)) + suffixes[0];


  }
  numberWithCommas(x) {
    var parts = x.toString().split(".");
    parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    return parts.join(".");
  }
}
