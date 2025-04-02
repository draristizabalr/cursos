import { Pipe, type PipeTransform } from '@angular/core';
import { Hero } from '../interfaces/hero.interface';

@Pipe({
  name: 'heroSortBy',
})
export class HeroSortByPipe implements PipeTransform {

  transform( value: Hero[], sortBy: keyof Hero | null ): Hero[] {
    if (!sortBy) return value;

    return value.sort((curr, prev) => {
      if(curr[sortBy] > prev[sortBy]) return 1;
      return -1;
    });
  }

}
