import { Component, OnInit } from '@angular/core';
import { CountriesService } from '../../services/countries.service';
import { Country } from '../../interfaces/country.interfaces';
import { Region } from '../../interfaces/region.type';

@Component({
  selector: 'app-by-region',
  templateUrl: './by-region.component.html',
  styles: ``
})
export class ByRegionComponent implements OnInit{

  public countries: Country[] = []
  public regions: Region[] = ['Africa', 'America', 'Asia', 'Europe', 'Oceania']
  public selectedRegion: Region = ''
  public isLoading: boolean = false

  constructor(
    private countriesService: CountriesService
  ) {}

  ngOnInit(): void {
      this.countries = this.countriesService.cacheStore.byRegion.countries
      this.selectedRegion = this.countriesService.cacheStore.byRegion.region
  }

  searchByRegion(region: Region) {

    this.isLoading = true

    this.selectedRegion = region

    this.countriesService.searchRegion(region)
      .subscribe(countries => {
        this.countries = countries
        this.isLoading = false
      })
  }
}
