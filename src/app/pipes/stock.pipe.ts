import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'stock'
})
export class StockPipe implements PipeTransform {

  transform(value: number, ...args: unknown[]): unknown {
    let stockItems =0;
    if(value && typeof value ==='number' && value <10){
      return "Last 10 items in stock"
    }
    if(!value && typeof value ==='number'){
      return "Out of stock"
    }
    return value;
  }

};
