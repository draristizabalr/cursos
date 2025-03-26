import { Component, input } from '@angular/core';
import { Country } from '../../../interfaces/country.interface';
import { DecimalPipe } from '@angular/common';
import { FlagCountryComponent } from "./flag-country/flag-country.component";
import { InformationSectionCountryComponent } from "./information-section-country/information-section-country.component";

@Component({
  selector: 'country-information',
  imports: [FlagCountryComponent, InformationSectionCountryComponent],
  templateUrl: './country-information.component.html',
})
export class CountryInformationComponent {
  country = input.required<Country>();
}
