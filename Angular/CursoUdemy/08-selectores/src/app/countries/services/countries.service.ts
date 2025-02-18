import { Injectable } from '@angular/core';
import { Country, Region, SmallCountry } from '../interfaces/country.interfaces';
import { map, Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CountriesService {

  private base_url = 'https://restcountries.com/v3.1'

  private _regions: Region[] = [ Region.Africa, Region.America, Region.Asia, Region.Europe, Region.Oceania ];

  constructor(
    private http: HttpClient
  ) { }

  get regions(): Region[] {
    return [...this._regions];
  }

  getCountriesByRegion(region: Region): Observable<SmallCountry[]> {
    if (!region) return of([]);

    const url = `${this.base_url}/region/${ region}?fields=name,cca3,borders`;

    return this.http.get<Country[]>(url)
      .pipe(
        map( countries => countries.map( country => ({
          name: country.name.common,
          cca3: country.cca3,
          borders: country.borders ?? []
        })))
      );
  }
}
