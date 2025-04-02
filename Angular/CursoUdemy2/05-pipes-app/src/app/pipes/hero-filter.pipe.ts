import { Pipe, type PipeTransform } from '@angular/core';
import { Hero } from '../interfaces/hero.interface';

@Pipe({
  name: 'heroFilter',
})
export class HeroFilterPipe implements PipeTransform {

  transform(value: Hero[], filter: string): Hero[] {
    if (!filter) return value;

    return value.filter(hero => {
      const lowerName = hero.name.toLowerCase();

      return lowerName.includes(filter.toLowerCase());
    });
  }

}
