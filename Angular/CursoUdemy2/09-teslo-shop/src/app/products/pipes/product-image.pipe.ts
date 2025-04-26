import { Pipe, type PipeTransform } from '@angular/core';
import { environment } from '@environments/environment';

@Pipe({
  name: 'productImage',
})
export class ProductImagePipe implements PipeTransform {

  transform(value: string | string[]): string {
    if (!value || value.length === 0) {
      return environment.imagePlaceholder;
    }

    const url = environment.url + '/files/product/'

    if (Array.isArray(value)) {
      return url + value[0];
    }

    return url + value;
  }

}
