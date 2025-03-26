import { Component, input } from '@angular/core';
import { Country } from '../../../../interfaces/country.interface';

@Component({
  selector: 'flag-country',
  imports: [],
  templateUrl: './flag-country.component.html',
})
export class FlagCountryComponent {
  country = input.required<Country>();
}
