import { Component, OnInit } from '@angular/core';
import { CountriesService } from '../../services/countries.service';
import { Country } from '../../interfaces/country.interfaces';

@Component({
  selector: 'countries-by-country-page',
  templateUrl: './by-country-page.component.html',
  styles: ``
})
export class ByCountryPageComponent implements OnInit{

  public countries: Country[] = []
  public isLoading: boolean = false
  public initValue: string = ''

  constructor(
    private countriesService: CountriesService
  ) {}

  ngOnInit(): void {
      this.countries = this.countriesService.cacheStore.byCountries.countries
      this.initValue = this.countriesService.cacheStore.byCountries.term
  }

  searchByCountry(term: string): void {
    this.isLoading = true

    this.countriesService.searchCountries(term)
      .subscribe(countries => {
        this.countries = countries
        this.isLoading = false
      })
  }
}
