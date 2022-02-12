import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'usdEuro',
})
export class UsdEuroPipe implements PipeTransform {
  transform(value: number, ...args: number[]): unknown {
    const [price] = args;
    return value * price;
  }
}
