import { Component } from '@angular/core';
import { CountriesService } from '../../services/countries.service';
import { Country } from '../../interfaces/capital.interfaces';

@Component({
  selector: 'countries-by-country-page',
  templateUrl: './by-country-page.component.html',
  styles: ``
})
export class ByCountryPageComponent {

  public countries: Country[] = []

  constructor(
    private countriesService: CountriesService
  ) {}


  searchByCountry(term: string): void {
    this.countriesService.searchCountries(term)
      .subscribe(countries => {
        this.countries = countries
      })
  }
}
