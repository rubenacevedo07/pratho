import { Pipe, PipeTransform } from '@angular/core';
import { Starship } from '../app.models';

@Pipe({ name: 'starshipsFilter' })
export class HomePipe implements PipeTransform {
  transform(values: Starship[], filter: string): Starship[] {
    if (!filter || filter.length === 0) {
        return values;
    }

    if (values.length === 0) {
        return values;
    }

    return values.filter(item => item.name.indexOf(filter) !== -1);
  }
}