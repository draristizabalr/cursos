import { Component, input } from '@angular/core';
import { Country } from '../../../../interfaces/country.interface';
import { DecimalPipe } from '@angular/common';

@Component({
  selector: 'information-section-country',
  imports: [DecimalPipe],
  templateUrl: './information-section-country.component.html',
})
export class InformationSectionCountryComponent {
  country = input.required<Country>();

  get timezones() {
    const timezones = this.country().timezones.map((timezone) => timezone.replace('UTC', ''));
    return timezones.join(', ') + '.';
  }

  get languages() {
    const languages = Object.values(this.country().languages);
    return languages.join(', ');
  }
}
